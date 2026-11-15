# STORYBOARD — react-native-hooks

## Video direction

- **Sibling film.** Same series as `../react-native-flatlist`, `../react-native-pressable` (TS light) and the other React Native clips. Every frame copies the `<style>` block of `../react-native-pressable/compositions/frames/03-count.html` verbatim (TS LIGHT + FLEX KIT + APP KIT), then frame-specific rules, and reuses its helpers (`washOn/washOff`, `swapVal`, `fadeSwap`, `typeLine`, `dpBox`, `placeOn`, `touchDown/touchUp`, `pop`, `scrollTo`, `intro`, `rowEls`, `lnEls`, `hideEls/showEls`) and its code-scrolling technique (see `../react-native-flatlist/compositions/frames/02-data.html`). Follow the "Video's" section of the repo `CLAUDE.md`.
- **Kennisclip.** No summary frame: the clip ends on the last example (frame 6).
- **Course page:** `docs/react-native/hooks/index.md` ("React Native Hooks"). The clip follows its examples in order: `useWindowDimensions` (four values), the responsive colours, the grid of tiles, `useColorScheme`, the theme. Not in the clip: the `app.json` info boxes and `Dimensions.get`.
- **Layout.** Frames 2-6: `.fx-panel` at x 80, y 150, 1290 × 730, title `app/index.tsx`, status `app/index.tsx · Hooks`; phone `.ph-body` at x 1494, y 150 (screen 316 × 650) with the app as real DOM (`.ph-app`, 1 dp = 1.4 px, 226 × 464 dp). A small chip can sit centred **above the phone** (x 1494-1840, y 82-134). Nothing below y 880. Frame 1 uses the hook layout of `../react-native-flatlist/compositions/frames/01-hook.html` (phone first centred at x −707, sliding to the standard place on the hero word).
- **Rotating the phone (frames 3 and 4).** The phone turns a quarter (rotation −90°, 0.9s power3.inOut) around its centre and scales to 0.62 so the landscape phone fits the right column (centre x ≈ 1667, y ≈ 475; nothing over the code panel, which ends at x 1370). During the turn the app content fades out (0.2s) and the landscape layout fades in (0.3s) after it, drawn upright in a landscape screen (464 × 226 dp, same 1 dp = 1.4 px before the 0.62 scale). Build it as two phone bodies (portrait and landscape) or one body with two app layers; the visible result must be one phone that turns. The status bar sits on top in both orientations.
- **Shown values.** The drawn phone is schematic, but the values on screen are those of a real phone (an iPhone): portrait `width: 390`, `height: 844`, `scale: 3`, `fontScale: 1`; landscape `width: 844`, `height: 390`.
- **Long code.** The panel shows 18 rows (24px / 34px rows, max ~84 characters per row). `.fx-code` is clipped to 612 px and rows outside the window are hidden at rest; scrolling moves `.fx-lns` and `.fx-lines` together (`y: -34 × n`, 0.6s power3.inOut). Line numbers use the `-ln` class naming (copy/paste support).
- **Code style.** As on the course page, with the series' adjustments: 4-space indent, no spaces inside `{View, Text, StyleSheet}`, no `import React` / `export default Index;`, `return (...);`. Rows longer than the panel are wrapped (noted per frame).
- **Colours.** The course uses a rainbow; red is reserved for errors in this series, so the clip uses named blues (as in the Lijsten and FlatList clips).
- **Motion.** power3.out settles, washes on the named line/value, `ts-mark` around a key line, no bounce, holds stand still, every reveal on the word that names it (times below are seconds from the frame start = voice start). Value changes in chips: old value up and out, new value in (0.25s). No sfx inside the frames (they are in `index.html`, from the `sfx:` lines below).

## Frame 1 — Hook

