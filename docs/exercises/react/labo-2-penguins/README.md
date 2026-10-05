---
sidebar_label: "Penguins"
---

import ExercisePreview from '@site/src/components/ExercisePreview';
import SolutionPreview from './solution/src/App';

# Penguins

Download het [starterproject](/exercise-files/react/labo-2-penguins/starter.zip) en voer daarna `npm install` uit.


> 📂 **Naam project:** `lab-components-penguin-gallery`  
> 🔗 **Basis project:** n/a

Maak een nieuw project aan en noem deze `lab-components-penguin-gallery`
[Penguins.json](https://raw.githubusercontent.com/similonap/json/refs/heads/master/penguins/penguins.json) in je `src` folder.
- importeer dit bestand in je project aan de hand van `import penguins from './penguins.json';`
- Maak een component `PenguinCard` dat een penguin toont. Dit component aanvaard een property `penguin` met het type van een penguin uit het json bestand.
- Filter de pinguïns zodat je enkel de vrouwelijke pinguïns toont (property `gender` is "Female").
- Toon alle vrouwelijke pinguïns in een grid met 3 kolommen. Gebruik hiervoor css modules.

## Live voorbeeld

<ExercisePreview component={SolutionPreview} />
