# Projectafspraken

Richtlijnen voor het werken aan deze cursus (Docusaurus-site). Dit bestand wordt
automatisch ingeladen en is versiebeheerd, zodat afspraken met het team gedeeld worden.

## Algemene afspraken
- Taal is Vlaams-Nederlands, maar je mag Engelse termen gebruiken waar nodig (bv. in code, in componenten, in quizzen).
- Vermijd het gebruik van em-dashes.

## Quizzes ("Test je kennis")

- De sectiekop boven een quiz in de markdown is **`## Test je kennis`** — niet `## Quiz`.
- Onder de kop komt `<Quiz url="/quizzes/<naam>.json" />`, met bovenaan de pagina
  `import Quiz from '@site/src/components/Quiz';`.
- De quiz-JSON staat in `static/quizzes/<naam>.json`. De interne `"title"` volgt wél
  het patroon `"Quiz: <onderwerp>"` (bv. `"Quiz: Array.find()"`) — dat is intern en blijft zo.
- Het quiz-schema staat in `src/components/Quiz/types.ts` (vraagtypes: `single`,
  `multiple`, `text`, `code`, `fill`, `errors`).

### Opmaak in quizteksten

- `prompt`, `explanation` en `description` ondersteunen inline `` `code` ``, regeleinden
  én **fenced code blocks** (```` ```ts … ``` ````, gerenderd via Docusaurus' `@theme/CodeBlock`
  met syntax highlighting). Gebruik een taal-hint na de fence (`ts`, `js`, …).
- In de **opties** van keuzevragen: hou het bij inline code, geen fenced blocks
  (een codeblok naast een radio/checkbox oogt rommelig).

### Verdeling van juiste antwoorden

- Spreid bij `single`/`multiple`-vragen het juiste antwoord over de posities.
  Zet het juiste antwoord **niet** stelselmatig als eerste optie — wissel de
  volgorde af zodat het correcte antwoord ongeveer evenredig over index 0–3 valt.

## Video's (lesfilmpjes)

### Tooling

- We maken de filmpjes met **HyperFrames** (HeyGen, HTML-composities + GSAP, gerenderd
  naar MP4). Start altijd via de skill `/hyperframes`; die routeert naar de juiste
  workflow. Onze lesclips gebruiken de workflow **`faceless-explainer`** (`flow: automation`,
  `storyboard: no`): code en diagrammen op scherm, geen gefilmde beelden.
- Elk project heeft een eigen `package.json` met een vaste `hyperframes@X.Y.Z`-versie
  (nu `0.8.141`). Gebruik de scripts daaruit (`npm run check`, `npm run render`) zodat
  een video later identiek opnieuw rendert.
- Preview voor review: `npx hyperframes preview --background` (en `--status` / `--stop`),
  niet `npm run dev` in de achtergrond.
- Na elke wijziging aan een `.html`-compositie: `npx hyperframes check` moet 0 errors geven.
  Contrastwarnings van bewust gedimde tekst zijn ok.

### Stem (voice-over)

- Stem: **Andie**, ElevenLabs voice id **`8OezxDDjGa2d9W45o5Qs`**, model **`eleven_v4`**,
  stability **0.5**, output `mp3_44100_128`. Gebruik dezelfde stem en instellingen voor
  alle regels en alle filmpjes; mix nooit stemmen binnen een video.
- Genereer de audio met de **`elevenlabs` CLI** (`/opt/homebrew/bin/elevenlabs`),
  **niet** via de REST API, de MCP-server of de TTS van HyperFrames/HeyGen.
- Per regel uit `SCRIPT.md` (één regel per frame):

  ```bash
  elevenlabs text-to-speech convert_with_timestamps \
    --voice-id 8OezxDDjGa2d9W45o5Qs --model-id eleven_v4 \
    --voice-settings.stability 0.5 --output-format mp3_44100_128 \
    --text "<tekst van de regel>" --format json
  ```

  De JSON bevat `audio_base64` (decoderen naar `audio/vo-XX.mp3`) en `alignment`
  (tijden per karakter). Groepeer de karakters per woord tot `audio/vo-XX.words.json`
  (`[{id, text, start, end}]`) en zet ze in `audio_meta.json`. Die woordtimings sturen
  de animaties, de geluidseffecten en de ondertitels.
