# STORYBOARD — react-native-textinput

## Video direction

- **Sibling film.** Same series and style as `../react-native-flexbox` (TS light). Rules: the shared brief for the React Native core component clips (`BRIEF-AGENTS.md`), `CLAUDE.md` ("Video's") and `frame.md`. Course page: `docs/react-native/core-components/textinput.md`.
- **Every frame copies** the whole `<style>` block of `../react-native-flexbox/compositions/frames/03-direction.html` (TS LIGHT + FLEX KIT), then the APP KIT from the brief, then a small TEXTINPUT KIT: absolute code rows placed by slot (`initRows` / `place` / `scrollCode`, only rows inside the 18-row window are shown), the on-screen keyboard (`.kb-wrap` > `.kb`, flat `#E2E8F0` keys on `#F8FAFC`, labels only on `123`, `gereed` and the numeric keys) and the field helpers (`.tx-ph` placeholder under the caret, `.tx-vc` chars switched on one by one). Script helpers `washOn`, `washOff`, `swapVal`, `fadeSwap` and `typeLine` are copied from the flexbox frames.
- **Layout.** Code surface `.fx-panel` at x 80, y 150, 1290 × 730, title `app/index.tsx`, status `app/index.tsx · TextInput`. Phone `.ph-body` at x 1494, y 150 (screen 316 × 650), the app as DOM in dp (`.ph-app`, 1 dp = 1.4 px). Frame 1 has no code panel (hero + phone), frame 6 has no phone (recap cards).
- **App.** `container: {flex: 1, paddingTop: Constants.statusBarHeight}` = padding-top 24 dp. The field is `styles.input` = `margin: 12, fontSize: 18` (+ `borderWidth: 1` from frame 2 on, default borderColor black). Placeholder `"Enter your name"` in `#A1A1AA`, caret `#2196F3`. Presses use `.ph-touch` (0.15s in, 0.25s out). The keyboard slides up (yPercent 100 → 0, 0.4s power3.out) on focus and down on submit.
- **Code style** as on the course page: 4-space indent, `{StyleSheet, View, TextInput}` without inner spaces, styles one property per line with trailing comma, `useState<string>("")`. Inserted rows slide the rows below down (0.35s power3.out) and type on with a stepping caret; the phone changes when the typed value is complete.
- **Motion.** Calm `power3.out` settles, holds stand still, every reveal on its spoken word (times below are seconds from the frame start = voice start). No sfx inside frames; the `sfx:` lines are read by `build.py`.

## Frame 1 — Hook

- id: 01-hook
- duration: 9.83s
- transition_in: cut
- sfx: click-soft@0.64, typing@1.30, whoosh-short@3.12, pop@4.80, pop@7.44
- voiceover: "Wil je dat de gebruiker iets intypt, dan gebruik je een text input. Dat is het invoerveld van React Native, zoals een input element op het web."
- code: none.
- phone: bordered field with placeholder `Enter your name`; default keyboard; the user types `Andie`.
- layout: phone starts centred (x −707) and slides to the standard place at 3.12. Left: hero `TextInput` (Inter 700 168px) at (80, 300) with the blue bar under it; statement `Het invoerveld van React Native` (48px) at top 540; at top 640 `zoals` + chip `WEB <input>`.
- shots:
  - 0.1: phone fades in (y 20 → 0). "gebruiker" (0.64): tap on the field; caret on and keyboard slides up at 0.79.
  - "iets intypt" (1.30-2.02): `A n d i e` appear one per key, each key flashes.
  - "text input" (3.12): phone slides right (0.8s power3.inOut), hero in; kicker `React Native` at 3.3; bar wipes at 3.5.
  - "invoerveld" (4.80): statement. "zoals" (6.64): the word `zoals`; "input element" (7.44): the chip `WEB <input>`. Hold.

## Frame 2 — Placeholder en rand

- id: 02-placeholder
- duration: 10.63s
- transition_in: crossfade
- sfx: typing@0.34, pop@1.21, pop@6.40, whoosh-short@7.44, typing@8.82
- voiceover: "Met placeholder toon je een hint zolang het veld leeg is. Let op: een text input heeft standaard geen rand, die geef je zelf met border width."
- code: base file (23 rows) with `<TextInput style={styles.input}/>` and `input: {margin: 12, fontSize: 18}`; row 8 `placeholder="Enter your name"` and row 23 `borderWidth: 1,` are inserted (final 25 rows, scrolled 7 rows at the end).
- phone: an empty, borderless field (invisible); placeholder appears; a faint dashed outline (`#94A3B8`) shows where the field is; then a real 1 dp black border.
- shots:
  - 0.1-0.8: kicker `Placeholder en rand`, panel and phone in.
  - "placeholder" (0.24): row 8 slides in and types (0.34-1.21); the placeholder fades in in the phone at 1.21. "hint" (1.52): wash on row 8 until 3.5.
  - "text input" (4.80): wash on `<TextInput` until 7.2. "geen rand" (6.40): dashed outline around the field.
  - "die geef je zelf" (7.44): the code scrolls 7 rows (0.6s) to the styles.
  - "border width" (8.72): row 23 slides in and types (8.82-9.20); at 9.20 the border turns black, the dashed outline fades, wash on the row. Hold.

## Frame 3 — Toetsenbord en wachtwoord

