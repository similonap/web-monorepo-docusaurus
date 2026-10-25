# STORYBOARD — react-native-pressable

## Video direction

- **Sibling film.** Same series as `../react-native-flexbox` (TS light) and the other React Native core-component clips. Follow the shared brief for these clips (code surface + phone, APP KIT, typeLine, washes, sfx rules) and the "Video's" section of the repo `CLAUDE.md`. Every frame copies the `<style>` block of `../react-native-flexbox/compositions/frames/03-direction.html` verbatim (TS LIGHT + FLEX KIT), then the APP KIT block, then frame-specific rules.
- **Course page:** `docs/react-native/core-components/pressable.md`. The clip follows its three examples in order: the counter (`useState<number>(0)`), the `pressed` style function and the events example (`onPress`, `onPressIn`, `onPressOut`, `onLongPress`, `delayLongPress`).
- **Layout.** Frames 2-6: `.fx-panel` at x 80, y 150, 1290 × 730, title `app/index.tsx`, status `app/index.tsx · Pressable`; phone `.ph-body` at x 1494, y 150 (screen 316 × 650) with the app as real DOM (`.ph-app`, 1 dp = 1.4 px). A small state/output chip can sit centred **above the phone** (x 1494-1840, y 82-134): `LOG Pressed!`, `STATE count: n`, `pressed: true/false`, `LONG PRESS NA 500 ms`. Nothing below y 880.
- **Long code.** The panel shows 18 rows. `.fx-code` is clipped to 612 px (rows never run under the status bar) and rows outside the window are also hidden (`autoAlpha`) at rest, so the check sees no occluded text. Scrolling moves `.fx-lns` and `.fx-lines` together (`y: -34 × n`, 0.6s power3.inOut); rows leaving the window fade out, rows entering fade in.
- **Code style.** As on the course page, with the brief's adjustments: 4-space indent, no spaces inside `{StyleSheet, Text, View, Pressable}` or `({pressed})`, no `import React` / `export default Index;`, `return (...);`, StyleSheet one property per line with trailing comma. `import {useState} from "react";` where state is used.
- **Colours.** The course uses `backgroundColor: "red"` for the first Pressable and for `pressedTrue`. Red is reserved for errors in this series, so the clip uses `"lightblue"` for the first example (the colour the course's events example already uses) and `"navy"` for `pressedTrue` (pressed = a darker shade of the course's `"blue"`). No red anywhere in this clip.
- **Presses.** `.ph-touch` (fade + scale 0.6 → 1, 0.15s; release fades 0.25s). `onPress` effects land on release. On dark surfaces (Button, card, blue/navy Pressable) the touch is drawn light (white 24% fill, 70% rim) so it stays visible. A long press keeps the touch and draws a thin TS-blue progress ring around it.
- **Motion.** power3.out settles, washes on the named line/value, `ts-mark` around a key line, no bounce, holds stand still, every reveal on the word that names it. No sfx inside the frames.

## Frame 1 — Hook

- id: 01-hook
- duration: 8.63s
- transition_in: cut
- sfx: pop@0.36, click-soft@0.8, whoosh-short@2.56, pop@4.08, click-soft@5.08, pop@6.72
- voiceover: "Een Button kan je nauwelijks stylen. Met Pressable maak je van eender welke component een knop, helemaal in je eigen stijl."
- focal: a plain Button next to custom pressables; then the hero word `Pressable`.
- code: none (hook, like the flexbox hook).
- phone: app with paddingTop 24, sides 16: a `.rn-btn` `PRESS ME`; a card (bg `#36648B`, radius 12, padding 16) with `Bestellen` (white 18 bold) and `Levering morgen` (white 14); a pill (`lightblue`, radius 20, `Volgende` 16 semibold, centred). Card pressed = `#274B69`.
- shots:
  - 0.0-2.5: phone centred (x −707), fades in at 0.1 (empty app). "Button" (0.36): the Button fades in. A press on it at 0.80 (opacity 0.85), release 1.25.
  - 2.5-4.0: "Pressable" (2.56): phone slides to the standard position (0.8s power3.inOut); hero `Pressable` (Inter 700 168px, left 80, top 300) lands; kicker `React Native` at 2.7; blue hero bar wipes in at 2.9.
  - 4.0-6.7: "welke component" (4.08): statement `Van eender welke component een knop` (48px, top 520) and the custom card appear. "knop" (5.08): finger on the card, card darkens; release 5.60.
  - 6.7-end: "eigen stijl" (6.72): the pill appears. Hold.

## Frame 2 — De basis

