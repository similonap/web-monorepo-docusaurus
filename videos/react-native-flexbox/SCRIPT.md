# SCRIPT — react-native-flexbox

**Voice:** ElevenLabs eleven_v4 via the `elevenlabs` CLI — Andie (`8OezxDDjGa2d9W45o5Qs`) for every line
**Voice settings:** stability 0.5, output mp3_44100_128; same voice + settings for all 13 lines
**Voice direction:** Calm, friendly teacher. Clear, unhurried. Property names in English, written split so they are spoken as words (flex direction, justify content, align items, align self, flex wrap, align content, space between). Captions restore the code spelling (see `build.py`).

---

## Line 1 — Hook (Frame 1)

**Delivery:** Two light questions, then the answer.

    Hoe zet je in een app drie vakjes naast elkaar? Of netjes in het midden van het scherm? In React Native doe je dat met flexbox. Elke View is een flex container, en met een paar style properties bepaal je waar zijn kinderen komen.

## Line 2 — Twee assen (Frame 2)

**Delivery:** Explaining, a small contrast at the end.

    Flexbox werkt met twee assen. De main axis is de richting waarin de kinderen na elkaar komen. De cross axis staat daar loodrecht op. In React Native is de main axis standaard verticaal: de kinderen staan onder elkaar. Op het web is dat net andersom.

## Line 3 — flexDirection (Frame 3)

**Delivery:** Demonstrating.

    Die richting kies je met flex direction. Zet je die op row, dan wordt de main axis horizontaal en staan de vakjes naast elkaar. De cross axis draait mee. Met row reverse en column reverse keer je de volgorde om: het eerste kind staat dan achteraan.

## Line 4 — flex: 1 op de parent (Frame 4)

**Delivery:** Pointing at the dashed outline, practical tip at the end.

    Kijk naar de stippellijn: dat is de parent View. Zonder flex is die maar zo groot als zijn kinderen. Geef je hem flex één, dan neemt hij alle beschikbare ruimte in, hier het volledige scherm. Daarom staat flex één bijna altijd op je buitenste View.

## Line 5 — flex op de kinderen (Frame 5)

**Delivery:** Calm counting.

    Flex werkt ook op de kinderen. Haal de vaste hoogte weg en geef ze flex één, twee en drie. Ze verdelen dan de ruimte op de main axis: zes delen in totaal. Het derde vakje krijgt er drie, dus de helft van het scherm.

## Line 6 — justifyContent (Frame 6)

**Delivery:** A list, one value at a time.

    Met justify content verdeel je de kinderen over de main axis. Standaard staan ze aan het begin: flex start. Center zet ze in het midden, flex end aan het einde. Space between verdeelt de vrije ruimte tussen de vakjes. Space around en space evenly geven ook ruimte aan de randen.

## Line 7 — De main axis bepaalt (Frame 7)

**Delivery:** An important point, slower.

    Belangrijk: justify content volgt altijd de main axis. Zet je flex direction op row, dan centreert dezelfde regel de vakjes niet meer verticaal, maar horizontaal. Kijk dus altijd eerst welke kant je main axis uitgaat.

## Line 8 — alignItems (Frame 8)

**Delivery:** Explaining, the stretch part a bit slower.

    Voor de cross axis gebruik je align items. Flex start, center en flex end werken zoals je verwacht, maar dan in de andere richting. De standaardwaarde is stretch: een kind zonder vaste breedte wordt uitgerekt over de hele cross axis. Heeft het wel een breedte, dan rekt er niets uit.

## Line 9 — Centreren (Frame 9)

**Delivery:** A handy pattern, light.

    Zet je justify content en align items allebei op center, dan staat je inhoud precies in het midden van het scherm. Die twee regels ga je nog vaak schrijven, bijvoorbeeld voor een laadscherm.

## Line 10 — alignSelf (Frame 10)

**Delivery:** Question, then the answer.

    Moet één kind anders uitgelijnd worden dan de rest? Geef het dan align self. Dat overschrijft align items, maar enkel voor dat ene kind. Hier schuift het derde vakje naar het einde van de cross axis.

## Line 11 — flexWrap (Frame 11)

**Delivery:** A problem, then the fix.

    Wat als er te veel kinderen zijn voor één rij? Dan lopen ze gewoon van het scherm af: React Native maakt ze niet kleiner. Met flex wrap op wrap springen ze naar een nieuwe regel. Hoe die regels over de cross axis verdeeld worden, bepaal je met align content.

## Line 12 — Absolute positioning (Frame 12)

**Delivery:** Practical example, calm.

    Soms moet een element buiten die flow vallen, zoals een knop rechts onderaan. Dan gebruik je position absolute. Met top, left, right en bottom plaats je het ten opzichte van de parent. De andere kinderen schuiven op, alsof het er niet staat.

## Line 13 — Samenvatting (Frame 13)

**Delivery:** Calm recap, warm close.

    Samengevat: flex direction kiest de main axis, standaard column. Justify content verdeelt de kinderen over de main axis, en align items lijnt ze uit op de cross axis. Flex verdeelt de ruimte, flex wrap maakt nieuwe regels, en position absolute plaatst een element vrij. Probeer het zelf in de voorbeelden op de cursuspagina.
