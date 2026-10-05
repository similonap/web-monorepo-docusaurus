---
sidebar_label: "Basic context"
---

import ExercisePreview from '@site/src/components/ExercisePreview';
import SolutionPreview from './solution/src/App';

import YouTubeVideo from '@site/src/components/YouTubeVideo';

# Basic context

Download het [starterproject](/exercise-files/react/labo-8-basic-context/starter.zip) en voer daarna `npm install` uit.


> 📂 **Naam project:** `lab-context-settings`  
> 🔗 **Basis project:** n/a

Maak een nieuwe React applicatie aan en noem deze `lab-context-settings`.

1. Creëer een context genaamd `SettingsContext`. De context moet twee waarden bijhouden: `color` en `setColor`. `color` is een string die een kleur waarde heeft en `setColor` is een functie die `color` kan aanpassen. De startwaarde van `color` moet 'red' zijn.

2. Maak een component genaamd `Square`. Dit component moet de `color` waarde uit de `SettingsContext` uitlezen en deze waarde gebruiken om de achtergrondkleur van een vierkant blok te bepalen. Het blok moet een breedte en hoogte hebben van 100 pixels met 10 pixels marge. 

3. Creëer een component `SquareRow`. Dit component moet drie `Square` componenten naast elkaar tonen.

4. Maak een component genaamd `SelectionBox`. Dit component moet een selectie box bevatten met de opties 'red', 'blue' en 'green'. De huidige geselecteerde waarde moet de `color` zijn uit de `SettingsContext`. Als de gebruiker een andere kleur selecteert, moet de `setColor` functie van de `SettingsContext` gebruikt worden om de kleur aan te passen.

5. Ook moet je het `App` component aanmaken. In dit component, maakt het gebruik van de `useState` hook om de huidige kleur en de `setColor` functie te bepalen. Dit moet vervolgens in de `SettingsContext` meegegeven worden. Het `App` component moet daarna het `SelectionBox` en `SquareRow` component weergeven, beide omringd door de `SettingsContext.Provider`.

6. Zorg er nu voor dat je ook op de `Square` component kan drukken om de kleur te veranderen. 


## Live voorbeeld

<ExercisePreview component={SolutionPreview} />

### Oplossingsvideo

<YouTubeVideo src='https://youtu.be/owOyNsHt800'/>
