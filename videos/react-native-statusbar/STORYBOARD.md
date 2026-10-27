# STORYBOARD — react-native-statusbar

## Video direction

- **Sibling film.** Same series as `../react-native-pressable` and `../react-native-stylesheet` (TS light, code surface left + phone right). Follow the "Video's" section of the repo `CLAUDE.md`. Every frame copies, verbatim, the whole `<style>` block of `../react-native-pressable/compositions/frames/02-basis.html` up to and including the `.ph-touch` rule (TS LIGHT primitives + FLEX KIT + APP KIT), then the **STATUSBAR CLIP** block below, then frame-specific rules (`#fNN-*`). Script helpers are copied from the same file (`washOn`, `washOff`, `swapVal`, `fadeSwap`, `typeLine`, the APP KIT helpers `dpBox`, `placeOn`, `touchDown`, `touchUp`, `pop`, `scrollTo`, `intro`, `range`, `rowEls`, `lnEls`, `hideEls`, `showEls`). Only copy what the frame uses.
- **Course page:** `docs/react-native/expo-components/status-bar.md`. The clip follows its order. **No summary frame**: the clip ends on frame 8 (teacher's request).
- **Layout.** Code panel `.fx-panel` at x 80, y 150, 1290 × 730 (18 visible rows; `#fNN-code { height: 612px; overflow: hidden; }` and rows outside the window hidden at rest, exactly like pressable). Phone `.ph-body` at x 1494, y 150 (screen 316 × 650, app as DOM, 1 dp = 1.4 px). Small chips sit centred **above the phone** (`#fNN-chips`, x 1494-1840, y 82-134), like pressable. Nothing below y 880. Frames 3 and 7 deviate (see there).
- **Code style.** As on the course page with the series' adjustments: 4-space indent, no spaces inside import braces (`{StatusBar}`, `{Slot}`), self-closing tags without space (`<StatusBar style="light"/>`, `<Slot/>`), no `import React`, no `export default ...;`, `return (...);`, StyleSheet one property per line with trailing comma. Syntax classes: `ts-kw` keywords, `ts-str` strings, `ts-fn` components / functions / numbers / `true`, `ts-punct` for `< > </ /> ={ }`.
- **The status bar in the phone** is the APP KIT `.ph-status` (226 × 24 dp, `9:41`, signal, battery). It has no background: the app (`.rn-root`, which fills the whole 226 × 464 dp app area) is painted behind it, so a dark app gives a dark bar. Its ink is `#1E293B` (dark); the STATUSBAR CLIP block makes the icons follow `color`, so **one `color` tween on `.ph-status` flips text + icons** (`#1E293B` ↔ `#FFFFFF`, 0.35s power2.out). Hiding = tween `opacity` (and for the animated variant `y: -24` in dp, i.e. on the `.ph-status` element inside `.ph-app`).
- **App colours.** Dark screen = `#1E293B` (course value), text white 20 dp. Second colour (frame 5) `"steelblue"` (`#4682B4`). Red only for the unreadable bar in frame 4.
- **Presses.** `.ph-touch` as in pressable (fade + scale 0.6 → 1, 0.15s; release fades 0.25s). On dark surfaces / blue Buttons the touch is drawn light (white 24% fill, 70% rim).
- **Motion.** power3.out settles, washes on the named line/value, `ts-mark` around a key line, no bounce, holds stand still, every reveal on the word that names it (times below are seconds from the frame start = voice start). No sfx inside the frames; the `sfx:` lines below are read by `build.py`. No fade-out of the frame itself (the root timeline crossfades).

### STATUSBAR CLIP block (copy verbatim after the APP KIT block)

```css
    /* ---- STATUSBAR CLIP: shared helpers of this video ---- */
    /* the status bar ink follows `color` on .ph-status: one colour tween flips text and icons */
    .ph-status .ph-sig > i { background: currentColor; }
    .ph-status .ph-batt { border-color: currentColor; }
    .ph-status .ph-batt::after { background: currentColor; }
    .ph-status--light { color: #FFFFFF; }
    /* outline in the phone (dp units, inside .ph-app), like .ph-mark */
    .app-mark { position: absolute; box-sizing: border-box; border: 2px solid var(--ts-blue); border-radius: 4px; opacity: 0; z-index: 8; }
    .app-mark--wrong { border: 1.5px solid var(--ts-error); }
    .app-mark--bar { left: 1px; top: 1px; width: 224px; height: 23px; border-radius: 5px; }
    /* small annotation label in the phone (dp units) */
    .app-lbl { position: absolute; font-family: var(--ts-mono); font-weight: 500; font-size: 12px; line-height: 1; color: var(--ts-blue-dark); white-space: nowrap; opacity: 0; z-index: 8; }
    /* chips centred above the phone */
    .sb-chips { position: absolute; left: 1494px; top: 82px; width: 346px; height: 52px; display: flex; justify-content: center; gap: 10px; }
    .sb-chips .ts-chip { position: relative; opacity: 0; }
    .sb-chips .ts-chip-key { color: var(--ts-ink-soft); }
```

## Frame 1 — Hook

- id: 01-hook
- duration: 11.75s
- transition_in: cut
- sfx: pop@1.44, pop@2.8, whoosh-short@8.0, pop@9.76
- voiceover: "Bovenaan je scherm staat de statusbalk, met de klok, je batterij en je netwerk. Die balk hoort bij het toestel, maar met status bar kies je zelf hoe hij eruitziet."
- focal: the status bar at the top of a phone; then the hero word `StatusBar`.
- code: none (hook, like the pressable hook).
- phone: white app, `.rn-root` with paddingTop 24, sides 16: Text `Mijn app` (20 dp, 600) and below it a Text `Welkom terug!` (14 dp, `#475569`). Status bar dark ink.
- shots:
  - 0.0-1.4: phone centred (x offset −707 → body at x 787), fades in at 0.1 (y 20 → 0).
  - 1.4-5.5: "statusbalk" (1.44): `.app-mark--bar` around the status bar (stays until 5.9). "klok" (2.80), "batterij" (3.52), "netwerk" (4.48): a label for each appears to the **right of the phone** (Inter 600 26px, `#475569`, x ≈ 1190) at the height of the status bar, stacked (`klok`, `batterij`, `netwerk`, 44px apart, first at y ≈ 182), each with a 1.5px `#94A3B8` hairline leader to its item in the bar (clock left, signal and battery right). Each label + leader fades in (0.35s) on its word; the item itself turns TS blue (`color` / background of its parts) at the same time and back to ink at 5.9.
  - 5.5-7.9: "toestel" (6.60): labels, leaders and mark fade out (0.4s from 5.9). The phone bezel (`.ph-body` border) is outlined in TS blue for a moment (border-color tween to `#3178C6`, back at 7.6): the bar belongs to the device.
  - 7.9-9.7: "status bar" (8.00): phone slides to the standard position x 1494 (0.8s power3.inOut); hero `StatusBar` (Inter 700 168px, left 80, top 300) lands (opacity, y 24 → 0, 0.6s power3.out) at 8.10; kicker `Expo` at 8.2; blue hero bar wipes in under the hero at 8.4.
  - 9.7-end: "hoe" (9.76): statement `Kies zelf hoe hij eruitziet` (`.ts-statement`, 48px, left 80, top 520) fades up; the app background tweens white → `#1E293B` (0.5s), the texts → white / `#CBD5E1`, and the status bar ink → white at the same moment (it stays readable). Hold.

## Frame 2 — Gebruik

- id: 02-gebruik
- duration: 13.51s
- transition_in: blur-crossfade
- sfx: typing@0.4, pop@4.4, typing@5.86, whoosh-short@9.04, pop@11.96
- voiceover: "Je importeert status bar uit expo status bar. Hij tekent zelf niets op je scherm. Zet hem in je layout, naast de Slot, dan geldt hij voor al je schermen. De lege tags errond zijn een fragment."
- focal: the import, `<StatusBar/>` next to `<Slot/>` inside the fragment.
- code (`app/_layout.tsx`, status `app/_layout.tsx · StatusBar`, final 11 rows; at the start row 2 is empty and row 7 is absent, rows 8-11 sit one row up):
  ```
  1  import {Slot} from "expo-router";
  2  import {StatusBar} from "expo-status-bar";
  3
  4  const RootLayout = () => {
  5      return (
  6          <>
  7              <StatusBar/>
  8              <Slot/>
  9          </>
  10     );
  11 }
  ```
- phone: white app (the Slot renders the home screen): paddingTop 24, sides 16, Text `Home` (20 dp, 600) and a link Text `Naar details` (14 dp, `#3178C6`, underlined) 8 dp below. Second screen (for "al je schermen"): Text `Details` (20 dp, 600) and Text `Nog een scherm` (14 dp, `#475569`). Status bar dark ink in both.
- shots:
  - 0.0-3.4: kicker `Gebruik`, panel and phone in. "importeert" (0.36): row 2 typed (0.40, 0.02s/char). "expo status bar" (1.92): wash on `"expo-status-bar"` (off 3.3).
  - 3.4-5.7: "tekent zelf niets" (3.60-4.40): nothing appears in the app. "niets" (4.40): `.app-mark--bar` around the status bar in the phone (it changes only the bar; stays until 9.9).
  - 5.7-9.9: "Zet hem" (5.76): rows 8-11 slide down one row (0.35s), row 7 types `<StatusBar/>` (5.86, 0.03s/char). "Slot" (7.44): wash on `<StatusBar/>` and `<Slot/>` (rows 7-8). "schermen" (9.04): the phone's app pushes to the second screen (home slides left −226 dp and fades, details slides in from +226 dp, 0.5s power3.inOut); the status bar stays put. Wash off 9.9, bar mark off 9.9.
  - 9.9-end: "lege tags" (10.32): wash on `<>` (row 6) and `</>` (row 9). "fragment" (11.96): a `ts-mark` around `<>` and one around `</>`; small mono label `fragment` (`.ts-tag`) to the right of row 6. Hold.

## Frame 3 — De style prop

- id: 03-style
- duration: 13.91s
- transition_in: crossfade
- sfx: typing@0.4, pop@3.84, pop@5.52, pop@7.2, pop@10.64
- voiceover: "Met de style prop kies je de kleur van de tekst en de iconen. Dark maakt ze donker, light maakt ze licht. Auto volgt light of dark mode van je toestel, en inverted doet net het omgekeerde."
- focal: the value of `style` and a grid that shows the bar for each value in light and dark mode.
- layout (deviation): code panel narrower: x 80, y 150, **980** × 730 (same panel style). Right area x 1160-1840 holds the grid; no phone.
- code: frame 2's final code (11 rows). Row 7 grows: ` style=` typed after `<StatusBar` at 0.40 (before `/>`), the value `"dark"` typed at 3.84 inside a `.fx-val` wrapper, then the value swaps (`swapVal`, 0.25s) to `"light"` (5.52), `"auto"` (7.20), `"inverted"` (10.64). Final row 7: `            <StatusBar style="inverted"/>`.
- grid: two column headers (`.ts-label`): `LIGHT MODE` over x 1340-1580, `DARK MODE` over x 1600-1840, at y 196. Four rows at y 240, 352, 464, 576 (cell height 56, then a small caption under each cell). Row label at x 1160, mono 26px `"dark"`, `"light"`, `"auto"`, `"inverted"` (`ts-str` colour), vertically centred on the cells. Each row: two strips 240 × 56, radius 8: left strip white with hairline, right strip `#1E293B`. Inside each strip a status bar drawn at 2.3× the phone's dp size: `9:41` left (Inter 600 25px), signal + battery right, padding 0 22px, in the row's ink. Under each strip a caption (Inter 500 18px, `#64748B`, centred): `donker` or `licht`.
  - dark: donker / donker
  - light: licht / licht
  - auto: donker / licht
  - inverted: licht / donker  (white ink on the white strip and dark ink on the dark strip: unreadable is the point; the caption tells what it is)
- shots:
  - 0.0-3.8: kicker `De style prop`, panel and headers in. "style prop" (0.32): ` style=` typed, wash on it. "tekst" (2.28) / "iconen" (2.88): the two headers fade in.
  - 3.8-7.1: "Dark" (3.84): `"dark"` typed, row `dark` pops in (label + strips + captions, y 10 → 0). "light" (5.52): value → `"light"`, row `light` pops in. The current row's label gets a TS-blue tint background pill (`--ts-blue-tint`, radius 6) that moves with the value.
  - 7.1-10.6: "Auto" (7.20): value → `"auto"`, row `auto` pops in. "light" (8.16): wash on the light-mode cell of the auto row; "dark mode" (8.64): wash moves to the dark-mode cell (wash = `--ts-blue-tint` frame of 6px around the cell, off 10.2).
  - 10.6-end: "inverted" (10.64): value → `"inverted"`, row `inverted` pops in. "omgekeerde" (12.08): thin blue `ts-mark` around the auto and inverted rows' cells together. Hold.

## Frame 4 — Een donker scherm

- id: 04-donker
- duration: 13.75s
- transition_in: crossfade
- sfx: pop@5.12, pop@9.6, pop@12.08
- voiceover: "Let op: je geeft hier geen stijlobject mee zoals bij een View, maar een van die vier waarden. Heeft je app een donkere achtergrond, dan is donkere tekst onleesbaar. Zet style dan op light."
- focal: `style={styles.container}` versus `style="dark"`, then the unreadable bar and the fix `"light"`.
- code (`app/index.tsx`, status `app/index.tsx · StatusBar`, 24 rows, window 1-18, no scroll; course example with row 8 starting as `"dark"`):
  ```
  1  import {StyleSheet, Text, View} from "react-native";
  2  import {StatusBar} from "expo-status-bar";
  3  import Constants from "expo-constants";
  4
  5  const Index = () => {
  6      return (
  7          <View style={styles.container}>
  8              <StatusBar style="dark"/>
  9              <Text style={styles.text}>Een donker scherm</Text>
  10         </View>
  11     );
  12 }
  13
  14 const styles = StyleSheet.create({
  15     container: {
  16         flex: 1,
  17         paddingTop: Constants.statusBarHeight,
  18         backgroundColor: "#1E293B",
  19     },
  20     text: {
  21         color: "white",
  22         fontSize: 20,
  23     },
  24 });
  ```
- phone: app `#1E293B` (fills the whole app area, also behind the bar), paddingTop 24, Text `Een donker scherm` white 20 dp. Status bar dark ink (`#1E293B` on `#1E293B`: unreadable).
- shots:
  - 0.0-1.8: kicker `Een donker scherm`, panel and phone in.
  - 1.8-6.3: "stijlobject" (1.84): wash on `style={styles.container}` (row 7). "View" (3.60): `ts-mark` around it (off 4.9). "vier waarden" (5.12): wash moves to `style="dark"` (row 8); four chips pop above the phone (stagger 0.08): `auto`, `dark`, `light`, `inverted` (mono 20px chips, height 44). Wash off 6.2.
  - 6.3-10.7: "donkere achtergrond" (7.12): wash on `backgroundColor: "#1E293B",` (row 18). "onleesbaar" (9.60): thin red `.app-mark--wrong .app-mark--bar` around the phone's status bar; the `dark` chip gets the red unwanted rim (`.ts-chip--unwanted`). Wash off 10.4.
  - 10.7-end: "Zet style" (10.80): red marks off (0.3s). "light" (12.08): `swapVal` `"dark"` → `"light"` in row 8, wash on it; the status bar ink → white (0.35s); `light` chip → `.ts-chip--new` (blue tint + blue border), `dark` chip back to plain; blue `.app-mark--bar` around the status bar. Hold.

## Frame 5 — Achtergrondkleur

- id: 05-achtergrond
- duration: 12.87s
- transition_in: crossfade
- sfx: pop@1.52, whoosh-short@4.56, typing@6.56, pop@10.88
- voiceover: "De statusbalk zelf is doorzichtig. De kleur erachter is gewoon de achtergrond van je scherm. Met padding top Constants punt status bar height begint je inhoud pas onder de balk."
- focal: the bar has no colour of its own; `backgroundColor` colours it; `paddingTop` moves the content below it.
- code: frame 4's code with row 8 `style="light"`, but **row 17 (`paddingTop`) absent** at the start (23 rows, rows 18-24 one row up; window 1-18). Row 17 is inserted and typed: `        paddingTop: Constants.statusBarHeight,`.
- phone: app `#1E293B`, paddingTop **0** at the start, so `Een donker scherm` sits under the status bar (overlapping `9:41`). Status bar white ink.
- shots:
  - 0.0-2.6: kicker `Achtergrondkleur`, panel and phone in. "doorzichtig" (1.52): a dashed TS-blue outline (`.app-mark--bar` with `border-style: dashed`) around the bar + `.app-lbl` `doorzichtig` under it at the right (y 30 dp, right 8 dp).
  - 2.6-6.2: "achtergrond" (4.56): wash on `backgroundColor: "#1E293B",`; `swapVal` `"#1E293B"` → `"steelblue"`; the whole app (also behind the bar) tweens to `#4682B4` (0.5s power2.inOut). "scherm" (5.44): dashed mark and label fade out; wash off 6.0.
  - 6.2-end: "padding top" (6.48): rows below 16 slide down one row (0.35s; row that leaves the window fades), row 17 types `paddingTop: Constants.statusBarHeight,` from 6.56 (0.02s/char); on completion the container's paddingTop tweens 0 → 24 (0.5s power3.out): the text moves below the bar. "onder de balk" (10.88): wash on the new row and a blue `.app-mark` around the text in the phone. Hold.

## Frame 6 — Verbergen

- id: 06-hidden
- duration: 10.79s
- transition_in: crossfade
- sfx: typing@0.34, pop@0.8, typing@6.74, whoosh-short@8.0
- voiceover: "Met hidden verberg je de statusbalk, bijvoorbeeld voor een spel of een foto op volledig scherm. Zet je animated erbij, dan verdwijnt hij met een animatie."
- focal: `hidden={true}` and `animated={true}` on row 8, the bar disappearing.
- code: frame 4's code with row 8 `<StatusBar style="light"/>` (24 rows, window 1-18, `#1E293B`). Row 8 grows: ` hidden={true}` typed before `/>` from 0.34 (0.025s/char); later ` animated={true}` typed before `/>` from 6.74. Final row 8: `            <StatusBar style="light" hidden={true} animated={true}/>`.
- phone: as frame 4 (`#1E293B`, white ink, paddingTop 24, Text `Een donker scherm`). Chip above the phone: `hidden` key with a value that swaps (`false` / `true`).
- shots:
  - 0.0-0.3: kicker `Verbergen`, panel and phone in.
  - 0.3-6.2: "hidden" (0.24): ` hidden={true}` typed; at its end (~0.8) chip `hidden: true` pops and the status bar disappears at once (set opacity 0, no tween). Wash on ` hidden={true}`. "spel" (3.44) / "foto op volledig scherm" (4.36-5.36): the app's content gets a full-screen look: the Text fades out (0.4s) and the app shows a simple "photo": a full-bleed rectangle with a soft two-tone landscape drawn in flat `steelblue` / `#235A97` shapes (one hill path, one sun circle `#EAF2FB`), fading in at 4.36 over the dark ground, covering the whole app area including the top. Wash off 6.0.
  - 6.2-end: "animated" (6.64): ` animated={true}` typed (6.74). At 7.60 the chip swaps to `hidden: false` and the bar is back (set, no tween; white ink over the photo). "verdwijnt" (8.00): chip → `true`; the bar slides up and fades (`y: -24`, opacity 0, 0.6s power2.inOut). Wash on ` animated={true}` from 8.0. Hold.

## Frame 7 — Vanuit een functie

- id: 07-functie
- duration: 10.69s
- transition_in: crossfade
- sfx: pop@3.16, click-soft@5.04, click-soft@7.28
- voiceover: "Wil je de statusbalk aanpassen wanneer de gebruiker op een knop drukt, dan gebruik je set status bar style en set status bar hidden."
- focal: two Buttons that call `setStatusBarStyle("light")` and `setStatusBarHidden(true, "fade")`.
- code (`app/index.tsx`, 26 rows, window 1-18, no scroll). The course example, with the Buttons broken over several rows (the one-liners do not fit) and a dark container so the change is visible:
  ```
  1  import {Button, StyleSheet, View} from "react-native";
  2  import {setStatusBarHidden, setStatusBarStyle} from "expo-status-bar";
  3  import Constants from "expo-constants";
  4
  5  const Index = () => {
  6      return (
  7          <View style={styles.container}>
  8              <Button
  9                  title="Lichte tekst"
  10                 onPress={() => setStatusBarStyle("light")}
  11             />
  12             <Button
  13                 title="Verberg"
  14                 onPress={() => setStatusBarHidden(true, "fade")}
  15             />
  16         </View>
  17     );
  18 }
  19
  20 const styles = StyleSheet.create({
  21     container: {
  22         flex: 1,
  23         paddingTop: Constants.statusBarHeight,
  24         backgroundColor: "#1E293B",
  25     },
  26 });
  ```
- phone: app `#1E293B`, paddingTop 24, sides 16: `.rn-btn` `LICHTE TEKST`, 8 dp gap, `.rn-btn` `VERBERG`. Status bar starts with dark ink (default on a light-mode phone: unreadable on dark).
- shots:
  - 0.0-3.1: kicker `Vanuit een functie`, panel and phone in. "statusbalk" (0.72): blue `.app-mark--bar` around the bar (off 2.9).
  - 3.1-5.0: "knop" (3.16): wash on the two `<Button` blocks (rows 8-15, off 4.9); thin blue `.app-mark` around both Buttons in the phone (off 4.9).
  - 5.0-7.2: "set status bar style" (5.04): wash on `setStatusBarStyle("light")` (row 10) and on `setStatusBarStyle` in the import (row 2); touch down on `LICHTE TEKST` at 5.04, release 5.40: the bar ink → white (0.35s). Chip `setStatusBarStyle("light")` pops above the phone at 5.40 (mono 20px).
  - 7.2-end: "set status bar hidden" (7.28): wash moves to `setStatusBarHidden(true, "fade")` (row 14) and the import; touch on `VERBERG` 7.28, release 7.64: the bar fades out (opacity 0, 0.5s power1.inOut); the chip swaps to `setStatusBarHidden(true, "fade")`. Hold to the end (last frame of the clip, no summary).
