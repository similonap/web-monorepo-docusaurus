---
sidebar_label: "LocalStorage"
---

import ExercisePreview from '@site/src/components/ExercisePreview';
import SolutionPreview from './solution/src/App';

import YouTubeVideo from '@site/src/components/YouTubeVideo';

# LocalStorage

Download het [starterproject](/exercise-files/react/labo-6-localstorage/starter.zip) en voer daarna `npm install` uit.


> 📂 **Naam project:** `lab-hooks-local-storage`  
> 🔗 **Basis project:** n/a

Maak een nieuwe React applicatie aan en noem deze `lab-hooks-local-storage`.

- Maak een nieuw component `DadJoke` aan. 
- Maak een functie loadJoke die een "awkward dad joke" ophaalt van de API `https://icanhazdadjoke.com/`. Gebruik de `fetch` API om de data op te halen. Plaats het resultaat in een state van het component.
- Zorg ervoor dat de functie wordt opgeroepen wanneer het component gemounted wordt. Gebruik de `useEffect` hook om dit te doen.
- Eenmaal de data geladen is, toon je de joke in een `<div>` element. Zorg voor een kaartje waarin de joke getoond wordt.
- Plaats een button `New Joke` onderaan de joke. Wanneer de gebruiker op deze button klikt, wordt er een nieuwe joke opgehaald.
- Plaats een button `Set as favorite` onderaan de joke. Wanneer de gebruiker op deze button klikt, wordt de huidige joke (als string) opgeslagen in de `localStorage` van de browser. 
- Bij het opstarten van de applicatie, wordt de laatst opgeslagen joke getoond. Gebruik hiervoor de `useEffect` hook.



## Live voorbeeld

<ExercisePreview component={SolutionPreview} />

### Oplossingsvideo

<YouTubeVideo src='https://youtu.be/-ZCPmx5HGvA'/>
