# STORYBOARD — react-native-button

## Video direction

- **Sibling film** of `../react-native-flexbox` and the other React Native core component clips (TS light). Follow the shared agent brief for this series (code surface left + phone right, APP KIT, presses, sfx format) and `CLAUDE.md` (house style). Course page: `docs/react-native/core-components/button.md`; the clip uses its two examples (`title` / `color="green"` / `disabled`, and the `useState<boolean>(false)` + `onPress` example).
- **Every frame file** copies the `<style>` block of `../react-native-flexbox/compositions/frames/03-direction.html` verbatim (TS LIGHT + FLEX KIT), then the APP KIT block, then frame-local rules. Script helpers `washOn`, `washOff`, `swapVal`, `fadeSwap`, `typeLine` as in the flexbox clip, plus the APP KIT helpers `dpBox`, `placeMark`, `placeTouch` and `press` (touch in 0.6 → 1 in 0.15s, pressed state while down, touch out 0.25s).
- **Code surface:** `.fx-panel` at (80, 150), 1290 × 730, title `app/index.tsx`, status bar `app/index.tsx · Button`. The code area `#fNN-code` is clipped to 18 rows (612px) so no row ever sits under the status bar; rows that can never be on screen are left out, and the row that an insert pushes out of view fades out (0.2s) as the insert slides in.
- **Code style:** the course style: 4-space indent, `{Button, StyleSheet, Text, View}` without inner spaces, no `import React` / `export default`, `useState<boolean>(false)`, `return (` ... `);`, StyleSheet one property per line with a trailing comma. Inserted rows use the flexbox technique (`#fNN-below` starts at `y: -34`, slides to 0, then `typeLine`).
- **Phone:** `.ph-body` at (1494, 150), screen 316 × 650, app as DOM in dp (`.ph-app`, 1 dp = 1.4 px). The container mirrors `paddingTop: Constants.statusBarHeight` as `padding-top: 24px`. The Button is `.rn-btn` (Android look, as in the course previews), full width as in React Native. The phone follows the code at the moment a typed value is complete.
- **Red** only in frame 2 (`onClick` struck) and frame 5 (the `style` chip that does not exist); never at the same moment as a blue key moment.
- Frames 1 and 6 use the hook layout of `../react-native-flexbox/compositions/frames/01-hook.html`: phone first centred (x −707), sliding to the standard place on the hero word.

## Frame 1 — Hook

- id: 01-hook
- duration: 9.19s
- transition_in: cut
- sfx: pop@0.96, whoosh-short@2.64, pop@4.72, pop@6.8
- voiceover: "Voor een eenvoudige knop heeft React Native de Button component. Je geeft hem een title, en hij krijgt meteen het uitzicht van het platform."
- code: no code panel. One line of code under the hero at (80, 520), mono 36px on a light code chip: `<Button title="Press me"/>`.
- phone: container `padding-top: 24px` with one `.rn-btn` "Press me" (shown uppercase, Android look). The title text has a white 1.5 dp underline that wipes in.
- shots:
  - 0.0-2.6: the phone fades in centred (0.2). "knop" (0.96): the button appears in the app (y 8 → 0). "React Native" (1.76): kicker `React Native`.
  - 2.6-4.7: "Button" (2.64): the phone slides to the right (0.8s power3.inOut), hero `Button` (Inter 700 168px) lands at (80, 280); blue hero bar wipes in at 3.04.
  - 4.7-6.8: "title" (4.72): the code line fades in; at 4.9 a blue wash on `title="Press me"` and the white underline under the title in the app.
  - 6.8-end: "uitzicht" (6.80): statement `Het uitzicht van het platform` (Inter 500 48px) at (80, 650). Hold.

## Frame 2 — onPress

- id: 02-onpress
- duration: 10.55s
- transition_in: crossfade
- sfx: typing@3.12, click-soft@6.32, whoosh-short@8.56
- voiceover: "Een belangrijk verschil met het web: er bestaat geen on click. Op een touchscreen klik je niet, je drukt. Daarom heet het event on press."
- code (18 rows at the start; row 9 inserted at 3.12, `});` slides out of view):
  ```
  1  import {Button, StyleSheet, View} from "react-native";
  2  import Constants from "expo-constants";
  3
  4  const Index = () => {
  5      return (
  6          <View style={styles.container}>
  7              <Button
  8                  title="Press me"
  9                  onClick={() => {}}        <- typed at 3.12, struck; becomes onPress={() => {}} at 8.56
  10             />
  11         </View>
  12     );
  13 }
  14
  15 const styles = StyleSheet.create({
  16     container: {
  17         paddingTop: Constants.statusBarHeight,
  18     },
  19 });
  ```
  Kicker `onPress`.