- id: 02-basis
- duration: 11.19s
- transition_in: blur-crossfade
- sfx: pop@3.44, typing@5.2, whoosh-short@6.32, typing@7.8, click-soft@8.84, pop@9.24
- voiceover: "Je zet de inhoud tussen de Pressable tags, bijvoorbeeld een Text, en je geeft de Pressable een style zoals een View. On press werkt net zoals bij een Button."
- focal: the Pressable tags around the Text, then `style` and `onPress` typed in.
- code (final, 25 rows; starts with row 7 as `<Pressable>` and rows 8-10 absent):
  ```
  1  import {StyleSheet, Text, View, Pressable} from "react-native";
  2  import Constants from "expo-constants";
  3
  4  const Index = () => {
  5      return (
  6          <View style={styles.container}>
  7              <Pressable
  8                  style={styles.pressable}
  9                  onPress={() => console.log("Pressed!")}
  10             >
  11                 <Text>Press Me</Text>
  12             </Pressable>
  13         </View>
  14     );
  15 }
  16
  17 const styles = StyleSheet.create({
  18     container: {
  19         paddingTop: Constants.statusBarHeight,
  20     },
  21     pressable: {
  22         backgroundColor: "lightblue",
  23         padding: 10,
  24     },
  25 });
  ```
  The `onPress` handler is the `console.log("Pressed!")` of the course's second example (the counter comes in frame 3).
- phone: container paddingTop 24; Pressable (stretches full width) with Text `Press Me`. Start: no style (transparent, padding 0). After `style` is typed: `lightblue`, padding 10 (0.3s).
- shots:
  - 0.0-1.5: kicker `De basis`, panel and phone in.
  - 1.5-3.4: "Pressable tags" (1.52): wash on `<Pressable>` and `</Pressable>`.
  - 3.4-5.0: "Text" (3.44): wash on the Text row; thin blue mark around the Text in the phone (off 4.6).
  - 5.0-7.6: "de Pressable" (5.04): the `>` of row 7 fades, rows open up (rows 8 and 10 appear), `style={styles.pressable}` typed 5.20-5.92. "style" (5.92): wash on row 8, phone gets the style. "zoals een View" (6.32): scroll 6 rows (window 7-24) to the StyleSheet; wash on `pressable: {` + its two properties at 6.80 (off 7.5).
  - 7.6-end: "On press" (7.68): row 9 opens, `onPress={() => console.log("Pressed!")}` typed 7.80-8.42, wash. A press at 8.84, release 9.24: chip `LOG Pressed!` pops above the phone. "Button" (9.80): hold.

## Frame 3 — Tellen

- id: 03-count
- duration: 6.95s
- transition_in: crossfade
- sfx: click-soft@0.68, pop@2.0, click-soft@2.3, click-soft@4.4
- voiceover: "Elke druk telt hier één op bij count, en de Text eronder toont meteen het nieuwe aantal."
- focal: the counter: press → `setCount(count + 1)` → the Text shows the new number.
- code (29 rows, window 1-18, no scroll; course example 1 with `"lightblue"` instead of `"red"`):
  ```
  1  import {useState} from "react";
  2  import {StyleSheet, Text, View, Pressable} from "react-native";
  3  import Constants from "expo-constants";
  4
  5  const Index = () => {
  6      const [count, setCount] = useState<number>(0);
  7
  8      return (
  9          <View style={styles.container}>
  10             <Pressable
  11                 style={styles.pressable}
  12                 onPress={() => setCount(count + 1)}
  13             >
  14                 <Text>Press Me</Text>
  15             </Pressable>
  16             <Text>Aantal keer ingedrukt: {count}</Text>
  17         </View>
  18     );
  19 }
  20 … const styles = StyleSheet.create({ container: { paddingTop }, pressable: { backgroundColor: "lightblue", padding: 10 } });
  ```
- phone: Pressable (`lightblue`, padding 10, `Press Me`) and below it `Aantal keer ingedrukt: 0`; the number swaps (old up, new in, 0.25s) on each release.
- shots:
  - 0.0-2.0: panel and phone in. "telt" (0.68): finger down, wash on row 12; release 1.00 → 1. "één op" (1.24): `ts-mark` around row 12 (off 2.9).
  - 2.0-3.2: "count" (2.00): wash on row 6; chip `STATE count: 1` pops above the phone. Press 2.30, release 2.60 → 2 (phone and chip).
  - 3.2-end: "Text eronder" (3.28): wash on row 16. "meteen" (4.40): press, release 4.70 → 3. Hold.

## Frame 4 — Stijl bij indrukken

- id: 04-pressed
- duration: 10.31s
- transition_in: crossfade
- sfx: typing@3.5, pop@5.84, click-soft@6.96, pop@9.4
- voiceover: "De stijl kan ook afhangen van het indrukken. Geef dan een functie mee aan style. Die krijgt pressed mee: true zolang je vinger op de knop ligt."
- focal: the style function and the Pressable switching colour while the finger is down.
- code (final 32 rows, window 1-18; course example 2 with `"navy"` instead of `"red"` for `pressedTrue`). Starts with row 8 `style={styles.pressedFalse}` and row 9 absent:
  ```
  7              <Pressable
  8                  style={({pressed}) =>
  9                      pressed ? styles.pressedTrue : styles.pressedFalse}
  10                 onPress={() => console.log("Pressed!")}
  11             >
  12                 <Text style={{color: "white"}}>Press Me</Text>
  13             </Pressable>
  …
  22     pressedTrue: { backgroundColor: "navy", padding: 10, borderRadius: 5, },
  27     pressedFalse: { backgroundColor: "blue", padding: 10, borderRadius: 5, },
  ```
  The one-line style function of the course (88 characters) does not fit the panel, so it wraps after `=>`.
