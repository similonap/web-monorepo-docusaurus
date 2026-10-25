# STORYBOARD — react-native-stylesheet

<!-- frames below are filled in by the frame builder -->

## Video direction

- **Sibling film.** Same series as `../react-native-flexbox` (TS light), built from the shared React Native brief (code surface left, phone right, APP KIT). Each frame copies, verbatim, the `<style>` block of `../react-native-flexbox/compositions/frames/03-direction.html` (TS LIGHT primitives + FLEX KIT), then the APP KIT block, then a small `STYLESHEET CLIP` block shared by every frame of this video: `.code-clip` (612px window = 18 rows, so scrolled rows never run under the title or status bar), `.app-mark` (2dp blue outline in the phone, like `.ph-mark`) and `.app-lbl` (small mono label in the phone). Script helpers `washOn`, `washOff`, `swapVal`, `fadeSwap`, `typeLine` (from `02-assen.html`) and `rowVis` (fades rows that sit outside the 18-row window).
- **Code panel** `.fx-panel` at x 80, y 150, 1290 × 730, title `app/index.tsx`, status bar `app/index.tsx · StyleSheet`. Phone `.ph-body` at x 1494, y 150. Scrolling moves `.fx-lns` and `.fx-lines` together (`y`, 0.6s power3.inOut); rows outside the window are faded to 0.
- **The code** is the course page's example (`docs/react-native/core-components/stylesheet.md`), written in the course style (4 spaces, `{StyleSheet, Text, View}` as on the page, one property per line, trailing commas, no `import React` / `export default`). It is built up over the frames: frames 2-3 show the box with `width`, `height`, `backgroundColor`; frame 4 types the three border rows; frame 5 starts without `paddingTop` and types it; frame 6 shows the inline variant and back.
- **The phone** renders the app as DOM in dp: `.rn-root` > container `.rn-view` (`padding-top: 24px` = `Constants.statusBarHeight`) > box `.rn-view` 100 × 100, `background-color: red`, then `border: 1px solid black`, `border-radius: 10px`. The red box is app content, not an error colour. Every code change lands in the phone when the typed value is complete.
- **Motion and sfx:** reveals on the spoken word (times below are seconds from the frame start = voice start), `power3.out` settles, washes on what the voice names, holds stand still, no fade-out of the frame itself. No sfx inside frames; the `sfx:` lines below are read by `build.py`.

## Frame 1 — Hook

- id: 01-hook
- duration: 11.59s
- transition_in: cut
- sfx: pop@1.84, whoosh-short@3.16, whoosh-short@4.24, pop@6.96
- voiceover: "In React Native schrijf je geen CSS. Je styling is gewoon JavaScript: een object met properties in camelCase, zoals background color en border radius."
- focal: a CSS snippet that becomes a JavaScript object, under the hero word `StyleSheet`.
- code: no code surface. A mini panel (`ts-mini`, x 80, y 470, 660 × 250, mono 26px / 40px rows). State A, title `style.css`: `.box { background-color: red; border-radius: 10px; }` (4 rows). State B, title `app/index.tsx`: `const box = { backgroundColor: "red", borderRadius: 10, };` (4 rows). Hero `StyleSheet` (Inter 700 168px) at x 80, y 196 with the blue hero bar under it.
- phone: standard position; container `paddingTop: 24`, the box 100 × 100, red, radius 10 (the example the snippet describes). Static.
- shots:
  - 0.0-1.8: "React" (0.32): kicker `React Native`; "Native" (0.56): the phone fades in (y 20 → 0).
  - 1.8-4.2: "CSS" (1.84): the mini panel with the CSS (y 16 → 0); at 2.5 the CSS dims to 40% ("geen"). "styling" (3.16): hero `StyleSheet` lands, bar wipes at 3.5.
  - 4.2-6.9: "JavaScript" (4.24): the CSS rows slide up and out, the JS object rows slide in (stagger 0.05), title crossfades to `app/index.tsx`. "object" (5.68): `ts-mark` around the object, off at 6.7.
  - 6.9-end: "camelCase" (6.96): the capitals `C` and `R` turn TS-blue with a 3px underline. "background color" (8.32): wash on `backgroundColor`; "border radius" (9.52): wash moves to `borderRadius`. Hold.

## Frame 2 — StyleSheet.create

