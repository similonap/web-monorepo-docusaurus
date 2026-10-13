# Method chaining

import InteractiveChaining from '@site/src/components/InteractiveChaining';
import Quiz from '@site/src/components/Quiz';

Veel arraymethodes geven een nieuwe array terug. Op die nieuwe array kan je meteen weer een methode aanroepen. Zo kan je verschillende methodes na elkaar "aan elkaar hangen". Dit noemen we **method chaining**.

Stel dat je alle getallen groter dan 6 wil verdubbelen. Zonder chaining heb je een tussenvariabele nodig:

```typescript
let numbers : number[] = [5, 12, 8, 21, 3, 14];

let big : number[] = numbers.filter(n => n > 6);
let doubled : number[] = big.map(n => n * 2);

console.log(doubled); // [ 24, 16, 42, 28 ]
```

Met chaining schrijf je dat in één keer. Het resultaat van `filter` gaat rechtstreeks naar `map`:

```typescript
let doubled : number[] = numbers.filter(n => n > 6).map(n => n * 2);
```

Bij langere ketens zet je elke methode best op een nieuwe regel. Zo lees je de code van boven naar onder, stap voor stap:

```typescript
let total : number = numbers
    .filter(n => n > 6)
    .map(n => n * 2)
    .sort((a, b) => a - b)
    .reduce((acc, n) => acc + n, 0);

console.log(total); // 110
```

Zet in het onderstaande component stappen aan of uit, en bekijk het tussenresultaat na elke stap. Wat gebeurt er als je `map` vóór `filter` laat uitvoeren?

<InteractiveChaining />

## Waar moet je op letten?

- **De volgorde maakt uit.** Elke stap werkt op het resultaat van de vorige stap. `filter` gevolgd door `map` kan iets anders opleveren dan `map` gevolgd door `filter`.
- **Kijk naar het returntype.** Je kan enkel verder chainen als de vorige stap een array teruggeeft. `filter`, `map`, `slice`, `concat` en `sort` geven een array terug. `reduce`, `find`, `some`, `every`, `join` en `indexOf` geven één waarde terug; die staan dus altijd op het einde van een keten.
- **Filter zo vroeg mogelijk.** Door eerst te filteren moeten de volgende stappen minder elementen verwerken.

## Een voorbeeld met objecten

Chaining wordt pas echt krachtig met arrays van objecten. Hieronder berekenen we de totale prijs van alle producten die op voorraad zijn, en maken we een lijstje van hun namen:

```typescript
interface Product {
    name: string;
    price: number;
    inStock: boolean;
}

let products : Product[] = [
    { name: "Laptop", price: 999, inStock: true },
    { name: "Muis", price: 25, inStock: false },
    { name: "Toetsenbord", price: 79, inStock: true },
    { name: "Scherm", price: 249, inStock: true }
];

let totaal : number = products
    .filter(product => product.inStock)
    .reduce((acc, product) => acc + product.price, 0);

console.log(totaal); // 1327

let namen : string = products
    .filter(product => product.inStock)
    .sort((a, b) => a.price - b.price)
    .map(product => product.name)
    .join(", ");

console.log(namen); // Toetsenbord, Scherm, Laptop
```

## Test je kennis

<Quiz url="/quizzes/chaining.json" />
