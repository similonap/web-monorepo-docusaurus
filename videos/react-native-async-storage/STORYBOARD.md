# STORYBOARD — react-native-async-storage

## Video direction

- **Sibling film.** Same series as `../react-native-controlled-components`, `../react-native-flatlist`, `../react-native-pressable` (TS light). Every frame copies the `<style>` block of `../react-native-controlled-components/compositions/frames/07-button.html` verbatim (TS LIGHT + FLEX KIT + APP KIT), then the STORE KIT below, then frame-specific rules, and reuses its helpers (`washOn/washOff`, `swapVal`, `fadeSwap`, `typeLine`, `placeOn`, `touchDown/touchUp`, `pop`, `scrollTo`, `intro`, `rowEls`, `lnEls`, `hideEls/showEls`) and the code-scrolling technique. Follow the "Video's" section of the repo `CLAUDE.md`.
- **Groot lesfilmpje** (13 scenes) with a summary as the last scene.
- **Course page:** `docs/react-native/async-storage/index.md` ("AsyncStorage"). The clip follows its sections in order: key-value + async, string, number, object, array of objects, removeItem/clear/getAllKeys, error handling, state in AsyncStorage (load, save, the loading flag), loading state.
- **One core picture: the storage table.** Under the code panel sits the `AsyncStorage` table (STORE KIT, x 80, y 700, 1290 × 176): a title strip, a column header `KEY` / `VALUE` and up to three rows (mono 22px). Values are always shown as string literals with quotes (`"John Doe"`, `"42"`, `"{"name":…}"`) in the string colour, so it is visible that AsyncStorage only stores strings. Every `setItem`, `removeItem` and `clear` changes the table at the same moment as the tap that causes it. Every frame except 13 has the table (frame 1 too).
  - row in: opacity 0 → 1 and y 8 → 0 (0.3s power3.out) plus a blue wash on the row (`.st-wash` 0 → 1 → 0 over 0.8s).
  - value change: the old value slides up and out, the new one slides in (0.25s), plus the wash.
  - row out: opacity → 0 (0.3s); rows below slide up 36 px (0.35s power3.inOut).
  - "read" (getItem): a thin blue 2px outline on the row for 0.8s.
  - empty table: muted text `leeg` in the first row position.
  - a short mono note can appear right in the title strip (`.st-note`, e.g. `getItem("age") → null`).
- **Layout.** Frames 3-12: `.fx-panel` at x 80, y 150, **1290 × 520** (shorter than the siblings, to make room for the table), title `app/index.tsx`, status `app/index.tsx · AsyncStorage`. The code window shows **11 rows** (24px / 34px rows); rows outside the window are hidden at rest; scrolling moves `.fx-lns` and `.fx-lines` together (`y: -34 × n`, 0.6s power3.inOut). Phone `.ph-body` at x 1494, y 150 (screen 316 × 650) with the app as real DOM (`.ph-app`, 1 dp = 1.4 px, 226 × 464 dp). Nothing below y 880. Frame 1 uses the hook layout of `../react-native-controlled-components/compositions/frames/01-hook.html`. Frame 2 has no phone (two return-type cards in the right column). Frame 13 has no phone, no panel, no table.
- **The app.** As on the course page: `<View>` without styling, content right under the phone's status bar (24 dp): `<Text>AsyncStorage</Text>` (14 dp black) and Android buttons (`.rn-btn`, `#2196F3`, uppercase, full width, stacked without gap, as `Button`s in a plain View). Alerts: the Android Alert of `../react-native-controlled-components/compositions/frames/06-string.html` (`/* Android Alert (dp) */`), message only + `OK`, or title + message where noted. Spinner: the ActivityIndicator of `../react-native-controlled-components/compositions/frames/10-activity.html`.
- **App relaunch** (frames 1, 9, 11, 12): the app content scales 1 → 0.94 and fades out (0.3s power2.in), then the new content fades in from scale 0.94 → 1 (0.35s power3.out). The table does not change during a relaunch: that is the point.
- **Touches** use `.ph-touch` as in the Pressable clip (in 0.15s, out 0.25s). Button presses dip the button (`#1976D2`) while the finger is down. Every tap gets a `click-soft` sfx (listed per frame).
- **State chip** (frames 9-12, as in the controlled-components clip): above the phone (x 1494-1840, y 82-134, centred), `state` key label + `counter: 5`.
- **Code style.** As on the course page, with the series' adjustments: 4-space indent, no `import React`, no `export default Index;`, `return (...);`. Examples are shortened to the rows the scene explains (noted per frame). Line numbers use the `-ln` class naming (copy/paste support).
- **Red** (`#D14343`, thin and sparing) only in frame 8 (invalid JSON, the error) and frame 11 (the overwritten value); never at the same moment as a blue key moment.
- **Motion.** power3.out settles, washes on the named row/token, `ts-mark` around a key line, no bounce, holds stand still, every reveal on the word that names it (times below are seconds from the frame start = voice start). No sfx inside the frames (they are in `index.html`, from the `sfx:` lines below).

