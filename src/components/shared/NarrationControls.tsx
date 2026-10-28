import React from 'react';
import { createPortal } from 'react-dom';
import narrationStyles from './NarrationControls.module.css';

// ---------------------------------------------------------------------------
// Schakelaars voor vertelstem en ondertitels, en de ondertitel zelf.
// Enkel gebruiken in voorbeelden met een narration.json (zie useNarrationScript).
// ---------------------------------------------------------------------------

interface NarrationTogglesProps {
    voice: boolean;
    setVoice: (on: boolean) => void;
    subtitles: boolean;
    setSubtitles: (on: boolean) => void;
    styles: { readonly [key: string]: string };
}

export function NarrationToggles({ voice, setVoice, subtitles, setSubtitles, styles }: NarrationTogglesProps) {
    return (
        <>
            <label className={styles.checkboxLabel}>
                <input type="checkbox" checked={voice} onChange={e => setVoice(e.target.checked)} />
                🔊 vertelstem
            </label>
            <label className={styles.checkboxLabel}>
                <input type="checkbox" checked={subtitles} onChange={e => setSubtitles(e.target.checked)} />
                💬 ondertitels
            </label>
        </>
    );
}

interface NarrationSubtitleProps {
    enabled: boolean;
    text: string | null;
}

/**
 * Ondertitel zoals bij YouTube: onderaan het scherm over de pagina heen.
 * Via een portal naar <body>, zodat ook de gemaximaliseerde weergave ze toont.
 */
export function NarrationSubtitle({ enabled, text }: NarrationSubtitleProps) {
    if (!enabled || !text || typeof document === 'undefined') return null;
    return createPortal(
        <div className={narrationStyles.subtitle} aria-live="polite">
            <span className={narrationStyles.subtitleText}>{text}</span>
        </div>,
        document.body,
    );
}
