---
sidebar_label: "Who's that pokemon?"
---

import ExercisePreview from '@site/src/components/ExercisePreview';
import SolutionPreview from './solution/src/App';

# Who's that pokemon?

Download het [starterproject](/exercise-files/react/labo-2-who-s-that-pokemon/starter.zip) en voer daarna `npm install` uit.


> 📂 **Naam project:** n/a  
> 🔗 **Basisproject:** de vereiste begincode is inbegrepen in het [starterproject](/exercise-files/react/labo-2-who-s-that-pokemon/starter.zip).

Kopieer het `lab-basics-whos-that-pokemon` project van labo 1 naar een nieuw project.

Maak een nieuw component `PokemonImage` dat de afbeelding van een pokemon toont. Deze component aanvaardt de volgende properties:
- `id`: het id van de pokemon (1 = Bulbasaur, 2 = Ivysaur, ...)
- `visible`: boolean die aangeeft of de pokemon zichtbaar is of niet. Indien deze false is, moet de afbeelding zwart gemaakt worden (gebruik hiervoor de CSS filter `brightness(0)`)
- `size`: de grootte van de afbeelding in pixels (standaard 200)

Toon in de `App` component twee keer de `PokemonImage` component. Eén keer met `visible` op false en één keer met `visible` op true.

## Live voorbeeld

<ExercisePreview component={SolutionPreview} />
