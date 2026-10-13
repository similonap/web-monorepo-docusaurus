---
format: 1920x1080
duration: 180s
mode: autonomous
message: "Moeten componenten elkaar beïnvloeden, dan verhuist de state naar de parent; die geeft de waarde door als prop (selected) en het child meldt een klik terug via een callback-prop (onSelect)."
arc: how-to-process
audience: "Studenten webframeworks die props, useState en eenvoudige componenten kennen"
language: nl
music: none
---

## Video direction

- **Sibling film.** Same series as `react-usefetch`, `react-usestate`, `react-useeffect`, `react-array-state`, `react-props`. Style **TS light**. Source of truth: `frame.md`. Reference frame: `../react-usefetch/compositions/frames/02-fetch.html`: copy its whole `<style>` block (font-faces, `:root` `--ts-*` tokens and every `ts-*` class) **verbatim**, its `typeLine` / `washOn` / `washOff` helpers, and its structure (white `ts-bg` clip on track 0, `ts-stage` clip on track 1, one paused GSAP timeline registered on `window.__timelines["<composition-id>"]`, `tl.set({}, {}, DUR)` at the end). For a cursor click copy how `../react-usefetch/compositions/frames/09-vernieuwen.html` uses the oversized cursor; for diagrams look at `../react-usefetch/compositions/frames/01-hook.html` and `14-samenvatting.html`.
- **Ground:** white `#FFFFFF` full-duration background clip. **Colour roles:** ink `#1E293B` text, `#475569` secondary, `#94A3B8` muted; panels `#F1F5F9`, hairlines `#E2E8F0`. **One accent: TypeScript blue `#3178C6`** (dark `#235A97`, tint `#EAF2FB`, wash `rgba(49,120,198,0.12)`). Red `#D14343` only thin and sparing for what goes wrong; never a red and a blue key moment at the same time.
- **Type:** Inter for everything that is not code; JetBrains Mono for code, chips, tags. Hero word Inter 700 ~168px, tracking -0.035em. Statements Inter 500/700 48-64px. Readable text ≥ 27px.
- **Kicker** at (80, 84): 28×4 blue bar + Inter 600 22px uppercase blue, tracking 0.14em. Reveal: bar scaleX 0→1 (0.35s), text fades/slides 8px (0.4s), at t ≈ 0.1-0.2.
- **Code surface** (left, x 80, width 1060, top 170, height ≤ 720, bottom ≤ 890): light panel, title bar with file name (`Square.tsx` / `App.tsx`), status bar, line numbers, JetBrains Mono 26px / 38px. Code types on with a caret stepping per character (`typeLine`). Highlight = blue wash; the fix / key line = 2px blue box radius 6 (`ts-mark`); the wrong line = 2px red box (`ts-mark--wrong`). Lines that already existed in an earlier frame are present from the start (static HTML), only new code types on. A removed line: red strike + fade to 35% + collapse its row height to 0 (0.4s, power2.inOut) so later rows slide up.
- **The squares (the running example).** A square is a 132×132 tile, background `#F1F5F9`, 1px `#E2E8F0` hairline, radius 8. **Selected** = a 5px TS-blue border drawn as `box-shadow: inset 0 0 0 5px #3178C6` (no layout shift), animated by fading in an absolutely positioned overlay div with that inset shadow (opacity 0→1, 0.3s power3.out). Three squares sit in a row with 44px gaps. Under a square there may be a small index tag `0` / `1` / `2` (JetBrains Mono 20px, `#94A3B8`).
- **`scherm` card** (right column): label `scherm` (ts-label) at (1236, 186), card at x 1236, y 232, 604 × 308. Three squares centred horizontally inside it (row width 3×132 + 2×44 = 484 → left offset 60), top 48 inside the card. Space under the squares inside the card (y ≈ 200-290 card-local) is for per-square chips/tags.
- **Chips** (`ts-chip`): mono 24px; per-square value chips may be smaller (mono 22px, height 44). State chip label like `selected` / `selectedIndex` via `ts-chip-key`. Value change: old value slides up and out, new one slides in from below (0.25s each, overflow hidden on the value span). New / key chip = `ts-chip--new` (blue tint + blue border). Unwanted = `ts-chip--unwanted` (red 2px border).
- **Diagrams** (component tree): nodes are `#F1F5F9` panels with hairline, radius 12, label `App` / `Square` in JetBrains Mono 26px 500 ink; connectors 2px `#94A3B8` lines (SVG), small solid arrowheads; the key node or line turns blue. A travelling "event" dot: 14px blue circle moving along a connector (power2.inOut, 0.6-0.8s).
- **Cursor**: `compositions/components/oversized-cursor.html` (copy the markup/usage pattern from the usefetch frame 09). Moves in with power3.out (~0.5s), click = scale 0.96 → 1 dip (0.15s) + blue 20% ripple circle on the target expanding and fading (0.45s). The worker does NOT place sfx (the orchestrator adds sfx from the `sfx:` line in index.html).
- **Motion:** calm `power3.out` settles, small offsets (10-20px), no bounce / overshoot / elastic, holds stand still. Every reveal on the spoken word that names it (times below are seconds from frame start = voice start). Never show something before the voice names it. Scenes fade out via the index transitions; the frame itself does not fade out.
- **Layout:** kicker (80, 84); code surface left; right column x 1236-1840; nothing important below y ≈ 880 (caption band 900-1080).
- **Negative list:** no logos, decorative shapes, coloured blocks behind text, gradients, glow, heavy shadows, dark code surfaces, serif fonts, real browser / VS Code chrome, em-dashes in visible text, `Math.random` / `Date.now`, breathing / drift / camera push.
- **Code style (course TypeScript):** arrow components, `interface SquareProps`, destructured props, `useState<boolean>(false)`, `useState<number | null>(null)`, `onSelect: () => void`, `className={selected ? "square selected" : "square"}`.

