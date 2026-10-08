# SCRIPT — react-array-state

**Voice:** ElevenLabs eleven_v4 via the `elevenlabs` CLI — Andie (`8OezxDDjGa2d9W45o5Qs`) for every line
**Voice settings:** same voice + settings for all 10 lines
**Voice direction:** Calm, friendly teacher. Clear, unhurried, a small pause at each "—". Code terms in English (push, spread, filter, map, key, prev).

---

## Line 1 — Hook (Frame 1)

**Time:** 0 – 7s
**Delivery:** Light, a touch puzzled on "niets".

    Je typt een getal. Je klikt op Add. En… er gebeurt niets.

## Line 2 — De fout (Frame 2)

**Time:** 7 – 20s
**Delivery:** Matter-of-fact, then a little wry on the last sentence.

    De code ziet er logisch uit: numbers punt push. De array verandert wél — maar het scherm niet. Ook set numbers erachter roepen helpt niet.

## Line 3 — Waarom (Frame 3)

**Time:** 20 – 34s
**Delivery:** Explaining, slow on "dezelfde array".

    React kijkt niet in je array. Het vergelijkt enkel: is dit dezelfde array als daarnet? Na een push is het nog altijd hetzelfde object. Dus denkt React: niets veranderd.

## Line 4 — De regel (Frame 4)

**Time:** 34 – 42s
**Delivery:** Firm, the takeaway.

    Daarom één regel: state is readonly. Je maakt altijd een nieuwe array, en die geef je aan de setter.

## Line 5 — Toevoegen (Frame 5)

**Time:** 42 – 55s
**Delivery:** Upbeat, recipe one.

    Toevoegen doe je met de spread syntax. Drie puntjes kopiëren alle oude elementen in een nieuwe array — en daarachter zet je het nieuwe getal.

## Line 6 — Verwijderen (Frame 6)

**Time:** 55 – 67s
**Delivery:** Same energy, recipe two.

    Verwijderen? Gebruik filter. Je houdt elk element, behalve dat ene op index i. En filter geeft altijd een nieuwe array terug.

## Line 7 — Wijzigen (Frame 7)

**Time:** 67 – 79s
**Delivery:** Recipe three, closing the trio.

    Wijzigen doe je met map. Elk element gaat mee naar een nieuwe array. Alleen op index i zet je de nieuwe waarde.

## Line 8 — Waarom prev? (Frame 8)

**Time:** 79 – 93s
**Delivery:** Light "did you notice?" on the question, then explaining.

    Viel het je op? In elk recept geven we de setter een functie. Met prev werk je altijd op de nieuwste versie van je state — ook als er snel na elkaar meerdere updates gebeuren.

## Line 9 — Keys (Frame 9)

**Time:** 93 – 109s
**Delivery:** Reassuring first half, careful on the caveat.

    In de eenvoudige voorbeelden gebruiken we key is index — en dat werkt. Maar zodra je items verwijdert, schuiven de indexen op, en kan React rijen door elkaar halen. Geef dan elk item een vaste id als key.

## Line 10 — Samenvatting (Frame 10)

**Time:** 109 – 120s
**Delivery:** Warm wrap-up, slight lift on the last clause.

    Kort samengevat: toevoegen met spread, verwijderen met filter, wijzigen met map. Altijd een nieuwe array — en React doet de rest.
