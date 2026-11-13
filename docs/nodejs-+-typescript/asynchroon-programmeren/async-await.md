import InteractiveAwait from '@site/src/components/InteractiveAwait';
import Quiz from '@site/src/components/Quiz';
import HyperframesVideo from '@site/src/components/HyperframesVideo';

# Async/Await

<HyperframesVideo name="ts-async-await" title="TypeScript - Async/Await" />

Naast de `then` en `catch` functies kan je ook gebruik maken van de `async` en `await` keywords. Dat is geen vervanging van promises, maar een andere manier om met promises te werken. Je code ziet eruit alsof ze synchroon is (de ene regel na de andere), terwijl ze eigenlijk asynchroon is. Over het algemeen wordt `async` en `await` aangeraden boven `then` en `catch`, omdat je code er een stuk leesbaarder van wordt.

## Het probleem: callback hell

We grijpen terug naar het voorbeeld van de `multiply` functie:

```typescript
function multiply(number1: number, number2: number): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(number1 * number2);
        }, 1000);
    });
};
```

Stel je voor dat we eerst de getallen 2 en 2 willen vermenigvuldigen en daarna het resultaat willen vermenigvuldigen met 5. We kunnen dit doen met de `then` functie:

```typescript
multiply(2, 2).then((result) => {
    multiply(result, 5).then((result) => {
        console.log(result);
    });
});
```

Dit valt nog mee, maar als we nog een vermenigvuldiging willen uitvoeren, wordt het al snel onleesbaar:

```typescript
multiply(2, 2).then((result) => {
    multiply(result, 5).then((result) => {
        multiply(result, 10).then((result) => {
            console.log(result);
        });
    });
});
```

Dit probleem noemen we ook wel de **callback hell**: elke stap zit een niveau dieper, en hoe meer stappen, hoe moeilijker de code te lezen is.

## async en await

Met `async` en `await` schrijf je dezelfde code zonder te nesten. Je zet de code in een functie en zet het keyword `async` voor die functie. Binnen een `async` functie mag je `await` gebruiken voor een promise.

```typescript
async function calculate() {
    let result: number = await multiply(2, 2);
    result = await multiply(result, 5);
    result = await multiply(result, 10);
    console.log(result);
}

calculate();
```

```
200
```

Wat doet `await` precies?

- `await` wacht tot de promise klaar is en geeft dan de **waarde** van de promise terug. `await multiply(2, 2)` is dus een `number` (4), geen `Promise<number>`. Daarom kan je het resultaat gewoon in een variabele van het type `number` stoppen.
- Tijdens het wachten **pauzeert de functie**, niet je hele programma. De code na de aanroep van `calculate()` loopt gewoon verder. Pas als de promise klaar is, gaat de functie verder op de regel na de `await`.

Dat zie je goed als je een `console.log` zet na de aanroep:

```typescript
async function calculate() {
    console.log("start");
    const result = await multiply(2, 2);
    console.log("resultaat:", result);
}

calculate();
console.log("na calculate()");
```

```
start
na calculate()
resultaat: 4
```

`"start"` komt eerst, want de functie begint meteen te lopen. Bij de `await` pauzeert ze, en dus komt `"na calculate()"` vóór het resultaat. Een seconde later gaat de functie verder en verschijnt `resultaat: 4`. Volg het hieronder stap voor stap:

<InteractiveAwait />

## Een async functie geeft altijd een Promise terug

Een `async` functie geeft **altijd** een promise terug, ook als je er een gewone waarde mee teruggeeft. Die waarde wordt automatisch in een promise verpakt. Het return type van een `async` functie is daarom altijd een `Promise`:

```typescript
async function getTotal(): Promise<number> {
    const result = await multiply(2, 3);
    return result + 1;
}
```

We geven hier een `number` terug (`result + 1`), maar het return type is `Promise<number>`. Dat is logisch: de functie moet zelf ook wachten op `multiply`, dus het resultaat is pas later beschikbaar.