## Frame 1 — Hook: één tegelijk

- id: 01-hook
- duration: 14.39s
- transition_in: cut
- status: animated
- voiceover: "Drie vierkanten. Klik je op een vierkant, dan krijgt het een rand. Maar wat als er maar één vierkant tegelijk geselecteerd mag zijn? Dan moet een child iets laten weten aan zijn parent. En dat doen we met een callback."
- focal: three big squares (the interactive example), then the hero word `callback`.
- sfx: pop@0.3, click-soft@1.85, pop@3.8, click-soft@7.1, pop@11.04, whoosh-short@12.5
- shots:
  - 0.0-1.1: kicker `Child-parent communicatie`. "vierkanten" (0.24): three squares, 180×180 here (bigger than the scherm card), row centred at x 960, top 250, gap 56, pop in staggered (0.08) with y 16→0, opacity, power3.out. Index tags `0` `1` `2` NOT shown in this frame.
  - 1.1-4.4: cursor enters from bottom-right on "Klik" (1.12), clicks square 0 at ~1.85 (dip + ripple). On "rand" (3.80) square 0 gets the blue selected border.
  - 4.4-8.6: "één" (5.88) / "tegelijk" (6.64): the cursor moves to square 2 and clicks at ~7.1. At 7.2 the border on square 0 fades out (0.3s) while square 2's border fades in: one at a time. Small label under the row centred, Inter 600 22px uppercase muted `maar één tegelijk` fades in on "geselecteerd" (7.12).
  - 8.6-12.6: "child" (9.40): label `child` (JetBrains Mono 24px ink-soft) appears under the row of squares (replacing the `maar één tegelijk` label, which fades out at 9.3). "parent" (11.04): a hairline panel (`#F8FAFC`, 1px `#E2E8F0`, radius 12) fades in BEHIND the row, wrapping the squares with 40px padding, with a mono label `App` in its top-left (inside, 20px from the corner, ink-soft 24px) and the word `parent` as a ts-label above the panel's top-left. Cursor fades out at 11.0.
  - 12.6-end: "callback" (12.64): the whole group (panel + squares + labels) slides up 120px and dims to 0.35 (0.6s power3.out); hero `callback` (ts-hero, 168px) lands centred at y ≈ 600 (fromTo y 24 → 0, opacity), the 6px blue hero-bar wipes in under it at 12.9 (scaleX 0→1, 0.5s). Hold still.

## Frame 2 — De Square component

- id: 02-square
- duration: 16.31s
- transition_in: crossfade
- status: animated
- voiceover: "We beginnen met een Square component. Met use state maken we een state selected, standaard false. Klikken we op het vierkant, dan zet de on click handler selected op true. En is selected true, dan krijgt het vierkant een blauwe rand."
- focal: the code surface `Square.tsx`; right: scherm card with one square + a `selected` state chip.
- sfx: typing@0.96, typing@2.72, pop@4.56, pop@6.96, click-soft@7.7, typing@8.88, pop@10.72, typing@11.44, pop@14.4
- code (Square.tsx, final state, 12 lines):
  ```
  1  import { useState } from "react";
  2
  3  const Square = () => {
  4    const [selected, setSelected] = useState<boolean>(false);
  5
  6    return (
  7      <div
  8        className={selected ? "square selected" : "square"}
  9        onClick={() => setSelected(true)}
  10     />
  11   );
  12 };
  ```
  Status bar: `Square · selected`.
