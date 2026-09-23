#!/usr/bin/env node
/* Strict verification for authored guide part files (dev only).
   Beyond validate.js/check.js, this checks each authored chapter against the
   actual scripture text chunks: every key verse's ref must point at the exact
   verse position in that chapter, and the quote must be the full verse or a
   true OPENING PORTION of it (mid-verse starts are rejected). Also checks
   summary/context/takeaway lengths, quiz shape + answer-index balance, and
   duplicate question stems (within a book; across all books with --all).

   Run (from the scripture-launchpad folder):
     node tools/verify-guides.js data/nt-01-matt.js
     node tools/verify-guides.js --all                                  */
global.window = global;
const fs = require("fs"), path = require("path");
const DATA = path.join(__dirname, "..", "data");
fs.readdirSync(DATA)
  .filter(f => f === "canon.js" || /^text-.+\.js$/.test(f))
  .forEach(f => require(path.join(DATA, f)));
const SLP = window.SLP, T = window.SLP_TEXT;

const byTitle = {}, byId = {};
SLP.books.forEach(b => { byId[b.id] = b; byTitle[b.title.toLowerCase()] = b; });
byTitle["psalm"] = byTitle["psalms"];
byTitle["song of songs"] = byTitle["song of solomon"];
byTitle["d&c"] = byTitle["doctrine & covenants"];
byTitle["doctrine and covenants"] = byTitle["doctrine & covenants"];

const norm = s => String(s).replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"').replace(/\s+/g, " ").trim();
const words = s => norm(s).split(" ").filter(Boolean).length;

const args = process.argv.slice(2);
const all = args.includes("--all");
const files = (all
  ? fs.readdirSync(DATA).filter(f => /^(ot|nt)-.+\.js$/.test(f))
  : args.filter(a => a.endsWith(".js"))
).map(f => f.includes("/") || f.includes("\\") ? f : path.join(DATA, f));
if (!files.length) { console.error("usage: node tools/verify-guides.js data/<part>.js [...] | --all"); process.exit(1); }

let problems = 0, chapters = 0, versesChecked = 0;
const flag = (tag, msg) => { console.log("  X " + tag + ": " + msg); problems++; };
const stemsBook = new Map();   // full-question dupes within a book
const stemsAll = new Map();    // full-question dupes across all books (--all)
const aCount = { 0: 0, 1: 0, 2: 0, 3: 0 };

