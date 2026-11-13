# REVIEW — ts-fetch

- Versie 1: 13 scènes, 3:09. Volgt de cursuspagina `docs/nodejs-+-typescript/asynchroon-programmeren/fetch.md`
  (zonder het hoofdstuk Testen, zie `BRIEF.md`).
- `npx hyperframes@0.8.169 check`: ok, 0 errors. Warnings: `clip_media_fit` op een voice-slot, contrast van
  bewust gedimde huisstijltekst (lijnnummers, statusbalk, `⋯`, chip-labels, de gedimde `server`).
- Cuts 03 → 04 → 05, 07 → 08 → 09 en 11 → 12 pixel-identiek boven y 880.
- Alle code getest met tsc 7 + node 24 tegen de echte API; de console-uitvoer in de video is de echte uitvoer
  (`sunt aut facere …`, `undefined`, `TypeError: fetch failed`, `Error: 404`). Van `console.log(error)` toont
  de video enkel de eerste regel.
- Akkoord van de docent op de preview (13 november 2026); staat in `fetch.md`.

## Stem

Zelfde stem, model en instelling als de reeks (Andie, eleven_v4, stability 0.5), gecontroleerd in
`elevenlabs history list`. Wat er gemeten en veranderd is:

- **Instellingen doen niets op eleven_v4.** Getest op één regel: stability 0 / 0.35 / 0.5 / 0.7 / 1,
  speed 0.8 / 0.95 / 1.15, similarity 0.9 en `language_code nl`. Tempo, pauzes, luidheid en toonhoogte
  verschillen niet meer dan twee takes met dezelfde instelling. `seed` wordt geweigerd. `previous_text` /
  `next_text` maakt het slechter (trager, zinnen lopen in elkaar). Er valt dus niets af te stellen.
- **Wat wel verschilt is de take.** Tussen de regels van `ts-async-await` en `ts-promises` schommelt de
  toonhoogte van Andie tot 3,7 halve tonen. `tts.py` spreekt daarom elke regel drie keer in en kiest de take
  die het dichtst bij de toonhoogte (135,6 Hz) en het tempo (11,7 tekens/s) van de reeks ligt. Resultaat:
  1,5 halve toon tussen de 13 regels.
- **Uitspraak gecontroleerd**: elke take is terug-getranscribeerd met speech-to-text (Nederlands). Alle 13
  gekozen takes komen woord voor woord terug, ook `response.json`, `Promise.all`, `404` en `123`.
- **Lossless**: opname als `pcm_44100`, één keer gecodeerd naar `mp3_44100_128` (vroeger kwam de MP3 van
  de API en zou elke nabewerking een tweede codering zijn).
- **Gelijk volume**: elke regel op -19,0 LUFS (mono; dat is -16 LUFS op twee luidsprekers), spreiding 0,1 LU
  (reeks: 1,1 LU), pieken onder -2 dBTP (reeks: tot -0,4).
- **Denktijd**: `[pauze 1.0]` in `SCRIPT.md` verlengt de stilte na "Kom je nu in de catch?" van 0,48 s naar
  1,0 s (knip op het stilste punt, -90 dBFS), en verschuift de woordtimings mee.
- Niet te meten door een script: hoe natuurlijk het klinkt. De andere takes staan in `audio/takes/`
  (niet in git); `python3 tts.py --pick 8=2` zet take 2 van regel 8 in de plaats, daarna `python3 build.py`
  en de timings van die scène nakijken.
