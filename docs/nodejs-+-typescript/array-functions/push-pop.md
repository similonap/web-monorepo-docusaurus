# Array.push() en Array.pop()

import InteractivePushPop from '@site/src/components/InteractivePushPop';
import Quiz from '@site/src/components/Quiz';

Met `push` en `pop` voeg je elementen toe aan of verwijder je elementen van het **einde** van een array. Beide methodes passen de originele array aan.

| Methode | Wat doet ze? | Wat geeft ze terug? |
| --- | --- | --- |
| `push(element)` | voegt een element toe aan het einde | de nieuwe lengte |
| `pop()` | haalt het laatste element weg | het verwijderde element |

Probeer het zelf uit in het onderstaande component. Kijk telkens naar wat de methode teruggeeft. Met [`shift` en `unshift`](./shift-unshift.md) doe je hetzelfde aan het begin van de array.

<InteractivePushPop />

## Array.push()

Met `push` voeg je een element toe aan het einde van de array. Je kan er ook meerdere tegelijk meegeven.

```typescript
let names : string[] = ["Bert", "Cedric"];

names.push("Debbie");
console.log(names); // [ 'Bert', 'Cedric', 'Debbie' ]

names.push("Emma", "Fatima");
console.log(names); // [ 'Bert', 'Cedric', 'Debbie', 'Emma', 'Fatima' ]
```

## Array.pop()

Met `pop` haal je het laatste element weg. Je krijgt dat element terug, zodat je er nog iets mee kan doen.

```typescript
let names : string[] = ["Bert", "Cedric", "Debbie"];

let last : string | undefined = names.pop();

console.log(last);  // Debbie
console.log(names); // [ 'Bert', 'Cedric' ]
```

Het type van `last` is `string | undefined`. Als de array leeg is, valt er niets te verwijderen en geeft `pop` `undefined` terug.

## Stack (LIFO)

Met `push` en `pop` kan je een **stack** (stapel) nabootsen. Bij een stack haal je altijd het element weg dat je als laatste hebt toegevoegd: *Last In, First Out*. Denk aan een stapel borden of de "ongedaan maken"-knop in een teksteditor.

```typescript
let undoStack : string[] = [];

undoStack.push("typ 'Hallo'");
undoStack.push("maak vet");
undoStack.push("verwijder woord");

console.log(undoStack.pop()); // verwijder woord
console.log(undoStack.pop()); // maak vet
```

## Test je kennis

<Quiz url="/quizzes/push-pop.json" />