### STORE KIT (copy verbatim after the APP KIT; check that `--ts-mono` / `--ts-sans` are the token names used in the copied block and adapt if they differ)

```css
/* STORE KIT: the AsyncStorage table */
.st-card { position: absolute; left: 80px; top: 700px; width: 1290px; height: 176px; box-sizing: border-box; background: #FFFFFF; border: 1px solid var(--ts-hairline); border-radius: 12px; box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06); overflow: hidden; }
.st-title { position: absolute; left: 0; top: 0; right: 0; height: 40px; box-sizing: border-box; padding: 0 20px; display: flex; align-items: center; gap: 12px; background: var(--ts-panel); border-bottom: 1px solid var(--ts-hairline); }
.st-sq { width: 12px; height: 12px; border-radius: 3px; background: var(--ts-blue); flex: none; }
.st-name { font-family: var(--ts-mono); font-size: 18px; color: var(--ts-ink-soft); }
.st-sub { font-family: var(--ts-sans); font-weight: 500; font-size: 16px; color: var(--ts-label); }
.st-note { margin-left: auto; font-family: var(--ts-mono); font-size: 18px; color: var(--ts-ink-soft); opacity: 0; }
.st-head { position: absolute; left: 0; right: 0; top: 40px; height: 28px; display: flex; align-items: center; border-bottom: 1px solid var(--ts-hairline); font-family: var(--ts-sans); font-weight: 600; font-size: 14px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ts-label); }
.st-k { width: 300px; padding-left: 20px; box-sizing: border-box; flex: none; }
.st-rows { position: absolute; left: 0; right: 0; top: 68px; height: 108px; }
.st-row { position: absolute; left: 0; right: 0; height: 36px; display: flex; align-items: center; font-family: var(--ts-mono); font-size: 22px; white-space: nowrap; }
.st-row .st-k { color: var(--ts-ink); position: relative; }
.st-row .st-v { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; padding-right: 20px; color: var(--ts-code-str); position: relative; }
.st-wash { position: absolute; inset: 0; background: rgba(49, 120, 198, 0.12); opacity: 0; }
.st-read { position: absolute; inset: 2px 8px; border: 2px solid var(--ts-blue); border-radius: 6px; opacity: 0; }
.st-empty { position: absolute; left: 20px; top: 0; height: 36px; display: flex; align-items: center; font-family: var(--ts-sans); font-weight: 500; font-size: 20px; color: var(--ts-muted); }
```

Markup: `<div class="st-card" id="fNN-store"><div class="st-title"><span class="st-sq"></span><span class="st-name">AsyncStorage</span><span class="st-sub">op de telefoon</span><span class="st-note" id="fNN-note"></span></div><div class="st-head"><span class="st-k">key</span><span>value</span></div><div class="st-rows">…rows (top 0 / 36 / 72)…</div></div>`; each row `<div class="st-row" id="fNN-r-<key>" style="top: 0px"><span class="st-wash"></span><span class="st-read"></span><span class="st-k">name</span><span class="st-v">"John Doe"</span></div>`.

## Frame 1 — Hook

- id: 01-hook
- duration: 9.11s
- transition_in: cut
- sfx: pop@0.72, click-soft@1.28, whoosh-short@2.6, click-soft@4.64, pop@6.04
- voiceover: "Met async storage bewaar je data op de telefoon. Sluit je de app en open je ze opnieuw, dan is die data er nog altijd."
- focal: the counter in the phone and the table row `counter` that survives closing the app; hero `AsyncStorage`.
- code: no code panel.
- phone: the counter app: `AsyncStorage`, `Counter: 2`, button `INCREMENT`.
- layout: hook layout of `../react-native-controlled-components/compositions/frames/01-hook.html` (phone first centred, shifted x −707, then sliding to the standard place). Hero `AsyncStorage` (Inter 700 168px, left 80, top 280) with the blue hero bar; kicker `React Native`; statement `Data die blijft als je de app sluit` (Inter 500 48px, left 80, top 520). The table at its standard place (x 80, y 700).
- shots:
  - 0.1: phone fades in centred with the counter app. 0.24 "async": kicker `React Native`.
  - 0.72 "storage": the table fades in with one row `counter | "2"`.
  - 1.28 "bewaar": tap `INCREMENT`: `Counter: 3`; at 1.4 the table value `"2"` → `"3"` with a wash.
  - 2.60 "telefoon": phone slides to the standard place (0.8s power3.inOut); hero `AsyncStorage` lands at 2.9; blue hero bar wipes in at 3.2.
  - 3.52 "Sluit": the app closes: app content scales down and fades (0.3s) to a simple launcher (screen `#F1F5F9`, a grid of 3 × 3 rounded squares of 44 dp in `#CBD5E1`, the middle one blue `#3178C6` = this app). The table stays unchanged; at 4.0 "app" a thin blue `.st-read` outline on the row.
  - 4.64 "open": the finger taps the blue icon; the app opens again (relaunch-in) and shows `Counter: 3`.
  - 6.04 "dan is die data er nog altijd": statement fades in; at 6.68 "data" a thin blue `.ph-mark` around `Counter: 3` and a wash on the table row. Hold.