- shots:
  - 0.0-2.4: kicker `De basis`. Code panel fades/slides in at 0.3. "Square" (0.96): line 3 types with a wash on `Square`, then lines 1, 6, 7, 10, 11, 12 type quickly (per char ≈ 0.012s) right after (shell).
  - 2.4-6.9: "use state" (2.72): line 4 types (per 0.02). Wash on `selected` at "selected" (4.56); right column state chip appears at 4.56 at (1236, 580): key `state` + value `selected: false` (ts-chip). "false" (6.16): wash on `false` in line 4 (others off).
  - 6.9-11.4: "Klikken" (6.96): label `scherm` + card fade in at right with ONE square centred in the card (132×132, centred). Cursor enters and clicks the square at 7.7. "on click" (8.88): line 9 types; wash on `setSelected(true)` at "selected" (9.84). "true" (10.72): chip value swaps `false` → `true` (slide), chip becomes `ts-chip--new`.
  - 11.4-end: "En is selected true" (11.44): line 8 types (per 0.016); wash on `selected ?` at 12.48. "blauwe rand" (14.40): the square in the card gets the blue selected border and a blue `ts-mark` box draws around `"square selected"` in line 8. Hold.

## Frame 3 — Eigen state

- id: 03-eigen-state
- duration: 11.11s
- transition_in: crossfade
- status: animated
- voiceover: "Die state staat in de Square zelf. En dat is logisch: hij, en alleen hij, moet weten dat hij geselecteerd is. Niemand anders heeft die informatie nodig."
- focal: a `Square` component box with its own state chip inside; a statement on the right.
- sfx: pop@1.4, pop@1.7, pop@4.72
- shots:
  - 0.0-2.5: kicker `Eigen state`. "Square" (1.40): a component box (diagram node, 560×420) at x 160, y 240 fades in with label `Square` (mono 26px) top-left inside and a selected square tile (132, blue border) centred-left inside. "zelf" (1.68): chip `selected: true` (`ts-chip--new`) lands inside the box under the label, to the right of the tile, y 16→0.
  - 2.5-7.8: "logisch" (2.96): statement on the right (x 860-1800, top 300) in Inter 500 56px ink, three lines: `Alleen Square` / `moet weten dat hij` / `geselecteerd is.` fades in line by line on "hij," (3.88), "moet weten" (5.56), "geselecteerd" (6.48). On "alleen" (4.72) a 6px blue underline wipes in under `Alleen Square`.
  - 7.8-end: "Niemand anders" (7.84): two small muted boxes (diagram nodes at 35% opacity, 220×110) labelled `App` and `Header` appear at x 860 and 1120, y 620, without chips; under them Inter 400 30px ink-soft `hebben die informatie niet nodig` at "nodig" (9.52). Hold.

## Frame 4 — Op zichzelf

- id: 04-op-zichzelf
- duration: 15.03s
- transition_in: push-slide
- status: animated
- voiceover: "In App zetten we drie squares naast elkaar. Elk vierkant heeft zijn eigen state. Klik je op het eerste, en daarna op het derde, dan zijn ze allebei geselecteerd. Ze staan volledig op zichzelf, en hebben geen invloed op elkaar."
- focal: scherm card with three squares, each with its own `selected` chip; two end up selected.
- sfx: typing@0.24, pop@1.36, pop@4.28, click-soft@6.4, pop@6.5, click-soft@7.9, pop@8.0, pop@11.36
- code (App.tsx, 9 lines): `const App = () => {` / `  return (` / `    <div className="squares">` / `      <Square />` ×3 / `    </div>` / `  );` / `};`. Status bar `App · 3 squares`.
- shots:
  - 0.0-3.0: kicker `Op zichzelf`. Code panel in at 0.2; "App" (0.24): lines 1-3, 7-9 type (shell). "drie squares" (1.08/1.36): lines 4-6 type one after another (each ~0.25s); as each line finishes, the matching square pops into the scherm card (label + card appear at 1.0).
  - 3.0-5.4: "eigen state" (4.28): under each square inside the card a small chip (mono 22px, height 44) `false` with a tiny key `selected` above the row (one ts-chip-key label left-aligned at card-local y ≈ 196), the three chips pop staggered 0.1 at 4.28.
  - 5.4-10.4: "eerste" (6.08): cursor clicks square 0 at 6.4: border on + its chip swaps to `true` (ts-chip--new). "derde" (7.60): cursor moves and clicks square 2 at 7.9: border on + chip `true`. "allebei geselecteerd" (9.00/9.36): nothing new, the two borders stay (no pulse). Cursor leaves at 9.6.
  - 10.4-end: "op zichzelf" (11.36): three separate thin outlines (1px `#94A3B8`, radius 10) draw around each square+chip column inside the card (8px inset), each labelled with a tiny mono `Square` (18px muted) on its top edge: three independent components. "geen invloed" (12.64): hold, still.

