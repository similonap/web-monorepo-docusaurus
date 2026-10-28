#!/usr/bin/env node
// Genereert de vertelstem voor een interactief voorbeeld met de ElevenLabs CLI.
//
//   node scripts/generate-narration.cjs InteractiveMap [id ...] [--force]
//
// Leest src/components/<Component>/narration.json ({ name, clips: { id: tekst } })
// en schrijft static/audio/narration/<name>/<id>.mp3. Bestaande fragmenten worden
// overgeslagen, tenzij --force. Geef id's mee om enkel die fragmenten te maken.
// Stem en instellingen volgen CLAUDE.md (Andie, eleven_v4).

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const VOICE_ID = '8OezxDDjGa2d9W45o5Qs';
const MODEL_ID = 'eleven_v4';
const STABILITY = '0.5';
const OUTPUT_FORMAT = 'mp3_44100_128';
const CLI = fs.existsSync('/opt/homebrew/bin/elevenlabs') ? '/opt/homebrew/bin/elevenlabs' : 'elevenlabs';

const args = process.argv.slice(2);
const force = args.includes('--force');
const [component, ...onlyIds] = args.filter(a => !a.startsWith('--'));
if (!component) {
    console.error('Gebruik: node scripts/generate-narration.cjs <Component> [id ...] [--force]');
    process.exit(1);
}

const root = path.resolve(__dirname, '..');
const config = JSON.parse(fs.readFileSync(path.join(root, 'src/components', component, 'narration.json'), 'utf8'));
const outDir = path.join(root, 'static/audio/narration', config.name);
fs.mkdirSync(outDir, { recursive: true });

for (const id of onlyIds) {
    if (!(id in config.clips)) {
        console.error(`Onbekend fragment: ${id}`);
        process.exit(1);
    }
}

// Sequentieel: parallelle calls lopen tegen rate limiting.
for (const [id, text] of Object.entries(config.clips)) {
    if (onlyIds.length && !onlyIds.includes(id)) continue;
    const file = path.join(outDir, `${id}.mp3`);
    if (fs.existsSync(file) && !force) {
        console.log(`= ${id} (bestaat al)`);
        continue;
    }
    const out = execFileSync(CLI, [
        'text-to-speech', 'convert_with_timestamps',
        '--voice-id', VOICE_ID,
        '--model-id', MODEL_ID,
        '--voice-settings.stability', STABILITY,
        '--output-format', OUTPUT_FORMAT,
        '--text', text,
        '--format', 'json',
    ], { maxBuffer: 64 * 1024 * 1024 });
    const json = JSON.parse(out.toString('utf8'));
    fs.writeFileSync(file, Buffer.from(json.audio_base64, 'base64'));
    console.log(`+ ${id}`);
}
