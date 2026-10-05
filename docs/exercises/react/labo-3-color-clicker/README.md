---
sidebar_label: "Color Clicker"
---

import ExercisePreview from '@site/src/components/ExercisePreview';
import SolutionPreview from './solution/src/App';

# Color Clicker

Download het [starterproject](/exercise-files/react/labo-3-color-clicker/starter.zip) en voer daarna `npm install` uit.


> 📂 **Naam project:** `lab-events-color-clicker`  
> 🔗 **Basis project:** n/a

Maak een nieuwe React applicatie aan en noem deze `lab-events-color-clicker`.

Maak een component `ColorSquare` aan met de volgende properties:
- `color`: string, de kleur van de vierkant
- `size`: number, de grootte van het vierkant

Gebruik een `div` element om het vierkant te tonen. Geef het vierkant de juiste kleur en grootte.

Zorg voor een event handler die een alert toont met de kleur van het vierkant als je erop klikt. Gebruik een handleClick functie (met het juiste type) die de kleur van het vierkant toont in een alert.

Maak 10 vierkanten met willekeurige kleuren en toon deze in een rij op het scherm.

## Live voorbeeld

<ExercisePreview component={SolutionPreview} />
