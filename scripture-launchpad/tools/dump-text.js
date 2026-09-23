#!/usr/bin/env node
/* Dump scripture text for guide authoring: book(s) with optional chapter
   ranges, printed as plain text so an author (human or agent) can read a
   batch of chapters in full without loading whole 600KB data chunks.

   Run (from the scripture-launchpad folder):
     node tools/dump-text.js gen 1-25 mark > ../text-src/dumps/gen-1-25.txt
   Args alternate: bookId [start-end] bookId [start-end] ...            */
global.window = global;
const fs = require("fs"), path = require("path");
fs.readdirSync(path.join(__dirname, "..", "data"))
  .filter(f => f === "canon.js" || /^text-.+\.js$/.test(f)).sort()
  .forEach(f => require(path.join(__dirname, "..", "data", f)));
const T = window.SLP_TEXT, SLP = window.SLP;
const canon = {}; SLP.books.forEach(b => canon[b.id] = b);

const argv = process.argv.slice(2);
if (!argv.length) { console.error("usage: node tools/dump-text.js <bookId> [start-end] ..."); process.exit(1); }
const out = [];
for (let i = 0; i < argv.length; i++) {
  const bid = argv[i], bk = T[bid];
  if (!bk) { console.error("no text for book id: " + bid); process.exit(1); }
  const title = canon[bid] ? canon[bid].title : bid;
  let range = null;
  if (i + 1 < argv.length && /^\d+-\d+$/.test(argv[i + 1])) { range = argv[i + 1].split("-").map(Number); i++; }
  const ns = bk.verses ? [1]
    : Object.keys(bk).map(Number).sort((a, b) => a - b)
        .filter(n => !range || (n >= range[0] && n <= range[1]));
  out.push("=".repeat(72));
  out.push(title.toUpperCase() + (range ? " — CHAPTERS " + range[0] + "–" + range[1] : " — ALL " + (bk.verses ? "PARAGRAPHS" : "CHAPTERS")));
  out.push("=".repeat(72));
  for (const n of ns) {
    const lines = bk.verses || bk[n];
    out.push("");
    out.push("--- " + title + " " + n + " (" + lines.length + (bk.verses ? " paragraphs" : " verses") + ") ---");
    lines.forEach((v, j) => out.push((j + 1) + " " + v));
  }
}
console.log(out.join("\n"));
