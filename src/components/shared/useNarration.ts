import { useState, useRef, useEffect, useCallback } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

// ---------------------------------------------------------------------------
// useNarration — speelt bij elke stap van een animatie een vooraf ingesproken
// fragment af (zie scripts/generate-narration.cjs). Een fragment loopt door over
// volgende stappen zonder eigen fragment; zolang het loopt is `pending` true,
// zodat de auto-play kan wachten tot de stem klaar is.
//
// Met enkel ondertitels aan speelt het fragment gedempt mee: zo blijft elke zin
// even lang in beeld als hij duurt en loopt de animatie in hetzelfde tempo.
// ---------------------------------------------------------------------------

/** Inhoud van een narration.json: { name, clips: { id: tekst } }. */
export interface NarrationScript {
    name: string;
    clips: Record<string, string>;
}

export interface NarrationClip {
    src: string;
    text: string;
}

export interface NarrationConfig {
    voice: boolean;
    subtitles: boolean;
    /** Fragment voor deze stap, of null als er niets gezegd wordt. */
    clipFor: (stepIndex: number) => NarrationClip | null;
}

/** Schakelaars en config voor een voorbeeld met een narration.json. Standaard staat alles uit. */
export function useNarrationScript<TStep>(
    script: NarrationScript,
    steps: TStep[],
    clipId: (step: TStep) => string,
) {
    const [voice, setVoice] = useState(false);
    const [subtitles, setSubtitles] = useState(false);
    const base = useBaseUrl(`/audio/narration/${script.name}/`);

    const clipFor = useCallback((stepIndex: number): NarrationClip | null => {
        const id = clipId(steps[stepIndex]);
        const text = script.clips[id];
        return text ? { src: `${base}${id}.mp3`, text } : null;
    }, [script, steps, clipId, base]);

    return { voice, setVoice, subtitles, setSubtitles, config: { voice, subtitles, clipFor } };
}

export function useNarration(
    config: NarrationConfig | undefined,
    stepIndex: number,
    isPlaying: boolean,
    isDone: boolean,
) {
    const enabled = !!config && (config.voice || config.subtitles);
    const muted = !config?.voice;
    const clip = enabled && stepIndex >= 0 ? config!.clipFor(stepIndex) : null;
    const src = clip?.src ?? null;

    // Eén element hergebruiken: Safari ontgrendelt geluid per element na een klik.
    const audioRef = useRef<HTMLAudioElement | null>(null);
    // Telt elk gestart of gestopt fragment, zodat late events van een vorig fragment genegeerd worden.
    const tokenRef = useRef(0);
    const [pending, setPending] = useState(false);
    // Stap waarvan het laatst gestarte fragment is (voor de ondertitel tijdens het doorlopen).
    const [clipStep, setClipStep] = useState<number | null>(null);
    const lastStepRef = useRef(stepIndex);

    useEffect(() => {
        const audio = audioRef.current;
        const stepChanged = lastStepRef.current !== stepIndex;
        lastStepRef.current = stepIndex;
        // Reset of alles uit: meteen stil.
        if (!enabled || stepIndex < 0) {
            tokenRef.current++;
            audio?.pause();
            setPending(false);
            setClipStep(null);
            return;
        }
        // Stap zonder eigen fragment: het vorige fragment mag uitspreken.
        // Enkel een schakelaar aangezet: niets starten, de volgende stap spreekt.
        if (!src || !stepChanged) return;

        const player = audio ?? (audioRef.current = new Audio());
        const token = ++tokenRef.current;
        const finish = () => { if (tokenRef.current === token) setPending(false); };
        player.onended = finish;
        player.onerror = finish;
        player.muted = muted;
        player.src = src;
        setPending(true);
        setClipStep(stepIndex);
        // Afspelen kan geweigerd worden (bv. autoplay-beleid): dan gewoon verder.
        player.play().catch(finish);
    }, [src, stepIndex, enabled]); // eslint-disable-line react-hooks/exhaustive-deps

    // Stem aan of uit tijdens een fragment: enkel (ont)dempen.
    useEffect(() => {
        if (audioRef.current) audioRef.current.muted = muted;
    }, [muted]);

    // Pauze pauzeert ook de stem, verder spelen hervat ze. Na de laatste stap
    // stopt de auto-play vanzelf, maar dan mag het slotfragment uitspreken.
    // (Tijdens het afspelen is "Stap" uitgeschakeld, dus playing → niet playing
    // zonder einde betekent altijd dat er op pauze gedrukt werd.)
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio || !pending) return;
        if (isPlaying) audio.play().catch(() => setPending(false));
        else if (!isDone) audio.pause();
    }, [isPlaying]); // eslint-disable-line react-hooks/exhaustive-deps

    // Opruimen bij unmount.
    useEffect(() => () => audioRef.current?.pause(), []);

    // Ondertitel: de zin van deze stap, of van het fragment dat nog doorloopt.
    const subtitleStep = clip ? stepIndex : pending ? clipStep : null;
    const subtitle = config?.subtitles && subtitleStep !== null ? config.clipFor(subtitleStep)?.text ?? null : null;

    return {
        /** Deze stap heeft een eigen fragment. */
        hasClip: clip !== null,
        /** Er loopt nog een fragment (van deze of een vorige stap). */
        pending,
        subtitle,
    };
}
