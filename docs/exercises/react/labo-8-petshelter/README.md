---
sidebar_label: "Dierenasiel"
---

# Dierenasiel De Warme Poot

Download het [starterproject](/exercise-files/react/labo-8-petshelter/starter.zip) en voer daarna `npm install` uit.

> 📂 **Naam project:** `lab-context-petshelter`  
> 🔗 **Basisproject:** de vereiste begincode is inbegrepen in het [starterproject](/exercise-files/react/labo-8-petshelter/starter.zip).

Dierenasiel De Warme Poot heeft een website waar honden, katten en konijnen een nieuwe thuis zoeken. De site is al volledig opgebouwd uit kleine componenten, maar twee dingen werken nog niet:

- de knop om naar het **donkere thema** te wisselen doet niets;
- de knop **Ik wil adopteren** doet ook niets.

Beide functies hebben gegevens nodig in componenten die heel diep in de boom zitten. In plaats van die gegevens via props door elk tussenliggend component door te geven (prop drilling), gebruik je in dit labo **context**.

## De structuur van de applicatie

Bekijk eerst de componenten in `src/components`. De boom ziet er zo uit:

```
App
└── Layout
    ├── Header
    │   ├── Logo
    │   ├── Nav
    │   │   └── NavLink
    │   └── ThemeToggle
    ├── Main
    │   ├── Intro
    │   ├── Statistieken
    │   │   └── StatKaart
    │   └── DierenOverzicht
    │       ├── SoortFilter
    │       │   └── FilterKnop
    │       └── DierenLijst
    │           └── DierKaart
    │               ├── DierAvatar
    │               ├── DierInfo
    │               │   ├── SoortBadge
    │               │   └── StatusBadge
    │               └── AdopteerKnop
    └── Footer
```

De dieren zelf staan in `src/app/dieren.ts`. Daar vind je ook de types `Dier` en `Soort`.

## Deel 1: ThemeContext

Elk element in de applicatie heeft naast zijn eigen klasse ook de klasse `light`, bijvoorbeeld:

```tsx
<article className="dier-kaart light">
```

In `App.css` zie je dat de klassen `light` en `dark` de kleuren bepalen. Als je overal `light` vervangt door `dark`, krijg je dus het donkere thema. Die klasse staat nu nog hardgecodeerd in elk component.

1. Maak een bestand `src/context/ThemeContext.tsx` aan. Definieer daarin een type `Theme` dat de waarde `'light'` of `'dark'` kan hebben.
2. Maak met `createContext` een `ThemeContext` aan met twee waarden: `theme` (van het type `Theme`) en `toggleTheme`, een functie zonder parameters die het thema omwisselt. Geef een interface mee aan `createContext` en voorzie een default value (`'light'` en een lege functie).
3. Maak in hetzelfde bestand een component `ThemeProvider` dat een `children` prop krijgt. Dit component houdt het thema bij met `useState`, schrijft de functie `toggleTheme` en geeft beide door aan `ThemeContext.Provider`.
4. Zet de `ThemeProvider` in `App.tsx` rond de `Layout`.
5. Pas **elk** component aan zodat het niet langer de vaste klasse `light` gebruikt, maar het thema uit de context haalt met `useContext`:

   ```tsx
   <article className={`dier-kaart ${theme}`}>
   ```

6. Laat de `ThemeToggle` werken: bij een klik roept hij `toggleTheme` aan. Toon in het licht thema het icoon 🌙 met het label `Donker`, en in het donker thema het icoon ☀️ met het label `Licht`.

:::tip
Merk op dat je hiervoor geen enkele nieuwe prop hebt moeten toevoegen. `ThemeToggle` zit in de `Header` en `SoortBadge` zit vijf niveaus diep in `Main`, en toch lezen ze allebei dezelfde waarde.
:::

## Deel 2: DierenContext

Nu staat de lijst `DIEREN` als constante in `Main` en wordt ze via props doorgegeven aan `Statistieken` en `DierenOverzicht`. Omdat het een constante is, kan een dier nooit geadopteerd worden.

1. Maak een bestand `src/context/DierenContext.tsx` aan met een `DierenContext`. De context bevat:
   - `dieren`: de lijst met alle dieren (`Dier[]`);
   - `adopteer`: een functie die een `id: number` krijgt en het dier met dat id op `geplaatst: true` zet.
2. Maak een component `DierenProvider` dat de dieren in een state bijhoudt (startwaarde `DIEREN`) en de functie `adopteer` implementeert. Pas de state aan zonder de bestaande array te muteren.
3. Zet de `DierenProvider` in `App.tsx`. Zowel de `ThemeProvider` als de `DierenProvider` moeten rond de `Layout` staan.
4. Verwijder de `dieren`-props van `Statistieken` en `DierenOverzicht`. Beide componenten halen de dieren nu zelf op uit de `DierenContext`. `Main` hoeft niets meer te weten over de dieren.
5. De `AdopteerKnop` krijgt nu enkel nog het `id` van het dier mee (in plaats van `geplaatst`). De knop zoekt zelf het dier op in de context om te weten of het al geplaatst is, en roept bij een klik `adopteer(id)` aan.

Als je een dier adopteert, moet je meteen het volgende zien:

- de knop wordt uitgeschakeld en toont `Heeft een thuis`;
- de `StatusBadge` van het dier springt naar `Geplaatst`;
- de getallen bij **Zoeken een thuis** en **Al geplaatst** passen zich aan;
- het werkt ook als er een filter (bv. **Katten**) actief is.

:::info
De gekozen filter (`soort` in `DierenOverzicht`) blijft gewone lokale state. Niet alles hoort in een context: enkel gegevens die door veel componenten op verschillende plaatsen in de boom gebruikt worden.
:::

## Deel 3: Eigen hooks

Overal `useContext(ThemeContext)` en `useContext(DierenContext)` schrijven, is wat omslachtig.

1. Exporteer uit `ThemeContext.tsx` een eigen hook `useTheme` die `useContext(ThemeContext)` teruggeeft.
2. Doe hetzelfde voor de dieren met een hook `useDieren` in `DierenContext.tsx`.
3. Vervang alle `useContext`-aanroepen in je componenten door deze twee hooks.

## Extra

- Onthoud het gekozen thema in `localStorage`, zodat de site na het herladen van de pagina in hetzelfde thema opent.
- Voeg aan de `DierenContext` een functie `annuleer(id)` toe die een adoptie ongedaan maakt, en toon in `AdopteerKnop` een knop `Annuleer` bij een dier dat al geplaatst is.
- Laat in de `Nav` naast **Onze dieren** een teller zien met het aantal dieren dat nog een thuis zoekt (bv. `Onze dieren (15)`). Gebruik hiervoor je `useDieren` hook.
