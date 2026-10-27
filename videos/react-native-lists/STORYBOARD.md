# STORYBOARD — react-native-lists

## Video direction

- **Sibling film.** Same series as `../react-native-pressable` (TS light) and the other React Native core-component clips. Every frame copies the `<style>` block of `../react-native-pressable/compositions/frames/03-count.html` verbatim (TS LIGHT + FLEX KIT + APP KIT), then frame-specific rules, and reuses its helpers (`washOn/washOff`, `swapVal`, `fadeSwap`, `typeLine`, `dpBox`, `placeOn`, `touchDown/touchUp`, `pop`) and its code-scrolling technique (see `../react-native-pressable/compositions/frames/05-events.html`). Follow the "Video's" section of the repo `CLAUDE.md`.
- **Kennisclip.** No summary frame: the clip ends on the last example (frame 6).
- **Course page:** `docs/react-native/lists-and-keys/index.md` ("Lijsten met map"). The clip follows its examples in order: the for loop, `colors.map` to Views, the key, `colors.map` to Text, `word.split("")`.
- **Layout.** Frames 2-6: `.fx-panel` at x 80, y 150, 1290 × 730, title `app/index.tsx`, status `app/index.tsx · Lijsten`; phone `.ph-body` at x 1494, y 150 (screen 316 × 650) with the app as real DOM (`.ph-app`, 1 dp = 1.4 px). A small chip can sit centred **above the phone** (x 1494-1840, y 82-134). Nothing below y 880.
- **Long code.** The panel shows 18 rows (24px / 34px rows, max ~84 characters per row). `.fx-code` is clipped to 612 px and rows outside the window are hidden at rest; scrolling moves `.fx-lns` and `.fx-lines` together (`y: -34 × n`, 0.6s power3.inOut).
- **Code style.** As on the course page, with the series' adjustments: 4-space indent, no spaces inside `{Text, View, StyleSheet}`, no `import React` / `export default Index;`, `return (...);`, StyleSheet one property per line with trailing comma.
- **Colours.** The course uses a rainbow (`"red"`, `"orange"`, …). Red is reserved for errors in this series and the palette is TS blue, so the clip uses seven named blues instead (same in the ScrollView and FlatList clips): `const colors = ["powderblue", "lightblue", "skyblue", "lightskyblue",` / `    "deepskyblue", "dodgerblue", "steelblue"];` (two rows).
- **Presses.** `.ph-touch` as in the Pressable clip.
- **Motion.** power3.out settles, washes on the named line/value, `ts-mark` around a key line, no bounce, holds stand still, every reveal on the word that names it. No sfx inside the frames (they are in `index.html`, from the `sfx:` lines below).

## Frame 1 — Hook

- id: 01-hook
- duration: 8.39s
- transition_in: cut
- sfx: pop@0.3, whoosh-short@4.48, pop@5.16, pop@6.88
- voiceover: "Een lijst tonen in React Native gaat net zoals in React. Je neemt een array en mapt elk element naar een component."
- focal: a column of seven blue Views filling the phone, then the hero word `map`.
- code: none (hook, like the Pressable hook).
- phone: container paddingTop 24 (status bar), seven Views with `flex: 1`, background the seven blues (top to bottom).
- shots:
  - 0.0-4.4: phone centred (x −707), fades in at 0.1 (empty app). "lijst" (0.28): the seven Views appear top to bottom (opacity + y 8 → 0, 0.35s each, stagger 0.1). Hold.
  - 4.48 "array": phone slides to the standard position (0.8s power3.inOut). Kicker `React Native` at 4.6.
  - 5.16 "mapt": hero `map` (Inter 700 168px, left 80, top 300) lands; blue hero bar wipes in under it at 5.4.
  - 6.88 "component": statement `Elk element wordt een component` (Inter 500 48px, left 80, top 520). Hold.

## Frame 2 — Met een for lus

