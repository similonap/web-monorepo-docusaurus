# STORYBOARD — react-native-controlled-components

## Video direction

- **Sibling film.** Same series as `../react-native-flatlist`, `../react-native-textinput`, `../react-native-pressable` (TS light) and the other React Native clips. Every frame copies the `<style>` block of `../react-native-pressable/compositions/frames/03-count.html` verbatim (TS LIGHT + FLEX KIT + APP KIT), then frame-specific rules, and reuses its helpers (`washOn/washOff`, `swapVal`, `fadeSwap`, `typeLine`, `dpBox`, `placeOn`, `touchDown/touchUp`, `pop`, `scrollTo`, `intro`, `rowEls`, `lnEls`, `hideEls/showEls`) and its code-scrolling technique (see `../react-native-flatlist/compositions/frames/02-data.html`). Follow the "Video's" section of the repo `CLAUDE.md`.
- **Groot lesfilmpje** (12 scenes) with a summary as the last scene.
- **Course page:** `docs/react-native/controlled-components/index.md` ("Controlled Components"). The clip follows its examples in order: TextInput with `value` + `onChangeText`, two TextInputs on one state, numbers (`keyboardType`, a string in state), Button (not controlled), Switch, conditional rendering, ActivityIndicator, FlatList `refreshing`.
- **One core idea: the state decides what you see.** Its picture is the **state chip** above the phone (x 1494-1840, y 82-134, centred above the phone; `#F1F5F9`, hairline, radius 8, JetBrains Mono 24px, label in `#475569` and value in ink, e.g. `text: "Hallo"`). It changes at the same moment as the field (old value up and out, new in, 0.25s; while typing per character the value simply updates without the slide). Every frame with state has it.
- **Layout.** Frames 2 and 4-11: `.fx-panel` at x 80, y 150, 1290 × 730, title `app/index.tsx`, status `app/index.tsx · Controlled Components`; phone `.ph-body` at x 1494, y 150 (screen 316 × 650) with the app as real DOM (`.ph-app`, 1 dp = 1.4 px, 226 × 464 dp). Nothing below y 880. Frame 1 uses the hook layout of `../react-native-flatlist/compositions/frames/01-hook.html` (phone first centred at x −707, sliding to the standard place on the hero word). Frame 3 replaces the code panel by a cycle diagram; frame 12 has no phone (recap, like `../react-native-textinput/compositions/frames/06-samenvatting.html`).
- **The app.** The course examples use `<View style={{flexDirection: "column", flex: 1}}>` without paddingTop; draw the content starting right under the phone's status bar (24 dp). TextInput = `style={{height: 40, borderColor: "gray", borderWidth: 1}}`: a full-width field of 40 dp high with a 1 dp gray (#808080) border, text 14 dp black, caret `#2196F3` (as in the TextInput clip, `.rn-input`/`.rn-caret` of the APP KIT). Button = `.rn-btn` (Android look, `#2196F3`, uppercase title, full width). Text = 14 dp black.
- **Keyboard.** The on-screen keyboard of the TextInput clip (`.kb-wrap` > `.kb`, flat `#E2E8F0` keys on `#F8FAFC`; see `../react-native-textinput/compositions/frames/03-props.html` for the default and the numeric keyboard). It slides up when a field gets focus (yPercent 100 → 0, 0.4s power3.out). A key press: the key darkens (`#CBD5E1`) for 0.12s. Typing: one character per 0.12-0.16s, caret after the last character.
- **Touches** use `.ph-touch` as in the Pressable clip (in 0.15s, out 0.25s). Button presses dip the button (pressed colour `#1976D2`) while the finger is down. Every press gets a `click-soft` sfx (listed per frame).
- **Long code.** The panel shows 18 rows (24px / 34px rows, max ~84 characters per row). `.fx-code` is clipped to 612 px and rows outside the window are hidden at rest; scrolling moves `.fx-lns` and `.fx-lines` together (`y: -34 × n`, 0.6s power3.inOut). Line numbers use the `-ln` class naming (copy/paste support).
- **Code style.** As on the course page, with the series' adjustments: 4-space indent, `import {useState} from "react";` (no `React` default import), no `export default Index;`, typed states (`useState<string>("")`), `return (...);`. Rows longer than the panel are wrapped (noted per frame).
- **Red** (`#D14343`, thin and sparing) only in frames 5 and 6 for the letters that are not a number and the Alert; never at the same moment as a blue key moment.
- **Motion.** power3.out settles, washes on the named line/value, `ts-mark` around a key line, no bounce, holds stand still, every reveal on the word that names it (times below are seconds from the frame start = voice start). No sfx inside the frames (they are in `index.html`, from the `sfx:` lines below).

