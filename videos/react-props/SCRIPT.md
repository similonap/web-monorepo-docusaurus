# SCRIPT — react-props

**Voice:** ElevenLabs eleven_v4 via the `elevenlabs` CLI — Andie (`8OezxDDjGa2d9W45o5Qs`) for every line
**Voice settings:** stability 0.5, output mp3_44100_128; same voice + settings for all 13 lines
**Voice direction:** Calm, friendly teacher. Clear, unhurried. Code terms in English, spoken as words (badge, label, color, string).

---

## Line 1 — Hook (Frame 1)

**Delivery:** Light, a small question on "Hoe?".

    Drie badges, elk met een eigen label en een eigen kleur. Toch schrijf je de code maar één keer. Hoe? Met props.

## Line 2 — De badge (Frame 2)

**Delivery:** Setting up the example, matter-of-fact.

    We beginnen met een eenvoudige badge. Gewoon een div, met een tekstkleur, een achtergrondkleur en een label: nieuw. Die zetten we rechtstreeks in onze App-component.

## Line 3 — Kopiëren en plakken (Frame 3)

**Delivery:** Light, a little routine on "En nog eens".

    Nu wil je diezelfde badge ook ergens anders tonen. En nog ergens anders. Dus je kopieert de div, en plakt hem erbij. En nog eens.

## Line 4 — DRY (Frame 4)

**Delivery:** Pointing out the problem, firm on the principle.

    Maar nu herhaal je jezelf. Wil je de kleur aanpassen, dan moet je dat op drie plaatsen doen. Daarmee overtreed je het dry-principe: Don't Repeat Yourself.

## Line 5 — Een component (Frame 5)

**Delivery:** Relief, the fix.

    Dus maken we er een component van: Badge. De div staat nu op één plek. In App gebruik je gewoon drie keer Badge, en je scherm blijft hetzelfde.

## Line 6 — Een ander label (Frame 6)

**Delivery:** A playful "Klaar? Nee.", then weighing the bad option.

    Klaar? Nee. Nu komt de vraag om dezelfde badge te tonen, maar met een ander label: uitverkocht. Maak je dan een nieuwe component? Liever niet. Dan kopieer je opnieuw bijna alles.

## Line 7 — Props (Frame 7)

**Delivery:** Naming the concept, firm on "props".

    We willen de Badge die we al hebben hergebruiken. React heeft daar een oplossing voor: props. Je geeft het label door aan de component, net zoals een attribuut in HTML.

## Line 8 — Props ontvangen (Frame 8)

**Delivery:** Walking through the code, even rhythm.

    In Badge beschrijf je met een interface welke props je verwacht: label, van het type string. Je haalt label uit de props, en zet het tussen accolades in de div. Nu werkt Badge met eender welk label.

## Line 9 — Een kleur als string (Frame 9)

**Delivery:** Easy at first, then a wry beat on "banaan".

    Volgende vraag: ook een andere kleur. Eenvoudig, we voegen een tweede prop toe: color. Je zou er een string van kunnen maken. Maar een string is te open: niets houdt je tegen om banaan door te geven.

## Line 10 — Een eigen type (Frame 10)

**Delivery:** Confident, resolving.

    We willen enkel red, green en blue toestaan, en dat is het. Daarom maken we een eigen type: Color, met precies die drie waarden. Geef je nu iets anders door, dan geeft TypeScript meteen een fout.

## Line 11 — Hergebruik (Frame 11)

**Delivery:** Satisfied, listing the three.

    Nu kan je met één Badge-component allerlei badges maken: nieuw in het groen, uitverkocht in het rood, en promo in het blauw.

## Line 12 — Standaardwaarde (Frame 12)

**Delivery:** Curious question, then practical.

    En als je helemaal geen kleur opgeeft? Dan wil je dat de badge gewoon groen is. Maak color optioneel met een vraagteken, en geef een standaardwaarde mee: green. Laat je color weg, dan wordt je badge groen.

## Line 13 — Samenvatting (Frame 13)

**Delivery:** Warm wrap-up, slight lift on the last clause.

    Kort samengevat: herhaal je code, maak er een component van. Met props geef je data door, zodat je die component kan hergebruiken. Met een eigen type beperk je wat mag, en met een standaardwaarde mag een prop wegblijven.
