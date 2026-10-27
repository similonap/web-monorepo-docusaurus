# STORYBOARD — react-native-scrollview

## Video direction

- **Sibling film.** Same series as `../react-native-pressable` (TS light) and the other React Native core-component clips. Every frame copies the `<style>` block of `../react-native-pressable/compositions/frames/03-count.html` verbatim (TS LIGHT + FLEX KIT + APP KIT), then frame-specific rules, and reuses its helpers (`washOn/washOff`, `swapVal`, `fadeSwap`, `typeLine`, `dpBox`, `placeOn`, `touchDown/touchUp`, `pop`) and its code-scrolling technique (see `../react-native-pressable/compositions/frames/05-events.html`). Follow the "Video's" section of the repo `CLAUDE.md`.
- **Kennisclip.** No summary frame: the clip ends on the last example (frame 7).
- **Course page:** `docs/react-native/lists-and-keys/scrollview.md` ("Scrollable"). The clip follows its order: the problem, wrapping in a ScrollView, `contentContainerStyle`, `horizontal` (+ hiding the indicator), `keyboardShouldPersistTaps`, `pagingEnabled`, `scrollTo` / `scrollToEnd`.
- **Layout.** Frames 2-7: `.fx-panel` at x 80, y 150, 1290 × 730, title `app/index.tsx`, status `app/index.tsx · ScrollView`; phone `.ph-body` at x 1494, y 150 (screen 316 × 650) with the app as real DOM (`.ph-app`, 1 dp = 1.4 px, 226 × 464 dp). A small chip can sit centred **above the phone** (x 1494-1840, y 82-134). Nothing below y 880.
- **Long code.** The panel shows 18 rows (24px / 34px rows, max ~84 characters per row). `.fx-code` is clipped to 612 px and rows outside the window are hidden at rest; scrolling moves `.fx-lns` and `.fx-lines` together (`y: -34 × n`, 0.6s power3.inOut).
- **Code style.** As on the course page, with the series' adjustments: 4-space indent, no spaces inside `{View, ScrollView, StyleSheet}`, no `import React` / `export default Index;`, `return (...);`, StyleSheet one property per line with trailing comma. Rows longer than the panel are wrapped (noted per frame).
- **Colours.** The course uses a rainbow (`"red"`, `"orange"`, …) and red / green / blue pages. Red is reserved for errors in this series, so the clip uses seven named blues (same as the Lijsten and FlatList clips): `const colors = ["powderblue", "lightblue", "skyblue", "lightskyblue",` / `    "deepskyblue", "dodgerblue", "steelblue"];` (two rows), and the pages `"steelblue"`, `"dodgerblue"`, `"navy"`.
- **Scrolling in the phone.** A ScrollView is a clipped viewport (`overflow: hidden`) with an inner content box that is translated (`y` or `x` in dp, power3.out, never `top/left`). The Views of 200 dp are 1400 dp together; the viewport under the 24 dp status padding is 440 dp, so the maximum offset is 960 dp. A drag is drawn with `.ph-touch` moving along with the content. While the content moves, a thin scroll indicator (3 dp wide, `rgba(0,0,0,0.35)`, radius 2) shows at the right edge (bottom edge for horizontal) and fades out 0.5s after the content settles.
- **Keyboard.** Reuse the on-screen keyboard (`.kb-wrap`, `.kb`, `.kb-row`, `.kb-key`) of `../react-native-textinput/compositions/frames/03-props.html`.
- **Presses.** `.ph-touch` as in the Pressable clip (light touch on dark/blue surfaces).
- **Motion.** power3.out settles, washes on the named line/value, `ts-mark` around a key line, no bounce, holds stand still, every reveal on the word that names it. No sfx inside the frames (they are in `index.html`, from the `sfx:` lines below).

## Frame 1 — Hook

- id: 01-hook
- duration: 7.51s
- transition_in: cut
- sfx: pop@0.36, pop@3.28, whoosh-short@4.32, whoosh-short@6.0
- voiceover: "Is je lijst langer dan het scherm, dan valt de rest er gewoon af. Met een Scroll View kan je er toch door scrollen."
- focal: seven Views of 200 dp that do not fit; then the hero word `ScrollView` and the content scrolling.
- code: none (hook).
- phone: container paddingTop 24; the seven blue Views, each 200 dp high (only the first two and a bit are visible).
- shots:
  - 0.0-3.8: phone centred (x −707), fades in at 0.1 (empty app). "lijst" (0.36): the Views appear top to bottom (stagger 0.08). 2.16 "valt": a finger drags up on the phone (2.2-2.9) but nothing moves. 3.28 "af": chip above the phone `2 van 7 zichtbaar` pops.
  - 4.32 "Scroll View": chip fades; phone slides to the standard position (0.8s power3.inOut); hero `ScrollView` (Inter 700 168px, left 80, top 300) lands; kicker `React Native` at 4.45; blue hero bar wipes in at 4.65.
  - 6.00 "scrollen": a finger drags up on the phone and now the content follows (offset 0 → 480 dp, 1.0s power3.out), scroll indicator visible. Hold.

