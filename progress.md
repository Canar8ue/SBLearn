# SBLearn — IS Career Launchpad

Working document for the BYU Information Systems Junior Core case competition (Case F26).
Everything the team and any AI assistant needs to know about the state of the project,
how it is designed, and the rules for changing it.

---

## 1. What this project is

A **web app** that helps incoming IS students do two things (the exact client
mandate from the case brief):

1. **Career Path Discovery** — explore 8 IS career tracks and find which one fits them best
   (the "Fit Finder" quiz + 8 career dossiers).
2. **Interview Prep** — rehearse role-specific mock interviews (behavioral + technical)
   with model answers and self-scored rubrics.

Plus a third layer the team added on its own initiative: a **buzzword glossary system**
(orange-underlined jargon across the whole site, hover definitions, familiarity tracking,
and flashcards) so a freshman learns the vocabulary while they browse.

**Case constraints we must keep satisfying:**
- Output must be an HTML file that runs on any browser. No server, no database required.
- At least 4 career paths covered (we do 8); at least 4 with mock interviews (we do all 8).
- Statistics must have explainable sources (see the in-app "Data & Sources" page).
- Deliverables: working prototype + ≤5 min video + individual reflections, due **Sep 4, 8:00 AM**.
- Grading: Discovery 30% · Interview Prep 30% · Video 20% · Reflection 20%.

---

## 2. Progress log

### 2026-09-02 — Session 1: v1 build
- Read the case PDF, extracted all requirements and rubric.
- Built `career-launchpad/index.html` from scratch as one self-contained file:
  - **Fit Finder**: 10 scenario questions, answers scored by cosine similarity against
    each career's trait vector (code / data / people / design / security / infra /
    process / business). Results page shows top match with % + reasons, ranked bars for
    all 8 tracks.
  - **8 career dossiers** (SWE, Cloud, Cybersecurity, Data, Business/Systems Analyst,
    ERP Consultant, IT PM, UX/PM), each with 5 tabs: day-to-day, skills & tools,
    entry-level bar, salary trajectory, strong-candidate profile.
  - **Mock interview engine**: 5 questions per track (40 total, behavioral + technical),
    free-text answers, "what interviewers listen for" hints, model answers, 4-point
    self-score rubric, session summary.
  - **Gamification** (Duolingo-style): XP (+50 quiz, +10/dossier, +25/interview,
    +10/flashcard deck), daily streak, 8 badges, level titles (Undeclared → Launched),
    journey path with check nodes, confetti, toasts, Otto the pixel briefcase mascot.
  - **Data & Sources page** with honest provenance (BLS OES, Levels.fyi, job postings).
- Everything persists in `localStorage` (key `clp_state_v1`); "Reset demo progress" in footer.
- Browser-tested all flows end-to-end.

### 2026-09-02 — Session 2: declutter + focus pass
- **Removed the sliding ticker bar** entirely (markup, CSS, JS).
- Stripped the header to brand + nav; moved streak/XP/level chips off the chrome into
  the "Your path" section.
- Rebuilt home as a **full-viewport hero with one focal point**: giant headline
  ("EIGHT TRACKS. / ONE DEGREE." — second line outlined), one primary CTA, quiet
  text-link alternative, single mono microline for dates/stats, scroll cue. Otto became
  a naked corner fixture. Removed the 4-cell stats strip, dates card, and mini chips.
- Quiz view now centers vertically; removed shouting all-caps hint.
- Results: top-match card enlarged; ranked-list rows dimmed (grey, 75%-opacity bars,
  full contrast on hover).
- Staggered hero entrance animation; `prefers-reduced-motion` respected.

### 2026-09-02 — Session 3: buzzword system
- **Glossary of 104 IS terms** (IAM, SIEM, O2C, fit-gap, dbt, Big-O, STAR, RAID log,
  total comp…) at top of the script, tagged TECH/DATA/SEC/CLOUD/BIZ/OPS/DESIGN.
- **Auto-annotation engine**: walks text nodes after every render, wraps glossary hits
  (word-boundary matching, acronyms case-sensitive) in orange-underlined spans across
  every view. Longest-match-wins; skips script/style/textarea/inputs/tooltips.
- **Hover tooltips**: hard-shadowed card with term + plain-English definition + live
  familiarity label. Hovering ~450ms (i.e., actually reading it) promotes the term
  NEW → SEEN, persisted.
- **Right-side glossary panel**: vertical edge tab ("BUZZWORDS 12/104"), expands to a
  400px drawer — stacked familiarity bar, live search (terms + definitions), filter
  chips (NEW/SEEN/LEARNING/KNOW), weakest-first list with 3-dot level meters,
  click-to-expand definitions (also marks SEEN). Escape or X closes; tab hides while open.
- **Flashcards** (button pinned to panel bottom): 12-card deck weighted to weakest
  terms, flip → self-rate "Got it"(+1 level)/"Not yet"(−1), completion screen,
  +10 XP per finished deck.
- Familiarity levels: 0 NEW · 1 SEEN · 2 LEARNING · 3 KNOW IT (stored in `S.buzz`).
- Keyboard guards: typing in panel search no longer triggers quiz 1–6 shortcuts.

