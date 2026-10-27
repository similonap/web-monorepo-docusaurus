# SCRIPT — react-native-statusbar

**Voice:** ElevenLabs eleven_v4 via the `elevenlabs` CLI — Andie (`8OezxDDjGa2d9W45o5Qs`) for every line
**Voice settings:** stability 0.5, output mp3_44100_128; same voice + settings for all 7 lines
**Voice direction:** Calm, friendly teacher. Clear, unhurried. Code names in English, written split so they are spoken as words (status bar, expo status bar, padding top, set status bar style). Captions restore the code spelling (see `build.py`).

---

## Line 1 — Hook (Frame 1)

    Bovenaan je scherm staat de statusbalk, met de klok, je batterij en je netwerk. Die balk hoort bij het toestel, maar met status bar kies je zelf hoe hij eruitziet.

## Line 2 — Gebruik (Frame 2)

    Je importeert status bar uit expo status bar. Hij tekent zelf niets op je scherm. Zet hem in je layout, naast de Slot, dan geldt hij voor al je schermen. De lege tags errond zijn een fragment.

## Line 3 — De style prop (Frame 3)

    Met de style prop kies je de kleur van de tekst en de iconen. Dark maakt ze donker, light maakt ze licht. Auto volgt light of dark mode van je toestel, en inverted doet net het omgekeerde.

## Line 4 — Een donker scherm (Frame 4)

    Let op: je geeft hier geen stijlobject mee zoals bij een View, maar een van die vier waarden. Heeft je app een donkere achtergrond, dan is donkere tekst onleesbaar. Zet style dan op light.

## Line 5 — Achtergrondkleur (Frame 5)

    De statusbalk zelf is doorzichtig. De kleur erachter is gewoon de achtergrond van je scherm. Met padding top Constants punt status bar height begint je inhoud pas onder de balk.

## Line 6 — Verbergen (Frame 6)

    Met hidden verberg je de statusbalk, bijvoorbeeld voor een spel of een foto op volledig scherm. Zet je animated erbij, dan verdwijnt hij met een animatie.

## Line 7 — Vanuit een functie (Frame 7)

    Wil je de statusbalk aanpassen wanneer de gebruiker op een knop drukt, dan gebruik je set status bar style en set status bar hidden.
