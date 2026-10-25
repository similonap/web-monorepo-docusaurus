import React, { useMemo, useState } from 'react';
import styles from './styles.module.css';

// ---------------------------------------------------------------------------
// ExpoQrScan: een terminal met `npx expo start` naast een telefoon. Je klikt
// stap voor stap door hoe je de QR code scant, apart voor Android (via Expo Go)
// en iOS (via de Camera-app). De QR code is enkel decoratief.
// ---------------------------------------------------------------------------

type Platform = 'android' | 'ios';

type Screen = 'expoGo' | 'scanner' | 'camera' | 'cameraDetected' | 'bundling' | 'app';

interface Step {
    screen: Screen;
    text: React.ReactNode;
}

const STEPS: Record<Platform, Step[]> = {
    android: [
        { screen: 'expoGo', text: <>Open de <strong>Expo Go</strong> app en tik op <strong>Scan QR code</strong>.</> },
        { screen: 'scanner', text: <>Richt je camera op de QR code in de terminal.</> },
        { screen: 'bundling', text: <>Metro bundelt je code en stuurt ze naar je telefoon. In de terminal zie je <code>Android Bundled</code>.</> },
        { screen: 'app', text: <>Je app draait. Sla je code op en je ziet de wijziging meteen verschijnen.</> },
    ],
    ios: [
        { screen: 'camera', text: <>Open de standaard <strong>Camera-app</strong> (niet Expo Go) en richt ze op de QR code in de terminal.</> },
        { screen: 'cameraDetected', text: <>De camera herkent de QR code. Tik op de melding <strong>Open in Expo Go</strong>.</> },
        { screen: 'bundling', text: <>Expo Go opent en Metro bundelt je code. In de terminal zie je <code>iOS Bundled</code>.</> },
        { screen: 'app', text: <>Je app draait. Sla je code op en je ziet de wijziging meteen verschijnen.</> },
    ],
};

// ---------------------------------------------------------------------------
// Decoratieve QR code: drie finder-patronen en een vaste pseudo-willekeurige
// vulling (deterministisch, dus elke render ziet er hetzelfde uit).
// ---------------------------------------------------------------------------

const QR_SIZE = 25;

function buildQr(): boolean[][] {
    let seed = 20240917;
    const next = () => {
        seed = (seed * 1103515245 + 12345) % 2147483648;
        return seed / 2147483648;
    };
    const grid = Array.from({ length: QR_SIZE }, () => Array.from({ length: QR_SIZE }, () => next() > 0.52));

    const finder = (top: number, left: number) => {
        for (let r = -1; r <= 7; r++) {
            for (let c = -1; c <= 7; c++) {
                const y = top + r;
                const x = left + c;
                if (y < 0 || x < 0 || y >= QR_SIZE || x >= QR_SIZE) continue;
                const ring = Math.max(Math.abs(r - 3), Math.abs(c - 3));
                grid[y][x] = ring !== 2 && ring !== 4;
            }
        }
    };
    finder(0, 0);
    finder(0, QR_SIZE - 7);
    finder(QR_SIZE - 7, 0);
    return grid;
}

const QrCode = ({ className }: { className?: string }) => {
    const grid = useMemo(buildQr, []);
    return (
        <svg className={className} viewBox={`-2 -2 ${QR_SIZE + 4} ${QR_SIZE + 4}`} aria-hidden="true">
            <rect x={-2} y={-2} width={QR_SIZE + 4} height={QR_SIZE + 4} fill="#ffffff" />
            {grid.flatMap((row, y) =>
                row.map((on, x) => (on ? <rect key={`${x}-${y}`} x={x} y={y} width={1.02} height={1.02} fill="#111827" /> : null)),
            )}
        </svg>
    );
};

// ---------------------------------------------------------------------------
// Terminal
// ---------------------------------------------------------------------------

const Terminal = ({ platform, step }: { platform: Platform; step: number }) => {
    const scanning = step <= 1;
    const bundled = step >= 2;
    return (
        <div className={styles.terminal}>
            <div className={styles.terminalBar}>
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.terminalTitle}>Terminal</span>
            </div>
            <div className={styles.terminalBody}>
                <div><span className={styles.prompt}>$</span> npx expo start</div>
                <div className={styles.dim}>Starting Metro Bundler</div>
                <div className={`${styles.qrWrap} ${scanning ? styles.qrActive : ''}`}>
                    <QrCode className={styles.qr} />
                </div>
                <div>› Metro waiting on <span className={styles.url}>exp://192.168.1.23:8081</span></div>
                <div>› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)</div>
                <div className={styles.gap} />
                <div className={styles.dim}>› Press a │ open Android</div>
                <div className={styles.dim}>› Press w │ open web</div>
                <div className={styles.dim}>› Press r │ reload app</div>
                {bundled && (
                    <div className={styles.bundled}>
                        {platform === 'android' ? 'Android' : 'iOS'} Bundled 812ms src/app/index.tsx (1024 modules)
                    </div>
                )}
            </div>
        </div>
    );
};

// ---------------------------------------------------------------------------
// Telefoonschermen
// ---------------------------------------------------------------------------

