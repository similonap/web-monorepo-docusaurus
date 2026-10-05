---
sidebar_label: "Javascript functions"
---

import ExercisePreview from '@site/src/components/ExercisePreview';
import SolutionPreview from './solution/src/App';

# Javascript functions

Download het [starterproject](/exercise-files/react/labo-1-javascript-functions/starter.zip) en voer daarna `npm install` uit.


> 📂 **Naam project:** lab-javascript-functions  
> 🔗 **Basis project:** n/a

Maak een nieuwe react applicatie aan `lab-javascript-functions`. We beginnen met een lijst van gebruikers. Elke gebruiker heeft een naam, leeftijd, een boolean die aangeeft of de gebruiker een security badge heeft en een lijst van beschikbaarheden. Elke beschikbaarheid heeft een dag en een tijdstip. Je kan hiervoor de volgende interfaces gebruiken:

```typescript
type DayAvailable = "Monday" | "Tuesday" | "Wednesday" | "Thursday"

interface Availability {
    day: DayAvailable;
    time: string;
}

interface User {
    name: string;
    age: number;
    hasSecurityBadge: boolean;
    availabilities: Availability[];
}
```

en de volgende lijst van gebruikers:

```typescript
const users: User[] = [
    { name: "Andie", age: 41, hasSecurityBadge: true, availabilities: [{ day: "Monday", time: "9:00" }, { day: "Wednesday", time: "14:00" }] },
    { name: "Stephane", age: 30, hasSecurityBadge: true, availabilities: [{ day: "Tuesday", time: "10:00" }] },
    { name: "Jannes", age: 20, hasSecurityBadge: false, availabilities: [{ day: "Wednesday", time: "11:00" }] },
    { name: "Alice", age: 35, hasSecurityBadge  : false, availabilities: [{ day: "Thursday", time: "12:00"}, { day: "Monday", time: "9:00" }]},
    { name: "Bob", age: 50, hasSecurityBadge: true, availabilities: [{ day: "Friday", time: "13:00" }] },
    { name: "Charlie", age: 25, hasSecurityBadge: false, availabilities: [{ day: "Monday", time: "14:00" }] },
];
```

Toon nu de volgende informatie in de browser:
- Het aantal gebruikers (Tip: gebruik de length property van de array)
- De namen van de gebruikers, hun leeftijd en of ze een security badge hebben. Gebruik hiervoor een unordered list (ul) en list items (li). (Tip: gebruik de map functie om de list items te genereren)
- Het aantal gebruikers met een security badge (Tip: gebruik de filter functie om de gebruikers met een security badge te filteren en daarna de length property van de gefilterde array)
- Het aantal gebruikers ouder dan 30 jaar (Tip: gebruik de filter functie om de gebruikers ouder dan 30 te filteren en daarna de length property van de gefilterde array)
- Voor elke dag van de week, toon de namen van de gebruikers die beschikbaar zijn op die dag. (Tip: gebruik de map functie om de dagen van de week te itereren en voor elke dag de filter functie om de gebruikers te filteren die beschikbaar zijn op die dag. Je kan hiervoor de `some` functie gebruiken om te controleren of een gebruiker beschikbaar is op die dag)
- Maak een tabel met de dagen van de week als kolommen en de tijdstippen als rijen. In elke cel toon je de namen van de gebruikers die beschikbaar zijn op dat tijdstip en die dag. (Tip: Je gaat hier weer een map in een map moeten gebruiken! De buitenste map is voor de dagen van de week en de binnenste map is voor de tijdstippen)

## Live voorbeeld

<ExercisePreview component={SolutionPreview} />
