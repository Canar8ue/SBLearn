# SBLearn — IS Career Launchpad

Working document for the BYU Information Systems Junior Core case competition (Case F26).
Everything the team and any AI assistant needs to know about the state of the project,
how it is designed, and the rules for changing it.

---

## 1. What this project is

A **single-file web app** that helps incoming IS students do two things (the exact client
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
- Sticky appbar: brand left, nav right, nothing else.
- Sticky right rail (home) for progress cards; sticky rail top offset 78px.

### Components (reuse, don't invent)
Buttons: Google pills — primary (blue filled), dark (ink), green (continue/success),
ghost (outlined white), `btn-sm`/`btn-hero` sizes. Chips: outlined pills. Tabs: pill
group, active = blue tint fill. Toasts: dark snackbar bottom-left, `+XP` tag in amber.
Confetti: 30 flat squares in the 5 Google colors (never on reduced-motion). Tooltips:
hard-shadowed white cards with ink border + arrow. Icons: single inline-SVG set
(24px viewBox, stroke 1.8, round caps, `overflow:visible`).

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
    └── index.html                          # The entire app, one file
```

Everything lives in `career-launchpad/index.html` (~143KB). Open it directly
(double-click) or serve the folder (`python -m http.server 8642` → http://localhost:8642).

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
| `5.–8.` | Helpers, appbar, quiz logic, interview session |
| `9. VIEWS` | One render function per route (hash SPA) |
| `10. ROUTER` | `render()` on hashchange + keyboard handlers |

---

## 5. Things to know

- **Hash-routed SPA**: `#/` home · `#/quiz` · `#/results` · `#/tracks` · `#/track/<id>` ·
  `#/mocks` · `#/mock/<id>` · `#/sources`. Route → render → `annotate()` pass for buzzwords.
- **State** lives in module vars (`S`, `Q`, `RUN`, `BZ`) and persists to
  `localStorage["clp_state_v1"]`: `{xp, streak, lastDay, read[], quizDone, quizTop,
  quizScores, interviews{}, badges[], buzz{}}`. Quiz/interview sessions are in-memory only.
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

1. **One file.** The app ships as a single `index.html` — vanilla HTML/CSS/JS, no build
   step, no frameworks, no external deps except Google Fonts (must degrade offline).
2. **No gradients. Ever.** Flat colors only. No glassmorphism, no emoji, no purple-blue
   AI-slop aesthetics, no marketing filler copy. If it looks like a template, redo it.
3. **One focal point per screen.** New elements must recede or earn attention; when in
   doubt, remove things.
4. **Data over views.** All career/quiz/glossary content lives in the data arrays at the
   top of the script. View code never hardcodes content.
5. **Every number needs a source.** Anything statistical goes on the Data & Sources page
   with provenance. Salary ranges stay labeled "directional" until verified.
6. **No trackers, no accounts, no network calls.** Progress stays in localStorage on the
   user's device.
7. **Test after every change.** Open the file in a browser and walk the changed flow
   before committing. Run the syntax check (`node -e "new Function(...script...)"`) after
   JS edits.
8. **Respect the case rules**: don't submit a slide deck instead of the tool; attribute
   AI-generated content; no proprietary/paid data sources. Team must be able to explain
   every component in the video.
9. **Never commit secrets.** No tokens, passwords, or API keys in any file. The case PDF
   stays local (course material — don't publish it).
10. **Update this file** (`progress.md`) at the end of every working session: log what
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