### 2026-09-02 — Session 4: rule change
- Removed the self-imposed one-file rule ("app ships as a single `index.html` —
  vanilla, no build step, no frameworks, no external deps"). The case only requires
  "an HTML file that can be run on any browser," so a multi-file layout is now
  allowed if more efficient. No code changes — the app is still one file today; the
  case constraint (runs on any browser) is recorded in Section 1.

### 2026-09-02 — Session 5: AI grader for mock interviews (Z.ai GLM)
- **Self-grading is unchanged** (4 rubric ticks per question, X/20). Added an
  **opt-in second score from an AI grader** on the session summary:
  - End screen now shows **two panels side by side**: SELF ticks/20 (green) and
    AI GRADER — GLM (Z.ai) /20 (blue). Button "Grade with AI" → spinner → score.
  - **AI rubric is deeper than the self-rubric**: 5 weighted dimensions per
    question — relevance .25, structure .15, specificity .20, depth .25,
    communication .15 — each 0–4, composite per question to one decimal, session
    total out of 20 (same scale as self for honest comparison).
  - Per-question rows show SELF x/4 · AI y/4, the five dimension scores
    (REL/STR/SPE/DEP/COM), and GLM's one-line BEST + FIX notes. Verdict card at
    the bottom: two-sentence read + STRONG/MIXED/WEAK stamp (blue) + Re-grade.
  - AI grade persists to `S.interviews[id].ai` — mocks grid line shows
    "11/20 SELF · AI 15.7/20".
- **Provider**: Z.ai **GLM**, `glm-4.5-flash` (free tier — the account key has no
  paid balance, so glm-4.6 returns "insufficient balance"; model is one constant
  `AI_CFG.model` to swap if the team recharges). Thinking disabled, JSON response
  mode, temperature 0.3, one call per session (all 5 answers in the prompt).
- **API details** (section `8b. AI GRADER` in index.html): POST
  `https://api.z.ai/api/paas/v4/chat/completions`. CORS verified from the browser
  for localhost AND `Origin: null` (works even opened as file:// by double-click).
  75s timeout; any failure renders an inline "AI grader unreachable — self-score
  stands" card with a Try again button. Never blocks the self-score flow.
- **Privacy copy updated**: textarea microline now "SAVED ON THIS DEVICE — AI
  GRADING AT THE END IS OPT-IN"; footer no longer claims "zero data leaves this
  device"; the Grade button discloses exactly what is sent. Data & Sources page
  gained an "AI interview grader" card (model, what it sees, when, attribution —
  per case rules on labeling AI-generated content).
- Browser-tested end-to-end with the real API: 5-question SWE session with mixed
  strong/weak answers → AI total 15.7/20, correct differentiation (weak
  behavioral answer 1.2/4 vs strong technical 3.7–4/4), verdict + stamp +
  persistence all verified, layout screenshot-checked.

### ⚠ API KEY SECURITY (read before pushing)
The Z.ai key lives ONLY in `career-launchpad/ai-key.js`, which is **gitignored** —
nothing committed contains it. Present/demo from `node server.js` so the key
never touches the browser at all (see Session 7). The key was also pasted in
team chat once, so **rotate it on z.ai after Sep 4** regardless. If `ai-key.js`
is ever accidentally committed, remove it from history AND rotate the key.

### 2026-09-02 — Session 6: key moved out of the app file (lazy, closure-held)
- **`index.html` no longer contains or loads any key on its own.** Removed the
  static `<script src="ai-key.js">` tag and `AI_CFG.key` entirely.
- Key now lives only in **gitignored `career-launchpad/ai-key.js`**, which holds
  the key inside a closure and registers `window.CLP_GRADE(url, body, timeoutMs)`
  — the fetch-with-auth function. The key string itself is never assigned to any
  window property, so console/Inspect Element show nothing.
- **Lazy load**: `ai-key.js` is script-injected only at the moment a user presses
  "Grade with AI" (`loadGrader()` in section 8b). Before that click the browser
  has no key, no key script tag, and no reference to either — verified in-browser
  (typeof CLP_GRADE/CLP_AI_KEY undefined, zero key-string matches on window).
- Missing `ai-key.js` (e.g., a fresh clone): app fully works; clicking Grade
  shows "AI grader unreachable — ai-key.js not found next to index.html" and the
  self-score stands. `ai-key.example.js` (committed) is the copy-me template.
- Re-tested end-to-end: lazy load → real GLM grade succeeded. Bonus validation:
  deliberately off-topic test answers scored 0/20 with the verdict "consistently
  answers different questions than asked" — the grader is strict and correct.
- **Residual exposure (inherent to any no-server app):** during a live grading
  call, DevTools → Network shows the Authorization header (that's how HTTP auth
  works), and after first use the Sources panel lists ai-key.js. A determined
  user with DevTools open can capture the key; casual Inspect Element cannot.
  The only complete fix is a tiny server-side proxy (e.g., a free Cloudflare
  Worker holding the key); not done for the competition — rotate the key after
  Sep 4 instead.

### 2026-09-02 — Session 7: grading proxy server (key now fully server-side)
- **New `career-launchpad/server.js`** (committed, zero dependencies, Node 18+):
  serves the app as static files AND exposes **POST /api/grade** — a proxy that
  attaches the Z.ai key server-side and forwards to the API. The browser never
  receives the key in this mode. Also: per-IP rate limit (30 grades / 5 min) so
  an exposed port can't be used as a free GLM relay; 300KB body cap; 75s
  upstream timeout; model/thinking/JSON-mode pinned server-side; **ai-key.js is
  never served** (404).
- **`ai-key.js` is now dual-mode**: in the browser it seals the key in a closure
  and registers `window.CLP_GRADE`; in Node it `module.exports` the key for the
  server. One file, one place to rotate.
- **Client picks the transport automatically** (`aiCall` in section 8b):
  1. served over http(s) → try same-origin `/api/grade` first; 404/501 (no
     proxy on this host) falls through, any other proxy answer is authoritative.
  2. fallback (file:// or static host) → lazy-inject ai-key.js → direct call.
- **Verified in-browser, both modes**: server mode graded through the proxy with
  `CLP_GRADE` still undefined, zero key script tags, and no key string anywhere
  in the DOM; static mode (python http.server) fell through on 501 and graded
  via the direct path. Fixed two bugs found by testing: server JSON-stringified
  static file buffers (page rendered garbage), and 501-from-python breaking the
  fallthrough.
- **Run it**: `node career-launchpad/server.js` → http://localhost:8642 (this is
  now the recommended way — full security). `python -m http.server` and
  double-click still work; they just use the closure-key fallback path.
- **Security posture**: in server mode the key exists only on the machine
  running server.js. In fallback mode (file://) a DevTools user could still
  catch the auth header during a live call — that's inherent to client-side
  calls. Demo plan: present from `node server.js`. Rotate the key after Sep 4
  regardless (it was pasted in team chat once).

### 2026-09-02 — Session 8: progress system, clips currency, cosmetic shop
- **Progress pill in the app bar (far right)**: `LV n` + mini XP bar + clips
  count (paperclip icon). Click → progress modal. Updates live on every XP award.
- **Clips currency**: earned 1:1 with XP at every awardXp call (+ a level-up
  bonus of `25 × new level`). Existing saves migrate automatically: lifetime XP
  counts as unspent clips (check the STORED value at migration, not the merged
  one — first attempt had a bug where the base default `clips:0` defeated the
  migration check).
- **Progress modal** (`4c. CLIPS + SHOP + PROGRESS MODAL`; overlay z-400,
  toasts/confetti raised above it; Escape closes; backdrop click closes):
  level box (title, XP bar, to-go), wallet box, the 8-level ladder with
  per-level clip rewards (done/current/locked states), badge grid, field-note
  stats (streak, dossiers, mocks, terms KNOWN), and the shop.
- **The shop** (cosmetics only — footer states no scores, no shortcuts):
  - Lagoon / Ube / Rose accent packs (80 ea) — override the `--blue/-d/-t` trio
    via `html[data-accent]`; EQUIP toggles back to Launchpad Blue.
  - **The Shop Cat** (120) — pixel cat perches on the "IS" logo mark (theme-aware
    fills like Otto).
  - **Midnight Edition** (200) — full dark theme via `html[data-theme="midnight"]`
    overriding the neutral tokens. To make this possible, all 22 hardcoded
    surface whites became a `--card` token, and text-on-ink spots use `--on-ink`
    (mark, buttons-dark, toasts, nodes, chips). Otto re-drawn with
    `style="fill:var(--ink/--card)"` so he inverts too.
  - Otto Extended Vocabulary (60) — 12 new deadpan lines join the pool.
  - Full-Deck Confetti (40) — 60 squares instead of 30.
- **Testing note**: GUI-verified: pill render + live update, modal open by real
  click (layout vision-checked), Escape close, migration fix. The in-app
  browser's input layer died mid-session (clicks/screenshots stopped
  dispatching), so buy/equip/toggle/economy/persistence were verified at
  function level in the live page (all pass: exact spend math, broke-guard,
  equip cycles, cat mount/unmount, 20-line Otto pool, midnight+lagoon+cat
  persisted across reload; Midnight + cat also screenshot-verified). Worth a
  2-minute manual walkthrough before the demo.

### 2026-09-03 — Session 9: live on jarin.dev
- The Launchpad is now **hosted at https://jarin.dev/static/projects/career-launchpad/index.html**
  as a project on the team's personal portfolio (Flask site on Google Cloud,
  source repo `../Jarin.dev/`), and listed on the jarin.dev homepage (card
  NO. 7, thumbnail = `LogoISCore.png`).
- **Server-side grading in production**: `POST /api/grade` added to Jarin.dev's
  `app.py` — Flask proxies to Z.ai with the key read from env `ZAI_API_KEY` or
  the gitignored `ai_key.txt` (scp'd to the server only). Rate-limited 30/5min
  per IP; model/JSON-mode/thinking pinned server-side. The browser never sees
  the key on jarin.dev (verified: no key script, no key in DOM after grading).
- Jarin.dev deps/infra changed: `requests` added to requirements.txt,
  `gunicorn --timeout 120` in the Dockerfile (upstream can take ~75s), and
  urllib3 forced to IPv4 — **api.z.ai's IPv6 stalls Python requests** (curl
  falls back fine; symptom was a 75s read timeout).
- Client needed zero changes: the same `/api/grade` absolute-path fetch works
  on localhost (node server.js), on jarin.dev (Flask), and falls back to the
  closure-key path when hosted as a plain file.
- Verified live: homepage card renders, app loads, real grade returned through
  https://jarin.dev/api/grade, `ai-key.js` 404s on the host.
- **Demo implication**: the app can be demoed straight off the web — no local
  server or key file needed — grading runs on jarin.dev's backend.

### 2026-09-03 — Session 10: proper mobile version (Duolingo-style bottom tab bar)
- **Rule kept: desktop is untouched.** Every mobile change is scoped to
  `display:none`-by-default elements + one new `@media (max-width:680px)` block
  (the same breakpoint where the desktop nav already hid). The one JS behavior
  addition (tap-elsewhere-closes-tooltip) is guarded by
  `matchMedia("(max-width:680px)")` so desktop clicks behave identically.
  Verified at 1280×720 after all edits: tabbar `display:none` (zero rect),
  appnav flex/4 links, bz side-tab block, body padding 0, hero h1 97.28px,
  toasts bottom 22px — all identical to pre-session values.
- **Bottom tab bar** (`.tabbar`, z-120, in `<nav id="tabbar">` populated by
  `renderTabbar()` at boot): 5 items — HOME / FIT FINDER / TRACKS / MOCKS /
  BUZZWORDS. Icon in a 34px rounded tile + 8.5px mono label; active tab = blue
  label + `--blue-t` tile (recolored free by accent packs; Midnight gets a
  `#8ab4f8` label override because `--blue-d` is too dim on the dark bar).
  Ink top border, `env(safe-area-inset-bottom)` padding, press-scale feedback.
  Route → active-tab mapping in `markTabbar()` (results lights FIT FINDER;
  `#/sources` lights nothing). BUZZWORDS toggles the glossary panel and lights
  while open; an amber count badge (`#tbadge`, updated in `renderBZ`) shows
  known terms once > 0. New icons: `home`, `chat` (speech bubble + dots).
- **Phone layout pass (≤680px)**: `body` gets `--tb-clear` padding so content
  clears the bar; `viewport-fit=cover` added to the meta tag; `.bz-tab` edge
  tab hidden (BUZZWORDS lives in the bar now); buzzwords panel becomes a
  full-width z-150 drawer; buzzword tooltips become **fixed bottom sheets**
  above the bar (tap word → sheet, tap elsewhere → closes + blurs the term —
  iOS keeps `:focus` otherwise); toasts raised (96px + safe-area) and full
  width; 16px fonts on the mock textarea + panel search (stops iOS focus
  zoom); hero headline clamps to 40–56px with stacked CTA; quiz/mock Continue
  & rubric buttons go full-width; dossier header buttons split 50/50 and the
  5-tab row scrolls horizontally; results action buttons stack; dossier cards,
  shop, footer drop to one column; progress modal tightens. Footer + all pages
  verified to clear the bar at full scroll (17px gap).
- **Browser-tested on a 390×844 viewport, end to end**: tab bar render + all
  active states (incl. `#/track/*` → TRACKS, `#/results` → FIT FINDER), real
  taps through quiz → results, dossier, buzzwords drawer (104 rows, badge 7
  after promoting terms), flashcards button, tooltip sheet open/close, mock
  interview answer → review → end (stacked score panels, AI CTA), toast
  clearance, progress modal open/close, Midnight + Lagoon on the tab bar,
  no horizontal overflow anywhere. Screenshots vision-checked at every step.
  Two IAB quirks handled: the input layer died once (fixed by a fresh tab —
  same Session 8 failure mode), and `getComputedStyle` misreports the
  Midnight tab color while the rendered pixels are correct (verified by
  screenshot: #8ab4f8).
- Known behavior note: tapping an orange term can land on the just-opened
  sheet itself (hover/focus shows it before the click resolves), so
  "tap the same word again to dismiss" doesn't — tap anywhere else instead.

### 2026-09-03 — published
- **GitHub**: everything since v1 committed as `2683a8a` (AI grader, grading
  proxy, clips+shop, jarin.dev support, mobile edition) and pushed to
  `main` on Canar8ue/SBLearn. Secret scan before pushing: only
  `YOUR_ZAI_API_KEY_HERE` placeholders; `ai-key.js` confirmed gitignored.
- **jarin.dev (production)**: copied `index.html` into `../Jarin.dev/static/
  projects/career-launchpad/`, scp'd it to the GCloud server, rebuilt the
  container (`docker compose up -d --build`). Live-verified: the URL serves
  the new build (HTTP 200, tabbar markup present) and `/api/grade` responds.
  The Jarin.dev repo now also has the folder committed (`e858859`) so it
  matches the server; its other in-flight edits were left uncommitted.
- **Copy pass (same day)**: de-emphasized the fixed count — hero headline is
  now "MANY TRACKS. / ONE DEGREE.", and every "eight tracks / 8 TRACKS" is now
  "all the tracks" (microline, hero link, tracks-page h2, footer, Otto line).
  Dossier/mock progress counts (x/8) are untouched — they count actual content.
  Published to GitHub and jarin.dev immediately after.

### 2026-09-14 — Session 11: Scripture Launchpad (2nd site on the platform)
- **New product, new folder**: `scripture-launchpad/` — a scripture study app with the
  same UI system (flat Google × print-shop retro, XP/streak/badges/clips/shop,
  orange-underlined gospel-terms glossary + flashcards) rethemed for the five standard
  works. The career site was not touched.
- **Learning model replaces quiz-first design**: chapter-by-chapter study — each chapter
  page has an original summary (WHAT HAPPENS), a context line (who/where/when), 1-3
  quoted key verses, a one-line TAKE AWAY, then a **3-question auto-graded quiz**
  (one question at a time, instant right/wrong + why, FLAWLESS stamp on 3/3).
  Completing a quiz auto-marks the chapter read. +10 XP read · +15 quiz · +5 perfect.
  Zero network calls, zero API keys, state in localStorage `slp_state_v1`.
- **Content (v1)**: Book of Mormon **complete** — all 237 chapters with study guides +
  quizzes (711 questions). All five volumes fully structured with reading trackers:
  OT 39 books/929 chapters, NT 27/260, D&C 138 sections + 2 Official Declarations,
  PGP 16 — skeleton chapters show "study guide in progress" + read toggle. OT/NT/D&C/PGP
  guides come in follow-up passes. 81-term gospel glossary. Authoring was split between
  subagents and direct writing; every file validated by `validate.js` (schema) and
  `check.js` (merge/ordering/regex/answer-distribution), spot-checked for accuracy.
- **App structure** (multi-file now): `index.html` + `styles.css` + `app.js` +
  `data/*.js` (plain script tags, so file:// double-click still works). Volume accents:
  OT brick/NT blue/BoM gold/D&C teal/PGP violet. Mascot: **Wick** the pixel oil lamp
  (deadpan lines, 12 more in the shop). Shop: 3 accent packs (Sea of Galilee,
  Wilderness, Liahona), Midnight theme, the Shop Ox, Wick's Second Journal, Full-Deck
  Confetti. Mobile tab bar: HOME / VOLUMES / READ / TERMS / YOU.
- **Quiz answer rotation**: authored data keeps answers wherever the author put them;
  `renderQ` rotates choices deterministically per chapter+question so the answer index
  is never a tell.
- **Three bugs found by browser testing**: (1) `[hidden]` attribute defeated by
  `display:flex` on `.modal-root`/`.fc-overlay` — invisible overlay swallowed all
  clicks; fixed with a global `[hidden]{display:none!important}`. (2) clips pill went
  stale after shop purchases (missing `updatePill`). (3) read button went stale after a
  quiz auto-marked the chapter read.
- **NEW RULE (user)**: deploy **max 5 subagents at a time**. (The first 12-concurrent
  batch hit Z.ai-style rate limits — 4 agents failed; see API key note pattern.)
- **Subagent reality check**: of the first 12 background agents, 4 failed fast on rate
  limits and the other 8 stalled silently for 50+ min. Recovery: authored canon.js,
  glossary.js, and 6 BoM parts directly; dispatched a fresh batch of 5 (within the new
  rule) for the remaining parts — all completed and validated.
- **Live on jarin.dev**: `static/projects/scripture-launchpad/` + homepage card NO. 1
  (top of `data/projects.json`, thumbnail `static/images/scripture-launchpad.png`,
  flat pixel-lamp art generated with PIL). Slug routing already handles
  `/ScriptureLaunchpad/`. Deployed via scp (folder + projects.json + thumbnail) +
  `docker compose up -d --build`; verified live: homepage card, app 200, all data
  files 200, "5 VOLUMES /// 1,582 CHAPTERS" renders.
- **Test status**: function-level browser verification done (quiz flow, XP math
  incl. badge bonuses, shop buy/equip/persistence, Midnight + accent live-rewiring,
  glossary panel/flashcards/familiarity, mobile 390×844 layout, desktop 1280 layout).
  The in-app browser's input layer + screenshots were broken this whole session
  (known IAB failure mode) — clicks were driven via evaluate; **do a 2-minute manual
  click-through before demoing**.

### 2026-09-14 — Session 12: full scripture text on the platform
- **Every chapter of all five standard works is now readable in the app** — no leaving the
  site. New read view at `#/read/<bid>/<n>` (the chapter segment is optional for single-unit
  books): volume-accented header, verse-per-paragraph text with accent-colored verse numbers,
  prev/next chapter nav that crosses book boundaries (Malachi 4 → Matthew 1), a "Study guide"
  link back on guided chapters, and the same MARK AS READ toggle (+10 XP, badges, streak).
  Gospel-terms annotation runs on scripture text too (hover/tap tooltips as everywhere else).
- **Source**: official Gospel Library text (2013 edition) via the `bcbooks/scriptures-json`
  dataset + Official Declarations 1–2 scraped from churchofjesuschrist.org (the dataset lacks
  the ODs). Coverage: **1,584 chapters, 42,033 verses**. Text is © Intellectual Reserve, Inc. —
  attribution line on every read view ("TEXT © INTELLECTUAL RESERVE, INC. /// OFFICIAL TEXT IN
  THE GOSPEL LIBRARY") + rewritten About card + footer; raw source JSONs stay in gitignored
  `text-src/`. Fine for a noncommercial student project with attribution.
- **Data pipeline**: `tools/build-text.js` (dev tool, committed) converts `text-src/*.json` →
  `data/text-manifest.js` (volume→chunk map) + 13 `data/text-*.js` chunks (~6.3 MB total,
  whole books, ≤~700 KB each). Chunks **lazy-load per volume** on first read-view visit
  (script injection), so boot is unchanged and file:// double-click still works. Regenerate
  with `node tools/build-text.js`. `SLP_TEXT[bid]` = `{n:[verse,...]}`, or
  `{verses:[...], heads:{beforeIndex:title}}` for the ODs' subsection headings.
- **Chapter pages**: header now carries a dark **Read full chapter** button next to MARK AS
  READ; skeleton ("study guide in progress") pages traded the old external Gospel Library
  link for a primary in-app **Read the full chapter** CTA. The mobile READ tab now opens the
  read view of the continue target (it is called Read, it reads).
- **Copy**: home microline now "FULL TEXT INCLUDED"; About "Scripture text" card rewritten
  (full text included, © IRI, noncommercial use); footer no longer claims the text is public
  domain. Meta description mentions the full text.
- **Data fix found by the new coverage check**: the Book of Mormon was actually missing
  **Mormon 8–9** (237 → 239 chapters). Both authored in house style (Moroni alone after
  Cumorah; Moroni's answer to latter-day doubters). Quiz total 711 → **717**. Site-wide
  totals (home microline, volumes page) compute dynamically and now read 1,584.
- **Label fix**: single-unit books no longer render "OFFICIAL DECLARATION 1 1" —
  `bidLabel`/`viewChapter` collapse the trailing unit number when `unitCount(b)===1`.
- **Bugs caught by browser testing**: (1) forgot the `text-manifest.js` script tag on the
  first run — read view correctly fell back to the "not available" card, which is how the
  fallback got tested; (2) `#/read/od-1` without a chapter segment hit the lost-page route —
  segment is now optional.
- **Test status**: `validate.js` + extended `check.js` (now verifies text coverage: every
  canon unit must have verses) pass with 0 problems. Desktop 1280 vision-checked light +
  Midnight (incl. Psalm 119, 176 verses). Mobile 390×844 function-checked: READ tab active
  state, full-width controls, 16px/1.75 reading type, no horizontal overflow. The IAB input
  layer + screenshots decayed mid-session again (known failure mode; clicks via evaluate) —
  do the usual 2-minute manual click-through before demoing.

### 2026-09-15 — Session 14: Android APK via GitHub Actions
- **The Scripture Launchpad now ships as a real Android APK**, rebuilt
  automatically on every push: download from the moving pre-release
  **https://github.com/Canar8ue/SBLearn/releases/tag/android-latest**
  (`ScriptureLaunchpad.apk`, ~2 MB, universal). Same signing key every build, so
  updates install over the previous version.
- **WebView shell, site bundled**: `scripture-launchpad/android/` is a
  zero-dependency Android project (framework WebView, no AndroidX) that loads
  `file:///android_asset/index.html`. The workflow copies `index.html`,
  `styles.css`, `app.js`, `data/` into assets at build time — so the APK is
  **fully offline by construction** (no service worker needed; sw.js stays
  skipped on file:// by the http(s) guard in app.js). Wired: JS + DOM storage
  (localStorage works), WebChromeClient (the reset confirm() works), back key
  walks hash history (chapter-by-chapter back nav), external http(s) links open
  in the browser, ink status bar, rotation doesn't reload. minSdk 24 / target 34.
- **Signing**: local PKCS12 keystore generated with Python `cryptography` (no
  JDK/keytool on this machine) at `android/app/keystore.p12` +
  `keystore-password.txt` — both gitignored, never committed. Their base64 +
  password are repo **Actions secrets** (`KEYSTORE_B64`, `KEYSTORE_PASS`,
  `KEY_ALIAS=scripture`), encrypted with the repo public key via tweetnacl
  sealed box (npm install in /tmp). If secrets vanish, the workflow falls back
  to a debug-signed APK (install works; future updates would need a reinstall).
- **Workflow** `.github/workflows/build-apk.yml`: sync assets → decode keystore
  → `gradle assembleRelease` (Gradle 8.9 via setup-gradle, Temurin 17, AGP 8.5.2)
  → rename → refresh the `android-latest` pre-release (delete+recreate via API,
  APK attached) → upload artifact too. Verified: run succeeded first try;
  APK downloaded and inspected (dex + manifest + all 26 data files + 10 icon
  PNGs under AGP-short res names; v2 signature, no v1 — fine for minSdk 24).
- **Icons**: `tools/make-android-icons.py` (same lamp pixel map) → legacy
  mipmap PNGs (48–192) + adaptive foreground (108–432, 58% safe zone), ink
  background via colors.xml.
- **Install on a phone**: open the android-latest release link in the phone
  browser → tap ScriptureLaunchpad.apk → allow "install from this source" when
  prompted → open Scripture Launchpad. Not app-store distribution; sideload only.
- The PWA (Session 13) and the APK are two shells around the same web app;
  content changes only need a push — both workflows rebuild automatically.

### 2026-09-22 — Session 15: Doctrine & Covenants + Pearl of Great Price fully guided
- **The D&C (138 sections + both Official Declarations) and the entire Pearl of Great Price
  (Moses, Abraham, JS—Matthew, JS—History, Articles of Faith) now have complete study guides
  + 3-question quizzes** — 156 new units, 468 new questions. Site total: 395 authored
  chapters, 1,185 quiz questions. Only OT (929) and NT (260) remain skeleton volumes.
- **Authoring pipeline**: 13 subagents in 3 waves of ≤5 (rule 10 held), each grounded in the
  actual 2013-edition text — agents dumped their sections' verses from `data/text-*.js` to a
  scratch file, read them in full, then wrote in the established BoM house style
  (100–170-word summary, one-line context with dates only where standard history is sure,
  2–3 key verses quoted verbatim, takeaway, 3 quiz Qs with recall/comprehension/principle
  spread and balanced answer indices).
- **New data-file pattern (attach-to-canon)**: canon skeletons must stay (chapterCount, unit,
  blurb), so dc/pgp part files don't push new book entries like the bom files do — they
  `find` the canon book and `_bk.chapters.push(...)` (with a hard throw if canon.js didn't
  load first; alphabetical file order guarantees it in both browser and node checks). Zero
  changes needed to the app merge or check.js. Files: `data/dc-01…10-*.js`, `data/pgp-01…04-*.js`,
  all wired as script tags in index.html (after bom-10, before app.js).
- **Independent strict verification (found what the agents' self-checks missed)**: a one-off
  script re-checked every new key verse against the text chunks at the ref's exact verse
  position (verbatim or opening-portion only) + length limits + duplicate-question scan.
  8 findings, all fixed by hand: 3 mid-verse quotes (D&C 7:3, 20:37, 57:3 — now true
  opening portions), 1 punctuation typo in a quote (12:3), 1 wrong verse ref (D&C 101:36 →
  101:38), D&C 13:1's two half-quotes merged into one full-verse entry, and the generic
  "To whom was this revelation addressed?" quiz question de-duplicated across sections
  54/112/126 (reworded to be section-specific). Final: 445 key verses position-verified,
  0 problems in validate.js + check.js + the strict pass. Spot-reads of D&C 76, 121, OD 2,
  Abraham 3 confirmed accuracy and voice. (Note: JS—History's bundled text doesn't narrate
  the lost-116-pages story, so its guide correctly omits it — it's covered in D&C 3/10.)
- **UI made data-driven (was hardcoded BoM-only since Session 11)**: new `volGuided(vid)`
  helper; the volumes-page chips, volume-page stamp, and the volumes microline now derive
  from the data instead of `v.id==="bom"` — BoM/D&C/PGP show GUIDES LIVE + GUIDES COMPLETE,
  OT/NT stay TRACKER. Home "routine" cards and the skeleton chapter card copy updated to
  name all three guided volumes.
- **Router fix**: `#/chapter/<bid>` without a chapter segment hit the lost page (Session 12
  made only the read route's segment optional). Now optional for chapter too (same
  `parseInt||1` fallback), so `#/chapter/od-1` works — relevant now that the ODs are guided.
  Label collapse already handled ("OFFICIAL DECLARATION 1", no doubled number).
- **Browser-tested (desktop 1280 + mobile 390×844)**: volumes chips/stamps/microline; D&C
  volume page (GUIDES COMPLETE, 3/3 books chipped); D&C 76 guide renders (summary, context,
  key verses, takeaway); **real-click quiz flow 3/3 → FLAWLESS stamp → chapter auto-marked
  READ → +20 XP → pill updated**; OD-1/OD-2/A-of-F/JS-H chapter pages; read view D&C 121
  with © IRI line; zero mobile horizontal overflow; screenshots vision-checked desktop +
  mobile. Testing gotcha: the IAB served a cached app.js after edits — worked around with a
  no-store static server on a fresh origin (scratch tooling, not committed).
- **Publishing**: committed and pushed to main (`3e65e99`; `scripture-launchpad/**` changed →
  deploy-pages.yml regenerates sw.js and redeploys GitHub Pages automatically — verified live:
  `data/dc-01-foundations.js` 200 on canar8ue.github.io). **jarin.dev synced the same day**:
  runtime files copied into `../Jarin.dev/static/projects/scripture-launchpad/`, committed
  there as `ffe2bae` (repo's other in-flight edits left uncommitted per precedent), scp'd
  (scripture folder only) to the GCloud server, `docker compose up -d --build`; verified
  live: index 200 with all 14 new script tags, `data/dc-01-foundations.js` 200, homepage
  card intact.

### 2026-09-23 — Session 17: Book Launchpad published on jarin.dev + SB Learn hub
- **Published**: Book Launchpad runtime files (index.html, styles.css, app.js, data/*.js — no
  tools/text-src) copied into `../Jarin.dev/static/projects/book-launchpad/`; live at
  https://jarin.dev/BookLaunchpad/ (verified: 12 books, 220 units, data chunks 200, Meditations 1
  guide renders with glossary underlines).
- **SB Learn hub built** (`../Jarin.dev/static/projects/sblearn/`): "LAUNCHPAD" landing page in the
  launchpad visual family that demos all three launchpads and links to them; stats sourced by
  counting data files this session — scripture 1,584 units / 4,752 quizzes (90 books, all five
  works), book 220 units / 660 quizzes, career 8 tracks; hub totals 1,804 units, 5,412 quiz
  questions. Live at https://jarin.dev/SBLearn/.
- **Homepage reordered** (`../Jarin.dev/data/projects.json`, card NO. order): 1 Mesa Collective,
  2 Shop Bird, 3 North Current, 4 LAUNCHPAD (→ /SBLearn/, thumbnail `static/images/launchpad.svg`),
  then the rest in their prior order (M&C, Bread, New Bread, Medline, Jesus game, Christ
  Chronology). The standalone Scripture + IS Career Launchpad cards were consolidated into the
  LAUNCHPAD card (both sites still hosted and linked from the hub) — easy to re-add as cards if
  wanted.
- **Profile updated** from `../Shelf/Resume/output/Jarin_Canar_Resume_ATS.txt`: DCSysTech web
  design/SEO lead (Aug 2026–present) first, M&C end date corrected to Aug 2026, Knight Motor
  intern→SM split, GPAs (BYU 3.68, UVU 3.93), bilingual EN/ES, BYU Calendar project, phone.
- **Deployed** to the GCloud server and verified live (homepage order, /SBLearn/, /BookLaunchpad/,
  /profile, scripture/career/game all 200; `/api/grade` untouched). Gotcha logged in the Jarin.dev
  repo: Git Bash `scp -r` with directory args silently no-ops — deploy used
  `tar -cf - … | ssh … tar -xf -` + `docker compose up -d --build`.
- Committed `5917b7c` in `../Jarin.dev` (this session's files only: projects.json, templates,
  style.css, images, book-launchpad/, sblearn/ — career-session backend edits + jesus-christ-game
  folder left uncommitted per precedent). ISCore1 commit below touches progress.md only.

### 2026-09-22 — Session 16: Book Launchpad (3rd site) — Tier 1 complete
- **New product, new folder**: `book-launchpad/` — a reading platform for public-domain books with the
  same UI system and learning model as the Scripture Launchpad (unit study guide + 3-question quiz +
  full text on-platform, XP/streak/badges/clips/shop, orange-underlined reading-terms glossary +
  flashcards). **The scripture app was not touched** (another session was working in it all day —
  its uncommitted OT/NT files are still untouched in the working tree; commit below stages explicit
  paths only).
- **Book list (user-curated)**: philosophy/education-weighted public-domain list agreed with the team
  first; fiction vetoed. *The Richest Man in Babylon* was dropped at build time (compiled book
  commonly dated 1930 + renewal questions = murky PD status) and replaced with The Science of Getting
  Rich. **Rule of thumb going forward: only pre-1931 US publications AND pre-1931 English
  translations** (Giles/Legge/Marriott/Long/James/Stewart/Higginson). Hagakure and Book of Five Rings
  have no PD English translation at all.
- **Tier 1 = 12 books, 3 collections**: Philosophy & Power (Meditations 12u, Enchiridion 13u, On the
  Shortness of Life 5u, Consolation of Philosophy 5u, The Prince 26u), Eastern Wisdom (Art of War 13u,
  Tao Teh King 81u), Self-Mastery (As a Man Thinketh 7u, Science of Getting Rich 17u, How to Live on
  24 Hours a Day 12u, A Message to Garcia 1u, The Prophet 28u). **220 units, 660 quiz questions, 89
  glossary terms.** Tiny works grouped (Enchiridion §1-52 → 13 four-teaching units; Seneca 20 sections
  → 5 parts).
- **Text pipeline**: `tools/build-text.js` converts gitignored `text-src/pg*.txt` (Project Gutenberg
  downloads) → `data/text-<bid>.js` chunks (lazy-loaded per collection via `data/text-manifest.js`,
  same pattern as scripture) + plain-text dumps in `text-src/dumps/` for guide authors. Every book
  needed its own splitter (Legge's Tao has four different chapter-marker shapes; the Prophet has no
  body headings — poems are anchored on their `_Italic_` request lines; Prince headings are
  "CHAPTER N." alone on a line; Meditations cuts at the APPENDIX marker; Consolation body headings are
  the LAST "BOOK N." per number). 220/220 units verified with text.
- **Authoring**: 13 subagents in 3 waves of ≤5 (rule 10 held). Each agent read its book's dump in
  full, wrote the guide file in the established house style (summary 90-170w, one-line context, 2-3
  verbatim quotes with refs, one-line takeaway, 3 quiz Qs: recall/comprehension/principle), then
  self-verified with **`tools/check-quotes.js <bid>`** (every quote whitespace-normalized-verbatim
  against the text chunk + quiz shape + answer-spread checks) until 0 problems. Guide files follow the
  attach-to-canon pattern (tao ships as tao-a.js + tao-b.js; the checker globs `<bid>-*.js`).
- **Strict verification (all green)**: validate.js + check.js (canon-first load order — alphabetical
  loading breaks attach-to-canon) + check-quotes on all 12 books + a cross-book scan: zero duplicate
  questions across 660, no templating, answer distribution sane (rotation in renderQ scrambles display
  order anyway), summaries 88-176 words. Hand spot-reads of prince:17, tao:8, prophet:4, enchiridion:1,
  seneca:2 confirmed summaries/quotes/quizzes accurate to the texts.
- **Shell re-theme (zero styles.css changes)**: VOLUMES → 3 collections (data-driven accents: blue/
  brick/green), localStorage `blp_state_v1`, unit labels book/part/poem/essay with short codes,
  unit titles displayed (t field → "On Love", "Laying Plans" under the unit heading and in toast
  labels via bidLabel), guide labels "The big idea"/"Key passages", read view shows paragraphs without
  verse numbers + per-book attribution line (author (year) /// trans. X /// public domain ///
  Project Gutenberg link), book page header carries author/translator/year + a "Next unit" smart link
  (firstUnread helper). Mascot: **Quill the pixel owl** (reuses .wick CSS classes); shop: Athenaeum/
  Clothbound/First Edition accents, the Bookworm, Quill's Second Journal, Midnight, confetti. PWA/SW
  section stripped for now (no manifest/sw.js yet — phone app comes later). One mid-session bug found
  and fixed: an accidental edit had deleted modal HTML (caught by re-read, repaired).
- **Browser-tested (1280 + 390 viewports)**: home hero + owl + microline "3 COLLECTIONS /// 12 BOOKS
  /// 220 UNITS", shelf with GUIDES LIVE on all collections, guide render, real quiz flow (answers →
  FLAWLESS → auto-read → +50 XP incl. badge → pill updates), rotation maps authored answers correctly,
  read view (Tao 1 with attribution), glossary panel 89 terms, Midnight theme on mobile, tab bar.
  Screenshots vision-checked. IAB input-layer decayed mid-session (known failure mode) — quiz clicks
  driven via evaluate; do the usual 2-minute manual click-through before demoing.
- **Not deployed yet** (no GitHub Pages workflow for book-launchpad, jarin.dev not synced — both are
  follow-ups so the other session's in-flight scripture deploy isn't disturbed). Local preview: any
  static server in `book-launchpad/` (e.g. `python -m http.server 8647`).
- **Next for Book Launchpad (waiting on team review of Tier 1)**: Tiers 2-5 from the approved book
  list (same wave pipeline — dumps regenerate via build-text.js), then PWA + APK + deploy targets.

### 2026-09-22 — Session 16: OT + NT fully guided — ALL FIVE SCRIPTURE VOLUMES COMPLETE
- **The Old Testament (929 chapters) and New Testament (260) now have complete study guides +
  3-question quizzes** — 1,189 new units, 3,567 new questions, in 44 new data files
  (`data/ot-01…35-*.js`, `data/nt-01…09-*.js`, all attach-to-canon like dc/pgp). Site total:
  **1,584 authored chapters (every canon unit), 4,752 quiz questions.** The Scripture
  Launchpad's content build is DONE.
- **Authoring pipeline (scaled from Session 15)**: 44 subagent batches in waves, never more
  than 5 concurrent (rule 10). Each agent read its books' full KJV text from a pre-generated
  dump (`text-src/dumps/*.txt`, built with the new `tools/dump-text.js book [start-end] …`),
  wrote one part file, then self-verified with the new **`tools/verify-guides.js`** until 0
  problems. verify-guides checks each key verse's ref against the actual text chunk at the
  exact verse position, enforces full-verse-or-opening-portion quotes (mid-verse starts
  rejected), summary/context/takeaway limits, quiz shape, 4-choice uniqueness, answer-index
  balance (~25% each), and duplicate question stems (same-book exact dupes; `--all` for
  cross-book). Agents' quote mismatches vs the stored text (dump/canon punctuation drift,
  e.g. Josh 2:11, Num 3:39) were caught and fixed by this loop.
- **Independent full-corpus pass after all 44 landed**: `verify-guides --all` → 1,189 chapters,
  3,547 key verses position-checked, 0 problems; validate.js (authored 1,584, problems 0) +
  check.js (quiz 4,752; near-uniform answer distribution) + a chapterCount coverage check (all
  OT/NT books fully populated and sequential). Spot-reads (Gen 1, Ps 23, Ps 61, Isa 53, John 17,
  Acts 2) confirmed accuracy and voice. One acceptable cross-book dupe (Micaiah's vision in both
  1 Kgs 22 and 2 Chr 18 — same event, different books).
- **UI updates**: volumes-page microline now handles the all-guided state ("STUDY GUIDES LIVE
  FOR ALL FIVE VOLUMES /// EVERY CHAPTER GUIDED" — previously it would have rendered a dangling
  "/// TRACK READING NOW"); home "routine" cards now say every book ships with a guide
  ("GUIDES /// ALL FIVE VOLUMES LIVE"). volGuided() needed no change — chips/stamps (GUIDES
  COMPLETE on all five volume pages) derive from data automatically.
- **Wiring**: 44 script tags added to index.html (after text-manifest — any order works as long
  as canon.js loads first); sw.js regenerated locally (92 precache entries); app.js syntax ok.
- **Browser-tested (desktop 1280 + mobile 390×844)**: home microline "5 VOLUMES /// 1,584
  CHAPTERS"; all five volume cards GUIDES LIVE; OT volume GUIDES COMPLETE; **real-click quiz
  flow on Genesis 1: 3/3 → FLAWLESS → chapter auto-marked READ → +XP → pill updated** (IAB
  click layer died mid-test — known failure mode — clicks driven via evaluate; accessible-name
  quirk: quiz buttons have no space between number and label); read view Genesis 1 lazy-loaded
  31 verses with © IRI line; gospel-term annotation works in OT text; zero horizontal overflow
  on volumes/volume/chapter/read/Malachi-4 mobile views; screenshots vision-checked.
- **Publishing**: committed `f54babb` and pushed to main → both workflows green (Deploy
  Scripture Launchpad (Pages) ✅, Build Android APK ✅ — android-latest release refreshed);
  verified live on canar8ue.github.io (data/ot-01 200). **jarin.dev synced same day**: runtime
  files + sw.js/manifest/icons copied (first time the PWA files ship there — installed-app mode
  now works on jarin.dev too), committed `5845b9a` in ../Jarin.dev (other in-flight edits left
  uncommitted per precedent), scp'd (scripture folder only) + `docker compose up -d --build`;
  verified live: index 200 with all 44 new script tags, ot-01 200, sw.js 200, homepage card OK.

### 2026-09-14 — Session 13: installable phone app (PWA) + GitHub Actions deploy
- **The Scripture Launchpad is now a real phone app**: open
  https://canar8ue.github.io/SBLearn/ on a phone → install / add-to-home-screen →
  it launches standalone with the lamp icon, and **works fully offline** (the
  service worker precaches the whole site including all scripture text, ~6.7 MB).
- **Deployed by GitHub Actions** (`.github/workflows/deploy-pages.yml`): on every
  push to main touching `scripture-launchpad/**`, CI regenerates sw.js and deploys
  the folder to GitHub Pages (source = GitHub Actions, enabled via the API — `gh`
  CLI is not installed on this machine; the git credential worked for the Pages
  API call). jarin.dev was NOT touched this session; its copy still runs the
  pre-PWA build until the next sync.
- **PWA pieces** (all inside `scripture-launchpad/`):
  - `manifest.json` — standalone display, portrait, ink theme color, lamp icons.
  - `icons/` — 5 PNGs generated by `tools/make-icons.py` (Pillow): the appbar
    lamp mark (ink square, white lamp, amber flame) at 192/512 + maskable
    (58% safe zone) + apple-touch-icon 180.
  - `sw.js` — **generated** by `tools/build-sw.js` (committed, zero deps): hashes
    every runtime file into the cache version, precaches all 34 assets on
    install, cache-first + navigation fallback to index.html, runtime-caches the
    Google Fonts (opaque), stale-cache cleanup on activate. CI regenerates it
    before every deploy so the precache list can never drift from the files.
  - `index.html`: manifest link, theme-color, apple touch/meta tags.
  - `app.js` **section 11**: SW registration (http(s) only — file:// untouched),
    beforeinstallprompt capture, "UPDATE READY" toast when a new version lands,
    and an **install card on the About page** ("Take it to your phone"): Install
    button on Android/Chrome, SHARE → ADD TO HOME SCREEN instructions on iOS,
    generic hint elsewhere, "you're running the app" note once standalone.
  - `styles.css`: appbar gains `env(safe-area-inset-top)` padding (0 in a normal
    browser tab; clears the status bar when installed) + install-hint styles.
- **Browser-tested end to end, desktop 1280 + mobile 390×844**: SW registered →
  activated → controlling; cache holds all assets; **killed the local server and
  reloaded — home, read view (1 Ne 3 AND Genesis 1, i.e. lazy text chunks), quiz
  (tapped through to the score stamp + XP + auto-read), terms drawer (81 rows),
  and the About install card all worked purely from cache**. Zero horizontal
  overflow on every mobile view; full-width controls; 16px reading type; tab bar
  active states correct. Vision-checked: desktop read view, mobile home, mobile
  read view, mobile terms drawer. IAB input layer decayed late in the session
  (close-button click + screenshots; known failure mode) — those two steps were
  driven via evaluate instead. Real-tap quiz flow worked before the decay.
- **How to install on a phone**: Android/Chrome → the browser's Install option
  (or the About page button once the prompt fires); iPhone/Safari → Share →
  Add to Home Screen. First visit caches everything (~6.7 MB, one time).

### 2026-09-14 — published (Session 12)
- **GitHub**: committed as `bcd6b1f` and pushed to `main` on Canar8ue/SBLearn. Secret
  scan: no keys anywhere in the new files (text chunks are scripture; text-src stays
  gitignored). The unrelated logo rename (LogoISCore → LogoCareerLaunchpad) was left
  uncommitted on purpose.
- **jarin.dev (production)**: synced the scripture-launchpad folder into
  `../Jarin.dev/static/projects/scripture-launchpad/` (runtime files only: index.html,
  styles.css, app.js, data/ — dev tools and text-src not shipped), committed there as
  `68ee4a8` (repo's other in-flight edits left uncommitted per precedent), scp'd to the
  GCloud server, `docker compose up -d --build`.
- Verified live: index.html 200 with the text-manifest script tag; text-ot-1 / text-dc-od
  / text-pgp-1 / manifest all 200; homepage card NO. 1 still present; loaded
  `…/scripture-launchpad/index.html#/read/1-ne/3` in the browser from production —
  31 verses render with the © IRI attribution line.

### Next up (waiting on team input)
- **Scripture Launchpad: content build complete as of Session 16** — all 1,584 canon units
  guided across the five standard works; all five hosting targets in sync (GitHub Pages + PWA +
  APK rebuild on push; jarin.dev synced manually). Remaining work is quality polish only:
  ongoing spot-reads of the AI-drafted OT/NT guides, glossary additions if the team wants more
  gospel terms, and any copy fixes found during review.
- **Book Launchpad** (parallel project, `book-launchpad/`): Tier 2-5 + deploy targets per its
  own log — not on jarin.dev or Pages yet.
- Replace placeholder interview questions with researched real ones (edit the
  `interview` array inside each career in `CAREERS`).
- Verify salary numbers against real sources before demo day.
- Team's interview research + any new questions to fold in.
- Record the ≤5 min video (flows: hero → quiz → results → dossier → mock → buzzwords).

---

## 3. Design language

**One-line identity:** Google Material flatness × print-shop retro (AWGE-ish) —
utilitarian, typographic, zero fluff. It must NOT look AI-generated: no gradients,
no purple/blue hero washes, no glassmorphism, no emoji, no "Empower your journey" copy.

### Color (flat only — no gradients anywhere)
| Role | Token / hex |
|---|---|
| Ink (primary text) | `#202124` |
| Secondary text | `#3c4043` / `#5f6368` |
| Hairlines / borders | `#dadce0` (Google grey 300) |
| Surfaces | `#ffffff` / `#f8f9fa` |
| Blue (primary action) | `#1a73e8` (text-dark `#174ea6`, tint `#e8f0fe`) |
| Green (success/continue) | `#188038` / bright `#1e8e3e`, tint `#e6f4ea` |
| Red (stamps, alerts) | `#d93025`, tint `#fce8e6` |
| Yellow/amber (streak) | `#f9ab00` (accessible text `#b06000`) |
| Orange (buzzwords ONLY) | `#e8710a` |
| Career accents | SWE `#1a73e8` · BSA `#188038` · Data `#e8710a` · Cyber `#d93025` · ITPM `#7627bb` · UXPM `#d81b60` · ERP `#00796b` · Cloud `#546e7a` |

### Typography
- **Display**: Archivo (700–900), uppercase, tight tracking (−.01 to −.03em), huge sizes
  (hero h1 clamps to ~106px). Outlined-text variant (transparent fill + 2.2px text-stroke)
  for the second hero line — use sparingly.
- **Body/UI**: Roboto 400/500, 14–18px.
- **Mono (labels/kickers/data)**: Roboto Mono 500/700, 9–13px, letter-spaced
  (.08–.24em) uppercase for kickers, meta lines, stamps, salaries.
- All three load from Google Fonts with system fallbacks — app must stay usable offline.

### Retro elements (restraint: a few per screen)
- Rotated red **stamps** ("TOP MATCH", "EST. 2026 — PROVO, UT") — 2px border, mono, ~-3°.
- **Hard cards**: 1.5px ink border + 4px offset solid shadow, lift on hover. Used for
  quiz card, track cards, top-match, model answers. Regular Google cards (soft border,
  16px radius) for everything else.
- Dotted rules (2px dotted #9aa0a6) as section separators; dotted list underlines.
- Mono ALL-CAPS microcopy with `///` and `·` separators.
- **Otto**: 16×16-grid pixel briefcase (inline SVG, ink-on-white, blinking eyes),
  one dry speech line per load. Deadpan, never cutesy.

### Layout & hierarchy principles
- **One focal point per screen.** Home: headline + single CTA. Quiz: the question card.
  Results: the top-match card. Everything else recedes (grey, smaller, lower contrast)
  and gains contrast on hover.
- Max width 1180px, generous whitespace, left-aligned compositions.
- Sticky appbar: brand left, nav center-right, **progress pill far right**
  (LV + XP mini-bar + clips — the one chrome element besides nav).
- Sticky right rail (home) for progress cards; sticky rail top offset 78px.
- Shop cosmetics: accent packs + Midnight theme override the `--blue` trio /
  neutral tokens via `html[data-accent]` / `html[data-theme]`; surface whites
  use `--card`, text-on-ink uses `--on-ink`. Otto and the shop cat use
  `var(--ink)`/`var(--card)` fills so they invert in Midnight.

### Components (reuse, don't invent)
Buttons: Google pills — primary (blue filled), dark (ink), green (continue/success),
ghost (outlined white), `btn-sm`/`btn-hero` sizes. Chips: outlined pills. Tabs: pill
group, active = blue tint fill. Toasts: dark snackbar bottom-left, `+XP` tag in amber.
Confetti: 30 flat squares in the 5 Google colors (60 with the Full-Deck shop item;
never on reduced-motion). Tooltips: hard-shadowed white cards with ink border + arrow.
Icons: single inline-SVG set (24px viewBox, stroke 1.8, round caps, `overflow:visible`).
**Progress modal**: dimmed overlay + hard card (z-400) — level/wallet boxes, dotted
ladder rows, badge grid, stat chips, 3-col shop cards with swatches and BUY/EQUIP/ON
buttons. **Progress pill**: quiet bordered pill in the appbar (bar hidden <680px).

### Accessibility
Visible focus rings (2px blue, offset 2). All interactive elements reachable by
keyboard (quiz answers via 1–6 keys, Enter to continue, Escape closes panel).
`prefers-reduced-motion` kills ticker-legacy animations, hero entrance, confetti,
Otto blink. Contrast: Google palette pairs pass; orange is underline/decoration only.

---

## 4. File tree

```
ISCore1/                                    # repo root
├── progress.md                             # This document
├── .gitignore                              # Ignores scratch + course PDF
├── .github/workflows/deploy-pages.yml      # CI: deploy scripture-launchpad → GitHub Pages (Session 13)
├── .git/                                   # Git data (never edit)
├── CORE CASE F26 - IS Career Launchpad_v2.pdf   # Case brief (LOCAL ONLY)
├── case_text.txt                           # Scratch dump of PDF (ignored)
├── career-launchpad/                       # Site 1: IS Career Launchpad (case project)
│   ├── index.html                          # The entire app
│   ├── server.js                           # Static server + /api/grade grading proxy (key stays server-side)
│   ├── ai-key.js                           # LOCAL ONLY (gitignored): Z.ai key — closure for browser, export for server
│   └── ai-key.example.js                   # Template to create ai-key.js (committed)
└── scripture-launchpad/                    # Site 2: Scripture Launchpad (Session 11)
    ├── index.html                          # Shell: appbar, mounts, script tags, PWA meta
    ├── styles.css                          # Full design system (same language as career)
    ├── app.js                              # State, XP/shop/badges, glossary, views, router, SW+install
    ├── manifest.json                       # PWA manifest (Session 13 phone app)
    ├── sw.js                               # Precache service worker (generated — node tools/build-sw.js)
    ├── icons/                              # PWA icons (generated — python tools/make-icons.py)
    ├── validate.js                         # Dev: schema validation harness (node validate.js)
    ├── check.js                            # Dev: merge/ordering/glossary/text coverage checks (node check.js)
    ├── tools/
    │   ├── build-text.js                   # Dev: text-src/*.json → data/text-*.js (node tools/build-text.js)
    │   ├── build-sw.js                     # Dev: regenerates sw.js with content-hash cache version
    │   ├── dump-text.js                    # Dev: book/chapter-range text dumps for guide authoring (Session 16)
    │   ├── verify-guides.js                # Dev: strict guide QA — key verses vs text, lengths, dupes (Session 16)
    │   └── make-icons.py                   # Dev: regenerates icons/ from the lamp pixel map
    ├── text-src/                           # LOCAL ONLY (gitignored): Gospel Library text JSONs (© IRI) + dumps/
    ├── android/                            # Session 14: Android WebView shell → APK (built by CI)
    │   ├── app/build.gradle                # signing from Actions secrets (KEYSTORE_*), minSdk 24
    │   ├── app/src/main/assets/            # site copied in by CI at build time (gitignored)
    │   ├── app/keystore.p12 + keystore-password.txt  # LOCAL ONLY (gitignored): signing key
    │   └── …                               # manifest, MainActivity.java, res/ (lamp icons)
    └── data/                               # Plain-JS data (script tags; file:// works)
        ├── canon.js                        # OT/NT/D&C/PGP book skeletons
        ├── glossary.js                     # 81 gospel terms
        ├── text-manifest.js                # Volume → text-chunk file map (generated, tiny)
        ├── text-*.js                       # Full scripture text chunks — lazy-loaded per volume (generated)
        ├── bom-01…10-*.js                  # Book of Mormon: all 239 chapters authored
        ├── ot-01…35-*.js                   # Old Testament: all 929 chapters authored (attach-to-canon, Session 16)
        ├── nt-01…09-*.js                   # New Testament: all 260 chapters authored (attach-to-canon, Session 16)
        ├── dc-01…10-*.js                   # D&C: all 138 sections + OD 1-2 authored (attach-to-canon, Session 15)
        └── pgp-01…04-*.js                  # Pearl of Great Price: all 16 units authored (attach-to-canon, Session 15)
```

The scripture app's public home is **https://canar8ue.github.io/SBLearn/**
(GitHub Actions deploys it; installable + offline). jarin.dev also hosts a copy
under `/static/projects/scripture-launchpad/` — keep both in sync when it changes
(scp + rebuild, Session 11/12 style).

Everything lives in `career-launchpad/`. **Recommended:** `node server.js` in that
folder → http://localhost:8642 (serves the app + the key-safe grading proxy).
Alternatives: `python -m http.server 8642` or double-clicking `index.html` — both
work, but grading then uses the browser-side key fallback (see Session 7). The
Z.ai API allows CORS from localhost and from `Origin: null` (file://).

### Map of index.html (in-file landmarks)
| Section | What's there |
|---|---|
| `<style>` | Full design system, ordered: tokens → appbar → buttons → cards → stamp → hero → path → tracks → quiz → results → mocks → buzzwords → responsive |
| `1. DATA — CAREERS` | 8 career objects (traits, dossiers, salaries, interview Qs) |
| `2. QUIZ DATA` | 10 questions + trait weights |
| `2b. BUZZWORDS GLOSSARY` | 104 terms + matcher regexes |
| `3. ICONS` | Inline SVG set |
| `4. STATE + GAMIFICATION` | localStorage load/save, XP, badges, streak, toasts, confetti |
| `4b. BUZZWORDS` | Annotator, tooltips, panel, flashcards |
| `4c. CLIPS + SHOP` | Clips economy, SHOP items, cosmetics application (accent/theme/cat), progress pill + modal |
| `5.–8.` | Helpers, appbar, quiz logic, interview session |
| `8b. AI GRADER` | `AI_CFG` (endpoint/model), 5-dim weighted rubric, GLM prompt, lazy `loadGrader()` → gitignored `ai-key.js` registers closure-held `CLP_GRADE`, parse + normalize, error handling |
| `9. VIEWS` | One render function per route (hash SPA) |
| `10. ROUTER` | `render()` on hashchange + keyboard handlers |

---

## 5. Things to know

- **Hash-routed SPA** (career site): `#/` home · `#/quiz` · `#/results` · `#/tracks` ·
  `#/track/<id>` · `#/mocks` · `#/mock/<id>` · `#/sources`. Route → render → `annotate()`.
- **Scripture Launchpad routes**: `#/` home · `#/volumes` · `#/volume/<vid>` · `#/book/<bid>` ·
  `#/chapter/<bid>/<n>` · `#/read/<bid>/<n>` (full scripture text; chapter segment optional
  for single-unit books) · `#/about`. Route → render → `annotate()` pass for gospel terms.
- **Scripture full text**: `SLP_TEXT[bid]` (lazy-loaded per volume via `ensureText`; see
  Session 12) holds every chapter's verses; `data/text-manifest.js` maps volumes to chunk
  files. Read view = `viewRead`; linked from every chapter page + the mobile READ tab.
- **State** lives in module vars (`S`, `Q`, `RUN`, `BZ`, `AI_RUN`) and persists to
  `localStorage["clp_state_v1"]`: `{xp, streak, lastDay, read[], quizDone, quizTop,
  quizScores, interviews{}, badges[], buzz{}, clips, owned[], cosmetics{accent,
  theme, cat, confetti, vocab2}}`. `interviews[id]` = `{done, ticks,
  ai?{total, perQ[], signal, verdict, model}}`. Quiz/interview sessions (and the
  in-flight AI grade) are in-memory only.
- **Clips**: 1 per XP at award time, +25×level on level-up, spent in the shop.
  Saves from before the shop migrate: lifetime XP = starting clips.
- **Content edits go in data, not views.** Careers, quiz questions, glossary terms are
  plain arrays/objects at the top of the script — swap or extend without touching view code.
- **Scoring**: quiz answers accumulate a trait vector → normalized → cosine similarity
  against each career's vector → displayed as 46–98% match. Directional, not destiny.
- **Buzzword matching**: word-boundary regexes; all-caps terms (IAM, STAR, SOC 2) match
  case-sensitively to avoid false hits; longest term wins overlaps.
- **Familiarity**: 0 NEW → 1 SEEN (hover ≥450ms / expand row / flip card) → 2/3 via
  flashcards (Got it +1 / Not yet −1, floor 1).
- **Keyboard**: quiz 1–6 selects, Enter continues, Escape closes the buzzwords panel;
  number keys are ignored while typing in any input/textarea.
- **Reset**: footer → "Reset demo progress" (clears localStorage, reloads). Use before demoing.
- Salary figures are **directional placeholders** flagged as such in-app; verify before
  the video mentions specific numbers.

---

## 6. Rules

1. **No gradients. Ever.** Flat colors only. No glassmorphism, no emoji, no purple-blue
   AI-slop aesthetics, no marketing filler copy. If it looks like a template, redo it.
2. **One focal point per screen.** New elements must recede or earn attention; when in
   doubt, remove things.
3. **Data over views.** All career/quiz/glossary content lives in the data arrays at the
   top of the script. View code never hardcodes content.
4. **Every number needs a source.** Anything statistical goes on the Data & Sources page
   with provenance. Salary ranges stay labeled "directional" until verified.
5. **No trackers, no accounts, one opt-in network call.** The only external request
   the app ever makes is the AI grader — via our own `/api/grade` proxy when served
   by `node server.js` (key stays server-side), or straight to Z.ai in the
   file:// fallback. Everything else stays in localStorage on the user's device.
6. **Test after every change.** Open the file in a browser and walk the changed flow
   before committing. Run the syntax check (`node -e "new Function(...script...)"`) after
   JS edits.
7. **Respect the case rules**: don't submit a slide deck instead of the tool; attribute
   AI-generated content; no proprietary/paid data sources. Team must be able to explain
   every component in the video.
8. **Never commit secrets.** No tokens, passwords, or API keys in any committed
   file. The Z.ai GLM key lives only in gitignored `career-launchpad/ai-key.js`
   (see the security note above and Session 6). The case PDF stays local
   (course material — don't publish it).
9. **Update this file** (`progress.md`) at the end of every working session: log what
   changed, what broke, what's next.
10. **Max 5 subagents at a time** (Session 11 rule). Bigger batches hit provider rate
    limits; stalled agents also block file writes. Stagger waves of ≤5 and wait for
    completions before dispatching more.

---

## 7. GitHub

**Repo:** https://github.com/Canar8ue/SBLearn

### First-time setup (already done on this machine)
```bash
cd "C:\Users\jarin\OneDrive\Desktop\VibeDev\ISCore1"
git init
git remote add origin https://github.com/Canar8ue/SBLearn.git
```

### How to update GitHub (normal workflow)
```bash
cd "C:\Users\jarin\OneDrive\Desktop\VibeDev\ISCore1"

# 1. see what changed
git status
git diff

# 2. stage + commit (write a real message — what and why)
git add .
git commit -m "Buzzwords: flashcard deck weighting"

# 3. push
git push origin main
```

Notes:
- Authentication: Windows Git Credential Manager will prompt on the first `git push`
  (browser login or PAT). A fine-grained PAT with **Contents: Read and write** on this
  repo also works. **Never put the token in a file or commit** — if one was shared in
  chat, paste it only into the credential prompt, then regenerate it on GitHub.
- `.gitignore` keeps out: the case PDF, `case_text.txt` scratch dump, OS junk.
- If the remote rejects (`non-fast-forward`), someone else pushed — run
  `git pull --rebase origin main` first, resolve, then push.
- To clone fresh elsewhere: `git clone https://github.com/Canar8ue/SBLearn.git`
