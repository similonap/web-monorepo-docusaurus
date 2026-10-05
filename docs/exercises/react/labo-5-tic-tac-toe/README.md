---
sidebar_label: "Tic Tac Toe"
---

import ExercisePreview from '@site/src/components/ExercisePreview';
import SolutionPreview from './solution/src/App';

# Tic Tac Toe

Download het [starterproject](/exercise-files/react/labo-5-tic-tac-toe/starter.zip) en voer daarna `npm install` uit.


> 📂 **Naam project:** `lab-state-tic-tac-toe`  
> 🔗 **Basis project:** n/a

Maak een nieuwe React applicatie aan en noem deze `lab-state-tic-tac-toe`.

Maak een component `TicTacToe` aan met de volgende functionaliteit:
- Het component bevat een `state` met de naam `board` die een array bevat met 9 elementen. Elk element is een string met de waarde `''`.
- Het component bevat een `state` met de naam `player` die de waarde `X` of `O` bevat. Dit is de speler die aan de beurt is. De speler begint bij `X`.
- Gebruik de `map` functie om een array van 9 `div` elementen te maken. Elk `div` element heeft een `onClick` event handler die een functie aanroept die de `board` state verandert. De functie krijgt als parameter de index van het `div` element dat geklikt is.
- Als je op een `div` element klikt, wordt de waarde van het `div` element veranderd naar het symbool van de speler die aan de beurt is.

Het spel ziet er nu als volgt uit:

## Live voorbeeld

<ExercisePreview component={SolutionPreview} />
