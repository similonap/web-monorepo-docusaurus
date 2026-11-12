import React, { useState } from 'react';
import { withMaximize } from '../shared/Maximizable';
import styles from '../InteractivePromiseAll/styles.module.css';
import {
    DEFAULT_DURATION_OPTIONS,
    DurationPicker,
    TimeAxis,
    TimelineControls,
    clamp01,
    formatSeconds,
    useTimeline,
} from '../InteractivePromiseAll/timeline';

// ---------------------------------------------------------------------------
// Types & defaults
// ---------------------------------------------------------------------------

export interface SettledTask {
    /** Code label of the call, e.g. `multiply(4, 10)` */
    label: string;
    outcome: 'fulfilled' | 'rejected';
    /** Resolved value, or the error message when rejected */
    value: string;
    /** Initial duration in milliseconds */
    duration: number;
}

interface InteractivePromiseAllSettledProps {
    tasks?: SettledTask[];
    durationOptions?: number[];
}

// Matches the `multiply` from the Catch section: rejects when the result is > 10.
const DEFAULT_TASKS: SettledTask[] = [
    { label: 'multiply(2, 2)', outcome: 'fulfilled', value: '4', duration: 2000 },
    { label: 'multiply(4, 10)', outcome: 'rejected', value: 'Result is greater than 10', duration: 1000 },
    { label: 'multiply(3, 3)', outcome: 'fulfilled', value: '9', duration: 3000 },
];

