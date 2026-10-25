---
format: 1920x1080
duration: 221s
mode: autonomous
message: "In React Native is elke View een flex container: flexDirection kiest de main axis (standaard column), justifyContent verdeelt de kinderen over de main axis, alignItems lijnt ze uit op de cross axis, flex verdeelt de ruimte, flexWrap maakt nieuwe regels en position absolute haalt een element uit de flow."
arc: how-to-process
audience: "Studenten webframeworks die net met React Native begonnen zijn"
language: nl
music: none
---

## Video direction

- **Sibling film.** Same series and style as `../react-router-params` (TS light). Source of truth for colours and type: `frame.md`. **Reference frame for this video: `compositions/frames/03-direction.html`.** Copy from it, verbatim: the whole `<style>` block (the TS LIGHT primitives *and* the FLEX KIT block: `.fx-*` code surface, `.ph-*` phone), the phone markup (`.ph-body` > `.ph-speaker`, `.ph-screen` > `svg.ph-svg`, `.ph-home`), the axis groups (`ax-mc`, `ax-mr`, `ax-mrr`, `ax-mcr`, `ax-cc`, `ax-cr` with their exact coordinates), and the script helpers (`washOn`, `washOff`, `swapVal`, `fadeSwap`, the FLEX KIT `rnCss` / `rnLayout` / `rnShow`). Structure: white `ts-bg` clip on track 0, `ts-stage` clip on track 1, one paused GSAP timeline registered on `window.__timelines["<composition-id>"]`, `tl.set({}, {}, DUR)` at the end. Ids get the frame prefix `fNN-`. For type-on with a stepping caret, copy `typeLine` from `../react-router-params/compositions/frames/04-string.html` and adapt it to this kit: `FS = 24`, `CW = 0.6` (14.4px per char), `X0 = 0` (rows in `.fx-lines` start at the text column), caret element `.ts-caret` inside the `.fx-row`.
- **Every content frame = code left + phone right.** Code surface `.fx-panel` at x 80, y 150, 1290 × 730 (fixed, also when the code is short); title `app/index.tsx`; status bar `app/index.tsx · <topic>`. Phone `.ph-body` at x 1494, y 150, 346 × 730; screen 316 × 650. Nothing important below y 880 (captions from 900).
- **The phone follows the code.** Every change in the code is visible in the phone at the same moment (like fast refresh / the interactive editor on the course page). The phone is an SVG: a dashed `.ph-parent` rect (the parent View), one `<rect>` per child View with `fill` = its `backgroundColor`, a `.ph-mark` rect (3px blue outline) for pointing at one box, and the axis groups. Positions are **never hand-computed**: describe each state as React Native styles and call `rnLayout({ parent: {...}, children: [{...}, ...] })`, then `rnShow(L, parentSel, childSels, at, dur)` (dur 0 = set; layout moves use dur 0.8 with the kit's `power3.inOut`). The measurement runs once at script start (it appends a hidden div to `document.body`, measures, removes it).
- **Axes:** solid TS-blue main axis with label `main axis` / `justifyContent`, dashed `#94A3B8` cross axis with `cross axis` / `alignItems`. Orientation groups: `mc` main down (column), `mr` main right (row), `mrr` main left (row-reverse), `mcr` main up (column-reverse), `cc` cross right (for column directions), `cr` cross down (for row directions). Switch orientation with `fadeSwap(out, in, at)` (0.35s crossfade). To make one axis the focus, dim the other group to opacity 0.3 (0.35s). Axes appear only from frame 2 on (frame 2 introduces them); frame 4 has no axes (the dashed parent outline is the focus there).
- **Code style (course React Native, keep exact):**
  ```
  import {View} from "react-native";

  const Index = () => {
      return (
          <View style={{
              flex: 1,
              flexDirection: "row",
          }}>
              <View style={{width: 80, height: 80, backgroundColor: "lightblue"}}/>
              <View style={{width: 80, height: 80, backgroundColor: "skyblue"}}/>
              <View style={{width: 80, height: 80, backgroundColor: "steelblue"}}/>
          </View>
      )
  }
  ```
  4-space indent, no spaces inside `{View}` or `{{...}}`, `}}/>` for children. The parent's style is always written one property per line with a trailing comma. A child is one line (max 82 characters); a child that needs more is written as
  ```
              <View style={{
                  width: 80, height: 80, backgroundColor: "lightblue",
                  position: "absolute", right: 20, bottom: 20,
              }}/>
  ```
  Syntax colours as in the reference: `import`/`from`/`const`/`return`/`=>` keyword, `Index` / `View` / `ActivityIndicator` / numbers in `ts-fn`, strings in `ts-str`, `<`, `>`, `</`, `={{`, `}}>`, `}}/>` in `ts-punct`, comments in `ts-fold` (`#94A3B8`), property names ink. Box colours (fill = the CSS named colour): `lightblue`, `skyblue`, `steelblue`, `cadetblue`, `royalblue`.
- **Code changes:**
  - *Value change* (e.g. `"column"` → `"row"`): stacked variants in a `.fx-val` wrapper, `swapVal(old, new, wrap, newLengthInChars, at)` (old slides up, new slides in, 0.25s). Set the wrapper's initial width in CSS to `chars × 14.4px`.
  - *Row text change* (comment removed, property added inside a child line): put the new version in the same `.fx-row` as `<span class="fx-alt" style="position:absolute; left:0; top:0; opacity:0">…</span>` and crossfade old → new (0.3s), with a blue wash on the row for ~1s.
  - *Inserted rows:* the rows after the insertion point are wrapped in `<div id="fNN-below">` inside `.fx-lines`; the inserted row(s) are in the normal flow (chars start at opacity 0, typed with `typeLine`), and `#fNN-below` starts at `y: -34 × n` and slides to `y: 0` (0.35s power3.out) right before the typing starts. Line numbers stay a static column with the final count; the last `n` numbers start at opacity 0 and fade in with the slide.
  - Typing: about 0.035s per char for short property lines, faster (0.012-0.02) for long lines; the phone updates when the typed value is complete (unless the frame says otherwise).
- **Washes and marks:** blue wash (`washOn` / `washOff`) on the line or value the voice names; `ts-mark` 2px blue box around a key line (absolute inside `.fx-lines`, sized from rows: top = 34 × (row − 1) − 2, height 38); `.ph-mark` around a box in the phone; red (`ts-mark--wrong`, or stroke `#D14343` on a phone rect) only where a frame says something goes wrong.
- **Motion:** calm `power3.out` settles for reveals (small offsets 8-20px), layout moves 0.8s, no bounce / overshoot / elastic, holds stand still. Every reveal on the spoken word that names it (times below = seconds from frame start = voice start). Never show something before the voice names it. Kicker in at 0.1-0.2; panel and phone fade/slide in (y 20 → 0) at 0.1 / 0.2 like the reference. The frame itself does not fade out (index transitions do that).
- **Negative list:** no logos, decorative shapes, coloured blocks behind text, gradients, glow, heavy shadows, dark code surfaces, serif fonts, real browser / VS Code chrome, icons or emoji, em-dashes in visible text, `Math.random` / `Date.now`, breathing / drift / camera push. No sfx inside frames (the root adds them from the `sfx:` lines).

## Frame 1 — Hook: drie vakjes

- id: 01-hook
- duration: 15.03s
- transition_in: cut
- status: outline
- voiceover: "Hoe zet je in een app drie vakjes naast elkaar? Of netjes in het midden van het scherm? In React Native doe je dat met flexbox. Elke View is een flex container, en met een paar style properties bepaal je waar zijn kinderen komen."
- focal: the phone, first alone and centred, rearranging three boxes; then the hero word `flexbox` and the properties that do it.
- sfx: pop@0.3, whoosh-short@1.92, whoosh-short@4.0, pop@7.04, pop@9.36, pop@11.12, whoosh-short@12.68
- layout: no code surface in this frame. The phone starts **centred** (`.ph-body` translated so its centre is at x 960: x offset −707 from the standard left 1494) and slides to the standard position at 7.04. Left side after the slide: hero `flexbox` (Inter 700 168px, tracking −0.035em) at left 80, top 300; blue hero bar (`ts-hero-bar`, 6px) under it, width = word width. Under it at top 520: statement `Elke View is een flex container` (Inter 500 48px ink). Under that at top 620: a row of four chips (`ts-chip`, mono 24px, gap 16): `flexDirection`, `justifyContent`, `alignItems`, `flex`.
- phone states (via `rnLayout`, children 3 × `{width: 80, height: 80}`; colours lightblue, skyblue, steelblue; dashed parent outline visible; no axes):
  - A: `{flex: 1}` (column, top-left)
  - B: `{flex: 1, flexDirection: "row"}`
  - C: `{flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center"}`
  - D: `{flex: 1, justifyContent: "space-evenly", alignItems: "center"}`
- shots:
  - 0.0-1.9: no kicker yet. "Hoe" (0.3): the centred phone fades in (y 20 → 0, 0.7s) showing state A.
  - 1.9-4.0: "naast elkaar" (1.92): layout → B (0.8s).
  - 4.0-7.0: "midden van het scherm" (4.00): layout → C (0.8s). Hold.
  - 7.0-11.1: "flexbox" (7.04): the phone slides to the standard right position (x +707, 0.8s power3.inOut); hero `flexbox` lands at the left (y 16 → 0, opacity, 0.6s power3.out) at 7.04; the blue bar wipes in at 7.4. Kicker `React Native` appears at 7.2. "Elke View" (8.56): the statement fades in. "flex container" (9.36): the phone's dashed parent outline turns blue (stroke `#3178C6`, width 2.5) for the rest of the frame.
  - 11.1-end: "style properties" (11.12/11.36): the four chips pop in (opacity, y 10 → 0, scale 0.96 → 1), stagger 0.15. "waar zijn kinderen komen" (12.68): layout → D (0.8s). Hold.

## Frame 2 — Twee assen

- id: 02-assen
- duration: 18.23s
- transition_in: blur-crossfade
- status: outline
- voiceover: "Flexbox werkt met twee assen. De main axis is de richting waarin de kinderen na elkaar komen. De cross axis staat daar loodrecht op. In React Native is de main axis standaard verticaal: de kinderen staan onder elkaar. Op het web is dat net andersom."
- focal: the two axes appearing in the phone; the default direction column.
- sfx: pop@2.6, pop@6.72, pop@8.0, typing@11.36, typing@15.6
- code (13 rows at the start, 14 after the insert at 11.36):
  ```
  1  import {View} from "react-native";
  2
  3  const Index = () => {
  4      return (
  5          <View style={{
  6              flex: 1,
  7              // standaard: flexDirection: "column"        <- inserted at 11.36
  8          }}>
  9              <View style={{width: 80, height: 80, backgroundColor: "lightblue"}}/>
  10             <View style={{width: 80, height: 80, backgroundColor: "skyblue"}}/>
  11             <View style={{width: 80, height: 80, backgroundColor: "steelblue"}}/>
  12         </View>
  13     )
  14 }
  ```
  Kicker `Main axis en cross axis`. Status bar `app/index.tsx · flexDirection`. Row 7 is a comment (`ts-fold` colour). At 15.60 the text `  (web: "row")` is typed on at the end of row 7, same comment colour.
- phone: state `{flex: 1}` with the three boxes, present from the phone's entrance. No axes at the start.
- shots:
  - 0.0-2.5: kicker, panel and phone in. "twee assen" (1.20): hold.
  - 2.5-6.6: "De main axis" (2.60): main axis group `mc` draws in: the line's `y2` tweens from 26 to 610 (0.6s power3.out) and the head + labels fade in at the end of the draw. "kinderen" (4.56): blue wash on rows 9-11 (the three children), off at 6.4; a `.ph-mark` is not needed.
  - 6.6-9.2: "De cross axis" (6.72): cross axis group `cc` draws in the same way (`x2` 13 → 289). "loodrecht" (8.00): a small right-angle mark at the crossing (an L-shaped path 14 × 14 at (158, 325), into the lower-right quadrant, stroke `#475569` 2px, no fill) fades in; it fades out at 10.4.
  - 9.2-15.5: "In React Native" (9.44): hold. "main axis" (10.56): the main axis group pulses its emphasis: the cross group dims to 0.3. "standaard" (11.36): rows 8-13 slide down (insert technique), line number 14 fades in, row 7 types the comment `// standaard: flexDirection: "column"` (0.02s/char). "onder elkaar" (14.20): `.ph-mark` around the three boxes as one rect (x 0, y 0, w 80, h 240) fades in, off at 15.4.
  - 15.5-end: "Op het web" (15.60): `  (web: "row")` types on at the end of row 7 (0.03s/char). "andersom" (16.72): blue wash on `"row"` in that comment. Cross group back to opacity 1 at 16.72. Hold.

## Frame 3 — flexDirection

- id: 03-direction
- duration: 17.91s
- transition_in: crossfade
- status: built (reference frame, `compositions/frames/03-direction.html`)
- voiceover: "Die richting kies je met flex direction. Zet je die op row, dan wordt de main axis horizontaal en staan de vakjes naast elkaar. De cross axis draait mee. Met row reverse en column reverse keer je de volgorde om: het eerste kind staat dan achteraan."
- sfx: pop@1.36, whoosh-short@3.44, pop@8.68, whoosh-short@10.88, whoosh-short@12.24, pop@15.04

## Frame 4 — flex: 1 op de parent

- id: 04-flex-parent
- duration: 16.71s
- transition_in: push-slide
- status: outline
- voiceover: "Kijk naar de stippellijn: dat is de parent View. Zonder flex is die maar zo groot als zijn kinderen. Geef je hem flex één, dan neemt hij alle beschikbare ruimte in, hier het volledige scherm. Daarom staat flex één bijna altijd op je buitenste View."
- focal: the dashed outline of the parent View, small without flex, the whole screen with `flex: 1`.
- sfx: pop@0.64, pop@5.48, pop@6.92, whoosh-short@7.2, pop@14.68
- code (14 rows, all present from the start):
  ```
  1  import {View} from "react-native";
  2
  3  const Index = () => {
  4      return (
  5          <View style={{
  6              // flex: 1,
  7              flexDirection: "column",
  8          }}>
  9              <View style={{width: 80, height: 80, backgroundColor: "lightblue"}}/>
  10             <View style={{width: 80, height: 80, backgroundColor: "skyblue"}}/>
  11             <View style={{width: 80, height: 80, backgroundColor: "steelblue"}}/>
  12         </View>
  13     )
  14 }
  ```
  Kicker `flex: 1`. Status bar `app/index.tsx · flex`. Row 6 starts as a comment (`ts-fold` colour, `// flex: 1,`); its `.fx-alt` version is `flex: 1,` in normal colours at the same indent (12 spaces).
- phone: no axes in this frame. States: A `{flexDirection: "column"}` (parent: full width, 240 high = its children), B `{flex: 1, flexDirection: "column"}` (parent = full screen). Children 3 × `{width: 80, height: 80}`.
- shots:
  - 0.0-2.3: kicker, panel, phone in (state A). "stippellijn" (0.64): the `.ph-parent` rect turns blue (stroke `#3178C6`, width 2.5, 0.35s) and stays blue for the whole frame.
  - 2.3-6.3: "parent View" (2.40): blue wash on rows 5-8 (the parent's opening tag), off at 5.2. "Zonder flex" (3.52): wash on row 6 (the comment). "kinderen" (5.48): wash on rows 9-11; `.ph-mark` around the 3 boxes as one rect (0, 0, 80, 240), off at 6.6.
  - 6.3-12.0: "flex één" (6.92/7.20): row 6 crossfades from the comment to `flex: 1,` (0.3s, at 6.92) with a blue wash; at 7.20 the phone goes to state B: the parent rect grows to the full screen (0.8s). "volledige scherm" (10.80): hold.
  - 12.0-end: "flex één" (13.20): blue `ts-mark` box around row 6. "buitenste View" (14.68): wash on rows 5-8. Hold.

## Frame 5 — flex op de kinderen

- id: 05-flex-kinderen
- duration: 15.43s
- transition_in: crossfade
- status: outline
- voiceover: "Flex werkt ook op de kinderen. Haal de vaste hoogte weg en geef ze flex één, twee en drie. Ze verdelen dan de ruimte op de main axis: zes delen in totaal. Het derde vakje krijgt er drie, dus de helft van het scherm."
- focal: three children sharing the main axis 1 : 2 : 3.
- sfx: pop@2.76, pop@4.48, pop@5.08, pop@5.84, pop@8.0, pop@9.28, pop@11.2
- code (14 rows, present from the start):
  ```
  1  import {View} from "react-native";
  2
  3  const Index = () => {
  4      return (
  5          <View style={{
  6              flex: 1,
  7              flexDirection: "column",
  8          }}>
  9              <View style={{width: 80, height: 80, backgroundColor: "lightblue"}}/>
  10             <View style={{width: 80, height: 80, backgroundColor: "skyblue"}}/>
  11             <View style={{width: 80, height: 80, backgroundColor: "steelblue"}}/>
  12         </View>
  13     )
  14 }
  ```
  New versions of rows 9-11 (`.fx-alt`): `<View style={{flex: 1, width: 80, backgroundColor: "lightblue"}}/>`, `{flex: 2, ...skyblue}`, `{flex: 3, ...steelblue}`. Kicker `flex`. Status bar `app/index.tsx · flex`.
- phone: axes `mc` and `cc` present from the start, cross dimmed to 0.3. States (parent `{flex: 1}`): A all three `{width: 80, height: 80}`; B child 1 `{flex: 1, width: 80}`, others as A; C children 1, 2 flex 1, 2, child 3 as A; D `{flex: 1, width: 80}`, `{flex: 2, width: 80}`, `{flex: 3, width: 80}`.
- shots:
  - 0.0-2.0: kicker, panel, phone in (state A). "kinderen" (1.28): wash on rows 9-11, off at 2.7.
  - 2.0-4.2: "vaste hoogte" (2.76): the three `height: 80, ` parts get a thin red underline (2px `#D14343`, under the text, `ts-underline` style but red and 2px) and dim to 0.45. "weg" (3.12): hold.
  - 4.2-6.4: "flex één" (4.48): row 9 crossfades to its new version, phone → B (0.8s). "twee" (5.08): row 10 crossfades, phone → C. "drie" (5.84): row 11 crossfades, phone → D. The red underlines leave with their old rows.
  - 6.4-11.0: "main axis" (8.00): blue wash on the three `flex: n` values. "zes delen" (9.28): fraction labels appear in the phone right of each box, centred on its height, x 96: `1/6`, `2/6`, `3/6` (JetBrains Mono 500 20px `#235A97`, white halo like the axis labels), stagger 0.15.
  - 11.0-end: "Het derde vakje" (11.20): `.ph-mark` around box 3; wash on row 11. "de helft" (13.28): the `3/6` label swaps to `3/6 = 1/2` (swap 0.25s). Hold.

## Frame 6 — justifyContent

- id: 06-justify
- duration: 20.31s
- transition_in: push-slide
- status: outline
- voiceover: "Met justify content verdeel je de kinderen over de main axis. Standaard staan ze aan het begin: flex start. Center zet ze in het midden, flex end aan het einde. Space between verdeelt de vrije ruimte tussen de vakjes. Space around en space evenly geven ook ruimte aan de randen."
- focal: the value of `justifyContent` cycling, the boxes moving along the main axis.
- sfx: typing@0.32, pop@3.12, whoosh-short@7.52, whoosh-short@9.6, whoosh-short@11.52, pop@13.04, whoosh-short@15.2, whoosh-short@16.4
- code (14 rows at the start; row 7 inserted at 0.32 → 15 rows):
  ```
  1  import {View} from "react-native";
  2
  3  const Index = () => {
  4      return (
  5          <View style={{
  6              flex: 1,
  7              justifyContent: "flex-start",      <- inserted, typed from 0.32
  8          }}>
  9-11         (the three 80 x 80 children)
  12         </View>
  13     )
  14 }
  ```
  `"flex-start"` is a `.fx-val` with variants `"flex-start"` (12 chars), `"center"` (8), `"flex-end"` (10), `"space-between"` (15), `"space-around"` (14), `"space-evenly"` (14). Kicker `justifyContent`. Status bar `app/index.tsx · justifyContent`.
- phone: parent `{flex: 1, justifyContent: <value>}`, children 3 × 80 × 80. Axes `mc` and `cc`; cross dimmed to 0.3 from 3.12.
- shots:
  - 0.0-3.0: kicker, panel, phone in. "justify content" (0.32): insert row 7 and type `justifyContent: "flex-start",` (0.03s/char).
  - 3.0-7.4: "main axis" (3.12): cross dims to 0.3; blue wash on the `mc` label? (SVG text cannot take a wash: instead the main line's stroke-width tweens 3 → 5 and back over 0.8s). "Standaard" (4.40): hold. "flex start" (6.40): blue wash on the value.
  - 7.4-11.4: "Center" (7.52): value → `"center"`, layout → center. "flex end" (9.60): value → `"flex-end"`, layout → flex-end.
  - 11.4-15.1: "Space between" (11.52): value → `"space-between"`, layout. "vrije ruimte" (13.04): the two gaps between the boxes get a blue wash rect in the phone (fill `rgba(49,120,198,0.12)`, full screen width, from the bottom of one box to the top of the next, computed from the layout), fade in 0.3s, out at 14.9.
  - 15.1-end: "Space around" (15.20): value → `"space-around"`, layout. "space evenly" (16.40): value → `"space-evenly"`, layout. "randen" (18.76): wash rects on the top and bottom free space (screen top to box 1, box 3 to screen bottom) fade in. Hold.

## Frame 7 — De main axis bepaalt

- id: 07-main-axis
- duration: 16.39s
- transition_in: crossfade
- status: outline
- voiceover: "Belangrijk: justify content volgt altijd de main axis. Zet je flex direction op row, dan centreert dezelfde regel de vakjes niet meer verticaal, maar horizontaal. Kijk dus altijd eerst welke kant je main axis uitgaat."
- focal: the same `justifyContent: "center"` centring vertically, then horizontally after `flexDirection: "row"`.
- sfx: pop@1.2, typing@5.36, whoosh-short@6.24, pop@9.44, pop@10.48, pop@14.04
- code (14 rows at the start, row 7 inserted at 5.36 → 15 rows):
  ```
  5          <View style={{
  6              flex: 1,
  7              flexDirection: "row",          <- inserted, typed from 5.36
  8              justifyContent: "center",
  9          }}>
  ```
  (rows 1-4 and the children / closing rows as in frame 6). Kicker `justifyContent volgt de main axis`. Status bar `app/index.tsx · flexDirection`.
- phone: A `{flex: 1, justifyContent: "center"}` (column: boxes stacked, vertically centred, at the left), B `{flex: 1, flexDirection: "row", justifyContent: "center"}` (row, horizontally centred, at the top). Axes `mc` + `cc` at the start; → `mr` + `cr` at 6.24.
- shots:
  - 0.0-4.8: kicker, panel, phone in (A). "justify content" (1.20): wash on the justifyContent row. "main axis" (3.52): the main line stroke-width 3 → 5 → 3 (0.8s).
  - 4.8-9.3: "flex direction" (5.36): insert + type `flexDirection: "row",` (0.035s/char). "row" (6.24): layout → B, axes crossfade to `mr` / `cr`. "dezelfde regel" (8.20): blue `ts-mark` around the justifyContent row.
  - 9.3-11.6: "niet meer verticaal" (9.44): dashed ghost rects (stroke `#94A3B8` 1.5px dashed 5 4, no fill) at the three A positions fade in to 0.6. "horizontaal" (10.48): `.ph-mark` around the three B boxes as one rect; the ghosts fade out at 11.4.
  - 11.6-end: "main axis" (14.04): wash on the flexDirection row; main line stroke pulse. Hold.

## Frame 8 — alignItems

- id: 08-align-items
- duration: 20.23s
- transition_in: push-slide
- status: outline
- voiceover: "Voor de cross axis gebruik je align items. Flex start, center en flex end werken zoals je verwacht, maar dan in de andere richting. De standaardwaarde is stretch: een kind zonder vaste breedte wordt uitgerekt over de hele cross axis. Heeft het wel een breedte, dan rekt er niets uit."
- focal: boxes moving across the cross axis; the box without a width stretching.
- sfx: pop@0.4, typing@2.08, whoosh-short@4.8, whoosh-short@5.68, pop@11.16, pop@13.2, whoosh-short@14.04, pop@17.2
- code (14 rows, row 7 inserted at 2.08 → 15 rows):
  ```
  5          <View style={{
  6              flex: 1,
  7              alignItems: "flex-start",          <- inserted, typed from 2.08
  8          }}>
  9              <View style={{width: 80, height: 80, backgroundColor: "lightblue"}}/>
  10             <View style={{width: 80, height: 80, backgroundColor: "skyblue"}}/>
  11             <View style={{width: 80, height: 80, backgroundColor: "steelblue"}}/>
  ```
  `.fx-val` variants `"flex-start"` (12), `"center"` (8), `"flex-end"` (10), `"stretch"` (9). Row 11's `.fx-alt`: `<View style={{height: 80, backgroundColor: "steelblue"}}/>`. Kicker `alignItems`. Status bar `app/index.tsx · alignItems`.
- phone: parent `{flex: 1, alignItems: <value>}`; children 80 × 80, child 3 becomes `{height: 80}` at 13.20. Axes `mc` + `cc`, main dimmed to 0.3 from 0.4.
- shots:
  - 0.0-2.0: kicker, panel, phone in. "cross axis" (0.40): main dims; the cross line stroke-width 2 → 4 → 2 (0.8s).
  - 2.0-9.6: "align items" (2.08): insert + type `alignItems: "flex-start",`. "Flex start" (3.44): wash on the value. "center" (4.80): value + layout. "flex end" (5.68): value + layout. "andere richting" (8.80): hold.
  - 9.6-16.4: "stretch" (11.16): value → `"stretch"`, layout (boxes back at the left, their width stays 80). "zonder vaste breedte" (13.20): row 11 crossfades to its `.fx-alt` (width removed, wash). "uitgerekt" (14.04): layout: box 3 stretches over the full width (0.8s). "hele cross axis" (15.28): `.ph-mark` around box 3.
  - 16.4-end: "wel een breedte" (17.20): blue wash on `width: 80` in rows 9 and 10; `.ph-mark` moves to boxes 1-2 as one rect (0, 0, 80, 160). Hold.

## Frame 9 — Centreren

- id: 09-centreren
- duration: 12.39s
- transition_in: crossfade
- status: outline
- voiceover: "Zet je justify content en align items allebei op center, dan staat je inhoud precies in het midden van het scherm. Die twee regels ga je nog vaak schrijven, bijvoorbeeld voor een laadscherm."
- focal: one box exactly in the centre; then the same two lines centring a loading spinner.
- sfx: typing@0.48, typing@1.84, whoosh-short@3.52, pop@6.24, pop@7.96, whoosh-short@10.64
- code (12 rows at the start, rows 7 and 8 inserted → 14):
  ```
  1  import {View} from "react-native";
  2
  3  const Index = () => {
  4      return (
  5          <View style={{
  6              flex: 1,
  7              justifyContent: "center",          <- inserted, typed from 0.48
  8              alignItems: "center",              <- inserted, typed from 1.84
  9          }}>
  10             <View style={{width: 80, height: 80, backgroundColor: "steelblue"}}/>
  11         </View>
  12     )
  13 }
  ```
  At 10.64 row 1 crossfades to `import {ActivityIndicator, View} from "react-native";` and row 10 to `<ActivityIndicator size="large"/>` (`ActivityIndicator` in `ts-fn`, `size` ink, `"large"` string). Kicker `Centreren`. Status bar `app/index.tsx · center`.
- phone: one child. States: A `{flex: 1}`, B `{flex: 1, justifyContent: "center"}`, C `{flex: 1, justifyContent: "center", alignItems: "center"}`. Axes `mc` + `cc` at full opacity. At 10.64 the box fades out and a spinner fades in at the screen centre: a 44px ring (stroke `#E2E8F0` 4px) with a 90° arc in `#3178C6` (round caps), rotating continuously until the end (one tween, `rotation` linear, 1 turn per 1.1s, finite: computed from the remaining time).
- shots:
  - 0.0-3.4: kicker, panel, phone in (A). "justify content" (0.48): insert + type row 7 (0.03s/char); when it completes: layout → B. "align items" (1.84): insert + type row 8; on complete (by 3.52 "center") layout → C.
  - 3.4-7.9: "precies in het midden" (6.24): `.ph-mark` around the box (it sits on the crossing of the two axes).
  - 7.9-10.6: "Die twee regels" (7.96): one blue `ts-mark` around rows 7-8 together.
  - 10.6-end: "laadscherm" (10.64): rows 1 and 10 crossfade to the ActivityIndicator versions (with wash); the phone box crossfades to the spinner. Hold (spinner keeps turning).

## Frame 10 — alignSelf

- id: 10-align-self
- duration: 13.96s
- transition_in: crossfade
- status: outline
- voiceover: "Moet één kind anders uitgelijnd worden dan de rest? Geef het dan align self. Dat overschrijft align items, maar enkel voor dat ene kind. Hier schuift het derde vakje naar het einde van de cross axis."
- focal: the third child leaving the centred column to the end of the cross axis.
- sfx: pop@1.36, typing@3.92, whoosh-short@4.6, pop@6.24, pop@8.72, pop@11.44
- code (14 rows at the start; row 11 becomes four rows at 3.92 → 17 rows):
  ```
  5          <View style={{
  6              flex: 1,
  7              alignItems: "center",
  8          }}>
  9              <View style={{width: 80, height: 80, backgroundColor: "lightblue"}}/>
  10             <View style={{width: 80, height: 80, backgroundColor: "skyblue"}}/>
  11             <View style={{width: 80, height: 80, backgroundColor: "steelblue"}}/>
  12         </View>
  ```
  becomes
  ```
  11             <View style={{
  12                 width: 80, height: 80, backgroundColor: "steelblue",
  13                 alignSelf: "flex-end",                <- typed
  14             }}/>
  15         </View>
  ```
  Implementation: row 11 crossfades to `<View style={{` (0.3s, at 3.92), rows 12 and 14 fade in, rows below (old 12-14) slide down by 3 rows (`#f10-below`, y −102 → 0), line numbers 15-17 fade in; row 13 types `alignSelf: "flex-end",` from 4.0 (0.03s/char); layout updates when the value is complete. Kicker `alignSelf`. Status bar `app/index.tsx · alignSelf`.
- phone: parent `{flex: 1, alignItems: "center"}`, children 80 × 80, child 3 gets `{alignSelf: "flex-end"}`. Axes `mc` + `cc`, main dimmed to 0.3.
- shots:
  - 0.0-3.8: kicker, panel, phone in (boxes centred horizontally, stacked at the top). "uitgelijnd" (1.36): wash on the alignItems row. "de rest" (2.60): `.ph-mark` around boxes 1-3 (one rect), off at 3.8.
  - 3.8-5.6: "align self" (3.92/4.48): the row restructure + typing; layout: box 3 moves to the right end (0.8s).
  - 5.6-9.4: "overschrijft" (5.68): wash on the alignSelf row. "align items" (6.24): wash on the alignItems row too. "dat ene kind" (8.72): `.ph-mark` around box 3.
  - 9.4-end: "het einde van de cross axis" (11.44 / 12.32): the cross line stroke-width 2 → 4 → 2 (0.8s). Hold.

## Frame 11 — flexWrap

- id: 11-wrap
- duration: 17.03s
- transition_in: push-slide
- status: outline
- voiceover: "Wat als er te veel kinderen zijn voor één rij? Dan lopen ze gewoon van het scherm af: React Native maakt ze niet kleiner. Met flex wrap op wrap springen ze naar een nieuwe regel. Hoe die regels over de cross axis verdeeld worden, bepaal je met align content."
- focal: five boxes in a row running off the screen; `flexWrap: "wrap"` puts them on two lines.
- sfx: pop@1.2, pop@4.6, typing@7.68, whoosh-short@8.9, pop@12.4, typing@14.92, whoosh-short@15.6
- code (16 rows at the start; rows 8 and 9 inserted → 18):
  ```
  1  import {View} from "react-native";
  2
  3  const Index = () => {
  4      return (
  5          <View style={{
  6              flex: 1,
  7              flexDirection: "row",
  8              flexWrap: "wrap",               <- inserted, typed from 7.68
  9              alignContent: "center",         <- inserted, typed from 14.92
  10         }}>
  11             <View style={{width: 80, height: 80, backgroundColor: "lightblue"}}/>
  12             <View style={{width: 80, height: 80, backgroundColor: "skyblue"}}/>
  13             <View style={{width: 80, height: 80, backgroundColor: "steelblue"}}/>
  14             <View style={{width: 80, height: 80, backgroundColor: "cadetblue"}}/>
  15             <View style={{width: 80, height: 80, backgroundColor: "royalblue"}}/>
  16         </View>
  17     )
  18 }
  ```
  Kicker `flexWrap`. Status bar `app/index.tsx · flexWrap`.
- phone: parent A `{flex: 1, flexDirection: "row"}`, B `+ flexWrap: "wrap"`, C `+ alignContent: "center"`; children 5 × 80 × 80 (colours as in the code). Box 4 is cut off by the screen edge and box 5 is outside it in state A (the SVG clips them). Axes `mr` + `cr`.
- shots:
  - 0.0-2.9: kicker, panel, phone in (A). "te veel kinderen" (1.20): wash on rows 11-15, off at 2.8.
  - 2.9-7.4: "van het scherm af" (4.60): the visible part of box 4 gets a red outline (stroke `#D14343` 2.5px, rect x 240 → 316 clipped) and a small red marker at the screen's right edge: a 4px red bar along the right edge from y 0 to 80. "niet kleiner" (6.64): hold.
  - 7.4-11.0: red marks fade out at 7.5. "flex wrap" (7.68): insert row 8 and type `flexWrap: "wrap",`; layout → B when `"wrap"` is complete (~8.9): boxes 4 and 5 jump to the second line (0.8s).
  - 11.0-end: "cross axis" (12.40): main dims to 0.3; the cross line stroke-width pulse. "align content" (14.92): insert row 9 and type `alignContent: "center",`; layout → C on complete (both lines move to the vertical centre). Hold.

## Frame 12 — Absolute positioning

- id: 12-absolute
- duration: 16.87s
- transition_in: crossfade
- status: outline
- voiceover: "Soms moet een element buiten die flow vallen, zoals een knop rechts onderaan. Dan gebruik je position absolute. Met top, left, right en bottom plaats je het ten opzichte van de parent. De andere kinderen schuiven op, alsof het er niet staat."
- focal: the first box leaving the flow to the bottom-right corner, the other two moving up.
- sfx: pop@3.4, typing@5.6, whoosh-short@10.3, pop@12.0, pop@13.68
- code (14 rows at the start; row 9 becomes four rows at 5.60 → 17):
  ```
  9              <View style={{width: 80, height: 80, backgroundColor: "lightblue"}}/>
  ```
  becomes
  ```
  9              <View style={{
  10                 width: 80, height: 80, backgroundColor: "lightblue",
  11                 position: "absolute", right: 20, bottom: 20,      <- typed 5.60-10.2
  12             }}/>
  ```
  Parent `flex: 1,` only (rows 5-7: `<View style={{`, `flex: 1,`, `}}>`; so 13 rows at the start, 16 after). Typing of row 11 follows the voice: `position: "absolute",` from 5.60 (done by ~6.6), pause, ` right: 20,` from 9.08, ` bottom: 20,` from 9.72 (done ~10.2). Kicker `position: "absolute"`. Status bar `app/index.tsx · position`.
- phone: parent `{flex: 1}`; A children 3 × 80 × 80; B child 1 `{width: 80, height: 80, position: "absolute", right: 20, bottom: 20}`, others unchanged. The layout updates once, when row 11 is complete (~10.3): box 1 moves to the bottom-right corner and boxes 2 and 3 move up (0.9s). Axes: none (focus on the parent outline and the boxes).
- shots:
  - 0.0-4.7: kicker, panel, phone in (A). "flow" (1.76): `.ph-mark` around the three boxes (0, 0, 80, 240), off at 3.0. "rechts onderaan" (3.40): a dashed blue target rect (stroke `#3178C6` 2px dashed 6 5, no fill) at the B position of box 1 fades in.
  - 4.7-10.3: "position absolute" (5.60): row restructure + typing as described. "top, left" (7.68 / 8.24): hold (only right and bottom are typed).
  - 10.3-12.8: layout → B at 10.30; the target rect fades out at 11.0. "ten opzichte van de parent" (12.00): the dashed `.ph-parent` rect turns blue (stroke `#3178C6`, 2.5px), back to grey at 13.6.
  - 12.8-end: "De andere kinderen schuiven op" (13.04 / 13.68): wash on rows 13-14 (the other two children); `.ph-mark` around boxes 2-3 as one rect at their new place. Hold.

## Frame 13 — Samenvatting

- id: 13-samenvatting
- duration: 24.53s
- transition_in: blur-crossfade
- status: outline
- voiceover: "Samengevat: flex direction kiest de main axis, standaard column. Justify content verdeelt de kinderen over de main axis, en align items lijnt ze uit op de cross axis. Flex verdeelt de ruimte, flex wrap maakt nieuwe regels, en position absolute plaatst een element vrij. Probeer het zelf in de voorbeelden op de cursuspagina."
- focal: a recap list left, the phone right showing each rule.
- sfx: pop@1.28, pop@4.96, pop@8.96, pop@12.4, pop@14.16, pop@16.8, pop@19.76
- layout: no code surface. Kicker `Samengevat`. Left: six recap rows from top 190, 96px apart, x 80: each row = a chip (`ts-chip`, mono 24px, fixed width 360, text ink) + a description (Inter 500 32px ink, x 480):
  1. `flexDirection` — `kiest de main axis (standaard column)`
  2. `justifyContent` — `verdeelt over de main axis`
  3. `alignItems` — `lijnt uit op de cross axis`
  4. `flex` — `verdeelt de ruimte`
  5. `flexWrap` — `maakt nieuwe regels`
  6. `position: "absolute"` — `plaatst een element vrij`
  At the bottom (top 790, x 80): `Probeer het zelf op de cursuspagina` (Inter 500 32px `#475569`) with the blue hero bar (4px, wipes in) under `cursuspagina`.
- phone (standard position) with axes: states, each moved to (0.8s) when its row appears:
  - 1.28: `{flex: 1}` + 3 boxes 80 × 80, axes `mc` + `cc` fade in.
  - 4.96: `{flex: 1, justifyContent: "center"}`.
  - 8.96: `{flex: 1, justifyContent: "center", alignItems: "center"}`.
  - 12.40: children `{flex: 1, width: 80}`, `{flex: 2, width: 80}`, `{flex: 3, width: 80}`, parent `{flex: 1, alignItems: "center"}`.
  - 14.16: parent `{flex: 1, flexDirection: "row", flexWrap: "wrap"}`, 5 children 80 × 80 (boxes 4 and 5 fade in, colours cadetblue, royalblue); axes → `mr` + `cr`.
  - 16.80: child 1 `{width: 80, height: 80, position: "absolute", right: 20, bottom: 20}` in the wrap layout.
- shots:
  - Each recap row fades in (x −12 → 0, 0.45s power3.out) on its spoken word: row 1 at 1.28, row 2 at 4.96, row 3 at 8.96, row 4 at 12.40, row 5 at 14.16, row 6 at 16.80. The active row's chip gets the selected style (blue-tint fill + blue border); the previous one returns to the normal style.
  - "standaard column" (4.16): the words `standaard column` in row 1 get the blue-dark colour.
  - 19.76: the last chip returns to normal; the bottom line fades in, its bar wipes at 21.81 ("cursuspagina"). Hold.
