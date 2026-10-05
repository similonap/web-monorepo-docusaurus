---
sidebar_label: "Quizapp"
---

import ExercisePreview from '@site/src/components/ExercisePreview';
import SolutionPreview from './solution/src/App';

import YouTubeVideo from '@site/src/components/YouTubeVideo';

# Quizapp


> 📂 **Naam project:** `lab-communication-quiz-app`  
> 🔗 **Basis project:** n/a

Maak een nieuwe React applicatie aan en noem deze `lab-communication-quiz-app`.

- Maak een nieuw component `QuizApp` aan.
- Maak gebruik van de `https://opentdb.com/api.php?amount=10` om de quizvragen op te halen. Gebruik de `fetch` API om de data op te halen. Gebruik een `useEffect` om deze data op te halen en daarna in een state te plaatsen.
- Er zijn twee soorten vragen: multiple choice en true/false. Maak een component `MultipleChoiceQuestion` en een component `TrueFalseQuestion` aan. Deze componenten worden gebruikt om de vragen te tonen. Maak een component `Question` aan die de juiste vraag component toont op basis van het type vraag.
- Als de gebruiker op een antwoord klikt wordt er aan de hand van een kleur aangegeven of het antwoord juist of fout is. Daarna wordt het antwoord getoond en kan de gebruiker niet meer van antwoord veranderen.
- Onderaan staat een button met de tekst 'Load More' die de volgende 10 vragen laadt. De vragen worden opnieuw opgehaald van de API. De vragen die al getoond of beantwoord zijn blijven in de lijst staan.
- Voorzie een loading indicator die getoond wordt tot de data geladen is (ook bij het laden van de volgende 10 vragen).
- Alle state moet in de `QuizApp` component zitten. De `Question` componenten mogen **geen** state hebben. De `Question` componenten moeten de state van de `QuizApp` componenten gebruiken via props en callbacks. 
- Maak gebruik van de `html-entities` package om de html entities te decoderen. Deze worden meegeleverd in de API. Anders krijg je bijvoorbeeld `&quot;` te zien in plaats van `"`.



## Live voorbeeld

<ExercisePreview component={SolutionPreview} />

### Oplossingsvideo

<YouTubeVideo src='https://youtu.be/L00lS5tKMcQ'/>
