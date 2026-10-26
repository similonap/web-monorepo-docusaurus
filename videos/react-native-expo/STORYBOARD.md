# STORYBOARD — react-native-expo

## Video direction

- TS light, zoals de siblings (`videos/react-native-flexbox`), maar op vraag van de docent met zo veel mogelijk echte beelden: echte screenshots (nodejs.org, Google Play, App Store, Expo Go op Android en in de iOS Simulator) en echte terminaloutput van `create-expo-app`, `reset-project` en `npx expo start`, inclusief de echte QR code.
- EXPO KIT (zie `compositions/frames/09-start.html`): een realistisch macOS-terminalvenster (wit, Basic-profiel), een Chrome-venster en telefoonkaders (Android en iPhone) rond echte screenshots.
- Terminaloutput verschijnt in één keer zoals in een echte terminal; commando's worden getypt met een blokcursor. Frames 6 → 7 → 8 vormen één doorlopende terminalsessie (cuts).
- Elke onthulling valt op het gesproken woord; `power3.out`, geen bounce, stille holds.

## Frame 1 — Hook

- id: 01-hook
- transition_in: cut
- sfx: whoosh-short@0.15, pop@5.68, pop@6.56, pop@8.08, pop@10.64
- voiceover: "Klaar om je eerste React Native app te maken? In dit filmpje zet je alles klaar. Je installeert Node js en Expo Go, je maakt een nieuwe app aan en je opent ze op je eigen telefoon."
- duration: 12.31
- shots: 0.15 the iPhone `.dv` with the end result (`sim-hello.jpg`) rises in on the right; 0.3 hero word `Expo` (Inter 700 168px) at the top left, blue underline grows at 0.7.
  2.72 ("In dit filmpje") statement `Van installatie tot app op je telefoon`.
  Four numbered step chips pop in on their words: `1 Node.js` 5.68 ("Node"), `2 Expo Go` with the real icon 6.56 ("Expo Go"), `3 create-expo-app` (mono) 8.08 ("nieuwe app"), `4 QR code scannen` with the real QR 10.64 ("telefoon"). Hold.

## Frame 2 — Node.js downloaden

- id: 02-node
- transition_in: crossfade
- sfx: pop@1.60, whoosh-short@3.84, pop@6.16, whoosh-short@7.84, click-soft@8.90
- voiceover: "Op je computer heb je enkel Node js nodig. Ga naar de website van Node js en download de LTS versie. Die installeer je zoals elk ander programma."
- duration: 11.11
- shots: 0.52 label `OP JE COMPUTER`, 1.60 hero `Node.js` with blue underline (centre). 3.84 "website": the intro fades and the browser (`Download Node.js`, `nodejs.org/en/download`, real screenshot) rises in. 6.16 "LTS": blue mark around the `v24.22.1 LTS` select + blue chip `LTS · Long Term Support` beside it. 7.84 "installeer": the page scrolls down (0.6 s) to `macOS Installer (.pkg)`; the oversized cursor glides in at 8.2, clicks at 8.90 (ripple, blue mark on the button), eases aside and fades at 10.0.

## Frame 3 — Node.js controleren

- id: 03-node-check
- transition_in: push-slide
- sfx: typing@1.76, key-press@3.75, pop@6.88, pop@7.76, pop@11.96
- voiceover: "Open daarna een terminal en typ node min min version. Zie je een versienummer, dan is de installatie gelukt. Expo zelf hoef je niet te installeren: dat voer je telkens uit met N P X."
- duration: 13.91
- shots: 0.96 "terminal": terminal `projecten · zsh` rises in with prompt and resting caret. 1.76 "typ": `node --version` typed (0.1 s/char), enter at 3.75. 4.96 "versienummer": `v24.22.1` (wash) and a new prompt with resting caret. 6.88 "gelukt": chip `✓ Node.js` (right column). 7.76 "Expo zelf": chip `npm install -g expo`, struck through and dimmed to 35% on "installeren" (9.48). 11.96 "N P X": blue chip `EXPO UITVOEREN npx`.

