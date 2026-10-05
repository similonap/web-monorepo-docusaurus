---
sidebar_label: "Input veld"
---

import ExercisePreview from '@site/src/components/ExercisePreview';
import SolutionPreview from './solution/src/App';

# Input veld

Download het [starterproject](/exercise-files/react/labo-4-input-veld/starter.zip) en voer daarna `npm install` uit.


> 📂 **Naam project:** `lab-state-shared-inputs`  
> 🔗 **Basis project:** n/a

Maak een nieuwe React applicatie aan en noem deze `lab-state-shared-inputs`.

Maak een component `InputFields` aan met de volgende functionaliteit:
- Het component heeft 1 state `inputValue` die een string bevat. Deze begint bij een lege string.
- Zorg ervoor dat je 5 input velden op je scherm staat die allemaal de waarde van `inputValue` bevatten.
- Zorg ervoor dat als je iets typt in 1 van de input velden, de waarde van `inputValue` verandert en alle input velden de nieuwe waarde bevatten.

Gebruik deze component in de `App` component om de volgende pagina te maken:

## Live voorbeeld

<ExercisePreview component={SolutionPreview} />
