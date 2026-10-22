# Getallen

Maak een nieuw project aan met de naam `getallen`.

In deze oefening schrijf je een aantal kleine functies die werken op een array van getallen. Gebruik in elke functie de gevraagde arraymethode en **geen** `for`-lus.

Gebruik de volgende array om je functies te testen:

```typescript
const numbers: number[] = [3, 8, 12, 5, 7, 20, 1];
```

## Deel 1: forEach

Schrijf een functie `printNumbers` die een array van getallen verwacht en met `forEach` elk getal op een aparte regel logt, samen met zijn positie (beginnend bij 1).

```typescript
printNumbers(numbers);
```

```
Getal 1: 3
Getal 2: 8
Getal 3: 12
Getal 4: 5
Getal 5: 7
Getal 6: 20
Getal 7: 1
```

## Deel 2: map

Schrijf een functie `double` die met `map` een nieuwe array teruggeeft waarin elk getal verdubbeld is.

```typescript
console.log(double(numbers)); // [ 6, 16, 24, 10, 14, 40, 2 ]
```

## Deel 3: filter

Schrijf een functie `onlyEven` die met `filter` een nieuwe array teruggeeft met enkel de even getallen.

```typescript
console.log(onlyEven(numbers)); // [ 8, 12, 20 ]
```

## Deel 4: find en findIndex

Schrijf een functie `firstGreaterThan` die een array van getallen en een grens `limit` verwacht. De functie geeft met `find` het eerste getal terug dat groter is dan `limit`, of `undefined` als er geen zo'n getal is.

```typescript
console.log(firstGreaterThan(numbers, 10));  // 12
console.log(firstGreaterThan(numbers, 100)); // undefined
```

Schrijf daarna een functie `positionOfFirstGreaterThan` die hetzelfde doet met `findIndex`, maar de **positie** teruggeeft.

```typescript
console.log(positionOfFirstGreaterThan(numbers, 10));  // 2
console.log(positionOfFirstGreaterThan(numbers, 100)); // -1
```

## Deel 5: every en some

Schrijf een functie `allPositive` die met `every` controleert of alle getallen groter zijn dan 0.

Schrijf een functie `containsNegative` die met `some` controleert of er minstens één negatief getal in de array zit.

```typescript
console.log(allPositive(numbers));          // true
console.log(allPositive([4, -2, 6]));       // false
console.log(containsNegative(numbers));     // false
console.log(containsNegative([4, -2, 6]));  // true
```
