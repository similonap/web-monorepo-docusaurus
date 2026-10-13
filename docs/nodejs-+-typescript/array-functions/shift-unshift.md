# Array.shift() en Array.unshift()

import InteractivePushPop from '@site/src/components/InteractivePushPop';
import Quiz from '@site/src/components/Quiz';

`shift` en `unshift` werken net zoals [`pop` en `push`](./push-pop.md), maar dan aan het **begin** van de array. Ook deze methodes passen de originele array aan.

| Methode | Wat doet ze? | Wat geeft ze terug? |
| --- | --- | --- |
| `unshift(element)` | voegt een element toe aan het begin | de nieuwe lengte |
| `shift()` | haalt het eerste element weg | het verwijderde element |

<InteractivePushPop />

## Array.unshift()

Met `unshift` voeg je een element toe aan het begin van de array. Alle bestaande elementen schuiven een plaats op, dus hun index verandert.

```typescript
let names : string[] = ["Bert", "Cedric"];

names.unshift("Andie");
console.log(names); // [ 'Andie', 'Bert', 'Cedric' ]
```

## Array.shift()

Met `shift` haal je het eerste element weg. Je krijgt dat element terug.

```typescript
let names : string[] = ["Andie", "Bert", "Cedric"];

let first : string | undefined = names.shift();

console.log(first); // Andie
console.log(names); // [ 'Bert', 'Cedric' ]
```

Net zoals bij `pop` is het type `string | undefined`: op een lege array geeft `shift` `undefined` terug.

## Queue (FIFO)

Door `push` en `shift` te combineren, kan je een **queue** (wachtrij) nabootsen. Bij een queue wordt het element dat als eerste is toegevoegd ook als eerste behandeld: *First In, First Out*. Denk aan een rij aan de kassa: je voegt achteraan toe met `push` en haalt vooraan weg met `shift`.

```typescript
let queue : string[] = [];

queue.push("Andie");
queue.push("Bert");
queue.push("Cedric");

console.log(queue.shift()); // Andie
console.log(queue.shift()); // Bert
console.log(queue);         // [ 'Cedric' ]
```

## Test je kennis

<Quiz url="/quizzes/shift-unshift.json" />
