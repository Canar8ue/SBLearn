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

### Next up (waiting on team input)
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
├── .git/                                   # Git data (never edit)
├── CORE CASE F26 - IS Career Launchpad_v2.pdf   # Case brief (LOCAL ONLY)
├── case_text.txt                           # Scratch dump of PDF (ignored)
└── career-launchpad/
    ├── index.html                          # The entire app
    ├── server.js                           # Static server + /api/grade grading proxy (key stays server-side)
    ├── ai-key.js                           # LOCAL ONLY (gitignored): Z.ai key — closure for browser, export for server
    └── ai-key.example.js                   # Template to create ai-key.js (committed)
```

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

- **Hash-routed SPA**: `#/` home · `#/quiz` · `#/results` · `#/tracks` · `#/track/<id>` ·
  `#/mocks` · `#/mock/<id>` · `#/sources`. Route → render → `annotate()` pass for buzzwords.
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
