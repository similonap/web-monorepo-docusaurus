import React, { useState } from 'react';
import { withMaximize } from '../shared/Maximizable';
import styles from '../shared/ArrayDemo.module.css';

// ---------------------------------------------------------------------------
// InteractivePushPop — speel met push, pop, unshift en shift op één array.
// Elke klik voert de methode uit, toont de code en de teruggegeven waarde,
// en markeert waar het element bijkomt of verdwijnt.
// ---------------------------------------------------------------------------

type Method = 'push' | 'pop' | 'unshift' | 'shift';

interface Item {
    id: number;
    value: string;
}

interface LogEntry {
    id: number;
    call: string;
    result: string;
}

const START = ['Bert', 'Cedric'];
const NAMES = ['Andie', 'Debbie', 'Emma', 'Fatima', 'Gert', 'Hanne', 'Ilias', 'Jana', 'Kobe', 'Lina'];
const MAX_ITEMS = 8;

let nextId = 1;
const makeItems = (values: string[]): Item[] => values.map(value => ({ id: nextId++, value }));

function InteractivePushPop() {
    const [items, setItems] = useState<Item[]>(() => makeItems(START));
    const [nameIndex, setNameIndex] = useState(0);
    const [log, setLog] = useState<LogEntry[]>([]);
    const [lastAdded, setLastAdded] = useState<number | null>(null);
    const [removed, setRemoved] = useState<{ value: string; side: 'start' | 'end' } | null>(null);

    const nextName = NAMES[nameIndex % NAMES.length];
    const isFull = items.length >= MAX_ITEMS;

    function run(method: Method) {
        let result: string;
        let call: string;
        if (method === 'push' || method === 'unshift') {
            const [item] = makeItems([nextName]);
            const next = method === 'push' ? [...items, item] : [item, ...items];
            setItems(next);
            setNameIndex(i => i + 1);
            setLastAdded(item.id);
            setRemoved(null);
            call = `names.${method}("${item.value}")`;
            result = String(next.length);
        } else {
            const removedItem = method === 'pop' ? items[items.length - 1] : items[0];
            setItems(method === 'pop' ? items.slice(0, -1) : items.slice(1));
            setLastAdded(null);
            setRemoved(removedItem ? { value: removedItem.value, side: method === 'pop' ? 'end' : 'start' } : null);
            call = `names.${method}()`;
            result = removedItem ? `"${removedItem.value}"` : 'undefined';
        }
        setLog(l => [{ id: nextId++, call, result }, ...l]);
    }

    function reset() {
        setItems(makeItems(START));
        setNameIndex(0);
        setLog([]);
        setLastAdded(null);
        setRemoved(null);
    }

    const removedCell = removed && (
        <div className={styles.cellWrap}>
            <span className={styles.cellIndex}>weg</span>
            <div key={log[0]?.id} className={`${styles.cell} ${styles.cellRemoved} ${styles.cellNew}`}>"{removed.value}"</div>
        </div>
    );

    return (
        <div className={styles.container}>
            <div className={styles.controls}>
                <button className={styles.btnSecondary} onClick={() => run('unshift')} disabled={isFull}>
                    unshift("{nextName}")
                </button>
                <button className={styles.btnSecondary} onClick={() => run('shift')}>shift()</button>
                <button className={styles.btnSecondary} onClick={() => run('pop')}>pop()</button>
                <button className={styles.btnPrimary} onClick={() => run('push')} disabled={isFull}>
                    push("{nextName}")
                </button>
            </div>

            <div className={styles.panel}>
                <div className={styles.panelHeader}>
                    <span>names</span>
                    <span className={styles.panelNote}>length: {items.length}</span>
                </div>
                <div className={styles.cells}>
                    {removed?.side === 'start' && removedCell}
                    {items.length === 0 && !removed && (
                        <div className={styles.cellWrap}>
                            <span className={styles.cellIndex}>&nbsp;</span>
                            <div className={`${styles.cell} ${styles.cellEmpty}`}>leeg</div>
                        </div>
                    )}
                    {items.map((item, i) => (
                        <div key={item.id} className={styles.cellWrap}>
                            <span className={styles.cellIndex}>{i}</span>
                            <div className={`${styles.cell} ${item.id === lastAdded ? `${styles.cellSelected} ${styles.cellNew}` : ''}`}>
                                "{item.value}"
                            </div>
                        </div>
                    ))}
                    {removed?.side === 'end' && removedCell}
                </div>
                <div className={styles.panelNote}>
                    ← begin: <code>unshift</code> / <code>shift</code> &nbsp;·&nbsp; einde: <code>push</code> / <code>pop</code> →
                </div>
            </div>

            <div className={styles.log}>
                {log.length === 0 ? (
                    <span className={styles.logEmpty}>Klik op een knop om een methode uit te voeren.</span>
                ) : (
                    log.map((entry, i) => (
                        <div key={entry.id} className={`${styles.codeLine} ${i === 0 ? styles.codeLineActive : ''}`}>
                            <span className={styles.varName}>{entry.call}</span>
                            <span className={styles.comment}>{'  // geeft '}{entry.result}{' terug'}</span>
                        </div>
                    ))
                )}
            </div>

            <div className={styles.controls}>
                <button className={styles.btnSecondary} onClick={reset}>↺ Reset</button>
            </div>
        </div>
    );
}

export default withMaximize(InteractivePushPop);
