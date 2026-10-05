---
sidebar_label: "Game of Life (1)"
---

import ExercisePreview from '@site/src/components/ExercisePreview';
import SolutionPreview from './solution/src/App';

# Game of Life (1)

Download het [starterproject](/exercise-files/react/labo-5-game-of-life-1/starter.zip) en voer daarna `npm install` uit.


> 📂 **Naam project:** `lab-state-game-of-life`  
> 🔗 **Basis project:** n/a

In deze opdracht wordt van je verwacht om een React-component te implementeren voor een eenvoudig spelbord van het Game of Life spel. We gaan dit spelbord later gebruiken om een volledige implementatie van het spel te maken.

- Maak een React-component genaamd LifeGameBoard.
- Implementeer een functie initializeGrid(rows, columns) die een tweedimensionale array genereert met rows rijen en columns kolommen, waarbij elke cel een willekeurige waarde heeft van 0 of 1 om de levende en dode cellen te vertegenwoordigen.
- Voeg twee invoervelden toe voor het aantal rijen en kolommen, en een knop om het bord te vernieuwen.
- Implementeer een methode setBoard die wordt aangeroepen wanneer de knop wordt ingedrukt om het bord te vernieuwen. Deze methode moet het spelbord opnieuw initialiseren met het opgegeven aantal rijen en kolommen.
- Implementeer een methode flipElement(x, y) die wordt aangeroepen wanneer een cel op het bord wordt geklikt. Deze methode moet de staat van de cel omkeren (van 0 naar 1 of van 1 naar 0) en de nieuwe staat van het bord weergeven.
- Zorg ervoor dat het bord wordt weergegeven als een grid, waarbij elke cel wordt weergegeven als een div-element met een achtergrondkleur die overeenkomt met de staat van de cel (0 voor dode cellen, 1 voor levende cellen).
- Laat de gebruiker de gewenste grootte van het bord opgeven door de waarden in de invoervelden te wijzigen.
- Zorg ervoor dat de staat van het bord correct wordt bijgewerkt wanneer cellen worden omgedraaid of wanneer het bord wordt vernieuwd.

## Live voorbeeld

<ExercisePreview component={SolutionPreview} />
