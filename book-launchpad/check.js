/* Integration checks: app normalize logic + glossary matcher + text coverage
   against real data (dev only). Run: node check.js */
global.window = global;
const fs = require("fs");
/* canon.js must load before the guide part files that attach to it */
["canon.js", ...fs.readdirSync(__dirname + "/data").filter(f => f.endsWith(".js") && f !== "canon.js").sort()]
  .forEach(f => require(__dirname + "/data/" + f));
const BLP = window.BLP;

const VOLS = ["philosophy", "eastern", "mastery"];
const ordered = []; const byId = {};
for (const b of BLP.books) {
  const c = Object.assign({}, b, { chapters: b.chapters || [] });
  byId[c.id] = c; ordered.push(c);
}
const sorted = []; VOLS.forEach(v => sorted.push(...ordered.filter(b => b.volume === v)));
const units = b => b.chapterCount || b.chapters.length;
const tot = {}; sorted.forEach(b => { tot[b.volume] = (tot[b.volume] || 0) + units(b); });
console.log("books total:", sorted.length);
VOLS.forEach(v => console.log("  ", v, sorted.filter(b => b.volume === v).length, "books,", tot[v], "units"));

/* guide completeness per book */
let guideProblems = 0;
sorted.forEach(b => {
  const n = (b.chapters || []).length, want = units(b);
  if (n && n !== want) { console.log("GUIDE COUNT", b.id, n + "/" + want); guideProblems++; }
});
console.log("guide completeness:", guideProblems === 0 ? "all authored books match canon counts" : guideProblems + " mismatches");

/* glossary matcher sanity */
const terms = BLP.gloss.slice().sort((a, b) => b.term.length - a.term.length);
const escRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
let re;
try {
  re = new RegExp("\\b(" + terms.map(t => escRe(t.term)).join("|") + ")\\b", "gi");
} catch (e) { console.log("REGEX FAIL", e.message); process.exit(1); }
console.log("glossary regex ok, terms:", terms.length);
const sample = "The Stoic emperor consults the Tao of strategy; virtue, Fortune, and providence govern the principality, while the sage relies on initiative.";
const hits = (sample.match(re) || []).map(m => m.toLowerCase());
console.log("sample hits:", [...new Set(hits)].join(", "));

/* quiz answer distribution */
const dist = { 0: 0, 1: 0, 2: 0, 3: 0 }; let qn = 0;
sorted.forEach(b => b.chapters.forEach(c => c.quiz && c.quiz.forEach(q => { dist[q.a]++; qn++; })));
console.log("quiz questions:", qn, "| answer index distribution:", JSON.stringify(dist));

/* full-text coverage: every canon unit must have book text */
const T = window.BLP_TEXT || {};
const FILES = window.BLP_TEXT_FILES || {};
let tChapters = 0, tParas = 0, textProblems = 0;
sorted.forEach(b => {
  const bk = T[b.id];
  if (!bk) { console.log("TEXT MISSING BOOK", b.id); textProblems++; return; }
  for (let n = 1; n <= units(b); n++) {
    if (!Array.isArray(bk[n]) || !bk[n].length) { console.log("TEXT MISSING UNIT", b.id, n); textProblems++; continue; }
    tChapters++; tParas += bk[n].length;
  }
});
const manifestTotal = Object.values(FILES).reduce((s, a) => s + a.length, 0);
console.log("text:", tChapters, "units,", tParas, "paragraphs | manifest files:", manifestTotal, "| text problems:", textProblems);
