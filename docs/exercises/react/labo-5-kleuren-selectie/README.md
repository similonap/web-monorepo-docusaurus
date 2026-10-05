---
sidebar_label: "Kleuren Selectie"
---

import YouTubeVideo from '@site/src/components/YouTubeVideo';

# Kleuren Selectie

Download het [starterproject](/exercise-files/react/labo-5-kleuren-selectie/starter.zip) en voer daarna `npm install` uit.

Wanneer je klaar bent, kan je jouw uitwerking vergelijken met de [voorbeeldoplossing](/exercise-files/react/labo-5-kleuren-selectie/solution.zip).

> 📂 **Naam project:** `lab-state-color-select`  
> 🔗 **Basisproject:** de vereiste begincode is inbegrepen in het [starterproject](/exercise-files/react/labo-5-kleuren-selectie/starter.zip).

Maak een nieuwe React applicatie aan en noem deze `lab-state-color-select`.

Maak een component `ColorSelect` aan met de volgende functionaliteit:

- Het component bevat een select met de volgende kleuren: `red`, `green`, `blue`, `yellow`, `orange`, `purple`, `black`, `white`. Er kunnen meerdere kleuren geselecteerd worden.
- Het component bevat een state property `selectedColors` die een array bevat met de geselecteerde kleuren.
- Het component bevat een button met de tekst "Show colors". Als de gebruiker op deze button klikt moet de gebruiker een lijst zien met de geselecteerde kleuren.
- Als je op een kleur klikt in de lijst, krijgt de gebruiker een prompt met de vraag om een nieuwe kleur te kiezen. Als de gebruiker op "OK" klikt, moet de kleur in de lijst vervangen worden door de nieuwe kleur. 

:::tip
Je moet hier twee states gebruiken: `selectedColors` en `colors`. De eerste state bevat de geselecteerde kleuren, de tweede state bevat de kleuren die moeten getoond worden. De tweede state wordt aangepast als de gebruiker op de button klikt. Het is een kopie van de eerste state op de moment dat de gebruiker op de button klikt.
:::

Gebruik dit component in de App component om de volgende pagina te maken:


#### Oplossingsvideo

<YouTubeVideo src='https://youtu.be/w1tdhQ0psNc'/>