## Frame 1 — Hook

- id: 01-hook
- duration: 9.91s
- transition_in: cut
- sfx: pop@1.0, typing@1.92, whoosh-short@3.52, pop@5.2, pop@7.52
- voiceover: "Bij een controlled component zit de waarde van het invoerveld in state. De state beslist wat er in het veld staat, niet het veld zelf."
- focal: the field in the phone and the state chip above it, changing together; hero `Controlled`.
- code: no code panel.
- phone: a TextInput (empty) at the top of the app; the keyboard is up from 1.9.
- layout: hero `Controlled` (Inter 700 168px, left 80, top 280) with the blue hero bar; kicker `React Native`; statement `De state beslist wat er in het veld staat` (Inter 500 48px, left 80, top 520, max width 1300); under it at top 620 a mono line in `#475569`, 32px: `value={text}`.
- shots:
  - 0.1: phone fades in centred (x −707) with the empty field. 0.56 "controlled": kicker `React Native`.
  - 1.00 "component": state chip `text: ""` pops above the phone. 1.92 "waarde": keyboard slides up, the user types `Hallo` (2.0-2.8); the chip value follows letter by letter (`"H"`, `"Ha"`, … `"Hallo"`).
  - 3.52 "state": phone slides to the standard place (0.8s power3.inOut), the chip slides with it; hero `Controlled` lands; blue hero bar wipes in at 3.9.
  - 5.20 "beslist": statement fades in; a thin blue `.ph-mark` around the chip, then (at 6.48 "veld") around the field.
  - 7.52 "niet het veld zelf": the mono line `value={text}` fades in with a blue underline under `text`. Hold.

## Frame 2 — value en onChangeText

- id: 02-value
- duration: 9.99s
- transition_in: blur-crossfade
- sfx: typing@0.3, typing@2.6, typing@5.8, key-press@6.88, key-press@7.3, key-press@7.7
- voiceover: "Je maakt een state met use state en geeft die mee aan value. Bij elke toets roept on change text set text op, met de nieuwe tekst."
- focal: `const [text, setText] = useState<string>("");`, `value={text}` and `onChangeText={text => setText(text)}`.
- code (16 rows; window 1-16):
  ```
  1  import {useState} from "react";
  2  import {View, TextInput, Text} from "react-native";
  3
  4  const Index = () => {
  5      const [text, setText] = useState<string>("");
  6
  7      return (
  8          <View style={{flexDirection: "column", flex: 1}}>
  9              <TextInput
  10                 style={{height: 40, borderColor: "gray", borderWidth: 1}}
  11                 onChangeText={text => setText(text)}
  12                 value={text}
  13             />
  14         </View>
  15     );
  16 }
  ```
  At the start rows 5, 11 and 12 are absent (row 4 → row 6, row 10 → row 13). Row 5 types on at 0.3-1.6, row 12 at 2.6-3.2, row 11 at 5.8-6.8 (rows below slide down 34 px before each insert, 0.35s).
- phone: the empty field (no focus, no keyboard at the start). From 6.88 the field has focus, the keyboard is up and the user types `Hoi` (one key at 6.88, 7.3, 7.7).
- state chip: `text: ""` pops at 1.6 (when row 5 is typed); `"H"` at 6.95, `"Ho"` at 7.37, `"Hoi"` at 7.77.
- shots:
  - 0.0-0.3: kicker `value en onChangeText`, panel and phone in.
  - 0.76 "state": row 5 types on; 1.44 "use state": wash on `useState<string>("")`; 1.6 chip pops.
  - 2.68 "geeft": row 12 opens and `value={text}` types on (2.6-3.2). 3.52 "value": wash on row 12; a thin blue connector is not needed, instead `.ph-mark` around the field.
  - 4.96 "toets": washes off. 5.76 "on change text": row 11 opens and types on (5.8-6.8); wash on `onChangeText`.
  - 6.88 "set text": the keyboard slides up (6.6) and the first key `H` is pressed at 6.88; field shows `H`, chip `"H"`; wash on `setText(text)`. 7.30: `o`. 7.70: `i`.
  - 8.16 "nieuwe tekst": wash on the parameter `text =>` in row 11. Hold.

