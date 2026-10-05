---
sidebar_label: "Maaltafels component"
---

# Maaltafels component

Download het [starterproject](/exercise-files/react/labo-2-maaltafels-component/starter.zip) en voer daarna `npm install` uit.

Wanneer je klaar bent, kan je jouw uitwerking vergelijken met de [voorbeeldoplossing](/exercise-files/react/labo-2-maaltafels-component/solution.zip).

> 📂 **Naam project:** `lab-components-maaltafels`  
> 🔗 **Basisproject:** de vereiste begincode is inbegrepen in het [starterproject](/exercise-files/react/labo-2-maaltafels-component/starter.zip).

Kopieer de maaltafels code van labo 1 naar een nieuw project en noem deze `lab-components-maaltafels` en zorg voor de volgende componenten:

- `MultiplicationTable`: deze component bevat de logica om de tabel te tonen. Deze component bevat een property `max` die het maximum getal aangeeft dat getoond moet worden. 

    ```
    <MultiplicationTable max={5} />
    ```
- `MultiplicationRow`: deze component bevat de logica om 1 rij van de tabel te tonen. Deze component bevat een property `factor` die het getal aangeeft waarvan de tafel getoond moet worden. Deze component bevat ook een property `max` die het maximum getal aangeeft dat getoond moet worden. 

    ```
    <MultiplicationRow factor={2} max={5} />
    ```
- `Header`: deze component bevat de logica om de header van de tabel te tonen. Deze component bevat een property `max` die het maximum getal aangeeft dat getoond moet worden. 

    ```
    <Header max={5} />
    ```

De applicatie moet ongeveer er als volgt uitzien:


