# SCRIPT — react-usefetch

**Voice:** ElevenLabs eleven_v4 via the `elevenlabs` CLI — Andie (`8OezxDDjGa2d9W45o5Qs`) for every line
**Voice settings:** stability 0.5, output mp3_44100_128; same voice + settings for all 14 lines
**Voice direction:** Calm, friendly teacher. Clear, unhurried. Code terms in English, spoken as words (use effect, set posts, set loading, response punt ok, use fetch).

---

## Line 1 — Hook (Frame 1)

**Delivery:** Light, building a small list, then naming the goal.

    Posts ophalen van een API. Met een spinner terwijl je wacht, een foutmelding als het misloopt, en een knop om te vernieuwen. We bouwen het stap voor stap, tot onze eigen hook: use fetch.

## Line 2 — Een eenvoudige fetch (Frame 2)

**Delivery:** Setting up the example, matter-of-fact.

    We beginnen eenvoudig. In App maken we een state posts. In een use effect roepen we fetch aan, met de url van JSON placeholder. Het resultaat zetten we met set posts in de state, en de posts verschijnen op het scherm.

## Line 3 — Loading (Frame 3)

**Delivery:** Noticing the gap, then the fix.

    Maar zo'n fetch duurt even. En ondertussen ziet de gebruiker niets. Daarom voegen we een loading state toe. Voor de fetch zetten we loading op true, erna op false. En zolang loading true is, tonen we een spinner.

## Line 4 — Try catch (Frame 4)

**Delivery:** A small "what if", then careful on "geen fout".

    En wat als er iets misloopt? We zetten de fetch in een try catch. Maar let op: bij een vierhonderdvier of een vijfhonderd gooit fetch zelf geen fout. Daarom kijken we naar response punt ok. Is die false, dan gooien we zelf een error.

## Line 5 — Finally (Frame 5)

**Delivery:** Spotting the bug, calm resolution.

    Maar loopt het mis, dan springen we meteen naar de catch. Set loading false wordt overgeslagen, en de spinner blijft draaien. Daarom verhuist set loading naar de finally. Die loopt altijd, of het nu lukt of niet.

## Line 6 — Error state (Frame 6)

**Delivery:** Even rhythm, walking through the code.

    De fout zelf willen we ook bijhouden. Dus maken we een error state, van het type Error of null. In de catch zetten we het error object. En is error niet null, dan tonen we de foutmelding.

## Line 7 — Klaar? (Frame 7)

**Delivery:** A playful "Klaar? Nee hoor.", then serious on the problem.

    Klaar? Nee hoor. Er is nog een belangrijk probleem: we ruimen niets op. Verdwijnt de component, of loopt het effect opnieuw, dan loopt de oude fetch gewoon verder. En komt die later binnen, dan zet hij toch nog de state.

## Line 8 — Cancelled (Frame 8)

**Delivery:** Explaining the mechanism, light aside on the abort controller.

    We hebben dus een manier nodig om te annuleren. In de praktijk gebruik je daarvoor een abort controller. Maar om het eenvoudig te houden, nemen we een boolean: cancelled. In de cleanup functie zetten we cancelled op true. En na de fetch kijken we eerst: is cancelled true? Dan stoppen we, en passen we de state niet meer aan.

## Line 9 — Vernieuwen (Frame 9)

**Delivery:** Curious question, then simple answer.

    En als we een knop willen om te vernieuwen? Hoe laat je een use effect opnieuw lopen? Gewoon door een state in de dependency array te zetten. Bijvoorbeeld trigger. Verandert trigger, dan loopt het effect opnieuw.

## Line 10 — Boolean of teller (Frame 10)

**Delivery:** Comparing two options, relaxed.

    Trigger kan een boolean zijn, die je bij elke klik omdraait van true naar false. Dat is genoeg. Maar je kan ook een teller nemen. Dan weet je meteen hoeveel keer je al vernieuwd hebt.

## Line 11 — Ook users (Frame 11)

**Delivery:** A new request, a beat of dread, then relief on "Uiteraard niet".

    Nu willen we ook users ophalen. Moeten we dan alles opnieuw schrijven? Loading, error, cancelled, trigger? Uiteraard niet. Daar zijn custom hooks heel handig voor.

## Line 12 — useFetch (Frame 12)

**Delivery:** Building, confident on "generiek type".

    We maken een nieuw bestand: use fetch punt ts. De functie use fetch krijgt een url, en een generiek type T. Daarmee zeg je welk type data je terug verwacht. We verplaatsen alle code uit App naar deze hook, en geven het belangrijkste terug: data, loading, error en refetch.

## Line 13 — Gebruiken (Frame 13)

**Delivery:** Satisfied, light emphasis on "één keer".

    In App blijft er bijna niets over. Use fetch met Post array voor de posts, en use fetch met User array voor de users. Twee keer dezelfde logica, maar maar één keer geschreven.

## Line 14 — Samenvatting (Frame 14)

**Delivery:** Warm wrap-up, slight lift on the last clause.

    Kort samengevat: toon een spinner met loading, vang fouten op met try catch en een error state, en ruim op met een cancelled vlag. Met een state in de dependency array haal je opnieuw op. En stop je dat allemaal in use fetch, dan hergebruik je het overal.
