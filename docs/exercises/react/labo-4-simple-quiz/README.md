---
sidebar_label: "Simple Quiz"
---

import ExercisePreview from '@site/src/components/ExercisePreview';
import SolutionPreview from './solution/src/App';

# Simple Quiz

Download het [starterproject](/exercise-files/react/labo-4-simple-quiz/starter.zip) en voer daarna `npm install` uit.


> 📂 **Naam project:** `lab-state-simple-quiz`  
> 🔗 **Basis project:** n/a

Maak een nieuwe React-applicatie aan en noem deze `lab-state-simple-quiz`.

### Opdracht
- Maak een component **`Question`** met props:
  - `question: string`  
  - `options: string[]`  
  - `correctAnswer: string`  
  - `finished?: boolean`  
- In `Question`:
  - Hou lokaal de gekozen optie bij met `useState`.
  - Toon de opties als **radio buttons** (zelfde `name`, unieke `id` + `label`).
  - Als `finished = true`:  
    - disable de radio’s  
    - markeer de juiste optie met een CSS-klasse `.correct`.  

- Maak een component **`SimpleQuiz`**:
  - State `finished` (`false` bij start).
  - Toon minstens **4** vragen via `Question`.
  - Voorzie een **Finish**-knop die `finished` op `true` zet.

### Data
Gebruik o.a. deze vragen:
1. What is the answer to life, the universe and everything? (42)  
2. Which planet is known as the Red Planet? (Mars)  
3. Which programming language is known for "write once, run anywhere"? (Java)  
4. Which animal is the largest mammal on Earth? (Blue Whale)  

### CSS
- Maak een `SimpleQuiz.module.css`.  
- Voorzie een klasse `.correct` die het juiste antwoord markeert.

## Live voorbeeld

<ExercisePreview component={SolutionPreview} />
