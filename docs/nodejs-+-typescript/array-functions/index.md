# Arraymethodes

Je hebt al een aantal array methodes gezien zoals `forEach` en hoe je deze gebruikt met een callback functie. Er zijn nog een aantal andere handige array methodes die je kan gebruiken.

> 💡 **Hint:** In deze visuele gids vind je een handig overzicht van alle array methods:  
> 👉 [Bekijk de visuele gids](https://ap-arrays.surge.sh/)

## Overzicht

Een belangrijk verschil tussen de methodes is of ze de **originele array aanpassen** (muteren) of een **nieuwe waarde teruggeven** en de originele array met rust laten.

### Basismethodes

| Methode | Wat doet ze? | Past de originele array aan? |
| --- | --- | --- |
| [`push` / `pop`](./push-pop.md) | element toevoegen aan / verwijderen van het einde | ja |
| [`unshift` / `shift`](./shift-unshift.md) | element toevoegen aan / verwijderen van het begin | ja |
| [`slice`](./slice-splice.md) | kopie van een stuk van de array | nee |
| [`splice`](./slice-splice.md) | elementen verwijderen en/of invoegen | ja |
| [`indexOf` / `lastIndexOf`](./indexof-includes.md) | index van het eerste / laatste voorkomen, of `-1` | nee |
| [`includes`](./indexof-includes.md) | `true` als de waarde voorkomt | nee |
| [`concat`](./concat-join-reverse.md) | arrays aan elkaar plakken | nee |
| [`join`](./concat-join-reverse.md) | alle elementen samenvoegen tot een string | nee |
| [`reverse`](./concat-join-reverse.md) | de volgorde omkeren | ja |

### Methodes met een callback functie

| Methode | Wat geeft ze terug? |
| --- | --- |
| [`forEach`](./foreach.md) | niets, voert enkel de callback uit voor elk element |
| [`find`](./find.md) | het eerste element dat voldoet, of `undefined` |
| [`findIndex`](./find.md#arrayfindindex) | de index van het eerste element dat voldoet, of `-1` |
| [`filter`](./filter.md) | een nieuwe array met alle elementen die voldoen |
| [`map`](./map.md) | een nieuwe array met de omgezette elementen |
| [`reduce`](./reduce.md) | één waarde, opgebouwd uit alle elementen |
| [`every` / `some`](./every-some.md) | `true` als alle / minstens één element voldoet |
| [`sort`](./sort.md) | de gesorteerde (originele!) array |

Al deze methodes kan je ook [aan elkaar hangen](./chaining.md) om in een paar regels code een volledige bewerking te beschrijven.
