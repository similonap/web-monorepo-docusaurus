---
sidebar_label: "Slots"
---

import ExercisePreview from '@site/src/components/ExercisePreview';
import SolutionPreview from './solution/src/App';

import YouTubeVideo from '@site/src/components/YouTubeVideo';

# Slots

Download het [starterproject](/exercise-files/react/labo-5-slots/starter.zip) en voer daarna `npm install` uit.


> 📂 **Naam project:** `lab-state-slot-machine`  
> 🔗 **Basisproject:** de vereiste begincode is inbegrepen in het [starterproject](/exercise-files/react/labo-5-slots/starter.zip).

Je breidt nu de slots machine uit die je gemaakt hebt in labo 2 uit met een aantal nieuwe functionaliteiten.

- Zorg voor een state `slots` die de array met slots bevat. Zorg ervoor dat deze initieel met random waarden gevuld is.
- Zorg voor een state `money` dat het geld van de speler bijhoudt. Zorg ervoor dat deze initieel op 100 staat.
- Zorg voor een button `Pull lever` die een functie aanroept die de `slots` state verandert naar een nieuwe array met random waarden. Als de speler gewonnen heeft (3 dezelfde symbolen), dan wordt de `money` state verhoogd met 20. Als de speler verloren heeft (3 verschillende symbolen), dan wordt de `money` state verlaagd met 1.
- Toon bovenaan het saldo van de speler.
- Als het saldo van de speler 0 is, dan wordt de button `Pull lever` disabled en wordt er een tekst getoond die zegt dat de speler geen geld meer heeft.

Het spel ziet er nu als volgt uit:



## Live voorbeeld

<ExercisePreview component={SolutionPreview} />

#### Oplossingsvideo

<YouTubeVideo src='https://youtu.be/u1gLw9UwTh0'/>