## Frame 3 — De kringloop

- id: 03-kringloop
- duration: 10.95s
- transition_in: crossfade
- sfx: key-press@1.76, pop@2.88, pop@4.72, pop@6.48, pop@9.36
- voiceover: "Zo gaat het telkens rond: je typt, de state verandert, de component rendert opnieuw en het veld toont de nieuwe waarde. Die kan je dus ook meteen tonen."
- focal: the cycle diagram with a dot going round; then `You typed: Hoi!` in the phone.
- layout: **no code panel**. In its place (x 80-1370, y 170-860) a cycle diagram of four nodes on a circle (centre x 725, y 500, radius ~250), each node a card (`#F1F5F9`, hairline, radius 12, ~330 × 96, title Inter 600 26px ink, mono line 24px `#475569`):
  - top: `je typt` / `onChangeText`
  - right: `de state verandert` / `setText("Hoi!")`
  - bottom: `render` / `Index()`
  - left: `het veld toont` / `value={text}`
  Thin `#94A3B8` arcs with arrow heads join them clockwise (drawn in SVG; each arc draws on with stroke-dashoffset when its target lights up). A small blue dot (14 px, `#3178C6`) travels along the arcs. The active node gets a blue border and blue tint `#EAF2FB` (previous node returns to neutral).
- phone: the field shows `Hoi` with the keyboard up (as frame 2 ended). The state chip shows `text: "Hoi"`.
- shots:
  - 0.0-0.3: kicker `De kringloop`, phone and chip in; the four cards fade in at 0.3 (stagger 0.08), arcs not yet drawn.
  - 1.08 "rond": all four arcs draw on (1.08-1.7, clockwise).
  - 1.76 "je typt": key `!` pressed in the phone; node `je typt` active; the dot starts at the top node.
  - 2.88 "state verandert": dot travels to the right node (0.5s); node active; chip `"Hoi"` → `"Hoi!"`.
  - 4.36 "component": dot travels to the bottom node; node active (`render`); a render tag `render #5` pops beside the bottom node at 4.72.
  - 6.08 "veld": dot travels to the left node; node active; at 6.48 "toont" the field in the phone shows `Hoi!` (before this moment the field still shows `Hoi`; the key press only changed the state).
  - 7.20 "nieuwe waarde": dot returns to the top; all nodes neutral; a thin `.ph-mark` on the field.
  - 8.08 "Die kan je": a mono code chip `<Text>You typed: {text}</Text>` pops in the centre of the circle (x 725, y 500, 24px). 9.36 "tonen": the Text `You typed: Hoi!` appears in the phone under the field (14 dp, y 8 → 0). Hold.

## Frame 4 — Twee velden, één state

- id: 04-twee-velden
- duration: 9.99s
- transition_in: crossfade
- sfx: typing@0.7, typing@3.4, typing@5.9
- voiceover: "Je kan ook twee velden aan dezelfde state binden. Typ je in het ene veld, dan verschijnt de tekst ook in het andere, want beide tonen de state."
- focal: the two `value={text}` rows and two fields that show the same text.
- code (21 rows; window 4-21 from the start):
  ```
  1  import {useState} from "react";
  2  import {View, TextInput} from "react-native";
  3
  4  const Index = () => {
  5      const [text, setText] = useState<string>("");
  6
  7      return (
  8          <View style={{flexDirection: "column", flex: 1}}>
  9              <TextInput
  10                 style={{height: 40, borderColor: "gray", borderWidth: 1}}
  11                 onChangeText={text => setText(text)}
  12                 value={text}
  13             />
  14             <TextInput
  15                 style={{height: 40, borderColor: "gray", borderWidth: 1}}
  16                 onChangeText={text => setText(text)}
  17                 value={text}
  18             />
  19         </View>
  20     );
  21 }
  ```
  At the start rows 14-18 are absent (row 13 → row 19). At 0.7 they open (rows below slide down 170 px, 0.35s) and type on quickly (0.7-2.2, all five rows, ~0.3s per row).
