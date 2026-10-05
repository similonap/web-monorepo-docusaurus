---
sidebar_label: "Loading indicator"
---

import ExercisePreview from '@site/src/components/ExercisePreview';
import SolutionPreview from './solution/src/App';

import YouTubeVideo from '@site/src/components/YouTubeVideo';

# Loading indicator


> 📂 **Naam project:** `lab-state-loading-indicator`  
> 🔗 **Basis project:** n/a

Maak een nieuwe React applicatie aan en noem deze `lab-state-loading-indicator`.

installeer de volgende npm packages:

```
npm install react-loader-spinner
```

Zorg er nu voor dat de applicatie de volgende functionaliteiten heeft:
- De applicatie bevat een `state` met als naam `loading` die een boolean bevat. Deze begint bij `false`.
- De applicatie bevat een `button` met de tekst `Start loading`. Als je op deze knop klikt, wordt de waarde van `loading` op `true` gezet.
- Na 3 seconden wordt de waarde van `loading` op `false` gezet.
- Als de waarde van `loading` `true` is, wordt er een loading indicator getoond. De button verdwijnt.
- Als de waarde van `loading` `false` is, wordt de loading indicator niet getoond. De button verschijnt terug.



## Live voorbeeld

<ExercisePreview component={SolutionPreview} />

#### Oplossingsvideo

<YouTubeVideo src='https://youtu.be/SSZaOVdY3ls'/>
