/* Validation harness for Scripture Launchpad data files (dev only, not shipped). */
global.window = global;
const fs = require("fs");
const files = fs.readdirSync(__dirname + "/data").filter(f => f.endsWith(".js")).sort();
for (const f of files) {
  try { require(__dirname + "/data/" + f); console.log("LOADED", f); }
  catch (e) { console.log("FAIL", f, e.message); process.exit(1); }
}
const SLP = window.SLP;
const seen = new Set(); let problems = 0, authored = 0;
for (const b of SLP.books) {
  if (seen.has(b.id)) { console.log("DUPE id", b.id); problems++; }
  seen.add(b.id);
  authored += (b.chapters || []).length;
  (b.chapters || []).forEach(c => {
    const tag = b.id + ":" + c.n;
    if (c.summary && (!c.context || !c.takeaway || !c.keyVerses || !c.keyVerses.length ||
        !Array.isArray(c.quiz) || c.quiz.length !== 3 ||
        c.quiz.some(q => !Array.isArray(q.choices) || q.choices.length !== 4 ||
          !(Number.isInteger(q.a) && q.a >= 0 && q.a <= 3) || !q.why))) {
      console.log("BAD", tag); problems++;
    }
  });
  if ((b.chapters || []).length) {
    const ns = b.chapters.map(c => c.n);
    if (!ns.every((n, i) => n === i + 1)) console.log("NON-SEQUENTIAL", b.id, ns[0] + ".." + ns[ns.length - 1]);
  }
}
const dupGloss = new Set();
SLP.gloss.forEach(g => {
  const k = g.term.toLowerCase();
  if (dupGloss.has(k)) { console.log("GLOSS DUPE", g.term); problems++; }
  dupGloss.add(k);
  if (!g.def || !g.tag) { console.log("GLOSS BAD", g.term); problems++; }
});
console.log("---");
console.log("books:", SLP.books.length, "| glossary:", SLP.gloss.length, "| authored chapters:", authored);
console.log("problems:", problems);
