---
sidebar_label: "Dierenasiel met React Router"
---

import SolutionDownload from '@site/src/components/SolutionDownload';

# Dierenasiel De Warme Poot met React Router

Download het [starterproject](/exercise-files/react/labo-9-petshelter/starter.zip) en voer daarna `npm install` uit.

> 📂 **Naam project:** `lab-router-petshelter`  
> 🔗 **Basisproject:** de vereiste begincode is inbegrepen in het [starterproject](/exercise-files/react/labo-9-petshelter/starter.zip).

Het starterproject is de oplossing van de oefening [Dierenasiel De Warme Poot](../labo-8-petshelter/README.md) uit het vorige labo. De site werkt met een `ThemeContext` en een `DierenContext`, maar alles staat nog op één lange pagina. In dit labo verdeel je de site over meerdere pagina's met **React Router**:

| URL | Pagina |
| --- | --- |
| `/` | Startpagina met de intro en de statistieken |
| `/dieren` | Overzicht van alle dieren, met de filter op soort |
| `/dieren/:id` | Detailpagina van één dier |
| `/dieren/:id/adopteer` | Formulier om een dier te adopteren |
| alle andere URL's | Pagina niet gevonden |

De CSS voor de nieuwe pagina's staat al klaar in `App.css` (zie het laatste deel van dat bestand). Je hoeft dus enkel de componenten te schrijven.

## Deel 1: De router opzetten

1. Installeer React Router:

   ```bash
   npm install react-router@8
   ```

2. Maak in `App.tsx` een router aan met `createBrowserRouter` (data mode). Maak de router **buiten** het `App` component aan.
3. De route `/` gebruikt het bestaande `Layout` component als element. Alle pagina's zijn **child routes** van deze route, zodat de header en de footer op elke pagina zichtbaar blijven.
4. Pas `Main` aan: in plaats van `Intro`, `Statistieken` en `DierenOverzicht` toont het nu een `Outlet`.
5. Maak een component `Home` met daarin `Intro` en `Statistieken`. Dit is de **index route** van `/`.
6. Voeg een child route `dieren` toe die het `DierenOverzicht` toont.
7. Toon in `App` een `RouterProvider` met je router. Zet de `ThemeProvider` en de `DierenProvider` rond de `RouterProvider`, zodat elke pagina aan de contexts kan.

:::tip
Vergeet niet dat je `RouterProvider` importeert uit `react-router/dom` en al de rest uit `react-router`.
:::

## Deel 2: Navigatie

1. Verwijder het component `NavLink.tsx` uit `src/components`. Gebruik in `Nav` voortaan de `NavLink` van React Router.
2. De navigatie bevat twee links: **Home** (naar `/`) en **Onze dieren** (naar `/dieren`). De teller met het aantal dieren dat nog een thuis zoekt, blijft staan.
3. Geef elke `NavLink` de klassen `nav-link` en het thema. De actieve link krijgt van React Router automatisch de klasse `active` en licht zo op in de navigatiebalk.
4. Het logo linksboven is nu nog een gewone `<a href="#">`. Vervang dit door een `Link` naar de startpagina.
5. Voeg een route toe voor URL's die niet bestaan. Maak hiervoor een component `PageNotFound` met een titel, een korte tekst en een `Link` terug naar de startpagina. Gebruik de klassen `niet-gevonden`, `sectie-titel`, `niet-gevonden-tekst` en `meer-info`. De pagina moet binnen de layout getoond worden, dus met header en footer.

Surf naar bijvoorbeeld `/katten` om te controleren dat je pagina getoond wordt.

## Deel 3: Detailpagina van een dier

1. Maak een component `DierDetail` en voeg de route `dieren/:id` toe.
2. Haal met `useParams` het `id` uit de URL en zoek het dier op in de `DierenContext`. Let op: een URL parameter is altijd een string.
3. Toon het dier in een `<section>` met de klasse `dier-detail`. Hergebruik daarvoor de componenten `DierAvatar`, `DierInfo` en `AdopteerKnop`. Zet bovenaan een `Link` met de klasse `terug-link` en de tekst `← Terug naar onze dieren`.
4. Bestaat er geen dier met dat id (bv. `/dieren/99` of `/dieren/abc`), toon dan de titel `Dit dier bestaat niet` met een link terug naar `/dieren`.
5. Voeg in `DierKaart` een `Link` met de tekst `Meer info` (klasse `meer-info`) toe die naar de detailpagina van het dier gaat.

## Deel 4: De filter in de URL

In `DierenOverzicht` wordt de gekozen soort nu bijgehouden met `useState`. Als je de pagina herlaadt of de link doorstuurt, ben je de filter kwijt.

1. Vervang de `useState` door `useSearchParams`. De gekozen soort staat in de query parameter `soort`, bijvoorbeeld `/dieren?soort=kat`.
2. Lees de soort rechtstreeks uit de URL. Controleer of de waarde wel `hond`, `kat` of `konijn` is; in alle andere gevallen (ook als de parameter ontbreekt) toon je alle dieren.
3. Kiest de gebruiker **Alle dieren**, dan verdwijnt de parameter uit de URL (`/dieren` in plaats van `/dieren?soort=alle`).

Test of de filter behouden blijft als je de pagina herlaadt, en of de terugknop van de browser je naar de vorige filter brengt.

## Deel 5: Adoptieformulier

Een dier adopteer je niet meer met één klik. De knop **Ik wil adopteren** brengt je naar een formulier.

1. Pas `AdopteerKnop` aan: is het dier nog niet geplaatst, dan toon je een `Link` met de klasse `adopteer-knop` naar `/dieren/:id/adopteer`. Is het dier wel geplaatst, dan blijven de uitgeschakelde knop `Heeft een thuis` en de knop `Annuleer` staan.
2. Maak een component `AdoptieFormulier` en voeg de route `dieren/:id/adopteer` toe. Het formulier (klasse `adoptie-formulier`) bevat:
   - een titel, bv. `Bobby adopteren`;
   - een invoerveld voor je naam (een controlled component met `useState`, klassen `formulier-label` en `formulier-veld`);
   - een knop `Bevestig adoptie` die uitgeschakeld is zolang de naam leeg is.
3. Bij het versturen van het formulier roep je `adopteer(id)` aan en navigeer je met `useNavigate` naar de detailpagina van het dier. Zorg ervoor dat de gebruiker met de terugknop van de browser **niet** opnieuw op het formulier terechtkomt.
4. Wie naar het formulier van een dier surft dat al geplaatst is, wordt meteen doorgestuurd naar de detailpagina van dat dier. Gebruik hiervoor het `Navigate` component.

## Extra

- Voeg op de pagina `/dieren` een select toe om te sorteren (`Standaard volgorde` of `Jongste eerst`). Bewaar de keuze in de query parameter `sort=leeftijd`. Zorg ervoor dat de soortfilter en de sortering elkaar niet overschrijven: `/dieren?soort=kat&sort=leeftijd` moet werken.
- Geef de route `/` een `errorElement`. Gebruik `useRouteError` en `isRouteErrorResponse` om te tonen wat er misgelopen is.

## Oplossing downloaden

<SolutionDownload exercise="react/labo-9-petshelter" />