const ExpoGoHome = () => (
    <div className={styles.expoGo}>
        <div className={styles.expoGoHeader}>Expo Go</div>
        <div className={styles.sectionLabel}>Development servers</div>
        <div className={styles.card}>
            <div className={styles.cardMuted}>Start a local development server with:</div>
            <code className={styles.cardCode}>npx expo start</code>
        </div>
        <div className={`${styles.card} ${styles.cardRow}`}>
            <span className={styles.plus}>+</span> Enter URL manually
        </div>
        <div className={`${styles.card} ${styles.cardRow} ${styles.scanButton}`}>
            <span className={styles.scanIcon} aria-hidden="true" /> Scan QR code
        </div>
        <div className={styles.sectionLabel}>Projects</div>
        <div className={`${styles.card} ${styles.cardMuted}`}>No projects yet</div>
    </div>
);

const Viewfinder = ({ detected, ios }: { detected?: boolean; ios?: boolean }) => (
    <div className={styles.viewfinder}>
        <div className={`${styles.target} ${detected ? styles.targetDetected : ''}`}>
            <QrCode className={styles.viewfinderQr} />
            {!detected && <div className={styles.scanLine} />}
        </div>
        {detected && (
            <div className={styles.openPill}>
                <span className={styles.pillIcon} aria-hidden="true" /> Open in Expo Go
            </div>
        )}
        {ios ? (
            <div className={styles.cameraControls}>
                <span className={styles.cameraMode}>FOTO</span>
                <span className={styles.shutter} />
            </div>
        ) : (
            <div className={styles.scannerHint}>Scan QR code</div>
        )}
    </div>
);

const Bundling = () => (
    <div className={styles.bundling}>
        <div className={styles.bundlingLabel}>Bundling…</div>
        <div className={styles.progress}>
            <div className={styles.progressFill} />
        </div>
        <div className={styles.bundlingUrl}>exp://192.168.1.23:8081</div>
    </div>
);

const App = () => (
    <div className={styles.app}>
        <span>Edit src/app/index.tsx to edit this screen.</span>
    </div>
);

const PhoneScreen = ({ screen }: { screen: Screen }) => {
    switch (screen) {
        case 'expoGo':
            return <ExpoGoHome />;
        case 'scanner':
            return <Viewfinder />;
        case 'camera':
            return <Viewfinder ios />;
        case 'cameraDetected':
            return <Viewfinder ios detected />;
        case 'bundling':
            return <Bundling />;
        case 'app':
            return <App />;
    }
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

interface Props {
    platform?: Platform;
}

const ExpoQrScan = ({ platform: initialPlatform = 'android' }: Props) => {
    const [platform, setPlatform] = useState<Platform>(initialPlatform);
    const [step, setStep] = useState(0);
    const steps = STEPS[platform];
    const current = steps[step];

    const choosePlatform = (p: Platform) => {
        setPlatform(p);
        setStep(0);
    };

    return (
        <div className={styles.container}>
            <div className={styles.tabs} role="tablist" aria-label="Kies je toestel">
                {(['android', 'ios'] as Platform[]).map((p) => (
                    <button
                        key={p}
                        type="button"
                        role="tab"
                        aria-selected={platform === p}
                        className={`${styles.tab} ${platform === p ? styles.tabActive : ''}`}
                        onClick={() => choosePlatform(p)}
                    >
                        {p === 'android' ? 'Android' : 'iPhone / iPad'}
                    </button>
                ))}
            </div>

            <div className={styles.layout}>
                <div className={styles.terminalColumn}>
                    <Terminal platform={platform} step={step} />
                    <div className={styles.network}>
                        <span className={styles.wifi} aria-hidden="true" />
                        Computer en telefoon op hetzelfde netwerk
                    </div>
                </div>

                <div className={styles.phoneColumn}>
                    <div className={`${styles.phone} ${platform === 'ios' ? styles.phoneIos : ''}`}>
                        <div className={styles.speaker} />
                        <div className={styles.screen}>
                            <PhoneScreen key={`${platform}-${step}`} screen={current.screen} />
                        </div>
                        <div className={styles.homeBar} />
                    </div>
                </div>
            </div>

            <div className={styles.footer}>
                <ol className={styles.stepList}>
                    {steps.map((s, i) => (
                        <li key={i}>
                            <button
                                type="button"
                                className={`${styles.stepDot} ${i === step ? styles.stepDotActive : ''} ${i < step ? styles.stepDotDone : ''}`}
                                onClick={() => setStep(i)}
                                aria-label={`Stap ${i + 1}`}
                                aria-current={i === step ? 'step' : undefined}
                            >
                                {i + 1}
                            </button>
                        </li>
                    ))}
                </ol>
                <p className={styles.caption} aria-live="polite">
                    <strong>Stap {step + 1}.</strong> {current.text}
                </p>
                <div className={styles.controls}>
                    <button type="button" className={styles.button} onClick={() => setStep(step - 1)} disabled={step === 0}>
                        Vorige
                    </button>
                    {step < steps.length - 1 ? (
                        <button type="button" className={`${styles.button} ${styles.buttonPrimary}`} onClick={() => setStep(step + 1)}>
                            Volgende
                        </button>
                    ) : (
                        <button type="button" className={`${styles.button} ${styles.buttonPrimary}`} onClick={() => setStep(0)}>
                            Opnieuw
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ExpoQrScan;