## Frame 2 — ScrollView rondzetten

- id: 02-wrap
- duration: 7.67s
- transition_in: blur-crossfade
- sfx: typing@0.6, typing@1.1, whoosh-short@5.2
- voiceover: "Je zet de Scroll View rond de inhoud, en dat is alles. Nu kan je met je vinger door alle kleuren scrollen."
- focal: `<ScrollView>` and `</ScrollView>` around the map; scrolling through all colours.
- code (final 25 rows, window 1-18). Starts with rows 10 and 15 absent and rows 11-14 four spaces to the left (`x: -57.6`); row 12-13 is the View, wrapped because it does not fit on one row:
  ```
  1  import {View, ScrollView, StyleSheet} from "react-native";
  2  import Constants from "expo-constants";
  3
  4  const colors = ["powderblue", "lightblue", "skyblue", "lightskyblue",
  5      "deepskyblue", "dodgerblue", "steelblue"];
  6
  7  const Index = () => {
  8      return (
  9          <View style={styles.container}>
  10             <ScrollView>
  11                 {colors.map(color => (
  12                     <View key={color}
  13                         style={{height: 200, backgroundColor: color}}/>
  14                 ))}
  15             </ScrollView>
  16         </View>
  17     );
  18 }
  19
  20 const styles = StyleSheet.create({
  21     container: {
  22         flex: 1,
  23         paddingTop: Constants.statusBarHeight,
  24     },
  25 });
  ```
- phone: as at the end of the hook but at offset 0.
- shots:
  - 0.0-0.45: kicker `ScrollView rondzetten`, panel and phone in.
  - 0.48 "Scroll View": row 10 opens (rows below move down 0.4s) and `<ScrollView>` is typed (0.6-1.0); row 15 opens and `</ScrollView>` is typed (1.1-1.55); rows 11-14 slide right by 4 characters (0.4s, at 0.55).
  - 1.28 "rond de inhoud": wash on rows 11-14 (off 3.0).
  - 2.56 "dat is alles": `ts-mark` around rows 10-15 (off 3.9).
  - 4.80 "vinger": finger down on the phone. 5.20 "door alle kleuren": drag up; the content scrolls to the end (0 → 960 dp, 1.4s power3.out), indicator visible. Hold on the last colours.

## Frame 3 — contentContainerStyle

- id: 03-content
- duration: 12.07s
- transition_in: crossfade
- sfx: pop@2.4, pop@3.44, pop@6.28, whoosh-short@9.52
- voiceover: "Een Scroll View heeft twee delen: het kader en de inhoud die erin scrolt. Style is voor het kader, content container style voor de inhoud, zoals padding en gap."
- focal: the frame (kader) versus the content (inhoud) of the ScrollView; `style` vs `contentContainerStyle`.
- code (36 rows, window 1-18, later 19-36). The View style is spread over rows because it does not fit on one row:
  ```
  1  import {View, ScrollView, StyleSheet} from "react-native";
  2  import Constants from "expo-constants";
  3
  4  const colors = ["powderblue", "lightblue", "skyblue", "lightskyblue",
  5      "deepskyblue", "dodgerblue", "steelblue"];
  6
  7  const Index = () => {
  8      return (
  9          <View style={styles.container}>
  10             <ScrollView style={styles.scrollView}
  11                 contentContainerStyle={styles.content}>
  12                 {colors.map(color => (
  13                     <View key={color} style={{
  14                         height: 200,
  15                         borderRadius: 10,
  16                         backgroundColor: color,
  17                     }}/>
  18                 ))}
  19             </ScrollView>
  20         </View>
  21     );
  22 }
  23
  24 const styles = StyleSheet.create({
  25     container: {
  26         flex: 1,
  27         paddingTop: Constants.statusBarHeight,
  28     },
  29     scrollView: {
  30         backgroundColor: "#eeeeee",
  31     },
  32     content: {
  33         padding: 16,
  34         gap: 16,
  35     },
  36 });
  ```
