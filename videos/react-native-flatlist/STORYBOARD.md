# STORYBOARD — react-native-flatlist

## Video direction

- **Sibling film.** Same series as `../react-native-pressable` (TS light) and the other React Native core-component clips. Every frame copies the `<style>` block of `../react-native-pressable/compositions/frames/03-count.html` verbatim (TS LIGHT + FLEX KIT + APP KIT), then frame-specific rules, and reuses its helpers (`washOn/washOff`, `swapVal`, `fadeSwap`, `typeLine`, `dpBox`, `placeOn`, `touchDown/touchUp`, `pop`) and its code-scrolling technique (see `../react-native-pressable/compositions/frames/05-events.html`). Follow the "Video's" section of the repo `CLAUDE.md`.
- **Kennisclip.** No summary frame: the clip ends on the last example (frame 6).
- **Course page:** `docs/react-native/lists-and-keys/flatlist.md` ("FlatList"). The clip follows its examples in order: the persons example (built up prop by prop: `data`, `renderItem`, `keyExtractor`), the colours example, `ListFooterComponent`.
- **Layout.** Frames 2-6: `.fx-panel` at x 80, y 150, 1290 × 730, title `app/index.tsx`, status `app/index.tsx · FlatList`; phone `.ph-body` at x 1494, y 150 (screen 316 × 650) with the app as real DOM (`.ph-app`, 1 dp = 1.4 px, 226 × 464 dp). A small chip can sit centred **above the phone** (x 1494-1840, y 82-134). Nothing below y 880.
- **Long code.** The panel shows 18 rows (24px / 34px rows, max ~84 characters per row). `.fx-code` is clipped to 612 px and rows outside the window are hidden at rest; scrolling moves `.fx-lns` and `.fx-lines` together (`y: -34 × n`, 0.6s power3.inOut).
- **Code style.** As on the course page, with the series' adjustments: 4-space indent, no spaces inside `{View, Text, FlatList, StyleSheet}` or `({item})`, no `import React` / `export default Index;`, `return (...);`, StyleSheet one property per line with trailing comma. Rows longer than the panel are wrapped (noted per frame).
- **Colours.** The course's colours example uses a rainbow. Red is reserved for errors in this series, so the clip uses seven named blues (same as the Lijsten and ScrollView clips): `const colors = ["powderblue", "lightblue", "skyblue", "lightskyblue",` / `    "deepskyblue", "dodgerblue", "steelblue"];` (two rows).
- **Scrolling in the phone.** The list is a clipped viewport with an inner content box that is translated (`y` in dp, power3.out). A drag is drawn with `.ph-touch` moving along with the content; a thin scroll indicator (3 dp, `rgba(0,0,0,0.35)`) shows at the right edge while the content moves and fades 0.5s after.
- **Presses.** `.ph-touch` as in the Pressable clip.
- **Motion.** power3.out settles, washes on the named line/value, `ts-mark` around a key line, no bounce, holds stand still, every reveal on the word that names it. No sfx inside the frames (they are in `index.html`, from the `sfx:` lines below).

## Frame 1 — Hook

- id: 01-hook
- duration: 8.63s
- transition_in: cut
- sfx: pop@0.28, whoosh-short@2.40, whoosh-short@3.68, pop@4.96
- voiceover: "Voor lange lijsten heeft React Native de Flat List. Die scrolt vanzelf en rendert enkel de items die op het scherm staan."
- focal: a very long list in the phone; the hero word `FlatList`; only the visible items are rendered.
- code: none (hook).
- phone: container paddingTop 24; rows `Item 1`, `Item 2`, … (each 44 dp high: padding 12 dp horizontally, Text 16 dp, hairline `#E2E8F0` under each row); render 30 rows in the content box.
- shots:
  - 0.0-2.3: phone centred (x −707), fades in at 0.1 (empty app). "lange lijsten" (0.28): the rows appear top to bottom (stagger 0.04 over the visible ones).
  - 2.40 "Flat List": phone slides to the standard position (0.8s power3.inOut); hero `FlatList` (Inter 700 168px, left 80, top 300) lands; kicker `React Native` at 2.55; blue hero bar wipes in at 2.75.
  - 3.68 "scrolt vanzelf": a finger drags up; the list scrolls 0 → 440 dp (1.0s power3.out), indicator visible.
  - 4.96 "rendert": statement `Enkel wat op het scherm staat, wordt gerenderd` (Inter 500 48px, left 80, top 520, max width 1300, may wrap to two lines).
  - 6.80 "scherm": a thin blue `.ph-mark` outline around the visible part of the list (the screen) pops. Hold.

## Frame 2 — data

