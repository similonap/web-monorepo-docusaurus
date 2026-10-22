import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

type Movie = { title: string; year: number; genre: string; rating: number };

type MovieFunctions = {
    titlesOfGenre(movies: Movie[], genre: string): string[];
    topMovies(movies: Movie[]): string[];
    moviesSince(movies: Movie[], year: number): string;
    averageRating(movies: Movie[], genre: string): number;
};

const names = ['titlesOfGenre', 'topMovies', 'moviesSince', 'averageRating'];

async function loadFunctions(): Promise<MovieFunctions> {
    const source = readFileSync('./index.ts', 'utf8').replace(/export\s*{\s*}\s*;?/g, '');
    const directory = mkdtempSync(join(tmpdir(), 'filmlijst-verification-'));
    const modulePath = join(directory, 'instrumented.ts');
    try {
        writeFileSync(modulePath, `${source}\nglobalThis.__verificationFunctions = { ${names.join(', ')} };`);
        await import(pathToFileURL(modulePath).href);
    } finally {
        rmSync(directory, { recursive: true, force: true });
    }
    return (globalThis as typeof globalThis & { __verificationFunctions: MovieFunctions }).__verificationFunctions;
}

function functionBody(name: string): string {
    const source = readFileSync('./index.ts', 'utf8');
    return source.match(new RegExp(`function\\s+${name}\\s*\\([^)]*\\)[^{]*{([\\s\\S]*?)\\n}`))?.[1] ?? '';
}

function createMovies(): Movie[] {
    return [
        { title: 'The Matrix', year: 1999, genre: 'sci-fi', rating: 8.7 },
        { title: 'Finding Nemo', year: 2003, genre: 'animatie', rating: 8.2 },
        { title: 'Inception', year: 2010, genre: 'sci-fi', rating: 8.8 },
        { title: 'Cars', year: 2006, genre: 'animatie', rating: 7.2 },
        { title: 'Interstellar', year: 2014, genre: 'sci-fi', rating: 8.7 },
        { title: 'Frozen', year: 2013, genre: 'animatie', rating: 7.4 },
        { title: 'Dune', year: 2021, genre: 'sci-fi', rating: 8.0 },
    ];
}

describe('Filmlijst: verificatie', () => {
    beforeEach(() => vi.spyOn(console, 'log').mockImplementation(() => {}));
    afterEach(() => { vi.restoreAllMocks(); delete (globalThis as { __verificationFunctions?: MovieFunctions }).__verificationFunctions; });

    it('titlesOfGenre geeft de titels van een genre', async () => {
        expect((await loadFunctions()).titlesOfGenre(createMovies(), 'animatie')).toEqual(['Finding Nemo', 'Cars', 'Frozen']);
    });
    it('topMovies geeft de beste films gesorteerd op rating', async () => {
        const movies = createMovies();
        expect((await loadFunctions()).topMovies(movies)).toEqual(['Inception', 'The Matrix', 'Interstellar']);
        expect(movies).toEqual(createMovies());
    });
    it('moviesSince geeft een string met titel en jaar', async () => {
        expect((await loadFunctions()).moviesSince(createMovies(), 2010))
            .toBe('Inception (2010), Interstellar (2014), Frozen (2013), Dune (2021)');
    });
    it('averageRating berekent het gemiddelde van een genre', async () => {
        const { averageRating } = await loadFunctions();
        expect(averageRating(createMovies(), 'sci-fi')).toBeCloseTo(8.55);
        expect(averageRating(createMovies(), 'animatie')).toBeCloseTo(7.6);
    });
    it('gebruikt de gevraagde methodes en geen for-lus', () => {
        const methods: Record<string, string[]> = {
            titlesOfGenre: ['filter', 'map'],
            topMovies: ['filter', 'sort', 'map'],
            moviesSince: ['filter', 'map', 'join'],
            averageRating: ['filter', 'map', 'reduce'],
        };
        for (const [name, required] of Object.entries(methods)) {
            const body = functionBody(name);
            for (const method of required) {
                expect(body, `${name} moet ${method} gebruiken`).toMatch(new RegExp(`\\.${method}\\s*\\(`));
            }
            expect(body, `${name} mag geen for-lus gebruiken`).not.toMatch(/\bfor\s*\(/);
        }
    });
});