type Lane = 'all' | 'allSettled';

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function InteractivePromiseAllSettled({
    tasks = DEFAULT_TASKS,
    durationOptions = DEFAULT_DURATION_OPTIONS,
}: InteractivePromiseAllSettledProps) {
    const [durations, setDurations] = useState<number[]>(() => tasks.map(t => t.duration));

    // Timing model ----------------------------------------------------------
    const total = Math.max(...durations);
    const scale = total;

    // Promise.all rejects as soon as the first promise rejects.
    let failIndex = -1;
    tasks.forEach((task, i) => {
        if (task.outcome !== 'rejected') return;
        if (failIndex === -1 || durations[i] < durations[failIndex]) failIndex = i;
    });
    const failAt = failIndex === -1 ? null : durations[failIndex];
    const allEnd = failAt ?? total;

    const { elapsed, running, started, finished, start, reset } = useTimeline(total);

    const changeDuration = (index: number, value: number) => {
        reset();
        setDurations(prev => prev.map((d, i) => (i === index ? value : d)));
    };

    const callList = tasks.map(t => t.label).join(', ');
    const fulfilledValues = tasks.filter(t => t.outcome === 'fulfilled').map(t => t.value);

    // Rendering -------------------------------------------------------------
    function renderResult(lane: Lane, laneDone: boolean, laneFailed: boolean) {
        if (!started) return <span className={styles.pending}>nog niet gestart</span>;
        if (!laneDone) return <span className={styles.pending}>Promise {'{ <pending> }'}</span>;

        if (lane === 'all') {
            if (laneFailed) {
                return (
                    <>
                        <span className={styles.errorText}>
                            .catch() → Error: {tasks[failIndex].value}
                        </span>
                        <span className={styles.resultNote}>.then() wordt niet uitgevoerd</span>
                    </>
                );
            }
            return (
                <strong className={styles.resultValue}>
                    .then() → [{tasks.map(t => t.value).join(', ')}]
                </strong>
            );
        }

        return (
            <span className={styles.settledList}>
                <span>.then() → [</span>
                {tasks.map((task, i) => (
                    <span
                        key={i}
                        className={`${styles.settledLine} ${task.outcome === 'fulfilled' ? styles.statusOk : styles.statusErr}`}
                    >
                        {task.outcome === 'fulfilled'
                            ? `{ status: 'fulfilled', value: ${task.value} }`
                            : `{ status: 'rejected', reason: Error: ${task.value} }`}
                        {i < tasks.length - 1 ? ',' : ''}
                    </span>
                ))}
                <span>]</span>
            </span>
        );
    }

    function renderLane(lane: Lane) {
        const laneEnd = lane === 'all' ? allEnd : total;
        const laneDone = started && elapsed >= laneEnd;
        const laneFailed = lane === 'all' && laneDone && failAt !== null;
        const clock = Math.min(elapsed, laneEnd);
        const nowPos = (clock / scale) * 100;

        return (
            <div
                className={[
                    styles.lane,
                    laneFailed ? styles.laneFailed : laneDone ? styles.laneDone : '',
                ].join(' ')}
            >
                <div className={styles.laneHeader}>
                    <div>
                        <div className={styles.laneTitle}>
                            {lane === 'all' ? 'Promise.all' : 'Promise.allSettled'}
                        </div>
                        <code className={styles.laneCode}>
                            {lane === 'all' ? `Promise.all([${callList}])` : `Promise.allSettled([${callList}])`}
                        </code>
                    </div>
                    <div className={styles.clock}>
                        {laneFailed
                            ? `✗ ${formatSeconds(laneEnd)}`
                            : laneDone
                                ? `✓ ${formatSeconds(laneEnd)}`
                                : formatSeconds(clock)}
                    </div>
                </div>

                <div className={styles.rows}>
                    {tasks.map((task, i) => {
                        const progress = clamp01(elapsed / durations[i]);
                        const done = started && progress >= 1;
                        const active = started && progress > 0 && !done;
                        const rejected = done && task.outcome === 'rejected';
                        // After Promise.all rejected, every other outcome is thrown away.
                        const ignored = laneFailed && i !== failIndex;
                        return (
                            <div className={styles.row} key={i}>
                                <code className={styles.rowLabel}>{task.label}</code>
                                <div className={styles.track}>
                                    <div
                                        className={[
                                            styles.bar,
                                            active ? styles.barActive : '',
                                            done && !rejected ? styles.barDone : '',
                                            rejected ? styles.barError : '',
                                            ignored ? styles.barIgnored : '',
                                        ].join(' ')}
                                        style={{ left: 0, width: `${(durations[i] / scale) * 100}%` }}
                                    >
                                        <div className={styles.barFill} style={{ width: `${progress * 100}%` }} />
                                        <span className={styles.barText}>
                                            {rejected ? '✗ reject' : done ? `= ${task.value}` : ''}
                                            {ignored && <span className={styles.rank}>genegeerd</span>}
                                        </span>
                                    </div>
                                    {started && (
                                        <div
                                            className={`${styles.nowLine} ${laneFailed ? styles.nowLineError : ''}`}
                                            style={{ left: `${nowPos}%` }}
                                        />
                                    )}
                                </div>
                            </div>
                        );
                    })}
                    <TimeAxis scale={scale} />
                </div>

                <div className={styles.result}>
                    <span className={styles.resultLabel}>resultaat:</span>{' '}
                    {renderResult(lane, laneDone, laneFailed)}
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <DurationPicker
                labels={tasks.map(t => (
                    <>
                        <code>{t.label}</code>{' '}
                        <span className={t.outcome === 'fulfilled' ? styles.outcomeOk : styles.outcomeErr}>
                            {t.outcome === 'fulfilled' ? `resolve(${t.value})` : 'reject'}
                        </span>
                    </>
                ))}
                ariaLabels={tasks.map(t => t.label)}
                durations={durations}
                options={durationOptions}
                disabled={running}
                onChange={changeDuration}
            />

            {renderLane('all')}
            {renderLane('allSettled')}

            {finished && failAt !== null && (
                <div className={styles.summary}>
                    <p>
                        <strong>Promise.all</strong> werd al na <strong>{formatSeconds(failAt)}</strong> rejected,
                        zodra <code>{tasks[failIndex].label}</code> faalde. In de <code>catch</code> krijg je enkel
                        die fout: de resultaten {fulfilledValues.join(' en ')} ben je kwijt. De andere promises
                        liepen wel gewoon verder, Promise.all negeert enkel hun resultaat.
                    </p>
                    <p>
                        <strong>Promise.allSettled</strong> wacht tot elke promise klaar is ({formatSeconds(total)})
                        en faalt nooit. Je krijgt voor elke promise een object met een <code>status</code>:
                        {' '}<code>value</code> als ze gelukt is, <code>reason</code> als ze mislukt is.
                    </p>
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

export default withMaximize(InteractivePromiseAllSettled);
