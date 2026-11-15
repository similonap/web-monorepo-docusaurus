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
      /* Wit i.p.v. zwart achter de compositie, bedieningsbalk in de huisstijl. */
      hyperframes-player {
        display: block; width: 100%; height: 100%; background: #fff;
        --hfp-controls-bg: linear-gradient(transparent, rgba(15, 23, 42, 0.45));
        --hfp-scrubber-bg: rgba(255, 255, 255, 0.45);
        --hfp-accent: #3178C6;
      }
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
        // Na een seek past de runtime de compositie pas een frame later aan.
        requestAnimationFrame(() => requestAnimationFrame(() => updateCopyButtons(doc, selectable)));
      }
      for (const event of ['play', 'pause', 'ended', 'seeked']) player.addEventListener(event, sync);

      // Gepauzeerd krijgt elk zichtbaar codevenster rechtsboven een knop die
      // de code in één keer kopieert, zoals ze op dat moment op het scherm
      // staat: zonder lijnnummers, titel- en statusbalk of nog niet getypte
      // tekst. Lege regels en inspringing blijven behouden.
      const PANEL = '.ts-code-surface, .ts-mini';
      const SKIP = '.ts-code-title, .ts-code-status, .ts-mini-title, .ts-tag, .hf-copy-btn';
      const COPY_LABEL = 'Kopieer code';
      const COPY_STYLE = \`
        .hf-copy-btn { position: fixed; transform: translateX(-100%); z-index: 2147483000; pointer-events: auto;
          font: 600 26px/1 Inter, system-ui, sans-serif; color: #1E293B; background: #FFFFFF;
          border: 2px solid #E2E8F0; border-radius: 10px; padding: 9px 20px; cursor: pointer;
          box-shadow: 0 2px 6px rgba(15, 23, 42, 0.12); user-select: none; -webkit-user-select: none; }
        .hf-copy-btn:hover { border-color: #3178C6; color: #235A97; }\`;

      const isLineNumber = (el, stop) => {
        for (let node = el; node && node !== stop; node = node.parentElement) {
          if ([...node.classList].some((name) => LINE_NUMBER.test(name))) return true;
        }
        return false;
      };
      function shown(el, stop) {
        const view = el.ownerDocument.defaultView;
        for (let node = el; node && node !== stop; node = node.parentElement) {
          const style = view.getComputedStyle(node);
          if (style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity) < 0.05) return false;
        }
        return true;
      }

      // Groepeer de zichtbare tekst per regel op basis van de positie op het
      // scherm, zodat het werkt voor elke opbouw (een span per teken, rijen
      // in lagen, ...). Lijnnummers zorgen dat lege regels behouden blijven.
      function panelText(panel) {
        const doc = panel.ownerDocument;
        const box = panel.getBoundingClientRect();
        const inside = (r) => r.width > 0 && r.bottom > box.top + 1 && r.top < box.bottom - 1 && r.right > box.left && r.left < box.right;
        const lines = [];
        const lineAt = (r) => {
          const y = r.top + r.height / 2;
          let line = lines.find((l) => Math.abs(l.y - y) < l.h / 2);
          if (!line) { line = { y, h: Math.max(r.height, 1), parts: [] }; lines.push(line); }
          return line;
        };
        for (const el of panel.querySelectorAll('*')) {
          if (![...el.classList].some((name) => LINE_NUMBER.test(name)) || !shown(el, panel)) continue;
          const r = el.getBoundingClientRect();
          if (inside(r)) lineAt(r);
        }
        const walker = doc.createTreeWalker(panel, NodeFilter.SHOW_TEXT);
        const range = doc.createRange();
        for (let node = walker.nextNode(); node; node = walker.nextNode()) {
          const el = node.parentElement;
          if (!node.data || el.closest(SKIP) || isLineNumber(el, panel) || !shown(el, panel)) continue;
          range.selectNodeContents(node);
          const r = range.getBoundingClientRect();
          if (inside(r)) lineAt(r).parts.push({ x: r.left, text: node.data });
        }
        const text = lines
          .sort((a, b) => a.y - b.y)
          .map((l) => l.parts.sort((a, b) => a.x - b.x).map((p) => p.text).join('').replace(/\\u00a0/g, ' ').replace(/\\s+$/, ''));
        while (text.length && !text[0].trim()) text.shift();
        while (text.length && !text[text.length - 1].trim()) text.pop();
        return text.join('\\n');
      }

      async function copyText(doc, text) {
        try {
          await navigator.clipboard.writeText(text);
          return true;
        } catch {
          // Zonder toegang tot de clipboard-API (bv. in een iframe).
          const area = doc.createElement('textarea');
          area.value = text;
          area.style.cssText = 'position: fixed; top: 0; left: 0; opacity: 0;';
          doc.body.append(area);
          area.select();
          const ok = doc.execCommand('copy');
          area.remove();
          return ok;
        }
      }

      function updateCopyButtons(doc, active) {
        for (const button of doc.querySelectorAll('.hf-copy-btn')) button.remove();
        if (!active) return;
        if (!doc.getElementById('hf-copy-btn-style')) {
          const style = doc.createElement('style');
          style.id = 'hf-copy-btn-style';
          style.textContent = COPY_STYLE;
          doc.head.append(style);
        }
        for (const panel of doc.querySelectorAll(PANEL)) {
          if (!shown(panel, doc.body)) continue;
          const box = panel.getBoundingClientRect();
          if (box.width < 200 || box.height < 80 || !panelText(panel)) continue;
          const button = doc.createElement('button');
          button.type = 'button';
          button.className = 'hf-copy-btn';
          button.textContent = COPY_LABEL;
          button.style.left = (box.right - 12) + 'px';
          button.style.top = (box.top + 6) + 'px';
          button.addEventListener('pointerdown', (event) => event.stopPropagation());
          button.addEventListener('click', async (event) => {
            event.stopPropagation();
            const ok = await copyText(doc, panelText(panel));
            button.textContent = ok ? 'Gekopieerd' : 'Kopiëren mislukt';
            setTimeout(() => { button.textContent = COPY_LABEL; }, 1500);
          });
          doc.body.append(button);
        }
      }

      // De player heeft zelf geen fullscreenknop: zet er een achteraan in de
      // bedieningsbalk. Fullscreen gaat over deze hele pagina (de iframe op
      // de cursussite heeft allowFullScreen). Kan het niet (iPhone), dan
      // komt er geen knop. Sneltoets: f.
      const ENTER = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>';
      const EXIT = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"/></svg>';
      const page = document.documentElement;
      const fullscreenElement = () => document.fullscreenElement ?? document.webkitFullscreenElement;
      function toggleFullscreen() {
        if (fullscreenElement()) (document.exitFullscreen ?? document.webkitExitFullscreen).call(document);
        else (page.requestFullscreen ?? page.webkitRequestFullscreen).call(page);
      }
      function addFullscreenButton() {
        const controls = player.shadowRoot?.querySelector('.hfp-controls');
        if (!controls) return requestAnimationFrame(addFullscreenButton);
        const style = document.createElement('style');
        style.textContent = \`
          .hfp-fullscreen-btn { background: none; border: none; color: var(--hfp-color, #fff); cursor: pointer;
            padding: 4px; display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; flex-shrink: 0; }
          .hfp-fullscreen-btn:hover { opacity: 0.8; }
          .hfp-fullscreen-btn svg { pointer-events: none; }\`;
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'hfp-fullscreen-btn';
        const update = () => {
          const active = Boolean(fullscreenElement());
          button.innerHTML = active ? EXIT : ENTER;
          button.setAttribute('aria-label', active ? 'Volledig scherm sluiten' : 'Volledig scherm');
        };
        button.addEventListener('click', toggleFullscreen);
        for (const event of ['fullscreenchange', 'webkitfullscreenchange']) document.addEventListener(event, update);
        update();
        player.shadowRoot.append(style);
        controls.append(button);
      }
      if (document.fullscreenEnabled || document.webkitFullscreenEnabled) {
        addFullscreenButton();
        document.addEventListener('keydown', (event) => {
          if (event.key === 'f' && !event.ctrlKey && !event.metaKey && !event.altKey) toggleFullscreen();
        });
      }
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