- phone: field 1 at the top, empty; field 2 appears under it at 2.2 (when the rows are typed). Keyboard up from 3.3.
- state chip: `text: ""` from the start.
- shots:
  - 0.0-0.3: kicker `Twee velden, één state`, panel, phone and chip in.
  - 0.64 "twee velden": rows 14-18 type on; field 2 appears at 2.2. 2.28 "dezelfde state": wash on row 12 and row 17 (`value={text}`), and on row 5.
  - 3.28 "Typ je": caret in field 1, keyboard up; 3.4-4.4 the user types `Hey` in field 1. Each character appears in field 1, in the chip **and in field 2** at the same time.
  - 4.88 "verschijnt": `.ph-mark` around field 2.
  - 5.88 "ook in het andere": the finger taps field 2 (caret moves there) and types ` jij` (5.9-6.7): both fields show `Hey jij`, chip `"Hey jij"`.
  - 7.36 "beide tonen de state": `ts-mark` around rows 12 and 17 (two marks); `.ph-mark` around both fields. Hold.

## Frame 5 — Getallen

- id: 05-getallen
- duration: 10.79s
- transition_in: push-slide
- sfx: typing@1.44, click-soft@3.1, whoosh-short@4.72, typing@8.0, pop@8.88
- voiceover: "Voor getallen zet je keyboard type op number pad. Maar niet elk Android toetsenbord heeft enkel cijfers, dus de gebruiker kan nog altijd letters typen."
- focal: `keyboardType="number-pad"`; the numeric keyboard, then a full keyboard on which a letter is typed (red).
- code (27 rows; window 13-27 visible from the start, i.e. scroll position 10 so rows 11-27 show; validateAndMultiply is above):
  ```
  1  import {useState} from "react";
  2  import {View, TextInput, Button, Alert} from "react-native";
  3
  4  const Index = () => {
  5      const [number, setNumber] = useState<string>("0");
  6
  7      const validateAndMultiply = () => {
  8          if (isNaN(Number(number))) {
  9              Alert.alert("This is not a number!");
  10             setNumber("0");
  11         } else {
  12             setNumber((parseInt(number) * 2).toString());
  13         }
  14     }
  15
  16     return (
  17         <View style={{flexDirection: "column", flex: 1}}>
  18             <TextInput
  19                 keyboardType="number-pad"
  20                 style={{height: 40, borderColor: "gray", borderWidth: 1}}
  21                 onChangeText={text => setNumber(text)}
  22                 value={number}
  23             />
  24             <Button title="Multiply" onPress={validateAndMultiply}/>
  25         </View>
  26     );
  27 }
  ```
  Window: rows 10-27 (scroll 9 rows) for the whole frame. Row 19 is absent at the start (row 18 → row 20) and types on at 1.44-2.4.
- phone: field showing `0`, button `MULTIPLY` under it. State chip `number: "0"`.
- shots:
  - 0.0-0.3: kicker `Getallen`, panel, phone and chip in.
  - 1.44 "keyboard type": row 19 opens and types on; 2.56 "number pad": wash on `"number-pad"`. 3.04: the finger taps the field (3.1); the numeric keyboard slides up (digits 1-9, 0; labels visible). The user types `12` at 3.4 and 3.6 (field `012`? no: first select-all is not shown; simply the field becomes `12`: the `0` is replaced at the first key), chip `"12"`.
  - 4.72 "Android toetsenbord": the keyboard swaps to a full letter keyboard (cross-fade 0.3s, labels on the letter keys this time, 3 rows of `#E2E8F0` keys) with a small mono tag above the keyboard `Android` (gray). Wash off.
  - 6.20 "enkel cijfers": `ts-mark` around row 19.
  - 8.04 "letters": key `a` pressed (8.0); field shows `12a` with the `a` in red `#D14343`; chip `"12a"` with the `a` in red. 8.88 "typen": a thin red underline under `a` in the field. Hold.

## Frame 6 — Een string in state

