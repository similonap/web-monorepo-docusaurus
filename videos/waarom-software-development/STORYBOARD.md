---
format: 1920x1080
duration: 120s
message: "AI maakt software development niet overbodig: het maakt goede, diep opgeleide engineers net waardevoller. Kies voor de richting."
arc: Hook → Eerlijk vooraf → 7 redenen (listicle) → Diep vs oppervlakkig → Oproep
audience: "(Toekomstige) studenten die twijfelen of software development in het AI-tijdperk nog een goede keuze is"
mode: autonomous
music: none
captions: enabled
---

# STORYBOARD — waarom-software-development

## Video direction

- **Design system:** `frame.md` (Creative Mode). Cream `#EFE9D9` ground on almost every frame, ink `#0F0F0F` 0.4cqw borders, Archivo Black UPPERCASE (lh 0.92) for every headline, JetBrains Mono for labels / kickers / code, Space Grotesk for the rare body line. Accents green / pink / orange / yellow, **two or three per frame, never all four**. Exactly **one hard offset shadow per frame** (orange + ink) on the featured block. Square corners; the only rounded thing is one pill chip. Rotation only at −4deg (badge) or −6deg (stamp). No gradients, no blur shadows, no glow, no emoji, no logos. Fonts ship in `assets/fonts/` (`archivo-black-latin-400-normal.woff2`, `space-grotesk-latin-{400,500,700}-normal.woff2`, `JetBrains_Mono-{400,500}-normal.woff2`, `jetbrains-mono-latin-700-normal.woff2`); `@font-face` inside each frame, paths are project-root relative (`assets/fonts/...`), exactly as in the shared block `.hyperframes/frame-packets/_shared.md`.
- **Series chrome (every frame except 11):** mono topbar at `3.3cqw` inset: left a small ink kicker-block `WAAROM SOFTWARE DEVELOPMENT`, right the pill chip with the frame's counter (`REDEN 01 / 07` … on frames 3-9, `INTRO` on 1-2, `CONCLUSIE` on 10). No footer (the caption band owns the bottom).
- **Reason number tile (frames 3-9):** a square ink-bordered accent tile with the reason number (`01`…`07`) in Archivo Black at step-num size, top-left under the topbar (≈ x 96, y 150), popping in on the spoken number ("Eén.", "Twee." …) at t≈0. Colors rotate: 01 green, 02 pink, 03 orange, 04 yellow, 05 green, 06 pink, 07 orange.
- **Motivational energy:** this is NOT a calm lesson clip. Faster, punchier entrances: `power3.out` / `power4.out` / `expo.out` settles at 0.35-0.5s, slams (scale 1.25 → 1 with a tiny rotation settle) for headline words, stamps that drop in rotated, hard-cut word swaps. Allowed: a single `back.out(1.6)` pop on badges and stamps (poster energy); everything else smooth long-tail. Holds are still (no breathing, no drift).
- **Reveal model:** every element appears on the spoken word that names it (times below are seconds from the frame start = voice start). Never show something before the voice says it. Reveals continue into the back half of every frame.
- **Rhythm:** frames 2 and 10 are big-claim plates (full-bleed accent ground: 2 orange, 10 split cream/green); frame 11 is the single green closing plate. Frame 9 lands slower and holds on its last line (the "strongest argument" beat).
- **Visible text = short poster copy**, never the narration sentence. Dutch (Flemish), no em-dashes.
- **Keep-out:** nothing load-bearing below y = 900 (caption band 900-1080).
- **Negative list:** no slideshow (front-load then freeze), no screensaver (everything floating), no rounded SaaS cards, no soft shadows, no purple/blue "AI" gradients, no robots/brain icons, no fabricated statistics or percentages.

## Frame 1 — Hook

