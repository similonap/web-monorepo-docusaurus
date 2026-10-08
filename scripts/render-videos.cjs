#!/usr/bin/env node
// Rendert de HyperFrames-video's uit videos/<naam>/ naar static/videos/<naam>.mp4
// (+ een poster <naam>.jpg). Manuele stap: renderen vraagt Chrome en ffmpeg en
// kan dus niet in CI. De output staat niet in git: upload de video naar YouTube
// en embed hem met <YouTubeVideo>.
//
//   npm run videos                       alle video's
//   npm run videos -- react-useeffect    enkel de opgegeven video's
const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const ROOT = path.resolve(__dirname, '..');
const VIDEOS_DIR = path.join(ROOT, 'videos');
const OUTPUT_DIR = path.join(ROOT, 'static', 'videos');
const POSTER_SECONDS = 3;

function run(command, args, cwd) {
  console.log(`\n$ ${command} ${args.join(' ')}`);
  const result = spawnSync(command, args, { cwd, stdio: 'inherit' });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`${command} stopte met exit code ${result.status}`);
}

// Gebruik dezelfde HyperFrames-versie als waarmee de video gemaakt is.
function hyperframesVersion(dir) {
  const scripts = JSON.parse(fs.readFileSync(path.join(dir, 'package.json'), 'utf8')).scripts ?? {};
  return /hyperframes@([\w.-]+)/.exec(scripts.render ?? '')?.[1] ?? 'latest';
}

const available = fs.readdirSync(VIDEOS_DIR, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && fs.existsSync(path.join(VIDEOS_DIR, entry.name, 'index.html')))
  .map((entry) => entry.name)
  .sort();
const requested = process.argv.slice(2);
const unknown = requested.filter((name) => !available.includes(name));
if (unknown.length) {
  console.error(`Onbekende video('s): ${unknown.join(', ')}\nBeschikbaar: ${available.join(', ')}`);
  process.exit(1);
}

fs.mkdirSync(OUTPUT_DIR, { recursive: true });
for (const name of requested.length ? requested : available) {
  const dir = path.join(VIDEOS_DIR, name);
  const mp4 = path.join(OUTPUT_DIR, `${name}.mp4`);
  run('npx', ['--yes', `hyperframes@${hyperframesVersion(dir)}`, 'render', dir, '--output', mp4], dir);
  run('ffmpeg', ['-y', '-loglevel', 'error', '-ss', String(POSTER_SECONDS), '-i', mp4,
    '-frames:v', '1', '-vf', 'scale=1280:-2', '-q:v', '3', path.join(OUTPUT_DIR, `${name}.jpg`)], ROOT);
  console.log(`✓ ${path.relative(ROOT, mp4)}`);
}
