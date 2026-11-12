# SCRIPT — ts-promises

**Voice:** ElevenLabs eleven_v4 via the `elevenlabs` CLI — Andie (`8OezxDDjGa2d9W45o5Qs`) for every line
**Voice settings:** stability 0.5, output mp3_44100_128; same voice + settings for all 11 lines
**Voice direction:** Calm, friendly teacher. Clear, unhurried. Code terms in English, written split so they are spoken as words (new promise, set timeout, console log, read file). Captions restore the code spelling (see `build.py`).

---

## Line 1 — Hook (Frame 1)

    Je programma vraagt data op aan een server. Dat duurt even, en je wil niet dat alles stilvalt tot het antwoord er is. Daarom krijg je meteen een promise terug: een belofte dat de waarde later komt.

## Line 2 — Aanmaken (Frame 2)

    Een promise maak je met new Promise. Je geeft een functie mee met twee parameters: resolve en reject. Tussen de punthaken zet je het type van de waarde. Hier is dat een number.

## Line 3 — Resolve (Frame 3)

    Met set timeout wachten we één seconde. Daarna roepen we resolve op met twee maal twee. Tot dan is de promise pending. Vanaf dat moment is ze fulfilled, met de waarde vier.

## Line 4 — Then (Frame 4)

    Om die waarde te gebruiken, roep je then op. De functie die je meegeeft, wordt pas uitgevoerd als de promise klaar is. Result is dan een number: het type dat je bij het aanmaken opgaf.

## Line 5 — Asynchroon (Frame 5)

    Let op de volgorde. Zet je een console log onder de then, dan verschijnt die tekst eerst. Je programma wacht niet op de promise. De then komt pas een seconde later aan de beurt.

## Line 6 — Return type (Frame 6)

    Meestal maak je zelf geen promise, maar roep je een functie op die er een teruggeeft. Multiply vermenigvuldigt twee getallen en heeft als return type Promise van number.

## Line 7 — Pending (Frame 7)

    Log je het resultaat meteen, dan zie je Promise pending: de waarde is er nog niet. Gebruik dus then. Dat kan ook rechtstreeks op de aanroep van multiply.

## Line 8 — Reject (Frame 8)

    Loopt er iets mis, dan roep je reject op, met een error. Hier geven we een fout als het resultaat groter is dan tien.

## Line 9 — Catch (Frame 9)

    Bij een reject wordt then overgeslagen. Met catch vang je de fout op en lees je de boodschap. Multiply van vier en tien geeft dus: result is greater than ten.

## Line 10 — Ingebouwd (Frame 10)

    Node zelf heeft ook functies die een promise teruggeven. Read file uit fs slash promises leest een bestand in. Bestaat het bestand niet, dan kom je in de catch.

## Line 11 — Samenvatting (Frame 11)

    Samengevat: een promise is een waarde die later komt. Met resolve vervul je ze, met reject laat je ze mislukken. Met then gebruik je de waarde, en met catch vang je de fout op.
