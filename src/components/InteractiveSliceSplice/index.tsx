import React, { useState } from 'react';
import { withMaximize } from '../shared/Maximizable';
import styles from '../shared/ArrayDemo.module.css';

// ---------------------------------------------------------------------------
// InteractiveSliceSplice — vergelijk slice(start, end) met
// splice(start, deleteCount, ...items). Met de schuifregelaars kies je de
// argumenten; de demo toont welke elementen geselecteerd worden, wat de
// methode teruggeeft en hoe de originele array er daarna uitziet.
// ---------------------------------------------------------------------------

type Method = 'slice' | 'splice';

const DATA = ['a', 'b', 'c', 'd', 'e', 'f'];

function Cells({ values, className }: { values: string[]; className?: (i: number) => string }) {
    if (values.length === 0) {
        return (
            <div className={styles.cells}>
                <div className={styles.cellWrap}>
                    <span className={styles.cellIndex}>&nbsp;</span>
                    <div className={`${styles.cell} ${styles.cellEmpty}`}>[ ]</div>
                </div>
            </div>
        );
    }
    return (
        <div className={styles.cells}>
            {values.map((v, i) => (
                <div key={`${i}-${v}`} className={styles.cellWrap}>
                    <span className={styles.cellIndex}>{i}</span>
                    <div className={`${styles.cell} ${className ? className(i) : ''}`}>"{v}"</div>
                </div>
            ))}
        </div>
    );
}

function InteractiveSliceSplice() {
    const [method, setMethod] = useState<Method>('slice');
    const [start, setStart] = useState(1);
    const [end, setEnd] = useState(4);
    const [deleteCount, setDeleteCount] = useState(2);
    const [insert, setInsert] = useState(false);

    const isSlice = method === 'slice';
    const selFrom = start;
    const selTo = isSlice ? Math.max(start, end) : Math.min(DATA.length, start + deleteCount);

    const copy = [...DATA];
    const returned = isSlice ? DATA.slice(start, end) : copy.splice(start, deleteCount, ...(insert ? ['X', 'Y'] : []));
    const after = isSlice ? DATA : copy;
    const insertedFrom = start;
    const insertedTo = insert && !isSlice ? start + 2 : start;

    function selectedClass(i: number) {
        if (i < selFrom || i >= selTo) return '';
        return isSlice ? styles.cellSelected : styles.cellBad;
    }

    return (
        <div className={styles.container}>
            <div className={styles.optionRow}>
                <span className={styles.optionTitle}>methode</span>
                <div className={styles.segmented}>
                    {(['slice', 'splice'] as Method[]).map(m => (
                        <button
                            key={m}
                            className={`${styles.segment} ${method === m ? styles.segmentActive : ''}`}
                            onClick={() => setMethod(m)}
                        >
                            {m}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.optionRow}>
                <label className={styles.optionLabel}>
                    start
                    <input className={styles.range} type="range" min={0} max={DATA.length} value={start}
                        onChange={e => setStart(Number(e.target.value))} />
                    <strong>{start}</strong>
                </label>
                {isSlice ? (
                    <label className={styles.optionLabel}>
                        end
                        <input className={styles.range} type="range" min={0} max={DATA.length} value={end}
                            onChange={e => setEnd(Number(e.target.value))} />
                        <strong>{end}</strong>
                    </label>
                ) : (
                    <>
                        <label className={styles.optionLabel}>
                            deleteCount
                            <input className={styles.range} type="range" min={0} max={DATA.length} value={deleteCount}
                                onChange={e => setDeleteCount(Number(e.target.value))} />
                            <strong>{deleteCount}</strong>
                        </label>
                        <label className={styles.optionLabel}>
                            <input type="checkbox" checked={insert} onChange={e => setInsert(e.target.checked)} />
                            voeg "X" en "Y" toe
                        </label>
                    </>
                )}
            </div>

            <div className={styles.codePanel}>
                <div className={styles.codeHeader}>{method}.ts</div>
                <div className={styles.codeBody}>
                    <div className={styles.codeLine}>
                        <span className={styles.kw}>let</span> <span className={styles.varName}>letters</span>
                        <span className={styles.punct}>: </span><span className={styles.typeName}>string</span>
                        <span className={styles.punct}>[] = [</span>
                        <span className={styles.str}>{DATA.map(d => `"${d}"`).join(', ')}</span>
                        <span className={styles.punct}>];</span>
                    </div>
                    <div className={`${styles.codeLine} ${styles.codeLineActive}`}>
                        <span className={styles.kw}>let</span> <span className={styles.varName}>result</span>
                        <span className={styles.punct}> = letters.</span><span className={styles.fn}>{method}</span>
                        <span className={styles.punct}>(</span><span className={styles.num}>{start}</span>
                        <span className={styles.punct}>, </span>
                        <span className={styles.num}>{isSlice ? end : deleteCount}</span>
                        {!isSlice && insert && (
                            <><span className={styles.punct}>, </span><span className={styles.str}>"X", "Y"</span></>
                        )}
                        <span className={styles.punct}>);</span>
                    </div>
                </div>
            </div>

            <div className={styles.panel}>
                <div className={styles.panelHeader}>
                    <span>letters (voor de aanroep)</span>
                    <span className={styles.panelNote}>
                        {isSlice
                            ? `index ${start} tot (niet tot en met) ${end}`
                            : `${selTo - selFrom} element(en) vanaf index ${start}`}
                    </span>
                </div>
                <Cells values={DATA} className={selectedClass} />
            </div>

            <div className={styles.panelGrid}>
                <div className={styles.panel}>
                    <div className={styles.panelHeader}>
                        <span>result</span>
                        <span className={styles.panelNote}>{isSlice ? 'een kopie' : 'de verwijderde elementen'}</span>
                    </div>
                    <Cells values={returned} className={() => (isSlice ? styles.cellSelected : styles.cellBad)} />
                </div>
                <div className={styles.panel}>
                    <div className={styles.panelHeader}>
                        <span>letters (na de aanroep)</span>
                        <span className={`${styles.panelNote} ${isSlice ? styles.panelNoteOk : styles.panelNoteBad}`}>
                            {isSlice ? 'ongewijzigd' : 'aangepast!'}
                        </span>
                    </div>
                    <Cells
                        values={after}
                        className={i => (!isSlice && i >= insertedFrom && i < insertedTo ? `${styles.cellOk} ${styles.cellNew}` : '')}
                    />
                </div>
            </div>

            <div className={styles.explain}>
                {isSlice ? (
                    <>
                        <code>slice</code> maakt een <strong>kopie</strong> van een stuk van de array. Het element op
                        index <code>end</code> zit er zelf niet meer bij. De originele array blijft dezelfde.
                    </>
                ) : (
                    <>
                        <code>splice</code> haalt <code>deleteCount</code> elementen <strong>uit</strong> de originele
                        array (en kan er nieuwe tussen steken). Het geeft de verwijderde elementen terug als array.
                    </>
                )}
            </div>
        </div>
    );
}

export default withMaximize(InteractiveSliceSplice);