## Frame 2 — Key-value, maar asynchroon

- id: 02-key-value
- duration: 11.91s
- transition_in: blur-crossfade
- sfx: typing@0.64, pop@3.24, typing@4.8, pop@6.36, pop@7.96
- voiceover: "Het lijkt op local storage in de browser: je bewaart een waarde onder een key. Maar elke functie is asynchroon en geeft een promise terug, dus je gebruikt telkens await."
- focal: `localStorage.setItem` next to `await AsyncStorage.setItem`; the return type `Promise<string | null>`.
- code (7 rows, panel title `vergelijking.ts`, status `vergelijking.ts · AsyncStorage`):
  ```
  1  // in de browser
  2  localStorage.setItem("name", "John Doe");
  3  const name = localStorage.getItem("name");
  4
  5  // in React Native
  6  await AsyncStorage.setItem("name", "John Doe");
  7  const name = await AsyncStorage.getItem("name");
  ```
  At the start the panel is empty; rows 1-3 type on at 0.64-2.0, rows 5-7 at 4.8-6.3.
- right column (no phone): two cards (x 1450-1840, `#F1F5F9`, hairline, radius 12, padding 24): card A at top 230: mono 20px `#475569` `localStorage.getItem()`, under it mono 28px `string | null` (type colour). Card B at top 430: `AsyncStorage.getItem()` / `Promise<string | null>`.
- table: empty (`leeg`) at the start.
- shots:
  - 0.0-0.3: kicker `Key-value, maar asynchroon`, panel and table in.
  - 0.64 "local storage": rows 1-3 type on.
  - 2.72 "bewaart": wash on row 2. 3.24 "waarde": the table row `name | "John Doe"` pops in. 4.24 "key": wash on `"name"` in row 2 and on the key cell `name`.
  - 4.80 "Maar": rows 5-7 type on (4.8-6.3).
  - 6.36 "asynchroon": card A pops.
  - 7.96 "promise": card B pops with a blue border; wash on `Promise` in it.
  - 9.72 "telkens await": `ts-mark` around `await` in rows 6 and 7 (two small marks) and a wash on both. Hold.

## Frame 3 — Een string

- id: 03-string
- duration: 10.07s
- transition_in: crossfade
- sfx: click-soft@0.9, pop@1.0, click-soft@4.9, pop@5.1, click-soft@5.9, pop@8.56
- voiceover: "Met set item sla je een string op onder een key. Met get item haal je hem terug op. Bestaat die key nog niet, dan krijg je null."
- focal: `setItem("name", "John Doe")`, `getItem("name")`, `value !== null`.
- code (14 rows; window 1-11, scrolls to 4-14 at 3.68):
  ```
  1  import AsyncStorage from "@react-native-async-storage/async-storage";
  2
  3  const storeData = async () => {
  4      await AsyncStorage.setItem("name", "John Doe");
  5  };
  6
  7  const getData = async () => {
  8      const value: string | null = await AsyncStorage.getItem("name");
  9      if (value !== null) {
  10         Alert.alert(value);
  11     } else {
  12         Alert.alert("No Data found");
  13     }
  14 };
  ```
- phone: `AsyncStorage`, buttons `STORE DATA`, `LOAD DATA`.
- table: empty at the start.
- shots:
  - 0.0-0.3: kicker `Een string`, panel, phone, table in.
  - 0.16 "set item": wash on `setItem` in row 4. 0.82 "sla": the finger taps `STORE DATA` (0.9); 1.0 the row `name | "John Doe"` pops in.
  - 1.68 "string": wash on `"John Doe"` in row 4 and on the value cell. 2.96 "key": wash moves to `"name"` and the key cell.
  - 3.68 "get item": the code scrolls to rows 4-14; wash on `getItem("name")` in row 8. 4.88 "haal": tap `LOAD DATA` (4.9); `.st-read` on the row; 5.1 Alert `John Doe` with `OK`. 5.9: tap `OK`, the Alert fades.
  - 6.32 "Bestaat": washes off. 6.88 "key": the table note shows `getItem("age")`. 8.56 "null": the note continues `→ null` (`null` in the fn/number colour `#9A5B13`); wash on `value !== null` (row 9) and on `"No Data found"` (row 12). Hold.

