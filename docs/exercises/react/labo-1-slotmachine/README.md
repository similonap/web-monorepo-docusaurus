---
sidebar_label: "Slotmachine"
---

import ExercisePreview from '@site/src/components/ExercisePreview';
import SolutionPreview from './solution/src/App';

import YouTubeVideo from '@site/src/components/YouTubeVideo';

# Slotmachine

Download het [starterproject](/exercise-files/react/labo-1-slotmachine/starter.zip) en voer daarna `npm install` uit.


> 📂 **Naam project:** `lab-basics-slot-machine`  
> 🔗 **Basis project:** n/a

Maak een nieuwe react applicatie aan `lab-basics-slot-machine`.

#### Opdracht

- Toon alle mogelijke afbeeldingen van de slotmachine in de browser. Je kan de afbeeldingen hier onderaan gewoon downloaden vanuit het voorbeeld.
- Maak 3 variabelen met de namen `slot1`, `slot2` en `slot3` aan. Zorg ervoor dat deze variabele een willekeurige waarde krijgt tussen 0 en 4 (met 4 inbregrepen)
- Toon de tekst "Je hebt gewonnen" als `slot1`,`slot2` en `slot3` dezelfde waarde heeft. Toon de tekst "Je hebt verloren" als `slot1`,`slot2` en `slot3` een andere waarde hebben.
- Zorg ervoor dat er 3 afbeeldingen worden getoond afhankelijk van de waarde van slot1, slot2 en slot3.
    - Als de slot 0 is toon je een kers
    - Als de slot 1 is toon je een citroen
    - ...
- Probeer de afbeeldingen te tonen met behulp van import en een url uit de public folder.
- Er hoeft geen refresh knop te zijn. Elke keer dat je de pagina refresh zie je een nieuwe combinatie.

#### Voorbeeldoplossing

<ExercisePreview component={SolutionPreview} />



#### Oplossingsvideo

<YouTubeVideo src='https://youtu.be/v-MZWSG5uN0'/>
