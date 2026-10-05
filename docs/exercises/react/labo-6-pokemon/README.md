---
sidebar_label: "Pokemon"
---

import ExercisePreview from '@site/src/components/ExercisePreview';
import SolutionPreview from './solution/src/App';

# Pokemon


> 📂 **Naam project:** `lab-hooks-pokemon-pokedex`  
> 🔗 **Basis project:** n/a

Maak een nieuwe React applicatie aan en noem deze `lab-hooks-pokemon-pokedex`.

- Maak een component `Pokedex` aan met als property `limit` die het aantal pokemon aangeeft dat getoond moet worden. Initieel mag je die property op 151 zetten.
- Maak gebruik van de `https://pokeapi.co/` om deze pokemon op te halen op het moment dat de component gemounted wordt. Gebruik de `useEffect` hook om dit te doen.
- Zorg voor een loading indicator die getoond wordt tot de data geladen is.
- Plaats een invoer veld bovenaan de lijst van pokemon. Deze filtert de lijst van pokemon op naam. De filtering gebeurd op het moment dat de gebruiker een letter intypt. 
- Plaats een invoerveld onderaan de lijst die aangeeft hoeveel pokemon er getoond mogen worden. Je dient deze filtering aan de hand van de `limit` query parameter te doen van de API. Pas vanaf de gebruiker op de button klikt, wordt de lijst van pokemon opnieuw opgehaald.

## Live voorbeeld

<ExercisePreview component={SolutionPreview} />