## Frame 4 — Een getal

- id: 04-getal
- duration: 9.43s
- transition_in: crossfade
- sfx: click-soft@5.0, pop@5.12, click-soft@6.5, pop@6.7, pop@7.76
- voiceover: "Async storage bewaart enkel strings. Een getal zet je dus eerst om met to string, en bij het uitlezen terug met Number."
- focal: `randomNumber.toString()`, `Number(value)` and the table value `"42"` with quotes.
- code (12 rows; window 1-11, scrolls to 2-12 at 6.36). Shortened: the `else` branch is left out.
  ```
  1  const storeData = async () => {
  2      const randomNumber: number = Math.floor(Math.random() * 100);
  3      await AsyncStorage.setItem("randomNumber", randomNumber.toString());
  4  };
  5
  6  const getData = async () => {
  7      const value: string | null = await AsyncStorage.getItem("randomNumber");
  8      if (value !== null) {
  9          const randomNumber: number = Number(value);
  10         Alert.alert(`The number is ${randomNumber}`);
  11     }
  12 };
  ```
- phone: `AsyncStorage`, `STORE DATA`, `LOAD DATA`. The random number in the video is always 42.
- table: row `name | "John Doe"` from the start.
- shots:
  - 0.0-0.3: kicker `Een getal`, panel, phone, table in.
  - 1.44 "enkel strings": wash on the value cell `"John Doe"`, with the two quote characters briefly in blue.
  - 2.88 "getal": wash on row 2 (`randomNumber: number`).
  - 4.88 "to string": wash on `randomNumber.toString()`; tap `STORE DATA` (5.0); 5.12 row 2 `randomNumber | "42"` pops in; the note shows `42 → "42"`.
  - 6.36 "uitlezen": scroll to rows 2-12; tap `LOAD DATA` (6.5); `.st-read` on row 2; 6.7 Alert `The number is 42`.
  - 7.76 "Number": wash on `Number(value)` (row 9); the note changes to `"42" → 42` (fadeSwap). Hold (the Alert stays).

## Frame 5 — Een object

- id: 05-object
- duration: 12.63s
- transition_in: push-slide
- sfx: click-soft@1.8, pop@2.48, click-soft@5.0, pop@5.28, click-soft@6.2, pop@7.92
- voiceover: "Een object zet je om met JSON punt stringify, en terug met JSON punt parse. Let op: parse geeft any terug. TypeScript controleert dus niet wat erin zit."
- focal: `JSON.stringify(student)`, `JSON.parse(value)` with the hint `any`, and the JSON string in the table.
- code (20 rows; window 2-12 at the start, scrolls to 10-20 at 3.76):
  ```
  1  interface Student {
  2      name: string;
  3      age: number;
  4  }
  5
  6  const storeData = async () => {
  7      const student: Student = {
  8          name: "John Doe",
  9          age: Math.floor(Math.random() * 10) + 18
  10     };
  11     await AsyncStorage.setItem("randomStudent", JSON.stringify(student));
  12 };
  13
  14 const getData = async () => {
  15     const value: string | null = await AsyncStorage.getItem("randomStudent");
  16     if (value !== null) {
  17         const student: Student = JSON.parse(value);
  18         Alert.alert(`${student.name} is ${student.age} years old`);
  19     }
  20 };
  ```
  The `else` branch is left out. The age in the video is always 21.
- phone: `AsyncStorage`, `STORE DATA`, `LOAD DATA`.
- table: rows `name | "John Doe"`, `randomNumber | "42"` from the start.
- shots:
  - 0.0-0.3: kicker `Een object`, panel, phone, table in.
  - 0.16 "object": wash on rows 7-10.
  - 1.60 "JSON punt stringify": wash on `JSON.stringify(student)` (row 11); tap `STORE DATA` (1.8); 2.48 row 3 `randomStudent | "{"name":"John Doe","age":21}"` pops in.
  - 3.76 "terug": scroll to rows 10-20. 4.64 "JSON punt parse": wash on `JSON.parse(value)` (row 17); tap `LOAD DATA` (5.0); `.st-read` on row 3; 5.28 Alert `John Doe is 21 years old`; 6.2 tap `OK`, the Alert fades.
  - 7.92 "any": an inlay hint pill `: any` (mono 20px, `#475569` on `#F1F5F9`, hairline, radius 6) pops right after `JSON.parse(value)` in row 17 (where the `;` is, pushing nothing: it floats over the end of the row).
  - 8.96 "TypeScript": wash on `Student` in row 17. 10.40 "niet": a thin dashed `#94A3B8` line joins `Student` and the `: any` pill, and a muted mono comment `// geen controle` appears after the pill. Hold.

