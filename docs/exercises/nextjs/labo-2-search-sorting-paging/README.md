---
sidebar_label: "Search/Sorting/Paging"
---

# Search/Sorting/Paging

Download het [starterproject](/exercise-files/nextjs/labo-2-search-sorting-paging/starter.zip) en voer daarna `npm install` uit.

Wanneer je klaar bent, kan je jouw uitwerking vergelijken met de [voorbeeldoplossing](/exercise-files/nextjs/labo-2-search-sorting-paging/solution.zip).

> 📂 **Naam project:** `lab-nextjs-query`
> 🔗 **Basis project:** n/a

In dit labo ga je een Next.js applicatie maken die gebruik maakt van query parameters in de URL om zoekopdrachten, sortering en paginatie te implementeren.

Gebruik de [SampleAPIs Harry Potter Spells API](https://sampleapis.assimilate.be/harrypotter/spells) om de data van de spreuken op te halen in een server component.

Gebruik de volgende interface om de data van de spreuken te typen:

```typescript
export interface Spell {
    id: number;
    name: string;
    type: string;
    mana: number;
    description: string;
    difficulty: "Beginner" | "Intermediate" | "Advanced" | "Expert";
    effectDuration: string;
    isUnforgivable: boolean;
    range: string;
    counterSpell: string;
    alignment: "Good" | "Neutral" | "Dark";
}

export type SortField = "name" | "difficulty" | "type" | "id";
export type SortDirection = "asc" | "desc";
```

Voorzie drie verschillende routes in de applicatie:
- `/`: de home pagina met links naar de andere drie pagina's.
- `/search`: een pagina waar de gebruiker kan zoeken naar spreuken op naam. De zoekterm moet worden weergegeven in de URL als query parameter `q`.
- `/sorting`: een pagina waar de gebruiker de spreuken kan sorteren op naam, difficulty, type of id. De sorteer veld en richting moeten worden weergegeven in de URL als query parameters `sortField` en `sortDirection`.
- `/paging`: een pagina waar de gebruiker door de spreuken kan bladeren met paginatie. De huidige pagina moet worden weergegeven in de URL als query parameter `page`.
- `all`: een pagina waar de gebruiker alle functionaliteiten (zoeken, sorteren en pagineren) kan gebruiken. De zoekterm, sorteer veld, sorteer richting en huidige pagina moeten worden weergegeven in de URL als query parameters `q`, `sortField`, `sortDirection` en `page`.
