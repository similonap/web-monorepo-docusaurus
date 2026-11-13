---
workflow: faceless-explainer
flow: automation
storyboard: no
message: "Met async en await schrijf je promise-code zonder te nesten: await wacht op een promise en geeft de waarde, alleen de async functie pauzeert en het programma loopt verder. Een async functie geeft altijd een promise terug; wie await gebruikt moet async zijn, en wie de waarde nodig heeft moet ook awaiten. Fouten vang je met try/catch, en zelfstandige promises laat je met Promise.all tegelijk lopen."
destination: website
aspect: 1920x1080
language: nl
audience: "Studenten webontwikkeling die promises, then/catch en Promise.all kennen (vervolg op ../ts-promises en ../ts-promise-all)"
length: 221s
angle: how-to
style_preset: ts-light
---

## Intent

Een lesfilmpje bij de cursuspagina `docs/nodejs-+-typescript/asynchroon-programmeren/async-await.md`.
Vervolg op `../ts-promises` en `../ts-promise-all`; zelfde reeks en stijl.

Vraag van de docent: een filmpje over async/await, uitgelegd met één codevoorbeeld, stap voor stap en
in alle gevallen. Daarnaast alles van de cursuspagina uitleggen. Geen fetch (komt pas later in de cursus).

Voorbeeld: eerst een student die koffie haalt, daarna een lector die een student om koffie stuurt; beide
vond de docent niet goed passen. Gekozen (door de docent): **een ophaalzoemer in een snackbar**. Je
bestelt aan de toog en krijgt meteen een zoemer (de promise). Eten kan je pas als de zoemer gaat (await),
maar je vrienden praten gewoon verder (de rest van het programma). Geval 3: je vrienden wachten beleefd
op jou (de oproeper wacht ook).

Verhaal (volgt de cursuspagina, met de zoemer als rode draad):

1. Hook: je bestelt, krijgt een zoemer, wacht en eet; de toog maakt de pizza; je vrienden praten verder.
2. Callback hell: geneste `then`s met `multiply`.
3. `async` en `await`: dezelfde berekening zonder nesten; `await` geeft de waarde terug.
4. De zoemer in code: `orderPizza()` (de toog) geeft meteen een promise terug (de zoemer); `eat()` ben jij.
5. Geval 1: eten zonder te wachten: je eet `[object Promise]`, TypeScript zegt niets.
6. Geval 2: je wacht met `await` (`eat` wordt async); je vrienden praten verder.
7. Geval 3: je vrienden wachten op jou: `async function talk() { await eat(); ... }`.
8. Een async functie geeft altijd een promise terug (`getTotal(): Promise<number>`, zonder await `Promise { <pending> }`).
9. Regel 1: wie `await` gebruikt, moet `async` zijn (TS1308).
10. Regel 2: wie de waarde nodig heeft, moet ook awaiten; async kruipt omhoog (`getTotal` → `printReport` → `main`); wie op jouw eten wacht, moet zelf ook async zijn (geval 3).
11. Vergeten `await` geeft een typefout; `multiply` hoeft niet async te zijn.
12. `forEach` met een async callback wacht niet; gebruik `for...of`.
13. Top-level await in een module; zonder import een fout (TS1375) → `main()` of een async IIFE.
14. `try`/`catch` met `multiply(4, 5)` → `Result is greater than 10`.
15. `await` na elkaar tegenover `await Promise.all` (drie pizza's tegelijk in plaats van na elkaar).
16. Samenvatting.

## Customizations

- De zoemer-analogie wordt getekend met de tijdlijn-kit van de reeks (balken per "rol": `jij`, `toog`,
  `vrienden`), een state-chip voor de zoemer en kaartjes met tekst, geen illustraties, icons of emoji (huisstijl).
- Code in de TypeScript-stijl van de cursuspagina. Het zoemervoorbeeld: `orderPizza(): Promise<string>`
  (de toog; resolvet na 1 seconde met `"pizza"`), `eat()` (jij) en in geval 3 `async function talk()`;
  consoleteksten in het Nederlands. Alle drie de gevallen getest met tsc 7 en node.
- Node.js: `console`-kaart rechts en promise-chips zoals in `../ts-promises`.
- Stem: ElevenLabs eleven_v4, Andie (8OezxDDjGa2d9W45o5Qs), stability 0.5, via de `elevenlabs` CLI.
  Codenamen gesplitst ingesproken ("order pizza", "eat", "get total", "for each"); de ondertitels
  zetten ze terug in code-spelling (zie `build.py`).
- Ondertitels aan, geen muziekbed.