## Frame 6 — Een array van objecten

- id: 06-array
- duration: 12.15s
- transition_in: crossfade
- sfx: click-soft@2.4, pop@6.72
- voiceover: "Wil je iets aan een array toevoegen, dan haal je eerst de hele array op, voeg je het element toe en sla je alles opnieuw op. Is er nog niets, dan begin je met een lege array."
- focal: `await getStudents()`, `[...students, student]`, `return [];`.
- code (16 rows; window 6-16 at the start, scrolls to 1-11 at 8.16). Row 15 is 84 characters: use 23px code in this frame if it does not fit.
  ```
  1  const getStudents = async (): Promise<Student[]> => {
  2      const value: string | null = await AsyncStorage.getItem("students");
  3      if (value !== null) {
  4          return JSON.parse(value);
  5      }
  6      return [];
  7  };
  8
  9  const addStudent = async () => {
  10     const students: Student[] = await getStudents();
  11     const student: Student = {
  12         name: `Student ${students.length + 1}`,
  13         age: Math.floor(Math.random() * 10) + 18
  14     };
  15     await AsyncStorage.setItem("students", JSON.stringify([...students, student]));
  16 };
  ```
- phone: `AsyncStorage`, `ADD STUDENT`, `SHOW STUDENTS`.
- table: one row `students | "[{"name":"Student 1","age":23}]"`.
- shots:
  - 0.0-0.3: kicker `Een array van objecten`, panel, phone, table in.
  - 1.08 "array": wash on the table row.
  - 2.36 "haal": tap `ADD STUDENT` (2.4); wash on `await getStudents()` (row 10); 2.8 `.st-read` on the row (held until 4.0).
  - 4.60 "voeg": wash on rows 11-14, then (5.28 "element") on `[...students, student]` in row 15.
  - 6.28 "sla": wash on `setItem("students", …)` in row 15. 6.72 "alles": the table value changes to `"[{"name":"Student 1","age":23},{"name":"Student 2","age":19}]"` (value change + wash).
  - 8.16 "Is er nog niets": washes off; scroll to rows 1-11; wash on rows 3-5. 10.24 "lege array": wash on row 6 and a `ts-mark` around `return [];`. Hold.

## Frame 7 — Keys en verwijderen

- id: 07-keys
- duration: 10.39s
- transition_in: crossfade
- sfx: click-soft@1.2, pop@1.4, click-soft@3.4, click-soft@5.5, click-soft@7.7, pop@8.48
- voiceover: "Get all keys geeft een lijst van alle keys van je app. Met remove item verwijder je één key, en clear maakt alles leeg."
- focal: `getAllKeys()`, `removeItem("name")`, `clear()` and the rows leaving the table.
- code (12 rows; window 1-11, scrolls one row at 7.28). Shortened: the `keys.length` check is left out.
  ```
  1  const showKeys = async () => {
  2      const keys = await AsyncStorage.getAllKeys();
  3      Alert.alert(`Keys: ${keys.join(", ")}`);
  4  };
  5
  6  const removeName = async () => {
  7      await AsyncStorage.removeItem("name");
  8  };
  9
  10 const clearAll = async () => {
  11     await AsyncStorage.clear();
  12 };
  ```
- phone: `AsyncStorage`, `SHOW KEYS`, `REMOVE NAME`, `CLEAR ALL`.
- table: rows `name | "John Doe"`, `age | "21"`.
- shots:
  - 0.0-0.3: kicker `Keys en verwijderen`, panel, phone, table in.
  - 0.20 "Get all keys": wash on `getAllKeys()` (row 2). 1.12 "geeft": tap `SHOW KEYS` (1.2); 1.4 Alert `Keys: name, age`. 2.44 "alle keys": wash on both key cells. 3.4: tap `OK`, the Alert fades.
  - 4.40 "remove item": wash on row 7. 5.44 "verwijder": tap `REMOVE NAME` (5.5); 5.6 row `name` fades out, row `age` slides up.
  - 7.28 "en": scroll one row. 7.52 "clear": wash on row 11; tap `CLEAR ALL` (7.7); 7.8 row `age` fades out. 8.48 "alles leeg": `leeg` fades in. Hold.

