/* Integration checks: app normalize logic + glossary matcher against real data (dev only). */
global.window = global;
const fs = require("fs");
fs.readdirSync(__dirname + "/data").filter(f => f.endsWith(".js")).forEach(f => require(__dirname + "/data/" + f));
const SLP = window.SLP;

const VOLS = ["ot","nt","bom","dc","pgp"];
const merged = []; const byId = {};
for (const b of SLP.books) {
  if (b.id === "alma-b") {
    const a = byId["alma"];
    if (a) { a.chapters = a.chapters.concat(b.chapters); continue; }
  }
  const c = Object.assign({}, b, { chapters: b.chapters || [] });
  byId[c.id] = c; merged.push(c);
}
const ordered = []; VOLS.forEach(v => merged.filter(b => b.volume === v).forEach(b => ordered.push(b)));
const units = b => b.chapterCount || b.chapters.length;
const tot = {}; ordered.forEach(b => { tot[b.volume] = (tot[b.volume] || 0) + units(b); });
console.log("books total:", ordered.length);
VOLS.forEach(v => console.log("  ", v, ordered.filter(b => b.volume === v).length, "books,", tot[v], "units"));

const alma = byId["alma"];
console.log("Alma merged chapters:", alma.chapters.length, "(expect 63)");
const ns = alma.chapters.map(c => c.n);
console.log("Alma sequence ok:", ns.every((n, i) => n === i + 1));

const terms = SLP.gloss.slice().sort((a, b) => b.term.length - a.term.length);
const escRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
let re;
try {
  re = new RegExp("\\b(" + terms.map(t => escRe(t.term)).join("|") + ")\\b", "gi");
} catch (e) { console.log("REGEX FAIL", e.message); process.exit(1); }
console.log("glossary regex ok, terms:", terms.length);
const sample = "Nephi obtained the plates of brass with the sword of Laban; the Liahona guided them to the promised land, where they kept the law of Moses until Christ.";
const hits = (sample.match(re) || []).map(m => m.toLowerCase());
console.log("sample hits:", [...new Set(hits)].join(", "));

const dist = { 0: 0, 1: 0, 2: 0, 3: 0 }; let qn = 0;
ordered.forEach(b => b.chapters.forEach(c => c.quiz && c.quiz.forEach(q => { dist[q.a]++; qn++; })));
console.log("quiz questions:", qn, "| answer index distribution:", JSON.stringify(dist));
