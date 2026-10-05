---
sidebar_label: "useInterval hook"
---

import ExercisePreview from '@site/src/components/ExercisePreview';
import SolutionPreview from './solution/src/App';

# useInterval hook

Download het [starterproject](/exercise-files/react/labo-6-useinterval-hook/starter.zip) en voer daarna `npm install` uit.


> 📂 **Naam project:** `lab-hooks-use-interval`  
> 🔗 **Basisproject:** de vereiste begincode is inbegrepen in het [starterproject](/exercise-files/react/labo-6-useinterval-hook/starter.zip).

Maak een nieuw React project aan en noem deze `lab-hooks-use-timeout`. Schrijf een `useInterval` hook die een functie aanroept elke `delay` milliseconden. De hook moet de volgende parameters aanvaarden:
- `callback`: de functie die aangeroepen wordt elke `delay` milliseconden
- `delay`: het aantal milliseconden tussen elke aanroep van de `callback`

Je moet het interval kunnen aan- en uitzetten door een `running` state te gebruiken. Wanneer `running` op `true` staat, wordt de `callback` elke `delay` milliseconden aangeroepen. Wanneer `running` op `false` staat, wordt de `callback` niet aangeroepen.

Het moet ook mogelijk zijn om de `delay` te veranderen. Wanneer de `delay` verandert, moet het interval opnieuw ingesteld worden met de nieuwe `delay`.

Schrijf een eenvoudig webapplicatie die de `useInterval` hook gebruikt om een teller te maken die elke seconde verhoogd wordt. De applicatie moet ook een button hebben om het interval aan- en uit te zetten. En een invoerveld om de `delay` te veranderen.

## Live voorbeeld

<ExercisePreview component={SolutionPreview} />