## Frame 5 — Maar één tegelijk

- id: 05-een-tegelijk
- duration: 16.95s
- transition_in: crossfade
- status: animated
- voiceover: "Maar stel nu: er mag maar één vierkant tegelijk geselecteerd zijn. Klik je op een ander vierkant, dan moet het vorige zijn rand verliezen. Plots hebben de squares wél invloed op elkaar. En dat lukt niet, want geen enkel vierkant kent de state van een ander."
- focal: the requirement statement left; the scherm card right where two squares stay selected (the problem).
- sfx: pop@1.76, click-soft@5.6, pop@7.8, whoosh-short@10.44, pop@13.7
- layout: no code surface. Left column (x 80-1120): statement. Right column: scherm card (same position as frame 4) with three squares and per-square chips, starting state: square 0 selected (chip `true`), squares 1 and 2 not (chips `false`).
- shots:
  - 0.0-4.5: kicker `Nieuwe regel`. Card + squares + chips present at 0.3 (fade in, they are known from frame 4). "één vierkant tegelijk" (1.76): statement Inter 700 72px ink at (80, 300): `Maar één tegelijk.`; the 6px blue underline wipes under `één` at 2.0.
  - 4.5-8.6: "Klik je op een ander vierkant" (4.64/5.40): cursor clicks square 1 at 5.6: square 1 gets its border, chip 1 `true`. "vorige zijn rand verliezen" (6.88/7.80): a short Inter 400 32px ink-soft line under the statement at (80, 420): `Het vorige vierkant moet zijn rand verliezen.` fades in at 6.88. At 7.80 square 0 still has its border: a thin red `ts-mark--wrong` ring (radius 10, 6px outside) draws around square 0 and chip 0 gets `ts-chip--unwanted`. The blue underline under `één` dims to the hairline colour at 7.7 (no red + blue key at once).
  - 8.6-11.6: "wél invloed op elkaar" (9.44/10.44): two short curved double-headed connectors (SVG 2px `#94A3B8`) above the squares, linking 0↔1 and 1↔2, draw on at 10.44 (stroke-dashoffset, 0.6s). Statement line 3 at (80, 500) Inter 500 40px ink: `De squares beïnvloeden elkaar.` at 9.44.
  - 11.6-end: "lukt niet" (12.00): the connectors turn red (`#D14343`) and a small red cross (two 2px strokes, 20px) appears at the middle of each at 12.28. "kent de state van een ander" (13.68/14.76): Inter 400 30px ink-soft at (80, 580): `Geen enkel vierkant kent de state van een ander.` fades in at 13.68. Hold.

## Frame 6 — State naar de parent

- id: 06-naar-parent
- duration: 10.79s
- transition_in: blur-crossfade
- status: animated
- voiceover: "Wie kent ze dan wel alle drie? De parent: App. Dus verhuist de state naar boven, naar App. Daar houden we bij welk vierkant geselecteerd is."
- focal: a component tree: `App` on top, three `Square` nodes below; the state chip travels up into App.
- sfx: pop@0.4, pop@2.16, whoosh-short@4.08, pop@6.08, pop@8.6
- layout: diagram centred. App node: x 660, y 180, 600×150. Square nodes: 300×230 each at y 520, x 300 / 810 / 1320. Connectors from App bottom-centre down to each Square top-centre (2px `#94A3B8`, elbow or straight lines). Each Square node contains a small tile (88×88) and, at start, a chip `selected` (mono 20px) inside.
- shots:
  - 0.0-2.0: kicker `Lifting state up`. "Wie kent ze" (0.0-0.4): the three Square nodes fade in (stagger 0.08) with their chips `selected` inside. Then still.
  - 2.0-3.6: "De parent: App" (2.00/2.16): App node fades in on top with label `App`; the three connectors draw down from App to the squares at 2.96 (0.5s).
  - 3.6-6.6: "verhuist de state naar boven" (4.08-5.32): the three `selected` chips in the squares fade to 0.35 and get a strike-through (ts-chip--struck) at 4.08; at 4.56 one new chip `selectedIndex` rises from the middle square's position up along the middle connector into the App node (y travel, 0.9s power3.inOut), landing at "naar App" (6.08) as `ts-chip--new` inside App: key `state` + `selectedIndex`.
  - 6.6-end: "welk vierkant geselecteerd is" (7.84/8.60): the chip gets its value: `selectedIndex: 1` (value slides in at 8.6) and Square node 1 (middle) gets the blue selected border on its tile + its node border turns blue. Hold.

