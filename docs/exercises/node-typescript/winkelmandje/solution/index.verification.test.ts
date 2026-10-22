import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

type Product = { name: string; category: string; price: number; quantity: number };

type CartFunctions = {
    totalItems(cart: Product[]): number;
    totalPrice(cart: Product[]): number;
    mostExpensive(cart: Product[]): Product;
    countByCategory(cart: Product[]): Record<string, number>;
};

const names = ['totalItems', 'totalPrice', 'mostExpensive', 'countByCategory'];

async function loadFunctions(): Promise<CartFunctions> {
    const source = readFileSync('./index.ts', 'utf8').replace(/export\s*{\s*}\s*;?/g, '');
    const directory = mkdtempSync(join(tmpdir(), 'winkelmandje-verification-'));
    const modulePath = join(directory, 'instrumented.ts');
    try {
        writeFileSync(modulePath, `${source}\nglobalThis.__verificationFunctions = { ${names.join(', ')} };`);
        await import(pathToFileURL(modulePath).href);
    } finally {
        rmSync(directory, { recursive: true, force: true });
    }
    return (globalThis as typeof globalThis & { __verificationFunctions: CartFunctions }).__verificationFunctions;
}

function functionBody(name: string): string {
    const source = readFileSync('./index.ts', 'utf8');
    return source.match(new RegExp(`function\\s+${name}\\s*\\([^)]*\\)[^{]*{([\\s\\S]*?)\\n}`))?.[1] ?? '';
}

const cart: Product[] = [
    { name: 'Appels', category: 'fruit', price: 0.5, quantity: 6 },
    { name: 'Brood', category: 'bakkerij', price: 2.4, quantity: 1 },
    { name: 'Bananen', category: 'fruit', price: 0.3, quantity: 4 },
    { name: 'Kaas', category: 'zuivel', price: 4.5, quantity: 1 },
    { name: 'Croissant', category: 'bakkerij', price: 1.2, quantity: 3 },
];

describe('Winkelmandje: verificatie', () => {
    beforeEach(() => vi.spyOn(console, 'log').mockImplementation(() => {}));
    afterEach(() => { vi.restoreAllMocks(); delete (globalThis as { __verificationFunctions?: CartFunctions }).__verificationFunctions; });

    it('totalItems telt alle stuks op', async () => {
        const { totalItems } = await loadFunctions();
        expect(totalItems(cart)).toBe(15);
        expect(totalItems([])).toBe(0);
    });
    it('totalPrice rekent met prijs maal aantal', async () => {
        const { totalPrice } = await loadFunctions();
        expect(totalPrice(cart)).toBeCloseTo(14.7);
        expect(totalPrice([])).toBe(0);
    });
    it('mostExpensive geeft het product met de hoogste prijs', async () => {
        const { mostExpensive } = await loadFunctions();
        expect(mostExpensive(cart).name).toBe('Kaas');
        expect(mostExpensive([cart[0]!]).name).toBe('Appels');
    });
    it('countByCategory telt de producten per categorie', async () => {
        expect((await loadFunctions()).countByCategory(cart)).toEqual({ fruit: 2, bakkerij: 2, zuivel: 1 });
    });
    it('gebruikt in elke functie reduce en geen for-lus', () => {
        for (const name of names) {
            const body = functionBody(name);
            expect(body, `${name} moet reduce gebruiken`).toMatch(/\.reduce\s*\(/);
            expect(body, `${name} mag geen for-lus gebruiken`).not.toMatch(/\bfor\s*\(/);
        }
    });
});