## Frame 8 — Foutafhandeling

- id: 08-fouten
- duration: 11.35s
- transition_in: blur-crossfade
- sfx: click-soft@3.5, pop@3.92, typing@7.4, click-soft@9.95, pop@10.2
- voiceover: "Opslaan of uitlezen kan mislukken, en JSON punt parse gooit een fout als de string geen geldige JSON is. Vang die fouten daarom op met try en catch."
- focal: the red invalid value and error, then the `try { … } catch (error)` block and the friendly Alert.
- code at the start (7 rows):
  ```
  1  const getData = async () => {
  2      const value: string | null = await AsyncStorage.getItem("student");
  3      if (value !== null) {
  4          const student: Student = JSON.parse(value);
  5          Alert.alert(`${student.name} is ${student.age} years old`);
  6      }
  7  };
  ```
  after the fix (11 rows, all in the window):
  ```
  1  const getData = async () => {
  2      try {
  3          const value: string | null = await AsyncStorage.getItem("student");
  4          if (value !== null) {
  5              const student: Student = JSON.parse(value);
  6              Alert.alert(`${student.name} is ${student.age} years old`);
  7          }
  8      } catch (error) {
  9          Alert.alert("Error", "The student could not be loaded");
  10     }
  11 };
  ```
- phone: `AsyncStorage`, `LOAD DATA`.
- table: one row `student | "this is not JSON"`.
- shots:
  - 0.0-0.3: kicker `Foutafhandeling`, panel, phone, table in.
  - 0.80 "uitlezen": wash on row 2 (`getItem`).
  - 2.72 "JSON punt parse": wash on `JSON.parse(value)` (row 4). 3.44 tap `LOAD DATA` (3.5). 3.92 "gooit een fout": a red error banner slides up at the bottom of the phone screen (white card, 3 dp red left bar, `SyntaxError` 12 dp bold red, under it 11 dp ink `JSON Parse error: Unexpected character: h`); at 4.48 "fout" a thin red underline under row 4 (washes off first).
  - 5.16 "string geen geldige JSON": the table value turns red with a thin red outline (5.44).
  - 6.90: all red fades out (banner slides down, underline and outline off, value back to the string colour).
  - 7.36 "Vang": rows 2 and 8-10 open and type on (7.4-8.6); rows 3-7 shift right by 4 spaces (0.35s) as the block is wrapped.
  - 9.04 "try": wash on `try`. 9.88 "catch": wash on `catch (error)` and a `ts-mark` around rows 8-10; tap `LOAD DATA` (9.95); 10.2 Alert with title `Error` and message `The student could not be loaded`. Hold.

## Frame 9 — State inladen

- id: 09-laden
- duration: 8.47s
- transition_in: push-slide
- sfx: pop@0.7, pop@6.44
- voiceover: "Je kan ook state bewaren. Een eerste use effect haalt de waarde op als de component start, en zet ze in de state."
- focal: the first `useEffect` with `getItem("counter")` and `setCounter(Number(value))`; the chip and the counter going from 0 to 5.
- code (12 rows; window 1-11, scrolls one row at 4.96). The course page wraps this in `try/catch/finally` and adds `loading`; this scene shows the simple version, frame 11 adds the loading flag.
  ```
  1  const Index = () => {
  2      const [counter, setCounter] = useState<number>(0);
  3
  4      useEffect(() => {
  5          const loadData = async () => {
  6              const value: string | null = await AsyncStorage.getItem("counter");
  7              if (value !== null) {
  8                  setCounter(Number(value));
  9              }
  10         };
  11         loadData();
  12     }, []);
  ```
- phone: the counter app (`AsyncStorage`, `Counter: 0`, `INCREMENT`). At the start the screen is empty (white, status bar only): the app has not started yet. It starts at 4.96 (relaunch-in).
- state chip: `counter: 0` pops at 0.7.
- table: one row `counter | "5"`.
- shots:
  - 0.0-0.3: kicker `State inladen`, panel, phone (empty white screen with status bar), table in.
  - 0.64 "state": wash on row 2; 0.7 the chip pops. 1.12 "bewaren": wash on the table row.
  - 2.24 "eerste use effect": `ts-mark` around rows 4-12; wash on `useEffect`.
  - 3.44 "haalt de waarde op": wash on `getItem("counter")` (row 6); 3.8 `.st-read` on the table row.
  - 4.96 "component start": scroll one row; the app starts (relaunch-in) showing `Counter: 0`.
  - 6.16 "zet ze in de state": wash on `setCounter(Number(value))` (row 8); 6.44 chip `0` → `5` and the phone shows `Counter: 5` (value change). Hold.