- Voor bestaande audio zonder timings: `elevenlabs forced-alignment create --file <mp3> --text "<tekst>"`.
- Roep de CLI **sequentieel** aan: parallelle calls lopen tegen rate limiting.
- Controleer achteraf met `elevenlabs history list` dat het juiste model (`eleven_v4`)
  en de juiste stem gebruikt zijn; de CLI valt niet altijd zichtbaar terug.
- Opnieuw inspreken: bewaar de vorige takes in `audio/<stem>-<model>/` (bv. `audio/andie-v4/`),
  hertime daarna scènes, sfx, overgangen en ondertitels op de nieuwe woordtimings en
  pas `SCRIPT.md` / `BRIEF.md` aan.

### Stijl en inhoud

Alle clips zijn siblings van `videos/react-array-state`, `videos/react-useeffect` en
`videos/react-usestate`; een nieuw filmpje moet er niet van te onderscheiden zijn.
Kopieer uit een bestaand project: `frame.md` (preset **code-editorial**, de volledige
designspec), `assets/fonts/`, `assets/sfx/`, `compositions/captions.html` en
`compositions/components/oversized-cursor.html`. Twijfel je, kijk dan hoe
`compositions/frames/*.html` van de siblings het oploste en doe hetzelfde. Neem ook de
sectie "Video direction" uit hun `STORYBOARD.md` over als vertrekpunt.

**Kleur (cream / ink / coral + navy)**

- Grond: warm crème `#FAF9F5` op elk frame (nooit puur wit, nooit koel grijs).
  Inhoudskaarten op tile `#EFE9DE` / `#ECE3D4`, een halve stap donkerder.
- Alle tekst in ink `#141413` (op navy: crème).
- Warm navy `#181715` (titelbalk/statusbalk `#252320`) **enkel** voor het codevlak.
- Coral `#CC785C` is het enige accent: **max. één coral-moment per frame**, nooit voor
  een titel of lopende tekst. In probleemframes markeert coral wat fout gaat (de foute
  regel, de extra timer, het scherm dat op 0 blijft); in oplossingsframes de fix zelf.
- Syntaxkleuren in het codevlak: keywords coral, strings teal `#5DB8A6`, getallen en
  functienamen amber `#E8A55A`, types gedimd crème (60%).
- Geen gradients, glow, bokeh, zware schaduwen of paars/blauw. Diepte = 1px hairline
  (ink 12%) + hooguit één zachte warme schaduw. Radii 6 / 8 / 12px.

**Typografie**

- **EB Garamond** (gewicht 400, sentence case, lichte negatieve tracking) voor de ene
  statement per frame, grote getallen en het hero-woord. Italic voor een definitie of
  standpunt. Nooit in hoofdletters.
- **Inter** voor labels, UI en uitleg.
- **JetBrains Mono** voor code, chips, tags en kickers. Kicker = uppercase, tracking
  0.16em, voorafgegaan door een coral ✱ (bv. `✱ ZO NIET`), linksboven op (80, 92).
- Elk frame heeft één duidelijk focuspunt; leesbare tekst minstens ~1.4cqw (~27px).

**Layout (1920×1080)**

- Kicker linksboven (80, 92). Codevlak links (x 80, ~1000-1060px breed, top ~190).
  Rechterkolom x ≈ 1200-1840 voor output, chips en diagrammen.
- Niets belangrijks onder y ≈ 900: daar staat de ondertitelband.

**Terugkerende elementen**

- **Codevlak**: navy paneel met titelbalk (bestandsnaam, bv. `Counter.tsx`) en
  statusbalk, regelnummers, JetBrains Mono 34-36px. Code verschijnt via type-on met een
  caret die per karakter stapt. Highlight = amber waas `rgba(232,165,90,0.24)`; de foute
  regel krijgt een coral "rough box" (getekend SVG-pad) of coral onderlijn. Geen echte
  browser- of VS Code-chrome.
- **`scherm`-kaart**: tile-kaart met mono label `scherm` erboven, staat voor de
  browseroutput (knop, `<p>`, inputveld, eenvoudig getekend). Altijd op dezelfde plek
  (x ≈ 1200-1840, y ≈ 200-520).
- **Chips**: kleine tile-chips met hairline en mono label, bv. `state` met `count: 0`
  (y ≈ 580) of `timer #1 · 1000ms` met een tikkend puntje. Een ongewenste chip krijgt een
  coral rand; een gestopte wordt doorstreept en gedimd tot 35%. Waardewissel: oude waarde
  schuift omhoog weg, nieuwe schuift in (0.25s).
