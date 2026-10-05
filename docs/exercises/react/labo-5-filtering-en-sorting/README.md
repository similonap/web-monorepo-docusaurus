---
sidebar_label: "Filtering en sorting"
---

import ExercisePreview from '@site/src/components/ExercisePreview';
import SolutionPreview from './solution/src/App';

import YouTubeVideo from '@site/src/components/YouTubeVideo';

# Filtering en sorting

Download het [starterproject](/exercise-files/react/labo-5-filtering-en-sorting/starter.zip) en voer daarna `npm install` uit.


> 📂 **Naam project:** `lab-state-filtering`  
> 🔗 **Basis project:** n/a

Maak een nieuwe React applicatie aan en noem deze `lab-state-filtering`.

Maak een component `Filtering` aan met de volgende functionaliteit:
- Maak een lijst van studenten met de volgende properties: `name`, `age`, `year`.
- Zorg voor een search input waar de gebruiker kan zoeken op naam.
- Als de gebruiker in de search input typt, moet de lijst gefilterd worden op de naam van de student. 
- Als je op de header van de tabel klikt, moet de lijst gesorteerd worden op de property waarop je geklikt hebt.
- Je hebt hier twee states nodig: `sortField` en `searchText`. De eerste state bevat de property waarop gesorteerd moet worden, de tweede state bevat de tekst die gebruikt wordt om te filteren.



## Live voorbeeld

<ExercisePreview component={SolutionPreview} />

#### Oplossingsvideo

<YouTubeVideo src='https://youtu.be/wvtt_BGSNrc'/>
