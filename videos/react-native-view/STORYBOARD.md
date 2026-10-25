# STORYBOARD — react-native-view

## Video direction

- **Series.** Sibling of `../react-native-flexbox` (TS light, `frame.md`). The rules for this series of
  core component clips (code surface left, phone right, APP KIT in the phone, sfx lines, checks) are in the
  lead's brief `BRIEF-AGENTS.md`; the house style is `CLAUDE.md` › Video's.
- **Style block.** Every frame carries, verbatim, the TS LIGHT primitives and the FLEX KIT from
  `../react-native-flexbox/compositions/frames/03-direction.html`, then the APP KIT from the brief, then a
  small **VIEW KIT** for this video:
  - `.ph-ol`: a dashed outline around a View in the phone (`<svg class="ph-ol"><rect></rect></svg>` as the
    first child of a `.rn-view` / `.rn-root`), drawn in dp like the flexbox `.ph-parent` (gray `#94A3B8`,
    dashes 6 / 5 px). For focus the rect's stroke tweens to `#3178C6` (helpers `olShow`, `olBlue`, `olGray`).
  - `.fx-clip`: the code area clips at 18 rows (612px). Rows outside the window are also faded to 0, so
    nothing sits half hidden under the status bar or the title bar.
- **Script helpers** (same in every frame): `washOn`, `washOff`, `swapVal`, `fadeSwap`, `typeLine` (from
  `../react-native-flexbox/compositions/frames/02-assen.html`), plus `scrollRows` (line numbers and lines
  together, 0.6s power3.inOut), `openRow` (inserted row: the rows below slide from y -34 to 0, its line number
  fades in) and `intro` (kicker 0.1/0.2, panel 0.1, phone 0.2, y 20 → 0).
- **Code.** Course style (`docs/react-native/core-components/view.md`): `import {StyleSheet, Text, View} from
  "react-native";`, `import Constants from "expo-constants";`, `const Index = () => {`, the container
  `<View style={styles.container}>` with `flex: 1, paddingTop: Constants.statusBarHeight`, styles one per line
  in `StyleSheet.create`. No `import React` / `export default` (saves rows). The three boxes in frame 4 use the
  one-line inline style of the flexbox clip.
- **Phone.** Real DOM in dp (`.ph-app`, 226 × 464 dp, 1 dp = 1.4 px). `paddingTop: Constants.statusBarHeight`
  = `padding-top: 24px` on the container. Layout changes that CSS cannot tween (alignItems / justifyContent in
  frame 5) are measured from hidden copies of the app laid out by the browser, and the box moves there with a
  calm `x / y` tween; nothing is computed by hand.
- **Colour moments.** Red only for the struck web tags (frame 1) and the struck `<div>` (frame 3), never at the
  same moment as a blue key moment.

## Frame 1 — Hook

- id: 01-hook
- duration: 11.91s
- transition_in: cut
- sfx: pop@0.32, pop@3.84, pop@4.64, pop@5.6, pop@8.28, whoosh-short@10.32
- voiceover: "In React Native bestaan er geen HTML elementen. Geen div, geen p en geen button. In de plaats gebruik je core components. De belangrijkste is de View."
- focal: the struck web tags, then the core components, then the hero word `View` while every View in the phone shows its outline.
- code: none (like the flexbox hook).
- phone (standard place): a small app built from Views. Container (`padding-top: 24`) > header View (height 48, padding 0 16, `lightsteelblue`, Text "Mijn app" 18 bold) + body View (`flex: 1`, padding 16) with two cards (150 × 90, padding 12, radius 8, `lightblue` / `skyblue`, Text "Kaart 1" / "Kaart 2"). Each View has a hidden `.ph-ol`.
- layout: label `HTML` (80, 238), chips `<div>` `<p>` `<button>` at top 270 (gap 16, each with a thin red strike); label `Core components` (80, 388), chips `<View>` `<Text>` `<Image>` `<TextInput>` at top 420; hero `View` (Inter 700 168px) at (76, 548) with the blue hero bar under it.
- shots:
  - 0.0-2.0: kicker `React Native` (0.1). "React Native" (0.32): the phone fades in (y 20 → 0).
  - 2.0-7.7: "HTML" (2.00): label. "div" (3.84), "p" (4.64), "button" (5.60): each chip pops in; its red strike wipes in 0.25s later.
  - 7.7-10.3: "core" (7.76): the HTML label and chips step back to 35%, label `Core components` in. "components" (8.28): four chips pop in, stagger 0.12.
  - 10.3-end: "View" (10.32): hero `View` lands (y 16 → 0), bar wipes in at 10.6; the `<View>` chip turns blue (tint + blue border); every View in the phone shows a blue dashed outline. Hold.

