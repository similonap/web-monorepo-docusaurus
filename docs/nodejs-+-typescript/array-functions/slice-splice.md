# Array.slice() en Array.splice()

import InteractiveSliceSplice from '@site/src/components/InteractiveSliceSplice';
import Quiz from '@site/src/components/Quiz';

`slice` en `splice` lijken op elkaar, maar ze doen iets heel anders:

- `slice` maakt een **kopie** van een stuk van de array. De originele array blijft ongewijzigd.
- `splice` **haalt elementen weg** uit de originele array (en kan er nieuwe tussen steken). De originele array verandert dus.

Wissel in het onderstaande component tussen `slice` en `splice` en verschuif de argumenten. Let vooral op het onderste paneel: wat gebeurt er met de originele array?

<InteractiveSliceSplice />

## Array.slice()

`slice(start, end)` geeft een nieuwe array terug met de elementen vanaf index `start` tot (maar **niet tot en met**) index `end`.

```typescript
let letters : string[] = ["a", "b", "c", "d", "e", "f"];

let deel : string[] = letters.slice(1, 4);

console.log(deel);    // [ 'b', 'c', 'd' ]
console.log(letters); // [ 'a', 'b', 'c', 'd', 'e', 'f' ] -> ongewijzigd
```

Laat je `end` weg, dan neemt `slice` alles tot het einde van de array. Een negatieve index telt vanaf het einde.

```typescript
console.log(letters.slice(3));  // [ 'd', 'e', 'f' ]
console.log(letters.slice(-2)); // [ 'e', 'f' ] -> de laatste twee
console.log(letters.slice());   // een volledige kopie van de array
```

:::tip
`slice()` zonder argumenten is een handige manier om een kopie van een array te maken. Zo kan je de kopie aanpassen zonder dat de originele array mee verandert.
:::

## Array.splice()

`splice(start, deleteCount)` verwijdert `deleteCount` elementen vanaf index `start` uit de originele array. Je krijgt de verwijderde elementen terug als een array.

```typescript
let letters : string[] = ["a", "b", "c", "d", "e", "f"];

let verwijderd : string[] = letters.splice(1, 2);

console.log(verwijderd); // [ 'b', 'c' ]
console.log(letters);    // [ 'a', 'd', 'e', 'f' ] -> aangepast!
```

Na `deleteCount` kan je nog extra elementen meegeven. Die worden op de plaats van `start` tussengevoegd. Met een `deleteCount` van `0` voeg je dus elementen in zonder iets te verwijderen.

```typescript
let letters : string[] = ["a", "b", "c", "d"];

letters.splice(1, 2, "X", "Y");
console.log(letters); // [ 'a', 'X', 'Y', 'd' ] -> b en c vervangen door X en Y

letters.splice(1, 0, "Z");
console.log(letters); // [ 'a', 'Z', 'X', 'Y', 'd' ] -> enkel Z ingevoegd
```

Wil je een element op een bepaalde index verwijderen, dan gebruik je `splice(index, 1)`. Samen met `indexOf` kan je zo een element op basis van zijn waarde verwijderen:

```typescript
let names : string[] = ["Andie", "Bert", "Cedric"];

let index : number = names.indexOf("Bert");
if (index !== -1) {
    names.splice(index, 1);
}

console.log(names); // [ 'Andie', 'Cedric' ]
```

:::info
Wil je de originele array niet aanpassen, gebruik dan liever [`filter`](./filter.md) om elementen te "verwijderen". Dat geeft een nieuwe array terug.
:::

## Test je kennis

<Quiz url="/quizzes/slice-splice.json" />
