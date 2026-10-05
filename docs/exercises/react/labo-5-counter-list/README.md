---
sidebar_label: "Counter list"
---

import ExercisePreview from '@site/src/components/ExercisePreview';
import SolutionPreview from './solution/src/App';

import YouTubeVideo from '@site/src/components/YouTubeVideo';

# Counter list


> 📂 **Naam project:** `lab-state-counter-list`  
> 🔗 **Basis project:** n/a

Maak een nieuwe React applicatie aan en noem deze `lab-state-counter-list`.

Maak een component `ButtonList` aan met de volgende functionaliteit:
- Het component bevat 1 state genaamd `counters`. Deze state bevat een array van getallen. Deze array begint bij een lege array.
- Het component bevat een button met de tekst "Add counter". Als de gebruiker op deze button klikt, moet er een nieuw getal aan de array toegevoegd worden. Het getal moet 0 zijn.
- Bij elke counter moet er een button getoond worden met de tekst "Increment" of "Decrement". Als de gebruiker op deze button klikt, moet het getal van de overeenkomstige counter verhoogd of verlaagd worden.
- Onderaan staat de som van alle waarden van de counters.



:::note
Je hoeft nog niet elke counter in een apart component te zetten. Je gaat dit later nog doen.
:::

## Live voorbeeld

<ExercisePreview component={SolutionPreview} />

#### Oplossingsvideo

<YouTubeVideo src='https://youtu.be/FKcudUHxIc8'/>