- id: 06-string
- duration: 11.40s
- transition_in: crossfade
- sfx: whoosh-short@0.2, click-soft@5.5, pop@5.8, click-soft@7.3, pop@8.24
- voiceover: "Bewaar daarom een string in state, en zet die pas om naar een getal als je hem nodig hebt. Is het geen getal, dan zet je de state terug op nul, en het veld volgt vanzelf."
- focal: `useState<string>("0")`, `parseInt(number)`, `isNaN(Number(number))` → `setNumber("0")`; the field that goes back to `0` by itself.
- code: frame 5's final code; window rows 10-27 at the start, scrolls to window 1-18 at 0.2 (0.6s).
- phone: as frame 5 ended (`12a`, the letter keyboard up). At 5.5 the keyboard slides down and the finger presses `MULTIPLY`. An Android **Alert** appears (scrim `rgba(0,0,0,0.32)` over the app; a white card 200 dp wide, radius 4 dp, padding 20 dp, message `This is not a number!` 14 dp ink, button `OK` right aligned in `#2196F3` 13 dp bold). The card has a thin red `#D14343` left border (2 dp) as the series' error accent.
- shots:
  - 1.08 "string": wash on row 5 `useState<string>("0")`; chip label `number: "12a"` gets a small tag `string`.
  - 2.40 "zet die pas om": wash moves to `parseInt(number)` in row 12. 3.44 "getal": `ts-mark` around `parseInt(number) * 2`.
  - 5.36 "geen getal": wash on row 8 `isNaN(Number(number))`; 5.5 the finger presses `MULTIPLY`; 5.8 the Alert pops (scale 0.96 → 1, 0.25s).
  - 6.88 "zet je de state": wash on row 10 `setNumber("0")`. 7.30: the finger taps `OK`; the Alert fades (0.2s).
  - 8.24 "nul": chip `"12a"` → `"0"` (slide swap). 9.04 "veld volgt vanzelf": the field `12a` → `0` (0.25s) and a thin `.ph-mark` around the field. Hold.

## Frame 7 — Button

- id: 07-button
- duration: 10.07s
- transition_in: push-slide
- sfx: pop@3.12, click-soft@4.9, click-soft@7.0, click-soft@8.4
- voiceover: "Een button is geen controlled component, want hij heeft geen waarde. Met on press pas je wel de state aan, bijvoorbeeld om een teller te verhogen."
- focal: `onPress={() => { setCounter(counter + 1); }}` and the counter that goes up; the struck-through `value` chip.
- code (16 rows; window 1-16):
  ```
  1  import {useState} from "react";
  2  import {View, Button, Text} from "react-native";
  3
  4  const Index = () => {
  5      const [counter, setCounter] = useState<number>(0);
  6
  7      return (
  8          <View style={{flexDirection: "column", flex: 1}}>
  9              <Text>Counter: {counter}</Text>
  10             <Button
  11                 title="Increase Counter"
  12                 onPress={() => { setCounter(counter + 1); }}
  13             />
  14         </View>
  15     );
  16 }
  ```
  (Rows 10-13: the course writes the Button on one row; wrapped because it does not fit.)
- phone: Text `Counter: 0` (14 dp) and the button `INCREASE COUNTER`. State chip `counter: 0`.
- shots:
  - 0.0-0.3: kicker `Button`, panel, phone and chip in.
  - 0.24 "button": wash on rows 10-13. 3.12 "geen waarde": a small grey chip `value` pops at the right end of row 13 (`/>`), is struck through and dimmed to 35% (0.3s later).
  - 4.72 "on press": wash moves to row 12 `onPress`. 4.90: finger presses the button; `Counter: 1`, chip `counter: 1`; wash on `setCounter(counter + 1)` at 6.24 "state".
  - 7.00: second press → `2`. 8.40 "verhogen": third press → `3`; `ts-mark` around row 12. Hold.

## Frame 8 — Switch

