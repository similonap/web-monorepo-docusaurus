import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { afterEach, describe, expect, it, vi } from 'vitest';

async function runAndCaptureLogs(): Promise<unknown[]> {
    const logs: unknown[] = [];
    // Kopie per oproep: de lijst wordt na het loggen nog aangepast.
    vi.spyOn(console, 'log').mockImplementation((value: unknown) => { logs.push(structuredClone(value)); });
    const source = readFileSync('./index.ts', 'utf8');
    const directory = mkdtempSync(join(tmpdir(), 'boodschappenlijst-verification-'));
    const modulePath = join(directory, 'instrumented.ts');
    try {
        writeFileSync(modulePath, source);
        await import(pathToFileURL(modulePath).href);
    } finally {
        rmSync(directory, { recursive: true, force: true });
    }
    return logs;
}

const expected: unknown[] = [
    ['brood', 'melk', 'kaas', 'eieren'],
    ['koffie', 'brood', 'melk', 'kaas', 'eieren'],
    'eieren',
    'koffie',
    ['brood', 'melk', 'kaas'],
    true,
    false,
    2,
    -1,
    ['brood', 'kaas'],
    ['brood', 'boter', 'tomaten', 'kaas'],
    ['brood', 'boter'],
    ['brood', 'boter', 'tomaten', 'kaas'],
    ['brood', 'boter', 'tomaten', 'kaas', 'appels', 'peren'],
    ['peren', 'appels', 'kaas', 'tomaten', 'boter', 'brood'],
    'peren, appels, kaas, tomaten, boter, brood',
];

describe('Boodschappenlijst: verificatie', () => {
    afterEach(() => vi.restoreAllMocks());

    it('logt de verwachte resultaten in de juiste volgorde', async () => {
        expect(await runAndCaptureLogs()).toEqual(expected);
    });
    it('gebruikt de gevraagde arraymethodes', () => {
        const source = readFileSync('./index.ts', 'utf8');
        for (const method of ['push', 'pop', 'unshift', 'shift', 'includes', 'indexOf', 'splice', 'slice', 'concat', 'reverse', 'join']) {
            expect(source, `${method} moet gebruikt worden`).toMatch(new RegExp(`\\.${method}\\s*\\(`));
        }
    });
});
