# SCRIPT — ts-promise-all

**Voice:** ElevenLabs eleven_v4 via the `elevenlabs` CLI — Andie (`8OezxDDjGa2d9W45o5Qs`) for every line
**Voice settings:** stability 0.5, output mp3_44100_128; same voice + settings for all 9 lines
**Voice direction:** Calm, friendly teacher. Clear, unhurried. Code terms in English, written split so they are spoken as words (promise punt all, promise punt all settled). Captions restore the code spelling (see `build.py`).

---

## Line 1 — Hook (Frame 1)

    Drie berekeningen die elk één seconde duren. Na elkaar ben je drie seconden bezig. Met promise punt all ben je na één seconde klaar.

## Line 2 — Het probleem (Frame 2)

    Met geneste then's start de tweede vermenigvuldiging pas als de eerste klaar is, en de derde pas na de tweede. Samen duurt dat drie seconden, terwijl de berekeningen elkaar helemaal niet nodig hebben.

## Line 3 — Promise.all (Frame 3)

    Promise punt all krijgt een array van promises, en geeft één nieuwe promise terug. Die is pas fulfilled als alle promises klaar zijn. De waarde is een array met alle resultaten.

## Line 4 — Tegelijk (Frame 4)

    Op het moment dat je de array maakt, starten de drie timers al. Ze lopen tegelijk. Je wacht dus niet de som van alle wachttijden, maar zo lang als de traagste promise: één seconde.

## Line 5 — Volgorde (Frame 5)

    Duurt de eerste vermenigvuldiging drie seconden, dan is die als laatste klaar. Toch staat vier op de eerste plaats. Het resultaat volgt de volgorde van de array, niet wie eerst klaar is.

## Line 6 — Map (Frame 6)

    Heb je een array met gegevens, dan maak je de promises met map. Map geeft een array van promises. Promise punt all maakt daar één promise van, met een array van getallen.

## Line 7 — Eén faalt (Frame 7)

    Maar promise punt all is alles of niets. Faalt één promise, dan wordt het geheel meteen rejected, en kom je in de catch. De resultaten van de andere promises ben je kwijt.

## Line 8 — allSettled (Frame 8)

    Wil je toch elke uitkomst kennen, gebruik dan promise punt all settled. Die wacht tot alles klaar is en faalt nooit. Je krijgt per promise een object met een status: fulfilled met een value, of rejected met een reason.

## Line 9 — Samenvatting (Frame 9)

    Samengevat: promise punt all laat promises tegelijk lopen, en geeft de resultaten in de volgorde van de array. Faalt er één, dan faalt alles. Wil je elke uitkomst, gebruik dan all settled.