## Frame 4 — Expo Go in Google Play

- id: 04-play-store
- transition_in: push-slide
- sfx: pop@3.44, click-soft@4.72, typing@5.44, click-soft@7.36, pop@9.32
- voiceover: "Dan je telefoon. Op een Android toestel open je de Google Play Store en zoek je naar Expo Go. Tik op installeren. De app is gratis."
- duration: 10.79
- shots: On "telefoon" (0.64) the Android phone comes in (y 40 → 0) with its screen still off. On "Google" (3.44) the screen turns on: Google Play with an empty search field (results covered), chip `Google Play` pops on the left. On "zoek" (4.72) a touch on the search field and a green caret; on "Expo" (5.44) `expo go` is typed (the real text from play-search.jpg revealed per character) while the real Expo Go icon, `Expo Go` and `Expo Project` appear on the left; at 6.2 the results show. On "installeren" (7.36) a touch on the green Installeren button. On "gratis" (9.32) a blue chip `gratis`.

## Frame 5 — App Store

- id: 05-app-store
- transition_in: crossfade
- sfx: whoosh-short@0.48, pop@1.36, pop@3.84
- voiceover: "Heb je een iPhone of een iPad, dan vind je dezelfde app in de App Store."
- duration: 5.59
- shots: The left block (Expo Go icon, `Expo Go`, `Expo Project`) stands as at the end of frame 4. On "iPhone" (0.48) the iPhone comes in with the real App Store page (appstore.jpg, Expo Go, Gratis). On "iPad" (1.36) chip `iPhone · iPad` and a blue mark around the "iPhone, iPad" row in the screenshot. On "App Store" (3.84) chip `App Store`.

## Frame 6 — Nieuwe app aanmaken

- id: 06-create
- transition_in: push-slide
- sfx: typing@3.36, typing@7.68, pop@10.08, key-press@10.75, key-press@11.05
- voiceover: "Terug naar je computer. Een nieuwe app maak je aan met N P X create expo app at latest, gevolgd door de naam van je project. Hier noemen we het mijn app."
- duration: 11.83
- shots: Terminal `projecten · zsh` with an empty prompt and resting block caret. From 3.36 `npx create-expo-app@latest` is typed in chunks on the spoken words (npx 3.36, create 4.08, expo 4.80, app 5.28, @ 5.68, latest 5.92). On "naam" (7.68) ` mijn-app` is typed. On "mijn app" (10.08) `mijn-app` gets the blue wash and the chip `PROJECT mijn-app` pops in the right column (x 1320, y 250). Enter at 10.75: the real npx lines `Need to install the following packages:` / `create-expo-app@5.0.0` / `Ok to proceed? (y) ` appear, `y` is typed (11.05), caret hides at 11.2 (end state, held through the cut).

## Frame 7 — SDK kiezen

- id: 07-sdk
- transition_in: cut
- sfx: pop@5.28, key-press@6.32, pop@11.16
- voiceover: "Eerst vraagt Expo welke SDK versie je wil. Kies in deze cursus altijd Latest. Daarna installeert Expo alle packages. Dat duurt even, tot je ziet: your project is ready."
- duration: 13.59
- shots: Opens on the exact end state of 06 (pixel identical). On "SDK" (1.60) the real prompt `? Select an Expo SDK version: › - Use arrow-keys. Return to submit.` with its three options. On "Latest" (5.28) the option `Latest (SDK 58)` is washed and marked, chip `SDK Latest (SDK 58)` (blue) pops under the project chip. On "Daarna" (6.32) the prompt collapses into `✔ Select an Expo SDK version: › Latest (SDK 58)`, followed by `Creating mijn-app ...` and the Tip lines; on "installeert" (6.84) `✔ Downloaded and extracted project files.`, on "packages" (8.08) `> npm install`, after "even" (9.9) `added 544 packages ...` and the funding lines. On "your" (11.16) `✅ Your project is ready!` (wash), the `- cd mijn-app` ... `- npm run web` lines and a new `student@laptop projecten % ` prompt with resting caret; the terminal scrolls 3 rows. End state held through the cut.

