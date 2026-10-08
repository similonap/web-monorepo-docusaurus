# SCRIPT — react-usestate

**Voice:** ElevenLabs eleven_v4 via the `elevenlabs` CLI — Andie (`8OezxDDjGa2d9W45o5Qs`) for every line
**Voice settings:** stability 0.5, output mp3_44100_128; same voice + settings for all 14 lines
**Voice direction:** Calm, friendly teacher. Clear, unhurried. Code terms in English, spoken as words (use state, set count, on change, value).

---

## Line 1 — Hook (Frame 1)

**Time:** 0 – 9s
**Delivery:** Light, a little playful on "Simpel?".

    Een knop met een getal. Je klikt, en het getal gaat omhoog. Simpel? Toch heb je daarvoor het belangrijkste concept van React nodig: state.

## Line 2 — De teller (Frame 2)

**Time:** 9 – 19s
**Delivery:** Setting up the example, matter-of-fact.

    We beginnen met een component met één knop. In de knop staat een teller. En telkens je op de knop klikt, moet die teller één omhoog gaan.

## Line 3 — Een gewone variabele (Frame 3)

**Time:** 19 – 33s
**Delivery:** Curious, then a small letdown on "op nul staan".

    We moeten die waarde dus ergens bijhouden, en kunnen aanpassen. Met een gewone variabele lukt dat niet. Je klikt, de variabele wordt één… maar op je scherm blijft de teller gewoon op nul staan.

## Line 4 — De functie opnieuw oproepen (Frame 4)

**Time:** 33 – 48s
**Delivery:** Explaining, slightly slower on "opnieuw oproepen".

    Wat je op je scherm ziet, is wat je component-functie teruggeeft. Verandert de waarde, dan moet alles wat die waarde toont mee veranderen. React moet je functie dus opnieuw oproepen, met de nieuwe waarde.

## Line 5 — useState (Frame 5)

**Time:** 48 – 62s
**Delivery:** Naming the concept, firm on "state".

    Zo'n waarde noemen we state. Je maakt ze met use state. Je krijgt twee dingen terug: de huidige waarde, count, en een functie om ze aan te passen, set count. De nul is de beginwaarde.

## Line 6 — Opnieuw renderen (Frame 6)

**Time:** 62 – 78s
**Delivery:** Walking through a cycle, even rhythm; lift on "één".

    Klik je op de knop, dan roep je set count op, met count plus één. React onthoudt de nieuwe waarde, en roept je functie opnieuw op. Dat noemen we opnieuw renderen. Deze keer geeft use state één terug, en je knop toont één.

## Line 7 — Twee keer setCount (Frame 7)

**Time:** 78 – 89s
**Delivery:** Setting a trap, then a wry beat on "maar per één".

    Wat als je twee keer set count oproept, met count plus één? Je verwacht dat de teller per twee omhoog gaat. Maar je klikt… en hij gaat maar per één.

## Line 8 — Waarom? (Frame 8)

**Time:** 89 – 104s
**Delivery:** Patient explanation, stress on "deze render".

    Waarom? Count is de waarde van deze render. Die verandert niet zolang je functie loopt. Dus twee keer zeg je: set count van nul plus één. Twee keer de waarde één. Pas bij de volgende render is count één.

## Line 9 — De callback (Frame 9)

**Time:** 104 – 121s
**Delivery:** Relief, the fix; practical on the last sentence.

    De oplossing: geef een functie mee aan set count. React geeft je dan de meest recente waarde, prev count, en jij geeft de nieuwe terug. Zo bouwt de tweede update verder op de eerste: nul, één, twee. Hangt je nieuwe state af van de vorige? Gebruik dan altijd een callback.

## Line 10 — Een inputveld (Frame 10)

**Time:** 121 – 135s
**Delivery:** Fresh start, a new example.

    Tweede voorbeeld: een inputveld, en een p-tag die toont wat je typte. De tekst bewaar je in state, name, met een lege string als begin. Met on change zet je bij elke toets de nieuwe tekst in de state.

## Line 11 — Vanzelf mee (Frame 11)

**Time:** 135 – 146s
**Delivery:** Light, a small "see?" on "niets".

    Typ je iets, dan rendert React opnieuw, en de p-tag toont meteen je tekst. Daar moest je zelf niets voor doen: de p-tag leest gewoon de state.

## Line 12 — Leegmaken (Frame 12)

**Time:** 146 – 161s
**Delivery:** Setting up the problem; puzzled on "staat je tekst er nog".

    Nu voegen we een knop toe die het veld leegmaakt. Die zet de state op een lege string. De p-tag wordt leeg… maar in het inputveld staat je tekst er nog. Het veld weet niets van je state.

## Line 13 — value + onChange (Frame 13)

**Time:** 161 – 178s
**Delivery:** Confident, resolving; slower on "dubbele binding".

    Daarom zet je ook value gelijk aan name. Nu toont het veld altijd wat er in de state zit. Value en on change samen geven een dubbele binding: typen past de state aan, en de state past het veld aan. Dat noemen we een controlled component.

## Line 14 — Samenvatting (Frame 14)

**Time:** 178 – 192s
**Delivery:** Warm wrap-up, slight lift on the last clause.

    Kort samengevat: state is wat je component onthoudt. Pas je het aan met de set-functie, dan rendert React opnieuw. Hangt de nieuwe waarde af van de vorige, gebruik een callback. En bij een inputveld zet je value én on change.