for (const f of files) {
  const before = {}; SLP.books.forEach(b => before[b.id] = (b.chapters || []).length);
  try { require(path.resolve(f)); }
  catch (e) { console.log(f + ": LOAD FAIL — " + e.message); problems++; continue; }
  const fileTag = path.basename(f);
  const got = [];
  SLP.books.forEach(b => {
    const ch = b.chapters || [];
    for (let i = before[b.id]; i < ch.length; i++) got.push([b, ch[i]]);
  });
  if (!got.length) { console.log(fileTag + ": pushed no chapters (wrong file?)"); problems++; continue; }
  console.log(fileTag + ": " + got.length + " chapters");

  for (const [b, c] of got) {
    const tag = b.id + ":" + c.n;
    chapters++;
    if (!Number.isInteger(c.n) || c.n < 1 || c.n > b.chapterCount) flag(tag, "n out of range");
    if (!c.summary || words(c.summary) < 80 || words(c.summary) > 180) flag(tag, "summary " + (c.summary ? words(c.summary) + " words" : "missing") + " (want 80-180)");
    if (!c.context || norm(c.context).length < 20 || norm(c.context).length > 260) flag(tag, "context missing or " + (c.context ? norm(c.context).length : 0) + " chars (want 20-260)");
    if (!c.takeaway || norm(c.takeaway).length < 15 || norm(c.takeaway).length > 170) flag(tag, "takeaway missing or " + (c.takeaway ? norm(c.takeaway).length : 0) + " chars (want 15-170)");

    if (!Array.isArray(c.keyVerses) || c.keyVerses.length < 2 || c.keyVerses.length > 3) flag(tag, "keyVerses count " + (c.keyVerses ? c.keyVerses.length : "none") + " (want 2-3)");
    (c.keyVerses || []).forEach(kv => {
      if (!kv || !kv.ref || !kv.text) { flag(tag, "keyVerse missing ref/text"); return; }
      const m = kv.ref.match(/^(.+?)\s+(\d+):(\d+)$/);
      if (!m) { flag(tag, "unparsable ref \"" + kv.ref + "\" (want \"Book C:V\")"); return; }
      let rb = byTitle[m[1].toLowerCase()];
      if (!rb && /official declarations?/.test(m[1].toLowerCase())) rb = byId["od-" + m[2]];
      if (!rb) { flag(tag, "ref book unknown: " + m[1]); return; }
      if (rb.id !== b.id) { flag(tag, "ref book " + m[1] + " is not this book (" + b.id + ")"); return; }
      const cn = Number(m[2]), vn = Number(m[3]);
      if (cn !== c.n && !/^od-/.test(rb.id)) { flag(tag, "ref " + kv.ref + " points outside chapter " + c.n); return; }
      const bkT = T[b.id] || {};
      const verses = Array.isArray(bkT.verses) ? bkT.verses : bkT[cn];
      if (!Array.isArray(verses) || !verses[vn - 1]) { flag(tag, "ref " + kv.ref + " has no text at that position"); return; }
      versesChecked++;
      const verse = norm(verses[vn - 1]), q = norm(kv.text);
      if (words(kv.text) < 8) flag(tag, "quote too short at " + kv.ref);
      if (q === verse) return;
      if (verse.startsWith(q)) {
        // opening portion: reject only if it ends mid-word
        if (verse.length > q.length && /\w$/.test(q) && /^\w/.test(verse.slice(q.length))) flag(tag, "quote at " + kv.ref + " ends mid-word");
        return;
      }
      // is it at least inside the verse (diagnostic: mid-verse start)?
      if (verse.includes(q)) flag(tag, "MID-VERSE QUOTE at " + kv.ref + " — must start at the verse's first word");
      else flag(tag, "quote at " + kv.ref + " NOT found in the verse text");
    });

    if (!Array.isArray(c.quiz) || c.quiz.length !== 3) { flag(tag, "quiz length " + (c.quiz ? c.quiz.length : "none") + " (want 3)"); continue; }
    const idxs = [];
    c.quiz.forEach(q => {
      if (!q || !norm(q.q)) { flag(tag, "quiz question missing"); return; }
      if (norm(q.q).length < 15) flag(tag, "quiz question too short");
      if (!Array.isArray(q.choices) || q.choices.length !== 4) { flag(tag, "quiz choices length " + (q.choices ? q.choices.length : "none")); return; }
      const cs = q.choices.map(norm);
      if (new Set(cs.map(s => s.toLowerCase())).size !== 4) flag(tag, "duplicate choices: " + cs.join(" | "));
      if (cs.some(s => s.length < 2 || s.length > 110)) flag(tag, "choice length out of range");
      if (!(Number.isInteger(q.a) && q.a >= 0 && q.a <= 3)) flag(tag, "answer index bad: " + q.a);
      else idxs.push(q.a);
      if (!q.why || norm(q.why).length < 15) flag(tag, "quiz why missing/too short");
    });
    idxs.forEach(a => aCount[a]++);
    if (idxs.length === 3 && idxs[0] === idxs[1] && idxs[1] === idxs[2]) flag(tag, "all 3 answers at index " + idxs[0]);
    c.quiz.forEach(q => {
      const stem = b.id + "||" + norm(q && q.q).toLowerCase();
      if (stemsBook.has(stem)) flag(tag, "duplicate question (same book, first at " + stemsBook.get(stem) + "): \"" + norm(q.q) + "\"");
      else stemsBook.set(stem, tag);
      if (all) {
        const g = norm(q && q.q).toLowerCase();
        if (stemsAll.has(g) && stemsAll.get(g) !== b.id) console.log("  ~ cross-book dupe (not counted): \"" + norm(q.q) + "\" in " + b.id + " and " + stemsAll.get(g));
        else stemsAll.set(g, b.id);
      }
    });
  }
}

const tot = aCount[0] + aCount[1] + aCount[2] + aCount[3];
if (tot) {
  const dist = [0, 1, 2, 3].map(i => (100 * aCount[i] / tot).toFixed(1) + "%");
  console.log("answer distribution:", dist.join(" / "));
  [0, 1, 2, 3].forEach(i => { if (aCount[i] / tot < 0.12 || aCount[i] / tot > 0.42) flag("balance", "answer index " + i + " at " + dist[i] + " (want ~12-42%)"); });
}
console.log("---");
console.log("chapters:", chapters, "| key verses position-checked:", versesChecked, "| problems:", problems);
process.exit(problems ? 1 : 0);
