# Boodschappenlijst

Maak een nieuw project aan met de naam `boodschappenlijst`.

In deze oefening oefen je de basismethodes van een array: `push`, `pop`, `unshift`, `shift`, `includes`, `indexOf`, `splice`, `slice`, `concat`, `reverse` en `join`.

Begin met de volgende array:

```typescript
let boodschappen: string[] = ["brood", "melk", "kaas"];
```

Voer de onderstaande stappen in volgorde uit. Log na elke stap het gevraagde resultaat met `console.log`.

## Deel 1: toevoegen en verwijderen

1. Voeg `"eieren"` **achteraan** toe aan de lijst. Log de lijst.
2. Voeg `"koffie"` **vooraan** toe aan de lijst. Log de lijst.
3. De winkel heeft geen eieren meer. Verwijder het **laatste** element en log het verwijderde element.
4. Je hebt nog koffie in huis. Verwijder het **eerste** element en log het verwijderde element.
5. Log de lijst.

Verwachte output:

```
[ 'brood', 'melk', 'kaas', 'eieren' ]
[ 'koffie', 'brood', 'melk', 'kaas', 'eieren' ]
eieren
koffie
[ 'brood', 'melk', 'kaas' ]
```

## Deel 2: zoeken

1. Log of `"melk"` op de lijst staat.
2. Log of `"appels"` op de lijst staat.
3. Log op welke positie `"kaas"` staat.
4. Log op welke positie `"appels"` staat.

Verwachte output:

```
true
false
2
-1
```

## Deel 3: splice en slice

1. Zoek de positie van `"melk"` en verwijder `"melk"` met `splice`. Log de lijst.
2. Voeg met **één** `splice` de elementen `"boter"` en `"tomaten"` toe tussen `"brood"` en `"kaas"`. Log de lijst.
3. Maak met `slice` een **nieuwe** array `eersteTwee` met de eerste twee elementen. Log `eersteTwee` en daarna `boodschappen`.

Verwachte output:

```
[ 'brood', 'kaas' ]
[ 'brood', 'boter', 'tomaten', 'kaas' ]
[ 'brood', 'boter' ]
[ 'brood', 'boter', 'tomaten', 'kaas' ]
```

Merk op dat `slice` de originele lijst niet aanpast.

## Deel 4: concat, reverse en join

1. Maak een array `fruit` met `"appels"` en `"peren"`. Plak `boodschappen` en `fruit` aan elkaar met `concat` in een nieuwe array `alles`. Log `alles`.
2. Keer de volgorde van `alles` om. Log `alles`.
3. Log alle elementen van `alles` als één string, gescheiden door een komma en een spatie.

Verwachte output:

```
[ 'brood', 'boter', 'tomaten', 'kaas', 'appels', 'peren' ]
[ 'peren', 'appels', 'kaas', 'tomaten', 'boter', 'brood' ]
peren, appels, kaas, tomaten, boter, brood
```
