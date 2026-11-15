# REVIEW — react-native-async-storage

Groot lesfilmpje, 13 scènes, 133.61s. `npx hyperframes@0.8.169 check`: 0 errors. Warnings: contrast op de bewust
gedimde regelnummers, statusbalk en de witte knoptekst van de Android-knoppen (zoals bij de siblings), en drie
`clip_media_fit` van 0.05s (afinfo-duur tegenover de werkelijke mp3-duur). Infos: overlap van tekst die verborgen
gestapeld staat voor waardewissels.

Snapshots over de hele video (27 stills) nagekeken: geen clipping, niets onder y 880, tabel en telefoon in sync.

## Afwijkingen van het storyboard (door de frame-builders)

- **01-hook:** de tabel begint 660 px breed (anders loopt ze onder de gecentreerde telefoon) en wordt 1290 px breed
  tijdens de slide van de telefoon. De markering rond `Counter: 3` is een DOM-element in plaats van de SVG `.ph-mark`.
- **02-key-value:** de twee kaarten rechts zijn 430 px breed (x 1410-1840) zodat `Promise<string | null>` past.
- **03/04/05/07:** de Android Alert heeft geen rode linkerrand (die had de Alert in 06-string omdat het daar een
  foutmelding was); rood blijft voor scène 8 en 11.
- **06-array:** code in 23px, zodat regel 15 past.
- **08-fouten:** de rode onderlijn staat onder de hele regel 4; bij elke tik op LOAD DATA een korte `.st-read`.
- **11-loading:** de tweede relaunch toont chip, `render #2` en `Counter: 7` op 10.2 (sfx `pop` mee verschoven naar 10.2).
  De blauwe washes gaan uit op 3.45, vóór de rode `"0"` op 3.9 (nooit blauw en rood tegelijk).
- **12-laadtoestand:** spinner en inhoud wisselen met een gewone fade (geen relaunch) op 4.56 en 8.08.
- **13-samenvatting:** kaart 2 toont de code op vier regels (`toString()` / `Number()`, `JSON.stringify` / `JSON.parse`).

## Inhoudelijke keuzes tegenover de cursuspagina

- Code in de stijl van de reeks (4 spaties, geen `import React`), ingekort tot wat de scène uitlegt: de `else`-takken in
  scène 4 en 5 en de `keys.length`-check in scène 7 vallen weg.
- Willekeurige waarden zijn vast in beeld: het getal is 42, de leeftijden 21, 23 en 19 (de code toont `Math.random()`
  zoals de pagina).
- De state-scènes bouwen op: eerst de eenvoudige versie (scène 9-10), dan de `loading`-vlag (scène 11) en de
  `ActivityIndicator` (scène 12). De pagina zet `setLoading(false)` in een `finally`; de video toont het eerste effect in
  scène 11 als ingeklapte regel met de opmerking `// laadt "counter", dan setLoading(false)`.
