# REVIEW — react-native-custom-components

- Versie 1: kennisclip, 6 scènes, 0:55. Volgt `docs/react-native/custom-components/index.md` (props, style als prop,
  default styles, style array, de laatste style wint). Geen samenvatting.
- `npx hyperframes@0.8.169 check`: ok, 0 errors. Warnings enkel contrast op bewust gedimde huisstijltekst
  (lijnnummers, statusbalk, de doorstreepte `backgroundColor` in scène 6).
- Snapshots over de hele clip nagekeken: geen overlap, niets onder y 880, elke onthulling op het woord.
- Afwijkingen van het storyboard: scène 3 gebruikt 23px code (de langste regel is 84 tekens); scène 6 heeft een
  codevlak van 420 px hoog en 21px code in de stijlkaartjes.
- Stem: Andie, eleven_v4, stability 0.5, via de `elevenlabs` CLI met `tts.py` (drie takes per regel, automatische
  keuze, uitspraakcontrole: alle regels woord voor woord terug-getranscribeerd). Het model staat als `eleven_v4`
  in `elevenlabs history list`.
- Wacht op akkoord van de docent op de preview.