## Frame 10 — State opslaan

- id: 10-opslaan
- duration: 9.11s
- transition_in: crossfade
- sfx: typing@0.56, click-soft@4.1, pop@4.3, click-soft@5.7, pop@5.9
- voiceover: "Een tweede use effect slaat de state op telkens die verandert. Druk je op increment, dan staat de nieuwe waarde meteen in de opslag."
- focal: the second `useEffect` with `setItem("counter", counter.toString())` and `[counter]`; table value following the counter.
- code (27 rows; rows 1-12 as in frame 9; window 9-19 at the start, scrolls to 17-27 at 3.6):
  ```
  13
  14     useEffect(() => {
  15         const storeData = async () => {
  16             await AsyncStorage.setItem("counter", counter.toString());
  17         };
  18         storeData();
  19     }, [counter]);
  20
  21     return (
  22         <View>
  23             <Text>AsyncStorage</Text>
  24             <Text>Counter: {counter}</Text>
  25             <Button title="Increment" onPress={() => setCounter(counter + 1)} />
  26         </View>
  27     );
  ```
  At the start rows 14-19 are absent (row 13 → row 20); they open and type on at 0.56-1.8.
- phone: `Counter: 5`. state chip `counter: 5`. table `counter | "5"`.
- shots:
  - 0.0-0.3: kicker `State opslaan`, panel, phone, chip, table in.
  - 0.56 "use effect": rows 14-19 type on.
  - 1.36 "slaat": wash on `setItem` (row 16). 1.96 "state": wash on `counter.toString()`. 3.12 "verandert": wash on `[counter]` (row 19).
  - 3.60: scroll to rows 17-27. 4.08 "Druk": tap `INCREMENT` (4.1): `Counter: 6`, chip `6`; 4.3 table `"5"` → `"6"` with wash. 5.68: tap again (5.7): `7`, chip `7`; 5.9 table `"7"`.
  - 7.52 "opslag": `ts-mark`-style blue outline (`.st-read`, held) around the table row. Hold.

## Frame 11 — De loading-vlag

- id: 11-loading
- duration: 11.75s
- transition_in: crossfade
- sfx: pop@1.12, pop@3.9, typing@8.0, pop@10.2
- voiceover: "Maar bij de eerste render zou dat effect de beginwaarde nul al opslaan, terwijl de bewaarde waarde nog geladen wordt. Daarom sla je pas op als loading false is."
- focal: the red `"0"` that overwrites `"7"`, then `if (loading) { return; }` and the `loading` state.
- code at the start (11 rows; the first effect is folded into one row in the fold colour, with a fold pill `⋯` as in VS Code):
  ```
  1  const Index = () => {
  2      const [counter, setCounter] = useState<number>(0);
  3
  4      useEffect(() => { ⋯ }, []);   // laadt "counter"
  5
  6      useEffect(() => {
  7          const storeData = async () => {
  8              await AsyncStorage.setItem("counter", counter.toString());
  9          };
  10         storeData();
  11     }, [counter]);
  ```
  after the fix (15 rows; row 3 types on at 7.52 while the window still shows rows 1-11, then the window scrolls to rows 5-15 at 8.0 and stays there):
  ```
  1  const Index = () => {
  2      const [counter, setCounter] = useState<number>(0);
  3      const [loading, setLoading] = useState<boolean>(true);
  4
  5      useEffect(() => { ⋯ }, []);   // laadt "counter", dan setLoading(false)
  6
  7      useEffect(() => {
  8          if (loading) {
  9              return;
  10         }
  11         const storeData = async () => {
  12             await AsyncStorage.setItem("counter", counter.toString());
  13         };
  14         storeData();
  15     }, [counter, loading]);
  ```
- phone: `Counter: 7`. state chip `counter: 7`. table `counter | "7"`.
- shots:
  - 0.0-0.3: kicker `De loading-vlag`, panel, phone, chip, table in.
  - 0.80 "eerste render": the app relaunches; it renders `Counter: 0`; 1.12 "render": chip `7` → `0`, and a render tag `render #1` pops beside the chip (left of it, mono pill).
  - 2.12 "effect": wash on rows 6-11. 2.68 "beginwaarde nul": wash on `counter.toString()`. 3.84 "opslaan": 3.9 the table value `"7"` → `"0"` in red with a thin red outline.
  - 4.72 "terwijl": wash on the folded row 4 (washes off the others). 6.28 "geladen": the table note shows `getItem → "0"` in red.
  - 7.00: red fades out; the table value returns to `"7"` (value change back, string colour), the note fades.
  - 7.52 "Daarom": row 3 opens and types on (7.6-8.0); 8.0 scroll to rows 5-15 while rows 8-10 open and type on (8.0-8.9); `[counter]` → `[counter, loading]` (9.0); the fold comment becomes `// laadt "counter", dan setLoading(false)`.
  - 9.28 "loading": wash on `if (loading)` and a `ts-mark` around rows 8-10. 9.84 "false": wash on `setLoading(false)` in the fold comment; 9.9 the app relaunches: it shows `Counter: 7` (chip `7`, render tag `render #2`), the table stays `"7"` with a blue wash. Hold.

