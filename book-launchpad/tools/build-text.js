/* Book Launchpad — text pipeline (dev tool, not shipped).
   Converts text-src/pg*.txt (Project Gutenberg downloads) into:
     data/text-<bid>.js     per-book unit text: BLP_TEXT["<bid>"] = { n: [paragraph,...] }
     data/text-manifest.js  volume -> [chunk file names]
     text-src/dumps/<bid>.txt  plain-text dumps (one block per unit) for guide authors
   Run: node tools/build-text.js
*/
const fs = require("fs"), path = require("path");
const SRC = path.join(__dirname, "../text-src");
const OUT = path.join(__dirname, "../data");
const DUMP = path.join(__dirname, "../text-src/dumps");
fs.mkdirSync(DUMP, { recursive: true });

function load(name){ return fs.readFileSync(path.join(SRC, name + ".txt"), "utf8").replace(/\r\n/g, "\n"); }
function sliceBetween(txt, startRe, endRe){
  const s = txt.match(startRe);
  if (!s) throw new Error("start not found: " + startRe);
  let b = txt.length;
  if (endRe){ const e = txt.slice(s.index).match(endRe); if (e) b = s.index + e.index; }
  return txt.slice(s.index, b);
}
/* reflow hard-wrapped Gutenberg text into paragraphs.
   blank line = break; indented line = new block (verse/subsection);
   trailing hyphen joins words; [Illustration: ...] stripped. */
function paragraphs(lines){
  const out = []; let cur = "";
  const push = () => { const c = cur.replace(/\s+/g," ").trim(); if (c) out.push(c); cur = ""; };
  for (const raw of lines){
    const l = raw.replace(/\[Illustration:[^\]]*\]/gi, "").replace(/\s+$/,"");
    if (!l.trim()){ push(); continue; }
    if (/^\s{2,}\S/.test(l)){ push(); cur = l.trim(); continue; }
    if (!cur){ cur = l.trim(); continue; }
    if (/[A-Za-z]-$/.test(cur)) cur = cur.replace(/-$/, "") + l.trim();
    else cur += " " + l.trim();
  }
  push();
  return out;
}
const ROMAN = [["XL",40],["XXXIX",39],["XXXVIII",38],["XXXVII",37],["XXXVI",36],["XXXV",35],["XXXIV",34],["XXXIII",33],["XXXII",32],["XXXI",31],["XXX",30],["XXIX",29],["XXVIII",28],["XXVII",27],["XXVI",26],["XXV",25],["XXIV",24],["XXIII",23],["XXII",22],["XXI",21],["XX",20],["XIX",19],["XVIII",18],["XVII",17],["XVI",16],["XV",15],["XIV",14],["XIII",13],["XII",12],["XI",11],["X",10],["IX",9],["VIII",8],["VII",7],["VI",6],["V",5],["IV",4],["III",3],["II",2],["I",1]];
function roman(s){ s = s.toUpperCase(); for (const [r,n] of ROMAN) if (s === r) return n; return NaN; }
function chunk(arr, size){
  const out = []; for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}
/* find heading indexes by exact line text, each search starting after the previous hit */
function headingMarks(lines, titles, from){
  const marks = [];
  titles.forEach((t,i)=>{
    const start = i ? marks[i-1] + 1 : (from || 0);
    for (let j = start; j < lines.length; j++){
      if (lines[j].trim() === t){ marks.push(j); return; }
    }
    throw new Error("heading not found: " + t);
  });
  return marks;
}

/* ---------------- per-book configs ---------------- */
const ORD_WORD = ["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve"];
const PROPHET_TITLES = [
  "The Coming of the Ship","On Love","On Marriage","On Children","On Giving","On Eating and Drinking",
  "On Work","On Joy and Sorrow","On Houses","On Clothes","On Buying and Selling","On Crime and Punishment",
  "On Laws","On Freedom","On Reason and Passion","On Pain","On Self-Knowledge","On Teaching","On Friendship",
  "On Talking","On Time","On Good and Evil","On Prayer","On Pleasure","On Beauty","On Religion","On Death","The Farewell"
];
const CONSOL_TITLES = ["The Sorrows of Boethius","The Vanity of Fortune's Gifts","True Happiness and False","Good and Ill Fortune","Free Will and God's Foreknowledge"];

