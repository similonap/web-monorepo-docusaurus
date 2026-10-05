---
sidebar_label: "Expressies"
---

import ExercisePreview from '@site/src/components/ExercisePreview';
import SolutionPreview from './solution/src/App';

import YouTubeVideo from '@site/src/components/YouTubeVideo';

# Expressies


> 📂 **Naam project:** `lab-basics-expressies`  
> 🔗 **Basis project:** n/a

Maak een nieuwe react applicatie aan met de naam `lab-basics-expressies` en maak het volgende `App.tsx` component aan:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
const App = () => {
    return (
        <div>
            <h1>Labo 1</h1>
        </div>
    );
}

export default App;
```

#### Opdracht

- Maak een variabele met de naam `random` en geef deze de waarde van `Math.random()`.  
  Toon deze waarde in de browser.
- Maak een variabele met de naam `getal1` en geef deze een willekeurige waarde tussen 0 en 9  
  (gebruik bijvoorbeeld `Math.floor(Math.random() * 10)`).  
  Toon deze waarde in de browser.
- Maak een variabele met de naam `getal2` en geef ook deze een willekeurige waarde tussen 0 en 9.  
  Toon deze waarde in de browser.
- Maak twee functies:
  - `add(a, b)` die twee getallen optelt en het resultaat teruggeeft.
  - `multiply(a, b)` die twee getallen vermenigvuldigt en het resultaat teruggeeft.
- Gebruik een **fragment** (`<>...</>`) in plaats van `<div>` om je elementen te groeperen.
- Gebruik **conditionele rendering** om het resultaat te tonen:
  - Als `random` kleiner is dan `0.5`, toon je de som van de twee getallen met behulp van `add()`.
  - Als `random` groter is dan of gelijk aan `0.5`, toon je de vermenigvuldiging van de twee getallen met behulp van `multiply()`.
  - Gebruik hier de twee getallen `getal1` en `getal2` voor.

#### Voorbeeldoplossing

<ExercisePreview component={SolutionPreview} />



#### Video

<YouTubeVideo src='https://youtu.be/wHT0FYsQa6k'/>
