import HyperframesVideo from '@site/src/components/HyperframesVideo';

# Promises

<HyperframesVideo name="ts-promises" title="TypeScript - Promises" />

Een belangrijk mechanisme om asynchrone code te schrijven is het gebruik van Promises. Een Promise is een object dat een waarde bevat die pas op een later moment beschikbaar zal zijn. Zoals het engelse woord al aangeeft, is een Promise een belofte dat de functie die een promise teruggeeft, op een later moment een waarde zal teruggeven.

Een van de meest bekende functies die een Promise gebruikt is de fetch functie. Deze functie wordt gebruikt om data op te halen van een server. Alle communicatie tussen je programma en de server moet asynchroon gebeuren. Dit komt omdat je niet wil dat je programma wacht tot er een antwoord komt van de server. Zelfs al gaat de communicatie met de server heel snel, ze gaat in vergelijking met de uitvoering van een gewone instructie veel trager.

## Aanmaken van een Promise

We gaan het gebruik van een Promise bekijken aan de hand van een voorbeeld. We gaan een Promise maken die een getal teruggeeft. Deze zal een vermenigvuldiging uitvoeren. We maken een Promise aan met de new Promise constructor. Deze constructor heeft als argument een functie die twee argumenten heeft: resolve en reject. Deze twee argumenten zijn functies die we kunnen aanroepen om de Promise te laten veranderen van status. Het type dat de promise teruggeeft zetten we tussen de &lt; > tekens. In ons geval is dit een number.

```typescript
const promise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        resolve(2*2);
    }, 1000);
});
```

Je ziet dat we hier een setTimeout functie gebruiken om de Promise na 1 seconde te laten de promise te resolven. De resolve functie wordt aangeroepen met de waarde die de Promise zal teruggeven. In dit geval is dit het getal 4. 

Het gebruiken van de promise gebeurt net zoals in JavaScript met de then functie. Deze functie heeft als argument een functie die de waarde van de promise zal ontvangen. Deze functie wordt pas uitgevoerd als de promise resolved is. 

```typescript
promise.then((result : number) => {
    console.log(result);
});
```

Het datatype van het result argument is het type dat we hebben opgegeven bij het aanmaken van de promise. In dit geval is dit een number. Je mag het type ook weglaten. TypeScript zal dan zelf het type bepalen aan de hand van het type dat je hebt opgegeven bij het aanmaken van de promise.

## Promise als return type

Meestal maken we niet zelf een Promise aan, maar gebruiken we een functie die een Promise teruggeeft. Deze functie kan dan als return type Promise hebben. We breiden ons voorbeeld uit met een functie die een Promise teruggeeft. Deze functie zal een vermenigvuldiging uitvoeren. We geven de functie een argument mee: number1 en number2. Deze functie zal de vermenigvuldiging van deze twee getallen teruggeven.

```typescript
function multiply(number1: number, number2: number): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(number1 * number2);
        }, 1000);
    });
};
```

Als je deze functie gewoon aanroept alsof het een normale functie is kan je zien dat deze een Promise teruggeeft.

```typescript
const result = multiply(2, 2);
console.log(result); 
```

Je zal hier als output het volgende krijgen:

```
Promise { <pending> }
```

Dit betekent dat de Promise nog niet afgerond is. We kunnen de then functie aanroepen op deze Promise om de waarde te gebruiken.

```typescript
const result = multiply(2, 2);
result.then((result) => {
    console.log(result);
});
```

of we kunnen de then functie meteen aanroepen op de functie.

```typescript
multiply(2, 2).then((result) => {
    console.log(result);
});
```

## Catch

Als je zelf een promise maakt, dan kan je ook een reject functie aanroepen. Deze functie heeft als argument een error object. Dit object kan je zelf aanmaken. Het is een goed idee om een error object te maken dat een boodschap bevat die uitlegt wat er fout is gegaan. 