- phone: starts with the Views (radius 10) full width, no padding, no gap, white background, offset 0. Two outlines drawn over the app in the phone (`.ph-mark`, dp space): **kader** = the ScrollView viewport (fixed), **inhoud** = the content box (dashed, moves with the content). Each gets a small label (Inter 600, 10 dp, uppercase, blue-dark on a white pill) `kader` / `inhoud`.
- shots:
  - 0.0-1.4: kicker `contentContainerStyle`, panel and phone in.
  - 2.40 "kader": the kader outline and label pop.
  - 3.44 "inhoud": the inhoud outline (dashed) and label pop. 4.40 "scrolt": a finger drag; the content and the inhoud outline scroll up 300 dp (0.9s), the kader stays.
  - 5.36 "Style": wash on `style={styles.scrollView}` (row 10). 6.28 "kader": the kader background turns `#eeeeee` (0.35s).
  - 7.12 "content container style": wash moves to row 11.
  - 9.52 "zoals padding": code scrolls to window 19-36 (0.6s); wash on rows 32-35. 9.92 "padding": the content gets padding 16 dp (0.4s). 10.56 "gap": gaps of 16 dp open between the Views (0.4s). Outlines fade out at 10.9. Hold.

## Frame 4 — horizontal

- id: 04-horizontal
- duration: 11.83s
- transition_in: crossfade
- sfx: typing@0.25, whoosh-short@1.52, pop@2.48, typing@8.6
- voiceover: "Met horizontal scrol je opzij. Flex grow nul houdt de Scroll View zo hoog als de kaartjes, en de scrollbalk verberg je met shows horizontal scroll indicator."
- focal: the cards turning into a row; `flexGrow: 0`; the indicator disappearing.
- code (final, window 1-18 throughout). Starts with row 11 `<ScrollView style={{flexGrow: 0}}` (no `horizontal `) and row 12 absent:
  ```
  1  import {View, Text, ScrollView, StyleSheet} from "react-native";
  2  import Constants from "expo-constants";
  3
  4  const colors = ["powderblue", "lightblue", "skyblue", "lightskyblue",
  5      "deepskyblue", "dodgerblue", "steelblue"];
  6
  7  const Index = () => {
  8      return (
  9          <View style={styles.container}>
  10             <Text style={styles.title}>Kleuren</Text>
  11             <ScrollView horizontal style={{flexGrow: 0}}
  12                 showsHorizontalScrollIndicator={false}
  13                 contentContainerStyle={styles.content}>
  14                 {colors.map(color => (
  15                     <View key={color} style={{
  16                         width: 150,
  17                         height: 150,
  18                         borderRadius: 10,
  19                         backgroundColor: color,
  20                     }}/>
  21                 ))}
  22             </ScrollView>
  23             <Text style={styles.title}>Hier komt de rest van de pagina</Text>
  24         </View>
  25     );
  26 }
  ```
  Styles (not shown): `title: {fontSize: 20, padding: 16}`, `content: {paddingHorizontal: 16, gap: 16}`.
- phone: title `Kleuren` (20 dp, padding 16); the cards 150 × 150 (radius 10, gap 16, paddingHorizontal 16); title `Hier komt de rest van de pagina` (20 dp, padding 16, wraps). Start: the cards stacked vertically (the second title is pushed off screen). After `horizontal`: the cards in one row (only the first card and part of the second visible) and the second title right under them.
- shots:
  - 0.0-0.15: panel and phone in. Kicker `horizontal`.
  - 0.16 "horizontal": `horizontal ` typed into row 11 after `<ScrollView ` (0.25-0.6); the cards move from a column into a row (0.6s power3.inOut, at 0.6); the second title slides up into view.
  - 1.52 "opzij": a finger swipes left; the row scrolls x 0 → −300 dp (0.9s power3.out); the horizontal indicator shows at the bottom of the ScrollView.
  - 2.48 "Flex grow nul": wash on `style={{flexGrow: 0}}`; a thin `.ph-mark` outline around the ScrollView box in the phone (exactly as high as the cards).
  - 5.76 "kaartjes": wash also on the card height (row 17). Both washes and the outline off at 6.6.
  - 6.88 "scrollbalk": a small swipe left (x −300 → −420 dp) so the indicator shows; a thin blue ring (`.ph-mark`) around the indicator.
  - 8.56 "shows horizontal scroll indicator": row 12 opens and `showsHorizontalScrollIndicator={false}` is typed (8.6-9.8); wash on it. 10.0 "indicator": ring fades; a swipe right (x −420 → −120 dp) without indicator. Hold.

