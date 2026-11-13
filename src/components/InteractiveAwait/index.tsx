import React, { useCallback, useEffect, useState } from 'react';
import { withMaximize } from '../shared/Maximizable';
import ReduceControls from '../shared/ReduceControls';
import ipa from '../InteractivePromiseAll/styles.module.css';
import styles from './styles.module.css';

// ---------------------------------------------------------------------------
// Code shown in the demo (one entry per line, pre-coloured)
// ---------------------------------------------------------------------------

const K = ({ children }: { children: React.ReactNode }) => <span className={styles.kw}>{children}</span>;
const F = ({ children }: { children: React.ReactNode }) => <span className={styles.fn}>{children}</span>;
const S = ({ children }: { children: React.ReactNode }) => <span className={styles.str}>{children}</span>;
const N = ({ children }: { children: React.ReactNode }) => <span className={styles.num}>{children}</span>;

const CODE: React.ReactNode[] = [
    <><K>async function</K> <F>calculate</F>() {'{'}</>,
    <>    console.<F>log</F>(<S>"start"</S>);</>,
    <>    <K>const</K> result = <K>await</K> <F>multiply</F>(<N>2</N>, <N>2</N>);</>,
    <>    console.<F>log</F>(<S>"resultaat:"</S>, result);</>,
    <>{'}'}</>,
    <></>,
    <><F>calculate</F>();</>,
    <>console.<F>log</F>(<S>"na calculate()"</S>);</>,
];

// ---------------------------------------------------------------------------
// Steps
// ---------------------------------------------------------------------------

type FnState = 'idle' | 'running' | 'paused' | 'done';
type PromiseState = 'none' | 'pending' | 'fulfilled';

interface Step {
    line: number | null;
    fn: FnState;
    promise: PromiseState;
    timer: boolean; // the 1 s timer runs during this step
    output: string[];
    text: React.ReactNode;
}

const STEPS: Step[] = [
    {
        line: 6, fn: 'running', promise: 'none', timer: false, output: [],
        text: <>Het programma roept <code>calculate()</code> op. De functie begint meteen te lopen.</>,
    },
    {
        line: 1, fn: 'running', promise: 'none', timer: false, output: ['start'],
        text: <>De eerste regel van <code>calculate</code> toont <code>start</code>.</>,
    },
    {
        line: 2, fn: 'running', promise: 'pending', timer: false, output: ['start'],
        text: <><code>multiply(2, 2)</code> start een timer van 1 seconde en geeft meteen een promise terug. Die is nog <code>pending</code>.</>,
    },
    {
        line: 2, fn: 'paused', promise: 'pending', timer: false, output: ['start'],
        text: <><code>await</code>: de promise is nog niet klaar, dus <code>calculate</code> pauzeert hier. Het programma gaat verder na de aanroep <code>calculate()</code>.</>,
    },
    {
        line: 7, fn: 'paused', promise: 'pending', timer: false, output: ['start', 'na calculate()'],
        text: <>De volgende regel van het programma toont <code>na calculate()</code>, terwijl <code>calculate</code> nog wacht.</>,
    },
    {
        line: null, fn: 'paused', promise: 'pending', timer: true, output: ['start', 'na calculate()'],
        text: <>Het programma heeft niets meer te doen. Het wacht tot de timer van <code>multiply</code> afloopt.</>,
    },
    {
        line: 2, fn: 'running', promise: 'fulfilled', timer: false, output: ['start', 'na calculate()'],
        text: <>De promise is <code>fulfilled</code> met de waarde <code>4</code>. <code>calculate</code> gaat verder: <code>await</code> geeft <code>4</code> terug en dat komt in <code>result</code>.</>,
    },
    {
        line: 3, fn: 'running', promise: 'fulfilled', timer: false, output: ['start', 'na calculate()', 'resultaat: 4'],
        text: <>De laatste regel van <code>calculate</code> toont <code>resultaat: 4</code>.</>,
    },
    {
        line: null, fn: 'done', promise: 'fulfilled', timer: false, output: ['start', 'na calculate()', 'resultaat: 4'],
        text: <><code>calculate</code> is klaar. Merk de volgorde in de console op: <code>na calculate()</code> kwam vóór het resultaat.</>,
    },
];

const AWAIT_LINE = 2;
const STEP_MS = 1800;
const TIMER_STEP_MS = 1400;