## Frame 7 — selectedIndex

- id: 07-selected-index
- duration: 14.47s
- transition_in: push-slide
- status: animated
- voiceover: "In App maken we een state selected index, van het type number of null. Null betekent: nog niets geselecteerd. Anders bewaren we de index van het geselecteerde vierkant: nul, één of twee."
- focal: code `App.tsx` with the new state; right: chip `selectedIndex` and scherm card with indexed squares.
- sfx: typing@1.36, typing@3.12, pop@5.2, pop@6.56, pop@11.6, pop@12.32, pop@12.96
- code (App.tsx, 12 lines):
  ```
  1  const App = () => {
  2    const [selectedIndex, setSelectedIndex] =
  3      useState<number | null>(null);
  4
  5    return (
  6      <div className="squares">
  7        <Square />
  8        <Square />
  9        <Square />
  10     </div>
  11   );
  12 };
  ```
  Lines 1, 5-12 present from the start (static, line 4 empty). Status bar `App · selectedIndex`.
- shots:
  - 0.0-2.8: kicker `De state in App`. Code panel in at 0.2. "state selected index" (1.36/1.76): line 2 types; wash on `selectedIndex` at 2.08.
  - 2.8-5.0: "type number of null" (3.12): line 3 types (per 0.02); wash moves to `number | null` at 3.60.
  - 5.0-7.8: "Null" (5.20): right column chip at (1236, 580) `ts-chip`: key `state` + `selectedIndex: null`; wash on `(null)` in line 3. "nog niets geselecteerd" (6.32/6.84): scherm label + card with three squares (no borders) fade in at 6.56.
  - 7.8-end: "index" (9.40): index tags `0` `1` `2` appear under the squares in the card (stagger 0.1). "nul" (11.60): chip value → `0`, square 0 border on. "één" (12.32): value → `1`, border moves to square 1 (0 off, 1 on, 0.25s). "twee" (12.96): value → `2`, border moves to square 2. Chip becomes `ts-chip--new` at 11.60. Hold.

## Frame 8 — selected als prop

- id: 08-selected-prop
- duration: 14.63s
- transition_in: crossfade
- status: animated
- voiceover: "Square houdt zelf geen state meer bij. In de plaats krijgt hij een prop: selected, een boolean. App vergelijkt de index. Is selected index nul, dan krijgt het eerste vierkant true, en de andere twee false."
- focal: `Square.tsx` loses its useState and gains `SquareProps.selected`; right: mini App panel + scherm card showing true/false per square.
- sfx: whoosh-short@1.44, typing@3.84, pop@4.64, pop@6.4, pop@9.28, pop@11.52, pop@12.96
- code (Square.tsx): START state (static, from frame 2): `import { useState } from "react";` / `` / `const Square = () => {` / `  const [selected, setSelected] = useState<boolean>(false);` / `` / `  return (` / `    <div` / `      className={selected ? "square selected" : "square"}` / `      onClick={() => setSelected(true)}` / `    />` / `  );` / `};`.
  END state (13 lines):
  ```
  1  interface SquareProps {
  2    selected: boolean;
  3  }
  4
  5  const Square = ({ selected }: SquareProps) => {
  6    return (
  7      <div
  8        className={selected ? "square selected" : "square"}
  9        onClick={() => setSelected(true)}
  10     />
  11   );
  12 };
  ```
  (the `import` row and the useState row + its following empty row collapse away; `setSelected(true)` in the onClick line turns muted `#94A3B8` because it no longer exists).
