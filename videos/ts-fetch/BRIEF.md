workflow: faceless-explainer
flow: automation
storyboard: no
message: "Met fetch vraag je data op bij een server. Dat gaat in twee stappen, dus met twee awaits: await fetch geeft een Response (met de statuscode), await response.json() leest de inhoud en geeft de data, die je met een interface beschrijft. TypeScript controleert die interface niet. De catch vangt enkel netwerkfouten: een 404 moet je zelf opvangen met response.ok. Meerdere requests laat je tegelijk lopen met Promise.all."
destination: website
aspect: 1920x1080
language: nl
audience: "Studenten webontwikkeling die promises, then/catch, Promise.all en async/await kennen (vervolg op ../ts-promises, ../ts-promise-all en ../ts-async-await)"
length: 189s
angle: how-to
style_preset: ts-light
---

## Intent

Een lesfilmpje bij de cursuspagina `docs/nodejs-+-typescript/asynchroon-programmeren/fetch.md`.
Vervolg op `../ts-promises`, `../ts-promise-all` en `../ts-async-await`; zelfde reeks en stijl.

Vraag van de docent: een heel duidelijk filmpje over fetch, uitmuntend op vlak van didactiek, in
HyperFrames zoals de andere filmpjes en met dezelfde stem. De stem ook optimaliseren.

## Didactische keuzes

- **Eén doorlopend voorbeeld**: de posts van JSONPlaceholder, met de code van de cursuspagina (IIFE,
  `catch (error: any)`), zodat de student de code herkent en gepauzeerd kan kopiëren.
- **Eén doorlopend beeld**: `jouw programma` en `server` met een request die vertrekt en een response
  die terugkomt. Dat beeld komt terug in de hook, bij fetch, bij json en bij de fouten.
- **Voorkennis activeren**: fetch geeft een promise terug, dus alles uit de vorige filmpjes blijft
  gelden (pending / fulfilled / rejected, `await`, `try`/`catch`, `then`, `Promise.all`).
- **Misvattingen expliciet tonen en weerleggen**, telkens met de echte uitvoer:
  1. "fetch geeft de data": nee, een promise van een Response (status, maar nog geen inhoud).
  2. "Waarom twee awaits?": de inhoud lezen (`response.json()`) duurt ook even en geeft ook een promise.
  3. "`Post[]` controleert de data": nee, `json()` geeft `any`; een foute interface geeft `undefined`.
  4. "De catch vangt een 404": nee, enkel als er geen antwoord komt; controleer `response.ok`.
  5. "`await` in een lus is prima": het werkt, maar elke request wacht op de vorige.
- **Voorspellen**: bij de 404 stelt de stem een vraag ("Kom je nu in de catch?") met een seconde
  denktijd voor het antwoord.
- **Ophalen**: `getPost` herhaalt de drie stappen (fetch, controleren, json) voor ze hergebruikt worden.
- **Eén ding per scène**, en elke onthulling op het woord dat ze benoemt.

## Verhaal (volgt de cursuspagina)

1. Hook: data staat op een server; request en response; `fetch`.
2. De API geeft JSON terug; die beschrijf je met `interface Post`.
3. `await fetch(url)`: een promise van een `Response`; de statuscode is er al, de inhoud nog niet.
4. `await response.json()`: leest de body en zet de JSON om; ook een promise, dus een tweede `await`.
5. `json()` geeft `any`: `Post[]` is jouw belofte; een foute interface geeft `undefined`, geen fout.
6. Variant met `then`: twee stappen, twee `then`s.
7. Geen antwoord (server onbereikbaar): de promise wordt rejected; `try`/`catch`.
8. Een 404: je komt niet in de catch; het programma loopt verder zonder data.
9. `response.ok` controleren en zelf een error gooien; `response.status`.
10. `getPost(id)`: de drie stappen in een functie.
11. Vijf posts na elkaar met een `for`-lus en `await`: 5 × 200 ms.
12. `ids.map(...)` → promises → `await Promise.all(...)`: 200 ms, zelfde volgorde.
13. Samenvatting.

Bewust niet in dit filmpje: het hoofdstuk "Testen" (Vitest en fetch mocken). Dat is een ander onderwerp
en verdient een eigen kennisclip. `forEach` met async en `Promise { <pending> }` kwamen al aan bod in
`../ts-async-await`.

## Customizations

- Node.js: `console`-kaart en promise-chips zoals in `../ts-promises`; tijdlijn zoals in `../ts-promise-all`.
- Nieuw in dit filmpje: de **NET CLIP**-kit (`nc-*`: programma- en serverkaart, draden, pakketjes en een
  Response-kaart), getekend met de huisstijl-primitieven. Geen illustraties, icons of emoji.
- Lange regels (de URL) passen niet in het smalle codevlak: de frames met de fetch-regel gebruiken een
  codevlak over de volle breedte (x 80-1840) met het netwerkbeeld eronder.
- Alle code getest met tsc 7 en node tegen de echte API; de console-uitvoer in de video is de echte uitvoer.
- Stem: ElevenLabs eleven_v4, Andie (8OezxDDjGa2d9W45o5Qs), stability 0.5, via de `elevenlabs` CLI, met de
  geoptimaliseerde pijplijn van `tts.py` (lossless, drie takes per regel, automatische keuze, uitspraakcontrole,
  gelijk volume). Codenamen gesplitst ingesproken ("response punt json", "get post", "vier nul vier"); de
  ondertitels zetten ze terug in code-spelling (zie `build.py`).
- Ondertitels aan, geen muziekbed.
