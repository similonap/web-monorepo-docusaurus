# SCRIPT — react-child-parent

**Voice:** ElevenLabs eleven_v4 via the `elevenlabs` CLI — Andie (`8OezxDDjGa2d9W45o5Qs`) for every line
**Voice settings:** stability 0.5, output mp3_44100_128; same voice + settings for all 13 lines
**Voice direction:** Calm, friendly teacher. Clear, unhurried. Code terms in English, spoken as words (use state, set selected, on click, on select, selected index, set selected index).

---

## Line 1 — Hook (Frame 1)

**Delivery:** Light and curious, landing on "callback".

    Drie vierkanten. Klik je op een vierkant, dan krijgt het een rand. Maar wat als er maar één vierkant tegelijk geselecteerd mag zijn? Dan moet een child iets laten weten aan zijn parent. En dat doen we met een callback.

## Line 2 — Square (Frame 2)

**Delivery:** Setting up the example, matter-of-fact.

    We beginnen met een Square component. Met use state maken we een state selected, standaard false. Klikken we op het vierkant, dan zet de on click handler selected op true. En is selected true, dan krijgt het vierkant een blauwe rand.

## Line 3 — Eigen state (Frame 3)

**Delivery:** Reassuring, emphasis on "alleen hij".

    Die state staat in de Square zelf. En dat is logisch: hij, en alleen hij, moet weten dat hij geselecteerd is. Niemand anders heeft die informatie nodig.

## Line 4 — Op zichzelf (Frame 4)

**Delivery:** Demonstrating, relaxed.

    In App zetten we drie squares naast elkaar. Elk vierkant heeft zijn eigen state. Klik je op het eerste, en daarna op het derde, dan zijn ze allebei geselecteerd. Ze staan volledig op zichzelf, en hebben geen invloed op elkaar.

## Line 5 — Maar één tegelijk (Frame 5)

**Delivery:** A new requirement, then the problem, serious but calm.

    Maar stel nu: er mag maar één vierkant tegelijk geselecteerd zijn. Klik je op een ander vierkant, dan moet het vorige zijn rand verliezen. Plots hebben de squares wél invloed op elkaar. En dat lukt niet, want geen enkel vierkant kent de state van een ander.

## Line 6 — Naar de parent (Frame 6)

**Delivery:** Question, then the insight.

    Wie kent ze dan wel alle drie? De parent: App. Dus verhuist de state naar boven, naar App. Daar houden we bij welk vierkant geselecteerd is.

## Line 7 — selectedIndex (Frame 7)

**Delivery:** Walking through the code, even rhythm.

    In App maken we een state selected index, van het type number of null. Null betekent: nog niets geselecteerd. Anders bewaren we de index van het geselecteerde vierkant: nul, één of twee.

## Line 8 — selected als prop (Frame 8)

**Delivery:** Building, clear on "prop".

    Square houdt zelf geen state meer bij. In de plaats krijgt hij een prop: selected, een boolean. App vergelijkt de index. Is selected index nul, dan krijgt het eerste vierkant true, en de andere twee false.

## Line 9 — Het probleem (Frame 9)

**Delivery:** Spotting the gap, a real question at the end.

    Maar nu zit er een probleem. Klik je op een vierkant, dan moet selected index veranderen. Alleen zit die state in App, en Square weet niet eens dat die bestaat. Hoe passen we die state dan aan, vanuit het child?

## Line 10 — onSelect (Frame 10)

**Delivery:** The solution, confident.

    Met een callback. We geven Square een functie mee, gewoon als een prop: on select. In de props is dat een functie die niets teruggeeft. En in de on click roept Square die functie gewoon aan.

## Line 11 — App geeft de callback (Frame 11)

**Delivery:** Even, counting the three indexes.

    App geeft elk vierkant zijn eigen callback mee. Daarin roepen we set selected index aan, met de index van dat vierkant. Bij het eerste nul, bij het tweede één, en bij het derde twee.

## Line 12 — De klik (Frame 12)

**Delivery:** Narrating a flow step by step, satisfied at the end.

    Wat gebeurt er nu bij een klik? Square roept on select aan. Die functie kreeg hij van App, dus wordt de callback van App uitgevoerd, en die zet de nieuwe index. App rendert opnieuw, en elk vierkant krijgt een nieuwe selected prop. Zo is er altijd maar één vierkant actief.

## Line 13 — Samenvatting (Frame 13)

**Delivery:** Warm wrap-up, slight lift on the last sentence.

    Kort samengevat: moeten componenten elkaar beïnvloeden, dan verhuist de state naar de parent. Die geeft de waarde door als prop, zoals selected. En met een callback, zoals on select, laat het child weten dat er iets gebeurd is. Data gaat naar beneden, events gaan naar boven.
