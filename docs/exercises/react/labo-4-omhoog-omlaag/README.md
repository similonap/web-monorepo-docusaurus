---
sidebar_label: "Omhoog/Omlaag"
---

import ExercisePreview from '@site/src/components/ExercisePreview';
import SolutionPreview from './solution/src/App';

import YouTubeVideo from '@site/src/components/YouTubeVideo';

# Omhoog/Omlaag


> 📂 **Naam project:** `lab-state-counter`  
> 🔗 **Basis project:** n/a

Maak een nieuwe React applicatie aan en noem deze `lab-state-counter`.

Maak een component `Counter` aan met de volgende functionaliteit:
- De component bevat een `state` met de naam `count` die een getal bevat. Begint bij 0.
- De component bevat een `button` met de tekst `Omhoog`. Als je op deze knop klikt, wordt de waarde van `count` met 1 verhoogd.
- De component bevat een `button` met de tekst `Omlaag`. Als je op deze knop klikt, wordt de waarde van `count` met 1 verlaagd.
- De component bevat de tekst `Count: {count}`. Hier wordt de waarde van `count` getoond.
- Zorg ervoor dat de tekst rood wordt als `count` kleiner is dan 0 en groen wordt als `count` groter is dan 0. Als het gelijk is aan 0, wordt de tekst zwart.

Gebruik deze component in de `App` component om de volgende pagina te maken:



## Live voorbeeld

<ExercisePreview component={SolutionPreview} />

#### Oplossingsvideo

<YouTubeVideo src='https://youtu.be/OMa72fFFRUI'/>
