---
workflow: faceless-explainer
flow: automation
storyboard: no
message: "Een promise is een waarde die pas later beschikbaar is. Je maakt er een met new Promise, vervult ze met resolve of laat ze mislukken met reject; met then gebruik je de waarde en met catch vang je de fout op."
destination: website
aspect: 1920x1080
language: nl
audience: "Studenten webontwikkeling die TypeScript basics kennen (types, functies, arrow functions) en net met asynchroon programmeren in Node.js beginnen"
length: 150s
angle: how-to
style_preset: ts-light
---

## Intent

Een lesfilmpje bij de cursuspagina `docs/nodejs-+-typescript/asynchroon-programmeren/promises.md`
(secties "Aanmaken van een Promise", "Promise als return type", "Catch", "Built-in promises").
Promise.all en Promise.allSettled krijgen een eigen filmpje (`../ts-promise-all`).

Vraag van de docent: een filmpje over de basics van promises.

Verhaal (volgt de cursuspagina):

1. Hook: data opvragen bij een server duurt even; je programma wacht niet en krijgt meteen een
   promise, een belofte dat de waarde later komt.
2. Aanmaken: `new Promise<number>((resolve, reject) => { ... })`, het type tussen de punthaken.
3. `setTimeout` van één seconde, daarna `resolve(2 * 2)`: de promise gaat van pending naar fulfilled.
4. `then`: de functie loopt pas als de promise klaar is; `result` is een `number`.
5. Asynchroon: een `console.log` onder de `then` verschijnt eerst.
6. Promise als return type: `multiply(number1, number2): Promise<number>`.
7. Meteen loggen geeft `Promise { <pending> }`; gebruik `then`, ook rechtstreeks op de aanroep.
8. `reject(new Error("Result is greater than 10"))` als het resultaat groter is dan 10.
9. `catch`: bij een reject wordt `then` overgeslagen; `multiply(4, 10)` logt de boodschap.
10. Ingebouwde promises: `readFile` uit `fs/promises` (en `fetch`).
11. Samenvatting.

## Customizations

- Node.js, geen browser: in plaats van de `scherm`-kaart een `console`-kaart (zelfde plaats
  en look) met de uitvoer van het programma, plus een promise-chip die de toestand toont
  (`pending`, `fulfilled`, `rejected`).
- Code in de TypeScript-stijl van de cursuspagina (4 spaties, `new Promise<number>`,
  `(result) => console.log(result)`).
- Stijl identiek aan de siblings (TS light). Stem: ElevenLabs eleven_v4, Andie
  (8OezxDDjGa2d9W45o5Qs), stability 0.5, via de `elevenlabs` CLI. Codenamen gesplitst
  ingesproken ("set timeout", "console log", "read file"); de ondertitels zetten ze terug in
  code-spelling (zie `build.py`).
- Ondertitels aan, geen muziekbed.