- **Render-tag**: mono pill `render #n` die pulseert of op een tijdlijn valt telkens
  React opnieuw rendert.
- **Cursor**: de oversized-cursor-component voor elke klik; klik = kleine dip
  (scale 0.96 → 1) + ink-rimpel op het doel, met `click-soft`.
- Hook (frame 1): klein interactief voorbeeld + het kernwoord als groot EB Garamond
  hero-woord met coral onderlijn. Laatste frame: samenvatting.

**Beweging**

- Rustig en editoriaal: `power3.out`-settles met lange uitloop, geen bounce, overshoot of
  elastic. Holds staan stil (geen "ademen", drift of camerapush).
- Elke onthulling valt op het gesproken woord dat ze benoemt (timing uit de
  woordtimings). Nooit iets tonen voor de stem het noemt.
- Overgangen tussen scènes: vooral `crossfade`, `push-slide` en `blur-crossfade`,
  soms een `cut`. Scènes faden 0.5s uit (`power2.inOut`).
- Alles deterministisch: geen `Math.random()` of `Date.now()`.

**Ondertitels**

- Altijd aan, in de band onderaan (top 900px, hoogte 180px). Crème kaart met hairline,
  radius 12px en zachte schaduw, max. 78% breed. Woorden in EB Garamond ~56px; komende
  woorden in ink 40%, het actieve woord in vol ink met een 3px coral onderlijn.
- Code-tokens in de ondertitels blijven geschreven zoals in de code (`numbers.push`,
  `setInterval`), ook al worden ze anders uitgesproken.

**Audio**

- Voice-over op volume 1, geluidseffecten op 0.35. Geen muziekbed.
- Sfx uit `assets/sfx/`: `click` / `click-soft` (klikken), `key-press` / `typing`
  (code typen), `pop` (chip of label verschijnt), `whoosh-short` (overgang of verschuiving).

**Taal en toon**

- Vlaams-Nederlandse voice-over en schermteksten; code in het Engels, in de
  TypeScript-stijl van de cursus (`useState<number>(0)`, arrow components). Geen
  em-dashes in zichtbare tekst.
- Toon: rustige, vriendelijke docent, helder en niet gehaast. Code-termen in het Engels,
  uitgesproken als woorden ("use state", "set count", "on change").
- Didactische opbouw: probleem tonen (wat gaat er mis en waarom) → oplossing → varianten
  → samenvatting. Volg de volgorde die de docent opgeeft.
- Lengte: ongeveer 2 tot 3,5 minuten, 10 à 14 scènes.

### Projectstructuur (`videos/<naam>/`)

- `BRIEF.md`: workflow, boodschap, doelgroep, lengte, stijl en het verhaal zoals de
  docent het vraagt (in volgorde), plus de link naar de bijhorende cursuspagina in `docs/`.
- `SCRIPT.md`: voice-over per regel (`## Line N … (Frame N)`, tekst ingesprongen met 4 spaties).
- `STORYBOARD.md`: scènes, video direction en timings.
- `index.html` (root-timeline), `compositions/frames/NN-<naam>.html` (één per scène),
  `compositions/captions.html`, `audio/`, `assets/`, `audio_meta.json`, `caption_groups.json`.
- Werkwijze die goed werkte: storyboard per frame uitschrijven en daarna elke frame door
  een aparte subagent laten bouwen (alleen dat ene bestand schrijven), met een gedeelde
  context die naar de sibling-projecten verwijst.

### Renderen en publiceren

- `npm run videos` (of `npm run videos -- <naam>`) rendert `videos/<naam>/` naar
  `static/videos/<naam>.mp4` + poster `<naam>.jpg` (zie `scripts/render-videos.cjs`).
  Vraagt Chrome en ffmpeg, dus enkel lokaal.
- `static/videos/` en `videos/*/renders/` staan **niet** in git. De broncode in `videos/`
  wel. De MP4 gaat naar YouTube en wordt in de docs ingebed met
  `<YouTubeVideo src='https://youtu.be/…'/>`. Lokaal tonen kan met
  `<HyperframesVideo name="<naam>" />`.
- Render pas na akkoord van de docent op de preview.