## Frame 2 — Een container

- id: 02-container
- duration: 10.23s
- transition_in: crossfade
- sfx: pop@0.88, pop@4.56, pop@6.16, pop@7.44
- voiceover: "Een View is een container. Hij groepeert andere componenten, net zoals een div op het web. Je kan Views ook in elkaar nesten om je scherm op te bouwen."
- focal: the outer View and the View nested in it, in the code and as dashed outlines in the phone.
- code (24 rows; rows 1-18 visible, 19-24 stay out of the window):
  ```
  1  import {StyleSheet, Text, View} from "react-native";
  2  import Constants from "expo-constants";
  3
  4  const Index = () => {
  5      return (
  6          <View style={styles.container}>
  7              <Text>Hello World</Text>
  8              <View style={styles.box}>
  9                  <Text>Ik zit in een View</Text>
  10             </View>
  11         </View>
  12     );
  13 }
  14
  15 const styles = StyleSheet.create({
  16     container: {
  17         flex: 1,
  18         paddingTop: Constants.statusBarHeight,
  19     },
  20     box: {
  21         padding: 16,
  22         backgroundColor: "lightblue",
  23     },
  24 });
  ```
- phone: container (`padding-top: 24`) > Text "Hello World" + box View (padding 16, `lightblue`) > Text "Ik zit in een View". Outlines on the container and the box.
- shots:
  - 0.0-0.9: kicker `Een container`, panel and phone in.
  - 0.9-3.2: "container" (0.88): wash on rows 6 and 11; the container's outline appears, blue.
  - 3.2-6.1: "componenten" (3.24): wash on rows 7-10 too. "div" (4.56): chip `WEB <div>` pops in right of row 6 (780, 377).
  - 6.1-end: "Views" (6.16): washes on rows 6, 7, 11 off, rows 8-10 stay; the box's outline appears blue, the container's turns gray. "nesten" (7.44): `ts-mark` around rows 8-10. "scherm" (8.08): the container's outline blue again (both). Hold.

## Frame 3 — Echt native

- id: 03-native
- duration: 13.27s
- transition_in: crossfade
- sfx: pop@0.72, pop@1.52, pop@6.0, pop@8.16, pop@11.44
- voiceover: "Toch is een View geen div. React Native zet hem om naar een echt native element: een U I View op iOS en een Android view op Android. Daarom voelt je app echt native aan."
- focal: the mapping `<View>` → `UIView` (iOS) / `android.view.View` (Android), in the free right part of the code surface.
- code (17 rows, the course example without the centring):
  ```
  1  import {StyleSheet, Text, View} from "react-native";
  2  import Constants from "expo-constants";
  3
  4  const Index = () => {
  5      return (
  6          <View style={styles.container}>
  7              <Text>Hello World</Text>
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
- phone: container (`padding-top: 24`) > Text "Hello World"; the container's outline.
- mapping: chip `<View>` at (960, 236), chip `<div>` at (1106, 236) with a thin red strike; a slate line (2px, `#64748B`) down from x 992 with branches and arrowheads to `iOS` + chip `UIView` (1040, 364) and `Android` + chip `android.view.View` (1040, 500).
- shots:
  - 0.0-0.7: kicker `Echt native`, panel and phone in.
  - 0.7-2.4: "View" (0.72): wash on rows 6 and 8, container outline blue, chip `<View>` pops in. "div" (1.52): chip `<div>` pops in, red strike at 1.77.
  - 2.4-6.0: "React Native" (2.40): `<div>` steps back to 35%. "native" (4.48): the line draws down to the iOS branch.
  - 6.0-8.2: "U I View" (6.00): iOS branch, label and chip `UIView`.
  - 8.2-11.4: "Android view" (8.16): the line continues; Android branch, label and chip `android.view.View`.
  - 11.4-end: "native" (11.44): both native chips turn blue (tint + blue border). Hold.

