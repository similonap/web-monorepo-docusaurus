# SCRIPT — ts-fetch

**Voice:** ElevenLabs eleven_v4 via the `elevenlabs` CLI — Andie (`8OezxDDjGa2d9W45o5Qs`) for every line
**Voice settings:** stability 0.5; same voice + settings for all 13 lines
**Voice pipeline:** `tts.py` records every line three times as lossless PCM, picks the take that is closest
to the series' pitch and tempo and that transcribes back correctly, levels it to -19 LUFS (mono) and
encodes it once to `mp3_44100_128`. See "Stem" in `REVIEW.md`.
**Voice direction:** Calm, friendly teacher. Clear, unhurried. Code terms in English, written split so they
are spoken as words (response punt json, get post, promise punt all, vier nul vier). Captions restore the
code spelling (see `build.py`). `[pauze 1.0]` is not spoken: `tts.py` stretches the silence at that place
to at least that many seconds (thinking time after a question).

---

## Line 1 — Hook (Frame 1)

    De data die je programma nodig heeft, staat vaak op een server. Je stuurt een vraag, de request, en je krijgt een antwoord, de response. In TypeScript doe je dat met fetch.

## Line 2 — JSON en interface (Frame 2)

    Als voorbeeld vragen we een lijst van posts op. De server antwoordt met JSON: een array van objecten. Die data beschrijf je met een interface: user id en id zijn een number, title en body een string.

## Line 3 — fetch geeft een Response (Frame 3)

    Fetch krijgt de URL, en geeft meteen een promise terug. Met await wacht je op het antwoord: een Response object. Daarin zie je al de statuscode, tweehonderd. Maar de inhoud is nog niet gelezen.

## Line 4 — response.json() (Frame 4)

    De inhoud lees je met response punt json. Die leest de body, en zet de JSON om naar objecten. Ook dat duurt even, dus ook json geeft een promise terug. Vandaar de tweede await. Nu pas heb je de posts.

## Line 5 — TypeScript gelooft je (Frame 5)

    Let wel op: json geeft any terug. Met Post array vertel jij aan TypeScript wat je verwacht, en TypeScript gelooft je op je woord. Klopt je interface niet, dan krijg je geen fout, maar undefined.

## Line 6 — Met then (Frame 6)

    Fetch geeft een promise terug, dus het kan ook met then. Twee stappen, dus twee then's: de eerste leest de json, de tweede krijgt de posts.

## Line 7 — Geen antwoord (Frame 7)

    En als het misgaat? Is de server onbereikbaar, dan komt er geen antwoord. De promise wordt rejected, en await gooit een fout. Die vang je op met try en catch.

## Line 8 — Een 404 (Frame 8)

    Maar wat als de server wel antwoordt, met een foutcode? Post honderddrieëntwintig bestaat niet: je krijgt een vier nul vier. Kom je nu in de catch? [pauze 1.0] Nee. Fetch faalt enkel als er geen antwoord komt. Je programma loopt gewoon verder, zonder data.

## Line 9 — response.ok (Frame 9)

    Controleer het antwoord daarom zelf. Response punt ok is enkel true bij een statuscode die met een twee begint. Is ok false, gooi dan zelf een error. Nu kom je wel in de catch. De code zelf vind je in response punt status.

## Line 10 — getPost (Frame 10)

    Heb je meer dan één request nodig, maak dan een functie get post, die één post ophaalt. Je herkent de drie stappen: fetch, controleren, en json.

## Line 11 — Na elkaar (Frame 11)

    Wil je post één tot en met vijf, dan denk je misschien aan een for lus met await. Dat werkt, maar elke request wacht op de vorige. Vijf keer tweehonderd milliseconden is één seconde.

## Line 12 — Promise.all (Frame 12)

    Sneller gaat het zo. Met map roep je get post op voor elke id. Alle requests vertrekken meteen: je hebt nu vijf promises, nog geen posts. Await promise punt all wacht tot ze allemaal binnen zijn. Na tweehonderd milliseconden heb je de posts, in dezelfde volgorde.

## Line 13 — Samenvatting (Frame 13)

    Samengevat: await fetch geeft een Response. Await response punt json geeft de data, die je beschrijft met een interface. Controleer response punt ok, want de catch vangt enkel netwerkfouten. En meerdere requests laat je tegelijk lopen met promise punt all.