- phone: the Button "Press me" under the status bar.
- shots:
  - 0.0-3.0: kicker, panel and phone in. "web" (1.36): hold.
  - 3.0-4.2: "on click" (3.12): rows 10+ slide down, `onClick={() => {}}` types on (0.035s/char). 3.85: thin red line strikes through `onClick`; the row dims to 0.5.
  - 4.2-8.5: "touchscreen" (4.60), "klik je niet" (5.20): hold. "drukt" (6.32): a touch on the button (pressed opacity 0.85), released at 6.72.
  - 8.5-end: "on press" (8.56): the struck row crossfades to `onPress={() => {}}` with a blue wash; blue `ts-mark` around `onPress` at 8.80. Hold.

## Frame 3 — Reageren met state

- id: 03-state
- duration: 8.79s
- transition_in: crossfade
- sfx: pop@1.52, click-soft@4.4, pop@6.08
- voiceover: "Aan on press geef je een functie mee. Hier zet die de state pressed op true, en de tekst onder de knop past zich aan."
- code (the course's second example; rows 1-18 on screen, the StyleSheet below is out of view):
  ```
  1  import {useState} from "react";
  2  import {Button, StyleSheet, Text, View} from "react-native";
  3  import Constants from "expo-constants";
  4
  5  const Index = () => {
  6      const [pressed, setPressed] = useState<boolean>(false);
  7
  8      return (
  9          <View style={styles.container}>
  10             <Button
  11                 title="Press me"
  12                 onPress={() => {
  13                     setPressed(true);
  14                 }}
  15             />
  16             <Text>{pressed ? "Pressed!" : "Nog niet ingedrukt"}</Text>
  17         </View>
  18     );
  ```
  Kicker `onPress en state`.
- phone: Button "Press me", under it the Text "Nog niet ingedrukt" (14 dp); after the press "Pressed!" (crossfade 0.3s).
- shots:
  - 0.0-2.5: kicker, panel, phone in. "on press" (0.32): wash on `onPress={() => {`. "functie" (1.52): blue `ts-mark` around rows 12-14.
  - 2.5-5.4: "zet" (2.96): wash on `setPressed(true);`, the mark leaves. "state pressed" (3.44): wash on row 6. Touch down on the button at 4.40, release on "true" (4.72): wash on `true`, the Text crossfades to "Pressed!". Washes off at 5.3.
  - 5.4-end: "tekst" (5.76): wash on row 16. "onder de knop" (6.08): the same blue wash on the Text in the app. Hold.

## Frame 4 — disabled

- id: 04-disabled
- duration: 7.11s
- transition_in: crossfade
- sfx: typing@0.32, pop@3.16, click-soft@5.56
- voiceover: "Met disabled schakel je de knop uit. Hij wordt grijs en reageert niet meer als je erop drukt."
- code: the frame 3 code; row 12 `disabled={true}` is inserted (rows 1-18 on screen):
  ```
  10             <Button
  11                 title="Press me"
  12                 disabled={true}           <- typed at 0.32
  13                 onPress={() => {
  14                     setPressed(true);
  15                 }}
  16             />
  17             <Text>{pressed ? "Pressed!" : "Nog niet ingedrukt"}</Text>
  18         </View>
  ```
  Kicker `disabled`.
- phone: as frame 3 with the state reset ("Nog niet ingedrukt"). When the value is typed the button turns `.rn-btn--disabled` (grey `#DFDFDF`, text `#A1A1A1`, no shadow, 0.3s).
- shots:
  - 0.0-2.7: kicker, panel, phone in. "disabled" (0.32): rows slide down, `disabled={true}` types on (0.04s/char, done ≈ 0.92) with a wash; the button greys out at the same moment.
  - 2.7-3.9: "grijs" (3.16): blue `ts-mark` around `disabled={true}`, off at 3.92.
  - 3.9-end: "reageert niet meer" (3.92): wash moves to `onPress` and `setPressed(true);`. "drukt" (5.56): a touch on the grey button that does nothing (no pressed state, the text stays), released at 6.1; wash on the Text row at 6.1. Hold.

## Frame 5 — Beperkte styling

- id: 05-color
- duration: 13.96s
- transition_in: crossfade
- sfx: pop@3.44, typing@4.8, whoosh-short@9.6, pop@11.44
- voiceover: "Veel styling kan je niet kiezen: een Button heeft geen style prop. Met color verander je enkel de kleur, en zelfs dat werkt anders per platform: op iOS kleurt de tekst, op Android de achtergrond."
- code (the course's first example; 18 rows, row 9 inserted at 4.80, `});` slides out of view):
  ```
  1  import {Button, StyleSheet, View} from "react-native";
  2  import Constants from "expo-constants";
  3
  4  const Index = () => {
  5      return (
  6          <View style={styles.container}>
  7              <Button
  8                  title="Hello World"
  9                  color="green"             <- typed at 4.80
  10             />
  11         </View>
  12     );
  13 }
  14
  15 const styles = StyleSheet.create({
  16     container: {
  17         paddingTop: Constants.statusBarHeight,
  18     },
  ```
  Kicker `color`. A `ts-chip ts-chip--unwanted` `style={...}` sits in the panel at (800, 411), on the `<Button` row.
- phone: Button "Hello World"; green background (`#008000`) once `color="green"` is typed. From 9.60 a comparison in the app (dp, below the status bar): top half pill `iOS` + `.rn-btn-ios` with green text; hairline; bottom half pill `Android` + `.rn-btn` with green background (both inset 12 dp).
- shots:
  - 0.0-2.4: kicker, panel, phone in. "styling" (0.32): hold.
  - 2.4-4.6: "Button" (2.40): wash on the Button rows. "style" (3.44): the `style={...}` chip pops in with its red edge. "prop" (3.92): a red line strikes through it; the chip dims to 0.35 at 4.3; washes off.
  - 4.6-8.6: "color" (4.80): rows slide down, `color="green"` types on (0.04s/char) with a wash; the app button turns green when the value is complete (≈ 5.32). "kleur" (6.32): hold.
  - 8.6-11.4: "iOS" (9.60): the app crossfades to the comparison, the iOS half comes in; "tekst" (10.60): blue outline around the green iOS text.
  - 11.4-end: "Android" (11.44): hairline and the Android half come in. "achtergrond" (12.16): the outline moves to the green Android button. Hold.

## Frame 6 — Naar Pressable

- id: 06-pressable
- duration: 9.25s
- transition_in: blur-crossfade
- sfx: pop@1.6, whoosh-short@3.68, pop@4.6, click-soft@7.04
- voiceover: "Wil je een knop die er helemaal anders uitziet? Dan gebruik je Pressable. Daarmee maak je van eender welke component een knop."
- code: no code panel; a `ts-mini` panel (`app/index.tsx`) at (80, 470), 880 × 246:
  ```
  <Pressable onPress={handlePress}>
      <View style={styles.card}>
          <Text style={styles.cardText}>Mijn eigen knop</Text>
      </View>
  </Pressable>
  ```
  Kicker `Volgende stap`. Hero `Pressable` (Inter 700 168px) at (80, 200) with the blue hero bar.
- phone: the plain Button "Press me", under it the own button: a View card (margin 16, padding 16, radius 12, background `#EAF2FB`, 1.5 dp `#3178C6` border) with Text "Mijn eigen knop" (16 dp, 700, `#235A97`). Pressed: background `#D3E3F5`.
- shots:
  - 0.0-3.6: kicker; the centred phone with only the plain Button fades in (0.1). "anders" (1.60): the card appears under it (y 8 → 0).
  - 3.6-4.6: "Pressable" (3.68): the phone slides to the right, hero `Pressable` lands, bar wipes in at 4.08.
  - 4.6-7.0: "Daarmee" (4.60): the mini code fades in. "eender welke component" (5.64): wash on the View / Text rows.
  - 7.0-end: "knop" (7.04): wash moves to the `Pressable` rows; a touch presses the card (pressed colour), released at 7.5. Hold.
