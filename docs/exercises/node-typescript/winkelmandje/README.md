# Winkelmandje

Maak een nieuw project aan met de naam `winkelmandje`.

In deze oefening gebruik je `reduce` om uit een array één waarde te berekenen. Gebruik in elke functie `reduce` en **geen** `for`-lus.

Begin met de volgende interface en array:

```typescript
interface Product {
    name: string;
    category: string;
    price: number;
    quantity: number;
}

const cart: Product[] = [
    { name: "Appels", category: "fruit", price: 0.5, quantity: 6 },
    { name: "Brood", category: "bakkerij", price: 2.4, quantity: 1 },
    { name: "Bananen", category: "fruit", price: 0.3, quantity: 4 },
    { name: "Kaas", category: "zuivel", price: 4.5, quantity: 1 },
    { name: "Croissant", category: "bakkerij", price: 1.2, quantity: 3 }
];
```

## Deel 1: aantal producten

Schrijf een functie `totalItems` die het totale aantal stuks in het winkelmandje berekent (de som van alle `quantity`'s).

```typescript
console.log(totalItems(cart)); // 15
```

## Deel 2: totaalprijs

Schrijf een functie `totalPrice` die de totale prijs van het winkelmandje berekent. De prijs van een product is `price * quantity`.

```typescript
console.log(totalPrice(cart).toFixed(2)); // 14.70
```

## Deel 3: duurste product

Schrijf een functie `mostExpensive` die het product met de hoogste `price` teruggeeft. Geef hier **geen** `initialValue` mee aan `reduce`, zodat het eerste product als startwaarde gebruikt wordt. Je mag ervan uitgaan dat het winkelmandje niet leeg is.

```typescript
console.log(mostExpensive(cart).name); // Kaas
```

## Deel 4: tellen per categorie

Schrijf een functie `countByCategory` die een object teruggeeft met per categorie het aantal **verschillende producten** in die categorie. Het type van het resultaat is `Record<string, number>`.

```typescript
console.log(countByCategory(cart)); // { fruit: 2, bakkerij: 2, zuivel: 1 }
```
