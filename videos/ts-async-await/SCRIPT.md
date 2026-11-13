# SCRIPT — ts-async-await

**Voice:** ElevenLabs eleven_v4 via the `elevenlabs` CLI — Andie (`8OezxDDjGa2d9W45o5Qs`) for every line
**Voice settings:** stability 0.5, output mp3_44100_128; same voice + settings for all 16 lines
**Voice direction:** Calm, friendly teacher. Clear, unhurried. Code terms in English, written split so they are spoken as words (order pizza, eat, get total, print report, for each, console log). Captions restore the code spelling (see `build.py`).

---

## Line 1 — Hook (Frame 1)

    In een snackbar bestel je aan de toog, en je krijgt meteen een zoemer: de belofte dat je eten komt. Eten kan je pas als de zoemer gaat. Maar je vrienden hoeven daar niet op te wachten: die praten gewoon verder. Zo werken async en await.

## Line 2 — Callback hell (Frame 2)

    Eerst het probleem. Wil je met multiply eerst twee maal twee doen, dan maal vijf en dan maal tien, dan nest je de then's in elkaar. Elke stap zit een niveau dieper. Dat noemen we callback hell.

## Line 3 — async en await (Frame 3)

    Met async en await schrijf je hetzelfde zonder te nesten. Zet async voor de functie. Daarin mag je await gebruiken. Await wacht tot de promise klaar is en geeft de waarde terug: hier een number.

## Line 4 — De zoemer in code (Frame 4)

    Nu in code. Order pizza is de toog: die geeft meteen een promise terug, de zoemer. Eat ben jij: jij wil de pizza opeten.

## Line 5 — Geval 1: niet wachten (Frame 5)

    Geval één: je eet meteen, zonder te wachten. Food is dan nog geen pizza, maar een promise. Je eet dus de zoemer op, en TypeScript zegt er niets van.

## Line 6 — Geval 2: jij wacht (Frame 6)

    Geval twee: je wacht met await tot de zoemer gaat. Eat wordt daarom async. De functie pauzeert bij de await, maar je vrienden praten gewoon verder. Een seconde later is de pizza er, en eet je.

## Line 7 — Geval 3: je vrienden wachten (Frame 7)

    Geval drie: je vrienden wachten beleefd op jou. Met await eat praten ze pas verder, als de pizza er is en jij gegeten hebt.

## Line 8 — Altijd een promise (Frame 8)

    Een async functie geeft altijd een promise terug, ook als je een gewone waarde teruggeeft. Get total geeft een getal terug, maar het return type is Promise van number. Zonder await krijg je dus Promise pending.

## Line 9 — Regel 1 (Frame 9)

    Welke functies moeten async worden? Regel één: gebruik je await, dan moet de functie async zijn. Vergeet je dat, dan zegt TypeScript dat await enkel mag in een async functie.

## Line 10 — Regel 2 (Frame 10)

    Regel twee: heb je de waarde van een async functie nodig, dan moet je ook awaiten. Dat zag je in geval drie: wie op jouw eten wacht, moet zelf ook async zijn. Zo kruipt async omhoog: van get total, naar print report, tot in main.

## Line 11 — Vergeten await (Frame 11)

    Vergeet je ergens een await, dan helpt TypeScript je meestal: je rekent dan met een promise in plaats van met een getal. En multiply zelf hoeft niet async te zijn, want het gebruikt geen await.

## Line 12 — forEach (Frame 12)

    Opgelet met for each. Een async callback maakt enkel die callback async, en for each wacht er niet op. Klaar verschijnt dan eerst. Gebruik een for of lus: daarin wacht await wel echt.

## Line 13 — Top-level await (Frame 13)

    Moet je altijd een functie maken? In een module, een bestand met een import of export, mag await ook bovenaan staan. Zonder import geeft TypeScript een fout. Zet je code dan in een async main functie, of in een async IIFE.

## Line 14 — try/catch (Frame 14)

    Fouten vang je op met try en catch. Wordt een promise rejected, dan gooit await de fout. Multiply van vier en vijf geeft twintig, en dat is groter dan tien. Je komt dus in de catch.

## Line 15 — Promise.all (Frame 15)

    Awaits na elkaar wachten op elkaar. Bestel je drie pizza's na elkaar, en wacht je telkens op de zoemer, dan duurt dat drie keer zo lang. Hebben de promises elkaar niet nodig, combineer await dan met promise punt all. Dan lopen ze tegelijk.

## Line 16 — Samenvatting (Frame 16)

    Samengevat: een async functie geeft altijd een promise terug. Await wacht op een promise en geeft de waarde. Wie await gebruikt, moet async zijn. En met try en catch vang je de fouten op.
