# SCRIPT — react-useeffect

**Voice:** ElevenLabs eleven_v4 via the `elevenlabs` CLI — Andie (`8OezxDDjGa2d9W45o5Qs`) for every line
**Voice settings:** same voice + settings for all 12 lines
**Voice direction:** Calm, friendly teacher. Clear, unhurried, a small pause at each "—". Code terms in English, spoken as words (set interval, use effect, clear interval).

---

## Line 1 — Hook (Frame 1)

**Time:** 0 – 10s
**Delivery:** Light and curious, a hint of drama on "vast".

    Een teller die elke seconde één omhoog gaat. Klinkt simpel. Maar met één verkeerde regel… loopt je hele pagina vast.

## Line 2 — Zonder effect (Frame 2)

**Time:** 10 – 21s
**Delivery:** Matter-of-fact, setting up the trap; relaxed on the last sentence.

    Stel je voor: je zet een set interval gewoon in je component. Na een seconde tikt de timer, en die verhoogt de state. Tot zover niets aan de hand.

## Line 3 — De render-lus (Frame 3)

**Time:** 21 – 36s
**Delivery:** Explaining, a little slower on "de hele functie opnieuw".

    Maar een state-update betekent: React rendert je component opnieuw. En bij die render wordt de hele functie opnieuw uitgevoerd — dus ook set interval. Er komt een tweede timer bij.

## Line 4 — Uit de hand (Frame 4)

**Time:** 36 – 54s
**Delivery:** Building tension through the doubling count; flat landing on "vast".

    En elke timer veroorzaakt weer een render, en elke render weer een nieuwe timer. Twee, vier, acht, zestien… Na tien seconden lopen er meer dan duizend timers. Je teller schiet weg, en je browser loopt vast.

## Line 5 — Side effects (Frame 5)

**Time:** 54 – 71s
**Delivery:** Naming the concept, calm.

    Het probleem: set interval is een side effect. Code die niets bijdraagt aan wat je component toont — een timer, een fetch, de titel van je pagina aanpassen. En je hebt geen controle over hoe vaak React rendert.

## Line 6 — useEffect (Frame 6)

**Time:** 71 – 88s
**Delivery:** Relief — the solution; firm on "maar één keer".

    Daarvoor is er use effect. Je geeft een functie mee, en React voert die uit ná het renderen — los van de render zelf. Met een lege array als tweede argument: maar één keer. Eén timer, hoe vaak er ook gerenderd wordt.

## Line 7 — Dependency array (Frame 7)

**Time:** 88 – 104s
**Delivery:** Listing three cases, even rhythm.

    Die array heet de dependency array, en die bepaalt wanneer je effect loopt. Geen array: na elke render. Een lege array: één keer, na de eerste render. En met count erin: telkens wanneer count verandert.

## Line 8 — Cleanup: het probleem (Frame 8)

**Time:** 104 – 123s
**Delivery:** Warning tone on "opgelet", wry on "De oude?".

    Maar opgelet. Stel dat de interval een prop is, die je met een slider kiest. Dan zet je interval in de dependency array. Elke keer je schuift, loopt het effect opnieuw en start er een nieuwe timer. De oude? Die wordt nooit gestopt — en blijft gewoon doortellen.

## Line 9 — Cleanup: de oplossing (Frame 9)

**Time:** 123 – 143s
**Delivery:** Confident, resolving.

    De oplossing: geef vanuit je effect een cleanup-functie terug. Daarin roep je clear interval op, met de handle van je timer. React voert die cleanup uit vóór het effect opnieuw loopt, en wanneer je component verdwijnt. Zo loopt er altijd maar één timer.

## Line 10 — Data ophalen (Frame 10)

**Time:** 143 – 161s
**Delivery:** Practical, an aside on "Let op".

    Je gebruikt use effect ook om data op te halen uit een API — één keer, met een lege array. Let op: de callback zelf mag niet async zijn. Dus maak je binnenin een async functie, en roep je die meteen op.

## Line 11 — Strict Mode (Frame 11)

**Time:** 161 – 174s
**Delivery:** Reassuring.

    Zie je in development je effect toch twee keer lopen? Dat is Strict Mode. React test zo of je cleanup klopt. Zet het dus niet af — ruim gewoon netjes op.

## Line 12 — Samenvatting (Frame 12)

**Time:** 174 – 188s
**Delivery:** Warm wrap-up, slight lift on the last clause.

    Kort samengevat: side effects horen in use effect. De dependency array bepaalt wanneer het loopt. En wat je start, ruim je op — met een cleanup-functie.