- id: 03-props
- duration: 10.79s
- transition_in: crossfade
- sfx: typing@0.40, click-soft@1.60, whoosh-short@3.84, key-press@4.40, typing@5.70, pop@6.80
- voiceover: "Keyboard type kiest welk toetsenbord er verschijnt, bijvoorbeeld enkel cijfers. Secure text entry verbergt wat je typt, handig voor een wachtwoord."
- code: rows 9 `keyboardType="default"` (value then swaps to `"numeric"`) and 10 `secureTextEntry={true}` are inserted into the TextInput; 18 visible rows, no scroll.
- phone: bordered field; default keyboard; numeric keyboard (1-9, `,`, 0, ⌫); digits `4821`; then `••••`.
- shots:
  - 0.1-0.8: kicker `Toetsenbord en wachtwoord`, panel and phone in.
  - "Keyboard type" (0.30): row 9 slides in and types `keyboardType="default"` (0.40-0.96); wash at 1.1.
  - "toetsenbord" (1.60): tap on the field; caret on and the default keyboard slides up at 1.75.
  - "enkel cijfers" (3.84): `"default"` → `"numeric"` (swapVal) and the keyboard crossfades to the numeric one. Digits `4 8 2 1` typed at 4.40 / 4.65 / 4.90 / 5.15 with key flashes.
  - "Secure text entry" (5.44): wash off; row 10 slides in at 5.6 and types (5.70-6.80). "verbergt" (6.80): the digits become `••••`, wash on row 10. Hold.

## Frame 4 — onChangeText

- id: 04-onchangetext
- duration: 11.67s
- transition_in: crossfade
- sfx: click-soft@1.04, typing@2.78, key-press@5.30, typing@7.62, typing@9.20, key-press@10.20
- voiceover: "Om te weten wat er getypt wordt, gebruik je on change text. Die functie krijgt bij elke toets de nieuwe tekst mee. Bewaar je die in state, dan kan je ze meteen tonen."
- code: imports `{useState}` from `"react"` and `{StyleSheet, Text, View, TextInput}`; inserted rows: `onChangeText={(text) => setName(text)}`, `const [name, setName] = useState<string>("");` (+ blank row) and `<Text style={styles.text}>Hallo {name}</Text>` (final 18 visible rows). A blue pill `text: "…"` at the end of the onChangeText row shows the argument per key.
- phone: bordered field, keyboard, the user types `Andie`; under the field `Hallo {name}` (Text, `marginHorizontal: 12, fontSize: 18`).
- shots:
  - 0.1-0.8: kicker `onChangeText`, panel and phone in.
  - "getypt" (1.04): tap on the field; caret and keyboard at 1.19.
  - "on change text" (2.68): row slides in and types (2.78-3.54). "Die functie" (4.24): wash on the row.
  - "bij elke toets … nieuwe tekst" (5.30 / 5.70 / 6.30): `A`, `n`, `d` typed; the pill appears at 5.30 and updates with the field (`"A"`, `"An"`, `"And"`).
  - "Bewaar je die in state" (7.52): state row + blank row slide in, typed 7.62-8.34; "state" (8.40): wash.
  - "dan kan je ze meteen tonen" (9.12): Text row slides in and types (9.20-9.74); at 9.74 `Hallo And` shows in the phone, wash on the row. `i` (10.20) and `e` (10.50) update field, pill and Text together. Hold.

## Frame 5 — Meer events

- id: 05-events
- duration: 9.83s
- transition_in: crossfade
- sfx: typing@0.30, pop@1.68, click-soft@4.00, pop@4.30, typing@5.62, click-soft@7.64
- voiceover: "On submit editing wordt opgeroepen als de gebruiker op enter of gereed drukt. On focus komt zodra het veld geselecteerd wordt."
- code: inserted rows `onSubmitEditing={(event) => console.log(event.nativeEvent.text)}` and `onFocus={() => console.log("Focused")}`. A small `Terminal` panel (ts-mini, 560 × 150) inside the code surface at bottom right (x 760-1320, y 636-786) where Expo prints the logs: `LOG  Andie`, `LOG  Focused`.
- phone: field focused with `Andie`, keyboard up; on `gereed` the keyboard closes; a tap on the field focuses it again.
- shots:
  - 0.1-0.8: kicker `Events`, panel and phone in.
  - "On submit editing" (0.20): row slides in and types (0.30-1.20), wash. "opgeroepen" (1.68): the terminal fades in (empty).
  - "gereed" (4.00): press on the `gereed` key (flash); 4.30: `LOG  Andie` in the terminal, caret off, keyboard slides down (4.35).
  - "On focus" (5.52): row slides in and types (5.62-6.38), wash.
  - "geselecteerd" (7.64): tap on the field; 7.79: caret on, keyboard up, `LOG  Focused`. Hold.

## Frame 6 — Samenvatting

- id: 06-samenvatting
- duration: 8.29s
- transition_in: blur-crossfade
- sfx: pop@0.80, pop@3.88, typing@4.10, pop@4.72, pop@5.76
- voiceover: "Zo is een text input de basis van elk formulier: een zoekveld, een login of een chatbericht."
- code: none. phone: none.
- layout: kicker `Samengevat`; hero `TextInput` (168px) at (80, 170) with blue bar; statement `De basis van elk formulier` at top 392; three columns from top 520 (x 80 / 680 / 1280, 560 wide): label + white card (289 high) with a small form drawn in px:
  - `ZOEKVELD`: round field, placeholder `Zoek een les`, typed `flexbox`, two result rows.
  - `LOGIN`: `student@school.be`, password dots, blue `INLOGGEN` button.
  - `CHATBERICHT`: a grey bubble `Kom je straks naar de les?` and a round field where `Ja, tot zo!` is typed.
- shots:
  - 0.1: kicker. "text input" (0.80): hero; bar at 1.1. "basis" (1.88): statement.
  - "zoekveld" (3.88): column 1 in (y 16 → 0); `flexbox` typed 4.10-4.49; results at 4.49.
  - "login" (4.72): column 2 in; dots typed 4.95-5.35.
  - "chatbericht" (5.76): column 3 in; `Ja, tot zo!` typed 6.00-6.60. Hold.
