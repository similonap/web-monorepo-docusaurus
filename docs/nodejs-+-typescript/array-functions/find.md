# Array.find() en Array.findIndex()

De `find` methode zal het eerste element van de array teruggeven waarvoor de callback functie `true` teruggeeft. Zodra een match gevonden is, stopt `find` meteen — de overige elementen worden niet meer bekeken.

import InteractiveFind from '@site/src/components/InteractiveFind';
import Quiz from '@site/src/components/Quiz';

<InteractiveFind />

Het type van `firstEven` is `number | undefined`. Dit komt omdat de `find` methode `undefined` zal teruggeven als er geen element is gevonden waarvoor de callback functie `true` teruggeeft. Zelfs als je zeker weet dat er altijd een element zal zijn dat voldoet aan de voorwaarde, moet je nog steeds `undefined` in overweging nemen.

```typescript
let names : string[] = ["Andie", "Bert", "Cedric"];

let firstD : string | undefined = names.find(name => name.startsWith("D"));

console.log(firstD); // undefined
```

import InteractiveFindNames from '@site/src/components/InteractiveFindNames';

<InteractiveFindNames />

## Array.findIndex()

`findIndex` werkt net zoals `find`, maar geeft niet het element zelf terug. Je krijgt de **index** van het eerste element waarvoor de callback functie `true` teruggeeft. Wordt er geen element gevonden, dan krijg je `-1` (en niet `undefined`). Het type is dus gewoon `number`.

```typescript
let numbers : number[] = [1, 3, 4, 7, 8];

let indexFirstEven : number = numbers.findIndex(element => element % 2 === 0);
console.log(indexFirstEven); // 2

let indexBig : number = numbers.findIndex(element => element > 100);
console.log(indexBig); // -1
```

`findIndex` is handig als je een element wil aanpassen of verwijderen en je dus moet weten **waar** het staat. Met `indexOf` kan je enkel zoeken op een exacte waarde; met `findIndex` kan je zoeken met een voorwaarde, bijvoorbeeld op een property van een object.

```typescript
interface User {
    id: number;
    name: string;
}

let users : User[] = [
    { id: 1, name: "Andie" },
    { id: 2, name: "Bert" },
    { id: 3, name: "Cedric" }
];

let index : number = users.findIndex(user => user.id === 2);

if (index !== -1) {
    users[index] = { id: 2, name: "Debbie" }; // vervang de gebruiker
    // of: users.splice(index, 1);           // verwijder de gebruiker
}
```

## Test je kennis

<Quiz url="/quizzes/find.json" />
