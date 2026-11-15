# SCRIPT — react-native-controlled-components

**Voice:** ElevenLabs eleven_v4 via the `elevenlabs` CLI — Andie (`8OezxDDjGa2d9W45o5Qs`) for every line
**Voice settings:** stability 0.5, recorded as pcm_44100 and mastered once to mp3_44100_128 by `tts.py` (three takes per line, automatic pick); same voice + settings for all 12 lines
**Voice direction:** Calm, friendly teacher. Clear, unhurried. Code names in English, written split so they are spoken as words (use state, on change text, set text, keyboard type, number pad, on press, on value change, activity indicator, Flat List, on refresh). Captions restore the code spelling (see `build.py`).

---

## Line 1 — Hook (Frame 1)

    Bij een controlled component zit de waarde van het invoerveld in state. De state beslist wat er in het veld staat, niet het veld zelf.

## Line 2 — value en onChangeText (Frame 2)

    Je maakt een state met use state en geeft die mee aan value. Bij elke toets roept on change text set text op, met de nieuwe tekst.

## Line 3 — De kringloop (Frame 3)

    Zo gaat het telkens rond: je typt, de state verandert, de component rendert opnieuw en het veld toont de nieuwe waarde. Die kan je dus ook meteen tonen.

## Line 4 — Twee velden, één state (Frame 4)

    Je kan ook twee velden aan dezelfde state binden. Typ je in het ene veld, dan verschijnt de tekst ook in het andere, want beide tonen de state.

## Line 5 — Getallen (Frame 5)

    Voor getallen zet je keyboard type op number pad. Maar niet elk Android toetsenbord heeft enkel cijfers, dus de gebruiker kan nog altijd letters typen.

## Line 6 — Een string in state (Frame 6)

    Bewaar daarom een string in state, en zet die pas om naar een getal als je hem nodig hebt. Is het geen getal, dan zet je de state terug op nul, en het veld volgt vanzelf.

## Line 7 — Button (Frame 7)

    Een button is geen controlled component, want hij heeft geen waarde. Met on press pas je wel de state aan, bijvoorbeeld om een teller te verhogen.

## Line 8 — Switch (Frame 8)

    Een switch heeft wel een waarde. Je geeft de state mee aan value, en on value change draait de state om.

## Line 9 — Conditioneel renderen (Frame 9)

    Met die state kan je ook conditioneel renderen, met een ternary operator of met twee ampersands. Staat de switch aan, dan toon je een ander beeld.

## Line 10 — ActivityIndicator (Frame 10)

    Ook een activity indicator hangt af van state. Voor het laden zet je loading op true, en als de data er is weer op false. De spinner volgt.

## Line 11 — FlatList refreshing (Frame 11)

    Een Flat List heeft refreshing en on refresh. Trek je de lijst naar beneden, dan zet je refreshing op true, laad je nieuwe data en zet je hem terug op false.

## Line 12 — Samenvatting (Frame 12)

    Samengevat: geef elk invoerveld zijn eigen state. Value toont de state, de change handler past hem aan, en zo beslist de state altijd wat je ziet.