## Frame 12 — Laadtoestand

- id: 12-laadtoestand
- duration: 9.67s
- transition_in: crossfade
- sfx: typing@1.88, click-soft@6.84, pop@8.08
- voiceover: "Zolang loading true is, toon je een activity indicator. Zo zie je nooit eerst even nul, en kan niemand drukken voor de waarde er is."
- focal: `if (loading) { return (… <ActivityIndicator animating={true} /> …); }` and the spinner instead of `Counter: 0`.
- code (rows 26-40 of the file, line numbers 26-40; window 26-36 after the insert):
  ```
  26     if (loading) {
  27         return (
  28             <View>
  29                 <ActivityIndicator animating={true} />
  30             </View>
  31         );
  32     }
  33
  34     return (
  35         <View>
  36             <Text>AsyncStorage</Text>
  37             <Text>Counter: {counter}</Text>
  38             <Button title="Increment" onPress={() => setCounter(counter + 1)} />
  39         </View>
  40     );
  ```
  At the start rows 26-33 are absent (the window shows rows 34-40 as rows 26-32); at 1.88 rows 26-33 open and type on (1.88-2.9) and push the return down.
- phone: `Counter: 7`. state chip shows `loading: false` at the start (the chip in this frame shows `loading` instead of `counter`). table `counter | "7"`.
- shots:
  - 0.0-0.3: kicker `Laadtoestand`, panel, phone, chip, table in.
  - 0.48 "loading": chip value `false` → `true` (the app is about to start). 0.96 "true": wash on the chip value.
  - 1.88 "toon je": rows 26-33 type on; at the same time the app relaunches and shows only the spinner (ActivityIndicator at the top centre, under the status bar). 2.60 "activity indicator": wash on row 29.
  - 4.56 "nooit": chip `true` → `false`; the spinner disappears and the app shows `Counter: 7` directly (with the button). 5.60 "nul": thin blue `.ph-mark` around `Counter: 7`.
  - 6.24 "kan niemand": the app relaunches again with the spinner (chip `true`); 6.84 "drukken": the finger taps where the button would be: nothing happens (no ripple, no button).
  - 7.72 "waarde": chip `false`; 8.08 "er is": `Counter: 7` and the `INCREMENT` button appear. Hold.

## Frame 13 — Samenvatting

- id: 13-samenvatting
- duration: 13.57s
- transition_in: blur-crossfade
- sfx: pop@1.28, pop@4.4, pop@6.72, pop@8.72
- voiceover: "Samengevat: async storage bewaart strings onder een key. Getallen en objecten zet je om, fouten vang je op, en met een loading state laad je bewaarde state veilig in."
- focal: four recap cards; the closing statement.
- layout: no phone, no code panel, no table (like `../react-native-controlled-components/compositions/frames/12-samenvatting.html`). Kicker `Samenvatting`. Four cards in a row (x 80-1840, each 416 × 320, gap 32, y 230, `#F1F5F9`, hairline, radius 12; a small Inter 600 uppercase label, mono code lines 26px, an Inter 500 sentence 28px):
  1. `KEY-VALUE` / `setItem(key, value)` and `getItem(key)` / `Enkel strings, met await`
  2. `OMZETTEN` / `toString()` · `Number()` and `JSON.stringify` · `JSON.parse` / `Getallen en objecten`
  3. `FOUTEN` / `try { … }` and `catch (error)` / `Vang fouten op`
  4. `LOADING` / `if (loading) {` and `    return;` / `Pas opslaan na het laden`
  Under the cards at top 640: the statement `Data die blijft, ook na het sluiten.` (Inter 700 64px, ink) with a blue underline under `blijft`.
- shots:
  - 0.0-0.3: kicker in.
  - 1.28 "async storage": card 1 pops. 4.40 "Getallen": card 2 pops. 6.72 "fouten": card 3 pops. 8.72 "loading": card 4 pops.
  - 10.04 "bewaarde": the statement fades up; the blue underline under `blijft` wipes in at 11.04. Hold.