- id: 01-hook
- duration: 9.35s
- transition_in: cut
- sfx: pop@0.48, whoosh-short@3.56, pop@5.56, pop@7.64
- voiceover: "Alle hooks uit React werken ook in React Native. Daarnaast heeft React Native een paar eigen hooks, met informatie over het toestel."
- focal: the hero word `Hooks`; the two React Native hooks in blue next to the familiar React hooks.
- code: no code panel.
- phone: an app with four lines of Text (16 dp, padding 16 dp, container paddingTop 24): `Breedte: 390`, `Hoogte: 844`, `Modus: light`.
- layout: hero `Hooks` (Inter 700 168px, left 80, top 260) with the blue hero bar; kicker `React Native`. At top 500 a row of grey chips (`#F1F5F9`, hairline, JetBrains Mono 28px): `useState` `useEffect` `useRef` `useContext`. At top 600 a label `React Native` (Inter 600 uppercase 20px, `#475569`) and at top 640 two blue chips (blue tint `#EAF2FB`, border `#3178C6`, text `#235A97`): `useWindowDimensions` `useColorScheme`.
- shots:
  - 0.1: phone fades in centred (x −707), app visible but dimmed lines hidden. 0.48 "hooks": the hero is not there yet; kicker `React Native` in at 0.48.
  - 0.88 "React": the four grey chips pop (stagger 0.1) at the left, top 500 (they sit there before the hero lands; that's fine, the hero lands above them at 3.56).
  - 3.56 "Daarnaast": phone slides to the standard place (0.8s power3.inOut); hero `Hooks` lands; blue hero bar wipes in at 3.9.
  - 5.56 "eigen hooks": label and the two blue chips pop (stagger 0.15).
  - 6.64 "informatie": the three Text lines in the phone appear (stagger 0.12).
  - 7.64 "toestel": a thin blue `.ph-mark` outline around the whole phone screen. Hold.

## Frame 2 — useWindowDimensions

- id: 02-dimensions
- duration: 10.71s
- transition_in: blur-crossfade
- sfx: typing@0.1, pop@4.4, pop@5.2, pop@6.16, pop@7.6
- voiceover: "Use window dimensions geeft de afmetingen van het venster terug: de breedte, de hoogte, de pixeldichtheid en de tekstgrootte die de gebruiker koos."
- focal: `const {width, height, scale, fontScale} = useWindowDimensions();` and the four values in the phone.
- code (20 rows; window 1-18 the whole frame):
  ```
  1  import {View, Text, StyleSheet, useWindowDimensions} from "react-native";
  2  import Constants from "expo-constants";
  3
  4  const Index = () => {
  5      const {width, height, scale, fontScale} = useWindowDimensions();
  6
  7      return (
  8          <View style={styles.container}>
  9              <Text style={styles.text}>Breedte: {width}</Text>
  10             <Text style={styles.text}>Hoogte: {height}</Text>
  11             <Text style={styles.text}>Scale: {scale}</Text>
  12             <Text style={styles.text}>Font scale: {fontScale}</Text>
  13         </View>
  14     );
  15 }
  16
  17 const styles = StyleSheet.create({
  18     container: {flex: 1, padding: 16, paddingTop: Constants.statusBarHeight},
  19     text: {fontSize: 20},
  20 });
  ```
  Row 5 is absent at the start (row 4 directly followed by the empty row 6) and types on at 0.1-1.6.
- phone: container `padding: 16`, `paddingTop: 24` dp; four Texts of 20 dp: `Breedte: 390`, `Hoogte: 844`, `Scale: 3`, `Font scale: 1`. The value part of each line appears on its word (the labels are there from the start with an empty value).
- shots:
  - 0.0: kicker `useWindowDimensions`, panel and phone in. Row 5 opens and types on (0.1-1.6).
  - 1.68 "geeft": wash on `useWindowDimensions()` in row 5. 3.04 "venster": thin `.ph-mark` around the whole screen of the phone.
  - 4.40 "breedte": wash on `width` (row 5) and row 9; `390` appears in the phone. 5.20 "hoogte": same for `height`, row 10, `844`.
  - 6.16 "pixeldichtheid": same for `scale`, row 11, `3`. 7.60 "tekstgrootte": same for `fontScale`, row 12, `1`. Washes stay on row 5 and move between rows 9-12.
  - 8.64 "gebruiker": chip above the phone `fontScale: 1 = standaard` pops. Hold.

## Frame 3 — Responsive layout

- id: 03-responsive
- duration: 10.71s
- transition_in: crossfade
- sfx: whoosh-short@0.0, pop@1.8, pop@6.72, whoosh-short@7.76
- voiceover: "Draai je de telefoon, dan rendert je component opnieuw, net zoals bij use state. Is het scherm breder dan zeshonderd, dan zet je de kleuren naast elkaar."
- focal: `const isWide = width > 600;` and `flexDirection: isWide ? "row" : "column"`; the phone that turns.
- code (21 rows; window 1-18 the whole frame):
  ```
  1  import {View, Text, StyleSheet, useWindowDimensions} from "react-native";
  2  import Constants from "expo-constants";
  3
  4  const colors = ["powderblue", "lightblue", "skyblue", "deepskyblue", "steelblue"];
  5
  6  const Index = () => {
  7      const {width} = useWindowDimensions();
  8      const isWide = width > 600;
  9
  10     return (
  11         <View style={styles.container}>
  12             <Text style={styles.title}>{isWide ? "Breed scherm" : "Smal scherm"}</Text>
  13             <View style={[styles.colors,
  14                 {flexDirection: isWide ? "row" : "column"}]}>
  15                 {colors.map(color => (
  16                     <View key={color} style={{flex: 1, backgroundColor: color}}/>
  17                 ))}
  18             </View>
  19         </View>
  20     );
  21 }
  ```
  (Row 13-14: the course writes this on one row; wrapped because it does not fit.) Styles (never shown): `container: {flex: 1, paddingTop: Constants.statusBarHeight}`, `title: {fontSize: 20, padding: 16}`, `colors: {flex: 1}`.
- phone: portrait: title `Smal scherm` (20 dp, padding 16) and the five colours as horizontal bands under each other filling the rest. Landscape (after the turn): title `Breed scherm` and the five colours as vertical columns next to each other. A render tag `render #2` (mono pill, as in the series) next to the chip.
- chip above the phone: `width: 390` (pops at 1.8); after the turn `width: 844`.
- shots:
  - 0.0-0.6: kicker `Responsive layout`, panel and phone in (portrait, `Smal scherm`).
  - 0.00 "Draai": the phone turns (0.3-1.2, see Video direction) to landscape; the app shows `Breed scherm` with columns after the turn. 1.80 "rendert": chip `width: 390` → `844` swaps; render tag `render #2` pops beside the chip (above the phone, the chip and tag side by side).
  - 2.40 "component opnieuw": wash on row 7 `const {width} = useWindowDimensions();`. 4.32 "use state": wash stays; render tag pulses once (scale 1 → 1.06 → 1, 0.3s).
  - 5.76 "scherm breder": wash moves to row 8. 6.72 "zeshonderd": `ts-mark` around `width > 600` in row 8.
  - 7.76 "zet": wash on row 14 (`flexDirection: isWide ? "row" : "column"`) and on `isWide ?` in row 12. 8.80 "naast elkaar": a thin `.ph-mark` around the five columns in the landscape screen. Hold.

## Frame 4 — Rekenen met de breedte

- id: 04-tegels
- duration: 9.59s
- transition_in: crossfade
- sfx: pop@2.8, whoosh-short@4.24, pop@6.24
- voiceover: "Je kan ook rekenen met de breedte. Het aantal kolommen hangt af van het scherm, en een tegel is de breedte gedeeld door het aantal kolommen."
- focal: `const columns = width > 600 ? 4 : 2;` and `const tileSize = width / columns;`; the grid that goes from 2 to 4 columns.
- code (27 rows; window 1-18 at the start, scrolls to 8-25 at 6.0):
  ```
  1  import {View, ScrollView, StyleSheet, useWindowDimensions} from "react-native";
  2  import Constants from "expo-constants";
  3
  4  const colors = ["powderblue", "lightblue", "skyblue", "lightskyblue", "deepskyblue",
  5      "dodgerblue", "steelblue", "cadetblue", "lightsteelblue", "cornflowerblue",
  6      "royalblue", "slateblue"];
  7
  8  const Index = () => {
  9      const {width} = useWindowDimensions();
  10     const columns = width > 600 ? 4 : 2;
  11     const tileSize = width / columns;
  12
  13     return (
  14         <View style={styles.container}>
  15             <ScrollView contentContainerStyle={styles.grid}>
  16                 {colors.map(color => (
  17                     <View key={color} style={{
  18                         width: tileSize,
  19                         height: tileSize,
  20                         backgroundColor: color,
  21                     }}/>
  22                 ))}
  23             </ScrollView>
  24         </View>
  25     );
  26 }
  ```
  (Rows 17-21: the course writes the style on one row; wrapped because it does not fit.) Styles (never shown): `container: {flex: 1, paddingTop: Constants.statusBarHeight}`, `grid: {flexDirection: "row", flexWrap: "wrap"}`.
- phone: starts in **portrait** (the frame begins after a crossfade; the phone is upright again): a grid of square tiles, 2 columns (113 dp each), the twelve blues in order, cut off at the bottom of the screen. At 4.24 it turns to landscape (as in frame 3) and shows 4 columns (116 dp each, cut off at the bottom).
- chips above the phone: `columns: 2` and `tileSize: 195` side by side (pop at 2.8 and 6.24); after the turn they become `columns: 4` (at 4.6) and `tileSize: 211` (at 7.36).
- shots:
  - 0.0-0.3: kicker `Rekenen met de breedte`, panel and phone in.
  - 1.44 "breedte": wash on row 9. 2.80 "kolommen": wash on row 10; chip `columns: 2` pops.
  - 4.24 "scherm": the phone turns to landscape (4.24-5.14); chip `columns: 2` → `4` at 4.6; `ts-mark` around `width > 600 ? 4 : 2`.
  - 5.32 "tegel": wash moves to row 11. 6.00: code scrolls to window 8-25 (0.6s). 6.24 "breedte gedeeld door": chip `tileSize: 211` pops (the landscape value: 844 / 4); wash on rows 18-19 too.
  - 7.68 "kolommen": a thin `.ph-mark` around the first tile in the phone. Hold.
  (The chip `tileSize` shows the landscape value directly, because the phone is already turned when it is named.)

## Frame 5 — useColorScheme

- id: 05-colorscheme
- duration: 9.99s
- transition_in: push-slide
- sfx: typing@0.1, click-soft@5.28, pop@5.5
- voiceover: "Use color scheme vertelt of de gebruiker light of dark mode gekozen heeft. Verandert die instelling, dan rendert je component meteen opnieuw."
- focal: `const colorScheme = useColorScheme();` and the text `Je toestel staat in light mode` → `dark mode`.
- code (18 rows; window 1-18):
  ```
  1  import {View, Text, StyleSheet, useColorScheme} from "react-native";
  2  import Constants from "expo-constants";
  3
  4  const Index = () => {
  5      const colorScheme = useColorScheme();
  6
  7      return (
  8          <View style={styles.container}>
  9              <Text style={styles.text}>Je toestel staat in {colorScheme} mode</Text>
  10         </View>
  11     );
  12 }
  13
  14 const styles = StyleSheet.create({
  15     container: {flex: 1, justifyContent: "center", alignItems: "center",
  16         paddingTop: Constants.statusBarHeight},
  17     text: {fontSize: 20},
  18 });
  ```
  Row 5 is absent at the start and types on (0.1-1.2).
- phone: portrait, centred Text (20 dp, may wrap to two lines): `Je toestel staat in light mode`. After the switch: `Je toestel staat in dark mode`. The app background stays white and the text black (the app has no theme yet, that is frame 6); only the system status bar turns dark (`#000` strip with white icons) to show the device is in dark mode.
- above the phone: a device toggle chip: `toestel` label + a small switch (track 44 × 24 px, knob 18 px; off: track `#E2E8F0`; on: track `#1E293B`, knob white) + mono `light` → `dark`.
- shots:
  - 0.0: kicker `useColorScheme`, panel and phone in. Row 5 types on (0.1-1.2). The toggle chip is visible from 0.3 (`light`).
  - 1.28 "vertelt": wash on `useColorScheme()` in row 5. 2.72 "light": wash on `{colorScheme}` in row 9; wash on `light` in the phone text (a soft blue wash behind the word). 3.44 "dark": the chip's `dark` label is not yet changed; a ghost hint is not needed. Hold until 5.28.
  - 5.28 "Verandert": the toggle flips (knob slides 0.25s, click-soft); chip value `light` → `dark`; status bar of the phone turns dark.
  - 6.88 "rendert": render tag `render #2` pops next to the toggle chip; the phone text value `light` → `dark` swaps (0.25s) with the wash. 7.92 "meteen": `ts-mark` around row 9. Hold.

## Frame 6 — Een thema

- id: 06-thema
- duration: 9.89s
- transition_in: crossfade
- sfx: whoosh-short@4.56, click-soft@6.08, pop@6.3
- voiceover: "Handiger is een thema, met de kleuren voor beide modi op één plaats. Je component kiest het juiste thema en gebruikt de kleuren daaruit."
- focal: `const theme = colorScheme === "dark" ? darkTheme : lightTheme;`; the card in the phone that follows the mode.
- code (31 rows; window 1-18 at the start, scrolls to 13-30 at 4.56):
  ```
  1  interface Theme {
  2      background: string;
  3      card: string;
  4      text: string;
  5  }
  6
  7  const lightTheme: Theme = {
  8      background: "#ffffff",
  9      card: "#eeeeee",
  10     text: "#000000",
  11 };
  12
  13 const darkTheme: Theme = {
  14     background: "#121212",
  15     card: "#2c2c2c",
  16     text: "#ffffff",
  17 };
  18
  19 const Index = () => {
  20     const colorScheme = useColorScheme();
  21     const theme = colorScheme === "dark" ? darkTheme : lightTheme;
  22
  23     return (
  24         <View style={[styles.container, {backgroundColor: theme.background}]}>
  25             <View style={[styles.card, {backgroundColor: theme.card}]}>
  26                 <Text style={[styles.title, {color: theme.text}]}>Hallo!</Text>
  27                 <Text style={{color: theme.text}}>Deze kaart past zich aan
  28                     aan de modus van je toestel.</Text>
  29             </View>
  30         </View>
  31     );
  32 }
  ```
  (The imports are left out of the panel; the course page has them. Row 27-28: wrapped Text content as JSX allows.) Styles (never shown): `container: {flex: 1, padding: 16, paddingTop: Constants.statusBarHeight}`, `card: {padding: 16, borderRadius: 10, gap: 8}`, `title: {fontSize: 24, fontWeight: "bold"}`. Show rows 1-32 with the code kit; the first row number is `1`.
- phone: portrait, light: background `#ffffff`, card `#eeeeee` (radius 10 dp, padding 16, gap 8) with `Hallo!` (24 dp bold, `#000000`) and `Deze kaart past zich aan aan de modus van je toestel.` (14 dp). Dark: background `#121212`, card `#2c2c2c`, texts `#ffffff`, status bar dark. The change is a 0.4s colour tween.
- above the phone: the device toggle chip of frame 5, starting in `light`.
- shots:
  - 0.0-0.3: kicker `Een thema`, panel and phone in (light).
  - 0.88 "thema": wash on rows 7-11 and 13-17. 1.84 "kleuren": wash on the three hex values of `lightTheme` (rows 8-10) and of `darkTheme` (rows 14-16). 2.80 "beide modi": small mono tags `light` and `dark` (blue tint pills) appear at the right end of rows 7 and 13.
  - 4.56 "component": code scrolls to window 13-30 (0.6s); washes off. 5.24 "kiest": wash on row 21. 6.08 "juiste thema": toggle flips to `dark` (click-soft); the phone tweens to the dark theme (0.4s); `ts-mark` around `darkTheme` in row 21.
  - 6.72 "gebruikt": wash on `theme.background`, `theme.card` and the two `theme.text` (rows 24-27). Hold.
