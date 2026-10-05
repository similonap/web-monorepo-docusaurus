---
sidebar_label: "Regenboog"
---

import ExercisePreview from '@site/src/components/ExercisePreview';
import SolutionPreview from './solution/src/App';

# Regenboog

Download het [starterproject](/exercise-files/react/labo-1-regenboog/starter.zip) en voer daarna `npm install` uit.


> 📂 **Naam project:** `lab-basics-rainbow`  
> 🔗 **Basis project:** n/a

Maak een nieuwe react applicatie aan `lab-basics-rainbow`.

#### Opdracht

Definieer een array met de naam colors om een reeks kleuren te genereren. De array moet 100 verschillende kleuren bevatten, waarbij elke kleur wordt gedefinieerd in het HSL (Hue, Saturation, Lightness) kleurenmodel. Elke kleur in de reeks moet een unieke tint hebben, variërend van 0 graden (rood) tot 360 graden (rood).

Je kan deze array gebruiken om de kleuren te genereren:

```typescript
const colors = Array.from({length: 100}, (_, i) => `hsl(${i * 360 / 100}, 100%, 50%)`);
```

Gebruik de map-functie om de kleuren in de array weer te geven als verticale div's op de webpagina. Elke balk moet een unieke kleur hebben, en de breedte van de balk moet 100% zijn, terwijl de hoogte 4 pixels moet zijn.

Je hebt op dit moment nog niet geleerd hoe je css gebruikt. Je kan dit doen aan de hand van inline css:

```typescript
<div style={{width: "100%", height: "4px", backgroundColor: "red"}}></div>
```

Dit wordt later nog uitgelegd! Begrijp je hoe dit werkt, kan je ook eens proberen de regenboog in de andere richting te laten gaan! Tip: Twee woorden: flex-direction en flex!

## Live voorbeeld

<ExercisePreview component={SolutionPreview} />