## Frame 8 — Voorbeeldcode opruimen

- id: 08-reset
- transition_in: cut
- sfx: typing@0.56, key-press@1.95, typing@4.72, key-press@7.35, pop@10.80, key-press@11.15
- voiceover: "Ga met C D naar de map van je project, en ruim de voorbeeldcode op met N P M run reset project. Op de vraag of je de bestanden wil bewaren, antwoord je met N."
- duration: 12.31
- shots: Opens on the exact end state of 07 (pixel identical). On "C D" (0.56) `cd mijn-app` is typed; enter at 1.95: new prompt `student@laptop mijn-app % `, window title becomes `mijn-app · zsh`. On "N P M run reset project" (4.72-7.1) `npm run reset-project` is typed; enter at 7.35: `> mijn-app@1.0.0 reset-project` / `> node ./scripts/reset-project.js`; on "vraag" (7.92) the real question `Do you want to move existing files to /example instead of deleting them? (Y/n): `. On "N" (10.80) `n` is typed with wash and chip `ANTWOORD n` pops (third in the column). Enter at 11.15: all real deleted/created lines, `✅ Project reset complete. Next steps:`, steps 1-2 and a new prompt; terminal scrolls so the answered question stays at the top. Settled by 11.5, before the crossfade to 09.

## Frame 9 — De app starten

- id: 09-start
- transition_in: crossfade
- sfx: typing@1.44, key-press@2.98, pop@4.56, pop@7.48, pop@9.84
- voiceover: "Nu start je de app met N P X expo start. Dat start Metro, de bundler die je code klaarmaakt voor je telefoon. In de terminal verschijnt een QR code."
- duration: 11.83
- shots: Terminal `mijn-app · zsh`; `npx expo start` types on "N P X expo start" (1.44), enter, real start lines. "Starting Metro Bundler" washes on "Metro" (4.56) with the `bundler · Metro` chip; `src/app/index.tsx` (6.32) and `Expo Go` (7.48) chips form the flow. On "QR" (9.84) the real QR and the four `›` lines appear; a blue mark frames the QR (10.1).

## Frame 10 — QR code scannen

- id: 10-scan
- transition_in: crossfade
- sfx: whoosh-short@0.40, click-soft@2.88, whoosh-short@4.72, pop@5.96, pop@10.16
- voiceover: "Open Expo Go op je telefoon en tik op scan QR code. Richt je camera op de QR code in de terminal. Op een iPhone scan je de code gewoon met de camera app."
- duration: 11.99
- shots: The terminal holds the last state of frame 9 (npx expo start output, real QR with its mark, Metro wash). On "Expo Go" (0.40) the Android phone comes in with the real Expo Go home screen. On "scan" (2.88) a touch on the "Scan QR code" row; at 3.4 the screen crossfades to the scanner: a dark, slightly blurred camera image of the laptop screen with the real QR at an angle, four white corner brackets. On "Richt" (4.72) the camera image settles so the QR sits inside the brackets; on "QR" (5.96) the QR in the terminal gets a blue wash. On "camera app" (10.16) chip `iPhone: Camera-app` top right on the kicker line.

## Frame 11 — Hetzelfde netwerk

