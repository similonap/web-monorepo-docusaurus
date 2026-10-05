---
sidebar_label: "Alien Alphabet"
---

import ExercisePreview from '@site/src/components/ExercisePreview';
import SolutionPreview from './solution/src/App';

# Alien Alphabet

Download het [starterproject](/exercise-files/react/labo-1-alien-alphabet/starter.zip) en voer daarna `npm install` uit.


> 📂 **Naam project:** `lab-basics-alien-alphabet`  
> 🔗 **Basis project:** n/a

Maak een nieuwe react applicatie aan `lab-basics-alien-alphabet`.

#### Opdracht

We willen in deze opdracht een aanzet geven tot een vertaalprogramma voor een buitenaards alfabet. We hebben een afbeelding voor elke letter van het alfabet. We willen deze afbeeldingen tonen in de browser.

- Maak een array aan met alle letters van het alfabet. Je mag de letters zelf typen, of je kan gebruik maken van de `Array.from` functie. Zoek eens op hoe je aan de hand van de ASCII code een letter kan omzetten naar een string.
- Maak een array aan met alle afbeeldingen van het alfabet. De afbeelding van de letters kan je vinden op `https://raw.githubusercontent.com/slimmii/alien-alphabet/master/` gevolgd door de letter in hoofdletters en de extensie `.png`. Je kan deze afbeeldingen gebruiken door de `src` property van de `img` tag te zetten op de url van de afbeelding.
  - Bv.:  
    `https://raw.githubusercontent.com/slimmii/alien-alphabet/master/A.png`  
    `https://raw.githubusercontent.com/slimmii/alien-alphabet/master/B.png`  
    `https://raw.githubusercontent.com/slimmii/alien-alphabet/master/C.png`  
    ...
- Gebruik de map-functie om de afbeeldingen weer te geven in de browser. Elk element in de alphabetImages-array moet worden weergegeven als een `<img>` tag binnen een `<button>`-element.

#### Voorbeeldoplossing

<ExercisePreview component={SolutionPreview} />
