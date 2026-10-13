# Array.every() en Array.some()

import InteractiveEverySome from '@site/src/components/InteractiveEverySome';
import Quiz from '@site/src/components/Quiz';

Soms wil je geen nieuwe array of een element terugkrijgen, maar enkel een antwoord op een ja/nee-vraag over de hele array:

- `every` geeft `true` terug als **alle** elementen voldoen aan de voorwaarde.
- `some` geeft `true` terug als **minstens één** element voldoet aan de voorwaarde.

Beide methodes krijgen, net zoals `find` en `filter`, een callback functie mee die een `boolean` teruggeeft. Het resultaat is altijd een `boolean`.

```typescript
let numbers : number[] = [4, 8, 15, 16, 23, 42];

let allEven : boolean = numbers.every(n => n % 2 === 0);
console.log(allEven); // false: 15 en 23 zijn oneven

let someEven : boolean = numbers.some(n => n % 2 === 0);
console.log(someEven); // true: 4 is al even
```

## Stoppen zodra het antwoord vastligt

`every` en `some` overlopen niet altijd de hele array. Ze stoppen zodra de uitkomst vastligt:

- `every` stopt bij het **eerste element dat niet voldoet**. Het antwoord is dan zeker `false`.
- `some` stopt bij het **eerste element dat wel voldoet**. Het antwoord is dan zeker `true`.

Kies in het onderstaande component een methode en een voorwaarde en overloop de stappen. Let op hoeveel elementen er effectief getest worden.

<InteractiveEverySome />

## Voorbeelden

Met objecten worden `every` en `some` pas echt handig:

```typescript
interface Student {
    name: string;
    score: number;
}

let students : Student[] = [
    { name: "Andie", score: 14 },
    { name: "Bert", score: 9 },
    { name: "Cedric", score: 17 }
];

let iedereenGeslaagd : boolean = students.every(student => student.score >= 10);
console.log(iedereenGeslaagd); // false

let iemandMetOnderscheiding : boolean = students.some(student => student.score >= 16);
console.log(iemandMetOnderscheiding); // true
```

:::tip
`some` met een voorwaarde is de tegenhanger van `includes`. Met `includes` kan je enkel zoeken op een exacte waarde; met `some` kan je eender welke voorwaarde gebruiken, zoals `students.some(s => s.name === "Bert")`.
:::

:::info
Op een **lege** array geeft `every` altijd `true` terug (er is geen enkel element dat niet voldoet) en `some` altijd `false` (er is geen enkel element dat wel voldoet).
:::

## Test je kennis

<Quiz url="/quizzes/every-some.json" />
