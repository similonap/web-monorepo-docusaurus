import React, { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { withMaximize } from '../shared/Maximizable';
import styles from './styles.module.css';

// ---------------------------------------------------------------------------
// InteractiveFlexbox: een code-editor naast een telefoonscherm. Je past de
// React Native-code zelf aan en het scherm (met main en cross axis) volgt live.
// De layout volgt de regels van React Native (Yoga), niet die van het web:
//   - elke View is een flex container met flexDirection "column"
//   - flexShrink is 0, alignContent is "flex-start"
//   - flex: n (n > 0) betekent flexGrow: n, flexShrink: 0, flexBasis: 0
//   - position "absolute" is relatief t.o.v. de parent View
// ---------------------------------------------------------------------------

type Value = string | number;
type Style = Record<string, Value>;

interface Layout {
    parent: Style;
    children: Style[];
}

interface Problem {
    line: number;
    message: string;
}

interface ParseResult {
    layout: Layout | null;
    error: Problem | null;
    warnings: Problem[];
}

type Preset = 'flexDirection' | 'flex' | 'justifyContent' | 'alignItems' | 'alignSelf' | 'flexWrap' | 'absolute' | 'playground';

// ---------------------------------------------------------------------------
// React Native style properties
// ---------------------------------------------------------------------------

const ENUMS: Record<string, string[]> = {
    flexDirection: ['column', 'row', 'column-reverse', 'row-reverse'],
    justifyContent: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end', 'baseline'],
    alignSelf: ['auto', 'stretch', 'flex-start', 'center', 'flex-end', 'baseline'],
    flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
    alignContent: ['flex-start', 'center', 'flex-end', 'stretch', 'space-between', 'space-around', 'space-evenly'],
    position: ['relative', 'absolute'],
};

const RN_DEFAULTS: Record<string, string> = {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    alignSelf: 'auto',
    flexWrap: 'nowrap',
    alignContent: 'flex-start',
    position: 'relative',
};

const NUMBERS = new Set(['flex', 'flexGrow', 'flexShrink', 'zIndex', 'opacity']);

const DIMENSIONS = new Set([
    'width', 'height', 'minWidth', 'maxWidth', 'minHeight', 'maxHeight', 'flexBasis',
    'top', 'right', 'bottom', 'left',
    'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginHorizontal', 'marginVertical',
    'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingHorizontal', 'paddingVertical',
    'gap', 'rowGap', 'columnGap', 'borderWidth', 'borderRadius',
]);

const COLOR_PROPS = new Set(['backgroundColor', 'borderColor']);

const OFFSETS = ['top', 'right', 'bottom', 'left'];

const SCREEN_W = 264;
const SCREEN_H = 480;

const show = (v: Value) => (typeof v === 'number' ? String(v) : `"${v}"`);

function validate(key: string, value: Value): string | null | 'unknown' {
    if (key in ENUMS) {
        return typeof value === 'string' && ENUMS[key].includes(value)
            ? null
            : `${show(value)} is geen geldige waarde voor ${key}. Kies uit: ${ENUMS[key].map(o => `"${o}"`).join(', ')}.`;
    }
    if (NUMBERS.has(key)) {
        return typeof value === 'number' ? null : `${key} verwacht een getal zonder aanhalingstekens, bv. ${key}: 1.`;
    }
    if (DIMENSIONS.has(key)) {
        const ok = typeof value === 'number'
            || /^-?\d+(\.\d+)?%$/.test(value)
            || (value === 'auto' && ['width', 'height', 'flexBasis'].includes(key));
        return ok ? null : `${key} verwacht een getal (bv. 40) of een percentage (bv. "50%"), niet ${show(value)}.`;
    }
    if (COLOR_PROPS.has(key)) {
        const ok = typeof value === 'string'
            && (typeof CSS === 'undefined' || CSS.supports('color', value));
        return ok ? null : `${show(value)} is geen geldige kleur voor ${key}.`;
    }
    return 'unknown';
}

// ---------------------------------------------------------------------------
// Parser: haalt de parent View en zijn kinderen uit de code.
// ---------------------------------------------------------------------------

const lineOf = (text: string, index: number) => text.slice(0, index).split('\n').length;

// Splitst "a: 1, b: rgb(1, 2, 3)" op komma's die niet tussen haakjes of quotes staan.
function splitProps(body: string): { text: string; start: number }[] {
    const parts: { text: string; start: number }[] = [];
    let depth = 0;
    let quote: string | null = null;
    let start = 0;
    for (let i = 0; i <= body.length; i++) {
        const ch = body[i];
        if (quote) {
            if (ch === quote) quote = null;
        } else if (ch === '"' || ch === "'") {
            quote = ch;
        } else if (ch === '(') {
            depth++;
        } else if (ch === ')') {
            depth--;
        } else if ((ch === ',' && depth === 0) || i === body.length) {
            const raw = body.slice(start, i);
            const trimmed = raw.trim();
            if (trimmed) parts.push({ text: trimmed, start: start + raw.indexOf(trimmed) });
            start = i + 1;
        }
    }
    return parts;
}

function parseValue(raw: string): Value | undefined {
    if (/^-?\d+(\.\d+)?$/.test(raw)) return Number(raw);
    const m = /^(["'])(.*)\1$/.exec(raw);
    return m ? m[2] : undefined;
}

function parseStyle(src: string, body: string, bodyIndex: number, warnings: Problem[]): { style: Style } | { error: Problem } {
    const style: Style = {};
    for (const part of splitProps(body)) {
        const line = lineOf(src, bodyIndex + part.start);
        const m = /^([A-Za-z]+)\s*:\s*([\s\S]+)$/.exec(part.text);
        if (!m) return { error: { line, message: `"${part.text}" is geen geldige property. Schrijf het als naam: waarde, bv. width: 40.` } };
        const [, key, raw] = m;
        const value = parseValue(raw.trim());
        if (value === undefined) {
            const hint = /^[A-Za-z-]+$/.test(raw.trim()) ? ` Tekst moet tussen aanhalingstekens: ${key}: "${raw.trim()}".` : '';
            return { error: { line, message: `${raw.trim()} is geen geldige waarde voor ${key}.${hint}` } };
        }
        const problem = validate(key, value);
        if (problem === 'unknown') {
            warnings.push({ line, message: `${key} wordt in dit voorbeeld niet getoond.` });
            continue;
        }
        if (problem) return { error: { line, message: problem } };
        style[key] = value;
    }
    return { style };
}

function parseCode(code: string): ParseResult {
    // Commentaar wegwerken met spaties, zodat posities en regelnummers kloppen.
    const src = code
        .replace(/\/\*[\s\S]*?\*\//g, m => m.replace(/[^\n]/g, ' '))
        .replace(/\/\/[^\n]*/g, m => ' '.repeat(m.length));
    const warnings: Problem[] = [];
    const fail = (line: number, message: string): ParseResult => ({ layout: null, error: { line, message }, warnings });

    const views = [...src.matchAll(/<View\b\s*(?:style=\{\{([\s\S]*?)\}\})?\s*(\/?)>/g)];
    const opened = [...src.matchAll(/<View\b/g)];
    if (opened.length === 0) return fail(1, 'Er staat geen <View> in de code.');
    if (views.length !== opened.length) {
        const bad = opened.find(o => !views.some(v => v.index === o.index));
        return fail(lineOf(src, bad?.index ?? 0), 'Deze <View> klopt niet. Controleer style={{ ... }} en de afsluiting > of />.');
    }

    const [first, ...rest] = views;
    if (first[2] === '/') return fail(lineOf(src, first.index ?? 0), 'De eerste View is de parent: schrijf <View style={{...}}> en sluit af met </View> na de kinderen.');
    const close = src.indexOf('</View>');
    if (close === -1) return fail(lineOf(src, src.length), 'De parent View wordt niet afgesloten met </View>.');

    const styleOf = (m: RegExpMatchArray) => {
        if (m[1] === undefined) return { style: {} as Style };
        const bodyIndex = (m.index ?? 0) + m[0].indexOf('{{') + 2;
        return parseStyle(src, m[1], bodyIndex, warnings);
    };

    const parent = styleOf(first);
    if ('error' in parent) return { layout: null, error: parent.error, warnings };

    const children: Style[] = [];
    for (const m of rest) {
        const line = lineOf(src, m.index ?? 0);
        if (m[2] !== '/') return fail(line, 'Schrijf de kinderen als <View style={{...}}/>. Views in elkaar nesten kan in dit voorbeeld niet.');
        if ((m.index ?? 0) > close) return fail(line, 'Deze View staat na </View>, dus buiten de parent.');
        const child = styleOf(m);
        if ('error' in child) return { layout: null, error: child.error, warnings };
        children.push(child.style);
    }
    return { layout: { parent: parent.style, children }, error: null, warnings };
}

// ---------------------------------------------------------------------------
// React Native layout rules -> CSS
// ---------------------------------------------------------------------------

function toCss(style: Style): React.CSSProperties {
    const css: Record<string, Value> = {};
    // Yoga: flex > 0 => flexGrow: flex, flexShrink: 0, flexBasis: 0
    //       flex < 0 => flexShrink: -flex
    const flex = style.flex;
    if (typeof flex === 'number' && flex > 0) {
        css.flexGrow = flex;
        css.flexShrink = 0;
        css.flexBasis = 0;
    } else if (typeof flex === 'number' && flex < 0) {
        css.flexShrink = -flex;
    }
    for (const [key, value] of Object.entries(style)) {
        if (key === 'flex') continue;
        const axis = /^(margin|padding)(Horizontal|Vertical)$/.exec(key);
        if (axis) {
            const [a, b] = axis[2] === 'Horizontal' ? ['Left', 'Right'] : ['Top', 'Bottom'];
            css[axis[1] + a] = value;
            css[axis[1] + b] = value;
        } else {
            css[key] = value;
        }
    }
    return css as React.CSSProperties;
}

const isRow = (d: Value | undefined) => d === 'row' || d === 'row-reverse';

// ---------------------------------------------------------------------------
// Voorbeeldcode per sectie
// ---------------------------------------------------------------------------

const MAX_LINE = 82;

// <View style={{...}}> op één regel als het past, anders over meerdere regels:
// bij de parent één property per regel, bij de kinderen zoveel als er passen.
function viewCode(indent: number, props: string[], close: string, onePerLine: boolean): string[] {
    const pad = ' '.repeat(indent);
    const single = `${pad}<View style={{${props.join(', ')}}}${close}`;
    if (single.length <= MAX_LINE) return [single];

    const lines = [`${pad}<View style={{`];
    let line = '';
    for (const p of props) {
        const candidate = line ? `${line} ${p},` : `${pad}    ${p},`;
        if (line && (onePerLine || candidate.length > MAX_LINE)) {
            lines.push(line);
            line = `${pad}    ${p},`;
        } else {
            line = candidate;
        }
    }
    lines.push(line, `${pad}}}${close}`);
    return lines;
}

function program(parent: string[], children: string[][]): string {
    return [
        'import {View} from "react-native";',
        '',
        'const Index = () => {',
        '    return (',
        ...viewCode(8, parent, '>', true),
        ...children.flatMap(c => viewCode(12, c, '/>', false)),
        '        </View>',
        '    )',
        '}',
        '',
        'export default Index;',
    ].join('\n');
}

const box = (color: string, ...extra: string[]) => ['width: 40', 'height: 40', `backgroundColor: "${color}"`, ...extra];
const RGB = ['lightblue', 'skyblue', 'steelblue'];
const WRAP_COLORS = [
    'lightblue', 'skyblue', 'steelblue', 'cadetblue', 'royalblue',
    'powderblue', 'lightskyblue', 'cornflowerblue', 'lightsteelblue', 'slategray',
];

const PRESETS: Record<Preset, string> = {
    flexDirection: program(['flex: 1', 'flexDirection: "row"'], RGB.map(c => box(c))),
    flex: program(
        ['flex: 1', 'flexDirection: "column"'],
        RGB.map((c, i) => [`flex: ${i + 1}`, `backgroundColor: "${c}"`]),
    ),
    justifyContent: program(['flex: 1', 'flexDirection: "column"', 'justifyContent: "center"'], RGB.map(c => box(c))),
    alignItems: program(
        ['flex: 1', 'flexDirection: "column"', 'justifyContent: "flex-start"', 'alignItems: "center"'],
        [box('lightblue'), box('skyblue'), ['height: 40', 'backgroundColor: "steelblue"']],
    ),
    alignSelf: program(
        ['flex: 1', 'flexDirection: "column"', 'alignItems: "center"'],
        [box('lightblue'), box('skyblue'), box('steelblue', 'alignSelf: "flex-start"')],
    ),
    flexWrap: program(
        ['flex: 1', 'flexDirection: "row"', 'alignItems: "flex-start"', 'flexWrap: "wrap"', 'alignContent: "flex-start"'],
        WRAP_COLORS.map(c => box(c)),
    ),
    absolute: program(
        ['flex: 1', 'justifyContent: "flex-start"', 'alignItems: "center"'],
        [
            box('lightblue', 'position: "absolute"', 'top: 0', 'left: 0'),
            box('skyblue', 'position: "absolute"', 'top: 50', 'right: 50'),
            box('steelblue', 'position: "absolute"', 'bottom: 10', 'left: 10'),
            box('cadetblue', 'position: "absolute"', 'bottom: 50', 'right: 30'),
        ],
    ),
    playground: program(
        [
            'flex: 1', 'flexDirection: "column"', 'justifyContent: "flex-start"',
            'alignItems: "stretch"', 'flexWrap: "nowrap"', 'alignContent: "flex-start"',
        ],
        RGB.map(c => box(c)),
    ),
};

// ---------------------------------------------------------------------------
// Syntax highlighting
// ---------------------------------------------------------------------------

type TokenKind = 'comment' | 'str' | 'kw' | 'tag' | 'prop' | 'num' | 'fn' | 'punct' | 'plain';

const TOKEN_RE = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("(?:[^"\\\n]|\\.)*"?|'(?:[^'\\\n]|\\.)*'?)|\b(import|from|const|return|export|default)\b|(<\/?)([A-Za-z]+)|([A-Za-z_]\w*)(?=\s*[:=])|(-?\b\d+(?:\.\d+)?)|([A-Za-z_]\w*)|([^\sA-Za-z0-9_"']+)/g;

function highlight(code: string): { text: string; kind: TokenKind }[][] {
    const tokens: { text: string; kind: TokenKind }[] = [];
    let last = 0;
    for (const m of code.matchAll(TOKEN_RE)) {
        const index = m.index ?? 0;
        if (index > last) tokens.push({ text: code.slice(last, index), kind: 'plain' });
        if (m[1]) tokens.push({ text: m[1], kind: 'comment' });
        else if (m[2]) tokens.push({ text: m[2], kind: 'str' });
        else if (m[3]) tokens.push({ text: m[3], kind: 'kw' });
        else if (m[5]) tokens.push({ text: m[4], kind: 'punct' }, { text: m[5], kind: 'tag' });
        else if (m[6]) tokens.push({ text: m[6], kind: m[6] === 'Index' ? 'fn' : 'prop' });
        else if (m[7]) tokens.push({ text: m[7], kind: 'num' });
        else if (m[8]) tokens.push({ text: m[8], kind: m[8] === 'Index' ? 'fn' : 'plain' });
        else tokens.push({ text: m[0], kind: 'punct' });
        last = index + m[0].length;
    }
    if (last < code.length) tokens.push({ text: code.slice(last), kind: 'plain' });

    // Per regel opsplitsen, zodat we een foute regel kunnen markeren.
    const lines: { text: string; kind: TokenKind }[][] = [[]];
    for (const tok of tokens) {
        tok.text.split('\n').forEach((part, i) => {
            if (i > 0) lines.push([]);
            if (part) lines[lines.length - 1].push({ text: part, kind: tok.kind });
        });
    }
    return lines;
}

// ---------------------------------------------------------------------------
// Editor helpers
// ---------------------------------------------------------------------------

interface CaretProp {
    key: string;
    value: string;
    start: number;
    end: number;
}

// De property (naam: waarde) waar de cursor in staat, als die keuzewaarden heeft.
function enumPropAt(text: string, pos: number): CaretProp | null {
    const lineStart = text.lastIndexOf('\n', pos - 1) + 1;
    const lineEnd = text.indexOf('\n', pos) === -1 ? text.length : text.indexOf('\n', pos);
    const line = text.slice(lineStart, lineEnd);
    for (const m of line.matchAll(/(\w+)\s*:\s*("[^"\n]*"?|'[^'\n]*'?|[^,}\s]*)/g)) {
        const start = lineStart + (m.index ?? 0);
        const end = start + m[0].length;
        if (pos >= start && pos <= end && m[1] in ENUMS) {
            return { key: m[1], value: m[2].replace(/^["']|["']$/g, ''), start: end - m[2].length, end };
        }
    }
    return null;
}

function insertText(ta: HTMLTextAreaElement, text: string, fallback: (value: string) => void) {
    // execCommand houdt undo (Ctrl+Z) intact; anders vallen we terug op een gewone update.
    if (!document.execCommand?.('insertText', false, text)) {
        const { selectionStart: s, selectionEnd: e, value } = ta;
        fallback(value.slice(0, s) + text + value.slice(e));
        requestAnimationFrame(() => ta.setSelectionRange(s + text.length, s + text.length));
    }
}

// ---------------------------------------------------------------------------
// FLIP animation: items glijden van hun oude naar hun nieuwe plek.
// offset* negeert transforms, dus een lopende animatie verstoort de meting niet.
// ---------------------------------------------------------------------------

interface Rect { x: number; y: number; w: number; h: number }

function useFlip(key: string) {
    const refs = useRef(new Map<number, HTMLDivElement>());
    const prev = useRef(new Map<number, Rect>());
    const [collapsed, setCollapsed] = useState<number[]>([]);

    useLayoutEffect(() => {
        const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
        const next = new Map<number, Rect>();
        const empty: number[] = [];

        refs.current.forEach((el, id) => {
            const rect = { x: el.offsetLeft, y: el.offsetTop, w: el.offsetWidth, h: el.offsetHeight };
            next.set(id, rect);
            if (rect.w === 0 || rect.h === 0) empty.push(id);

            const old = prev.current.get(id);
            if (!old || reduce) return;
            const dx = old.x - rect.x;
            const dy = old.y - rect.y;
            const sx = rect.w > 0 ? old.w / rect.w : 1;
            const sy = rect.h > 0 ? old.h / rect.h : 1;
            if (dx === 0 && dy === 0 && sx === 1 && sy === 1) return;

            el.style.transition = 'none';
            el.style.transform = `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`;
            void el.offsetWidth;
            el.style.transition = '';
            el.style.transform = '';
        });

        prev.current = next;
        empty.sort((a, b) => a - b);
        setCollapsed(c => (c.join() === empty.join() ? c : empty));
    }, [key]);

    const setRef = useCallback((id: number) => (el: HTMLDivElement | null) => {
        if (el) refs.current.set(id, el);
        else refs.current.delete(id);
    }, []);

    return { setRef, collapsed };
}

// ---------------------------------------------------------------------------
// Axis overlay (in de parent View, in procenten zodat het meeschaalt)
// ---------------------------------------------------------------------------

function Axes({ parent }: { parent: Style }) {
    const row = isRow(parent.flexDirection);
    const mainReverse = String(parent.flexDirection ?? '').endsWith('reverse');
    const crossReverse = parent.flexWrap === 'wrap-reverse';
    const wraps = parent.flexWrap === 'wrap' || parent.flexWrap === 'wrap-reverse';

    const horizontal = (reverse: boolean) => (reverse
        ? { x1: '96%', y1: '50%', x2: '4%', y2: '50%' }
        : { x1: '4%', y1: '50%', x2: '96%', y2: '50%' });
    const vertical = (reverse: boolean) => (reverse
        ? { x1: '50%', y1: '96%', x2: '50%', y2: '4%' }
        : { x1: '50%', y1: '4%', x2: '50%', y2: '96%' });

    const main = row ? horizontal(mainReverse) : vertical(mainReverse);
    const cross = row ? vertical(crossReverse) : horizontal(crossReverse);

    // Label bij de pijlpunt: de naam van de as en de properties die erop werken.
    const label = (line: { x2: string; y2: string }, horizontalLine: boolean, rows: string[], className: string) => {
        const atEnd = horizontalLine ? line.x2 === '96%' : line.y2 === '96%';
        const x = horizontalLine ? line.x2 : '50%';
        const dx = horizontalLine ? 0 : 6;
        // Boven de pijl (of boven het einde ervan), behalve als de pijl naar boven wijst.
        const firstDy = horizontalLine || atEnd ? `${-(rows.length - 1) * 1.2 - 0.5}em` : '1.4em';
        return (
            <text x={x} y={horizontalLine ? '50%' : line.y2} textAnchor={horizontalLine && atEnd ? 'end' : 'start'} className={className}>
                {rows.map((text, i) => (
                    <tspan key={text} x={x} dx={dx} dy={i === 0 ? firstDy : '1.2em'} className={i > 0 ? styles.axisProp : undefined}>
                        {text}
                    </tspan>
                ))}
            </text>
        );
    };

    return (
        <svg className={styles.axes} aria-hidden="true">
            <defs>
                <marker id="ifb-main" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M0,0 L10,5 L0,10 z" className={styles.axisMainHead} />
                </marker>
                <marker id="ifb-cross" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M0,0 L10,5 L0,10 z" className={styles.axisCrossHead} />
                </marker>
            </defs>
            <line {...cross} className={styles.axisCross} markerEnd="url(#ifb-cross)" />
            <line {...main} className={styles.axisMain} markerEnd="url(#ifb-main)" />
            {label(main, row, ['main axis', 'justifyContent'], styles.axisMainLabel)}
            {label(cross, !row, wraps ? ['cross axis', 'alignItems', 'alignContent'] : ['cross axis', 'alignItems'], styles.axisCrossLabel)}
        </svg>
    );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function InteractiveFlexbox({ preset = 'playground' }: { preset?: Preset }) {
    const initial = PRESETS[preset];
    const [code, setCode] = useState(initial);
    const [caret, setCaret] = useState<CaretProp | null>(null);
    const [copied, setCopied] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const result = useMemo(() => parseCode(code), [code]);

    // Bij een fout blijft het scherm de laatste geldige versie tonen.
    const lastValid = useRef<Layout>(parseCode(initial).layout ?? { parent: {}, children: [] });
    if (result.layout) lastValid.current = result.layout;
    const layout = lastValid.current;

    const layoutKey = JSON.stringify(layout);
    const { setRef, collapsed } = useFlip(layoutKey);
    const lines = useMemo(() => highlight(code), [code]);

    const updateCaret = () => {
        const ta = textareaRef.current;
        if (ta) setCaret(enumPropAt(ta.value, ta.selectionStart));
    };

    const chooseValue = (option: string) => {
        const ta = textareaRef.current;
        if (!ta || !caret) return;
        ta.focus();
        ta.setSelectionRange(caret.start, caret.end);
        insertText(ta, `"${option}"`, setCode);
        updateCaret();
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        const ta = e.currentTarget;
        if (e.key === 'Tab' && !e.shiftKey) {
            e.preventDefault();
            insertText(ta, '    ', setCode);
        } else if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
            // Nieuwe regel met dezelfde inspringing (en een niveau extra na { of ().
            const before = ta.value.slice(ta.value.lastIndexOf('\n', ta.selectionStart - 1) + 1, ta.selectionStart);
            const indent = /^\s*/.exec(before)?.[0] ?? '';
            e.preventDefault();
            insertText(ta, `\n${indent}${/[{(]\s*$/.test(before) ? '    ' : ''}`, setCode);
        }
    };

    const reset = () => {
        setCode(initial);
        setCaret(null);
    };

    const copy = () => {
        void navigator.clipboard?.writeText(code).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        });
    };

    // Uitleg bij de regels van React Native die je net in actie ziet.
    const { parent, children } = layout;
    const row = isRow(parent.flexDirection);
    const mainSize = row ? 'width' : 'height';
    const crossSize = row ? 'height' : 'width';
    const alignItems = parent.alignItems ?? RN_DEFAULTS.alignItems;
    const wraps = parent.flexWrap === 'wrap' || parent.flexWrap === 'wrap-reverse';
    const nameOf = (i: number) => `View ${i + 1}${children[i].backgroundColor ? ` ("${children[i].backgroundColor}")` : ''}`;

    const hints: string[] = [];
    if (parent.flex === undefined) {
        hints.push('De parent heeft geen flex: 1. Hij is daardoor maar zo groot als zijn kinderen (zie de stippellijn).');
    }
    for (const i of collapsed) {
        const child = children[i];
        if (!child) continue;
        const align = child.alignSelf && child.alignSelf !== 'auto' ? child.alignSelf : alignItems;
        if (child.position === 'absolute') {
            hints.push(`${nameOf(i)} is absolute en heeft geen ${child.width === undefined ? 'width' : 'height'}: een absolute View rekt niet uit, dus je ziet niets.`);
        } else if (child[mainSize] === undefined && !(typeof child.flex === 'number' && child.flex > 0)) {
            hints.push(`${nameOf(i)} heeft geen flex en geen ${mainSize}: de ${mainSize} wordt 0, dus je ziet niets.`);
        } else if (child[crossSize] === undefined && align !== 'stretch') {
            hints.push(`${nameOf(i)} heeft geen ${crossSize} en wordt niet uitgerekt (alignItems of alignSelf is niet "stretch"): de ${crossSize} wordt 0.`);
        }
    }
    if (parent.alignItems === 'stretch' && children.some(c => c.position !== 'absolute' && c[crossSize] !== undefined && (c.alignSelf ?? 'auto') === 'auto')) {
        hints.push(`alignItems "stretch" rekt enkel kinderen zonder vaste ${crossSize} uit.`);
    }
    if (parent.alignContent !== undefined && !wraps) {
        hints.push('alignContent verdeelt de regels, maar zonder flexWrap "wrap" is er maar één regel.');
    }
    if (wraps && children.some(c => typeof c.flex === 'number' && c.flex > 0 && c.position !== 'absolute')) {
        hints.push('Met flex groeit een kind binnen zijn eigen regel; het duwt geen andere kinderen naar de volgende regel.');
    }
    if (children.some(c => c.position === 'absolute' && OFFSETS.every(o => c[o] === undefined))) {
        hints.push('Een absolute View zonder top, right, bottom of left volgt justifyContent en alignItems van de parent, maar neemt geen plaats in.');
    }
    if (children.some(c => c.position !== 'absolute' && OFFSETS.some(o => c[o] !== undefined))) {
        hints.push('Bij position "relative" verschuiven top, right, bottom en left de View, maar de andere kinderen blijven staan.');
    }

    const errorLine = result.error?.line;

    return (
        <div className={styles.container}>
            <div className={styles.layout}>
                {/* ---- Phone ---- */}
                <div className={styles.phoneColumn}>
                    <div className={styles.phone}>
                        <div className={styles.speaker} />
                        <div className={styles.screen} style={{ width: SCREEN_W, height: SCREEN_H }}>
                            <div className={`${styles.view} ${styles.root}`} style={toCss(parent)}>
                                {children.map((child, i) => (
                                    <div key={i} ref={setRef(i)} className={`${styles.view} ${styles.item}`} style={toCss(child)} />
                                ))}
                                <Axes parent={parent} />
                            </div>
                        </div>
                        <div className={styles.homeBar} />
                    </div>
                </div>

                {/* ---- Editor ---- */}
                <div className={styles.editorColumn}>
                    <div className={styles.toolbar}>
                        <span>Pas de code aan, het scherm volgt meteen.</span>
                        <button type="button" className={styles.pillButton} onClick={reset} disabled={code === initial}>Reset</button>
                    </div>

                    <div className={`${styles.codePanel} ${result.error ? styles.codePanelError : ''}`}>
                        <div className={styles.codeHeader}>
                            <span className={styles.fileName}>app/index.tsx</span>
                            <button type="button" className={styles.pillButton} onClick={copy}>
                                {copied ? 'Gekopieerd' : 'Kopieer'}
                            </button>
                        </div>
                        <div className={styles.editorScroll}>
                            <div className={styles.editorInner}>
                                <pre className={styles.highlight} aria-hidden="true">
                                    {lines.map((line, i) => (
                                        <div key={i} className={`${styles.codeLine} ${errorLine === i + 1 ? styles.codeLineError : ''}`}>
                                            {line.map((tok, j) => <span key={j} className={styles[tok.kind]}>{tok.text}</span>)}
                                        </div>
                                    ))}
                                </pre>
                                <textarea
                                    ref={textareaRef}
                                    className={styles.textarea}
                                    value={code}
                                    onChange={e => {
                                        setCode(e.target.value);
                                        setCaret(enumPropAt(e.target.value, e.target.selectionStart));
                                    }}
                                    onKeyDown={onKeyDown}
                                    onKeyUp={updateCaret}
                                    onClick={updateCaret}
                                    onSelect={updateCaret}
                                    spellCheck={false}
                                    autoCapitalize="off"
                                    autoComplete="off"
                                    autoCorrect="off"
                                    wrap="off"
                                    aria-label="React Native-code"
                                />
                            </div>
                        </div>
                        <div className={styles.valueBar}>
                            {caret ? (
                                <>
                                    <code className={styles.valueKey}>{caret.key}:</code>
                                    {ENUMS[caret.key].map(option => (
                                        <button
                                            key={option}
                                            type="button"
                                            className={`${styles.valueChip} ${caret.value === option ? styles.valueChipActive : ''}`}
                                            onMouseDown={e => e.preventDefault()}
                                            onClick={() => chooseValue(option)}
                                        >
                                            "{option}"{option === RN_DEFAULTS[caret.key] && <span className={styles.defaultTag}>default</span>}
                                        </button>
                                    ))}
                                </>
                            ) : (
                                <span className={styles.valueHelp}>
                                    Klik in een waarde zoals <code>"row"</code> of <code>"center"</code> om alle mogelijkheden te zien.
                                </span>
                            )}
                        </div>
                    </div>

                    {result.error && (
                        <div className={styles.error} role="alert">
                            <strong>Regel {result.error.line}:</strong> {result.error.message}
                            <div className={styles.errorNote}>Het scherm toont de laatste versie die wel werkte.</div>
                        </div>
                    )}
                    {!result.error && result.warnings.length > 0 && (
                        <ul className={styles.warnings}>
                            {result.warnings.map(w => <li key={`${w.line}-${w.message}`}>Regel {w.line}: {w.message}</li>)}
                        </ul>
                    )}
                    {hints.length > 0 && (
                        <ul className={styles.hints}>
                            {hints.map(h => <li key={h}>{h}</li>)}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

export default withMaximize(InteractiveFlexbox);
