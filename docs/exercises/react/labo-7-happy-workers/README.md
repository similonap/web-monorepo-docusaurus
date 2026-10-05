---
sidebar_label: "Happy Workers"
---

import ExercisePreview from '@site/src/components/ExercisePreview';
import SolutionPreview from './solution/src/App';

# Happy Workers


> 📂 **Naam project:** `lab-communication-happy-workers`  
> 🔗 **Basis project:** n/a

Maak een nieuwe React applicatie aan en noem deze lab-communication-happy-workers.

Plaats in de `App` component een progressbar (van 0 tot 100) en maak een component genaamd `Square`. Het `Square` component aanvaard initieel gewoon een color en een size prop. Later gaan hier nog props bij komen. Zorg ervoor dat je een aantal `Square` componenten toevoegd aan de `App` component met verschillende kleuren. 

Maak een state `work` aan in de `App` component die initieel op 0 staat en de waarde voorstelt die de progressbar moet tonen. 

Zorg ervoor dat als je op een `Square` klikt, de `work` state met 1 verhoogd wordt. Dit zorgt ervoor dat de progressbar met 1% verhoogd wordt.

Als de `work` state kleiner is dan 100 dan moet de `Square` component een 😐 tonen. Als de `work` state 100 is dan moet de `Square` component een 😃 tonen. Let er op: het tonen van de smileys vereist geen nieuwe state. Je kan dit afleiden van de `work` state.


Uitbreiding:
- Maak een `state` genaamd `productivity` aan in de Square component die initieel op 1 staat. De `productivity` state stelt voor hoeveel procent de `work` state verhoogd wordt als je op de `Square` klikt. 
- Dus als de `productivity` 1 is wordt bij elke klik de `work` state met 1 verhoogd. Als de `productivity` 2 is wordt bij elke klik de `work` state met 2 verhoogd.
- Maak een `state` genaamd `clicked` aan in de Square component die initieel op 0 staat.
- Als de `clicked` state groter of gelijk is aan 10 dan moet de `productivity` state op 0 gezet worden. Dit zorgt ervoor dat de `Square` component een 😵 toont. Het is dan tijdelijk niet meer mogelijk de `work` state te verhogen met die `Square`.
- Na 5 seconden moet de `productivity` state terug op 1 gezet worden. Dit zorgt ervoor dat de `Square` component terug een 😐 toont. Ook de `clicked` state wordt terug op 0 gezet.

## Live voorbeeld

<ExercisePreview component={SolutionPreview} />
