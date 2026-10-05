---
sidebar_label: "Kleurkiezer"
---

import YouTubeVideo from '@site/src/components/YouTubeVideo';

# Kleurkiezer

Download het [starterproject](/exercise-files/react/labo-4-kleurkiezer/starter.zip) en voer daarna `npm install` uit.

Wanneer je klaar bent, kan je jouw uitwerking vergelijken met de [voorbeeldoplossing](/exercise-files/react/labo-4-kleurkiezer/solution.zip).

> 📂 **Naam project:** `lab-state-color-picker`  
> 🔗 **Basis project:** n/a

Maak een nieuwe React applicatie aan en noem deze `lab-state-color-picker`.

Maak een component `ColorPicker` aan met de volgende functionaliteit:
- Het component bevat een `state` met als naam `color` die een kleur bevat. Begint bij `#000000`.
- Het component bevat een `input` met type `color`. Als je een andere kleur kiest, wordt de waarde van `color` aangepast.
- Het component bevat een `div` met een achtergrondkleur die gelijk is aan de waarde van `color`.
- Het component bevat ook een select met de volgende opties:
    - `#000000`
    - `#FF0000`
    - `#00FF00`
    - `#0000FF`
- Als je een optie kiest dan wordt ook de kleur aangepast.

Gebruik deze component in de `App` component om de volgende pagina te maken:


#### Oplossingsvideo

<YouTubeVideo src='https://youtu.be/pBx9IClu9eA'/>