const FN_LABEL: Record<FnState, string> = {
    idle: 'nog niet opgeroepen',
    running: 'bezig',
    paused: 'gepauzeerd (wacht op promise)',
    done: 'klaar',
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function InteractiveAwait() {
    const [stepIndex, setStepIndex] = useState(-1);
    const [isPlaying, setIsPlaying] = useState(false);

    const isDone = stepIndex >= STEPS.length - 1;
    const step: Step | null = stepIndex >= 0 ? STEPS[stepIndex] : null;

    // Autoplay: advance one step at a time while playing.
    useEffect(() => {
        if (!isPlaying) return;
        if (isDone) { setIsPlaying(false); return; }
        const next = STEPS[stepIndex + 1];
        const delay = stepIndex < 0 ? 0 : (step?.timer ? TIMER_STEP_MS : STEP_MS);
        const id = window.setTimeout(() => setStepIndex(i => i + 1), next ? delay : 0);
        return () => window.clearTimeout(id);
    }, [isPlaying, stepIndex, isDone, step]);

    const reset = useCallback(() => {
        setIsPlaying(false);
        setStepIndex(-1);
    }, []);

    const handleStart = useCallback(() => {
        if (isDone) { setStepIndex(-1); setIsPlaying(true); return; }
        setIsPlaying(p => !p);
    }, [isDone]);

    const handleStep = useCallback(() => {
        setIsPlaying(false);
        setStepIndex(i => Math.min(i + 1, STEPS.length - 1));
    }, []);

    const fn: FnState = step?.fn ?? 'idle';
    const promise: PromiseState = step?.promise ?? 'none';
    const output = step?.output ?? [];
    const timerDone = promise === 'fulfilled';

    return (
        <div className={ipa.container}>
            <div className={styles.layout}>
                {/* Code */}
                <div className={styles.codePanel}>
                    <div className={styles.codeHeader}>index.ts</div>
                    <div className={styles.codeBody}>
                        {CODE.map((line, i) => (
                            <div
                                key={i}
                                className={[
                                    styles.codeLine,
                                    step?.line === i ? styles.codeLineActive : '',
                                    fn === 'paused' && i === AWAIT_LINE ? styles.codeLinePaused : '',
                                ].join(' ')}
                            >
                                <span className={styles.ln}>{i + 1}</span>
                                <span className={styles.code}>{line}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* State */}
                <div className={styles.side}>
                    <div className={styles.stateRow}>
                        <span className={styles.stateKey}>calculate()</span>
                        <span className={[styles.badge, styles[`badge_${fn}`]].join(' ')}>{FN_LABEL[fn]}</span>
                    </div>

                    <div className={styles.stateRow}>
                        <span className={styles.stateKey}>multiply(2, 2)</span>
                        {promise === 'none' ? (
                            <span className={styles.muted}>nog geen promise</span>
                        ) : (
                            <span className={[styles.badge, promise === 'fulfilled' ? styles.badge_done : styles.badge_pending].join(' ')}>
                                {promise === 'fulfilled' ? 'fulfilled: 4' : 'pending'}
                            </span>
                        )}
                    </div>

                    <div className={styles.timer}>
                        <span className={styles.timerLabel}>timer 1 s</span>
                        <div className={styles.timerTrack}>
                            <div
                                className={styles.timerFill}
                                style={{
                                    width: timerDone ? '100%' : step?.timer ? '100%' : '0%',
                                    transitionDuration: step?.timer ? `${TIMER_STEP_MS}ms` : '0ms',
                                }}
                            />
                        </div>
                    </div>

                    <div className={styles.consoleLabel}>console</div>
                    <div className={styles.console}>
                        {output.length === 0 && <span className={styles.muted}>(leeg)</span>}
                        {output.map((line, i) => (
                            <div key={i} className={styles.consoleLine}>&gt; {line}</div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.explanation} aria-live="polite">
                {step ? (
                    <><strong>Stap {stepIndex + 1}/{STEPS.length}.</strong> {step.text}</>
                ) : (
                    <>Druk op <strong>Start</strong> of <strong>Stap</strong> om de code stap voor stap te volgen.</>
                )}
            </div>

            <ReduceControls
                isDone={isDone}
                stepIndex={stepIndex}
                isPlaying={isPlaying}
                onStart={handleStart}
                onStep={handleStep}
                onReset={reset}
                styles={ipa}
            />
        </div>
    );
}

export default withMaximize(InteractiveAwait);
