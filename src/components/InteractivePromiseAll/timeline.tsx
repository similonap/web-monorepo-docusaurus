import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

// ---------------------------------------------------------------------------
// Shared building blocks for the Promise timeline demos
// (InteractivePromiseAll and InteractivePromiseAllSettled).
// ---------------------------------------------------------------------------

export const DEFAULT_DURATION_OPTIONS = [1000, 2000, 3000];

export function formatSeconds(ms: number): string {
    return `${(ms / 1000).toFixed(1).replace('.', ',')} s`;
}

export function clamp01(n: number): number {
    return Math.min(1, Math.max(0, n));
}

/** Real-time clock that runs from 0 to `total` ms. */
export function useTimeline(total: number) {
    const [elapsed, setElapsed] = useState(0);
    const [running, setRunning] = useState(false);
    const rafRef = useRef<number | null>(null);

    const stop = useCallback(() => {
        if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
    }, []);

    useEffect(() => stop, [stop]);

    const start = useCallback(() => {
        stop();
        setElapsed(0);
        setRunning(true);
        const t0 = performance.now();
        const tick = (now: number) => {
            const e = Math.min(now - t0, total);
            setElapsed(e);
            if (e < total) {
                rafRef.current = requestAnimationFrame(tick);
            } else {
                rafRef.current = null;
                setRunning(false);
            }
        };
        rafRef.current = requestAnimationFrame(tick);
    }, [total, stop]);

    const reset = useCallback(() => {
        stop();
        setRunning(false);
        setElapsed(0);
    }, [stop]);

    const started = running || elapsed > 0;
    const finished = started && !running && elapsed >= total;

    return { elapsed, running, started, finished, start, reset };
}

interface DurationPickerProps {
    labels: React.ReactNode[];
    ariaLabels: string[];
    durations: number[];
    options: number[];
    disabled: boolean;
    onChange: (index: number, value: number) => void;
}

export function DurationPicker({ labels, ariaLabels, durations, options, disabled, onChange }: DurationPickerProps) {
    return (
        <div className={styles.settings}>
            <div className={styles.settingsTitle}>Hoe lang duurt elke promise?</div>
            {labels.map((label, i) => (
                <div className={styles.setting} key={i}>
                    <span className={styles.settingLabel}>{label}</span>
                    <div className={styles.segmented} role="group" aria-label={`Duur van ${ariaLabels[i]}`}>
                        {options.map(option => (
                            <button
                                key={option}
                                type="button"
                                className={`${styles.segment} ${durations[i] === option ? styles.segmentActive : ''}`}
                                onClick={() => onChange(i, option)}
                                disabled={disabled}
                                aria-pressed={durations[i] === option}
                            >
                                {formatSeconds(option)}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

/** Row with second ticks, aligned with the tracks above it. */
export function TimeAxis({ scale }: { scale: number }) {
    const ticks: number[] = [];
    for (let t = 0; t <= scale; t += 1000) ticks.push(t);
    return (
        <div className={styles.row}>
            <span className={styles.rowLabel} />
            <div className={styles.axis}>
                {ticks.map(t => (
                    <span key={t} className={styles.tick} style={{ left: `${(t / scale) * 100}%` }}>
                        {t / 1000}s
                    </span>
                ))}
            </div>
        </div>
    );
}

interface TimelineControlsProps {
    running: boolean;
    started: boolean;
    finished: boolean;
    onStart: () => void;
    onReset: () => void;
}

export function TimelineControls({ running, started, finished, onStart, onReset }: TimelineControlsProps) {
    return (
        <div className={styles.controls}>
            <button type="button" className={styles.btnPrimary} onClick={onStart} disabled={running}>
                {finished ? '↺ Opnieuw' : running ? 'Bezig...' : '▶ Start'}
            </button>
            <button type="button" className={styles.btnSecondary} onClick={onReset} disabled={!started}>
                ↺ Reset
            </button>
        </div>
    );
}