- id: 11-netwerk
- transition_in: blur-crossfade
- sfx: pop@1.24, pop@2.00, pop@3.44, pop@6.32, typing@10.56, whoosh-short@11.28
- voiceover: "Let op: je computer en je telefoon moeten op hetzelfde netwerk zitten. Lukt het niet, bijvoorbeeld op het schoolnetwerk, start dan met N P X expo start min min tunnel."
- duration: 12.87
- shots: Kicker `Tip · Netwerk`. A small terminal card `COMPUTER` (`mijn-app · zsh`, `student@laptop mijn-app % npx expo start`) pops on "computer" (1.24), the `TELEFOON` card (real Expo Go icon + "Expo Go / op je telefoon") on "telefoon" (2.00). A blue Wi-Fi symbol builds arc by arc on "hetzelfde" (2.92), label `HETZELFDE NETWERK` and blue links to both cards on "netwerk" (3.44).
  On "niet" (4.96) the links break: they turn thin red with a gap in the middle and the Wi-Fi goes grey; on "schoolnetwerk" (6.32) a red-bordered chip `schoolnetwerk` under the Wi-Fi. On "start dan met" (7.52) the red dims to 35% and a block caret appears at the end of the command; wash on `npx expo start` on "N P X" (8.32).
  On "min min tunnel" (10.56) ` --tunnel` is typed, wash on `--tunnel` (11.28), and a blue route draws from the computer card down, through a `VIA tunnel` chip (11.50), up into the phone card with an arrowhead (11.98). Hold.

## Frame 12 — Bundelen en openen

- id: 12-bundling
- transition_in: crossfade
- sfx: whoosh-short@0.56, pop@2.76, pop@4.96, pop@6.88
- voiceover: "Metro bundelt nu je code en stuurt ze naar je telefoon. In de terminal verschijnt bundled, en even later draait je app."
- duration: 8.79
- shots: Kicker `Stap 4 · De app starten`. Terminal `mijn-app · zsh` with the real `npx expo start` output, scrolled to the bottom: the lower part of the QR, the four `›` lines, the key menu (with its real blank lines) and `Logs for your project will appear below. Press Ctrl+C to exit.` Right: iPhone with `sim-home.jpg` (mijn-app under Development servers).
  On "bundelt" (0.56) the real progress line appears and the terminal scrolls one row; it rewrites itself in place: 0.0% → 17.0% (1.40) → 30.9% (2.28) → 65.6% (3.30) → 98.3% (4.20). On "telefoon" (2.76) the phone crossfades to `sim-bundling.jpg` ("Building JavaScript bundle... 47.63%").
  On "bundled" (4.96) the line becomes `iOS Bundled 456ms node_modules/expo-router/entry.js (1274 modules)` with wash. On "draait" (6.88) the phone crossfades to `sim-app.jpg` (the running app). Hold.

## Frame 13 — Eerste wijziging

- id: 13-wijziging
- transition_in: push-slide
- sfx: typing@1.00, typing@2.20, pop@3.36, click-soft@4.20, pop@5.68, pop@8.40
- voiceover: "Pas nu de tekst aan in index punt t s x en sla het bestand op. Je hoeft niets opnieuw te starten: je telefoon toont meteen Hello World."
- duration: 10.39
- shots: Kicker `Stap 5 · Eerste wijziging`. Left the code surface `src/app/index.tsx` with the real file after reset (17 rows); right the iPhone with `sim-app.jpg`.
  On "tekst" (0.64) wash on the `<Text>` line and a caret at the end of the text; from 1.00 the text is deleted backwards (quick, 25 ms per char) and a modified dot appears after the file name; `Hello World` is typed 2.20-3.08.
  On "sla" (3.36) a blue chip `OPSLAAN ⌘S / Ctrl+S` pops at the bottom right of the code surface; on "op" (4.20) it dips (press), the dot disappears and an `opgeslagen` tag pops in the title bar; wash and caret off at 4.60.
  On "opnieuw" (5.68) a chip `npx expo start` pops on the kicker line (top right), struck through on "starten" (6.08) and dimmed to 35%. On "Hello" (8.40) the phone crossfades to `sim-hello.jpg` and `Hello World` in the code gets a wash. Hold.

## Frame 14 — Herladen op je telefoon