- id: 02-forlus
- duration: 10.79s
- transition_in: blur-crossfade
- sfx: pop@6.48
- voiceover: "Je zou een for lus kunnen gebruiken. Voor elke naam duw je een Text in een array, en die array zet je in de View. Dat werkt, maar zo doen we het niet."
- focal: the for loop pushing Texts into `nameTexts`, then `{nameTexts}` rendering four names.
- code (25 rows, window 1-18, no scroll):
  ```
  1  import {Text, View, StyleSheet} from "react-native";
  2  import Constants from "expo-constants";
  3
  4  const Index = () => {
  5      const names = ["Andie", "Lotte", "Liene", "Hanna"];
  6      let nameTexts: JSX.Element[] = [];
  7
  8      for (let name of names) {
  9          nameTexts.push(<Text key={name}>{name}</Text>);
  10     }
  11
  12     return (
  13         <View style={styles.container}>
  14             {nameTexts}
  15         </View>
  16     );
  17 }
  18
  19 const styles = StyleSheet.create({
  20     container: {
  21         flexDirection: "column",
  22         flex: 1,
  23         paddingTop: Constants.statusBarHeight,
  24     },
  25 });
  ```
- phone: container paddingTop 24; four Texts (14 dp) `Andie`, `Lotte`, `Liene`, `Hanna` under each other. Empty at the start.
- shots:
  - 0.0-0.7: kicker `Met een for lus`, panel and phone in.
  - 0.72 "for lus": wash on rows 8-10 (off 2.3).
  - 2.88 "naam": wash on the names array in row 5 (off 3.9).
  - 3.28 "duw": wash on `nameTexts.push(<Text key={name}>{name}</Text>)` (row 9); 4.40 "array": wash also on row 6 `let nameTexts: JSX.Element[] = [];`. Both off 5.3.
  - 6.48 "View": wash on row 14 `{nameTexts}`; the four names appear in the phone (stagger 0.1).
  - 7.28 "Dat werkt": hold.
  - 8.64 "zo doen we het niet": rows 6-10 dim to 40% (0.5s); wash off. Hold.

## Frame 3 — Met map

- id: 03-map
- duration: 8.15s
- transition_in: crossfade
- sfx: typing@1.95, pop@4.72
- voiceover: "Korter en duidelijker is map. Elke kleur uit de array wordt een View, met die kleur als achtergrond."
- focal: `colors.map(color => ...)` and the seven coloured Views.
- code (final 24 rows, window 1-18). Starts with rows 10-12 absent (the View is empty: row 9 `<View style={styles.container}>` directly followed by `</View>`); row 11 is written **without** `key={color} ` here (frame 4 adds it):
  ```
  1  import {View, StyleSheet} from "react-native";
  2  import Constants from "expo-constants";
  3
  4  const colors = ["powderblue", "lightblue", "skyblue", "lightskyblue",
  5      "deepskyblue", "dodgerblue", "steelblue"];
  6
  7  const Index = () => {
  8      return (
  9          <View style={styles.container}>
  10             {colors.map(color => (
  11                 <View style={{flex: 1, backgroundColor: color}}/>
  12             ))}
  13         </View>
  14     );
  15 }
  16
  17 const styles = StyleSheet.create({
  18     container: {
  19         flexDirection: "column",
  20         alignItems: "stretch",
  21         flex: 1,
  22         paddingTop: Constants.statusBarHeight,
  23     },
  24 });
  ```
- phone: container paddingTop 24; empty at the start; then the seven Views with `flex: 1` (as in the hook).
- shots:
  - 0.0-1.9: kicker `Met map`, panel and phone in.
  - 1.92 "map": rows 10-12 open (rows below move down, 0.4s); row 10 typed 1.95-2.55, row 11 typed 2.6-3.6, row 12 `))}` 3.65-3.8. Wash on `colors.map` when row 10 is done.
  - 2.80 "Elke kleur": wash on rows 4-5 (the array).
  - 4.72 "View": wash on row 11; the seven Views appear in the phone, top to bottom (stagger 0.08).
  - 6.32 "achtergrond": wash narrows to `backgroundColor: color`. Hold.

## Frame 4 — De key

- id: 04-key
- duration: 9.75s
- transition_in: crossfade
- sfx: typing@1.9, pop@5.12, pop@8.04
- voiceover: "Elk element in een lijst heeft een key nodig, en die key moet uniek zijn. De kleurnamen zijn hier allemaal verschillend, dus die kunnen we gebruiken."
- focal: `key={color}` typed into row 11; key tags on the Views in the phone.
- code: frame 3's final code (window 1-18), row 11 `<View style={{flex: 1, backgroundColor: color}}/>`. At "key" `key={color} ` is inserted after `<View ` (the rest of the row moves right as the characters are typed). Final row 11: `                <View key={color} style={{flex: 1, backgroundColor: color}}/>`.
- phone: the seven Views as at the end of frame 3. Key tags: small mono pills (`.ts-tag` look, 9 dp font in dp space, blue tint) at the left inside each View, text `powderblue`, `lightblue`, … (the key values).
- shots:
  - 0.0-1.8: panel and phone in. Kicker `De key`.
  - 1.84 "key": `key={color} ` typed into row 11 (1.9-2.5). Wash on `key={color}`.
  - 3.80 "uniek": `ts-mark` around `key={color}` (off 5.0).
  - 5.12 "kleurnamen": wash on rows 4-5; the key tags pop in on the seven Views (stagger 0.08).
  - 6.52 "verschillend": hold (wash stays).
  - 8.04 "gebruiken": wash off rows 4-5; `ts-mark` around `key={color}` again. Hold.