Roep je `getTotal` aan zonder te wachten, dan krijg je dus een promise en geen getal:

```typescript
const total = getTotal();
console.log(total);
```

```
Promise { <pending> }
```

Om de waarde te krijgen, gebruik je opnieuw `await` (of `then`):

```typescript
const total = await getTotal();
console.log(total); // 7
```

Een `async` functie kan je ook als arrow function schrijven. Het `async` keyword komt dan voor de parameters:

```typescript
const getTotal = async (): Promise<number> => {
    const result = await multiply(2, 3);
    return result + 1;
};
```

## Welke functies moeten async worden?

Als je met `async` en `await` begint, is de vraag vaak: welke functies moeten nu allemaal `async` worden? Daar zijn twee eenvoudige regels voor.

### Regel 1: wie await gebruikt, moet async zijn

`await` mag je enkel gebruiken binnen een `async` functie. Vergeet je het `async` keyword, dan geeft TypeScript een fout:

```typescript
function calculate() {
    const result = await multiply(2, 2);
    console.log(result);
}
```

```
error TS1308: 'await' expressions are only allowed within async functions and at the top levels of modules.
```

De oplossing is `async` voor de functie te zetten: `async function calculate() { ... }`.

### Regel 2: wie de waarde van een async functie nodig heeft, moet ook awaiten

Een `async` functie geeft een promise terug (zie hierboven). Heb je in een andere functie de waarde nodig, dan moet je daar dus ook `await` gebruiken, en dan moet ook die functie `async` worden (regel 1). Het `async` keyword "kruipt" zo omhoog door je code:

```typescript
async function getTotal(): Promise<number> {
    const result = await multiply(2, 3);
    return result + 1;
}

async function printReport(): Promise<void> {
    const total = await getTotal();
    console.log(`Het totaal is ${total}`);
}

async function main() {
    await printReport();
    console.log("Klaar!");
}

main();
```

```
Het totaal is 7
Klaar!
```

- `getTotal` gebruikt `await`, dus die is `async`.
- `printReport` heeft de waarde van `getTotal` nodig, dus die gebruikt `await` en is ook `async`. Een `async` functie die niets teruggeeft, heeft als return type `Promise<void>`.
- `main` wil pas `"Klaar!"` tonen als het rapport afgedrukt is, dus ook die wacht met `await` en is `async`.
- Helemaal bovenaan roep je `main()` op. Daar hoef je niet meer te wachten, want er komt niets meer na.

Vergeet je ergens een `await`, dan helpt TypeScript je meestal. Je werkt dan met een `Promise<number>` in plaats van een `number`, en dat geeft een typefout zodra je er iets mee doet:

```typescript
async function printReport(): Promise<void> {
    const total = getTotal(); // await vergeten
    console.log(total * 2);
}
```

```
error TS2362: The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
```

### Niet elke functie met een promise moet async zijn

Een functie hoeft enkel `async` te zijn als ze zelf `await` gebruikt. Onze `multiply` functie geeft wel een promise terug, maar gebruikt nergens `await`: ze maakt de promise zelf met `new Promise`. Daarom staat er geen `async` voor `multiply`. Het return type is wel `Promise<number>`, net als bij een `async` functie.

### Opgelet met forEach

Gebruik je `await` in een callback, zoals bij `forEach`, dan moet je die callback `async` maken. Maar dan wordt enkel de callback `async`, niet de functie eromheen. `forEach` wacht niet op de promises van de callbacks:

```typescript
async function printSquares() {
    const numbers: number[] = [2, 3, 4];
    numbers.forEach(async (n) => {
        const square = await multiply(n, n);
        console.log(square);
    });
    console.log("Klaar!");
}
```

```
Klaar!
4
9
16
```

`"Klaar!"` verschijnt eerst, terwijl je dat als laatste verwacht. Gebruik in een `async` functie daarom een `for...of` lus. Daarin wacht `await` wel echt:

```typescript
async function printSquares() {
    const numbers: number[] = [2, 3, 4];
    for (const n of numbers) {
        const square = await multiply(n, n);
        console.log(square);
    }
    console.log("Klaar!");
}
```

```
4
9
16
Klaar!
```

Merk op dat de vermenigvuldigingen hier wel na elkaar gebeuren (3 seconden). Hoe je ze tegelijk laat lopen, zie je verderop bij [await en Promise.all](#await-en-promiseall).

## Await op het hoogste niveau

Moet je dan altijd een `main` functie maken? Niet per se. In een **module**, een bestand met minstens één `import` of `export`, mag je `await` ook buiten een functie gebruiken. Dat heet **top-level await**. Projecten die je met `create-clean-node` maakt, zijn daarop voorzien:

```typescript
import { readFile } from "fs/promises";

const text = await readFile("test.txt", "utf-8");
console.log(text);
```

Heeft je bestand geen enkele `import` of `export`, dan is het geen module en geeft TypeScript een fout:

```
error TS1375: 'await' expressions are only allowed at the top level of a file when that file is a module, but this file has no imports or exports. Consider adding an empty 'export {}' to make this file a module.
```

Je kan dit oplossen door je code in een `async` functie te zetten en die aan te roepen:

```typescript
async function main() {
    let result: number = await multiply(2, 2);
    result = await multiply(result, 5);
    result = await multiply(result, 10);
    console.log(result);
}

main();
```

of door de code in een **IIFE** (Immediately Invoked Function Expression) te plaatsen: een `async` arrow function die je meteen aanroept.

```typescript
(async () => {
    let result: number = await multiply(2, 2);
    result = await multiply(result, 5);
    result = await multiply(result, 10);
    console.log(result);
})();
```

## Fouten opvangen met try/catch

Bij promises vang je een fout op met `catch`. Met `await` gebruik je een gewoon `try`/`catch` blok. Wordt een promise rejected, dan gooit `await` de fout en kom je in het `catch` blok terecht.

We nemen de versie van `multiply` uit het onderdeel [Catch](./promises.md#catch), die een fout geeft als het resultaat groter is dan 10:

```typescript
async function calculate() {
    try {
        let result: number = await multiply(2, 2);
        result = await multiply(result, 5);
        console.log(result);
    } catch (error: any) {
        console.log(error.message);
    }
}

calculate();
```

```
Result is greater than 10
```

`multiply(2, 2)` lukt nog (4), maar `multiply(4, 5)` geeft 20 en dat is groter dan 10. De tweede `await` gooit dus de fout, de `console.log(result)` wordt overgeslagen en de `catch` toont de boodschap.

In strict mode is `error` in een `catch` blok van het type `unknown`, en dan mag je `error.message` niet zomaar gebruiken. Met `error: any` zeg je TypeScript dat je dat wel wil, net zoals in het onderdeel Fetch.

## await en Promise.all

Met `await` na elkaar wacht elke regel op de vorige. Dat is nodig als een stap het resultaat van de vorige stap gebruikt, zoals `multiply(result, 5)` hierboven. Maar hebben de promises elkaar niet nodig, dan verlies je tijd:

```typescript
async function calculate() {
    const a = await multiply(2, 2);
    const b = await multiply(3, 3);
    const c = await multiply(4, 4);
    console.log(a, b, c); // na 3 seconden
}
```

Combineer `await` dan met [Promise.all](./promises.md#promise-all). Met destructuring haal je de resultaten meteen uit de array:

```typescript
async function calculate() {
    const [a, b, c] = await Promise.all([multiply(2, 2), multiply(3, 3), multiply(4, 4)]);
    console.log(a, b, c); // na 1 seconde
}
```

```
4 9 16
```

## Test je kennis

<Quiz url="/quizzes/async-await.json" />
