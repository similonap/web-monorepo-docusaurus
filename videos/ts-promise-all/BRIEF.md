---
workflow: faceless-explainer
flow: automation
storyboard: no
message: "Promise.all laat promises die elkaar niet nodig hebben tegelijk lopen: je wacht zo lang als de traagste in plaats van de som. Het resultaat volgt de volgorde van de array, met map maak je de promises, en faalt er één dan faalt alles. Promise.allSettled wacht op alles en geeft per promise een status."
destination: website
aspect: 1920x1080
language: nl
audience: "Studenten webontwikkeling die promises, then en catch kennen (vervolg op ../ts-promises)"
length: 150s
angle: how-to
style_preset: ts-light
---

## Intent

Een lesfilmpje bij de cursuspagina `docs/nodejs-+-typescript/asynchroon-programmeren/promises.md`
(sectie "Promise All": het probleem, de oplossing, volgorde, map, als één promise faalt,
Promise.allSettled) en de sectie "Meerdere requests tegelijk met Promise.all" in `fetch.md`.
Vervolg op `../ts-promises`.

Vraag van de docent: een filmpje over Promise.all (en allSettled).

Verhaal (volgt de cursuspagina):

1. Hook: drie berekeningen van één seconde; na elkaar drie seconden, met Promise.all één.
2. Het probleem: geneste `then`s; elke vermenigvuldiging wacht op de vorige.
3. Promise.all: array van promises in, één promise uit, met een array van resultaten.
4. Tegelijk: de timers starten al bij het maken van de array; je wacht zo lang als de traagste.
5. Volgorde: het resultaat volgt de array, niet wie eerst klaar is.
6. Met `map`: `numbers.map((n) => multiply(n, n))` geeft `Promise<number>[]`.
7. Met fetch: `ids.map((id) => getPost(id))` en `await Promise.all(promises)`.
8. Eén promise faalt: alles faalt meteen, de andere resultaten ben je kwijt.
9. Promise.allSettled: wacht op alles, faalt nooit, `{ status, value }` / `{ status, reason }`.
10. Samenvatting.

## Customizations

- Node.js, geen browser: een `console`-kaart rechts (zelfde plaats en look als de
  `scherm`-kaart van de siblings) en een tijdlijn met balken per promise, zoals de interactieve
  demo `InteractivePromiseAll` op de cursuspagina.
- Code in de TypeScript-stijl van de cursuspagina; `multiply` uit `../ts-promises`.
- Stijl identiek aan de siblings (TS light). Stem: ElevenLabs eleven_v4, Andie
  (8OezxDDjGa2d9W45o5Qs), stability 0.5, via de `elevenlabs` CLI. Codenamen gesplitst
  ingesproken ("promise punt all", "promise punt all settled", "get post"); de ondertitels
  zetten ze terug in code-spelling (zie `build.py`).
- Ondertitels aan, geen muziekbed.