- id: 02-data
- duration: 8.84s
- transition_in: blur-crossfade
- sfx: typing@1.75, whoosh-short@4.08, pop@4.1
- voiceover: "Je geeft de array mee aan de data prop. Hier is dat een lijst van personen, elk met een id, een naam en een leeftijd."
- focal: `data={persons}` and the `persons` array with its `Person` interface.
- code (final 36 rows). Starts with window 19-36 and rows 30-32 absent (`<FlatList` on row 29 directly followed by `/>`). Rows 31-32 stay absent in this frame (frames 3 and 4 type them):
  ```
  1  import {View, Text, FlatList, StyleSheet} from "react-native";
  2  import Constants from "expo-constants";
  3
  4  interface Person {
  5      id: number;
  6      name: string;
  7      age: number;
  8  }
  9
  10 const persons: Person[] = [
  11     {id: 1, name: "Andie", age: 25},
  12     {id: 2, name: "Sven", age: 24},
  13     {id: 3, name: "Dirk", age: 27},
  14     {id: 4, name: "Lotte", age: 22},
  15 ];
  16
  17 const PersonComponent = ({item}: {item: Person}) => {
  18     return (
  19         <View style={{flexDirection: "row", alignItems: "center"}}>
  20             <Text style={{flex: 1}}>{item.name}</Text>
  21             <Text style={{flex: 1}}>{item.age}</Text>
  22         </View>
  23     );
  24 }
  25
  26 const Index = () => {
  27     return (
  28         <View style={styles.container}>
  29             <FlatList
  30                 data={persons}
  31                 renderItem={({item}) => <PersonComponent item={item}/>}
  32                 keyExtractor={item => item.id.toString()}
  33             />
  34         </View>
  35     );
  36 }
  ```
  Styles (rows 37+, never shown): `container: {flex: 1, flexDirection: "column", paddingTop: Constants.statusBarHeight}`.
- phone: empty app (only the status bar); nothing renders yet without `renderItem`.
- shots:
  - 0.0-1.6: kicker `data`, panel and phone in.
  - 1.68 "data prop": row 30 opens and `data={persons}` is typed (1.75-2.3); wash on it.
  - 3.44 "lijst": wash stays.
  - 4.08 "personen": code scrolls to window 1-18 (0.6s); wash on rows 10-15. Chip above the phone `data: 4 personen` pops.
  - 5.44 "id": wash on row 5. 6.32 "naam": wash on row 6. 7.20 "leeftijd": wash on row 7 (rows 10-15 keep their wash). Hold.

## Frame 3 — renderItem

- id: 03-renderitem
- duration: 9.51s
- transition_in: crossfade
- sfx: typing@0.1, pop@3.48, pop@7.12
- voiceover: "Render item is een functie die voor elk item een component teruggeeft. Je krijgt het item mee, en wij tonen er een Person Component mee."
- focal: `renderItem={({item}) => <PersonComponent item={item}/>}` and the four rows in the phone.
- code: frame 2's code, window 17-34 from the start; row 31 absent at the start, then typed (row 32 stays absent).
- phone: container paddingTop 24; four rows `flexDirection: "row"`, two Texts `flex: 1`: `Andie` / `25`, `Sven` / `24`, `Dirk` / `27`, `Lotte` / `22` (14 dp). Empty at the start.
- shots:
  - 0.0: panel and phone in. Kicker `renderItem`.
  - 0.00 "Render item": row 31 opens and `renderItem={({item}) => <PersonComponent item={item}/>}` is typed (0.1-1.9).
  - 1.28 "functie": wash on `({item}) =>` (as soon as it is typed).
  - 3.16 "component teruggeeft": wash on `<PersonComponent item={item}/>`; 3.48: the four rows appear in the phone (stagger 0.12).
  - 5.04 "item mee": wash on `({item})` in row 31 and on `({item}: {item: Person})` in row 17.
  - 7.12 "Person Component": wash on rows 17-24; a thin `.ph-mark` around the first row in the phone. Hold.

## Frame 4 — keyExtractor

- id: 04-keyextractor
- duration: 8.15s
- transition_in: crossfade
- sfx: typing@0.4, pop@4.88, pop@6.48
- voiceover: "Met key extractor geef je elk item een unieke key. Hier nemen we de id, omgezet naar een string."
- focal: `keyExtractor={item => item.id.toString()}`; key tags that turn from `1` into `"1"`.
- code: frame 3's final code (window 17-34); row 32 absent at the start, then typed. Final code = frame 2's listing.
- phone: the four rows of frame 3. Key tags: small mono pills (blue tint, 9 dp, `key` + value) at the right end of each row.
- shots:
  - 0.0-0.3: panel and phone in. Kicker `keyExtractor`.
  - 0.32 "key extractor": row 32 opens and `keyExtractor={item => item.id.toString()}` is typed (0.4-1.6).
  - 2.76 "unieke key": `ts-mark` around row 32 (off 4.4).
  - 4.88 "id": wash on `item.id`; the key tags pop on the rows with `1`, `2`, `3`, `4` (stagger 0.08).
  - 6.48 "string": wash moves to `.toString()`; the tag values swap to `"1"`, `"2"`, `"3"`, `"4"` (old up, new in, 0.25s). Hold.

