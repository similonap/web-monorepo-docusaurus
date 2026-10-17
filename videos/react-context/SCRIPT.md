# SCRIPT — react-context

**Voice:** ElevenLabs eleven_v4 via the `elevenlabs` CLI — Andie (`8OezxDDjGa2d9W45o5Qs`) for every line
**Voice settings:** stability 0.5, output mp3_44100_128; same voice + settings for all 15 lines
**Voice direction:** Calm, friendly teacher. Clear, unhurried. Code terms in English, spoken as words (theme toggle, set theme, create context, use context, I theme context, provider).

---

## Line 1 — Hook (Frame 1)

**Delivery:** Light, building up, landing on "Context".

    Je app groeit. Je splitst een component op in kleinere componenten, en die weer in nog kleinere. Tot zover geen probleem. Maar waar zet je dan je state? Het antwoord heet Context.

## Line 2 — De boom (Frame 2)

**Delivery:** Setting up, matter-of-fact.

    Neem deze app. App bevat een Layout, met daarin een Header en een Main. In de Header zit een Theme Toggle: een knop om te wisselen tussen light en dark. En in Main staat een Article.

## Line 3 — State in een child (Frame 3)

**Delivery:** Calm, then spotting the limit.

    Zet je de theme state in Theme Toggle, dan werkt de knop. Maar die state is enkel bereikbaar in Theme Toggle zelf, en eventueel in zijn child components. Article kan er niet aan.

## Line 4 — State omhoog (Frame 4)

**Delivery:** Climbing rhythm, one step per level.

    Wil Article de theme ook gebruiken, dan moet de state hoger. Naar Header. Naar Layout. Elke keer dat meer componenten de state nodig hebben, schuift hij een niveau op. Tot hij helemaal bovenaan staat, in App.

## Line 5 — Props naar beneden (Frame 5)

**Delivery:** Narrating a path downwards.

    Hoe raakt de theme dan terug bij Article? Via props. App geeft hem aan Layout, Layout geeft hem aan Main, en Main geeft hem aan Article. Dat noemen we prop drilling.

## Line 6 — Doorgeefluik (Frame 6)

**Delivery:** Pointing out the waste.

    Kijk naar Layout en Main. Die doen zelf niets met de theme. Toch moeten ze hem als prop ontvangen, enkel om hem door te geven aan hun children.

## Line 7 — Callbacks (Frame 7)

**Delivery:** Getting heavier, a sigh on "onhoudbaar".

    En wil Theme Toggle de theme aanpassen? Dan moet ook de callback set theme door heel de structuur: van App naar Layout, naar Header, tot bij de knop. Dit is onhoudbaar.

## Line 8 — Het idee (Frame 8)

**Delivery:** A question, then the relief.

    Wat als we de state van het hoogste component rechtstreeks konden doorgeven, enkel aan de componenten die hem nodig hebben? Zonder alle tussenliggende props. Dat kan, met Context.

## Line 9 — Interface en createContext (Frame 9)

**Delivery:** Walking through the code.

    Eerst beschrijven we in een interface wat we willen delen: I Theme Context, met een property theme van het type string. Met React punt create context maken we de Theme Context, met als default waarde light.

## Line 10 — De Provider (Frame 10)

**Delivery:** Building, satisfied at the end.

    In App, ons hoofdcomponent, zetten we een Theme Context Provider. Zijn value koppelt theme aan de state van App. Alle child components zetten we erin. Zo heeft elk component binnen de Provider toegang tot de theme, zelfs de children van de children.

## Line 11 — useContext (Frame 11)

**Delivery:** Step by step.

    Hoe gebruikt een component die theme? In Article roepen we use context aan, met Theme Context als argument. Met object destructuring halen we de theme eruit. Elk component dat de theme nodig heeft, doet hetzelfde.

## Line 12 — De rest doet niets (Frame 12)

**Delivery:** Light, almost amused.

    En de componenten die niets met de theme doen, zoals Layout, Header en Main? Die doen gewoon niets. Geen extra props meer. Ze blijven volledig onafhankelijk van de theme state.

## Line 13 — setTheme in de interface (Frame 13)

**Delivery:** A new part, fresh start.

    Wil je de theme ook aanpassen vanuit een child? Dan steek je de setter set theme mee in de context. In de interface krijgt hij als type een functie die een theme van het type string krijgt, en niets teruggeeft. De default waarde krijgt een lege functie.

## Line 14 — setTheme gebruiken (Frame 14)

**Delivery:** Narrating a flow, satisfied at the end.

    In de Provider geven we set theme mee, net zoals theme. In Theme Toggle halen we allebei uit de context. Een klik op de knop roept set theme aan, en elk component dat de theme gebruikt, past zich aan.

## Line 15 — Samenvatting (Frame 15)

**Delivery:** Calm recap, even rhythm.

    Samengevat: een interface beschrijft wat je deelt. Create context maakt de context. De Provider bovenaan geeft de waarde mee. En use context haalt hem op, enkel waar je hem nodig hebt.
