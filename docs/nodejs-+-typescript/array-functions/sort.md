# Array.sort()

import InteractiveSort from '@site/src/components/InteractiveSort';
import Quiz from '@site/src/components/Quiz';

Met `sort` sorteer je de elementen van een array. Let op: `sort` past de **originele** array aan (en geeft diezelfde array ook terug).

## Sorteren zonder argument

Zonder argument sorteert `sort` alfabetisch. Voor strings is dat meestal wat je wil:

```typescript
let names : string[] = ["Cedric", "Andie", "Bert"];

names.sort();

console.log(names); // [ 'Andie', 'Bert', 'Cedric' ]
```

Voor getallen gaat het mis. `sort` zet elk element eerst om naar een **string** en vergelijkt die strings teken per teken. Daardoor komt `"100"` voor `"2"`, omdat `"1"` voor `"2"` komt.

```typescript
let numbers : number[] = [10, 1, 5, 100, 25, 2];

numbers.sort();

console.log(numbers); // [ 1, 10, 100, 2, 25, 5 ] -> niet wat je wil!
```

## Een vergelijkingsfunctie meegeven

Om zelf te bepalen hoe er gesorteerd wordt, geef je een **vergelijkingsfunctie** mee. `sort` roept die functie telkens op met twee elementen `a` en `b`, en kijkt naar het getal dat je teruggeeft:

| Returnwaarde | Betekenis |
| --- | --- |
| negatief getal | `a` komt voor `b` |
| positief getal | `b` komt voor `a` |
| `0` | de volgorde van `a` en `b` blijft hetzelfde |

Voor getallen is er een handige verkorte schrijfwijze. `a - b` is negatief als `a` kleiner is, en positief als `a` groter is. Zo sorteer je dus van klein naar groot. Wil je van groot naar klein, gebruik dan `b - a`.

```typescript
let numbers : number[] = [10, 1, 5, 100, 25, 2];

numbers.sort((a, b) => a - b);
console.log(numbers); // [ 1, 2, 5, 10, 25, 100 ]

numbers.sort((a, b) => b - a);
console.log(numbers); // [ 100, 25, 10, 5, 2, 1 ]
```

Probeer het uit in het onderstaande component. Sorteer eerst zonder vergelijkingsfunctie en daarna met. Onderaan kan je twee getallen kiezen om te zien wat de vergelijkingsfunctie teruggeeft.

<InteractiveSort />

## Objecten sorteren

Met een vergelijkingsfunctie kan je ook arrays van objecten sorteren op een property:

```typescript
interface Student {
    name: string;
    score: number;
}

let students : Student[] = [
    { name: "Cedric", score: 17 },
    { name: "Andie", score: 14 },
    { name: "Bert", score: 9 }
];

// op score, hoogste eerst
students.sort((a, b) => b.score - a.score);
console.log(students.map(s => s.name)); // [ 'Cedric', 'Andie', 'Bert' ]
```

Strings kan je niet van elkaar aftrekken. Om op een string-property te sorteren gebruik je `localeCompare`. Die methode geeft zelf al een negatief getal, een positief getal of `0` terug, en houdt ook rekening met hoofdletters en accenten.

```typescript
// op naam, alfabetisch
students.sort((a, b) => a.name.localeCompare(b.name));
console.log(students.map(s => s.name)); // [ 'Andie', 'Bert', 'Cedric' ]
```

Je kan de vergelijkingsfunctie ook volledig uitschrijven met `if`-statements. Dat is handig als de logica ingewikkelder wordt:

```typescript
students.sort((a, b) => {
    if (a.score < b.score) {
        return -1;
    } else if (a.score > b.score) {
        return 1;
    } else {
        return 0;
    }
});
```

:::warning
`sort` past de originele array aan. Wil je de originele volgorde behouden, sorteer dan een kopie: `let sorted = numbers.slice().sort((a, b) => a - b);`
:::

## Test je kennis

<Quiz url="/quizzes/sort.json" />
