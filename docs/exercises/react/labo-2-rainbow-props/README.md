---
sidebar_label: "Rainbow Props"
---

# Rainbow Props

Download het [starterproject](/exercise-files/react/labo-2-rainbow-props/starter.zip) en voer daarna `npm install` uit.

Wanneer je klaar bent, kan je jouw uitwerking vergelijken met de [voorbeeldoplossing](/exercise-files/react/labo-2-rainbow-props/solution.zip).

> 📂 **Naam project:** `lab-components-rainbow-props`  
> 🔗 **Basisproject:** de vereiste begincode is inbegrepen in het [starterproject](/exercise-files/react/labo-2-rainbow-props/starter.zip).

Maak een kopie van de `lab-basics-rainbow` applicatie van labo 1 naar een nieuw project en noem deze `lab-components-rainbow-props`. En zorg voor de volgende componenten:

- `Rainbow`: Heeft een property `amount` die het aantal kleuren aangeeft. Heeft ook een property `direction` die de richting van de kleuren aangeeft. Deze kan ofwel "horizontal" ofwel "vertical" zijn. Je kan de richting van de regenboog bepalen door de `flexDirection` van de container aan te passen.
- `RainbowLine`: Heeft een property `color` die de kleur van de lijn aangeeft. Heeft ook een property `direction` die de richting van de lijn aangeeft. Deze kan ofwel "horizontal" ofwel "vertical" zijn. De hoogte van de lijn is 4px indien de richting "horizontal" is, anders is de hoogte 100px.

Je kan dus bijvoorbeeld de volgende code gebruiken om een horizontale en een verticale regenboog te tonen:

```
<Rainbow amount={10} direction="horizontal"/>
<Rainbow amount={20} direction="vertical"/>
```

Dit zal de volgende output geven:


