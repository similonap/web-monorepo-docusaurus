import React, { useState } from 'react';
import { withMaximize } from '../shared/Maximizable';
import styles from '../shared/ArrayDemo.module.css';

// ---------------------------------------------------------------------------
// InteractiveChaining — een keten van filter, map, sort en reduce waarbij je
// stappen kan aan- en uitzetten (en filter/map van plaats wisselen). Elke
// stap toont de tussenliggende array die naar de volgende stap gaat.
// ---------------------------------------------------------------------------

type StepKey = 'filter' | 'map' | 'sort' | 'reduce';

interface Step {
    key: StepKey;
    code: string;
    apply: (values: number[]) => number[] | number;
}

const DATA = [5, 12, 8, 21, 3, 14];

const STEPS: Record<StepKey, Step> = {
    filter: { key: 'filter', code: '.filter(n => n > 6)', apply: v => v.filter(n => n > 6) },
    map: { key: 'map', code: '.map(n => n * 2)', apply: v => v.map(n => n * 2) },
    sort: { key: 'sort', code: '.sort((a, b) => a - b)', apply: v => [...v].sort((a, b) => a - b) },
    reduce: { key: 'reduce', code: '.reduce((acc, n) => acc + n, 0)', apply: v => v.reduce((acc, n) => acc + n, 0) },
};

function InteractiveChaining() {
    const [enabled, setEnabled] = useState<Record<StepKey, boolean>>({ filter: true, map: true, sort: true, reduce: false });
    const [mapFirst, setMapFirst] = useState(false);

    const order: StepKey[] = mapFirst ? ['map', 'filter', 'sort', 'reduce'] : ['filter', 'map', 'sort', 'reduce'];
    const active = order.filter(k => enabled[k]).map(k => STEPS[k]);

    // Bereken de tussenresultaten van de keten
    const stages: { step: Step; value: number[] | number }[] = [];
    let value: number[] | number = DATA;
    for (const step of active) {
        value = step.apply(value as number[]);
        stages.push({ step, value });
    }

    const resultType = typeof value === 'number' ? 'number' : 'number[]';

    function toggle(k: StepKey) {
        setEnabled(e => ({ ...e, [k]: !e[k] }));
    }

    function renderValue(v: number[] | number, highlight: boolean) {
        if (typeof v === 'number') {
            return (
                <div className={styles.cells}>
                    <div className={`${styles.cell} ${styles.cellOk} ${styles.cellNew}`}>{v}</div>
                </div>
            );
        }
        if (v.length === 0) {
            return (
                <div className={styles.cells}>
                    <div className={`${styles.cell} ${styles.cellEmpty}`}>[ ]</div>
                </div>
            );
        }
        return (
            <div className={styles.cells}>
                {v.map((n, i) => (
                    <div key={`${i}-${n}`} className={`${styles.cell} ${highlight ? styles.cellSelected : ''}`}>{n}</div>
                ))}
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.optionRow}>
                <span className={styles.optionTitle}>stappen</span>
                {(['filter', 'map', 'sort', 'reduce'] as StepKey[]).map(k => (
                    <label key={k} className={styles.optionLabel}>
                        <input type="checkbox" checked={enabled[k]} onChange={() => toggle(k)} />
                        {k}
                    </label>
                ))}
                <label className={styles.optionLabel}>
                    <input type="checkbox" checked={mapFirst} onChange={e => setMapFirst(e.target.checked)} />
                    map vóór filter
                </label>
            </div>

            <div className={styles.codePanel}>
                <div className={styles.codeHeader}>chaining.ts</div>
                <div className={styles.codeBody}>
                    <div className={styles.codeLine}>
                        <span className={styles.kw}>let</span> <span className={styles.varName}>numbers</span>
                        <span className={styles.punct}>: </span><span className={styles.typeName}>number</span>
                        <span className={styles.punct}>[] = [</span><span className={styles.num}>{DATA.join(', ')}</span>
                        <span className={styles.punct}>];</span>
                    </div>
                    <div className={styles.codeLine}>&nbsp;</div>
                    <div className={styles.codeLine}>
                        <span className={styles.kw}>let</span> <span className={styles.varName}>result</span>
                        <span className={styles.punct}>: </span><span className={styles.typeName}>{resultType}</span>
                        <span className={styles.punct}> = numbers</span>
                        {active.length === 0 && <span className={styles.punct}>;</span>}
                    </div>
                    {active.map((step, i) => (
                        <div key={step.key} className={styles.codeLine}>
                            <span className={styles.punct}>{'    '}</span>
                            <span className={styles.fn}>{step.code}</span>
                            {i === active.length - 1 && <span className={styles.punct}>;</span>}
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.panel}>
                <div className={styles.panelHeader}><span>numbers</span></div>
                {renderValue(DATA, false)}
            </div>
            {stages.map(({ step, value: v }, i) => (
                <React.Fragment key={`${step.key}-${i}-${mapFirst}`}>
                    <div className={styles.arrow}>↓ {step.code}</div>
                    <div className={`${styles.panel} ${styles.appear}`}>
                        <div className={styles.panelHeader}>
                            <span>{i === stages.length - 1 ? 'result' : `tussenresultaat ${i + 1}`}</span>
                            <span className={styles.panelNote}>{typeof v === 'number' ? 'één getal' : `${v.length} element(en)`}</span>
                        </div>
                        {renderValue(v, i === stages.length - 1)}
                    </div>
                </React.Fragment>
            ))}

            {mapFirst && enabled.filter && enabled.map && (
                <div className={styles.explain}>
                    Merk op: omdat <code>map</code> nu eerst verdubbelt, halen meer getallen de voorwaarde <code>n &gt; 6</code>.
                    De volgorde van de stappen in een keten maakt dus uit.
                </div>
            )}
            {enabled.reduce && (
                <div className={styles.explain}>
                    <code>reduce</code> geeft geen array maar één getal terug. Daarom moet het de <strong>laatste</strong> stap
                    zijn: op een <code>number</code> kan je geen <code>filter</code> of <code>map</code> meer aanroepen.
                </div>
            )}
        </div>
    );
}

export default withMaximize(InteractiveChaining);
