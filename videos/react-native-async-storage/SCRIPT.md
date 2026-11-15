# SCRIPT — react-native-async-storage

**Voice:** ElevenLabs eleven_v4 via the `elevenlabs` CLI — Andie (`8OezxDDjGa2d9W45o5Qs`) for every line
**Voice settings:** stability 0.5, recorded as pcm_44100 and mastered once to mp3_44100_128 by `tts.py` (three takes per line, automatic pick); same voice + settings for all 13 lines
**Voice direction:** Calm, friendly teacher. Clear, unhurried. Code names in English, written split so they are spoken as words (async storage, local storage, set item, get item, to string, remove item, get all keys, use effect, activity indicator). Captions restore the code spelling (see `build.py`).

---

## Line 1 — Hook (Frame 1)

    Met async storage bewaar je data op de telefoon. Sluit je de app en open je ze opnieuw, dan is die data er nog altijd.

## Line 2 — Key-value, maar asynchroon (Frame 2)

    Het lijkt op local storage in de browser: je bewaart een waarde onder een key. Maar elke functie is asynchroon en geeft een promise terug, dus je gebruikt telkens await.

## Line 3 — Een string (Frame 3)

    Met set item sla je een string op onder een key. Met get item haal je hem terug op. Bestaat die key nog niet, dan krijg je null.

## Line 4 — Een getal (Frame 4)

    Async storage bewaart enkel strings. Een getal zet je dus eerst om met to string, en bij het uitlezen terug met Number.

## Line 5 — Een object (Frame 5)

    Een object zet je om met JSON punt stringify, en terug met JSON punt parse. Let op: parse geeft any terug. TypeScript controleert dus niet wat erin zit.

## Line 6 — Een array van objecten (Frame 6)

    Wil je iets aan een array toevoegen, dan haal je eerst de hele array op, voeg je het element toe en sla je alles opnieuw op. Is er nog niets, dan begin je met een lege array.

## Line 7 — Keys en verwijderen (Frame 7)

    Get all keys geeft een lijst van alle keys van je app. Met remove item verwijder je één key, en clear maakt alles leeg.

## Line 8 — Foutafhandeling (Frame 8)

    Opslaan of uitlezen kan mislukken, en JSON punt parse gooit een fout als de string geen geldige JSON is. Vang die fouten daarom op met try en catch.

## Line 9 — State inladen (Frame 9)

    Je kan ook state bewaren. Een eerste use effect haalt de waarde op als de component start, en zet ze in de state.

## Line 10 — State opslaan (Frame 10)

    Een tweede use effect slaat de state op telkens die verandert. Druk je op increment, dan staat de nieuwe waarde meteen in de opslag.

## Line 11 — De loading-vlag (Frame 11)

    Maar bij de eerste render zou dat effect de beginwaarde nul al opslaan, terwijl de bewaarde waarde nog geladen wordt. Daarom sla je pas op als loading false is.

## Line 12 — Laadtoestand (Frame 12)

    Zolang loading true is, toon je een activity indicator. Zo zie je nooit eerst even nul, en kan niemand drukken voor de waarde er is.

## Line 13 — Samenvatting (Frame 13)

    Samengevat: async storage bewaart strings onder een key. Getallen en objecten zet je om, fouten vang je op, en met een loading state laad je bewaarde state veilig in.
