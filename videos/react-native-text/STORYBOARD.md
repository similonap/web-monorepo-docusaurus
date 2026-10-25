# STORYBOARD — react-native-text

## Video direction

- **Sibling film** of `../react-native-flexbox` (TS light, code left + phone right). The rules for this series of React Native core component clips are in the lead's brief (`BRIEF-AGENTS.md`: APP KIT, code style, motion, sfx); the house style is `CLAUDE.md` → "Video's". Course page: `docs/react-native/core-components/text.md`; the clip follows its examples and order.
- **Every frame** copies verbatim the `<style>` of `../react-native-flexbox/compositions/frames/03-direction.html` (TS LIGHT + FLEX KIT) plus the APP KIT block, and the helpers `washOn`, `washOff`, `swapVal`, `fadeSwap`. `typeLine` is adapted: the characters are pre-rendered as `.tc` spans in the row (so a typed value can sit inside a `.fx-val` wrapper), the caret steps per character as in the flexbox clip.
- **Code surface** `.fx-panel` at (80, 150), 1290 × 730, title `app/index.tsx`, status bar `app/index.tsx · Text`. Course style: `import {StyleSheet, Text, View} from "react-native";`, `import Constants from "expo-constants";`, arrow component `Index`, `styles.container` = `flex: 1` + `paddingTop: Constants.statusBarHeight`, one style property per line with a trailing comma, 4-space indent. No `import React` / `export default`.
- **18 rows max.** `.fx-code` gets `.fx-clip` (height 612, overflow hidden) so no row ever shows under the status bar. When the code grows past 18 rows, `.fx-lns` and `.fx-lines` scroll together (`y`, 0.6s power3.inOut) and the rows that leave the view fade out; rows below the view stay hidden until the scroll brings them in.
- **Inserted rows** use the flexbox technique: the rows after the insertion point sit in `#fNN-below`, which starts translated up and slides down one row (0.35s power3.out) right before a row is typed; its line number fades in.
- **Phone** `.ph-body` at (1494, 150), screen 316 × 650, the app as DOM in dp (`.ph-app`, scale 1.4). The container View is `flex: 1; padding-top: 24px` (= `Constants.statusBarHeight`). Text is RN default: black, 14 dp, Inter. The phone follows every code change at the moment the typed value is complete (fast refresh). Pointing at a Text in the phone: a 2 dp blue underline (`.tu`), or a blue outline box (`.tm`) where the text does not touch the screen edge (hook).
- **Red** (`#D14343`) only for: the LogBox-style error sheet + the thin red mark on `Hello World` in frame 2, and the thin red mark on `style={styles.blue}` of the View in frame 5. Never at the same time as a blue key moment.
- **Colours in the examples:** frame 3 uses `color: "steelblue"` instead of the course's `"red"` (red is reserved for errors in this series). Frames 4 and 5 use `"blue"` (as in the course's nesting example; frame 5 replaces the course's `"red"` for the same reason).
- Reveals land on the spoken word (times = seconds from the frame start = voice start). The frame itself never fades out; the root does the transitions. No sfx inside frames.

## Frame 1 — Hook

- id: 01-hook
- duration: 8.71s
- transition_in: cut
- sfx: pop@0.48, whoosh-short@3.12, pop@5.92, pop@6.48
- voiceover: "Wil je tekst tonen in React Native, dan gebruik je de Text component. Hij is te vergelijken met een p of een span op het web."
- focal: a small screen of texts in the phone; then the hero word `Text` and the web comparison.
- code: none (hook, like the flexbox hook).
- layout: phone starts centred (x offset −707) and slides to the standard position at 3.12. Left after the slide: hero `Text` (Inter 700 168px) at (80, 300) with the blue hero bar under it; statement `Te vergelijken met` (Inter 500 48px) at top 520; at top 620 a row of chips `<p>`, `<span>` and the words `op het web` (Inter 500 36px, `#475569`).
- phone: container `flex: 1, paddingTop: 24, paddingHorizontal: 16` with three Texts: `Welkom` (28 dp bold), a paragraph (16 dp, line height 23), `3 minuten geleden` (14 dp, `#64748B`).
- shots:
  - 0.0-3.1: the centred phone fades in at 0.2 (y 20 → 0). "tekst" (0.48): `Welkom` rises in; "tonen" (0.84): the paragraph; 1.12: the time label. "React Native" (1.36): kicker `React Native`.
  - 3.1-4.8: "Text" (3.12): phone slides right (0.8s power3.inOut), hero lands (y 16 → 0); bar wipes at 3.48. "component" (3.44): each Text in the phone gets a blue outline (stagger 0.12 from 3.6): every piece of text is a Text.
  - 4.8-end: "vergelijken" (4.88): statement; "p" (5.92): chip `<p>`; "span" (6.48): chip `<span>`; "web" (7.32): `op het web`. Hold.

## Frame 2 — Alle tekst in een Text

