# Array.concat(), Array.join() en Array.reverse()

import Quiz from '@site/src/components/Quiz';

## Array.concat()

Met `concat` plak je twee (of meer) arrays aan elkaar. Je krijgt een **nieuwe** array terug; de originele arrays blijven ongewijzigd.

```typescript
let fruit : string[] = ["appel", "peer"];
let groenten : string[] = ["wortel", "prei"];

let boodschappen : string[] = fruit.concat(groenten);

console.log(boodschappen); // [ 'appel', 'peer', 'wortel', 'prei' ]
console.log(fruit);        // [ 'appel', 'peer' ] -> ongewijzigd
```

Je kan ook meerdere arrays of losse waarden meegeven:

```typescript
let a : number[] = [1, 2];
let b : number[] = [3, 4];

console.log(a.concat(b, [5, 6], 7)); // [ 1, 2, 3, 4, 5, 6, 7 ]
```

:::info
Je zal ook vaak de *spread operator* `...` tegenkomen om arrays samen te voegen. `[...a, ...b]` geeft hetzelfde resultaat als `a.concat(b)`.
:::

## Array.join()

`join` zet alle elementen van een array om naar één string. Tussen de elementen komt het scheidingsteken dat je meegeeft. Geef je niets mee, dan wordt een komma gebruikt.

```typescript
let names : string[] = ["Andie", "Bert", "Cedric"];

console.log(names.join());      // Andie,Bert,Cedric
console.log(names.join(", "));  // Andie, Bert, Cedric
console.log(names.join(" - ")); // Andie - Bert - Cedric
console.log(names.join(""));    // AndieBertCedric
console.log(names.join("\n"));  // elke naam op een nieuwe regel
```

`join` is het omgekeerde van de string-methode `split`, die een string opsplitst in een array:

```typescript
let csv : string = "appel;peer;kiwi";

let fruit : string[] = csv.split(";");
console.log(fruit);           // [ 'appel', 'peer', 'kiwi' ]
console.log(fruit.join(";")); // appel;peer;kiwi
```

## Array.reverse()

`reverse` keert de volgorde van de elementen om. Let op: `reverse` past de **originele** array aan.

```typescript
let numbers : number[] = [1, 2, 3, 4, 5];

numbers.reverse();

console.log(numbers); // [ 5, 4, 3, 2, 1 ]
```

Wil je de originele array behouden, maak dan eerst een kopie met `slice()` en keer die kopie om:

```typescript
let numbers : number[] = [1, 2, 3];

let omgekeerd : number[] = numbers.slice().reverse();

console.log(omgekeerd); // [ 3, 2, 1 ]
console.log(numbers);   // [ 1, 2, 3 ]
```

Door `split`, `reverse` en `join` te combineren, kan je bijvoorbeeld een woord omdraaien:

```typescript
let woord : string = "hallo";

let omgedraaid : string = woord.split("").reverse().join("");

console.log(omgedraaid); // ollah
```

## Test je kennis

<Quiz url="/quizzes/concat-join-reverse.json" />
