---
sidebar_label: "Simpele componenten"
---

import ExercisePreview from '@site/src/components/ExercisePreview';
import SolutionPreview from './solution/src/App';

import YouTubeVideo from '@site/src/components/YouTubeVideo';

# Simpele componenten

Download het [starterproject](/exercise-files/react/labo-2-simpele-componenten/starter.zip) en voer daarna `npm install` uit.


> 📂 **Naam project:** `lab-components-basics`  
> 🔗 **Basis project:** n/a

Maak een nieuwe React applicatie aan en noem deze `lab-components-basics`.

Maak de volgende componenten aan:
- `Header` met als props `title` en `subtitle`
- `List` met als props `items` (array van strings). 
    - Elke string wordt getoond in een apart component `ListItem` met als props `text`.
    - Gebruik hiervoor de `map` functie. 
    - Gebruik een ongeordende lijst (`<ul>`) om de items te tonen.
- `Footer` met als props `copy` en `year`

Gebruik deze componenten in de `App` component om de volgende pagina te maken:



## Live voorbeeld

<ExercisePreview component={SolutionPreview} />

#### Oplossingsvideo

<YouTubeVideo src='https://youtu.be/V6N5Nt_YNA8'/>