- id: 02-create
- duration: 10.15s
- transition_in: crossfade
- sfx: whoosh-short@1.92, pop@2.56, pop@5.04, pop@7.36, pop@8.48
- voiceover: "Met style sheet punt create maak je één object met al je stijlen. Elke key is een stijl met een naam, zoals container of box."
- focal: `StyleSheet.create({...})` and its two keys.
- code (21 rows, rows 1-18 visible, scrolls to rows 4-21 at 1.92):
  ```
  1  import {StyleSheet, Text, View} from "react-native";
  2  import Constants from "expo-constants";
  3
  4  const Index = () => {
  5      return (
  6          <View style={styles.container}>
  7              <View style={styles.box}/>
  8          </View>
  9      );
  10 }
  11
  12 const styles = StyleSheet.create({
  13     container: {
  14         paddingTop: Constants.statusBarHeight,
  15     },
  16     box: {
  17         width: 100,
  18         height: 100,
  19         backgroundColor: "red",
  20     },
  21 });
  ```
  Kicker `StyleSheet.create`.
- phone: container (paddingTop 24) with the red box 100 × 100. `.app-mark` outlines for the container (full width, 124 dp high) and the box.
- shots:
  - 0.0-1.9: kicker, panel and phone in. "style sheet" (0.40): wash on `StyleSheet.create`.
  - 1.9-4.7: "maak je" (1.92): scroll 3 rows (rows 1-3 fade out, 19-21 fade in). "object" (2.56): `ts-mark` around rows 12-21; mark and wash off at 4.5-4.6.
  - 4.7-end: "key" (5.04): washes on the keys `container` and `box`. "container" (7.36): only `container` stays washed, the container outline appears in the phone. "box" (8.48): wash moves to `box`, the outline moves to the box. Hold.

## Frame 3 — De style prop

- id: 03-koppelen
- duration: 9.99s
- transition_in: crossfade
- sfx: pop@1.68, pop@6.56, pop@7.76, pop@8.6
- voiceover: "Die stijl geef je mee aan de style prop van een component. Getallen schrijf je zonder eenheid, dus geen p x achter een width of een height."
- focal: `style={styles.box}` linked to `box:`; numbers without a unit.
- code: same 21 rows as frame 2, scrolled to rows 4-21 from the start. Kicker `De style prop`. A chip `width: 100px` (`ts-chip`) sits to the right of row 17 (x 360 in the code column).
- phone: as frame 2. Dimension lines (blue, 1.5dp, label `100` Inter 600 14dp) under the box (width) and to its right (height).
- shots:
  - 0.0-1.6: kicker, panel and phone in. "stijl" (0.24): wash on the key `box`.
  - 1.6-3.5: "style prop" (1.68): blue 3px underline wipes under `style={styles.box}` on row 7 and `styles.box` gets a wash (same wash as the key: the link). "component" (2.76): `.app-mark` around the box in the phone.
  - 3.5-6.5: "Getallen" (3.52): underline, marks and washes off; washes on the two `100` values.
  - 6.5-7.7: "p x" (6.56): the chip `width: 100px` pops in; "x" (6.88): a red line-through (3px) appears and the chip text dims to `#64748B` (the wrong form).
  - 7.7-end: "width" (7.76): the width dimension appears in the phone, wash stays on `width`'s `100`. "height" (8.60): the height dimension appears, wash moves to `height`'s `100`. Hold.

## Frame 4 — Rand en hoeken

- id: 04-rand
- duration: 10.07s
- transition_in: crossfade
- sfx: typing@0.3, typing@3.2, typing@5.92, pop@7.72
- voiceover: "Border width bepaalt hoe dik de rand is, border color de kleur van de rand, en border radius hoe sterk de hoeken afgerond worden."
- focal: the three border rows, typed one by one, and the box in the phone.
- code: 21 rows at the start, 24 at the end (rows 20-22 inserted, `#f04-below` = rows 23-24 slides 34px per insert, line numbers 22-24 fade in per insert). Scrolled 6 rows (rows 7-24 visible). Kicker `Rand en hoeken`.
  ```
  20         borderWidth: 1,          <- typed 0.30
  21         borderColor: "black",    <- typed 3.20
  22         borderRadius: 10,        <- typed 5.92
  ```
