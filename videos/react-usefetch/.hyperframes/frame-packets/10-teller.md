# Frame packet: 10-teller

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usefetch
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usefetch/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 10 — Boolean of teller

- scene: Two stacked code panels compare the two options. Top: `useState<boolean>(false)` with `setTrigger(!trigger)`, a chip flipping true/false. Bottom: `useState<number>(0)` with `refetch = () => setTrigger(trigger => trigger + 1)`, a chip counting 0, 1, 2, 3 and a note `3× vernieuwd`.
- voiceover: "Trigger kan een boolean zijn, die je bij elke klik omdraait van true naar false. Dat is genoeg. Maar je kan ook een teller nemen. Dan weet je meteen hoeveel keer je al vernieuwd hebt."
- duration: 11.28s
- transition_in: crossfade
- status: outline
- src: compositions/frames/10-teller.html
- type: comparison
- persuasion: Two valid options, side by side
- beat: nuance

narrativeRole: Boolean toggle versus counter for the trigger; the course uses the counter.
keyMessage: A boolean toggle is enough; a counter also tells you how often you refreshed.

- blueprint: compose
- focal: the two panels and their chips
- roles: panel A (left, x 80, y 190, w 1060, h ~250, navy, title bar `boolean`, 26px/38px) = foreground subject (Scenes 1–2) · panel B (left, x 80, y 490, w 1060, h ~290, title bar `teller`) = foreground subject (Scene 3) · chip A `trigger: false` (right column, aligned to panel A centre) · chip B `trigger: 0` (right column, aligned to panel B centre) + mono note `3× vernieuwd` · small `Vernieuwen` button beside each chip (x ~1600) with the cursor clicking · coral = a coral underline under the mono note `3× vernieuwd` (the counter's extra) only
- sfx: typing @0.8, click-soft @2.56, click-soft @3.84, typing @7.44, click-soft @8.56, click-soft @9.0, click-soft @9.44, pop @10.4

Compose: two stacked panels left, chips + buttons right.
Panel A (boolean):
```
const [trigger, setTrigger] = useState<boolean>(false);

<button onClick={() => setTrigger(!trigger)}>Vernieuwen</button>
```
Panel B (teller):
```
const [trigger, setTrigger] = useState<number>(0);
const refetch = () => setTrigger(trigger => trigger + 1);

<button onClick={refetch}>Vernieuwen</button>
```
Scene 1 (0.0–5.0s): kicker `✱ BOOLEAN OF TELLER`; on "Trigger" (0.0s) panel A settles in; on "boolean" (0.8s) its line 1 types on (amber wash on `boolean`); on "klik" (2.56s) line 3 types on fast, and the cursor clicks button A → chip A swaps to `trigger: true` (click-soft); on "true naar false." (3.84s / 4.32s) a second click → chip A swaps to `trigger: false`.
Scene 2 (5.0–6.3s): on "genoeg." (5.52s) a small mono tag `✓ genoeg` appears beside chip A (ink 60%).
Scene 3 (6.3–11.28s): on "teller" (7.44s) panel A dims to 55% and panel B settles in, its lines type on fast (~0.014s/char), amber wash on `number` and `trigger + 1`; chip B `trigger: 0` pops; on "meteen" (9.0s) the cursor clicks button B three times (8.56s, 9.0s, 9.44s), chip B counts `1`, `2`, `3` (value slides); on "vernieuwd hebt." (10.4s / 10.84s) the note `3× vernieuwd` appears under chip B with the coral underline (pop). Hold.
