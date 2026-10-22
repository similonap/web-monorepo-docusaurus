# Sorteren

Maak een nieuw project aan met de naam `sorteren`.

In deze oefening gebruik je `sort` met een vergelijkingsfunctie. Geen enkele functie mag de **originele** array aanpassen: maak dus eerst een kopie (met `slice()` of `[...array]`) en sorteer die kopie.

## Deel 1: getallen sorteren

Schrijf een functie `sortAscending` die een array van getallen van klein naar groot gesorteerd teruggeeft, en een functie `sortDescending` die ze van groot naar klein teruggeeft.

```typescript
const numbers: number[] = [10, 1, 5, 100, 25, 2];

console.log(sortAscending(numbers));  // [ 1, 2, 5, 10, 25, 100 ]
console.log(sortDescending(numbers)); // [ 100, 25, 10, 5, 2, 1 ]
console.log(numbers);                 // [ 10, 1, 5, 100, 25, 2 ] -> ongewijzigd
```

:::tip
Probeer ook eens `numbers.slice().sort()` zonder vergelijkingsfunctie. Begrijp je waarom het resultaat niet klopt?
:::

## Deel 2: objecten sorteren

Gebruik de volgende interface en array:

```typescript
interface Person {
    name: string;
    age: number;
}

const people: Person[] = [
    { name: "Cedric", age: 31 },
    { name: "Andie", age: 25 },
    { name: "Debbie", age: 19 },
    { name: "Bert", age: 42 }
];
```

Schrijf een functie `sortByAge` die de personen sorteert van jong naar oud.

Schrijf een functie `sortByName` die de personen alfabetisch sorteert op naam. Gebruik hiervoor `localeCompare`.

```typescript
console.log(sortByAge(people).map(person => person.name));  // [ 'Debbie', 'Andie', 'Cedric', 'Bert' ]
console.log(sortByName(people).map(person => person.name)); // [ 'Andie', 'Bert', 'Cedric', 'Debbie' ]
```

## Deel 3: oudste persoon

Schrijf een functie `oldest` die de naam van de oudste persoon teruggeeft. Gebruik hiervoor je functie `sortByAge`.

```typescript
console.log(oldest(people)); // Bert
```