- phone: the box starts without border (`border: 0px solid black`, radius 0).
- shots:
  - 0.0-3.1: kicker, panel and phone in. "Border width" (0.00): the rows below slide down at 0.22, row 20 types from 0.30 (0.035s/char); when `1` is typed the box gets its 1dp black border. "dik" (1.76): wash on `1`, off at 2.9.
  - 3.1-5.8: "border color" (3.12): row 21 types from 3.20; on completion the border colour is set to black (RN's default is black too, so the box does not change visibly). "kleur" (4.24): wash on `"black"`, off at 5.4.
  - 5.8-end: "border radius" (5.84): row 22 types from 5.92; on completion the corners round to 10 (0.35s power3.out). "hoeken" (7.72): wash on `10`. Hold.

## Frame 5 — De statusbalk

- id: 05-statusbar
- duration: 10.71s
- transition_in: crossfade
- sfx: pop@1.52, pop@3.76, typing@6.96
- voiceover: "Bovenaan het scherm staat de statusbalk. Constants punt status bar height is de hoogte ervan. Met die padding bovenaan komt je app er niet onder te staan."
- focal: the status bar in the phone; `paddingTop: Constants.statusBarHeight`.
- code: 23 rows at the start (container without `paddingTop`, border rows present), 24 after the insert; rows 1-18 visible. Row 14 `        paddingTop: Constants.statusBarHeight,` is typed at 6.96 (0.02s/char). Kicker `De statusbalk`.
- phone: the container starts with `padding-top: 0`, so the box sits under the status bar (`9:41` over the red box). `.app-mark` around the status bar (226 × 24 dp) and an `.app-lbl` `statusBarHeight` under the bar on the right.
- shots:
  - 0.0-2.8: kicker, panel and phone in. "statusbalk" (1.52): blue outline around the status bar (stays).
  - 2.8-6.4: "Constants" (2.80): wash on the row `import Constants from "expo-constants";`. "status bar height" (3.76): the label `statusBarHeight` appears under the bar. Wash off at 6.44.
  - 6.4-end: "padding" (6.88): rows 15-24 slide down (row 19 fades out of the window), row 14 types; on completion (~7.72, "komt") the container's paddingTop tweens 0 → 24 (0.5s power3.out) and the box moves under the status bar. "niet onder" (8.44): wash on `paddingTop: Constants.statusBarHeight`. Hold.

## Frame 6 — Inline styles

- id: 06-inline
- duration: 12.69s
- transition_in: crossfade
- sfx: whoosh-short@1.36, pop@4.64, whoosh-short@6.72, pop@8.48, pop@9.52, typing@9.62
- voiceover: "Je kan ook rechtstreeks een object meegeven: een inline style. Handig om snel iets te testen, maar met een style sheet blijft je JSX leesbaar en hergebruik je je stijlen."
- focal: the same box as an inline style, then back to the StyleSheet with what it gives you.
- code: two layers in the clip that share rows 1-5; only rows 6+ crossfade (out 0.2s, in 0.3s from +0.18).
  - S (StyleSheet version, 24 rows, rows 1-18 visible; row 8 is inserted at 9.52 → 25 rows):
    ```
    6          <View style={styles.container}>
    7              <View style={styles.box}/>
    8              <View style={styles.box}/>     <- typed 9.62 (reuse)
    ```
  - I (inline version, 13 rows):
    ```
    6          <View style={{paddingTop: Constants.statusBarHeight}}>
    7              <View style={{
    8                  width: 100, height: 100, backgroundColor: "red",
    9                  borderWidth: 1, borderColor: "black", borderRadius: 10,
    10             }}/>
    11         </View>
    12     );
    13 }
    ```
  Kicker `Inline styles`. Chips: `snel testen` (neutral, in I, under the code at row 15), `leesbaar` and `herbruikbaar` (`ts-chip--new`, in S, x 640 next to rows 6-7 and 8-9).
- phone: the full box (border 1 black, radius 10, paddingTop 24); a second identical box (`#f06-box2`) fades in under it when row 8 is complete.
- shots:
  - 0.0-1.3: kicker, panel and phone in with S.
  - 1.3-6.7: "object" (1.36): S → I. "inline style" (2.84): washes on the two inline objects. "snel" (4.64): chip `snel testen` pops in.
  - 6.7-9.5: "style sheet" (6.72): I → S (the chip leaves with I); wash on `StyleSheet.create` 6.9-7.92. "JSX" (7.92): washes on the two JSX rows. "leesbaar" (8.48): chip `leesbaar` pops in.
  - 9.5-end: "hergebruik" (9.52): chip `herbruikbaar` pops in; rows 9+ slide down (row 19 fades out of the window), row 8 `<View style={styles.box}/>` types from 9.62 (0.02s/char); on completion (~10.14) it is washed and the second box fades in in the phone. Hold.
