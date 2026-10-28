import React, { useRef, useCallback, useState } from 'react';
import { withMaximize } from '../shared/Maximizable';
import styles from './styles.module.css';
import { useReduceAnimation } from '../shared/useReduceAnimation';
import type { AnimationRefs, BadgeAnimation } from '../shared/useReduceAnimation';
import ReduceControls from '../shared/ReduceControls';
import FlyingBadgeDisplay from '../shared/FlyingBadgeDisplay';
import { useNarrationScript } from '../shared/useNarration';
import { NarrationToggles, NarrationSubtitle } from '../shared/NarrationControls';
import narrationScript from './narration.json';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type FilterStep =
    | { type: 'highlight-element'; index: number }
    | { type: 'move-to-param'; index: number; value: number }
    | { type: 'enter-body'; index: number; value: number }
    | { type: 'show-result'; index: number; value: number; passes: boolean }
    | { type: 'push-to-dest'; index: number; value: number }
    | { type: 'add-to-dest'; index: number; results: number[] }
    | { type: 'reject-element'; index: number }
    | { type: 'done'; result: number[] };

interface VisualState {
    highlightedSourceIndex: number | null;
    paramHighlighted: boolean;
    paramValue: number | null;
    valueArriveKey: number;
    bodyValue: number | null;
    bodyPasses: boolean | null;
    rejectedIndices: number[];
    destResults: number[];
    isDone: boolean;
    finalResult: number[] | null;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const DATA = [1, 2, 3, 4, 5];

const STEP_DURATION: Record<FilterStep['type'], number> = {
    'highlight-element': 600,
    'move-to-param': 800,
    'enter-body': 700,
    'show-result': 1000,
    'push-to-dest': 800,
    'add-to-dest': 400,
    'reject-element': 700,
    'done': 0,
};

// ---------------------------------------------------------------------------
// Step generation
// ---------------------------------------------------------------------------

function generateSteps(): FilterStep[] {
    const steps: FilterStep[] = [];
    const results: number[] = [];

    for (let i = 0; i < DATA.length; i++) {
        const value = DATA[i];
        const passes = value % 2 === 0;
        steps.push({ type: 'highlight-element', index: i });
        steps.push({ type: 'move-to-param', index: i, value });
        steps.push({ type: 'enter-body', index: i, value });
        steps.push({ type: 'show-result', index: i, value, passes });
        if (passes) {
            steps.push({ type: 'push-to-dest', index: i, value });
            results.push(value);
            steps.push({ type: 'add-to-dest', index: i, results: [...results] });
        } else {
            steps.push({ type: 'reject-element', index: i });
        }
    }
    steps.push({ type: 'done', result: [...results] });
    return steps;
}

const STEPS = generateSteps();

// Fragment-id per stap, bv. "show-result-2" (zie narration.json).
function clipId(step: FilterStep): string {
    return step.type === 'done' ? 'done' : `${step.type}-${step.index}`;
}

// ---------------------------------------------------------------------------
// Visual state derivation
// ---------------------------------------------------------------------------

function deriveVisualState(stepIndex: number): VisualState {
    const state: VisualState = {
        highlightedSourceIndex: null,
        paramHighlighted: false,
        paramValue: null,
        valueArriveKey: 0,
        bodyValue: null,
        bodyPasses: null,
        rejectedIndices: [],
        destResults: [],
        isDone: false,
        finalResult: null,
    };
    if (stepIndex < 0) return state;

    for (let i = 0; i <= stepIndex; i++) {
        const step = STEPS[i];
        switch (step.type) {
            case 'highlight-element':
                state.highlightedSourceIndex = step.index;
                state.paramHighlighted = false;
                state.paramValue = null;
                state.bodyValue = null;
                state.bodyPasses = null;
                break;
            case 'move-to-param':
                // De waarde staat in de parameter zodra de badge geland is (zie paramValue
                // in de component), dus tijdens de uitleg en niet pas bij de volgende stap.
                state.paramHighlighted = true;
                state.paramValue = step.value;
                state.valueArriveKey = i;
                break;
            case 'enter-body':
                state.paramHighlighted = false;
                state.paramValue = step.value;
                state.bodyValue = step.value;
                break;
            case 'show-result':
                state.bodyPasses = step.passes;
                break;
            case 'push-to-dest':
                break;
            case 'add-to-dest':
                state.destResults = [...step.results];
                state.bodyValue = null;
                state.bodyPasses = null;
                state.paramValue = null;
                break;
            case 'reject-element':
                state.rejectedIndices = [...state.rejectedIndices, step.index];
                state.bodyValue = null;
                state.bodyPasses = null;
                state.paramValue = null;
                break;
            case 'done':
                state.isDone = true;
                state.finalResult = step.result;
                break;
        }
    }
    return state;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function InteractiveFilter() {
    const [typeInference, setTypeInference] = useState(false);
    const [returnStatement, setReturnStatement] = useState(false);
    const narration = useNarrationScript(narrationScript, STEPS, clipId);

    const calcResultRef = useRef<HTMLSpanElement>(null);

    const getBadgeAnimation = useCallback((
        step: FilterStep,
        { arrayElementRefs, accBoxRef, curBoxRef }: AnimationRefs,
    ): BadgeAnimation | null => {
        if (step.type === 'move-to-param')
            return {
                source: { current: arrayElementRefs.current[step.index] },
                dest: accBoxRef,
                value: String(step.value),
            };
        if (step.type === 'push-to-dest')
            return {
                source: calcResultRef,
                dest: curBoxRef,
                value: String(step.value),
            };
        return null;
    }, []);

    const {
        stepIndex, isPlaying, badge, isDone, isRunning, subtitle,
        containerRef, accBoxRef, curBoxRef, arrayElementRefs,
        handleStart, handleStep, reset,
    } = useReduceAnimation({
        steps: STEPS,
        stepDuration: STEP_DURATION,
        getBadgeAnimation,
        narration: narration.config,
    });

    const vis = deriveVisualState(stepIndex);
    // Zolang de badge naar de parameter vliegt, blijft "element" staan.
    const paramValue = STEPS[stepIndex]?.type === 'move-to-param' && badge ? null : vis.paramValue;

    function getSourceClass(i: number) {
        const isHighlighted = vis.highlightedSourceIndex === i;
        const isRejected = vis.rejectedIndices.includes(i);
        const isProcessed = vis.isDone || (isRunning && vis.highlightedSourceIndex !== null && i < vis.highlightedSourceIndex);

        // Een afgewezen element wordt meteen rood, niet pas bij het volgende element.
        return [
            styles.arrayElement,
            isHighlighted && !isRejected ? styles.arrayElementHighlighted : '',
            isRejected ? styles.arrayElementRejected : '',
            isProcessed && !isRejected ? styles.arrayElementUsed : '',
        ].join(' ');
    }

    function renderBody() {
        if (vis.bodyValue === null) {
            return (
                <>
                    <span className={styles.paramName}>element</span>
                    <span className={styles.punct}> % </span>
                    <span className={styles.numLit}>2</span>
                    <span className={styles.punct}> === </span>
                    <span className={styles.numLit}>0</span>
                </>
            );
        }
        return (
            <>
                <span className={styles.substituted}>
                    <span key={`body-${vis.valueArriveKey}`} className={styles.substitutedValue}>{vis.bodyValue}</span>
                </span>
                <span className={styles.punct}> % </span>
                <span className={styles.numLit}>2</span>
                <span className={styles.punct}> === </span>
                <span className={styles.numLit}>0</span>
                {vis.bodyPasses !== null && (
                    <span className={vis.bodyPasses ? styles.resultTrue : styles.resultFalse}>
                        {' = '}
                        <span ref={calcResultRef} className={styles.resultValue}>
                            {String(vis.bodyPasses)}
                        </span>
                    </span>
                )}
            </>
        );
    }

    return (
        <div className={styles.container} ref={containerRef}>
            {/* ---- Checkboxes ---- */}
            <div className={styles.checkboxRow}>
                <label className={styles.checkboxLabel}>
                    <input
                        type="checkbox"
                        checked={typeInference}
                        onChange={e => setTypeInference(e.target.checked)}
                    />
                    gebruik type inference
                </label>
                <label className={styles.checkboxLabel}>
                    <input
                        type="checkbox"
                        checked={returnStatement}
                        onChange={e => setReturnStatement(e.target.checked)}
                    />
                    gebruik return statement
                </label>
                <NarrationToggles {...narration} styles={styles} />
            </div>

            {/* ---- Code Panel ---- */}
            <div className={styles.codePanel}>
                <div className={styles.codeHeader}>filter-even.ts</div>
                <div className={styles.codeBody}>
                    <div className={styles.codeLine}>
                        <span className={styles.kwLet}>let</span>
                        {' '}
                        <span className={styles.varName}>numbers</span>
                        <span className={styles.punct}>: </span>
                        <span className={styles.typeName}>number</span>
                        <span className={styles.punct}>[] = [</span>
                        <span className={styles.numLit}>1, 2, 3, 4, 5</span>
                        <span className={styles.punct}>];</span>
                    </div>
                    <div className={styles.codeBlankLine}>&nbsp;</div>
                    <div className={styles.codeLine}>
                        <span className={styles.kwLet}>let</span>
                        {' '}
                        <span className={styles.varName}>even</span>
                        <span className={styles.punct}>: </span>
                        <span className={styles.typeName}>number</span>
                        <span className={styles.punct}>{'[] = numbers.filter('}</span>
                        <div
                            ref={accBoxRef}
                            className={`${styles.paramArea} ${vis.paramHighlighted ? styles.tokenHighlight : ''}`}
                        >
                            <span className={styles.punct}>(</span>
                            {paramValue !== null ? (
                                <span className={styles.substituted}>
                                    <span key={`param-${vis.valueArriveKey}`} className={styles.substitutedValue}>
                                        {paramValue}
                                    </span>
                                </span>
                            ) : (
                                <span className={styles.paramName}>element</span>
                            )}
                            {/* Het type blijft staan, ook als de waarde ingevuld is. */}
                            {!typeInference && (
                                <>
                                    <span className={styles.punct}>: </span>
                                    <span className={styles.typeName}>number</span>
                                </>
                            )}
                            <span className={styles.punct}>)</span>
                        </div>
                        {!typeInference && (
                            <>
                                <span className={styles.punct}>: </span>
                                <span className={styles.typeName}>boolean</span>
                            </>
                        )}
                        <span className={styles.punct}>{returnStatement ? ' => {' : ' => '}</span>
                        {returnStatement && <span className={styles.kwLet}>{' return '}</span>}
                        <span className={vis.bodyValue !== null ? styles.bodyHighlight : ''}>
                            {renderBody()}
                        </span>
                        {returnStatement && <span className={styles.punct}>{'; }'}</span>}
                        <span className={styles.punct}>{');'}</span>
                    </div>
                </div>
            </div>

            {/* ---- Two-column Array Panel ---- */}
            <div className={styles.columnsPanel}>
                {/* Source column */}
                <div className={styles.columnSection}>
                    <div className={styles.columnHeader}>numbers</div>
                    <div className={styles.columnElements}>
                        {DATA.map((val, i) => (
                            <div
                                key={i}
                                ref={el => { arrayElementRefs.current[i] = el; }}
                                className={getSourceClass(i)}
                            >
                                {val}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Destination column — grows as elements pass */}
                <div className={styles.columnSection}>
                    <div className={styles.columnHeader}>even</div>
                    <div ref={curBoxRef} className={styles.columnElements}>
                        {vis.destResults.length === 0 ? (
                            <span className={styles.destPlaceholder}>–</span>
                        ) : (
                            vis.destResults.map((n, i) => (
                                <div
                                    key={`dest-${n}-${i}`}
                                    className={`${styles.destElement} ${i === vis.destResults.length - 1 ? styles.destElementNew : ''}`}
                                >
                                    {n}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

            {/* ---- Done result ---- */}
            {vis.isDone && (
                <div className={`${styles.resultPanel} ${styles.resultPanelDone}`}>
                    <span className={styles.resultDone}>
                        even = <strong>[{vis.finalResult!.join(', ')}]</strong>
                    </span>
                </div>
            )}

            <NarrationSubtitle enabled={narration.subtitles} text={subtitle} />

            <ReduceControls
                isDone={isDone}
                stepIndex={stepIndex}
                isPlaying={isPlaying}
                onStart={handleStart}
                onStep={handleStep}
                onReset={reset}
                styles={styles}
            />
            <FlyingBadgeDisplay badge={badge} styles={styles} />
        </div>
    );
}

export default withMaximize(InteractiveFilter);