## Frame 5 — Kleuren met FlatList

- id: 05-kleuren
- duration: 9.91s
- transition_in: push-slide
- sfx: whoosh-short@6.6
- voiceover: "Ook het kleurenvoorbeeld kan met een Flat List. Data is de array met kleuren, render item maakt een View, en de kleur zelf is de key."
- focal: the colours example: `data={colors}`, the View of 200 dp, `keyExtractor={item => item}`.
- code (window 1-18):
  ```
  1  import {View, FlatList, StyleSheet} from "react-native";
  2  import Constants from "expo-constants";
  3
  4  const colors = ["powderblue", "lightblue", "skyblue", "lightskyblue",
  5      "deepskyblue", "dodgerblue", "steelblue"];
  6
  7  const Index = () => {
  8      return (
  9          <View style={styles.container}>
  10             <FlatList
  11                 data={colors}
  12                 renderItem={({item}) => (
  13                     <View style={{height: 200, backgroundColor: item}}/>
  14                 )}
  15                 keyExtractor={item => item}
  16             />
  17         </View>
  18     );
  19 }
  ```
- phone: container paddingTop 24; the seven blue Views of 200 dp in a scrolling list.
- shots:
  - 0.0-2.7: kicker `Kleuren met FlatList`, panel and phone in (the list visible from the start).
  - 2.80 "Data": wash on row 11. 3.68 "array met kleuren": wash on rows 4-5.
  - 5.04 "render item": washes move to rows 12-14. 6.56 "View": wash narrows to row 13; 6.60: a finger drags up and the list scrolls 0 → 400 dp (1.0s), indicator visible.
  - 7.36 "kleur zelf": wash on row 15. 8.56 "key": `ts-mark` around row 15. Hold.

## Frame 6 — ListFooterComponent

- id: 06-footer
- duration: 9.49s
- transition_in: crossfade
- sfx: typing@0.4, whoosh-short@2.2, typing@4.8, pop@5.2
- voiceover: "Met list footer component toon je iets onderaan de lijst. Bijvoorbeeld een activity indicator, terwijl er meer items laden."
- focal: the spinner under the last item of the list.
- code: frame 5's code with `ActivityIndicator` added to the import and rows 16-18 inserted (window 1-18 → scrolls to 4-21 when the rows open). Final:
  ```
  1  import {View, FlatList, StyleSheet, ActivityIndicator} from "react-native";
  …
  10             <FlatList
  11                 data={colors}
  12                 renderItem={({item}) => (
  13                     <View style={{height: 200, backgroundColor: item}}/>
  14                 )}
  15                 keyExtractor={item => item}
  16                 ListFooterComponent={
  17                     <ActivityIndicator animating={true} style={{margin: 10}}/>
  18                 }
  19             />
  ```
  (The course writes the footer on one row; it is wrapped here because it does not fit the panel.) Row 1 starts as in frame 5; `, ActivityIndicator` is typed into it at 4.8 together with row 17.
- phone: the colours list of frame 5 at offset 400 dp. ActivityIndicator: a small gray ring (20 dp, 2.5 dp stroke, `#999999` arc of 270°, transparent rest), centred, margin 10 dp, under the last View; it rotates continuously from the moment it appears (one turn per 0.8s, finite tween over the rest of the frame, linear).
- shots:
  - 0.0-0.3: panel and phone in. Kicker `ListFooterComponent`.
  - 0.32 "list footer component": rows 16 and 18 open; `ListFooterComponent={` typed (0.4-1.1) and `}` on row 18; code scrolls to window 4-21 (0.6s at 0.4).
  - 2.20 "onderaan de lijst": a finger drags up; the list scrolls to the end (→ 1400 + footer − viewport, 0.9s power3.out): an empty space under the last View.
  - 4.76 "activity indicator": row 17 opens and `<ActivityIndicator animating={true} style={{margin: 10}}/>` is typed (4.8-6.2); `, ActivityIndicator` appears in row 1 (not visible in the window, no animation needed). 5.12 "indicator": the spinner appears in the footer and starts turning.
  - 6.72 "items": `ts-mark` around rows 16-18. Hold (the spinner keeps turning).
