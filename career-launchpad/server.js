/* ============================================================
   IS Career Launchpad — grading proxy + static file server
   ------------------------------------------------------------
   Serves the app AND hides the Z.ai API key: the browser posts
   to /api/grade, this server attaches the key and forwards the
   request to Z.ai. The key never reaches the browser.

   Run:   node server.js          →  http://localhost:8642
   Key:   read from ai-key.js (gitignored — see ai-key.example.js)
   No dependencies. Node 18+ (uses built-in fetch).
   ============================================================ */
const http = require("http");
const fs = require("fs");
const path = require("path");

/* --- key (gitignored file, never committed) --- */
let KEY;
try {
  KEY = require("./ai-key.js");
} catch (e) {
  console.error("\n  Missing ai-key.js next to server.js.");
  console.error("  Copy ai-key.example.js to ai-key.js and paste your Z.ai key.\n");
  process.exit(1);
}
if (!KEY || typeof KEY !== "string" || KEY.includes("YOUR_ZAI")) {
  console.error("\n  ai-key.js does not contain a real key. Paste your Z.ai key into it.\n");
  process.exit(1);
}

const PORT = process.env.PORT ? Number(process.env.PORT) : 8642;
const UPSTREAM = "https://api.z.ai/api/paas/v4/chat/completions";
const UPSTREAM_TIMEOUT_MS = 75000;
const MAX_BODY_BYTES = 300 * 1024;
const ROOT = __dirname;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js":   "text/javascript; charset=utf-8",
  ".css":  "text/css; charset=utf-8",
  ".svg":  "image/svg+xml",
  ".png":  "image/png",
  ".ico":  "image/x-icon",
  ".json": "application/json; charset=utf-8",
  ".txt":  "text/plain; charset=utf-8"
};

/* --- trivial per-IP rate limit: 30 grade calls / 5 min --- */
const hits = new Map(); // ip -> {n, resetAt}
function rateLimited(ip) {
  const now = Date.now();
  let h = hits.get(ip);
  if (!h || now > h.resetAt) { h = { n: 0, resetAt: now + 5 * 60 * 1000 }; hits.set(ip, h); }
  h.n++;
  if (hits.size > 5000) hits.clear(); /* safety valve */
  return h.n > 30;
}

function send(res, status, body, type) {
  res.writeHead(status, {
    "Content-Type": type || "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Cache-Control": "no-store"
  });
  /* Buffers and strings go out as-is; plain objects get JSON-encoded */
  res.end(body instanceof Buffer || typeof body === "string" ? body : JSON.stringify(body));
}

async function handleGrade(req, res) {
  const ip = req.socket.remoteAddress || "?";
  if (rateLimited(ip)) return send(res, 429, { error: { message: "Too many grade requests — try again in a few minutes." } });

  let raw = "";
  let over = false;
  req.on("data", c => { raw += c; if (raw.length > MAX_BODY_BYTES) { over = true; req.destroy(); } });
  req.on("error", () => {});
  req.on("end", async () => {
    if (over) return send(res, 413, { error: { message: "Payload too large." } });
    let payload;
    try { payload = JSON.parse(raw); } catch (e) { return send(res, 400, { error: { message: "Invalid JSON body." } }); }

    /* keep server-side control of what is sent upstream */
    payload.model = "glm-4.5-flash";
    payload.thinking = { type: "disabled" };
    payload.response_format = { type: "json_object" };
    payload.temperature = typeof payload.temperature === "number" ? payload.temperature : 0.3;
    payload.max_tokens = Math.min(Number(payload.max_tokens) || 2600, 4000);
    if (!Array.isArray(payload.messages)) return send(res, 400, { error: { message: "messages[] required." } });

    const ctl = new AbortController();
    const timer = setTimeout(() => ctl.abort(), UPSTREAM_TIMEOUT_MS);
    let up;
    try {
      up = await fetch(UPSTREAM, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": "Bearer " + KEY },
        signal: ctl.signal,
        body: JSON.stringify(payload)
      });
    } catch (e) {
      clearTimeout(timer);
      const msg = e.name === "AbortError" ? "Grading upstream timed out." : "Could not reach Z.ai: " + e.message;
      return send(res, 502, { error: { message: msg } });
    }
    clearTimeout(timer);

    const text = await up.text();
    if (!up.ok) {
      let msg = "Z.ai HTTP " + up.status;
      try { const j = JSON.parse(text); if (j.error && j.error.message) msg = j.error.message; } catch (e) {}
      return send(res, 502, { error: { message: msg } });
    }
    try { send(res, 200, JSON.parse(text)); }
    catch (e) { send(res, 502, { error: { message: "Unparseable upstream response." } }); }
  });
}

function serveStatic(req, res) {
  const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
  let rel = urlPath === "/" ? "index.html" : urlPath.replace(/^\/+/, "");
  const file = path.normalize(path.join(ROOT, rel));
  if (!file.startsWith(ROOT)) return send(res, 403, { error: { message: "Forbidden" } });
  /* never serve the key file — it exists on disk for the file:// fallback and the server only */
  if (path.basename(file) === "ai-key.js") return send(res, 404, "<h1>404</h1>", "text/html; charset=utf-8");
  fs.readFile(file, (err, buf) => {
    if (err) return send(res, 404, "<h1>404</h1><p><a href=\"/\">Back to the Launchpad</a></p>", "text/html; charset=utf-8");
    send(res, 200, buf, MIME[path.extname(file).toLowerCase()] || "application/octet-stream");
  });
}

const server = http.createServer((req, res) => {
  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "3600"
    });
    return res.end();
  }
  if (req.method === "POST" && req.url.split("?")[0] === "/api/grade") return handleGrade(req, res);
  if (req.method === "GET") return serveStatic(req, res);
  send(res, 405, { error: { message: "Method not allowed." } });
});

server.listen(PORT, () => {
  console.log("  IS Career Launchpad running at  http://localhost:" + PORT);
  console.log("  Grading proxy: POST /api/grade  (key stays on the server)");
});