## Frame 5 — keyboardShouldPersistTaps

- id: 05-keyboard
- duration: 10.39s
- transition_in: crossfade
- sfx: click-soft@2.88, pop@3.84, click-soft@5.0, typing@5.8, click-soft@8.44, pop@8.5
- voiceover: "Staat het toetsenbord open, dan sluit de eerste tik op een knop enkel het toetsenbord. Met keyboard should persist taps op handled werkt de knop meteen."
- focal: a tap on the Button that only closes the keyboard; then `keyboardShouldPersistTaps="handled"` and a tap that works.
- code (final 33 rows, window 14-31 throughout; row 17 absent at the start, so the window starts as rows 14-32 of the final numbering minus row 17):
  ```
  1  import {useState} from "react";
  2  import {View, Text, TextInput, Button, ScrollView, StyleSheet} from "react-native";
  3  import Constants from "expo-constants";
  4
  5  const Index = () => {
  6      const [name, setName] = useState<string>("");
  7      const [names, setNames] = useState<string[]>([]);
  8
  9      const addName = () => {
  10         setNames([...names, name]);
  11         setName("");
  12     }
  13
  14     return (
  15         <View style={styles.container}>
  16             <ScrollView
  17                 keyboardShouldPersistTaps="handled"
  18                 contentContainerStyle={styles.content}
  19             >
  20                 <TextInput
  21                     value={name}
  22                     onChangeText={setName}
  23                     placeholder="Naam"
  24                     style={styles.input}
  25                 />
  26                 <Button title="Toevoegen" onPress={addName}/>
  27                 {names.map((item, index) => (
  28                     <Text key={item + index}>{item}</Text>
  29                 ))}
  30             </ScrollView>
  31         </View>
  32     );
  33 }
  ```
- phone: content padding 16, gap 8: the TextInput (border gray 1 dp, padding 8) with `Lotte` and a caret (focused), the Button `TOEVOEGEN` (`.rn-btn`), below it the Text `Andie`. Keyboard open at the start.
- shots:
  - 0.0-0.5: kicker `keyboardShouldPersistTaps`, panel and phone in.
  - 0.52 "toetsenbord open": thin `.ph-mark` around the keyboard (off 1.8).
  - 2.88 "tik op een knop": finger taps the Button (down 2.88, up 3.15); the keyboard slides down (0.35s at 3.15); the caret disappears; nothing is added.
  - 3.84 "enkel": chip above the phone `onPress niet uitgevoerd` with a thin red rim (`.ts-chip--unwanted`) pops. Off at 4.9.
  - 5.00: finger taps the TextInput; caret back, keyboard slides up.
  - 5.76 "keyboard should persist taps": row 17 opens (rows below move down; the window keeps rows 14-31) and `keyboardShouldPersistTaps="handled"` is typed (5.8-7.6). 7.68 "handled": wash on `"handled"`.
  - 8.44 "werkt de knop": finger taps the Button (down 8.44, up 8.7): `Lotte` is added under `Andie`, the TextInput empties (placeholder `Naam`), the keyboard stays open. 8.5: chip `onPress uitgevoerd` (normal, blue-tint `.ts-chip--new`) pops. Wash on row 26 at 8.76. Hold.

## Frame 6 — pagingEnabled

- id: 06-paging
- duration: 8.55s
- transition_in: crossfade
- sfx: typing@0.5, whoosh-short@1.44, whoosh-short@3.04, pop@3.76
- voiceover: "Met paging enabled stopt de Scroll View altijd netjes op een pagina. Samen met horizontal maak je zo een carrousel."
- focal: swipes that always snap to a full page.
- code (final 33 rows, window 16-33 throughout). Row 21 starts without ` pagingEnabled`. Rows are wrapped where they do not fit:
  ```
  1  import {View, Text, ScrollView, StyleSheet,
  2      useWindowDimensions} from "react-native";
  3  import Constants from "expo-constants";
  4
  5  interface Page {
  6      title: string;
  7      color: string;
  8  }
  9
  10 const pages: Page[] = [
  11     {title: "Welkom", color: "steelblue"},
  12     {title: "Ontdek", color: "dodgerblue"},
  13     {title: "Start", color: "navy"}
  14 ];
  15
  16 const Index = () => {
  17     const {width} = useWindowDimensions();
  18
  19     return (
  20         <View style={styles.container}>
  21             <ScrollView horizontal pagingEnabled
  22                 showsHorizontalScrollIndicator={false} style={{flexGrow: 0}}>
  23                 {pages.map(page => (
  24                     <View key={page.title} style={[styles.page,
  25                         {width: width, backgroundColor: page.color}]}>
  26                         <Text style={styles.pageTitle}>{page.title}</Text>
  27                     </View>
  28                 ))}
  29             </ScrollView>
  30             <Text style={styles.hint}>Swipe naar links</Text>
  31         </View>
  32     );
  33 }
  ```
  Styles (not shown): `page: {height: 300, justifyContent: "center", alignItems: "center"}`, `pageTitle: {fontSize: 32, color: "white"}`, `hint: {padding: 16, textAlign: "center"}`.
