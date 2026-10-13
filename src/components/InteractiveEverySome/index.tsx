import React, { useEffect, useState } from 'react';
import { withMaximize } from '../shared/Maximizable';
import styles from '../shared/ArrayDemo.module.css';

// ---------------------------------------------------------------------------
// InteractiveEverySome — overloop stap voor stap hoe every() en some() de
// callback per element uitvoeren en stoppen zodra de uitkomst vastligt.
// ---------------------------------------------------------------------------

type Method = 'every' | 'some';

interface Condition {
    label: string;
    test: (n: number) => boolean;
}

const DATA = [4, 8, 15, 16, 23, 42];

const CONDITIONS: Condition[] = [
    { label: 'n % 2 === 0', test: n => n % 2 === 0 },
    { label: 'n > 0', test: n => n > 0 },
    { label: 'n > 20', test: n => n > 20 },
    { label: 'n > 50', test: n => n > 50 },
];

const STEP_MS = 900;

function InteractiveEverySome() {
    const [method, setMethod] = useState<Method>('every');
    const [condIndex, setCondIndex] = useState(0);
    const [checked, setChecked] = useState(0); // aantal elementen dat al getest is
    const [playing, setPlaying] = useState(false);

    const cond = CONDITIONS[condIndex];
    const results = DATA.slice(0, checked).map(cond.test);
    const lastResult = results[results.length - 1];
    // every stopt bij de eerste false, some bij de eerste true
    const stopsOn = method === 'some';
    const shortCircuit = results.length > 0 && lastResult === stopsOn;
    const done = shortCircuit || checked === DATA.length;
    const answer = shortCircuit ? stopsOn : !stopsOn;

    useEffect(() => {
        if (!playing) return;
        if (done) { setPlaying(false); return; }
        const t = setTimeout(() => setChecked(c => c + 1), checked === 0 ? 200 : STEP_MS);
        return () => clearTimeout(t);
    }, [playing, checked, done]);

    function reset() {
        setPlaying(false);
        setChecked(0);
    }

    function choose(next: () => void) {
        reset();
        next();
    }

    function cellClass(i: number) {
        if (i >= checked) return done ? styles.cellSkipped : '';
        if (i === checked - 1 && !done) return results[i] ? `${styles.cellOk} ${styles.cellActive}` : `${styles.cellBad} ${styles.cellActive}`;
        return results[i] ? styles.cellOk : styles.cellBad;
    }

    const current = checked > 0 ? DATA[checked - 1] : null;

    return (
        <div className={styles.container}>
            <div className={styles.optionRow}>
                <span className={styles.optionTitle}>methode</span>
                <div className={styles.segmented}>
                    {(['every', 'some'] as Method[]).map(m => (
                        <button key={m} className={`${styles.segment} ${method === m ? styles.segmentActive : ''}`}
                            onClick={() => choose(() => setMethod(m))}>
                            {m}
                        </button>
                    ))}
                </div>
                <span className={styles.optionTitle}>voorwaarde</span>
                <div className={styles.segmented}>
                    {CONDITIONS.map((c, i) => (
                        <button key={c.label} className={`${styles.segment} ${condIndex === i ? styles.segmentActive : ''}`}
                            onClick={() => choose(() => setCondIndex(i))}>
                            {c.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.codePanel}>
                <div className={styles.codeHeader}>{method}.ts</div>
                <div className={styles.codeBody}>
                    <div className={styles.codeLine}>
                        <span className={styles.kw}>let</span> <span className={styles.varName}>numbers</span>
                        <span className={styles.punct}>: </span><span className={styles.typeName}>number</span>
                        <span className={styles.punct}>[] = [</span><span className={styles.num}>{DATA.join(', ')}</span>
                        <span className={styles.punct}>];</span>
                    </div>
                    <div className={`${styles.codeLine} ${checked > 0 && !done ? styles.codeLineActive : ''}`}>
                        <span className={styles.kw}>let</span> <span className={styles.varName}>result</span>
                        <span className={styles.punct}>: </span><span className={styles.typeName}>boolean</span>
                        <span className={styles.punct}> = numbers.</span><span className={styles.fn}>{method}</span>
                        <span className={styles.punct}>(n {'=>'} </span>
                        <span className={styles.varName}>{cond.label}</span>
                        <span className={styles.punct}>);</span>
                    </div>
                    {current !== null && (
                        <div key={checked} className={`${styles.codeLine} ${styles.appear}`}>
                            <span className={styles.comment}>{'// n = '}{current}{' → '}{cond.label.replace(/n/g, String(current))}{' → '}</span>
                            <span className={lastResult ? styles.trueText : styles.falseText}>{String(lastResult)}</span>
                        </div>
                    )}
                </div>
            </div>

            <div className={styles.panel}>
                <div className={styles.panelHeader}>
                    <span>numbers</span>
                    <span className={styles.panelNote}>
                        {checked} van {DATA.length} elementen getest
                        {done && checked < DATA.length ? ` (${DATA.length - checked} overgeslagen)` : ''}
                    </span>
                </div>
                <div className={styles.cells}>
                    {DATA.map((v, i) => (
                        <div key={i} className={styles.cellWrap}>
                            <span className={styles.cellIndex}>{i}</span>
                            <div className={`${styles.cell} ${cellClass(i)}`}>{v}</div>
                        </div>
                    ))}
                </div>
            </div>

            {done && (
                <div className={`${styles.result} ${answer ? styles.resultOk : styles.resultBad} ${styles.appear}`}>
                    <span>result = <strong>{String(answer)}</strong></span>
                    <span className={styles.panelNote} style={{ width: '100%' }}>
                        {method === 'every'
                            ? shortCircuit
                                ? `${current} voldoet niet, dus niet elk element voldoet. every stopt meteen.`
                                : 'Elk element voldoet aan de voorwaarde.'
                            : shortCircuit
                                ? `${current} voldoet, dus minstens één element voldoet. some stopt meteen.`
                                : 'Geen enkel element voldoet aan de voorwaarde.'}
                    </span>
                </div>
            )}

            <div className={styles.controls}>
                <button className={styles.btnPrimary} onClick={() => (done ? (reset(), setPlaying(true)) : setPlaying(p => !p))}>
                    {done ? '↺ Opnieuw' : checked === 0 && !playing ? '▶ Start' : playing ? '⏸ Pauze' : '▶ Verder'}
                </button>
                <button className={styles.btnSecondary} onClick={() => setChecked(c => c + 1)} disabled={playing || done}>
                    Stap →
                </button>
                <button className={styles.btnSecondary} onClick={reset} disabled={checked === 0 && !playing}>
                    ↺ Reset
                </button>
            </div>
        </div>
    );
}

export default withMaximize(InteractiveEverySome);
