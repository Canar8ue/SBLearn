/* Book Launchpad — A Message to Garcia, study guide (unit 1). AI-assisted draft, team-edited. */
window.BLP = window.BLP || { books: [], gloss: [] }; var BLP = window.BLP;
var _bk = BLP.books.find(function(b){ return b.id === "garcia"; });
if (!_bk) throw new Error("data/canon.js must load before garcia.js");
(_bk.chapters = _bk.chapters || []).push(
  { n:1, t:"A Message to Garcia",
    summary:"During the Spanish-American War, President McKinley had to reach General Garcia, the Cuban insurgent leader, somewhere in Cuba's mountains beyond mail or telegraph. Rowan took the letter without a question, sealed it in an oilskin pouch, landed by night from an open boat, crossed the hostile island on foot, and in three weeks delivered it — he did not ask, \"Where is he at?\" What young men need, Hubbard argues, is not book-learning but a stiffening of the vertebrae: loyalty to a trust, prompt action, concentrated energy. He catalogs the clerk's evasive questions and the weeding-out that forever sends the incompetent out, closing with civilization's one long, anxious search for the man who can carry a message to Garcia.",
    context:"Hubbard's 1899 one-essay brief for initiative: Rowan's quiet delivery of McKinley's letter becomes the lasting emblem of doing the thing without asking questions.",
    keyVerses:[
      { ref:"A Message to Garcia", text:"McKinley gave Rowan a letter to be delivered to Garcia; Rowan took the letter and did not ask, \"Where is he at?\"" },
      { ref:"A Message to Garcia", text:"It is not book-learning young men need, nor instruction about this and that, but a stiffening of the vertebrae which will cause them to be loyal to a trust, to act promptly, concentrate their energies: do the thing--\"Carry a message to Garcia.\"" },
      { ref:"A Message to Garcia", text:"Civilization is one long, anxious search for just such individuals." }
    ],
    takeaway:"When handed the letter, take it and go: do not ask where Garcia is or how — work the how out yourself, and deliver.",
    quiz:[
      { q:"What did Rowan do when handed the letter for Garcia?", choices:["Asked for a map, a guide, and an escort","Sent a messenger ahead to locate Garcia","Took the letter without asking where Garcia was and delivered it","Wrote back to McKinley for further instructions"], a:2, why:"Rowan took the letter and did not ask, \"Where is he at?\" — he crossed the hostile island on foot and delivered it in three weeks." },
      { q:"What does Hubbard say young men need, rather than book-learning?", choices:["A stiffening of the vertebrae that makes them loyal to a trust, prompt, and concentrated","More diplomas and certificates","Better salary offers to motivate them","Clearer written instructions from their employers"], a:0, why:"It is not book-learning young men need, nor instruction about this and that, but a stiffening of the vertebrae — loyalty to a trust, prompt action, concentrated energy." },
      { q:"Your manager hands you an ill-defined task and walks away. Acting \"like Rowan,\" by the essay, means you…", choices:["list the obstacles and wait for fuller instructions","take the task, work out the how, and get it done","delegate it to whoever seems free","report back that it cannot be done as stated"], a:1, why:"Rowan was given a letter and asked no idiotic questions; the man who quietly takes the missive and delivers it never gets \"laid off,\" and anything he asks shall be granted." }
    ]
  }
);
