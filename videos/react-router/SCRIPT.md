# SCRIPT — react-router

**Voice:** ElevenLabs eleven_v4 via the `elevenlabs` CLI — Andie (`8OezxDDjGa2d9W45o5Qs`) for every line
**Voice settings:** stability 0.5, output mp3_44100_128; same voice + settings for all 14 lines
**Voice direction:** Calm, friendly teacher. Clear, unhurried. Code terms in English, spoken as words (create browser router, router provider, Outlet, Link, NavLink, class name, is active, error element, use route error, page not found).

---

## Line 1 — Hook (Frame 1)

**Delivery:** Light, observing, landing on "React Router".

    Je klikt op een link. De URL verandert, en je ziet een andere pagina. Maar de app laadt niet opnieuw. Dat heet client-side routing. En in React doe je dat met React Router.

## Line 2 — Routes (Frame 2)

**Delivery:** Setting up, even rhythm.

    Eerst maak je een router, met create browser router. Die krijgt een array van routes. Elke route is een object, met een path: de URL. En een element: de component die je op die URL wil zien.

## Line 3 — RouterProvider (Frame 3)

**Delivery:** Practical, a small warning at "Let op".

    Die router geef je mee aan de router provider, in App. Let op: router provider importeer je uit react router slash dom. En maak de router buiten je component aan. Anders krijg je bij elke render een nieuwe router.

## Line 4 — Het probleem (Frame 4)

**Delivery:** Noticing a problem, then the answer.

    Maar de meeste apps hebben op elke pagina dezelfde header, dezelfde navigatie en dezelfde footer. Die wil je niet in elke pagina opnieuw schrijven. Daarvoor maak je een layout.

## Line 5 — De layout (Frame 5)

**Delivery:** Walking through the component, emphasis on "Outlet".

    Een layout is een gewone component, bijvoorbeeld Root. Daarin zet je alles wat op elke pagina terugkomt: de header, de navigatie en de footer. En op de plek waar de pagina zelf moet komen, zet je een Outlet.

## Line 6 — Children (Frame 6)

**Delivery:** Step by step, clear on the example.

    In de router wordt Root de route op slash, en de pagina's worden zijn children. Hun paden zijn relatief: about wordt slash about. De route met index true is de standaardpagina: die zie je op slash zelf. Surf je naar slash about, dan toont React Router eerst Root, en in de Outlet de About pagina.

## Line 7 — a href (Frame 7)

**Delivery:** "Nu de navigatie" as a new chapter, a gentle "maar".

    Nu de navigatie. Je eerste reflex is misschien een gewone a-tag, met een h ref. Dat werkt, maar de browser stuurt dan een nieuw request naar de server, en laadt de hele app opnieuw. Je ziet de pagina even flitsen, en alle state is weg.

## Line 8 — Link (Frame 8)

**Delivery:** The fix, calm and satisfied.

    Gebruik daarom Link, uit React Router. In plaats van h ref schrijf je toe. Klik je erop, dan is er geen request. React Router past de URL aan, en wisselt enkel wat er in de Outlet staat. De header blijft staan, en je state ook.

## Line 9 — NavLink (Frame 9)

**Delivery:** Introducing a sibling, light emphasis on "active".

    Voor een navigatiebalk is er Nav Link. Die werkt net als Link, maar weet ook of hij naar de huidige pagina wijst. Is dat zo, dan krijgt hij automatisch de class active. Zo geef je de actieve link een andere stijl.

## Line 10 — className met isActive (Frame 10)

**Delivery:** Question, then a short explanation.

    Wil je zelf kiezen welke class hij krijgt? Geef dan een functie mee aan class name. Die functie krijgt is active, een boolean. Is die true, dan geef je de actieve stijl terug. Anders de gewone.

## Line 11 — Het verschil (Frame 11)

**Delivery:** Listing three, clear contrast.

    Even op een rij. Een a-tag met een h ref laadt de hele app opnieuw. Gebruik die enkel voor links naar een andere website. Link navigeert binnen je app, zonder request. En Nav Link doet precies hetzelfde, maar weet bovendien of hij actief is. Ideaal voor je menu.

## Line 12 — Ontbrekende pagina's (Frame 12)

**Delivery:** A question, a slightly dry "Niet erg gebruiksvriendelijk.", then the fix.

    Wat als iemand surft naar een URL die niet bestaat? Dan toont React Router een standaard foutpagina. Niet erg gebruiksvriendelijk. Voeg daarom een child route toe, met als path een sterretje. Die matcht alles waarvoor geen betere route bestaat. Omdat het een child van Root is, staat je page not found gewoon binnen de layout.

## Line 13 — errorElement (Frame 13)

**Delivery:** Calm, step by step through the error page.

    En als er iets misloopt tijdens het renderen? Dan geef je de route een error element. Dat wordt getoond in plaats van het gewone element. Met de hook use route error vraag je op wat er misging. Is route error response vertelt je of het een fout van de router is, zoals een vier nul vier. Dan toon je de status, anders een algemene melding.

## Line 14 — Samenvatting (Frame 14)

**Delivery:** Calm recap, warm close with the teaser.

    Samengevat: met create browser router koppel je URL's aan componenten. Een layout met een Outlet geeft elke pagina dezelfde structuur. Navigeren doe je met Link en Nav Link, niet met een a-tag. En met een sterretje en een error element vang je ontbrekende pagina's en fouten op. Hoe je parameters uit de URL haalt, zie je in een volgend filmpje.