- shots:
  - 0.0-2.6: kicker `selected als prop`. Code panel present at 0.2 with the START code. "geen state meer" (1.44/1.84): red strike over line 4 (the useState line) and the import line, they fade to 0.35 and collapse (0.4s) at 2.04; `setSelected(true)` in the onClick line turns muted at 2.04.
  - 2.6-6.3: "prop: selected, een boolean" (3.84-5.44): new rows insert at the top (rows grow from height 0 at 3.6): lines 1-3 type at 3.84 (`interface SquareProps {`, `  selected: boolean;`, `}`); wash on `selected: boolean` at 4.64. At 5.0 line 5 becomes `const Square = ({ selected }: SquareProps) => {` (the `({ selected }: SquareProps)` part types in replacing `()`), wash on it at 5.44.
  - 6.3-9.9: right column: "App vergelijkt de index" (6.40): mini panel `App.tsx` at x 1236, y 580, 604×250 (ts-mini, 22px/34px) with 3 rows: `<Square selected={selectedIndex === 0} />`, `... === 1} />`, `... === 2} />` (write them fully). Wash on `selectedIndex === 0` at 7.44. "nul" (9.28): wash on `=== 0` brighter (blue mark box around it).
  - 9.9-end: scherm card (label at 186, card at 232) fades in at 9.9 with three squares and index tags. "true" (11.52): under square 0 a small chip `true` (ts-chip--new) + square 0 blue border. "false" (12.96): chips `false` under squares 1 and 2 (plain). Hold.

## Frame 9 — Het probleem

- id: 09-probleem
- duration: 14.07s
- transition_in: crossfade
- status: animated
- voiceover: "Maar nu zit er een probleem. Klik je op een vierkant, dan moet selected index veranderen. Alleen zit die state in App, en Square weet niet eens dat die bestaat. Hoe passen we die state dan aan, vanuit het child?"
- focal: the dead `onClick` in `Square.tsx` (red mark) vs. the state living in App (diagram on the right).
- sfx: click-soft@2.9, pop@3.92, pop@8.48, whoosh-short@10.48
- code (Square.tsx): the frame 8 END state (12 rows), present from the start; `setSelected(true)` muted.
- layout: code surface left (same as frame 8). Right column diagram: App node at x 1300, y 200, 480×170 containing chip `selectedIndex: 0` (mono 22); one Square node at x 1390, y 560, 300×220 with a tile (88) inside; a 2px `#94A3B8` connector from App down to Square with a small down arrowhead and a mono 18px muted label `selected` next to it.
- shots:
  - 0.0-2.0: kicker `Het probleem`. Code + diagram fade in at 0.2-0.5.
  - 2.0-5.8: "Klik je op een vierkant" (2.08/2.72): cursor clicks the tile in the Square node at 2.9 (ripple). "selected index veranderen" (3.92/5.04): the `selectedIndex` chip inside App gets a blue outline pulse (ts-chip--new) at 3.92 and a small mono 20px blue tag `moet veranderen` appears under the App node at y 385, left-aligned with App.
  - 5.8-10.0: "Alleen zit die state in App" (6.84/7.44): the App node border turns blue at 7.44. "Square weet niet eens dat die bestaat" (8.08-9.28): red `ts-mark--wrong` box around `setSelected(true)` in line 9 at 8.48; the cursor fades out.
  - 10.0-end: "Hoe passen we die state aan, vanuit het child?" (10.24-12.56): an upward connector from the Square node back up to App draws on (2px `#94A3B8`, offset 60px right of the down connector, arrowhead up) at 10.48, with a big muted Inter 700 56px `?` beside it at 12.0. At 10.24 the App blue outline returns to neutral (only the red mark is the key moment now). Hold.

## Frame 10 — onSelect

- id: 10-onselect
- duration: 13.27s
- transition_in: blur-crossfade
- status: animated
- voiceover: "Met een callback. We geven Square een functie mee, gewoon als een prop: on select. In de props is dat een functie die niets teruggeeft. En in de on click roept Square die functie gewoon aan."
- focal: `Square.tsx` gains `onSelect: () => void` and `onClick={onSelect}` (blue key mark).
- sfx: pop@0.4, typing@4.8, pop@7.12, typing@10.24, pop@11.84
- code (Square.tsx) START = frame 8 END (12 rows, `setSelected(true)` muted). END (13 rows):
  ```
  1  interface SquareProps {
  2    selected: boolean;
  3    onSelect: () => void;
  4  }
  5
  6  const Square = ({ selected, onSelect }: SquareProps) => {
  7    return (
  8      <div
  9        className={selected ? "square selected" : "square"}
  10       onClick={onSelect}
  11     />
  12   );
  13 };
  ```
