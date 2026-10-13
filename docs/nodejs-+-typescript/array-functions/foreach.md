# Array.forEach()

import Quiz from '@site/src/components/Quiz';

De `forEach` methode voert een callback functie uit voor **elk** element van de array. Je hebt deze methode al gezien bij [functies](../type-systeem/functions.md), waar we ze gebruikten om callback functies uit te leggen.

```typescript
let names : string[] = ["Andie", "Bert", "Cedric"];

names.forEach(name => console.log(name));
// Andie
// Bert
// Cedric
```

Net zoals bij `map` en `filter` krijgt de callback als tweede parameter de `index` mee:

```typescript
names.forEach((name, index) => {
    console.log(`${index + 1}. ${name}`);
});
// 1. Andie
// 2. Bert
// 3. Cedric
```

## forEach geeft niets terug

Het grote verschil met `map` is dat `forEach` **niets** teruggeeft (het returntype is `void`). Je gebruikt `forEach` dus enkel als je met elk element iets wil *doen* (bijvoorbeeld iets uitprinten), niet als je een nieuwe array wil maken.

```typescript
let numbers : number[] = [1, 2, 3];

let result = numbers.forEach(n => n * 2);
console.log(result); // undefined

let doubled : number[] = numbers.map(n => n * 2);
console.log(doubled); // [ 2, 4, 6 ]
```

## forEach of for...of?

Een `forEach` kan je bijna altijd vervangen door een `for...of` lus. Die is vaak even leesbaar en heeft een paar voordelen: je kan de lus vroegtijdig stoppen met `break`, en `await` werkt er gewoon in.

```typescript
let names : string[] = ["Andie", "Bert", "Cedric"];

for (let name of names) {
    if (name === "Bert") {
        break; // in een forEach kan je niet stoppen
    }
    console.log(name);
}
// Andie
```

:::tip
Gebruik `forEach` of `for...of` om iets te *doen* met elk element. Wil je een nieuwe array of een waarde berekenen, gebruik dan `map`, `filter`, `find` of `reduce`.
:::

## Test je kennis

<Quiz url="/quizzes/foreach.json" />