const BOOKS = {
  /* --- philosophy & power --- */
  meditations: () => {
    const txt = sliceBetween(load("pg2680"), /^THE FIRST BOOK$/m, /^APPENDIX$/m);
    const lines = txt.split("\n");
    const words = ["FIRST","SECOND","THIRD","FOURTH","FIFTH","SIXTH","SEVENTH","EIGHTH","NINTH","TENTH","ELEVENTH","TWELFTH"];
    const marks = headingMarks(lines, words.map(w => "THE " + w + " BOOK"));
    return words.map((w,i)=>({ n:i+1, title:"Book " + ORD_WORD[i], lines: lines.slice(marks[i]+1, i<11 ? marks[i+1] : lines.length) }));
  },
  enchiridion: () => {
    const all = load("pg45109").split("\n");
    let start = -1;
    for (let i = 0; i < all.length; i++) if (/^\s*THE ENCHIRIDION\s*$/.test(all[i])) start = i;
    const body = all.slice(start + 1);
    const end = body.findIndex(l => /\*\*\* END/.test(l));
    const secLines = end >= 0 ? body.slice(0, end) : body;
    const marks = [];
    secLines.forEach((l,i)=>{ if (/^\s{6,}[IVXLC]{1,6}\s*$/.test(l)) marks.push(i); });
    const secs = marks.map((m,k)=>({ lines: secLines.slice(m+1, k < marks.length-1 ? marks[k+1] : secLines.length) }));
    return chunk(secs, 4).map((g,i)=>({
      n: i+1,
      title: "Sections " + (i*4+1) + "\u2013" + (i*4+g.length),
      lines: g.flatMap(s=>s.lines)
    }));
  },
  seneca: () => {
    const txt = sliceBetween(load("pg64576"), /^OF THE SHORTNESS OF LIFE\.$/m, /^OF CONSOLATION\./m);
    const lines = txt.split("\n");
    const marks = [];
    lines.forEach((l,i)=>{ if (/^[IVX]+\.\s/.test(l)) marks.push(i); });
    const secs = marks.map((m,k)=>({ lines: lines.slice(m, k < marks.length-1 ? marks[k+1] : lines.length) }));
    return chunk(secs, 4).map((g,i)=>({
      n: i+1,
      title: "Part " + ORD_WORD[i],
      lines: g.flatMap(s=>s.lines)
    }));
  },
  consolation: () => {
    const all = load("pg14328").split("\n");
    /* "BOOK X." appears in the contents and on the book half-title page before
       the body; the body heading is the LAST occurrence of each book number */
    const marks = [];   /* { line, n } per book, body headings only */
    all.forEach((l,i)=>{
      const m = l.match(/^\s*BOOK ([IVX]+)\.\s*$/);
      if (!m) return;
      const n = roman(m[1]);
      const prev = marks.findIndex(x => x.n === n);
      if (prev >= 0) marks[prev] = { line:i, n }; else marks.push({ line:i, n });
    });
    if (marks.length !== 5) throw new Error("consolation: expected 5 body books, got " + marks.length);
    return marks.map((m,k)=>({
      n: m.n, title: CONSOL_TITLES[m.n-1],
      lines: all.slice(m.line + 1, k < marks.length-1 ? marks[k+1].line : all.length)
    })).sort((a,b)=>a.n-b.n);
  },
  prince: () => {
    /* body headings: "CHAPTER N." alone on a line, caps title on the next
       line(s) (may wrap); the contents listing uses a different shape */
    const all = load("pg1232");
    const endIdx = all.indexOf("*** END");
    let start = -1;
    const re = /^\s*CHAPTER I\.\s*$/gm;
    let m;
    while ((m = re.exec(all))) start = m.index;
    if (start < 0) throw new Error("prince: no body heading found");
    const txt = all.slice(start, endIdx > start ? endIdx : all.length);
    const lines = txt.split("\n");
    const marks = [];
    lines.forEach((l,i)=>{ const mm = l.match(/^\s*CHAPTER ([IVXLC]+)\.\s*(?:\[\d+\])?\s*$/); if (mm) marks.push({ line:i, n: roman(mm[1]) }); });
    return marks.map((mm,k)=>{
      /* title = the caps line(s) after the heading, up to the next blank line */
      let j = mm.line + 1; const titleLines = [];
      while (j < lines.length && lines[j].trim() && titleLines.length < 3){ titleLines.push(lines[j].trim()); j++; }
      return { n: mm.n, title: titleLines.join(" ").replace(/\.$/,""),
               lines: lines.slice(mm.line + 1 + titleLines.length, k < marks.length-1 ? marks[k+1].line : lines.length) };
    });
  },
  /* --- eastern wisdom --- */
  "art-of-war": () => {
    const txt = sliceBetween(load("pg132"), /^Chapter I\. LAYING PLANS$/m, /\*\*\* END/);
    const lines = txt.split("\n");
    const marks = [];
    lines.forEach((l,i)=>{ const m = l.match(/^Chapter ([IVX]+)\. (.+)$/); if (m) marks.push({ line:i, n: roman(m[1]), title: m[2].replace(/\.$/,"") }); });
    return marks.map((m,k)=>({ n:m.n, title:m.title, lines: lines.slice(m.line+1, k < marks.length-1 ? marks[k+1].line : lines.length) }));
  },
  tao: () => {
    /* Legge's chapter markers come in several shapes:
       "Ch. N. 1. ..." / "N. 1. ..." / "Ch. N." / "N." alone / "N. <text>".   */
    const txt = sliceBetween(load("pg216"), /^Ch\. 1\./m, /\*\*\* END/);
    const lines = txt.split("\n");
    const starts = new Map();
    const definite = [];
    lines.forEach((l,i)=>{
      let m = l.match(/^(?:Ch\.\s*)?(\d{1,2})\.\s+1\.\s/);
      if (m){ definite.push([+m[1], i]); return; }
      m = l.match(/^Ch\.\s*(\d{1,2})\./);
      if (m) definite.push([+m[1], i]);
    });
    definite.forEach(([n,i])=>{ if (!starts.has(n)) starts.set(n, i); });
    let prev = 0;
    for (let n = 1; n <= 81; n++){
      if (starts.has(n)){ prev = starts.get(n); continue; }
      const re = new RegExp("^(?:Ch\\.)?" + n + "\\.\\s*($|\\s)");
      for (let i = prev + 1; i < lines.length; i++){
        if (re.test(lines[i])){
          if (definite.some(d => d[1] === i)) break;
          starts.set(n, i); prev = i; break;
        }
      }
    }
    const missing = []; for (let n = 1; n <= 81; n++) if (!starts.has(n)) missing.push(n);
    if (missing.length) throw new Error("tao: chapters not found: " + missing.join(","));
    return Array.from({length:81},(_,i)=>({
      n: i+1, title: "",
      lines: lines.slice(starts.get(i+1), i < 80 ? starts.get(i+2) : lines.length)
    }));
  },
  /* --- self-mastery --- */
  thinketh: () => {
    const all = load("pg4507").split("\n");
    const titles = ["THOUGHT AND CHARACTER","EFFECT OF THOUGHT ON CIRCUMSTANCES","EFFECT OF THOUGHT ON HEALTH AND THE BODY","THOUGHT AND PURPOSE","THE THOUGHT-FACTOR IN ACHIEVEMENT","VISIONS AND IDEALS","SERENITY"];
    const fw = all.findIndex(l => l.trim() === "FOREWORD");
    const marks = headingMarks(all, titles, fw);
    return titles.map((t,i)=>({
      n:i+1, title: t.split(" ").map(w=>w[0]+w.slice(1).toLowerCase().replace("'s","'s")).join(" ").replace("Effect Of","Effect of").replace("Thought On","Thought on").replace("The Thought-factor","The Thought-Factor").replace("And The Body","and the Body").replace("In Achievement","in Achievement"),
      lines: all.slice(marks[i]+1, i < 6 ? marks[i+1] : all.length)
    }));
  },
  science: () => {
    const txt = sliceBetween(load("pg59844"), /^CHAPTER I\. THE RIGHT TO BE RICH\.$/m, /\*\*\* END/);
    const lines = txt.split("\n");
    const marks = [];
    lines.forEach((l,i)=>{ const m = l.match(/^CHAPTER ([IVX]+)\. (.+?)\.?\s*$/); if (m) marks.push({ line:i, n: roman(m[1]), title: m[2] }); });
    return marks.map((m,k)=>({ n:m.n, title:m.title, lines: lines.slice(m.line+1, k < marks.length-1 ? marks[k+1].line : lines.length) }));
  },
  "24h": () => {
    const all = load("pg2274").split("\n");
    const titles = ["THE DAILY MIRACLE","THE DESIRE TO EXCEED ONE'S PROGRAMME","PRECAUTIONS BEFORE BEGINNING","THE CAUSE OF THE TROUBLES","TENNIS AND THE IMMORTAL SOUL","REMEMBER HUMAN NATURE","CONTROLLING THE MIND","THE REFLECTIVE MOOD","INTEREST IN THE ARTS","NOTHING IN LIFE IS HUMDRUM","SERIOUS READING","DANGERS TO AVOID"];
    const marks = headingMarks(all, titles);
    return titles.map((t,i)=>({
      n:i+1, title: t.split(" ").map(w=>w[0]+w.slice(1).toLowerCase().replace("'s","'s")).join(" ").replace("To Exceed","to Exceed").replace("Before Beginning","before Beginning").replace("Of The Troubles","of the Troubles").replace("And The Immortal Soul","and the Immortal Soul").replace("Human Nature","Human Nature").replace("In The Arts","in the Arts").replace("In Life Is Humdrum","in Life Is Humdrum"),
      lines: all.slice(marks[i]+1, i < 11 ? marks[i+1] : all.length).filter(l => !/^\s*[IVX]{1,4}\s*$/.test(l))
    }));
  },
  garcia: () => {
    const all = load("pg17195").split("\n");
    /* this edition bundles several Hubbard pieces; the essay itself is the second
       "A MESSAGE TO GARCIA" heading, running to "LIFE IN ABUNDANCE" */
    const hits = [];
    all.forEach((l,i)=>{ if (l.trim() === "A MESSAGE TO GARCIA") hits.push(i); });
    const start = hits[1], end = all.findIndex(l => l.trim() === "LIFE IN ABUNDANCE");
    if (start < 0 || end < start) throw new Error("garcia: essay bounds not found");
    return [{ n:1, title:"A Message to Garcia", lines: all.slice(start+1, end) }];
  },
  prophet: () => {
    const txt = sliceBetween(load("pg58585"), /Almustafa, the chosen/, /\*\*\* END/);
    const lines = txt.split("\n");
    /* Each poem is requested by name in the frame dialogue, with the topic in
       underscores ("Speak to us of _Love_") — the phrase can wrap across a
       line break, so anchor on the joined text and map back to line indexes. */
    const lineOf = (charIdx) => txt.slice(0, charIdx).split("\n").length - 1;
    const anchors = [{ title:"The Coming of the Ship", line:0 }];
    for (let i = 1; i < PROPHET_TITLES.length - 1; i++){
      const kw = PROPHET_TITLES[i].replace(/^On /,"");
      const rx = new RegExp("_" + kw.replace(/ /g, "\\s+") + "_");
      const from = txt.indexOf(lines[anchors[anchors.length-1].line]) + lines[anchors[anchors.length-1].line].length;
      const mm = txt.slice(Math.max(from, 0)).match(rx);
      if (!mm) throw new Error("prophet: anchor not found: _" + kw + "_");
      const ln = lineOf(Math.max(from, 0) + mm.index);
      if (ln <= anchors[anchors.length-1].line) throw new Error("prophet: anchor out of order: " + kw);
      anchors.push({ title: PROPHET_TITLES[i], line: ln });
    }
    let fw = -1;
    for (let j = anchors[anchors.length-1].line + 1; j < lines.length; j++)
      if (/Then he descended the steps/.test(lines[j])){ fw = j; break; }
    if (fw < 0) throw new Error("prophet: farewell anchor not found");
    anchors.push({ title: "The Farewell", line: fw });
    /* unit text starts at the anchor line's request sentence — keep the frame
       dialogue line (it reads as the poem's introduction) */
    return anchors.map((a,i)=>({
      n: i+1, title: a.title,
      lines: lines.slice(a.line, i < anchors.length-1 ? anchors[i+1].line : lines.length)
    }));
  }
};