- right column: label `props` (ts-label) at (1236, 186); two chips stacked at (1236, 232) and (1236, 300): `selected: boolean` (plain) present from 1.88, and `onSelect: () => void` (ts-chip--new) at 4.80. Under them at (1236, 400) Inter 500 32px ink `Een callback is gewoon een prop.` at 3.28 ("gewoon als een prop"), and at 8.16 Inter 400 28px ink-soft `() => void: een functie die niets teruggeeft` at (1236, 470) (write `() => void` in JetBrains Mono).
- shots:
  - 0.0-1.2: kicker `Een callback als prop`. Code present at 0.2 (START). "callback" (0.40): nothing else; the kicker lands.
  - 1.2-6.0: "Square" (1.88): chip `selected: boolean` appears. "prop: on select" (4.00/4.80): a new row inserts after line 2 (grows from 0) and types `  onSelect: () => void;` at 4.80; wash on `onSelect`. At 5.12 `, onSelect` types into line 6 after `selected`; chip `onSelect` appears at 4.80.
  - 6.0-9.0: "functie die niets teruggeeft" (7.12/8.16): wash moves to `() => void` in line 3 at 7.12; the explanatory line appears at 8.16.
  - 9.0-end: "on click" (9.52): wash on `onClick` in line 10; at "roept" (10.24) the muted `() => setSelected(true)` deletes char by char backwards (fast, 0.01/char) and `onSelect` types in its place; "aan" (11.84): blue `ts-mark` box around `onClick={onSelect}`. Hold.

## Frame 11 — Elk zijn eigen callback

- id: 11-app-callbacks
- duration: 13.35s
- transition_in: push-slide
- status: animated
- voiceover: "App geeft elk vierkant zijn eigen callback mee. Daarin roepen we set selected index aan, met de index van dat vierkant. Bij het eerste nul, bij het tweede één, en bij het derde twee."
- focal: `App.tsx` where each `<Square>` gets `selected` + its own `onSelect` callback; right: scherm card with per-square tags `onSelect → 0/1/2`.
- sfx: typing@2.08, pop@4.24, pop@8.96, typing@9.97, pop@10.4, typing@11.44, pop@11.84
- code (App.tsx, 15 lines, final):
  ```
  1  const App = () => {
  2    const [selectedIndex, setSelectedIndex] =
  3      useState<number | null>(null);
  4
  5    return (
  6      <div className="squares">
  7        <Square selected={selectedIndex === 0}
  8          onSelect={() => setSelectedIndex(0)} />
  9        <Square selected={selectedIndex === 1}
  10         onSelect={() => setSelectedIndex(1)} />
  11       <Square selected={selectedIndex === 2}
  12         onSelect={() => setSelectedIndex(2)} />
  13     </div>
  14   );
  15 };
  ```
  Lines 1-7, 9, 11, 13-15 present from the start (the `selected={...}` parts known from frame 8). Lines 8, 10, 12 type on. Status bar `App · onSelect`.
- shots:
  - 0.0-3.2: kicker `Callbacks in App`. Code panel in at 0.2; scherm label + card with three squares and index tags `0 1 2` at 0.4. "eigen callback" (1.72/2.08): line 8 starts typing at 2.08 (per 0.028, done by ~3.1).
  - 3.2-8.2: "set selected index" (4.24/4.72): wash on `setSelectedIndex` in line 8. "index van dat vierkant" (6.44): wash moves to `(0)` in line 8.
  - 8.2-end: "eerste nul" (8.56/8.96): under square 0 in the card a small mono 20px tag `onSelect → 0` (blue-dark on blue-tint pill, ts-tag style) pops at 8.96. "tweede" (9.97): line 10 types (per 0.012) and tag `onSelect → 1` at 10.40. "derde" (11.44): line 12 types (per 0.008, done by 11.84) and tag `onSelect → 2` at 11.84. Wash ends at 12.2. Hold. (The tags are narrow: fit them under each square, mono 18px if needed.)

## Frame 12 — De klik

