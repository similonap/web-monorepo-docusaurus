import React, { useState } from 'react';
import { withMaximize } from '../shared/Maximizable';
import styles from './styles.module.css';
import {
    DEFAULT_DURATION_OPTIONS,
    DurationPicker,
    TimeAxis,
    TimelineControls,
    clamp01,
    formatSeconds,
    useTimeline,
} from './timeline';

// ---------------------------------------------------------------------------
// Types & defaults
// ---------------------------------------------------------------------------

export interface PromiseTask {
    /** Code label of the call, e.g. `multiply(2, 2)` */
    label: string;
    /** Value the promise resolves to, e.g. `4` */
    result: string;
    /** Initial duration in milliseconds */
    duration: number;
}

interface InteractivePromiseAllProps {
    tasks?: PromiseTask[];
    /** Durations (ms) the student can choose from per task */
    durationOptions?: number[];
}

const DEFAULT_TASKS: PromiseTask[] = [
    { label: 'multiply(2, 2)', result: '4', duration: 1000 },
    { label: 'multiply(3, 3)', result: '9', duration: 1000 },
    { label: 'multiply(4, 4)', result: '16', duration: 1000 },
];

type Lane = 'sequential' | 'parallel';

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function InteractivePromiseAll({
    tasks = DEFAULT_TASKS,
    durationOptions = DEFAULT_DURATION_OPTIONS,
}: InteractivePromiseAllProps) {
    const [durations, setDurations] = useState<number[]>(() => tasks.map(t => t.duration));

    // Timing model ----------------------------------------------------------
    const seqStarts: number[] = [];
    durations.forEach((_, i) => {
        seqStarts.push(i === 0 ? 0 : seqStarts[i - 1] + durations[i - 1]);
    });
    const seqTotal = durations.reduce((sum, d) => sum + d, 0);
    const parTotal = Math.max(...durations);
    const scale = seqTotal; // full width of every track

    // Order in which the parallel promises finish (1 = first, ties share a rank)
    const finishRank = durations.map(d => 1 + durations.filter(other => other < d).length);
    // True when a later promise in the array finishes before an earlier one
    const orderDiffers = durations.some((d, i) => durations.slice(i + 1).some(later => later < d));

    const { elapsed, running, started, finished, start, reset } = useTimeline(seqTotal);

    const changeDuration = (index: number, value: number) => {
        reset();
        setDurations(prev => prev.map((d, i) => (i === index ? value : d)));
    };

    // Rendering -------------------------------------------------------------
    const resultArray = `[${tasks.map(t => t.result).join(', ')}]`;

    function renderLane(lane: Lane) {
        const starts = lane === 'sequential' ? seqStarts : durations.map(() => 0);
        const total = lane === 'sequential' ? seqTotal : parTotal;
        const laneDone = started && elapsed >= total;
        const clock = Math.min(elapsed, total);
        const nowPos = (clock / scale) * 100;

        return (
            <div className={`${styles.lane} ${laneDone ? styles.laneDone : ''}`}>
                <div className={styles.laneHeader}>
                    <div>
                        <div className={styles.laneTitle}>
                            {lane === 'sequential' ? 'Na elkaar' : 'Promise.all'}
                        </div>
                        <code className={styles.laneCode}>
                            {lane === 'sequential'
                                ? '.then() binnen .then()'
                                : `Promise.all([${tasks.map(t => t.label).join(', ')}])`}
                        </code>
                    </div>
                    <div className={styles.clock}>
                        {laneDone ? `✓ ${formatSeconds(total)}` : formatSeconds(clock)}
                    </div>
                </div>

                <div className={styles.rows}>
                    {tasks.map((task, i) => {
                        const progress = clamp01((elapsed - starts[i]) / durations[i]);
                        const done = started && progress >= 1;
                        const active = started && progress > 0 && !done;
                        const waiting = started && progress === 0;
                        return (
                            <div className={styles.row} key={i}>
                                <code className={styles.rowLabel}>{task.label}</code>
                                <div className={styles.track}>
                                    <div
                                        className={[
                                            styles.bar,
                                            waiting ? styles.barWaiting : '',
                                            active ? styles.barActive : '',
                                            done ? styles.barDone : '',
                                        ].join(' ')}
                                        style={{
                                            left: `${(starts[i] / scale) * 100}%`,
                                            width: `${(durations[i] / scale) * 100}%`,
                                        }}
                                    >
                                        <div className={styles.barFill} style={{ width: `${progress * 100}%` }} />
                                        <span className={styles.barText}>
                                            {done ? `= ${task.result}` : waiting && lane === 'sequential' ? 'wacht' : ''}
                                            {done && lane === 'parallel' && orderDiffers && (
                                                <span className={styles.rank}>{finishRank[i]}e</span>
                                            )}
                                        </span>
                                    </div>
                                    {started && (
                                        <div className={styles.nowLine} style={{ left: `${nowPos}%` }} />
                                    )}
                                </div>
                            </div>
                        );
                    })}
                    <TimeAxis scale={scale} />
                </div>

                <div className={styles.result}>
                    <span className={styles.resultLabel}>resultaat:</span>{' '}
                    {laneDone ? (
                        <strong className={styles.resultValue}>{resultArray}</strong>
                    ) : started ? (
                        <span className={styles.pending}>
                            {lane === 'parallel' ? 'Promise { <pending> }' : 'nog bezig...'}
                        </span>
                    ) : (
                        <span className={styles.pending}>nog niet gestart</span>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <DurationPicker
                labels={tasks.map(t => <code>{t.label}</code>)}
                ariaLabels={tasks.map(t => t.label)}
                durations={durations}
                options={durationOptions}
                disabled={running}
                onChange={changeDuration}
            />

            {renderLane('sequential')}
            {renderLane('parallel')}

            {finished && (
                <div className={styles.summary}>
                    <p>
                        <strong>Promise.all</strong> was <strong>{formatSeconds(seqTotal - parTotal)}</strong> sneller.
                        Na elkaar wacht je de som van alle promises ({formatSeconds(seqTotal)}),
                        met Promise.all enkel op de traagste ({formatSeconds(parTotal)}).
                    </p>
                    {orderDiffers && (
                        <p>
                            De promises waren in een andere volgorde klaar, maar het resultaat staat
                            toch in de volgorde van de array: <code>{resultArray}</code>.
                        </p>
                    )}
                </div>
            )}

            <TimelineControls
                running={running}
                started={started}
                finished={finished}
                onStart={start}
                onReset={reset}
            />
        </div>
    );
}

export default withMaximize(InteractivePromiseAll);