- status: animated
- src: compositions/frames/01-hook.html
- duration: 10.48s
- transition_in: cut
- scene: De vraag die iedereen stelt, slaat in; drie bronnen van doemverhalen poppen op; een stempel belooft een eerlijk antwoord
- voiceover: "Gaat AI alle programmeurs vervangen? Je hoort het overal. Op TikTok, op het kerstdiner, van die ene nonkel die alles weet. Tijd voor een eerlijk antwoord."
- blueprint: kinetic-type-beats (Adapt)
- focal: the question headline `GAAT AI ALLE PROGRAMMEURS VERVANGEN?`
- roles: question = foreground subject · three source cards = supporting · `EERLIJK ANTWOORD` marker = payoff
- sfx: pop @4.32, pop @5.36, pop @6.88, whoosh-short @8.72, click @9.52

Adapt: keep the statement-builds-across-beats spine; the payoff is a stamped marker instead of a spring logo.
Scene 1 (0.0–2.6s): cream ground, topbar (pill `INTRO`). The question builds word by word, centered, display-lg, two lines: `GAAT AI ALLE` / `PROGRAMMEURS VERVANGEN?` — `GAAT` @0.0, `AI` @0.40 (in a pink highlight block behind the word), `ALLE` @1.00, `PROGRAMMEURS` @1.28, `VERVANGEN?` @1.80 slams in (scale 1.25 → 1). Headline sits upper-middle (y ≈ 260-480).
Scene 2 (2.6–8.7s): headline shrinks up a bit (scale 0.8, stays readable). Below it, three ink-bordered cream cards drop in a row like stickers, each slightly rotated (−4 / +2 / −3deg max): `TIKTOK` @4.32, `KERSTDINER` @5.36, `DIE ENE NONKEL` @6.88. A small yellow rotated badge `WEET ALLES` tacks onto the nonkel card @7.60 (the joke).
Scene 3 (8.7–10.98s): the three cards slide down and out of view (fast, 0.35s) @8.72; a pink marker-block with the frame's hard offset shadow stamps in center below the question: `EERLIJK ANTWOORD` @9.52 (drop from scale 1.3, rotate −4 → −2deg). Hold.

## Frame 2 — Eerlijk vooraf

- status: animated
- src: compositions/frames/02-eerlijk.html
- duration: 13.12s
- transition_in: push-slide LEFT
- scene: Big-claim plate in oranje: de eerlijke nadelen eerst, dan de kanteling naar "echte opleiding"
- voiceover: "Eerst het eerlijke deel: simpel codeerwerk wordt minder, en je eerste job vinden is moeilijker dan vijf jaar geleden. Maar net daarom is een echte opleiding nu meer waard dan ooit. Zeven redenen."
- blueprint: kinetic-type-beats (Adapt)
- focal: the claim `ECHTE OPLEIDING: MEER WAARD DAN OOIT`
- roles: orange full-bleed ground = background · two honesty rows = supporting · claim = foreground subject · `7 REDENEN` badge = payoff
- sfx: pop @1.88, pop @3.96, whoosh-short @7.79, pop @12.16

