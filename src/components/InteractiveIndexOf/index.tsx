import React, { useState } from 'react';
import { withMaximize } from '../shared/Maximizable';
import styles from '../shared/ArrayDemo.module.css';

// ---------------------------------------------------------------------------
// InteractiveIndexOf — zoek een waarde in een array en zie meteen wat
// indexOf, lastIndexOf en includes teruggeven.
// ---------------------------------------------------------------------------

const DATA = ['appel', 'peer', 'kiwi', 'peer', 'banaan', 'kiwi', 'peer'];
const SUGGESTIONS = ['peer', 'kiwi', 'banaan', 'Appel', 'mango'];

function InteractiveIndexOf() {
    const [search, setSearch] = useState('peer');

    const first = DATA.indexOf(search);
    const last = DATA.lastIndexOf(search);
    const found = DATA.includes(search);

    function cellClass(i: number) {
        if (i === first && i === last) return styles.cellOk;
        if (i === first) return styles.cellOk;
        if (i === last) return styles.cellWarn;
        if (DATA[i] === search) return styles.cellSelected;
        return '';
    }

    return (
        <div className={styles.container}>
            <div className={styles.optionRow}>
                <label className={styles.optionLabel}>
                    <span className={styles.optionTitle}>zoek</span>
                    <input className={styles.textInput} value={search} onChange={e => setSearch(e.target.value)} />
                </label>
                {SUGGESTIONS.map(s => (
                    <button
                        key={s}
                        className={`${styles.segment} ${search === s ? styles.segmentActive : ''}`}
                        style={{ borderRadius: 6 }}
                        onClick={() => setSearch(s)}
                    >
                        "{s}"
                    </button>
                ))}
            </div>

            <div className={styles.panel}>
                <div className={styles.panelHeader}>
                    <span>fruit</span>
                    <span className={styles.panelNote}>groen = eerste, oranje = laatste</span>
                </div>
                <div className={styles.cells}>
                    {DATA.map((v, i) => (
                        <div key={i} className={styles.cellWrap}>
                            <span className={styles.cellIndex}>{i}</span>
                            <div className={`${styles.cell} ${cellClass(i)}`}>"{v}"</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.codePanel}>
                <div className={styles.codeHeader}>zoeken.ts</div>
                <div className={styles.codeBody}>
                    <div className={styles.codeLine}>
                        <span className={styles.varName}>fruit</span><span className={styles.punct}>.</span>
                        <span className={styles.fn}>indexOf</span><span className={styles.punct}>(</span>
                        <span className={styles.str}>"{search}"</span><span className={styles.punct}>);</span>
                        <span className={styles.comment}>{'      // '}</span>
                        <span key={`f-${first}`} className={`${first === -1 ? styles.falseText : styles.trueText} ${styles.appear}`} style={{ display: 'inline-block' }}>{first}</span>
                    </div>
                    <div className={styles.codeLine}>
                        <span className={styles.varName}>fruit</span><span className={styles.punct}>.</span>
                        <span className={styles.fn}>lastIndexOf</span><span className={styles.punct}>(</span>
                        <span className={styles.str}>"{search}"</span><span className={styles.punct}>);</span>
                        <span className={styles.comment}>{'  // '}</span>
                        <span key={`l-${last}`} className={`${last === -1 ? styles.falseText : styles.trueText} ${styles.appear}`} style={{ display: 'inline-block' }}>{last}</span>
                    </div>
                    <div className={styles.codeLine}>
                        <span className={styles.varName}>fruit</span><span className={styles.punct}>.</span>
                        <span className={styles.fn}>includes</span><span className={styles.punct}>(</span>
                        <span className={styles.str}>"{search}"</span><span className={styles.punct}>);</span>
                        <span className={styles.comment}>{'     // '}</span>
                        <span key={`i-${found}`} className={`${found ? styles.trueText : styles.falseText} ${styles.appear}`} style={{ display: 'inline-block' }}>{String(found)}</span>
                    </div>
                </div>
            </div>

            {!found && (
                <div className={styles.explain}>
                    <code>"{search}"</code> komt niet voor in de array: <code>indexOf</code> en <code>lastIndexOf</code> geven
                    dan <code>-1</code> terug en <code>includes</code> geeft <code>false</code>.
                    {search.toLowerCase() !== search && DATA.includes(search.toLowerCase()) && (
                        <> Let op: zoeken is hoofdlettergevoelig, <code>"{search}"</code> is niet hetzelfde als <code>"{search.toLowerCase()}"</code>.</>
                    )}
                </div>
            )}
        </div>
    );
}

export default withMaximize(InteractiveIndexOf);
