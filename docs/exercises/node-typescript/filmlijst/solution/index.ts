interface Movie {
    title: string;
    year: number;
    genre: string;
    rating: number;
}

function titlesOfGenre(movies: Movie[], genre: string): string[] {
    return movies
        .filter((movie) => movie.genre === genre)
        .map((movie) => movie.title);
}

function topMovies(movies: Movie[]): string[] {
    return movies
        .filter((movie) => movie.rating >= 8.5)
        .sort((a, b) => b.rating - a.rating)
        .map((movie) => movie.title);
}

function moviesSince(movies: Movie[], year: number): string {
    return movies
        .filter((movie) => movie.year >= year)
        .map((movie) => `${movie.title} (${movie.year})`)
        .join(", ");
}

function averageRating(movies: Movie[], genre: string): number {
    let ratings: number[] = movies
        .filter((movie) => movie.genre === genre)
        .map((movie) => movie.rating);
    return ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length;
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

console.log(titlesOfGenre(movies, "animatie"));
console.log(topMovies(movies));
console.log(moviesSince(movies, 2010));
console.log(averageRating(movies, "sci-fi").toFixed(2));

export {}