## Frame 5 — Naar Text mappen

- id: 05-text
- duration: 7.35s
- transition_in: crossfade
- sfx: whoosh-short@4.2, pop@5.04
- voiceover: "Je moet niet altijd naar Views mappen. Hier wordt elke kleur een Text, met de naam van de kleur erin."
- focal: row 11 turns from a View into a Text; the phone shows the colour names.
- code: frame 4's final code (window 1-18). At "Text" row 1 changes to `import {Text, View, StyleSheet} from "react-native";` (`Text, ` fades in, the rest shifts) and row 11 is replaced (crossfade 0.4s; one extra row opens below, rows under it move down) by:
  ```
  11                 <Text key={color} style={{flex: 1, backgroundColor: color,
  12                     textAlign: "center"}}>{color}</Text>
  ```
- phone: starts as the end of frame 4 (Views, no tags). At "Text": each View becomes a Text band (same colour, `flex: 1`); at "naam" the colour name appears in each band, 14 dp, centred horizontally, at the top of the band (React Native Text default).
- shots:
  - 0.0-1.4: panel and phone in. Kicker `Naar Text mappen`.
  - 1.44 "Views": wash on row 11 (the View).
  - 4.20 "Text": row 11 swaps to the Text version (and row 1 gets `Text, `); wash on the new rows 11-12.
  - 5.04 "naam": wash narrows to `{color}` in row 12; the names appear in the phone (stagger 0.06). Hold.

## Frame 6 — Letters

- id: 06-letters
- duration: 10.05s
- transition_in: push-slide
- sfx: pop@2.64, pop@4.84, pop@7.92
- voiceover: "Met split maak je van een woord een array van letters. De index bepaalt de font size, en letter plus index wordt de key."
- focal: `"Hello".split("")` becoming five letters that grow with the index; keys `H0 … o4`.
- code (window 1-18; rows below 18 are not needed):
  ```
  1  import {Text, View, StyleSheet} from "react-native";
  2  import Constants from "expo-constants";
  3
  4  const Index = () => {
  5      const word = "Hello";
  6      return (
  7          <View style={styles.container}>
  8              {word.split("").map((letter, index) => (
  9                  <Text
  10                     key={letter + index}
  11                     style={{
  12                         flex: 1,
  13                         fontSize: 20 + index * 10,
  14                         textAlign: "center",
  15                     }}
  16                 >
  17                     {letter}
  18                 </Text>
  19             ))}
  20         </View>
  21     );
  22 }
  23
  24 const styles = StyleSheet.create({
  25     container: {
  26         flex: 1,
  27         flexDirection: "row",
  28         paddingTop: Constants.statusBarHeight,
  29     },
  30 });
  ```
  (The course writes the Text on one row; it is split here because it does not fit the panel.)
- phone: container `flexDirection: "row"`, paddingTop 24; five Texts `flex: 1`, centred: `H` 20 dp, `e` 30, `l` 40, `l` 50, `o` 60. Empty at the start.
- shots:
  - 0.0-0.2: panel and phone in. Kicker `Letters`.
  - 0.24 "split": wash on `word.split("")` (row 8).
  - 1.56 "woord": wash on `"Hello"` (row 5).
  - 2.64 "letters": chip above the phone `["H", "e", "l", "l", "o"]` pops.
  - 3.68 "index": wash on `index` in row 8.
  - 4.84 "font size": wash on row 13; the five letters appear in the phone one by one (stagger 0.15), each at its size.
  - 6.08 "letter plus index": wash on row 10; small key tags under each letter in the phone: `H0`, `e1`, `l2`, `l3`, `o4` (stagger 0.08 from 6.8).
  - 7.92 "key": `ts-mark` around row 10. Hold.
