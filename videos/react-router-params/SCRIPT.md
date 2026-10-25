# SCRIPT — react-router-params

**Voice:** ElevenLabs eleven_v4 via the `elevenlabs` CLI — Andie (`8OezxDDjGa2d9W45o5Qs`) for every line
**Voice settings:** stability 0.5, output mp3_44100_128; same voice + settings for all 14 lines
**Voice direction:** Calm, friendly teacher. Clear, unhurried. Code terms in English, written split so they are spoken as words (use params, use search params, set search params, update param). Captions restore the code spelling (see `build.py`).

---

## Line 1 — Hook (Frame 1)

**Delivery:** Curious opening, two examples, landing on the two hooks.

    Een URL vertelt meer dan je denkt. Slash products slash twee: dat is het product met id twee. En slash products vraagteken sort is price toont de lijst, gesorteerd op prijs. Die stukjes lees je in React Router met use params en use search params.

## Line 2 — Eén route met een parameter (Frame 2)

**Delivery:** Problem, then the idea of a placeholder.

    Neem een webshop. Voor elk product een aparte route maken, dat lukt niet: er komen voortdurend producten bij. Daarom maak je één route met een parameter: products slash dubbelpunt id. Het dubbelpunt maakt van id een plaatshouder. Slash products slash één en slash products slash twee tonen dan dezelfde component, met andere data.

## Line 3 — useParams (Frame 3)

**Delivery:** Question, then the answer, calm.

    Welke waarde zit er in die plaatshouder? Dat vraag je op met de hook use params. Die geeft een object met de URL parameters van de huidige pagina, en met destructuring haal je id eruit. Vanuit de lijst link je dan gewoon naar slash products slash het id van het product.

## Line 4 — Altijd een string (Frame 4)

**Delivery:** A warning, practical.

    Let op: een parameter is altijd een string. Slash products slash twee geeft de string twee, niet het getal. Heb je een getal nodig, zet het dan om met Number. En controleer het resultaat: slash products slash abc geeft not a number. Toon dan een duidelijke melding.

## Line 5 — Types en meerdere parameters (Frame 5)

**Delivery:** Explaining, light.

    Het type van een parameter is string of undefined. Een typfout in de naam merkt TypeScript dus niet op. Geef daarom de namen mee als type argument, dan stelt je editor de juiste namen voor. Een pad kan ook meerdere parameters hebben: die komen allemaal in hetzelfde object.

## Line 6 — Query parameters (Frame 6)

**Delivery:** New chapter, clear contrast at the end.

    Dan de query parameters: het deel na het vraagteken. Telkens een sleutel en een waarde, gescheiden door een ampersand. Ze horen niet bij het pad: de route products matcht ook als er query parameters achter staan. Een URL parameter bepaalt welke resource je toont. Een query parameter is optioneel, en bepaalt hoe: een zoekterm, een filter of een sortering.

## Line 7 — useSearchParams (Frame 7)

**Delivery:** Familiar comparison with useState.

    Query parameters lees je met use search params. Net als bij use state krijg je een array met twee elementen: de huidige waarden, en een functie om ze aan te passen. Search params punt get geeft een waarde als string, of null als ze ontbreekt. Voorzie dus altijd een standaardwaarde.

## Line 8 — setSearchParams (Frame 8)

**Delivery:** Two variants, a small "maar" between them.

    Met set search params pas je ze aan: de URL verandert, en de component rendert opnieuw. Geef je een object mee, dan vervang je alle parameters. Wil je er één aanpassen en de rest behouden? Geef dan een functie mee. Die kopieert de vorige parameters, en zet enkel die ene waarde.

## Line 9 — De URL als state (Frame 9)

**Delivery:** Problem, then three benefits, listing.

    Tot nu toe hielden we een zoekterm of een sortering bij met use state. Maar herlaad de pagina, en alles is weg. Zet die state in de query parameters, en je krijgt drie dingen gratis. Herladen behoudt je filters. Je kan de URL delen of bookmarken. En de terugknop van de browser werkt op je filters.

## Line 10 — Lezen uit de URL (Frame 10)

**Delivery:** Pointing at the code, emphasis on "enige bron van waarheid".

    Neem deze productlijst. Er staat nergens een use state. De zoekterm, het sorteerveld en de volgorde lezen we rechtstreeks uit de URL. De URL is de enige bron van waarheid. Kopieer die waarden dus niet naar een aparte state, want dan heb je twee bronnen die uit elkaar kunnen lopen.

## Line 11 — Wantrouw de URL (Frame 11)

**Delivery:** A light, slightly amused "banana".

    Wantrouw wel wat er in de URL staat. Iedereen kan zelf sort is banana typen. Daarom controleren we de waarde, en vallen we anders terug op een standaard. Zo krijgen sort en order meteen een correct type, in plaats van string of null.

## Line 12 — updateParam (Frame 12)

**Delivery:** Three reasons, one after the other.

    Aanpassen gebeurt in update param. We kopiëren de vorige parameters, zodat de sortering blijft staan als je een zoekterm typt. Is de waarde gelijk aan de standaard, dan verwijderen we ze: zo blijft de URL proper. En voor de zoekterm gebruiken we replace. Anders wordt elke letter een aparte stap in de geschiedenis.

## Line 13 — In actie (Frame 13)

**Delivery:** Demonstrating, pleased.

    De zichtbare lijst is geen state: we berekenen ze bij elke render, uit de producten en de parameters. Typ mouse, sorteer op prijs, aflopend, en de URL groeit mee. Druk op terug, en de vorige sortering staat er weer. Zelfs een gewone Link naar vraagteken sort is price werkt meteen.

## Line 14 — Samenvatting (Frame 14)

**Delivery:** Calm recap, warm close.

    Samengevat: een dubbelpunt in het pad maakt een URL parameter, en use params geeft je de waarde, altijd als string. Query parameters lees en schrijf je met use search params. En bewaar je filters in de URL, dan overleven ze een herlaadbeurt, kan je ze delen, en werkt de terugknop.