Scene 1 (0.0–1.8s): full-bleed orange ground (frame.md Big Claim plate), ink type. Topbar in ink (pill `INTRO`). Small ink kicker-block `EERST HET EERLIJKE DEEL` slides in left-anchored @0.0 (x ≈ 96, y ≈ 190).
Scene 2 (1.8–7.7s): two cream ink-bordered rows stack under the kicker, left-anchored, ~1100px wide: row 1 `ROUTINE-CODE` + a mono tag `↓ MINDER` @1.88; row 2 `EERSTE JOB VINDEN` + mono tag `MOEILIJKER` @3.96; a small mono note `DAN 5 JAAR GELEDEN` writes in under row 2 @6.44.
Scene 3 (7.7–12.1s): @7.79 hard cut: the two rows dim to 35% and shift up; the word `MAAR` slams in large (display-xl, ink) left; then the claim builds per chunk at display-lg: `ECHTE OPLEIDING` @9.20, `MEER WAARD` @10.32, `DAN OOIT` @11.08, replacing `MAAR` (MAAR shrinks into a small kicker above the claim).
Scene 4 (12.1–13.62s): a yellow rotated badge-block `7 REDENEN` (−4deg, the frame's one hard shadow) pops in right of the claim @12.16. Hold.

## Frame 3 — Reden 1: de taart wordt groter

- status: animated
- src: compositions/frames/03-taart.html
- duration: 19.28s
- transition_in: crossfade
- scene: Twee historische precedenten links, rechts een software-taart die groeit en taken krijgt; slotkop "De taart wordt groter"
- voiceover: "Eén. Toen stoommachines zuiniger werden, steeg het steenkoolverbruik. Spreadsheets maakten boekhouders niet overbodig, maar sterker. AI maakt software goedkoper, dus komt er overal meer software. En die moet iemand ontwerpen, beveiligen en draaiende houden. De taart wordt groter."
- blueprint: compose
- focal: the yellow software pie (circle) that grows
- roles: number tile 01 (green) = supporting · two precedent cards = supporting · pie + slice labels = foreground subject · closing headline marker = payoff
- sfx: pop @0.0, pop @3.00, pop @8.00, whoosh-short @12.08, pop @14.76, pop @15.52, pop @16.56, click @17.76

Scene 1 (0.0–4.9s): cream ground, topbar (pill `REDEN 01 / 07`). Green number tile `01` pops @0.0. Left column (x 96-820): precedent card A (cream-2, ink border) slides up @1.12 with the title `STOOMMACHINE` in Archivo (no dates or numbers); inside it a mini row `ZUINIGER` @1.92 then `STEENKOOL` with a fat ink up-arrow that grows upward @3.00 (`↑ MEER`).
Scene 2 (4.9–8.9s): precedent card B slides up under A @4.96: `SPREADSHEET`; inside `BOEKHOUDER` @6.00 with a struck-through mono tag `OVERBODIG` @6.88 (strike draws across) and then a green tag `STERKER` @8.00.
Scene 3 (9.0–13.8s): right column (x 1000-1800): a big yellow ink-bordered circle (the pie, ~380px) scales in @9.12 with `SOFTWARE` across it; a mono pill `GOEDKOPER` tacks on @10.32. @12.08 the pie grows to ~1.35× (`OVERAL MEER`), whoosh.
Scene 4 (13.8–17.6s): ink divider lines draw across the pie (dividing it into three slices, one per task) and a solid ink-bordered label chip pops next to each slice around the pie: `ONTWERPEN` @14.76, `BEVEILIGEN` @15.52, `DRAAIENDE HOUDEN` @16.56.
Scene 5 (17.6–19.86s): headline marker `DE TAART WORDT GROTER` (pink marker-block with the frame's hard shadow, display-head) stamps in across the top-right above the pie @17.76; the pie does one final small grow (1.35 → 1.45) @18.56. Hold.

## Frame 4 — Reden 2: typen was nooit het probleem

- status: animated
- src: compositions/frames/04-typen.html
- duration: 14.32s
- transition_in: push-slide LEFT
- scene: Een dag van een engineer als gestapelde balk: code typen is maar een klein stukje; AI maakt dat stukje nog kleiner; denken blijft jouw werk
- voiceover: "Twee. Code typen was nooit het moeilijke deel. Het echte werk is uitzoeken wat het probleem is, keuzes maken, en om drie uur 's nachts uitvissen waarom alles plat ligt. AI typt sneller. Denken doet het niet voor jou."
- blueprint: compose
- focal: the stacked "een werkdag" bar
- roles: number tile 02 (pink) = supporting · stacked bar segments = foreground subject · `03:00` badge = joke accent · `DENKEN = JIJ` marker = payoff
- sfx: pop @0.0, key-press @0.88, pop @4.68, pop @6.40, pop @7.81, whoosh-short @11.16, click @12.80

Scene 1 (0.0–3.4s): cream ground, topbar (pill `REDEN 02 / 07`). Pink number tile `02` @0.0. A mono label `EEN WERKDAG` above a long empty ink-outlined bar (full width x 96-1824, height ≈ 150, y ≈ 400). @0.88 the first, small segment fills from the left (~12% width, cream-2 with ink border): `CODE TYPEN` (label in mono inside or just above if too narrow), with a blinking caret.
Scene 2 (3.4–11.0s): the rest of the bar fills segment by segment on the spoken words, each a flat accent fill with Archivo label: `PROBLEEM UITZOEKEN` (yellow) @4.68, `KEUZES MAKEN` (green) @6.40, `PRODUCTIE PLAT` (pink) @7.81 — at the same moment a yellow rotated badge `03:00` (mono, −4deg) pins above that segment (the joke) @8.00.
Scene 3 (11.0–12.7s): @11.16 a small ink pill `AI: SNELLER` drops onto the `CODE TYPEN` segment and that segment squeezes to ~half its width (scaleX on the segment, the others shift left with it via x translate).
Scene 4 (12.7–14.82s): below the bar, a pink marker-block with the frame's hard shadow slams in centered: `DENKEN = JIJ` @12.80 (display-lg). Hold.

## Frame 5 — Reden 3: iemand moet zien dat het fout is

- status: animated
- src: compositions/frames/05-fout.html
- duration: 18.08s
- transition_in: blur-crossfade
- scene: Een codeblok krijgt eerst een "ziet er perfect uit"-stempel, dan "fout"; drie regels worden aangeduid; slotkop over reviewen en begrijpen
- voiceover: "Drie. AI schrijft code die er perfect uitziet. En toch fout is. Een tikje onveilig, een tikje traag, of fout in dat ene randgeval. Hoe meer code AI schrijft, hoe meer we mensen nodig hebben die dat zien. En je kan niet reviewen wat je niet begrijpt."
- blueprint: compose
- focal: the code card with its stamp
- roles: number tile 03 (orange) = supporting · code card = foreground subject · three issue tags = supporting · closing headline = payoff
- sfx: pop @0.0, typing @1.28, pop @2.84, click @4.48, pop @5.96, pop @7.28, pop @9.60, whoosh-short @10.77, click @15.48

Scene 1 (0.0–4.0s): cream ground, topbar (pill `REDEN 03 / 07`). Orange number tile `03` @0.0. A cream-2 ink-bordered code card (x 96-1140, y ≈ 270-760) with a mono title bar `ai-suggestie.js`; JetBrains Mono 26px code types on @1.28 (quick, ~1.4s total, line by line):
```js
async function getUser(id) {
  const rows = await db.query(
    "SELECT * FROM users WHERE id=" + id);
  for (const u of rows)
    for (const o of allOrders) match(u, o);
  return rows[0].name;
}
```
Syntax colors from ink + accents only: keywords ink bold, strings green-dark, functions orange. @2.84 a green rotated stamp `ZIET ER PERFECT UIT ✓` (−6deg) drops on the card's top-right.
Scene 2 (4.0–10.7s): @4.48 the stamp flips (rotateY swap) into a pink stamp `FOUT` (same spot). Then three issue tags slam in at the right edge of their lines, each an ink-bordered chip with a pink left bar and the line getting a thin pink underline: line 3 `ONVEILIG` @5.96, line 5 `TRAAG` @7.28, line 6 `RANDGEVAL` @9.60.
Scene 3 (10.7–15.4s): right column (x 1240-1824): two vertical bars grow side by side, labeled in mono: `AI-CODE` grows tall @11.20; `MENSEN DIE HET ZIEN` grows equally tall @13.36 (no numbers, just bars). Small mono caption `NODIG` under the second bar @13.80.
Scene 4 (15.4–18.58s): headline across the top-right replacing the bars' area top (or a band above the code card): `JE KAN NIET REVIEWEN` @15.48 / `WAT JE NIET BEGRIJPT` @16.96, display-head, second line in an orange block with the frame's hard shadow. Hold.

## Frame 6 — Reden 4: jij bent de baas

- status: animated
- src: compositions/frames/06-tien.html
- duration: 13.04s
- transition_in: push-slide LEFT
- scene: "JIJ" in het midden, tien AI-chips springen in een ring rond jou; grapje over koffie; vergelijking één engineer plus AI is een heel team
- voiceover: "Vier. Jij concurreert niet met AI. Jij stuurt er tien tegelijk aan. Een team supersnelle junioren, die nooit koffie gaan halen. Eén engineer met AI bouwt wat vroeger een heel team nodig had."
- blueprint: constellation-hub (Adapt)
- focal: the `JIJ` hub block with ten AI chips around it
- roles: number tile 04 (yellow) = supporting · JIJ hub = foreground subject · ten `AI` chips + connector lines = supporting · coffee badge = joke · equation = payoff
- sfx: pop @0.0, click @1.12, whoosh-short @3.80, pop @5.92, pop @7.84, click @9.04

Adapt: keep nodes springing into a ring around a center; finisher is an equation lockup instead of a camera push.
Scene 1 (0.0–3.0s): cream ground, topbar (pill `REDEN 04 / 07`). Yellow number tile `04` @0.0. Center (x 960, y ≈ 470): an ink block with cream Archivo `JIJ` (display-xl) and a small struck mono tag beside it `VS AI` that gets a strike line @1.84 (`niet concurreren`).
Scene 2 (3.0–5.1s): @3.80 ten small ink-bordered cream chips labeled `AI` (mono, numbered `AI 01` … `AI 10`) burst outward from the JIJ block into an ellipse around it (cluster→outward expansion, stagger capped ~0.4s), with thin ink connector lines drawn from JIJ to each chip. Ellipse stays inside y 200-860.
Scene 3 (5.1–8.9s): a mono pill label `SUPERSNELLE JUNIOREN` pins under the ring @5.92. @7.84 a yellow rotated badge `KOFFIE HALEN? NOOIT.` tacks onto the ring's upper-right (the joke).
Scene 4 (8.9–13.54s): @9.04 the ring compresses back toward the hub (scale 0.55, moves left to x ≈ 560) and an equation builds right of it, display-head: `1 ENGINEER` @9.28, `+ AI` @9.92, `=` @10.80, `1 HEEL TEAM` @11.76 in a green marker-block with the frame's hard shadow. Hold.

## Frame 7 — Reden 5: verantwoordelijkheid

- status: animated
- src: compositions/frames/07-regels.html
- duration: 18.16s
- transition_in: crossfade
- scene: Drie sectoren op software, vier Europese regels vallen als stempels, de verantwoordelijkheid wijst naar de bouwer; een chatbot krijgt "NEE"
- voiceover: "Vijf. Banken, ziekenhuizen en je auto draaien op software. Europese regels zoals de GDPR, NIS2, de Cyber Resilience Act en de AI Act leggen de verantwoordelijkheid bij wie het bouwt. Geen enkel bedrijf schuift dat door naar een chatbot."
- blueprint: grid-card-assemble (Adapt)
- focal: the four regulation stamps
- roles: number tile 05 (green) = supporting · three sector tiles = supporting · four regulation stamps = foreground subject · `VERANTWOORDELIJK` arrow + `BOUWER` tag = supporting · chatbot bubble + NEE = joke payoff
- sfx: pop @0.0, pop @0.64, pop @1.84, pop @2.96, click @7.04, click @8.16, click @9.52, click @11.36, whoosh-short @12.84, pop @17.56

Scene 1 (0.0–5.1s): cream ground, topbar (pill `REDEN 05 / 07`). Green number tile `05` @0.0. A row of three ink-bordered square tiles across the upper area (y ≈ 200-420), each a simple flat CSS/SVG pictogram (ink strokes) + Archivo label: `BANK` (columns pictogram) @0.64, `ZIEKENHUIS` (cross pictogram) @1.84, `AUTO` (car side pictogram) @2.96. @4.08 a mono strip under the row draws left→right: `DRAAIT OP SOFTWARE`.
Scene 2 (5.1–12.4s): a mono kicker `EU-REGELS` @5.20; four stamps drop onto the middle band (y ≈ 480-640), each rotated slightly (−6, +3, −3, +5 max ±6), ink-bordered accent fills (pink / yellow / orange / pink — only 3 accents total with tile 05 green, so use pink, yellow, pink, yellow): `GDPR` @7.04, `NIS2` @8.16, `CYBER RESILIENCE ACT` @9.52, `AI ACT` @11.36.
Scene 3 (12.4–15.3s): a fat ink arrow draws from the stamps toward a cream ink-bordered tag `WIE HET BOUWT` (right side) @12.84; label on the arrow `VERANTWOORDELIJK` (mono).
Scene 4 (15.3–18.66s): bottom-right above the band (y ≤ 880): a chat bubble (cream-2, ink border, square-ish with small tail, the one pill chip may be its label) with mono text `sorry, ik ben maar een chatbot` @15.36; @17.56 a pink stamp `NEE` (−6deg, the frame's hard shadow) slams over it. Hold.

## Frame 8 — Reden 6: je neemt het overal mee

- status: animated
- src: compositions/frames/08-overal.html
- duration: 15.92s
- transition_in: push-slide LEFT
- scene: Een groot probleemblok splitst in kleine blokjes en wordt een systeem; je skills reizen langs drie bestemmingen; de jobtitel wisselt maar de denkwijze blijft goud
- voiceover: "Zes. Je leert grote problemen opsplitsen, denken in systemen en je aannames testen. Dat neem je overal mee: naar een AI-bedrijf, een ziekenhuis of je eigen startup. Je jobtitel kan veranderen. Je manier van denken blijft goud waard."
- blueprint: spatial-pan-stations (Adapt)
- focal: the skills block traveling past three stations
- roles: number tile 06 (pink) = supporting · problem block → 4 small blocks → connected system = foreground (scene 1) · three station cards = supporting · job title token-cycle = supporting · `GOUD WAARD` = payoff
- sfx: pop @0.0, whoosh-short @2.36, pop @5.04, whoosh-short @7.41, pop @8.24, pop @9.40, pop @10.80, key-press @12.64, click @15.08

Scene 1 (0.0–6.3s): cream ground, topbar (pill `REDEN 06 / 07`). Pink number tile `06` @0.0. Left-center: one big ink-bordered yellow square `PROBLEEM` @1.36; @2.36 it splits into a 2×2 grid of four small squares (gap opens); @3.28 thin ink lines connect the four squares into a little system diagram (label mono `SYSTEEM`); @5.04 a checkbox chip `AANNAME ✓ GETEST` ticks below.
Scene 2 (6.3–11.7s): @7.41 the diagram compresses into an ink block labeled `JOUW DENKWIJZE` (the traveler) at left; to the right, three station cards in a row (y ≈ 360-560): `AI-BEDRIJF` @8.24, `ZIEKENHUIS` @9.40, `EIGEN STARTUP` @10.80 — the traveler block slides to sit under each station as it is named.
Scene 3 (11.7–14.9s): a title strip above the stations: mono label `JOBTITEL:` with an in-place token cycle (hard-cut swaps): `DEVELOPER` @11.96 → `ARCHITECT` @12.64 → `CTO` @13.10 → `FOUNDER` @13.50.
Scene 4 (14.9–16.42s): the traveler block flips to yellow and gets a rotated badge `GOUD WAARD` (−4deg, the frame's hard shadow) @15.08. Hold.

## Frame 9 — Reden 7: iemand bouwt de AI

- status: animated
- src: compositions/frames/09-bouwt.html
- duration: 11.92s
- transition_in: zoom-through
- scene: Het sterkste argument als grote claim; de levenscyclus van een AI-tool met engineers erachter; "verdwijnt als laatste" landt en blijft staan
- voiceover: "Zeven. Iemand bouwt de AI. Elke AI-tool die je gebruikt, is gebouwd en onderhouden door software engineers. Het vak dat de verandering veroorzaakt, verdwijnt als laatste."
- blueprint: kinetic-type-beats (Adapt)
- focal: the claim `IEMAND BOUWT DE AI.`
- roles: number tile 07 (orange) = supporting · claim = foreground subject · two lifecycle chips + engineer tag = supporting · `ALS LAATSTE` badge = payoff (held)
- sfx: pop @0.0, click @1.52, pop @5.32, pop @6.08, pop @7.36, click @10.56

Scene 1 (0.0–3.0s): cream ground, topbar (pill `REDEN 07 / 07`). Orange number tile `07` @0.0. The claim builds per word, display-xl, centered-left (y ≈ 260-480): `IEMAND` @1.04, `BOUWT` @1.52 (slam, in an orange highlight block), `DE AI.` @2.08.
Scene 2 (3.0–8.3s): under the claim a horizontal chain of ink-bordered chips connected by short ink arrows: `AI-TOOL` @3.52 → `GEBOUWD` @5.32 → `ONDERHOUDEN` @6.08; then a cream-on-ink tag `DOOR SOFTWARE ENGINEERS` underlines the whole chain @7.36.
Scene 3 (8.3–12.42s): @8.48 the claim and chain dim to 30% and shift up; a new two-line headline lands, display-lg: `HET VAK DAT HET VERANDERT` @8.76 / `VERDWIJNT` @10.56; @11.28 a yellow rotated badge `ALS LAATSTE` (−4deg, the frame's hard shadow) slams beside it. Long still hold (deliberate held beat).

## Frame 10 — Diep versus oppervlakkig

- status: animated
- src: compositions/frames/10-diep.html
- duration: 11.6s
- transition_in: crossfade
- scene: Split: links 12 weken copy-paste krijgt een "vervangbaar"-stempel, rechts echt begrip in groen met AI als versterker
- voiceover: "Dus ja: wie in twaalf weken wat leerde copy-pasten, mag zich zorgen maken. Dat vervangt AI. Maar echt begrijpen hoe software werkt? Dat maakt AI alleen maar sterker."
- blueprint: comparison-split (Adapt)
- focal: the two halves, right half wins
- roles: left half (cream-2) = supporting · right half (green) = foreground subject · VERVANGBAAR stamp · VERSTERKT arrow = payoff
- sfx: pop @0.96, key-press @2.56, click @5.28, whoosh-short @6.76, pop @9.52

Adapt: keep two equal halves from opposite wings + punctuating badges; no 3D tilt (flat poster).
Scene 1 (0.0–6.6s): topbar (pill `CONCLUSIE`). Left half panel (x 64-940, y 170-860) cream-2 with ink border slides in from the left @0.96: big `12 WEKEN` (display-lg) @1.32, mono `CTRL+C / CTRL+V` types on @2.56. @5.28 a pink stamp `VERVANGBAAR` (−6deg) slams across it, the panel dims to 60%.
Scene 2 (6.6–12.10s): right half panel (x 980-1856) green with ink border slides in from the right @6.76: cream Archivo `ECHT BEGRIP` (display-lg) @7.12, mono cream `HOE SOFTWARE WERKT` @8.00. @9.52 a tall ink-bordered yellow up-arrow grows inside the right panel with label `AI = VERSTERKER`; @10.96 the right panel gets the frame's hard offset shadow (it "wins"). Hold.

## Frame 11 — Afsluiter

- status: animated
- src: compositions/frames/11-kies.html
- duration: 10s
- transition_in: blur-crossfade
- scene: Groene slotplaat: de one-liner in twee beats, dan de oproep en een roze stempel "KIES!"
- voiceover: "AI pakt je job niet af. Een engineer die AI goed gebruikt, misschien wel. Zorg dat jij die engineer bent. Kies voor software development."
- blueprint: kinetic-type-beats (Adapt)
- focal: the final line `KIES VOOR SOFTWARE DEVELOPMENT`
- roles: green full-bleed ground = background · line swaps = foreground · pink stamp = payoff
- sfx: pop @0.0, whoosh-short @2.24, whoosh-short @5.84, click @8.24, pop @9.28

Scene 1 (0.0–5.8s): full-bleed green ground (the single closing plate), cream type, cream mono topbar with only the kicker. Centered display-lg: `AI PAKT JE JOB` @0.0 / `NIET AF.` @1.00. @2.24 hard-cut swap to: `EEN ENGINEER MET AI` @2.40 / `MISSCHIEN WEL.` @4.68 (the second line in a yellow block with ink type).
Scene 2 (5.8–8.2s): @5.84 hard-cut swap to `ZORG DAT JIJ` / `DIE ENGINEER BENT.` building per chunk @5.84 / @6.88.
Scene 3 (8.2–10.0s): @8.24 final lockup, display-xl cream: `KIES VOOR` @8.24 / `SOFTWARE DEVELOPMENT` @8.88; a pink stamp `KIES!` with cream inner ring (−6deg, the frame's hard shadow) slams into the top-right corner @9.28. This is the final frame: everything fades out over the last 0.4s (9.6–10.0).