- id: 08-switch
- duration: 8.31s
- transition_in: crossfade
- sfx: typing@2.3, click-soft@6.0, click-soft@7.2
- voiceover: "Een switch heeft wel een waarde. Je geeft de state mee aan value, en on value change draait de state om."
- focal: `value={isEnabled}` and `onValueChange={() => setIsEnabled(previousState => !previousState)}`; the switch that flips.
- code (16 rows; window 1-16):
  ```
  1  import {useState} from "react";
  2  import {View, Switch, Text} from "react-native";
  3
  4  const Index = () => {
  5      const [isEnabled, setIsEnabled] = useState<boolean>(false);
  6
  7      return (
  8          <View style={{flexDirection: "column", flex: 1}}>
  9              <Switch
  10                 onValueChange={() => setIsEnabled(previousState => !previousState)}
  11                 value={isEnabled}
  12             />
  13             <Text>Switch is {isEnabled ? "On" : "Off"}</Text>
  14         </View>
  15     );
  16 }
  ```
  At the start rows 10 and 11 are absent (row 9 `<Switch` → row 12 `/>`). Row 11 types on at 2.3-2.9, row 10 at 4.6-5.9.
- phone: an Android Switch at the left of the app (track 34 × 14 dp, radius 7; thumb 20 dp circle with a soft shadow `0 1px 2px rgba(0,0,0,0.3)`; off: track `#B2B2B2`, thumb `#ECECEC`; on: track `rgba(33,150,243,0.5)`, thumb `#2196F3`; thumb slides 14 dp in 0.2s) and under it `Switch is Off` (14 dp). State chip `isEnabled: false`.
- shots:
  - 0.0-0.3: kicker `Switch`, panel, phone and chip in.
  - 1.44 "waarde": wash on row 5 `useState<boolean>(false)`.
  - 2.24 "geeft": row 11 opens and `value={isEnabled}` types on; 3.68 "value": wash on row 11; `.ph-mark` around the switch.
  - 4.88 "on value change": row 10 opens and types on (4.6-5.9); wash on `onValueChange` at 5.04.
  - 6.00 "draait": finger taps the switch: it slides on; chip `false` → `true`; text `Switch is On`; wash on `!previousState`.
  - 7.20: second tap: off again (`false`, `Switch is Off`). Hold.

## Frame 9 — Conditioneel renderen

- id: 09-conditioneel
- duration: 10.39s
- transition_in: crossfade
- sfx: pop@3.24, pop@4.88, click-soft@6.4, pop@8.64
- voiceover: "Met die state kan je ook conditioneel renderen, met een ternary operator of met twee ampersands. Staat de switch aan, dan toon je een ander beeld."
- focal: the ternary `{isEnabled ? … : …}` and the lamp in the phone that turns on.
- code (25 rows; window 4-21 from the start):
  ```
  1  import {useState} from "react";
  2  import {View, Switch, Image} from "react-native";
  3
  4  const lightOn = {uri: "https://raw.githubusercontent.com/Templarian/" +
  5      "MaterialDesign/master/svg/alarm-light.svg"};
  6  const lightOff = {uri: "https://raw.githubusercontent.com/Templarian/" +
  7      "MaterialDesign/master/svg/alarm-light-off.svg"};
  8
  9  const Index = () => {
  10     const [isEnabled, setIsEnabled] = useState<boolean>(false);
  11
  12     return (
  13         <View style={{flexDirection: "column", flex: 1}}>
  14             <Switch
  15                 onValueChange={() => setIsEnabled(previousState => !previousState)}
  16                 value={isEnabled}
  17             />
  18             {isEnabled
  19                 ? <Image style={{width: 60, height: 60}} source={lightOn}/>
  20                 : <Image style={{width: 60, height: 60}} source={lightOff}/>}
  21         </View>
  22     );
  23 }
  ```
  (The course puts both URLs inline; the video keeps them in two constants so the rows fit.)
