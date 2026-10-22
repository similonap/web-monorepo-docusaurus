# Studentenlijst

Maak een nieuw project aan met de naam `studentenlijst`.

In deze oefening gebruik je arraymethodes op een array van objecten. Gebruik in elke functie de gevraagde arraymethode en **geen** `for`-lus.

Begin met de volgende interface en array:

```typescript
interface Student {
    name: string;
    score: number;
}

let students: Student[] = [
    { name: "Andie", score: 14 },
    { name: "Bert", score: 9 },
    { name: "Cedric", score: 17 },
    { name: "Debbie", score: 12 }
];
```

## Deel 1: map

Schrijf een functie `getNames` die met `map` een array teruggeeft met enkel de namen van de studenten.

```typescript
console.log(getNames(students)); // [ 'Andie', 'Bert', 'Cedric', 'Debbie' ]
```

## Deel 2: filter

Schrijf een functie `getPassed` die met `filter` een nieuwe array teruggeeft met de studenten die geslaagd zijn (een score van 10 of meer).

```typescript
console.log(getNames(getPassed(students))); // [ 'Andie', 'Cedric', 'Debbie' ]
```

## Deel 3: find en findIndex

Schrijf een functie `findStudent` die een array van studenten en een naam verwacht. De functie geeft met `find` de student met die naam terug, of `undefined` als er geen student met die naam is.

```typescript
console.log(findStudent(students, "Cedric")); // { name: 'Cedric', score: 17 }
console.log(findStudent(students, "Eva"));    // undefined
```

Schrijf daarna een functie `updateScore` die een array van studenten, een naam en een nieuwe score verwacht. Zoek met `findIndex` de positie van de student en vervang de student door een nieuw object met de nieuwe score. Bestaat de student niet, dan gebeurt er niets.

```typescript
updateScore(students, "Bert", 11);
console.log(findStudent(students, "Bert")); // { name: 'Bert', score: 11 }
```

## Deel 4: every en some

Schrijf een functie `allPassed` die met `every` controleert of alle studenten geslaagd zijn.

Schrijf een functie `hasDistinction` die met `some` controleert of er minstens één student een score van 16 of meer heeft.

```typescript
console.log(allPassed(students));     // true (Bert heeft nu 11)
console.log(hasDistinction(students)); // true
```

## Deel 5: verwijderen met filter

Schrijf een functie `removeStudent` die een array van studenten en een naam verwacht en met `filter` een **nieuwe** array teruggeeft zonder de student met die naam. Ken het resultaat opnieuw toe aan `students`.

```typescript
students = removeStudent(students, "Andie");
console.log(getNames(students)); // [ 'Bert', 'Cedric', 'Debbie' ]
```