- id: 12-de-klik
- duration: 18.79s
- transition_in: crossfade
- status: animated
- voiceover: "Wat gebeurt er nu bij een klik? Square roept on select aan. Die functie kreeg hij van App, dus wordt de callback van App uitgevoerd, en die zet de nieuwe index. App rendert opnieuw, en elk vierkant krijgt een nieuwe selected prop. Zo is er altijd maar één vierkant actief."
- focal: the full round trip in a component tree: event goes up (onSelect), data comes down (selected).
- sfx: click-soft@1.6, pop@2.8, whoosh-short@3.04, pop@6.84, pop@9.92, pop@10.92, whoosh-short@12.24, pop@14.4
- layout: like frame 6. App node x 560, y 170, 800×190: label `App` top-left; chip `selectedIndex: 0` inside (mono 24px). Three Square nodes 300×240 at y 540, x 300 / 810 / 1320, each with a tile (100×100) and a mono 20px muted `selected` value text under the tile (`true` for square 0, `false` for 1 and 2). Connectors App → each Square (2px `#94A3B8`). Initial state: square 0 tile has the blue border.
- shots:
  - 0.0-1.9: kicker `De klik`. Diagram fades in at 0.2 (nodes, connectors, chip, values). Cursor enters at 0.9 and clicks square 2's tile at 1.6 ("klik" 1.23).
  - 1.9-4.1: "Square roept on select aan" (1.92-3.52): pill `onSelect()` (ts-tag) pops above square 2's node top-right at 2.80; at 3.04 a blue 14px dot travels UP the connector from Square 2 to App (0.7s power2.inOut).
  - 4.1-6.8: "kreeg hij van App" (4.72/5.36): the connector App → Square 2 turns blue (stroke colour, 0.3s) at 5.12, back to grey at 6.6.
  - 6.8-10.5: "callback van App uitgevoerd" (6.84/7.64): inside App, right of the chip, a mono 22px line `() => setSelectedIndex(2)` with a blue wash fades in at 6.84. "zet de nieuwe index" (9.44/9.92): chip value slides `0` → `2` at 9.92 (chip becomes ts-chip--new).
  - 10.5-15.0: "App rendert opnieuw" (10.56/10.92): render-tag `render #2` (ts-tag) on App's top-right edge pulses in at 10.92 (scale 0.96 → 1, opacity). "elk vierkant krijgt een nieuwe selected prop" (12.24-14.40): three blue dots travel DOWN all three connectors at 12.24 (stagger 0.1, 0.7s); as each arrives the value text under the tile updates: square 0 `true` → `false` and its border off, square 1 stays `false`, square 2 `false` → `true` and its border on, all landing by 14.40 ("prop").
  - 15.0-end: "altijd maar één vierkant actief" (15.72-17.24): square 2's node border turns blue at 16.40. Hold still.

## Frame 13 — Samenvatting

- id: 13-samenvatting
- duration: 19.33s
- transition_in: blur-crossfade
- status: animated
- voiceover: "Kort samengevat: moeten componenten elkaar beïnvloeden, dan verhuist de state naar de parent. Die geeft de waarde door als prop, zoals selected. En met een callback, zoals on select, laat het child weten dat er iets gebeurd is. Data gaat naar beneden, events gaan naar boven."
- focal: three summary rows left; a two-node diagram right with a down arrow (`selected`, data) and an up arrow (`onSelect`, events).
- sfx: pop@1.4, pop@3.6, pop@6.12, pop@8.56, pop@9.48, pop@11.04, whoosh-short@14.56, whoosh-short@16.36
- layout: left column x 80-1100: three rows at y 220 / 420 / 620, each: a mono 26px blue number (`1`, `2`, `3`) + Inter 500 40px statement, with an optional chip on a second line. Right column x 1240-1840: App node (x 1340, y 200, 400×130), Square node (x 1340, y 600, 400×130), two vertical connectors between them: left one DOWN arrow, right one UP arrow, each with a mono label beside it.
- shots:
  - 0.0-1.3: kicker `Samenvatting`.
  - 1.3-6.0: "componenten elkaar beïnvloeden" (1.40-2.64): row 1 `Beïnvloeden componenten elkaar?` fades in at 1.40; second line Inter 400 30px ink-soft `Zet de state in de parent.` at 3.60 ("verhuist"). Right column: App and Square nodes fade in at 3.60, chip `selectedIndex` inside App at 5.36 ("parent").
  - 6.0-9.4: "waarde door als prop" (6.12/7.52): row 2 `Geef de waarde door als prop` at 6.12; chip `selected` (mono, plain) next to it at 8.56 ("selected").
  - 9.4-14.4: "met een callback" (9.92): row 3 `Meld terug met een callback` at 9.48; chip `onSelect` (ts-chip--new) at 11.04 ("on select").
  - 14.4-end: "Data gaat naar beneden" (14.56/15.28): the left connector draws DOWN from App to Square (2px ink-soft, arrowhead down) with label `selected` + Inter 600 18px uppercase muted `data` at 14.56. "events gaan naar boven" (16.36/17.16): the right connector draws UP from Square to App in TS blue with label `onSelect` + `events` at 16.36. Hold until the end.