- phone: three pages, each 226 dp wide (the screen width) and 300 dp high, centred white title 32 dp; under them `Swipe naar links` (14 dp, centred, padding 16). Chip above the phone `pagina 1 / 3` (value swaps on each snap).
- shots:
  - 0.0-0.4: kicker `pagingEnabled`, panel and phone in; chip `pagina 1 / 3` visible from 0.3.
  - 0.44 "paging enabled": ` pagingEnabled` typed at the end of row 21 (0.5-1.2); wash on it.
  - 1.44 "stopt": a finger swipes left only 40% of a page (x 0 → −90 dp, 0.35s), lets go and the page snaps to page 2 (→ −226 dp, 0.45s power3.out); chip → `2 / 3`.
  - 3.04 "netjes op een pagina": same to page 3 (→ −452 dp); chip → `3 / 3`. 3.76 "pagina": wash on `{width: width` in row 25.
  - 5.48 "horizontal": wash on `horizontal` in row 21.
  - 6.80 "carrousel": hold (washes stay).

## Frame 7 — scrollTo en scrollToEnd

- id: 07-scrollto
- duration: 12.37s
- transition_in: crossfade
- sfx: whoosh-short@2.64, click-soft@6.64, click-soft@9.2
- voiceover: "Je kan ook vanuit je code scrollen. Maak een ref met use ref. Scroll to met y nul brengt je terug naar boven, en scroll to end naar het einde."
- focal: the two Buttons calling `scrollTo` and `scrollToEnd` through the ref.
- code (27 rows, window 1-18, then 8-25). The Buttons are wrapped because they do not fit on one row:
  ```
  1  import {useRef} from "react";
  2  import {View, Button, ScrollView, StyleSheet} from "react-native";
  3  import Constants from "expo-constants";
  4
  5  const colors = ["powderblue", "lightblue", "skyblue", "lightskyblue",
  6      "deepskyblue", "dodgerblue", "steelblue"];
  7
  8  const Index = () => {
  9      const scrollViewRef = useRef<ScrollView>(null);
  10
  11     return (
  12         <View style={styles.container}>
  13             <View style={styles.buttons}>
  14                 <Button title="Naar boven" onPress={() =>
  15                     scrollViewRef.current?.scrollTo({y: 0, animated: true})}/>
  16                 <Button title="Naar beneden" onPress={() =>
  17                     scrollViewRef.current?.scrollToEnd({animated: true})}/>
  18             </View>
  19             <ScrollView ref={scrollViewRef}>
  20                 {colors.map(color => (
  21                     <View key={color}
  22                         style={{height: 200, backgroundColor: color}}/>
  23                 ))}
  24             </ScrollView>
  25         </View>
  26     );
  27 }
  ```
- phone: a row with two Buttons (`.rn-btn`, `NAAR BOVEN` and `NAAR BENEDEN`, space-around, padding 8); under it the ScrollView with the seven Views of 200 dp. The ScrollView starts at offset 500 dp (somewhere in the middle).
- shots:
  - 0.0-1.4: kicker `scrollTo en scrollToEnd`, panel and phone in.
  - 2.64 "ref": code scrolls to window 8-25 (0.6s); wash on `scrollViewRef` (row 9) and on `ref={scrollViewRef}` (row 19).
  - 3.44 "use ref": wash on row 9 narrows to `useRef<ScrollView>(null)`.
  - 4.64 "Scroll to": washes move to row 15. 5.76 "y nul": wash narrows to `{y: 0, animated: true}`.
  - 6.64 "brengt je terug naar boven": finger taps `NAAR BOVEN` (up 6.9); the ScrollView animates 500 → 0 dp (0.7s power2.inOut, like `animated: true`).
  - 8.56 "scroll to end": wash moves to row 17. 9.20: finger taps `NAAR BENEDEN` (up 9.45); the ScrollView animates 0 → 960 dp (0.8s power2.inOut). Hold.
