---
sidebar_label: "Slotmachine"
---

import ExercisePreview from '@site/src/components/ExercisePreview';
import SolutionPreview from './solution/src/App';

import YouTubeVideo from '@site/src/components/YouTubeVideo';

# Slotmachine

Download het [starterproject](/exercise-files/react/labo-2-slotmachine/starter.zip) en voer daarna `npm install` uit.


> 📂 **Naam project:** `lab-components-slot-machine`  
> 🔗 **Basisproject:** de vereiste begincode is inbegrepen in het [starterproject](/exercise-files/react/labo-2-slotmachine/starter.zip).

Kopieer de slotmachine code van labo 1 en noem deze nieuwe applicatie `lab-components-slot-machine` en zorg voor de volgende dingen:

- `SlotMachine`: aanvaard een property `slots` die het aantal slots aangeeft. Deze component bevat de logica om de slots te genereren en te tonen. Je kan deze component ook gebruiken om de logica te schrijven om te bepalen of de speler gewonnen heeft of verloren heeft.

    ```
    <SlotMachine slots={5} />
    ```
- `Slot`: deze component bevat de logica om een slot te tonen. De waarde van de slot wordt doorgegeven via een property `value`. 

    ```
    <Slot value={1} />
    ```

- Zorg ervoor dat je meerdere slotmachines kan tonen op een pagina. Toon bijvoorbeeld een SlotMachine met 5 slots, een SlotMachine met 4 slots en een SlotMachine met 3 slots.

- Gebruik css modules om de stijl van de slotmachine te bepalen. Je bent vrij om de stijl te kiezen.

De applicatie moet ongeveer er als volgt uitzien:



## Live voorbeeld

<ExercisePreview component={SolutionPreview} />

#### Oplossingsvideo

<YouTubeVideo src='https://youtu.be/fRYEQ-NR0aU'/>
