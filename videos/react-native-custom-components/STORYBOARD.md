# STORYBOARD — react-native-custom-components

## Video direction

- **Sibling film.** Same series as `../react-native-flatlist`, `../react-native-pressable` (TS light) and the other React Native clips. Every frame copies the `<style>` block of `../react-native-pressable/compositions/frames/03-count.html` verbatim (TS LIGHT + FLEX KIT + APP KIT), then frame-specific rules, and reuses its helpers (`washOn/washOff`, `swapVal`, `fadeSwap`, `typeLine`, `dpBox`, `placeOn`, `touchDown/touchUp`, `pop`, `scrollTo`, `intro`, `rowEls`, `lnEls`, `hideEls/showEls`) and its code-scrolling technique (see `../react-native-flatlist/compositions/frames/02-data.html`). Follow the "Video's" section of the repo `CLAUDE.md`.
- **Kennisclip.** No summary frame: the clip ends on the last example (frame 6).
- **Course page:** `docs/react-native/custom-components/index.md` ("Custom Components"). The clip follows its examples in order: props (`BoxProps` with `color` and `size`), a style object as prop (`StyleProp<ViewStyle>`), a default value for an optional prop, the style array.
- **Layout.** Frames 2-6: `.fx-panel` at x 80, y 150, 1290 × 730, title `app/index.tsx`, status `app/index.tsx · Custom Components`; phone `.ph-body` at x 1494, y 150 (screen 316 × 650) with the app as real DOM (`.ph-app`, 1 dp = 1.4 px, 226 × 464 dp). A small chip can sit centred **above the phone** (x 1494-1840, y 82-134). Nothing below y 880. Frame 1 uses the hook layout of `../react-native-flatlist/compositions/frames/01-hook.html` (phone first centred at x −707, sliding to the standard place on the hero word). Frame 6 has a shorter code panel and a style diagram under it (see frame 6).
- **Long code.** The panel shows 18 rows (24px / 34px rows, max ~84 characters per row). `.fx-code` is clipped to 612 px and rows outside the window are hidden at rest; scrolling moves `.fx-lns` and `.fx-lines` together (`y: -34 × n`, 0.6s power3.inOut). Line numbers use the `-ln` class naming (copy/paste support).
- **Code style.** As on the course page, with the series' adjustments: 4-space indent, no spaces inside `{View, StyleSheet}`, no `import React` / `export default Index;`, `return (...);`, interface members end with `;`, StyleSheet one property per line with trailing comma. The course forgets to import `StyleProp` and `ViewStyle`; the video imports them.
- **The app.** `styles.container = {flexDirection: "column", flex: 1, paddingTop: Constants.statusBarHeight}` (padding-top 24 dp). The `styles` block (rows after `Index`) is never shown. A Box is a plain View: 40 × 40 dp boxes stacked at the top left of the app, no gap.
- **Colours.** The course uses red / green / blue. Red is reserved for errors in this series, so the clip uses `steelblue` (#4682B4), `skyblue` (#87CEEB) and `powderblue` (#B0E0E6) in that order (same as the Lijsten and FlatList clips).
- **Motion.** power3.out settles, washes on the named line/value, `ts-mark` around a key line, no bounce, holds stand still, every reveal on the word that names it (times below are seconds from the frame start = voice start). No sfx inside the frames (they are in `index.html`, from the `sfx:` lines below).

## Frame 1 — Hook

- id: 01-hook
- duration: 9.11s
- transition_in: cut
- sfx: pop@1.2, whoosh-short@3.48, pop@5.92
- voiceover: "Net zoals in React maak je in React Native je eigen componenten. Zo splits je je app op in kleine stukjes die je kan hergebruiken."
- focal: three identical boxes in the phone built from one component; the hero word `Componenten`.
- code: no code panel.
- phone: container paddingTop 24; three Boxes of 40 dp (steelblue, skyblue, powderblue) under each other.
- layout: hero `Componenten` (Inter 700 168px, left 80, top 300) with the blue hero bar; kicker `React Native`; statement `Kleine stukjes die je kan hergebruiken` (Inter 500 48px, left 80, top 540); at top 660 three mono chips `<Box/>` next to each other (gap 16).
- shots:
  - 0.1: phone fades in centred (x −707), empty app. 0.64 "React": kicker `React Native` in.
  - 1.20 "maak": the three boxes appear in the app (stagger 0.12, y 8 → 0).
  - 3.48 "componenten": phone slides to the standard place (0.8s power3.inOut); hero `Componenten` lands; the blue hero bar wipes in at 3.8.
  - 4.48 "splits": a thin blue `.ph-mark` outline pops around each box in turn (stagger 0.15), and stays.
  - 5.92 "kleine stukjes": the statement fades in.
  - 7.28 "hergebruiken": the three `<Box/>` chips pop (stagger 0.12); each lines up with the box marks (no connector lines). Hold.

## Frame 2 — Props

- id: 02-props
- duration: 9.83s
- transition_in: blur-crossfade
- sfx: typing@0.5, pop@3.36, whoosh-short@5.8, pop@7.76
- voiceover: "Met props geef je informatie door aan een component. Box krijgt een kleur en een grootte, en die beschrijf je in de interface Box Props."
- focal: `<Box size={40} color="steelblue"/>` and the matching `({color, size}: BoxProps)`.
- code (23 rows; window 6-23 at the start, scrolls to 1-18 at 5.8):
  ```
  1  import {View, StyleSheet} from "react-native";
  2  import Constants from "expo-constants";
  3
  4  interface BoxProps {
  5      color: string;
  6      size: number;
  7  }
  8
  9  const Box = ({color, size}: BoxProps) => {
  10     return (
  11         <View style={{backgroundColor: color, width: size, height: size}}/>
  12     );
  13 }
  14
  15 const Index = () => {
  16     return (
  17         <View style={styles.container}>
  18             <Box size={40} color="steelblue"/>
  19             <Box size={40} color="skyblue"/>
  20             <Box size={40} color="powderblue"/>
  21         </View>
  22     );
  23 }
  ```
  Rows 18-20 are typed in this frame (absent at the start; row 17 directly followed by row 21).
- phone: the app of frame 1 (three boxes), empty at the start; each box appears when its row is fully typed.
- shots:
  - 0.0-0.4: kicker `Props`, panel and phone in.
  - 0.44 "props": rows 18-20 open (slide down 0.35s) and are typed one after the other (0.5-2.9, ~0.8s each); each box appears in the phone at the end of its row.
  - 3.36 "Box": wash on `<Box` in rows 18-20. 4.16 "kleur": wash moves to the three `color="…"`; 4.96 "grootte": wash moves to the three `size={40}`; a chip above the phone `size: 40 · color: "steelblue"` pops at 4.96.
  - 5.80 "beschrijf": code scrolls to window 1-18 (0.6s); wash on row 9 `({color, size}: BoxProps)` and on `color` / `size` in row 11.
  - 7.20 "interface": wash moves to rows 4-7. 7.76 "Box Props": `ts-mark` around rows 4-7. Hold.

## Frame 3 — Styles als prop

- id: 03-style-prop
- duration: 9.35s
- transition_in: crossfade
- sfx: typing@0.2, pop@4.08, whoosh-short@6.4
- voiceover: "Je kan zelfs een volledig style object meegeven. Het type is Style Prop van View Style, en Box zet het gewoon op zijn View."
- focal: `boxStyle={{backgroundColor: "steelblue", width: 40, height: 40}}` and `boxStyle: StyleProp<ViewStyle>`.
- code (22 rows; window 5-22 at the start, scrolls to 1-18 at 3.2):
  ```
  1  import {View, StyleSheet, StyleProp, ViewStyle} from "react-native";
  2  import Constants from "expo-constants";
  3
  4  interface BoxProps {
  5      boxStyle: StyleProp<ViewStyle>;
  6  }
  7
  8  const Box = ({boxStyle}: BoxProps) => {
  9      return (
  10         <View style={boxStyle}/>
  11     );
  12 }
  13
  14 const Index = () => {
  15     return (
  16         <View style={styles.container}>
  17             <Box boxStyle={{backgroundColor: "steelblue", width: 40, height: 40}}/>
  18             <Box boxStyle={{backgroundColor: "skyblue", width: 40, height: 40}}/>
  19             <Box boxStyle={{backgroundColor: "powderblue", width: 40, height: 40}}/>
  20         </View>
  21     );
  22 }
  ```
  Rows 17-19 are already there at the start, but only up to `<Box boxStyle={{` … the rest of each row is typed on (0.2-2.2, the three rows together, one caret per row) so the object appears on "style object". (Row 19 is 84 characters: check that it fits; if not, use 23px for this panel.)
- phone: the three boxes as in frame 2 (they stay; the result is identical).
- shots:
  - 0.0-0.2: kicker `Style als prop`, panel and phone in.
  - 0.2-2.2: the three style objects type on. 1.44 "style object": wash on the three `{{…}}`.
  - 3.20 "type": code scrolls to window 1-18 (0.6s). 4.08 "Style Prop": wash on row 5 `StyleProp<ViewStyle>`; 4.48: wash also on `StyleProp, ViewStyle` in row 1. Chip above the phone `StyleProp<ViewStyle>` pops at 4.08.
  - 6.40 "Box zet": wash moves to row 8 `({boxStyle}: BoxProps)`. 7.84 "View": wash on row 10 `style={boxStyle}`, `ts-mark` around row 10; the three boxes get a thin `.ph-mark` (stagger 0.1). Hold.

## Frame 4 — Default styles

- id: 04-default
- duration: 9.67s
- transition_in: crossfade
- sfx: key-press@0.8, typing@3.0, whoosh-short@5.36, pop@6.96
- voiceover: "Maak je de prop optioneel met een vraagteken, dan kan je hem een standaardwaarde geven. Zonder props krijgt elke Box die standaard style."
- focal: the `?` in `boxStyle?` and the default value; three `<Box/>` without props.
- code (final, 24 rows; window 1-18 at the start, scrolls to 7-24 at 5.36). Starts as frame 3's code window 1-18 with row 5 `boxStyle: StyleProp<ViewStyle>;` and row 8 `const Box = ({boxStyle}: BoxProps) => {`.
  ```
  1  import {View, StyleSheet, StyleProp, ViewStyle} from "react-native";
  2  import Constants from "expo-constants";
  3
  4  interface BoxProps {
  5      boxStyle?: StyleProp<ViewStyle>;
  6  }
  7
  8  const Box = ({
  9      boxStyle = {backgroundColor: "steelblue", width: 40, height: 40}
  10 }: BoxProps) => {
  11     return (
  12         <View style={boxStyle}/>
  13     );
  14 }
  15
  16 const Index = () => {
  17     return (
  18         <View style={styles.container}>
  19             <Box/>
  20             <Box/>
  21             <Box/>
  22         </View>
  23     );
  24 }
  ```
  The `?` is typed into row 5 at 0.8 (blue box around it). At 3.0 row 8 `const Box = ({boxStyle}: BoxProps) => {` turns into rows 8-10: rows below slide down 68 px (0.35s), row 8 becomes `const Box = ({`, row 10 `}: BoxProps) => {` and row 9 types on (3.0-4.4). The usages are already `<Box/>` (rows 19-21; not visible until the scroll).
- phone: three steelblue boxes (all identical). At the start the phone shows the three boxes of frame 3; at 6.96 they cross-fade (0.3s) to three steelblue boxes.
- shots:
  - 0.0-0.3: kicker `Default styles`, panel and phone in.
  - 0.80 "optioneel": the `?` types into row 5; a thin blue rounded box around `?` (stays until 2.9). 1.80 "vraagteken": wash on `boxStyle?`.
  - 2.88 "standaardwaarde": row 8 splits; row 9 types on (3.0-4.4); wash on row 9 at 4.4.
  - 5.36 "Zonder props": code scrolls to window 7-24 (0.6s); wash on rows 19-21 (`<Box/>`).
  - 6.96 "Box": the phone boxes cross-fade to three steelblue boxes; 7.44 "standaard style": wash back on row 9 (rows 19-21 keep theirs); `.ph-mark` around the three boxes. Hold.

## Frame 5 — Style array

- id: 05-style-array
- duration: 9.51s
- transition_in: push-slide
- sfx: typing@1.2, pop@4.4, pop@6.64
- voiceover: "Iets wat enkel in React Native kan, is een array van styles. De standaard style staat eerst, en de style uit de prop komt erna."
- focal: `style={[DefaultBoxStyle.box, boxStyle]}`.
- code (30 rows; window 1-18 the whole frame):
  ```
  1  import {View, StyleSheet, StyleProp, ViewStyle} from "react-native";
  2  import Constants from "expo-constants";
  3
  4  interface BoxProps {
  5      boxStyle?: StyleProp<ViewStyle>;
  6  }
  7
  8  const DefaultBoxStyle = StyleSheet.create({
  9      box: {
  10         backgroundColor: "steelblue",
  11         width: 40,
  12         height: 40,
  13     },
  14 });
  15
  16 const Box = ({boxStyle}: BoxProps) => {
  17     return (
  18         <View style={[DefaultBoxStyle.box, boxStyle]}/>
  19     );
  20 }
  21
  22 const Index = () => {
  23     return (
  24         <View style={styles.container}>
  25             <Box/>
  26             <Box boxStyle={{backgroundColor: "skyblue"}}/>
  27             <Box boxStyle={{backgroundColor: "powderblue"}}/>
  28         </View>
  29     );
  30 }
  ```
  Row 18 starts as `<View style={}/>` and `[DefaultBoxStyle.box, boxStyle]` is typed into it (1.2-2.6).
- phone: the three steelblue boxes of frame 4 (unchanged in this frame).
- shots:
  - 0.0-0.6: kicker `Style array`, panel and phone in.
  - 1.12 "React Native": the array types into row 18. 2.68 "array": wash on `[ … ]` in row 18; a chip above the phone `style={[ ... ]}` pops at 2.68.
  - 4.40 "standaard style": wash on `DefaultBoxStyle.box` in row 18 and on rows 8-14; a small mono index tag `1` (blue tint pill) appears above `DefaultBoxStyle.box`.
  - 6.64 "style uit de prop": wash moves to `boxStyle` in row 18 and to row 16 `({boxStyle}: BoxProps)`; index tag `2` above `boxStyle` in row 18. Hold.

## Frame 6 — De laatste wint

- id: 06-laatste-wint
- duration: 10.29s
- transition_in: crossfade
- sfx: pop@1.92, whoosh-short@4.08, pop@7.92
- voiceover: "De laatste style in de array heeft voorrang. Geef je enkel een andere achtergrondkleur mee, dan blijven de breedte en de hoogte gewoon behouden."
- focal: the style diagram: `DefaultBoxStyle.box` + `boxStyle` = the final style; the boxes in the phone that turn skyblue / powderblue.
- layout: a **short code panel** (x 80, y 150, 1290 × 400; shows 9 rows: window 18-26 of frame 5's code, i.e. rows 18-26; row 18 is the style array, rows 25-26 the first two usages). Under it, y 590-860, the **style diagram**: three cards in a row (each `#F1F5F9`, hairline, radius 12, ~370 wide, mono 24px, label on top Inter 600 uppercase 18px `#475569`), joined by a mono `+` and `=` (40px, `#94A3B8`):
  - card 1 label `DefaultBoxStyle.box`: `backgroundColor: "steelblue"` / `width: 40` / `height: 40`
  - card 2 label `boxStyle`: `backgroundColor: "skyblue"`
  - card 3 label `resultaat`: `backgroundColor: "skyblue"` / `width: 40` / `height: 40`
- phone: three boxes. At the start all steelblue (frame 5); at 4.08 box 2 becomes skyblue and box 3 powderblue (cross-fade 0.3s).
- shots:
  - 0.0-0.3: kicker `De laatste wint`, short panel and phone in; the diagram cards are not there yet.
  - 0.64 "laatste style": wash on `boxStyle` in row 18. 1.92 "voorrang": cards 1 and 2 pop (stagger 0.15) with the `+`; index tags `1` and `2` (as in frame 5) above the cards.
  - 3.76 "andere": wash on row 26 `boxStyle={{backgroundColor: "skyblue"}}`. 4.08 "achtergrondkleur": box 2 and 3 in the phone change colour; in card 1 the `backgroundColor` line is struck through and dimmed to 35%; card 3 pops with only `backgroundColor: "skyblue"` (blue wash on it).
  - 6.08 "breedte": `width: 40` slides from card 1 into card 3 (0.4s). 6.96 "hoogte": `height: 40` does the same.
  - 7.92 "behouden": `ts-mark` around card 3; `.ph-mark` around box 2 in the phone. Hold.
