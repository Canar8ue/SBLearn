/* Strict quote + schema check for one book's guide file (dev tool, not shipped).
   Run: node tools/check-quotes.js <bid>
   Verifies, for every authored unit:
     - every keyVerses[].text appears VERBATIM (whitespace-normalized) in the
       unit's text chunk (data/text-<bid>.js)
     - quiz: exactly 3 questions, 4 unique choices each, answer index 0-3,
       `why` present, no duplicate questions within the book
     - summary/takeaway length bounds
   Exit code 1 on any problem. */
const fs = require("fs"), path = require("path");
const bid = process.argv[2];
if (!bid){ console.log("usage: node tools/check-quotes.js <bid>"); process.exit(1); }

global.window = global;
require(path.join(__dirname, "../data/canon.js"));
require(path.join(__dirname, "../data/text-" + bid + ".js"));
/* single guide file (data/<bid>.js) or split parts (data/<bid>-a.js + <bid>-b.js) */
const single = path.join(__dirname, "../data/" + bid + ".js");
if (fs.existsSync(single)) require(single);
else {
  const parts = fs.readdirSync(path.join(__dirname, "../data"))
    .filter(f => f.startsWith(bid + "-") && f.endsWith(".js")).sort();
  if (!parts.length) throw new Error("no guide file for " + bid);
  parts.forEach(f => require(path.join(__dirname, "../data", f)));
}

const BLP = window.BLP, T = window.BLP_TEXT;
const book = BLP.books.find(b => b.id === bid);
const norm = s => String(s).replace(/\s+/g, " ").replace(/^[“”"' ]+|[“”"' ]+$/g, "").trim().toLowerCase();

let problems = 0, quotes = 0, qs = 0;
const qSeen = new Set();
(book.chapters || []).sort((a,b)=>a.n-b.n).forEach(ch => {
  const tag = bid + ":" + ch.n;
  const unitText = T[bid] && T[bid][ch.n] ? T[bid][ch.n].join(" ") : null;
  if (!unitText){ console.log("NO TEXT for", tag); problems++; return; }
  const normUnit = norm(unitText);
  /* quote checks */
  (ch.keyVerses || []).forEach((kv,i) => {
    quotes++;
    const q = norm(kv.text);
    if (q.length < 25){ console.log("SHORT QUOTE", tag, "#" + (i+1), "(", q.length, "chars )"); problems++; }
    if (!normUnit.includes(q)){
      console.log("QUOTE NOT VERBATIM", tag, "#" + (i+1), "->", JSON.stringify(kv.text.slice(0, 70)));
      /* closest paragraph hint */
      const head = q.slice(0, 40);
      const hit = T[bid][ch.n].findIndex(p => norm(p).includes(head));
      console.log("   opening found in unit text:", hit >= 0 ? "yes (mid-quote drift or punctuation)" : "NO — check unit/chapter number");
      problems++;
    }
  });
  if (!ch.keyVerses || ch.keyVerses.length < 2 || ch.keyVerses.length > 3){ console.log("KEY VERSES COUNT", tag, ch.keyVerses ? ch.keyVerses.length : 0); problems++; }
  /* summary/context/takeaway */
  const wc = ch.summary ? ch.summary.trim().split(/\s+/).length : 0;
  if (wc < 60 || wc > 200){ console.log("SUMMARY LENGTH", tag, wc, "words"); problems++; }
  if (!ch.context || ch.context.length < 15){ console.log("CONTEXT MISSING/SHORT", tag); problems++; }
  if (!ch.takeaway || ch.takeaway.length > 200){ console.log("TAKEAWAY MISSING/LONG", tag); problems++; }
  /* quiz checks */
  if (!Array.isArray(ch.quiz) || ch.quiz.length !== 3){ console.log("QUIZ COUNT", tag, ch.quiz ? ch.quiz.length : 0); problems++; return; }
  ch.quiz.forEach((q,i) => {
    qs++;
    if (!q.q || !q.why){ console.log("QUIZ FIELD", tag, "#" + (i+1)); problems++; }
    if (!Array.isArray(q.choices) || q.choices.length !== 4){ console.log("CHOICES", tag, "#" + (i+1)); problems++; }
    else if (new Set(q.choices.map(c => norm(c))).size !== 4){ console.log("DUP CHOICE", tag, "#" + (i+1)); problems++; }
    if (!(Number.isInteger(q.a) && q.a >= 0 && q.a <= 3)){ console.log("ANSWER IDX", tag, "#" + (i+1), q.a); problems++; }
    const key = norm(q.q);
    if (qSeen.has(key)){ console.log("DUP QUESTION", tag, JSON.stringify(q.q.slice(0, 60))); problems++; }
    qSeen.add(key);
  });
  /* answer spread within the unit */
  if (ch.quiz && ch.quiz.length === 3 && new Set(ch.quiz.map(q => q.a)).size === 1){
    console.log("FLAT ANSWER SPREAD", tag, "(all answers index " + ch.quiz[0].a + ")");
    problems++;
  }
});
console.log("---");
console.log(bid + ": units", (book.chapters||[]).length, "| quotes", quotes, "| quiz Qs", qs, "| problems", problems);
process.exit(problems ? 1 : 0);
