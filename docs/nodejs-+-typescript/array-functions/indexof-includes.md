# Array.indexOf() en Array.includes()

import InteractiveIndexOf from '@site/src/components/InteractiveIndexOf';
import Quiz from '@site/src/components/Quiz';

Wil je weten **of** en **waar** een waarde in een array voorkomt, dan heb je drie methodes:

- `indexOf(waarde)` geeft de index van het **eerste** voorkomen terug, of `-1` als de waarde niet voorkomt.
- `lastIndexOf(waarde)` geeft de index van het **laatste** voorkomen terug, of `-1` als de waarde niet voorkomt.
- `includes(waarde)` geeft `true` of `false` terug, afhankelijk van of de waarde voorkomt.

Typ in het onderstaande component een waarde of kies er een, en kijk wat de drie methodes teruggeven.

<InteractiveIndexOf />

## indexOf() en lastIndexOf()

```typescript
let fruit : string[] = ["appel", "peer", "kiwi", "peer", "banaan"];

console.log(fruit.indexOf("peer"));     // 1
console.log(fruit.lastIndexOf("peer")); // 3
console.log(fruit.indexOf("mango"));    // -1
```

Omdat `-1` betekent dat de waarde niet gevonden is, controleer je dat best voor je de index gebruikt:

```typescript
let index : number = fruit.indexOf("kiwi");

if (index !== -1) {
    console.log(`kiwi staat op positie ${index}`);
} else {
    console.log("geen kiwi gevonden");
}
```

## includes()

Heb je de index niet nodig en wil je enkel weten of een waarde voorkomt, gebruik dan `includes`. Dat leest veel duidelijker dan `indexOf(...) !== -1`.

```typescript
let fruit : string[] = ["appel", "peer", "kiwi"];

console.log(fruit.includes("peer"));  // true
console.log(fruit.includes("mango")); // false

if (!fruit.includes("banaan")) {
    fruit.push("banaan");
}
```

:::warning
Deze methodes vergelijken met `===`. Dat betekent:
- ze zijn hoofdlettergevoelig: `"Appel"` is niet hetzelfde als `"appel"`;
- bij objecten zoeken ze naar **hetzelfde object**, niet naar een object met dezelfde inhoud. Wil je een object zoeken op basis van een property, gebruik dan [`find` of `findIndex`](./find.md).
:::

```typescript
let users = [{ name: "Andie" }, { name: "Bert" }];

console.log(users.includes({ name: "Andie" })); // false: een ander object met dezelfde inhoud
console.log(users.some(user => user.name === "Andie")); // true
```

## Test je kennis

<Quiz url="/quizzes/indexof-includes.json" />
