# SCRIPT — react-datacontext

**Voice:** ElevenLabs eleven_v4 via the `elevenlabs` CLI — Andie (`8OezxDDjGa2d9W45o5Qs`) for every line
**Voice settings:** stability 0.5, output mp3_44100_128; same voice + settings for all 15 lines
**Voice direction:** Calm, friendly teacher. Clear, unhurried. Code terms in English, spoken as words (data context, data provider, use context, use effect, set loading, create post, reload button, post list, post form, use fetch, refetch).

---

## Line 1 — Hook (Frame 1)

**Delivery:** Light, listing three components, then the question and its answer.

    Drie componenten: een formulier, een knop om te herladen, en een lijst met posts. Ze hebben allemaal dezelfde data nodig. Waar zet je die? Op één plek: in een data context.

## Line 2 — Props doorgeven (Frame 2)

**Delivery:** Matter-of-fact, then a gentle "maar".

    De eerste reflex: we halen de posts op in App, en geven alles mee als props. Posts naar de lijst. Reload en loading naar de knop. Create post naar het formulier. Dat werkt, maar App wordt een verdeelstation, en elke nieuwe component vraagt weer nieuwe props.

## Line 3 — Context API (Frame 3)

**Delivery:** Brisk recap, three steps.

    Met de context API kan dat eenvoudiger. Je maakt een context met create context. Je zet een provider rond je componenten. En elke component daaronder vraagt de data op met use context.

## Line 4 — Eén bestand (Frame 4)

**Delivery:** Setting up, even rhythm.

    Alles wat met de data van de API te maken heeft, zetten we in één apart bestand: data provider punt tsx. We beginnen met de interface Post: een user id, een id, een titel en een body. Zo ziet één post van JSON placeholder eruit.

## Line 5 — De context (Frame 5)

**Delivery:** Walking through the code, careful on the default.

    Dan beschrijven we wat onze context aanbiedt: de posts, een boolean loading, en een functie reload. Met create context maken we de data context, met een default waarde: een lege lijst, loading false, en een lege functie. Die default gebruikt React alleen als er geen provider boven staat.

## Line 6 — De provider (Frame 6)

**Delivery:** Explaining children clearly.

    Nu de data provider zelf. Dat is een gewone component, met één prop: children. Daarin zitten straks alle componenten die we erin stoppen. In de provider maken we drie states: posts, loading, en een trigger, een getal dat begint bij nul.

## Line 7 — Data laden (Frame 7)

**Delivery:** Step by step through the effect, familiar on the cleanup.

    In een use effect laden we de data. We zetten loading op true en maken de lijst leeg. Dan fetchen we de posts en lezen we de JSON. Is cancelled intussen true, dan stoppen we. Anders zetten we de posts, en loading weer op false. In de cleanup zetten we cancelled op true, zoals je al kent.

## Line 8 — Herladen (Frame 8)

**Delivery:** Curious question, simple chain of cause and effect.

    Hoe laden we opnieuw? De trigger staat in de dependency array. De functie reload telt er gewoon één bij op. De trigger verandert, het effect loopt opnieuw, en de posts worden opnieuw opgehaald.

## Line 9 — Provider teruggeven (Frame 9)

**Delivery:** Wrapping up the file.

    Tot slot geeft de data provider een data context punt provider terug. In value zetten we alles wat we willen delen: posts, reload en loading. En daartussen renderen we children.

## Line 10 — App (Frame 10)

**Delivery:** A small "kijk nu", relief on "dat is alles".

    Kijk nu naar App. Geen state, geen fetch, geen props meer. We zetten de data provider rond de reload button en de post list, en dat is alles.

## Line 11 — useContext (Frame 11)

**Delivery:** Two components, one after the other.

    Elke component haalt zelf op wat hij nodig heeft. De reload button vraagt reload en loading met use context. Zolang er geladen wordt, staat de knop uit. De post list vraagt alleen de posts, en toont ze in een lijst.

## Line 12 — createPost (Frame 12)

**Delivery:** Extending the idea, light reminder on "vergeet niet".

    En wil je data aanpassen? Dan voeg je een functie toe aan de context. Create post stuurt een POST request naar de API, en voegt de nieuwe post toe aan de lijst. Vergeet niet: ook create post moet in de value van de provider. Dan kan het post form hem gewoon gebruiken.

## Line 13 — useFetch of DataContext? (Frame 13)

**Delivery:** A thoughtful "Niet helemaal.", clear contrast, light emphasis on "hoe" en "deelt".

    Misschien denk je nu: lijkt dit niet op use fetch? Niet helemaal. Use fetch is een custom hook: herbruikbare logica. Roepen de lijst en de knop allebei use fetch aan, dan heeft elk zijn eigen state, en worden de posts twee keer opgehaald. Een refetch in de knop herlaadt de lijst dus niet. Een data context deelt data: één state, één fetch, voor elke component onder de provider. Kort gezegd: use fetch gaat over hoe je data ophaalt, een context over hoe je data deelt.

## Line 14 — Samen gebruiken (Frame 14)

**Delivery:** Pleased discovery on "combineren", relaxed close on "Het kan dus allemaal."

    En het mooie is: je kan ze combineren. Niets zegt dat de fetch logica zelf in de provider moet staan. In de data provider roep je gewoon use fetch aan, met Post array en de url van de posts. Data geef je door als posts, met een lege lijst zolang er nog niets is, en refetch als reload. De provider wordt een stuk korter, en de componenten merken er niets van. Het kan dus allemaal.

## Line 15 — Samenvatting (Frame 15)

**Delivery:** Calm recap, warm close.

    Samengevat: alle data en logica zitten op één plek, in de data provider. De componenten vragen met use context alleen wat ze nodig hebben. En App blijft lekker overzichtelijk.