- phone: Pressable `blue`, padding 10, radius 5, white `Press Me`; `navy` while pressed.
- shots:
  - 0.0-3.3: panel and phone in. "stijl" (0.24): wash on `style={styles.pressedFalse}` (off 2.6).
  - 3.3-5.8: "functie" (3.44): `styles.pressedFalse}` fades, row 9 opens, `({pressed}) =>` typed (3.50-3.92), then row 9 typed (4.02-4.96, "style" 4.32). Wash on rows 8-9 when complete.
  - 5.8-6.9: "pressed" (5.84): wash narrows to `({pressed}) =>`; chip `pressed: false` pops above the phone.
  - 6.9-9.4: "true" (6.96): finger down; Pressable → `navy` (0.12s); chip value → `true`; wash on `styles.pressedTrue`. Hold while "zolang je vinger op de knop ligt".
  - 9.4-end: release: back to `blue`, chip → `false`, wash on `styles.pressedFalse`.

## Frame 5 — De volgorde van events

- id: 05-events
- duration: 10.47s
- transition_in: crossfade
- sfx: whoosh-short@0.8, click-soft@1.68, pop@4.85, pop@8.5
- voiceover: "Er zijn nog meer events. On press in komt zodra je begint te drukken, on press out wanneer je loslaat, en pas daarna on press."
- focal: the event log line in the phone building up `onPressIn → onPressOut → onPress`.
- code (37 rows; course events example without `delayLongPress`, which frame 6 types in):
  ```
  1  import {useState} from "react";
  2  import {StyleSheet, View, Pressable, Text} from "react-native";
  3  import Constants from "expo-constants";
  5  const Index = () => {
  6      const [events, setEvents] = useState<string[]>([]);
  8      const log = (event: string) => {
  9          setEvents(previous => [...previous, event]);
  10     }
  12     return (
  13         <View style={styles.container}>
  14             <Pressable
  15                 style={styles.pressable}
  16                 onPress={() => log("onPress")}
  17                 onPressIn={() => log("onPressIn")}
  18                 onPressOut={() => log("onPressOut")}
  19                 onLongPress={() => log("onLongPress")}
  20             >
  21                 <Text>Press Me</Text>
  22             </Pressable>
  23             <Text>{events.join(" → ")}</Text>
  24         </View>
  …  pressable: { backgroundColor: "lightblue", padding: 10, marginBottom: 10, }
  ```
- phone: Pressable (`lightblue`, padding 10, marginBottom 10), below it the log Text (14 dp, wraps).
- shots:
  - 0.0-1.6: panel and phone in (window 1-18). "events" (0.80): scroll 6 rows (window 7-24); wash on the four handler rows at 0.9.
  - 1.6-4.8: "On press in" (1.68): wash only on row 17; finger down; log `onPressIn` (1.72).
  - 4.8-8.4: "on press out" (4.80): finger up; wash row 18; log `→ onPressOut` (4.85).
  - 8.4-end: "on press" (8.48): wash row 16; log `→ onPress` (8.50). The voice puts onPress last ("pas daarna"); the log follows the voice.

## Frame 6 — onLongPress

- id: 06-longpress
- duration: 11.89s
- transition_in: crossfade
- sfx: click-soft@1.28, pop@2.8, pop@5.04, typing@7.22, click-soft@8.4, pop@10.4
- voiceover: "Hou je de knop lang ingedrukt, dan krijg je on long press, standaard na vijfhonderd milliseconden. Met delay long press kies je zelf hoe lang dat duurt."
- focal: a long press with a growing ring, then `delayLongPress={1000}` and a longer press.
- code: frame 5's code, window 7-24 from the start; row 16 `delayLongPress={1000}` is inserted and typed (course order: right after `style`). Final 38 rows.
- phone: as frame 5, log starts empty (fresh app). Real event order for a long press: `onPressIn → onLongPress → onPressOut` (no `onPress`).
- shots:
  - 0.0-1.3: panel and phone in.
  - 1.3-4.2: "ingedrukt" (1.28): finger down, log `onPressIn`; a thin blue ring grows around the finger (1.28 → 2.80). "on long press" (2.80): log `→ onLongPress`, wash on the onLongPress row. Release 3.70: log `→ onPressOut`.
  - 4.2-7.1: "vijfhonderd" (5.04): chip `LONG PRESS NA 500 ms` pops above the phone. Wash off 6.9.
  - 7.1-8.4: "delay long press" (7.12): row 16 opens, `delayLongPress={1000}` typed (7.22-7.96). "press" (8.04): `ts-mark` around row 16; chip value → `1000`.
  - 8.4-end: "kies je zelf hoe lang" (8.40): second long press, the ring grows over 2.0s (twice the first, 8.40 → 10.40): `→ onPressIn`, `→ onLongPress` at 10.40, release 10.90 `→ onPressOut`. Hold.
  - The ring durations are slowed down for readability (500 ms is drawn as 1.5s, 1000 ms as 2.0s); the chip carries the real values.
