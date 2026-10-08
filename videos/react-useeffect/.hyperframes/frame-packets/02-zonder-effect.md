# Frame packet: 02-zonder-effect

## Project inputs

- Project: /Users/slimmii/Git/web/videos/react-useeffect
- Design tokens: /Users/slimmii/Git/web/videos/react-useeffect/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 2 — setInterval in je component

- scene: Code surface types the Timer component with `setInterval` directly in the component body (not in an effect). Right column: the rendered output (`<p>` showing the number) and a "timers" list with one chip `timer #1 · 1000ms`. The timer ticks, the number goes 0 → 1. "Tot zover niets aan de hand."
- voiceover: "Stel je voor: je zet een setInterval gewoon in je component. Na een seconde tikt de timer, en die verhoogt de state. Tot zover niets aan de hand."
- duration: 11.56s
- transition_in: crossfade
- status: outline
- src: compositions/frames/02-zonder-effect.html
- type: pain_point
- persuasion: Setup of the trap (looks reasonable)
- beat: false calm

narrativeRole: Plants the wrong-but-plausible code the rest of the film dissects.
keyMessage: This is the code: setInterval straight in the component body.

- blueprint: compose
- focal: the code surface typing the Timer component
- roles: code surface (navy, left ~58%) = foreground subject · right column: `scherm` output card with the number + `timers` list with one chip = supporting · coral rough box around the `setInterval(…)` block = the one voltage (light, it is "the suspicious line")
- sfx: typing

Compose: asymmetric 60/40 — code left, screen + timers right (same as react-array-state frame 2).
Code (Timer.tsx):
```
const Timer = () => {
  const [number, setNumber] = useState(0);

  setInterval(() => {
    setNumber(number => number + 1);
  }, 1000);

  return <p>{number}</p>;
}
```
Scene 1 (0.0–1.8s): kicker `✱ ZO NIET` top-left; code surface enters (power3.out) with lines 1–2 and 9–10 already in place (component shell + useState + return).
Scene 2 (1.8–4.8s): on "setInterval" (1.92s) lines 4–6 type on (caret, ~0.025s/char) into the empty gap; on "gewoon in je component" (2.8s) a coral rough box draws around lines 4–6 (svg path draw, 0.5s) and a small mono tag `in de component body` sits at its right edge.
Scene 3 (4.8–8.9s): right column: label `scherm` + output card showing `0` (EB Garamond number) fades in at 4.9s; label `timers` + chip `timer #1 · 1000ms` at 5.2s. On "tikt de timer" (5.74s) the chip's dot pulses; on "verhoogt de state" (7.26s) the number steps 0→1 and `setNumber` on line 5 gets an amber wash.
Scene 4 (8.9–11.56s): "Tot zover niets aan de hand" (9.1s): a small ink `✓ 1 timer` mono note beneath the chip; hold still.