- phone: the switch of frame 8 (off) and under it a 60 × 60 dp alarm-light icon, drawn in SVG in ink `#1E293B` like the Material Design icon: a dome (rounded top rectangle) on a flat base with three short rays above it. Off: outline only (2 dp stroke), no rays, with a diagonal slash. On: filled dome with the three rays. State chip `isEnabled: false`.
- the `&&` alternative: a small mono chip `{isEnabled && <Image …/>}` (grey chip, 22px) that pops at the right end of row 18 at 4.88.
- shots:
  - 0.0-0.3: kicker `Conditioneel renderen`, panel, phone and chip in (lamp off).
  - 1.56 "conditioneel": wash on rows 18-20. 3.24 "ternary operator": wash narrows to `?` (row 19) and `:` (row 20); small mono tags `true` next to row 19 and `false` next to row 20 (blue tint pills) pop at 3.24.
  - 4.88 "twee ampersands": the `&&` chip pops (stays dimmed to 60% after 6.0).
  - 6.32 "switch aan": finger taps the switch (6.4): on; chip `false` → `true`.
  - 8.00 "toon je": wash on row 19; the lamp swaps to the lit version (cross-fade 0.25s) at 8.64 "ander beeld"; `.ph-mark` around the lamp. Hold.

## Frame 10 — ActivityIndicator

- id: 10-activity
- duration: 10.71s
- transition_in: push-slide
- sfx: click-soft@3.3, pop@4.4, pop@7.76
- voiceover: "Ook een activity indicator hangt af van state. Voor het laden zet je loading op true, en als de data er is weer op false. De spinner volgt."
- focal: `animating={loading}`, `setLoading(true)` / `setLoading(false)`; the spinner that turns while loading.
- code (27 rows; window 8-25 from the start):
  ```
  1  import {useState} from "react";
  2  import {View, Button, Text, ActivityIndicator} from "react-native";
  3
  4  interface TimezoneInterface {
  5      datetime: string;
  6  }
  7
  8  const Index = () => {
  9      const [loading, setLoading] = useState<boolean>(false);
  10     const [result, setResult] = useState<string>("");
  11
  12     const loadData = async () => {
  13         setLoading(true);
  14         let result = await fetch("https://worldtimeapi.org/api/timezone/Europe/Brussels");
  15         let json: TimezoneInterface = await result.json();
  16         setResult(json.datetime);
  17         setLoading(false);
  18     }
  19
  20     return (
  21         <View style={{flexDirection: "column", flex: 1}}>
  22             <Button title="Load data" onPress={() => loadData()}/>
  23             <ActivityIndicator animating={loading}/>
  24             <Text>{result}</Text>
  25         </View>
  26     );
  27 }
  ```
  (Row 14 is 83 characters: check that it fits.)
- phone: button `LOAD DATA`, under it the ActivityIndicator spot (20 dp, centred; Android grey `#999999` ring arc of 270°, 2.5 dp stroke, as in `../react-native-flatlist/compositions/frames/06-footer.html`; invisible when not animating), under it the result Text (14 dp). State chip `loading: false`.
- shots:
  - 0.0-0.3: kicker `ActivityIndicator`, panel, phone and chip in.
  - 0.60 "activity indicator": wash on row 23. 2.24 "state": wash on `loading` in row 23 and on row 9.
  - 3.30: finger presses `LOAD DATA`. 4.40 "loading op true": wash on row 13 `setLoading(true)`; chip `false` → `true`; the spinner appears and turns (one turn per 0.8s, linear, finite tween until 7.76).
  - 6.32 "data": wash on rows 14-16; at 7.0 the result text `2026-11-15T14:32:08.123456+01:00` appears (it is 14 dp; let it wrap if needed).
  - 7.76 "false": wash on row 17; chip `true` → `false`; the spinner fades out (0.2s).
  - 8.76 "spinner volgt": `ts-mark` around `animating={loading}` in row 23. Hold.

## Frame 11 — FlatList refreshing