- id: 14-herladen
- transition_in: crossfade
- sfx: pop@2.56, click-soft@4.40, pop@4.80, whoosh-short@6.40, pop@8.08, click-soft@10.96
- voiceover: "Loopt je app vast, of wil je ze helemaal opnieuw laden? Tik dan op het blauwe tandwiel in je app, of schud met je telefoon. Het ontwikkelmenu gaat open, en daar tik je op reload."
- duration: 12.71
- shots: Kicker `Tip · Herladen`. Right: iPhone with `sim-gear.jpg` (Hello World with Expo Go's blue gear top right). On "opnieuw" (2.56) the statement `Je app opnieuw laden` pops at the top left.
  On "blauwe" (4.40) a touch lands on the gear; on "tandwiel" (4.80) card 1 `Tik op het tandwiel` (crop of the real gear, "De blauwe knop rechtsboven in je app"). On "schud" (6.40) card 2 `Schud je telefoon` (phone pictogram with two blue arcs, "Werkt op een echt toestel") and the phone shakes (±4°, about 3 cycles, 0.8 s, back to 0).
  On "ontwikkelmenu" (8.08) the screen crossfades to `sim-devmenu.jpg`; a blue chip `ontwikkelmenu` pops left of the phone, a thin blue line with a dot points at the sheet (8.30). On "reload" (10.96) a touch on the Reload button + blue mark with wash. At 11.30 `sim-reloading.jpg` fades in (mark, chip and line fade out), at 12.00 back to `sim-gear.jpg`. Hold.

## Frame 15 — Herladen vanaf je computer

- id: 15-herladen-terminal
- transition_in: push-slide
- sfx: pop@2.48, key-press@2.62, whoosh-short@2.70, pop@6.52
- voiceover: "Het kan ook vanaf je computer. Druk op R in de terminal waar N P X expo start draait, en je app laadt opnieuw."
- duration: 8.39
- shots: Kicker `Tip · Herladen`. Left: terminal `mijn-app · zsh` in the last state of 12-bundling (QR bottom, key menu, "Logs for your project…", `iOS Bundled 456ms … (1274 modules)` as the bottom line; its wash is off). Right: iPhone with `sim-gear.jpg`.
  On "R" (2.48) the menu line `› Press r │ reload app` gets the wash and a chip `TOETS [r]` pops on the kicker line (right-aligned to x 1840); the key cap dips at 2.62. At 2.70 the real line `› Reloading apps` appears and the terminal scrolls one row.
  On "laadt" (6.52) the real line `iOS Bundled 55ms node_modules/expo-router/entry.js (1 module)` appears (scroll one row) and the phone crossfades to `sim-reloading.jpg`; at 7.30 back to `sim-gear.jpg`. Hold.

## Frame 16 — Samenvatting

- id: 16-samenvatting
- transition_in: blur-crossfade
- sfx: pop@1.20, pop@3.20, pop@6.24, pop@8.72, pop@11.44, pop@12.56
- voiceover: "Samengevat: Node js op je computer en Expo Go op je telefoon. Je maakt een app met create expo app, je start ze met N P X expo start en je scant de QR code. Veel plezier met je eerste app!"
- duration: 16.05
- shots: Kicker `Samenvatting` at 0.1. Four cards in a row (x 80-1840, y 180-630), each with a real image, rise in on their words:
  1 `Node.js` / "LTS op je computer" with a crop of `nodejs-download.jpg` (title + v24.22.1 LTS select) at 1.20; 2 `Expo Go` / "Google Play · App Store" with the real icon at 3.20;
  3 `Nieuwe app` / mono `npx create-expo-app@latest` with a mini terminal of real create.txt lines (create-expo-app@5.0.0, > npm install, ✅ Your project is ready!, - cd mijn-app) at 6.24 ("create");
  4 `App starten` / mono `npx expo start` with the real QR at 8.72 ("N P X"); blue `.ts-mark` around the QR at 11.44 ("QR").
  12.56 ("Veel plezier") statement `Veel plezier met je eerste app!`, blue underline under "eerste app!" at 13.60. Hold.
