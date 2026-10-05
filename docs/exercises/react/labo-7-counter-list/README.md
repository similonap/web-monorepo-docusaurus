---
sidebar_label: "Counter List"
---

# Counter List

Download het [starterproject](/exercise-files/react/labo-7-counter-list/starter.zip) en voer daarna `npm install` uit.

Wanneer je klaar bent, kan je jouw uitwerking vergelijken met de [voorbeeldoplossing](/exercise-files/react/labo-7-counter-list/solution.zip).

> 📂 **Naam project:** `lab-communication-counter-list`  
> 🔗 **Basisproject:** de vereiste begincode is inbegrepen in het [starterproject](/exercise-files/react/labo-7-counter-list/starter.zip).

We beginnen in deze oefening van de volgende code. Kopieer deze in een nieuw project en noem deze `lab-communication-counter-list`.

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
const CounterList = () => {
    const [counters, setCounters] = useState<number[]>([]);

    const addCounter = () => {
        setCounters([...counters, 0]);
    }

    const increaseCounter = (index: number) => {
        setCounters(counterCpy => counterCpy.map((counter, i) => (i === index) ? counter + 1 : counter));
    }

    const decreaseCounter = (index: number) => {
        setCounters(counterCpy => counterCpy.map((counter, i) => (i === index) ? counter - 1 : counter));
    }

    return (
        <>
            {counters.map((counter, index) => {
                let color = "black";
                if (counter > 0) {
                    color = "green";
                } else if (counter < 0) {
                    color = "red";
                }
                return (
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <button onClick={() => decreaseCounter(index)}>Omlaag</button>
                        <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", color: color }}>Count: {counter}</div>
                        <button onClick={() => increaseCounter(index)}>Omhoog</button>
                    </div>
                )
            })}
            <p>Som van de tellers: {counters.reduce((prev, curr) => prev + curr, 0)}</p>
            <button onClick={addCounter}>Voeg teller toe</button>
        </>
    )
}
```

Dit is een implementatie van de `CounterList` component dat je in een voorgaande oefening hebt gemaakt. Hier was het nog niet de bedoeling om een aparte component te maken voor de `Counter` component. We gaan dit nu wel doen.

Maak een nieuwe component `Counter` aan. Deze component bevat een teller die je kan verhogen en verlagen. De `Counter` component bevat de volgende properties:
- `value`: de waarde van de teller
- `onIncrease`: een callback functie die opgeroepen wordt als de teller verhoogd wordt
- `onDecrease`: een callback functie die opgeroepen wordt als de teller verlaagd wordt
- `index`: de index van de teller in de lijst van tellers

Zorg er nu voor dat de `CounterList` component de `Counter` component gebruikt. De `CounterList` component bevat nog steeds de state van de tellers. De `Counter` component bevat geen state. De `Counter` component gebruikt de properties om de teller te tonen en de callbacks op te roepen.