```typescript
function multiply(number1: number, number2: number): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            if (number1 * number2 > 10) {
                reject(new Error("Result is greater than 10"));
            } else {
                resolve(number1 * number2);
            }
        }, 1000);
    });
};
```

Als je een reject functie aanroept, dan zal de then functie niet uitgevoerd worden. Je kan een catch functie aanroepen om de fout af te handelen. Deze functie heeft als argument een functie die het error object zal ontvangen.

```typescript
multiply(4,10)
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message))
```

## Promise All

<HyperframesVideo name="ts-promise-all" title="TypeScript - Promise.all en Promise.allSettled" />

### Het probleem: na elkaar wachten

Stel dat we drie vermenigvuldigingen willen uitvoeren met onze `multiply` functie. Elke vermenigvuldiging duurt 1 seconde. Als we ze netjes na elkaar uitvoeren, ziet dat er zo uit:

```typescript
multiply(2, 2).then((result1) => {
    multiply(3, 3).then((result2) => {
        multiply(4, 4).then((result3) => {
            console.log([result1, result2, result3]);
        });
    });
});
```

Dit werkt, maar het duurt **3 seconden**: de tweede vermenigvuldiging start pas als de eerste klaar is, en de derde pas als de tweede klaar is. Dat is zonde, want de drie berekeningen hebben elkaar helemaal niet nodig. `3 * 3` hoeft niet te wachten op het resultaat van `2 * 2`.

### De oplossing: Promise.all

Als je meerdere promises hebt die niet van elkaar afhangen, dan kan je de `Promise.all` functie gebruiken. Deze functie heeft als argument een array van promises en geeft één nieuwe promise terug. Die nieuwe promise is resolved zodra **alle** promises in de array resolved zijn. De waarde die ze teruggeeft is een array met de waarden van alle promises.

```typescript
Promise.all([multiply(2, 2), multiply(3, 3), multiply(4, 4)])
    .then((results: number[]) => console.log(results))
    .catch((error) => console.log(error.message));
```

Het resultaat hier is:

```
[4, 9, 16]
```

Het belangrijke verschil: op het moment dat we de array aanmaken, worden de drie `multiply` functies al aangeroepen. De drie timers lopen dus tegelijk. `Promise.all` wacht gewoon tot ze alle drie klaar zijn. Daardoor duurt dit voorbeeld maar **1 seconde** in plaats van 3.

Druk hieronder op **Start** om beide manieren naast elkaar te zien lopen. Je kan ook zelf instellen hoe lang elke vermenigvuldiging duurt.

import InteractivePromiseAll from '@site/src/components/InteractivePromiseAll';

<InteractivePromiseAll />

Bij `Promise.all` wacht je dus niet de som van alle wachttijden, maar enkel zo lang als de traagste promise.

### Volgorde van de resultaten

De resultaten in de array staan altijd in dezelfde volgorde als de promises die je meegaf, ook al zijn ze niet in die volgorde klaar. Stel dat `multiply(2, 2)` 3 seconden zou duren en `multiply(4, 4)` maar 1 seconde, dan krijg je toch `[4, 9, 16]` terug. Het eerste resultaat hoort altijd bij de eerste promise, het tweede bij de tweede, enzovoort. Probeer het maar uit in de demo hierboven.

### Promise.all combineren met map

Vaak heb je niet drie losse aanroepen, maar een array van gegevens waarvoor je telkens dezelfde asynchrone functie wil aanroepen. Dan is `map` ideaal: daarmee zet je elk element van de array om naar een promise.

```typescript
const numbers: number[] = [2, 3, 4, 5];

const promises: Promise<number>[] = numbers.map((n) => multiply(n, n));

Promise.all(promises)
    .then((results: number[]) => console.log(results))
    .catch((error) => console.log(error.message));
```

```
[4, 9, 16, 25]
```

Let goed op de types:

- `numbers` is een `number[]`: een array van getallen.
- `promises` is een `Promise<number>[]`: een array van promises. `map` voert `multiply` meteen uit voor elk getal, dus alle vermenigvuldigingen lopen al.
- `Promise.all(promises)` maakt van die array van promises **één** promise die een `number[]` teruggeeft.