- id: 11-refreshing
- duration: 11.40s
- transition_in: crossfade
- sfx: whoosh-short@3.6, pop@5.7, pop@7.6, pop@9.68
- voiceover: "Een Flat List heeft refreshing en on refresh. Trek je de lijst naar beneden, dan zet je refreshing op true, laad je nieuwe data en zet je hem terug op false."
- focal: `refreshing={refreshing}` and `onRefresh={() => refreshColors()}`; pull to refresh in the phone.
- code (36 rows; window 14-31 from the start):
  ```
  1  import {useState} from "react";
  2  import {View, FlatList} from "react-native";
  3
  4  const generateRandomColors = (amount: number) => {
  5      let colors: string[] = [];
  6      for (let i = 0; i < amount; i++) {
  7          colors.push("#" + Math.floor(Math.random() * 16777215).toString(16));
  8      }
  9      return colors;
  10 }
  11
  12 const Index = () => {
  13     const [colors, setColors] = useState<string[]>(generateRandomColors(10));
  14     const [refreshing, setRefreshing] = useState<boolean>(false);
  15
  16     const refreshColors = async () => {
  17         setRefreshing(true);
  18         await new Promise(resolve => setTimeout(resolve, 2000));
  19         setColors(generateRandomColors(10));
  20         setRefreshing(false);
  21     }
  22
  23     return (
  24         <View style={{flexDirection: "column", flex: 1}}>
  25             <FlatList
  26                 data={colors}
  27                 renderItem={({item}) => (
  28                     <View style={{height: 100, backgroundColor: item}}/>
  29                 )}
  30                 keyExtractor={(item, index) => index.toString()}
  31                 refreshing={refreshing}
  32                 onRefresh={() => refreshColors()}
  33             />
  34         </View>
  35     );
  36 }
  ```
  Window rows 15-32 (scroll 14) for the whole frame. (The video code shows `Math.random()` because it is the course code; the animation itself is deterministic.)
- phone: a list of colour Views of 100 dp. Before: `#5B8DB8`, `#7FB3D5`, `#2E86AB`, `#A3C4DC`, `#3D5A80` (only the first 4-5 are visible). After refresh: `#4FA3A5`, `#88B04B`, `#6A7FDB`, `#9DC3C2`, `#2F6690`. Pull to refresh: the finger drags down at the top; the list moves down 60 dp (0.6s power3.out), the Android refresh circle (white disc 40 dp with a soft shadow, a `#2196F3` arc turning inside) slides in from the top and stays while refreshing; on false it scales out (0.2s) and the list returns to 0. State chip `refreshing: false`.
- shots:
  - 0.0-0.3: kicker `FlatList refreshing`, panel, phone and chip in.
  - 1.20 "refreshing": wash on row 31. 2.32 "on refresh": wash on row 32.
  - 3.52 "Trek": the finger drags down (3.6-4.4); the refresh circle appears.
  - 5.68 "refreshing op true": wash on row 17; chip `false` → `true` (5.7); the arc turns (one turn per 0.9s, finite, until 9.68).
  - 7.28 "nieuwe data": wash on row 19; the colours cross-fade to the new set at 7.6.
  - 9.68 "false": wash on row 20; chip `true` → `false`; the circle scales out and the list slides back up (0.4s). Hold.

## Frame 12 — Samenvatting

- id: 12-samenvatting
- duration: 12.21s
- transition_in: blur-crossfade
- sfx: pop@1.2, pop@4.08, pop@5.76, pop@7.92
- voiceover: "Samengevat: geef elk invoerveld zijn eigen state. Value toont de state, de change handler past hem aan, en zo beslist de state altijd wat je ziet."
- focal: three recap cards around the state; the closing statement.
- layout: no phone, no code panel (like `../react-native-textinput/compositions/frames/06-samenvatting.html`). Kicker `Samenvatting`. Three cards in a row (x 80-1840, each ~560 × 300, y 230, `#F1F5F9`, hairline, radius 12; a small Inter 600 uppercase label, a mono code line 30px, an Inter 500 sentence 30px):
  1. `ÉÉN STATE PER VELD` / `const [text, setText] = useState<string>("");` (may wrap to two lines) / `Elk invoerveld zijn eigen state`
  2. `VALUE` / `value={text}` / `toont de state` (with mono `value={isEnabled}` second line in `#475569`)
  3. `CHANGE HANDLER` / `onChangeText` and `onValueChange` (two lines) / `past de state aan`
  Under the cards at top 640: the statement `De state beslist altijd wat je ziet.` (Inter 700 64px, ink) with a blue underline under `state`.
- shots:
  - 0.0-0.3: kicker in.
  - 1.20 "geef": card 1 pops. 4.08 "Value": card 2 pops. 5.76 "change handler": card 3 pops. A thin `#94A3B8` arrow from card 3 back to card 1 (under the cards, y ~560, arching) draws on at 6.64 "past hem aan".
  - 7.92 "zo beslist": the statement fades up; blue underline under `state` wipes in at 8.64. Hold.
