import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

type Student = { name: string; score: number };

type StudentFunctions = {
    getNames(students: Student[]): string[];
    getPassed(students: Student[]): Student[];
    findStudent(students: Student[], name: string): Student | undefined;
    updateScore(students: Student[], name: string, score: number): void;
    allPassed(students: Student[]): boolean;
    hasDistinction(students: Student[]): boolean;
    removeStudent(students: Student[], name: string): Student[];
};

const names = ['getNames', 'getPassed', 'findStudent', 'updateScore', 'allPassed', 'hasDistinction', 'removeStudent'];

async function loadFunctions(): Promise<StudentFunctions> {
    const source = readFileSync('./index.ts', 'utf8').replace(/export\s*{\s*}\s*;?/g, '');
    const directory = mkdtempSync(join(tmpdir(), 'studentenlijst-verification-'));
    const modulePath = join(directory, 'instrumented.ts');
    try {
        writeFileSync(modulePath, `${source}\nglobalThis.__verificationFunctions = { ${names.join(', ')} };`);
        await import(pathToFileURL(modulePath).href);
    } finally {
        rmSync(directory, { recursive: true, force: true });
    }
    return (globalThis as typeof globalThis & { __verificationFunctions: StudentFunctions }).__verificationFunctions;
}

function functionBody(name: string): string {
    const source = readFileSync('./index.ts', 'utf8');
    return source.match(new RegExp(`function\\s+${name}\\s*\\([^)]*\\)[^{]*{([\\s\\S]*?)\\n}`))?.[1] ?? '';
}

function createStudents(): Student[] {
    return [
        { name: 'Andie', score: 14 },
        { name: 'Bert', score: 9 },
        { name: 'Cedric', score: 17 },
        { name: 'Debbie', score: 12 },
    ];
}

describe('Studentenlijst: verificatie', () => {
    beforeEach(() => vi.spyOn(console, 'log').mockImplementation(() => {}));
    afterEach(() => { vi.restoreAllMocks(); delete (globalThis as { __verificationFunctions?: StudentFunctions }).__verificationFunctions; });

    it('getNames geeft de namen terug', async () => {
        expect((await loadFunctions()).getNames(createStudents())).toEqual(['Andie', 'Bert', 'Cedric', 'Debbie']);
    });
    it('getPassed behoudt studenten met een score van 10 of meer', async () => {
        const passed = (await loadFunctions()).getPassed([...createStudents(), { name: 'Eva', score: 10 }]);
        expect(passed.map((student) => student.name)).toEqual(['Andie', 'Cedric', 'Debbie', 'Eva']);
    });
    it('findStudent vindt een student op naam of geeft undefined', async () => {
        const { findStudent } = await loadFunctions();
        expect(findStudent(createStudents(), 'Cedric')).toEqual({ name: 'Cedric', score: 17 });
        expect(findStudent(createStudents(), 'Eva')).toBeUndefined();
    });
    it('updateScore vervangt de score van de juiste student', async () => {
        const { updateScore } = await loadFunctions();
        const students = createStudents();
        updateScore(students, 'Bert', 11);
        expect(students[1]).toEqual({ name: 'Bert', score: 11 });
        updateScore(students, 'Eva', 20);
        expect(students).toHaveLength(4);
    });
    it('allPassed en hasDistinction controleren de voorwaarde', async () => {
        const { allPassed, hasDistinction } = await loadFunctions();
        expect(allPassed(createStudents())).toBe(false);
        expect(allPassed(createStudents().filter((student) => student.name !== 'Bert'))).toBe(true);
        expect(hasDistinction(createStudents())).toBe(true);
        expect(hasDistinction([{ name: 'Bert', score: 15 }])).toBe(false);
    });
    it('removeStudent geeft een nieuwe array zonder de student', async () => {
        const students = createStudents();
        const result = (await loadFunctions()).removeStudent(students, 'Andie');
        expect(result.map((student) => student.name)).toEqual(['Bert', 'Cedric', 'Debbie']);
        expect(students).toHaveLength(4);
    });
    it('gebruikt in elke functie de gevraagde arraymethode en geen for-lus', () => {
        const methods: Record<string, string> = {
            getNames: 'map', getPassed: 'filter', findStudent: 'find', updateScore: 'findIndex',
            allPassed: 'every', hasDistinction: 'some', removeStudent: 'filter',
        };
        for (const [name, method] of Object.entries(methods)) {
            const body = functionBody(name);
            expect(body, `${name} moet ${method} gebruiken`).toMatch(new RegExp(`\\.${method}\\s*\\(`));
            expect(body, `${name} mag geen for-lus gebruiken`).not.toMatch(/\bfor\s*\(/);
        }
    });
});