Hoe groot de array ook is, dit duurt nog steeds ongeveer 1 seconde. Dit patroon (array van gegevens → `map` naar promises → `Promise.all`) kom je heel vaak tegen, zeker bij het ophalen van data met `fetch`. Je vindt er een voorbeeld van in het onderdeel [Fetch](./fetch.md#meerdere-requests-tegelijk-met-promiseall).

### Als één promise faalt

`Promise.all` is alles of niets. Als één van de promises rejected wordt, dan wordt de promise van `Promise.all` ook meteen rejected en wordt de `catch` uitgevoerd. De resultaten van de andere promises krijg je dan niet.

We nemen de versie van `multiply` uit het onderdeel Catch, die een fout geeft als het resultaat groter is dan 10:

```typescript
Promise.all([multiply(2, 2), multiply(4, 10), multiply(3, 3)])
    .then((results: number[]) => console.log(results))
    .catch((error) => console.log(error.message));
```

```
Result is greater than 10
```

### Promise.allSettled

Wil je toch de uitkomst van elke promise kennen, ook als er een paar mislukken, dan kan je `Promise.allSettled` gebruiken. Die wacht tot alle promises klaar zijn, of ze nu geslaagd of mislukt zijn, en wordt zelf nooit rejected. Je krijgt een array terug met voor elke promise een object:

- `{ status: "fulfilled", value: ... }` als de promise gelukt is;
- `{ status: "rejected", reason: ... }` als de promise mislukt is. In `reason` zit de error.

Met de `status` kan je dus per promise nagaan of ze gelukt is:

```typescript
Promise.allSettled([multiply(2, 2), multiply(4, 10), multiply(3, 3)])
    .then((results) => {
        for (const result of results) {
            if (result.status === "fulfilled") {
                console.log("gelukt:", result.value);
            } else {
                console.log("mislukt:", result.reason.message);
            }
        }
    });
```

```
gelukt: 4
mislukt: Result is greater than 10
gelukt: 9
```

In de demo hieronder zie je beide naast elkaar. `multiply(4, 10)` faalt, de andere twee lukken. Pas de tijden aan en kijk wanneer elke variant klaar is en wat je als resultaat krijgt.

import InteractivePromiseAllSettled from '@site/src/components/InteractivePromiseAllSettled';

<InteractivePromiseAllSettled />

Kort samengevat:

- Gebruik **`Promise.all`** als je alle resultaten nodig hebt en één fout betekent dat het geheel mislukt is. Je krijgt dan meteen de fout, zonder te wachten op de rest.
- Gebruik **`Promise.allSettled`** als de promises los van elkaar mogen mislukken en je wil weten welke gelukt zijn en welke niet.

## Built-in promises

### Filesystem

Toegang tot het filesysteem is iets dat over het algemeen traag gaat, dus is het ook een ideaal voorbeeld van asynchrone code. De `fs` module heeft een aantal functies die je kan gebruiken om bestanden te lezen en te schrijven. Deze functies hebben een variant die promises gebruikt. Deze functies kan je importeren uit de `fs/promises` module.

```typescript
import { readFile } from "fs/promises";

readFile("test.txt", "utf-8")
    .then((result: string) => console.log(result))
    .catch((error) => console.log(error.message));
```

Deze functie zal de inhoud van het bestand `test.txt` inlezen en teruggeven als een string. Als er een fout optreedt, dan zal de catch functie uitgevoerd worden. Bijvoorbeeld als het bestand niet bestaat.

### DNS lookup

Nog een voorbeeld van een ingebouwde promise is de `lookup` functie van de `dns` module. Deze functie zal een IP adres teruggeven als een string. Als er een fout optreedt, dan zal de catch functie uitgevoerd worden.

```typescript
import { lookup } from 'dns/promises';

lookup('ap.be')
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
```