/* ---------------- run ---------------- */
const MANIFEST = {
  philosophy: ["text-meditations","text-enchiridion","text-seneca","text-consolation","text-prince"],
  eastern: ["text-art-of-war","text-tao"],
  mastery: ["text-thinketh","text-science","text-24h","text-garcia","text-prophet"]
};

let problems = 0;
for (const [bid, build] of Object.entries(BOOKS)){
  try{
    const units = build();
    units.sort((a,b)=>a.n-b.n);
    const obj = {};
    for (const u of units){
      const ps = paragraphs(u.lines);
      while (ps.length && !ps[0]) ps.shift();
      while (ps.length && !ps[ps.length-1]) ps.pop();
      obj[u.n] = ps;
      if (!ps.length) throw new Error("unit " + u.n + " has no text");
    }
    fs.writeFileSync(path.join(OUT, "text-" + bid + ".js"),
      "/* generated by tools/build-text.js — do not edit by hand */\n"
      + 'window.BLP_TEXT = window.BLP_TEXT || {};\n'
      + 'window.BLP_TEXT[' + JSON.stringify(bid) + '] = ' + JSON.stringify(obj) + ';\n');
    /* author dump */
    let dump = "BOOK: " + bid + " — units: " + units.length + "\n";
    for (const u of units){
      dump += "\n===== UNIT " + u.n + (u.title ? " — " + u.title : "") + " =====\n";
      dump += (obj[u.n].join("\n\n")).replace(/(.{1,100})(\s|$)/g, "$1\n") + "\n";
    }
    fs.writeFileSync(path.join(DUMP, bid + ".txt"), dump);
    const words = units.reduce((s,u)=>s+obj[u.n].join(" ").split(/\s+/).length, 0);
    console.log(("OK   " + bid).padEnd(14), String(units.length).padStart(3) + " units", (words/1000).toFixed(0) + "k words",
      "| u1:", JSON.stringify(obj[1][0].slice(0,55)));
  } catch(e){
    problems++;
    console.log(("FAIL " + bid).padEnd(14), e.message);
  }
}
fs.writeFileSync(path.join(OUT, "text-manifest.js"),
  "/* generated by tools/build-text.js — do not edit by hand */\n"
  + "window.BLP_TEXT_FILES = " + JSON.stringify(MANIFEST) + ";\n");
console.log("---");
console.log("manifest volumes:", Object.keys(MANIFEST).length, "| files:", Object.values(MANIFEST).flat().length, "| problems:", problems);
