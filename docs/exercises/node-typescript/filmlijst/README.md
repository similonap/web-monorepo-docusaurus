# Filmlijst

Maak een nieuw project aan met de naam `filmlijst`.

In deze oefening hang je verschillende arraymethodes aan elkaar (method chaining). Schrijf elke functie als **één** keten van methodes, zonder `for`-lus en zonder tussenvariabelen.

Begin met de volgende interface en array:

```typescript
interface Movie {
    title: string;
    year: number;
    genre: string;
    rating: number;
}

const movies: Movie[] = [
    { title: "The Matrix", year: 1999, genre: "sci-fi", rating: 8.7 },
    { title: "Finding Nemo", year: 2003, genre: "animatie", rating: 8.2 },
    { title: "Inception", year: 2010, genre: "sci-fi", rating: 8.8 },
    { title: "Cars", year: 2006, genre: "animatie", rating: 7.2 },
    { title: "Interstellar", year: 2014, genre: "sci-fi", rating: 8.7 },
    { title: "Frozen", year: 2013, genre: "animatie", rating: 7.4 },
    { title: "Dune", year: 2021, genre: "sci-fi", rating: 8.0 }
];
```

## Deel 1: filter en map

Schrijf een functie `titlesOfGenre` die een array van films en een genre verwacht, en de titels teruggeeft van alle films van dat genre.

```typescript
console.log(titlesOfGenre(movies, "animatie")); // [ 'Finding Nemo', 'Cars', 'Frozen' ]
```

## Deel 2: filter, sort en map

Schrijf een functie `topMovies` die de titels teruggeeft van alle films met een rating van **8.5 of meer**, gesorteerd van hoogste naar laagste rating.

```typescript
console.log(topMovies(movies)); // [ 'Inception', 'The Matrix', 'Interstellar' ]
```

:::tip
`sort` past de array aan waarop je het aanroept. Omdat `filter` al een nieuwe array teruggeeft, blijft de originele array `movies` hier toch ongewijzigd.
:::

## Deel 3: filter, map en join

Schrijf een functie `moviesSince` die een array van films en een jaartal verwacht. De functie geeft één string terug met alle films die in dat jaar of later uitkwamen, in de vorm `titel (jaar)` en gescheiden door een komma en een spatie.

```typescript
console.log(moviesSince(movies, 2010)); // Inception (2010), Interstellar (2014), Frozen (2013), Dune (2021)
```

## Deel 4: filter, map en reduce

Schrijf een functie `averageRating` die een array van films en een genre verwacht, en de gemiddelde rating van de films van dat genre teruggeeft. Maak met `filter` en `map` een array met de ratings van dat genre, tel ze op met `reduce` en deel door het aantal ratings. Hier mag je één tussenvariabele gebruiken voor de array met ratings.

```typescript
console.log(averageRating(movies, "sci-fi").toFixed(2)); // 8.55
```
