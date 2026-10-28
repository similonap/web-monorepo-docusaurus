// Zet HyperFrames-projecten uit videos/<naam>/ klaar als statische bestanden,
// zodat <HyperframesVideo name="<naam>" /> ze live in de browser afspeelt,
// zonder te renderen. Doet hetzelfde als `hyperframes play`: elke .html krijgt
// het runtime-script, en een kleine pagina toont de compositie in
// <hyperframes-player>. Runtime en player komen van jsDelivr, in de
// HyperFrames-versie waarmee het project gemaakt is.
const fs = require('node:fs/promises');
const path = require('node:path');

const VIDEOS_DIR = path.resolve(__dirname, '..', 'videos');
const CDN = 'https://cdn.jsdelivr.net/npm/hyperframes';
// Het origineel heet index.html, maar die naam vermijden we: met cleanUrls
// zou .../index.html een URL zonder slash worden en braken de relatieve paden.
const COMPOSITION = 'composition.html';
const REFERENCE = /\b(?:src|href|data-composition-src|poster)\s*=\s*["']([^"']+)["']|url\(\s*["']?([^"')]+)["']?\s*\)/g;

async function exists(file) {
  try { await fs.access(file); return true; }
  catch (error) { if (error.code === 'ENOENT') return false; throw error; }
}

async function hyperframesVersion(dir) {
  const pkg = JSON.parse(await fs.readFile(path.join(dir, 'package.json'), 'utf8'));
  const version = /hyperframes@(\d+\.\d+\.\d+)/.exec(JSON.stringify(pkg.scripts ?? {}))?.[1];
  if (!version) throw new Error(`Geen vaste hyperframes-versie in ${path.join(dir, 'package.json')}`);
  return version;
}

// Volgt alle lokale verwijzingen vanaf index.html. Subcomposities worden in het
// hoofddocument geladen, dus hun paden zijn relatief aan de projectmap.
async function referencedFiles(dir) {
  const found = new Set(['index.html']);
  const queue = ['index.html'];
  while (queue.length) {
    const file = queue.shift();
    if (!/\.(html|css)$/.test(file)) continue;
    const source = await fs.readFile(path.join(dir, file), 'utf8');
    for (const match of source.matchAll(REFERENCE)) {
      const reference = (match[1] ?? match[2]).trim().split(/[?#]/)[0];
      if (!reference || /^([a-z][a-z0-9+.-]*:|\/\/|\/|#)/i.test(reference)) continue;
      for (const base of ['', path.dirname(file)]) {
        const relative = path.posix.normalize(path.posix.join(base, reference));
        if (relative.startsWith('..') || found.has(relative)) continue;
        const stat = await fs.stat(path.join(dir, relative)).catch(() => null);
        if (!stat?.isFile()) continue;
        found.add(relative);
        queue.push(relative);
        break;
      }
    }
  }
  return [...found].sort();
}

// Zelfde plaats als de runtime-injectie van `hyperframes play`.
function injectRuntime(html, version) {
  const tag = `<script src="${CDN}@${version}/dist/hyperframe-runtime.js"></script>`;
  const head = /<head\b[^>]*>/i.exec(html);
  if (head) return `${html.slice(0, head.index + head[0].length)}\n${tag}${html.slice(head.index + head[0].length)}`;
  const body = html.search(/<body\b/i);
  return body === -1 ? `${tag}\n${html}` : `${html.slice(0, body)}${tag}\n${html.slice(body)}`;
}

function playerPage(name, version) {
  return `<!doctype html>
<html lang="nl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${name}</title>
    <style>
      html, body { margin: 0; height: 100%; background: #fff; overflow: hidden; }
      hyperframes-player { display: block; width: 100%; height: 100%; }
    </style>
  </head>
  <body>
    <hyperframes-player src="${COMPOSITION}" controls></hyperframes-player>
    <script src="${CDN}@${version}/dist/hyperframes-player.global.js"></script>
    <script>
      // Gepauzeerd laat de player de muis door naar de compositie, zodat je
      // tekst (bv. code) kan selecteren en kopiëren. Voor de eerste keer
      // afspelen blijft klik-om-te-starten werken.
      const player = document.querySelector('hyperframes-player');
      // Lijnnummers in de codevlakken: ts-ln, f02t-ln, gutter, ...
      const LINE_NUMBER = /(^|-)(ln[a-z0-9]*|lns|gutter|lineno|lnum)$|^(newln|cln|cm-num)$/;
      const STYLE = \`
        [data-composition-src$="captions.html"] { pointer-events: none; }
        [data-hf-noselect], [data-hf-noselect] * { user-select: none !important; -webkit-user-select: none !important; }\`;

      // Getypte code staat al volledig in de DOM, verborgen met opacity 0.
      // Enkel wat zichtbaar is (en geen lijnnummer) mag mee in de selectie.
      function markUnselectable(doc) {
        const view = doc.defaultView;
        for (const el of doc.body.querySelectorAll('*')) {
          const style = view.getComputedStyle(el);
          const hidden = style.opacity === '0' || style.visibility === 'hidden' || style.display === 'none';
          el.toggleAttribute('data-hf-noselect', hidden || [...el.classList].some((name) => LINE_NUMBER.test(name)));
        }
      }

      function sync() {
        const selectable = player.paused && player.currentTime > 0;
        player.toggleAttribute('interactive', selectable);
        const doc = player.shadowRoot?.querySelector('iframe')?.contentDocument;
        if (!doc?.body) return;
        if (!doc.getElementById('hf-copy-style')) {
          const style = doc.createElement('style');
          style.id = 'hf-copy-style';
          style.textContent = STYLE;
          doc.head.append(style);
          doc.addEventListener('pointerdown', () => player.hasAttribute('interactive') && markUnselectable(doc), true);
        }
        if (!selectable) doc.getSelection()?.removeAllRanges();
      }
      for (const event of ['play', 'pause', 'ended', 'seeked']) player.addEventListener(event, sync);
    </script>
  </body>
</html>
`;
}

async function bundleHyperframes(names, targetDir) {
  for (const name of [...new Set(names)].sort()) {
    const dir = path.join(VIDEOS_DIR, name);
    if (!/^[\w-]+$/.test(name) || !await exists(path.join(dir, 'index.html'))) {
      throw new Error(`Onbekende HyperFrames-video "${name}": verwacht videos/${name}/index.html`);
    }
    const version = await hyperframesVersion(dir);
    const out = path.join(targetDir, name);
    for (const file of await referencedFiles(dir)) {
      const target = path.join(out, file === 'index.html' ? COMPOSITION : file);
      await fs.mkdir(path.dirname(target), { recursive: true });
      if (file.endsWith('.html')) {
        await fs.writeFile(target, injectRuntime(await fs.readFile(path.join(dir, file), 'utf8'), version));
      } else {
        await fs.copyFile(path.join(dir, file), target);
      }
    }
    await fs.writeFile(path.join(out, 'player.html'), playerPage(name, version));
  }
}

module.exports = { bundleHyperframes, referencedFiles };
