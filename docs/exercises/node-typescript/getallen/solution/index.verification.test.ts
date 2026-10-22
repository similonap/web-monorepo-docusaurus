import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

type NumberFunctions = {
    printNumbers(numbers: number[]): void;
    double(numbers: number[]): number[];
    onlyEven(numbers: number[]): number[];
    firstGreaterThan(numbers: number[], limit: number): number | undefined;
    positionOfFirstGreaterThan(numbers: number[], limit: number): number;
    allPositive(numbers: number[]): boolean;
    containsNegative(numbers: number[]): boolean;
};

const names = ['printNumbers', 'double', 'onlyEven', 'firstGreaterThan', 'positionOfFirstGreaterThan', 'allPositive', 'containsNegative'];

async function loadFunctions(): Promise<NumberFunctions> {
    const source = readFileSync('./index.ts', 'utf8').replace(/export\s*{\s*}\s*;?/g, '');
    const directory = mkdtempSync(join(tmpdir(), 'getallen-verification-'));
    const modulePath = join(directory, 'instrumented.ts');
    try {
        writeFileSync(modulePath, `${source}\nglobalThis.__verificationFunctions = { ${names.join(', ')} };`);
        await import(pathToFileURL(modulePath).href);
    } finally {
        rmSync(directory, { recursive: true, force: true });
    }
    return (globalThis as typeof globalThis & { __verificationFunctions: NumberFunctions }).__verificationFunctions;
}

function functionBody(name: string): string {
    const source = readFileSync('./index.ts', 'utf8');
    return source.match(new RegExp(`function\\s+${name}\\s*\\([^)]*\\)[^{]*{([\\s\\S]*?)\\n}`))?.[1] ?? '';
}

const numbers = [3, 8, 12, 5, 7, 20, 1];

describe('Getallen: verificatie', () => {
    beforeEach(() => vi.spyOn(console, 'log').mockImplementation(() => {}));
    afterEach(() => { vi.restoreAllMocks(); delete (globalThis as { __verificationFunctions?: NumberFunctions }).__verificationFunctions; });

    it('printNumbers logt elk getal met zijn positie', async () => {
        const { printNumbers } = await loadFunctions();
        const log = vi.spyOn(console, 'log').mockImplementation(() => {});
        log.mockClear();
        printNumbers([3, 8]);
        expect(log.mock.calls.map((call) => call[0])).toEqual(['Getal 1: 3', 'Getal 2: 8']);
    });
    it('double verdubbelt elk getal in een nieuwe array', async () => {
        const input = [...numbers];
        expect((await loadFunctions()).double(input)).toEqual([6, 16, 24, 10, 14, 40, 2]);
        expect(input).toEqual(numbers);
    });
    it('onlyEven geeft enkel de even getallen terug', async () => {
        expect((await loadFunctions()).onlyEven(numbers)).toEqual([8, 12, 20]);
    });
    it('firstGreaterThan geeft het eerste grotere getal of undefined', async () => {
        const { firstGreaterThan } = await loadFunctions();
        expect(firstGreaterThan(numbers, 10)).toBe(12);
        expect(firstGreaterThan(numbers, 100)).toBeUndefined();
    });
    it('positionOfFirstGreaterThan geeft de positie of -1', async () => {
        const { positionOfFirstGreaterThan } = await loadFunctions();
        expect(positionOfFirstGreaterThan(numbers, 10)).toBe(2);
        expect(positionOfFirstGreaterThan(numbers, 100)).toBe(-1);
    });
    it('allPositive en containsNegative controleren de voorwaarde', async () => {
        const { allPositive, containsNegative } = await loadFunctions();
        expect(allPositive(numbers)).toBe(true);
        expect(allPositive([4, -2, 6])).toBe(false);
        expect(allPositive([0, 1])).toBe(false);
        expect(containsNegative(numbers)).toBe(false);
        expect(containsNegative([4, -2, 6])).toBe(true);
    });
    it('gebruikt in elke functie de gevraagde arraymethode en geen for-lus', () => {
        const methods: Record<string, string> = {
            printNumbers: 'forEach', double: 'map', onlyEven: 'filter', firstGreaterThan: 'find',
            positionOfFirstGreaterThan: 'findIndex', allPositive: 'every', containsNegative: 'some',
        };
        for (const [name, method] of Object.entries(methods)) {
            const body = functionBody(name);
            expect(body, `${name} moet ${method} gebruiken`).toMatch(new RegExp(`\\.${method}\\s*\\(`));
            expect(body, `${name} mag geen for-lus gebruiken`).not.toMatch(/\bfor\s*\(/);
        }
    });
});