- id: 02-fout
- duration: 10.63s
- transition_in: crossfade
- sfx: typing@2.88, pop@5.44, pop@6.56
- voiceover: "Alle tekst moet in een Text staan. Zet je tekst rechtstreeks in een View, dan krijg je een foutmelding: text strings must be rendered within a Text component."
- focal: tekst straight inside a View, and the error that follows.
- code (17 rows, row 7 is typed):
  ```
  1  import {StyleSheet, Text, View} from "react-native";
  2  import Constants from "expo-constants";
  3
  4  const Index = () => {
  5      return (
  6          <View style={styles.container}>
  7              Hello World
  8          </View>
  9      );
  10 }
  11
  12 const styles = StyleSheet.create({
  13     container: {
  14         flex: 1,
  15         paddingTop: Constants.statusBarHeight,
  16     },
  17 });
  ```
  Kicker `Alle tekst in een Text`.
- phone: the empty container; from 5.44 a LogBox-style sheet (white, hairline, 3 dp red bar left, bottom of the screen): `Render Error` (Inter 600 14 dp) and the message in mono 14 dp `Text strings must be rendered within a <Text> component.`
- shots:
  - 0.0-2.4: kicker, panel, phone in. "Text" (1.40): wash on `Text` in the import, off at 2.4.
  - 2.4-5.4: "tekst" (2.88): `Hello World` is typed on row 7 (0.035s/char). "rechtstreeks" (3.32): wash on it; "View" (4.08): wash on rows 6 and 8. All washes off at 5.0 (before the red moment).
  - 5.4-end: "foutmelding" (5.44): thin red `ts-mark--wrong` around `Hello World` and the error sheet rises in (y 16 → 0). The message appears word by word on the voice: text 6.56, strings 6.92, must 7.20, be 7.48, rendered 7.60, within 8.16, a 8.40, Text 8.56, component 8.88. Hold on the error (the fix is not spoken, so it is not shown; frame 3 starts from the fixed code).

## Frame 3 — Tekststijlen

- id: 03-style
- duration: 10.07s
- transition_in: crossfade
- sfx: whoosh-short@0.48, typing@1.4, typing@3.64, typing@5.16, whoosh-short@7.6, whoosh-short@8.4
- voiceover: "Met style kies je de font size, de font weight en de kleur van je tekst. Text align zet de tekst links, in het midden of rechts."
- focal: the `hello` style growing property by property, the phone text following.
- code (17 rows at the start, 23 at the end; rows 1-5 scroll away at 0.48):
  ```
  1  import {StyleSheet, Text, View} from "react-native";
  2  import Constants from "expo-constants";
  3
  4  const Index = () => {
  5      return (
  6          <View style={styles.container}>
  7              <Text>Hello World</Text>                       -> <Text style={styles.hello}>Hello World</Text>
  8          </View>
  9      );
  10 }
  11
  12 const styles = StyleSheet.create({
  13     container: {
  14         flex: 1,
  15         paddingTop: Constants.statusBarHeight,
  16     },
  17     hello: {                                              <- appears at 0.48
  18         fontSize: 20,                                     <- typed 1.40
  19         fontWeight: "bold",                               <- typed 2.44
  20         color: "steelblue",                               <- typed 3.64
  21         textAlign: "left",                                <- typed 5.16, value -> "center" -> "right"
  22     },                                                    <- appears at 0.48
  23 });
  ```
  The course example uses `color: "red"`; this clip uses `"steelblue"` because red is reserved for errors. `fontStyle` and `textDecorationLine` from the course are left out (not spoken). Kicker `Tekststijlen`.