## Frame 4 — Altijd flexbox

- id: 04-flex
- duration: 14.07s
- transition_in: crossfade
- sfx: pop@1.84, typing@4.75, typing@8.3, pop@10.0, pop@11.36
- voiceover: "Een tweede verschil: elke View is standaard een flex container. Display flex hoef je niet te schrijven. De richting is wel column: de kinderen staan onder elkaar, en niet naast elkaar zoals op het web."
- focal: the container as a flex container (blue outline), the two comment rows, the main axis down in the phone.
- code (19 rows, 21 after two typed comment rows; window rows 1-18 → 3-20 → 4-21):
  ```
  1  import {StyleSheet, View} from "react-native";
  2  import Constants from "expo-constants";
  3
  4  const Index = () => {
  5      return (
  6          <View style={styles.container}>
  7              <View style={{width: 80, height: 80, backgroundColor: "lightblue"}}/>
  8              <View style={{width: 80, height: 80, backgroundColor: "skyblue"}}/>
  9              <View style={{width: 80, height: 80, backgroundColor: "steelblue"}}/>
  10         </View>
  11     );
  12 }
  13
  14 const styles = StyleSheet.create({
  15     container: {
  16         // display: "flex" niet nodig              (typed at 4.75)
  17         // flexDirection: "column" (standaard)     (typed at 8.30)
  18         flex: 1,
  19         paddingTop: Constants.statusBarHeight,
  20     },
  21 });
  ```
  Comments in `--ts-label`, as the flexbox clip did.
- phone: container (`padding-top: 24`) with three 80 × 80 dp boxes stacked; container outline; overlay SVG with the main axis (x 158, `main axis` / `column`) and a `.ph-mark` around the three boxes (measured from the DOM).
- web card: `ts-card` 400 × 216 at (940, 540): label `Web`, three 64px boxes in a row, a gray arrow right, `flexDirection: "row"`.
- shots:
  - 0.0-1.8: kicker `Altijd flexbox`, panel and phone in.
  - 1.8-4.5: "View" (1.84): wash on rows 6 and 10, container outline (gray). "flex" (3.20): outline turns blue.
  - 4.5-8.1: "Display" (4.56): scroll 2 rows, row 16 opens, the comment types (0.025/char); wash on it 5.84-7.2.
  - 8.1-9.0: "column" (8.16): scroll 1 more row, row 17 opens and types (0.02/char); the main axis draws down in the phone, labels at 8.66.
  - 9.0-11.3: "kinderen" (9.08): wash on rows 7-9. "onder elkaar" (10.00): blue mark around the three boxes.
  - 11.3-end: "naast elkaar" (11.36): the web card rises in with the boxes in a row. "web" (12.64): its label and `flexDirection: "row"` fade in. Hold.

## Frame 5 — Stylen

