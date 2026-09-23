/* Book Launchpad — canon structure: 3 collections, 12 public-domain books (Tier 1).
   Study guides ship as part files that attach chapters onto these skeletons. */
window.BLP = window.BLP || { books: [], gloss: [] };

/* ---------- PHILOSOPHY & POWER (5) ---------- */
BLP.books.push({ volume:"philosophy", id:"meditations", title:"Meditations", author:"Marcus Aurelius", translator:"George Long", year:1862, original:161, chapterCount:12, unit:"book", gut:2680,
  blurb:"The private notes of a Roman emperor: twelve books on discipline, death, and doing your part." });
BLP.books.push({ volume:"philosophy", id:"enchiridion", title:"The Enchiridion", author:"Epictetus", translator:"T. W. Higginson", year:1865, original:135, chapterCount:13, unit:"part", gut:45109,
  blurb:"A handbook of Stoic ethics in compact teachings: control what is yours, release what is not." });
BLP.books.push({ volume:"philosophy", id:"seneca", title:"On the Shortness of Life", author:"Seneca the Younger", translator:"Aubrey Stewart", year:1887, original:49, chapterCount:5, unit:"part", gut:64576,
  blurb:"Seneca on time: life is long enough, if you know how to use it." });
BLP.books.push({ volume:"philosophy", id:"consolation", title:"The Consolation of Philosophy", author:"Boethius", translator:"H. R. James", year:1897, original:524, chapterCount:5, unit:"book", gut:14328,
  blurb:"Written in prison awaiting execution: Philosophy herself visits to restore the writer's soul." });
BLP.books.push({ volume:"philosophy", id:"prince", title:"The Prince", author:"Niccolò Machiavelli", translator:"W. K. Marriott", year:1908, original:1513, chapterCount:26, unit:"chapter", gut:1232,
  blurb:"The manual of political power: how principalities are won, kept, and lost." });

/* ---------- EASTERN WISDOM (2) ---------- */
BLP.books.push({ volume:"eastern", id:"art-of-war", title:"The Art of War", author:"Sun Tzu", translator:"Lionel Giles", year:1910, original:-500, chapterCount:13, unit:"chapter", gut:132,
  blurb:"The classic of strategy: thirteen chapters on winning without fighting." });
BLP.books.push({ volume:"eastern", id:"tao", title:"The Tao Teh King", author:"Laozi", translator:"James Legge", year:1891, original:-400, chapterCount:81, unit:"chapter", gut:216,
  blurb:"Eighty-one short chapters on the Way: water, emptiness, and effortless action." });

/* ---------- SELF-MASTERY (5) ---------- */
BLP.books.push({ volume:"mastery", id:"thinketh", title:"As a Man Thinketh", author:"James Allen", year:1903, chapterCount:7, unit:"chapter", gut:4507,
  blurb:"Seven short chapters on the power of thought to shape character, circumstances, and health." });
BLP.books.push({ volume:"mastery", id:"science", title:"The Science of Getting Rich", author:"Wallace D. Wattles", year:1910, chapterCount:17, unit:"chapter", gut:59844,
  blurb:"The 1910 classic behind modern prosperity thinking: a certain way of thinking and acting." });
BLP.books.push({ volume:"mastery", id:"24h", title:"How to Live on 24 Hours a Day", author:"Arnold Bennett", year:1908, chapterCount:12, unit:"chapter", gut:2274,
  blurb:"A bracing little book on time: your real wealth is the 24 hours you already own." });
BLP.books.push({ volume:"mastery", id:"garcia", title:"A Message to Garcia", author:"Elbert Hubbard", year:1899, chapterCount:1, unit:"essay", gut:17195,
  blurb:"The one-page essay on initiative that became a business classic: Rowan takes the letter to García." });
BLP.books.push({ volume:"mastery", id:"prophet", title:"The Prophet", author:"Kahlil Gibran", year:1923, chapterCount:28, unit:"poem", gut:58585,
  blurb:"Twenty-six prose poems of love, work, sorrow, and freedom, spoken by the prophet Almustafa." });