- phone: one Text `Hello World` in the container. Changes are set when the typed value is complete: fontSize 20 (1.79), bold (2.86), colour steelblue (3.3s tween from 4.06). textAlign moves the text with a calm 0.5s slide (power3.inOut): left → center (7.60) → right (8.40).
- shots:
  - 0.0-1.3: kicker, panel, phone in (frame 2's fixed code, `Hello World` in the phone). "style" (0.48): row 7 crossfades to the version with `style={styles.hello}` (wash on that part until 1.5), the empty `hello: {` / `},` block slides in, the code scrolls 5 rows (rows 6-23 visible).
  - 1.3-5.0: "font size" (1.36): row 18 typed; "font weight" (2.40): row 19; "kleur" (3.60): row 20. Each insert first slides `});` down one row.
  - 5.0-end: "Text align" (5.12): row 21 typed with `"left"`. "links" (6.64): wash on the value. "midden" (7.60): `"left"` → `"center"` (swap 0.25s), text slides to the centre. "rechts" (8.40): → `"right"`, text slides to the right edge. Hold.

## Frame 4 — Text nesten

- id: 04-nesting
- duration: 9.43s
- transition_in: crossfade
- sfx: whoosh-short@2.4, pop@3.32, pop@4.92, typing@6.68
- voiceover: "Je kan een Text ook in een andere Text nesten. De binnenste neemt de stijl van de buitenste over, en kan die aanvullen of overschrijven."
- focal: the inner Text inside the outer one; "World" picking up bold (aanvullen) and blue (overschrijven).
- code (17 rows at the start, 21 at the end; rows 1-3 scroll away at 2.40):
  ```
  7              <Text>Hello World</Text>                       -> <Text>Hello<Text style={styles.world}> World</Text></Text>
  ...
  17     world: {                                              <- appears at 2.40
  18         fontWeight: "bold",                               <- typed 6.68
  19         color: "blue",                                    <- typed 7.56
  20     },                                                    <- appears at 2.40
  21 });
  ```
  Rows 1-6 and 8-16 as in frame 2. The course writes `color` before `fontWeight`; here `fontWeight` comes first so "aanvullen" (a new property) and "overschrijven" (the inherited colour) land in the order they are spoken. Kicker `Text nesten`.
- phone: `Hello World` (14 dp), with ` World` as the nested Text. Bold at 7.06, colour `blue` (#0000FF) at 7.91.
- shots:
  - 0.0-3.2: kicker, panel, phone in. "Text" (0.68): wash on row 7. "nesten" (2.40): row 7 crossfades to the nested version, the empty `world` block slides in, the code scrolls 3 rows.
  - 3.2-6.3: "binnenste" (3.32): blue `ts-mark` around `<Text style={styles.world}> World</Text>`; underline under ` World` in the phone. "buitenste" (4.92): wash on the outer `<Text>` and `</Text>`; a second underline, one step lower, under the whole `Hello World`. All off at 6.20.
  - 6.3-end: "aanvullen" (6.64): `fontWeight: "bold",` typed, World turns bold. "overschrijven" (7.52): `color: "blue",` typed, World turns blue. Hold.

## Frame 5 — Geen overerving

- id: 05-overerving
- duration: 11.91s
- transition_in: crossfade
- sfx: pop@3.52, whoosh-short@5.04, pop@6.16, pop@8.92, pop@9.68
- voiceover: "Maar let op: anders dan in CSS erft een Text niets van een View. Een View heeft zelfs geen color. Tekststijlen gaan enkel van een Text naar een geneste Text."
- focal: a View with a colour style whose Text stays black, next to a Text whose nested Text does turn blue.
- code (23 rows, complete from the start; rows 19-23 come into view with the scroll at 5.04):
  ```
  1  import {StyleSheet, Text, View} from "react-native";
  2  import Constants from "expo-constants";
  3
  4  const Index = () => {
  5      return (
  6          <View style={styles.container}>
  7              <View style={styles.blue}>
  8                  <Text>Niet blauw</Text>
  9              </View>
  10             <Text style={styles.blue}>Wel blauw, <Text>ook genest</Text></Text>
  11         </View>
  12     );
  13 }
  14
  15 const styles = StyleSheet.create({
  16     container: {
  17         flex: 1,
  18         paddingTop: Constants.statusBarHeight,
  19     },
  20     blue: {
  21         color: "blue",
  22     },
  23 });
  ```
  Adapted from the course's third example: the View gets the colour style (the wrong expectation from CSS, which the voice names), `"blue"` instead of `"red"` (red is for errors), short texts, and the nested Text without its own `bold` style so the inherited colour is the only thing it shows (and the code fits). Kicker `Geen overerving`.
- phone: `Niet blauw` (black, inside the inner View), then `Wel blauw, ook genest` in blue.
- shots:
  - 0.0-5.0: kicker, panel, phone in. "erft" (2.48): wash on rows 7-9. "niets" (3.52): underline under `Niet blauw` (it stays black). Off at 4.80.
  - 5.0-7.0: "Een View" (5.04): the code scrolls 5 rows (rows 6-23). "color" (6.16): thin red `ts-mark--wrong` around `style={styles.blue}` on the View (row 7); off at 7.00.
  - 7.0-end: "Tekststijlen" (7.12): wash on row 10 and on `color: "blue",` (row 21, off at 8.70). "Text" (8.92): blue mark around `<Text style={styles.blue}>`. "geneste Text" (9.68): blue mark around `<Text>ook genest</Text>` and underline under `ook genest` in the phone. Hold.

## Frame 6 — Samenvatting

- id: 06-samenvatting
- duration: 7.81s
- transition_in: blur-crossfade
- sfx: pop@1.56, pop@3.52
- voiceover: "Kort samengevat: alle tekst in een Text, en de tekststijl zet je op die Text zelf."
- focal: two recap rows; the phone shows a Text that gets its own style.
- code: none. Layout as `13-samenvatting` of the flexbox clip: kicker `Samengevat`; two rows at x 80, top 360 and 480: chip (`ts-chip`, 340 wide) + statement (Inter 500 44px ink, x 460):
  1. `<Text>` — `Alle tekst in een Text`
  2. `style` — `Tekststijl op de Text zelf`
- phone: container with one Text `Hello World`.
- shots:
  - 0.0-1.5: kicker, phone in (empty app).
  - "alle tekst" (1.56): row 1 in (x −12 → 0), chip selected (blue tint + border); `Hello World` rises in at 1.80.
  - "tekststijl" (3.52): row 2 in, its chip selected, chip 1 back to normal; at 3.70 the Text gets fontSize 20, bold and steelblue (the frame 3 style). Hold.