- id: 05-style
- duration: 11.27s
- transition_in: crossfade
- sfx: pop@1.68, typing@2.42, typing@3.8, typing@5.44, pop@7.52, typing@8.94
- voiceover: "Met de style prop geef je een View een achtergrondkleur, een rand, padding of een vaste grootte. Hier zet de container zijn inhoud ook in het midden van het scherm."
- focal: the box getting its style line by line, then the course container centring it.
- code (22 rows, 29 after typing; the window follows the caret: rows 1-18 → 6-23 → 10-27 → 12-29):
  ```
  1  import {StyleSheet, Text, View} from "react-native";
  2  import Constants from "expo-constants";
  3
  4  const Index = () => {
  5      return (
  6          <View style={styles.container}>
  7              <View style={styles.box}>
  8                  <Text>Hello World</Text>
  9              </View>
  10         </View>
  11     );
  12 }
  13
  14 const styles = StyleSheet.create({
  15     container: {
  16         flex: 1,
  17         paddingTop: Constants.statusBarHeight,
  18         backgroundColor: "#fff",
  19         alignItems: "center",            (typed from 8.94)
  20         justifyContent: "center",        (typed right after)
  21     },
  22     box: {
  23         backgroundColor: "lightblue",    (2.42)
  24         borderWidth: 2,                  (3.80)
  25         padding: 16,                     (4.64)
  26         width: 150,                      (5.44)
  27         height: 100,                     (5.84)
  28     },
  29 });
  ```
  The container is the course example (`flex: 1`, `paddingTop`, `backgroundColor: "#fff"`, `alignItems` / `justifyContent: "center"`).
- phone: container (`padding-top: 24`, white) > box View > Text "Hello World". Each box property is tweened (0.3s) the moment its value is typed; the centring moves the box (0.6s power3.inOut) to the place measured from hidden copies laid out with `align-items: center` and then also `justify-content: center`.
- shots:
  - 0.0-1.9: kicker `Stylen`, panel and phone in. "style" (0.32): wash on `style={styles.box}`. "View" (1.68): the box's outline (blue dashed).
  - 1.9-3.6: scroll to the box style (2.0). "achtergrondkleur" (2.32): row opens, `backgroundColor: "lightblue",` types; box turns lightblue, outline fades.
  - 3.6-5.3: "rand" (3.68): scroll; `borderWidth: 2,` → black 2dp border. "padding" (4.56): `padding: 16,` → padding.
  - 5.3-6.7: "vaste grootte" (5.36 / 5.72): `width: 150,`, `height: 100,` → fixed size.
  - 6.7-8.8: "container" (7.52): scroll so the container style and the end of the file show; wash on `container: {`; the container's outline (full screen) blue.
  - 8.8-end: "in het midden" (8.84): `alignItems: "center",` types → box centres horizontally; `justifyContent: "center",` types → box in the middle of the screen (~10.0, on "midden van het scherm"). Hold.

## Frame 6 — Samenvatting

- id: 06-samenvatting
- duration: 13.09s
- transition_in: crossfade
- sfx: pop@2.2, pop@4.28, pop@6.52, pop@8.88, pop@10.28
- voiceover: "Samengevat: de View is de bouwsteen van elk scherm. Hij bevat andere componenten, wordt een native element en is altijd een flex container, met column als richting."
- focal: four recap rows (chip + statement) in the style of the flexbox `13-samenvatting`, with the app from the hook in the phone.
- layout: rows at top 250 / 360 / 470 / 580, chip 440 wide at x 80, statement (Inter 500 32px) at x 560:
  - `<View>`: de bouwsteen van elk scherm
  - `<View>…</View>`: bevat andere componenten
  - `UIView · android.view.View`: wordt een native element
  - `display: "flex"`: altijd een flex container`, met column als richting` (the tail at "column", `column` in blue dark)
- phone: the app of frame 1 (header + body with two cards); outlines; a blue main axis down next to the cards with label `column` (position measured from the DOM).
- shots:
  - 0.0-2.2: kicker `Samengevat`, phone in.
  - "bouwsteen" (2.20): row 1 in, its chip selected; every View in the phone shows its gray outline.
  - "bevat" (4.28): row 2; the body View (which holds the cards) turns blue.
  - "native" (6.52): row 3.
  - "flex" (8.88): row 4. "column" (10.28): the tail of row 4 fades in; the main axis draws down next to the cards, label at 10.7. Hold.
