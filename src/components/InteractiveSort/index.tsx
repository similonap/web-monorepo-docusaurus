import React, { useState } from 'react';
import { withMaximize } from '../shared/Maximizable';
import styles from '../shared/ArrayDemo.module.css';

// ---------------------------------------------------------------------------
// InteractiveSort — vergelijk sort() zonder argument (sorteren als tekst)
// met sort mét een vergelijkingsfunctie. Onderaan kan je twee elementen
// kiezen en zien wat de vergelijkingsfunctie teruggeeft.
// ---------------------------------------------------------------------------

type Mode = 'default' | 'asc' | 'desc';

const DATA = [10, 1, 5, 100, 25, 2];

const MODES: { key: Mode; label: string; code: string }[] = [
    { key: 'default', label: 'sort()', code: '' },
    { key: 'asc', label: '(a, b) => a - b', code: '(a, b) => a - b' },
    { key: 'desc', label: '(a, b) => b - a', code: '(a, b) => b - a' },
];

function compare(mode: Mode, a: number, b: number): number {
    if (mode === 'asc') return a - b;
    if (mode === 'desc') return b - a;
    const sa = String(a);
    const sb = String(b);
    return sa < sb ? -1 : sa > sb ? 1 : 0;
}

function InteractiveSort() {
    const [mode, setMode] = useState<Mode>('default');
    const [sorted, setSorted] = useState<number[] | null>(null);
    const [a, setA] = useState(10);
    const [b, setB] = useState(2);

    const current = MODES.find(m => m.key === mode)!;
    const cmp = compare(mode, a, b);

    function choose(m: Mode) {
        setMode(m);
        setSorted(null);
    }

    function runSort() {
        // [...DATA] zodat de demo altijd vanaf dezelfde startarray vertrekt
        setSorted(mode === 'default' ? [...DATA].sort() : [...DATA].sort((x, y) => compare(mode, x, y)));
    }

    const shown = sorted ?? DATA;
    const isWrong = sorted !== null && mode === 'default';

    return (
        <div className={styles.container}>
            <div className={styles.optionRow}>
                <span className={styles.optionTitle}>vergelijkingsfunctie</span>
                <div className={styles.segmented}>
                    {MODES.map(m => (
                        <button key={m.key} className={`${styles.segment} ${mode === m.key ? styles.segmentActive : ''}`}
                            onClick={() => choose(m.key)}>
                            {m.key === 'default' ? 'geen' : m.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.codePanel}>
                <div className={styles.codeHeader}>sort.ts</div>
                <div className={styles.codeBody}>
                    <div className={styles.codeLine}>
                        <span className={styles.kw}>let</span> <span className={styles.varName}>numbers</span>
                        <span className={styles.punct}>: </span><span className={styles.typeName}>number</span>
                        <span className={styles.punct}>[] = [</span><span className={styles.num}>{DATA.join(', ')}</span>
                        <span className={styles.punct}>];</span>
                    </div>
                    <div className={`${styles.codeLine} ${sorted ? styles.codeLineActive : ''}`}>
                        <span className={styles.varName}>numbers</span><span className={styles.punct}>.</span>
                        <span className={styles.fn}>sort</span><span className={styles.punct}>(</span>
                        <span className={styles.varName}>{current.code}</span>
                        <span className={styles.punct}>);</span>
                    </div>
                </div>
            </div>

            <div className={styles.panel}>
                <div className={styles.panelHeader}>
                    <span>numbers</span>
                    <span className={`${styles.panelNote} ${isWrong ? styles.panelNoteBad : sorted ? styles.panelNoteOk : ''}`}>
                        {sorted === null ? 'nog niet gesorteerd' : isWrong ? 'gesorteerd als tekst!' : 'correct gesorteerd'}
                    </span>
                </div>
                <div className={styles.cells}>
                    {shown.map((v, i) => (
                        <div key={`${sorted ? 's' : 'o'}-${v}`} className={styles.cellWrap}>
                            <span className={styles.cellIndex}>{i}</span>
                            <div className={`${styles.cell} ${sorted ? `${isWrong ? styles.cellWarn : styles.cellOk} ${styles.cellNew}` : ''}`}
                                style={sorted ? { animationDelay: `${i * 60}ms` } : undefined}>
                                {v}
                            </div>
                        </div>
                    ))}
                </div>
                {isWrong && (
                    <div className={styles.explain}>
                        Zonder vergelijkingsfunctie zet <code>sort</code> elk element om naar tekst:{' '}
                        <code>{shown.map(v => `"${v}"`).join(' ')}</code>. Tekst wordt teken per teken vergeleken,
                        en <code>"1"</code> komt voor <code>"2"</code>, dus <code>"100"</code> komt voor <code>"2"</code>.
                    </div>
                )}
            </div>

            <div className={styles.controls}>
                <button className={styles.btnPrimary} onClick={runSort}>▶ Sorteer</button>
                <button className={styles.btnSecondary} onClick={() => setSorted(null)} disabled={sorted === null}>↺ Reset</button>
            </div>

            <div className={styles.panel}>
                <div className={styles.panelHeader}>
                    <span>Vergelijk twee elementen</span>
                </div>
                <div className={styles.optionRow}>
                    <label className={styles.optionLabel}>
                        a =
                        <select className={styles.numberInput} value={a} onChange={e => setA(Number(e.target.value))}>
                            {DATA.map(v => <option key={v} value={v}>{v}</option>)}
                        </select>
                    </label>
                    <label className={styles.optionLabel}>
                        b =
                        <select className={styles.numberInput} value={b} onChange={e => setB(Number(e.target.value))}>
                            {DATA.map(v => <option key={v} value={v}>{v}</option>)}
                        </select>
                    </label>
                </div>
                <div className={styles.codeLine}>
                    {mode === 'default' ? (
                        <span className={styles.comment}>{`// "${a}" en "${b}" vergeleken als tekst`}</span>
                    ) : (
                        <>
                            <span className={styles.varName}>{mode === 'asc' ? `${a} - ${b}` : `${b} - ${a}`}</span>
                            <span className={styles.punct}> = </span>
                            <span className={cmp < 0 ? styles.trueText : cmp > 0 ? styles.falseText : styles.num}>{cmp}</span>
                        </>
                    )}
                </div>
                <div key={`${mode}-${a}-${b}`} className={`${styles.result} ${styles.appear}`}>
                    {cmp < 0 && <span><strong>{a}</strong> komt voor <strong>{b}</strong> {mode !== 'default' && '(negatief getal)'}</span>}
                    {cmp > 0 && <span><strong>{b}</strong> komt voor <strong>{a}</strong> {mode !== 'default' && '(positief getal)'}</span>}
                    {cmp === 0 && <span>De volgorde van <strong>{a}</strong> en <strong>{b}</strong> blijft behouden (0)</span>}
                </div>
            </div>
        </div>
    );
}

export default withMaximize(InteractiveSort);
