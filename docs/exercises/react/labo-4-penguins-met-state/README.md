---
sidebar_label: "Penguins met state"
---

import ExercisePreview from '@site/src/components/ExercisePreview';
import SolutionPreview from './solution/src/App';

# Penguins met state

Download het [starterproject](/exercise-files/react/labo-4-penguins-met-state/starter.zip) en voer daarna `npm install` uit.


> 📂 **Naam project:** `lab-state-penguin-gallery`  
> 🔗 **Basisproject:** de vereiste begincode is inbegrepen in het [starterproject](/exercise-files/react/labo-4-penguins-met-state/starter.zip).

Maak een kopie van de `penguins` oefening van labo 2 en zorg ervoor dat je de volgende functionaliteiten toevoegt:

Maak een kopie van de `lab-components-penguin-gallery` applicatie van labo 2 naar een nieuw project en noem deze `lab-state-penguin-gallery`. En zorg voor de volgende functionaliteiten:

- Als je op een penguin klikt, wordt deze geselecteerd. De achtergrondkleur van de penguin verandert.
- Als je nog eens op dezelfde penguin klikt, wordt deze terug gedeselecteerd.
- Je kan meerdere penguins selecteren.

Tip: Je hebt een state nodig in de `PenguinCard` component om bij te houden of de penguin geselecteerd is of niet.

## Live voorbeeld

<ExercisePreview component={SolutionPreview} />
