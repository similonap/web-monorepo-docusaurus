# Frame packet: 08-cleanup-probleem

## Project inputs

- Project: /Users/slimmii/Git/web/videos/react-useeffect
- Design tokens: /Users/slimmii/Git/web/videos/react-useeffect/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 8 — Cleanup: wat loopt er mis?

- scene: Code: Timer with `interval` prop, `useEffect(() => { let handle = setInterval(…, interval); }, [interval]);` — no cleanup. Right: a slider (1000ms) that moves to 500ms then 200ms. Each move adds a new timer chip; old chips keep ticking. "De oude? Die wordt nooit gestopt" — old chips turn coral and keep pulsing.
- voiceover: "Maar opgelet. Stel dat de interval een prop is, die je met een slider kiest. Dan zet je interval in de dependency array. Elke keer je schuift, loopt het effect opnieuw en start er een nieuwe timer. De oude? Die wordt nooit gestopt — en blijft gewoon doortellen."
- duration: 19.16s
- transition_in: crossfade
- status: outline
- src: compositions/frames/08-cleanup-probleem.html
- type: pain_point
- persuasion: Demonstration of a hidden leak
- beat: tension

narrativeRole: Shows what goes wrong when an interval is never cleared (the course's Timer + slider example without cleanup).
keyMessage: Without cleanup, every re-run of the effect leaves the old timer running.

- blueprint: compose
- focal: the timers list growing while the slider moves
- roles: code surface (navy, left ~56%) = foreground · slider control (tile card, range track + thumb + mono value `1000ms`) right-top = supporting actor · timers list (right, below slider) = foreground subject in the second half · coral on the old, never-stopped timers = the one voltage
- sfx: click-soft

Code (Timer.tsx):
```
const Timer = ({ interval }: TimerProps) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let handle = setInterval(() => {
      setNumber(number => number + 1);
    }, interval);
  }, [interval]);

  return <p>{number}</p>;
}
```
Scene 1 (0.0–5.3s): kicker `✱ OPGELET`; code surface enters with the code (no typing needed for lines 1–3, 8–11; lines 4–7 type on at 1.5s); on "interval een prop" (2.02s) `{ interval }` gets amber wash; on "slider" (4.02s) the slider card fades in right-top showing `interval: 1000ms` (thumb at right end).
Scene 2 (5.3–8.6s): on "interval in de dependency array" (5.88s / 6.88s) `[interval]` gets the amber wash; timers list label + chip `timer #1 · 1000ms` appears at 7.0s, its dot pulsing every ~1.0s (deterministic: pulses at fixed times).
Scene 3 (8.6–13.9s): on "Elke keer je schuift" (9.5s) the slider thumb glides to `500ms`; on "loopt het effect opnieuw" (10.34s) a mono tag `effect ↻` flashes next to the code's useEffect line; on "nieuwe timer" (12.62s) chip `timer #2 · 500ms` drops in. Then at 13.2s the thumb glides to `200ms` and chip `timer #3 · 200ms` drops in at 13.6s. Each chip's dot pulses at its own rate (1.0s / 0.5s / 0.2s cadence → deterministic times).
Scene 4 (13.9–19.16s): on "De oude?" (14.22s) chips #1 and #2 get coral hairlines + coral dots; on "nooit gestopt" (15.7s) a mono coral note `nooit gestopt` appears beside them; on "blijft gewoon doortellen" (16.9s) all three dots keep pulsing together and a mono readout `3 timers actief` updates. Hold (dots keep pulsing to the end — this is deliberate, the leak is still running).
