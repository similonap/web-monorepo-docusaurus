import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

type Person = { name: string; age: number };

type SortFunctions = {
    sortAscending(numbers: number[]): number[];
    sortDescending(numbers: number[]): number[];
    sortByAge(people: Person[]): Person[];
    sortByName(people: Person[]): Person[];
    oldest(people: Person[]): string;
};

const names = ['sortAscending', 'sortDescending', 'sortByAge', 'sortByName', 'oldest'];

async function loadFunctions(): Promise<SortFunctions> {
    const source = readFileSync('./index.ts', 'utf8').replace(/export\s*{\s*}\s*;?/g, '');
    const directory = mkdtempSync(join(tmpdir(), 'sorteren-verification-'));
    const modulePath = join(directory, 'instrumented.ts');
    try {
        writeFileSync(modulePath, `${source}\nglobalThis.__verificationFunctions = { ${names.join(', ')} };`);
        await import(pathToFileURL(modulePath).href);
    } finally {
        rmSync(directory, { recursive: true, force: true });
    }
    return (globalThis as typeof globalThis & { __verificationFunctions: SortFunctions }).__verificationFunctions;
}

function createPeople(): Person[] {
    return [
        { name: 'Cedric', age: 31 },
        { name: 'Andie', age: 25 },
        { name: 'Debbie', age: 19 },
        { name: 'Bert', age: 42 },
    ];
}

describe('Sorteren: verificatie', () => {
    beforeEach(() => vi.spyOn(console, 'log').mockImplementation(() => {}));
    afterEach(() => { vi.restoreAllMocks(); delete (globalThis as { __verificationFunctions?: SortFunctions }).__verificationFunctions; });

    it('sortAscending en sortDescending sorteren getallen numeriek', async () => {
        const { sortAscending, sortDescending } = await loadFunctions();
        expect(sortAscending([10, 1, 5, 100, 25, 2])).toEqual([1, 2, 5, 10, 25, 100]);
        expect(sortDescending([10, 1, 5, 100, 25, 2])).toEqual([100, 25, 10, 5, 2, 1]);
    });
    it('sortByAge en sortByName sorteren objecten op een property', async () => {
        const { sortByAge, sortByName } = await loadFunctions();
        expect(sortByAge(createPeople()).map((person) => person.name)).toEqual(['Debbie', 'Andie', 'Cedric', 'Bert']);
        expect(sortByName(createPeople()).map((person) => person.name)).toEqual(['Andie', 'Bert', 'Cedric', 'Debbie']);
    });
    it('oldest geeft de naam van de oudste persoon', async () => {
        expect((await loadFunctions()).oldest(createPeople())).toBe('Bert');
    });
    it('past de originele arrays niet aan', async () => {
        const { sortAscending, sortDescending, sortByAge, sortByName, oldest } = await loadFunctions();
        const numbers = [10, 1, 5];
        sortAscending(numbers);
        sortDescending(numbers);
        expect(numbers).toEqual([10, 1, 5]);
        const people = createPeople();
        sortByAge(people);
        sortByName(people);
        oldest(people);
        expect(people).toEqual(createPeople());
    });
    it('gebruikt sort met een vergelijkingsfunctie en localeCompare voor namen', () => {
        const source = readFileSync('./index.ts', 'utf8');
        expect(source).toMatch(/\.sort\s*\(\s*\(/);
        expect(source).toMatch(/\.localeCompare\s*\(/);
    });
});
