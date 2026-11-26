import React from 'react';
import styles from './styles.module.css';

interface RouteMapProps {
  /** Bestanden in de `app` directory, bv. `["app/page.tsx", "app/about/page.tsx"]`. */
  files: string[];
}

interface Row {
  name: string;
  depth: number;
  isFile: boolean;
  url?: string;
}

const PAGE_FILE = /^page\.(tsx|ts|jsx|js)$/;

/** Zet `app/(shop)/products/page.tsx` om naar `/products`. Route groups komen niet in de URL. */
const toUrl = (segments: string[]): string => {
  const parts = segments.slice(1, -1).filter((segment) => !/^\(.*\)$/.test(segment));
  return '/' + parts.join('/');
};

const buildRows = (files: string[]): Row[] => {
  const rows: Row[] = [];
  const seen = new Set<string>();

  files.forEach((file) => {
    const segments = file.split('/').filter(Boolean);
    segments.forEach((name, depth) => {
      const key = segments.slice(0, depth + 1).join('/');
      if (seen.has(key)) return;
      seen.add(key);

      const isFile = depth === segments.length - 1;
      rows.push({
        name,
        depth,
        isFile,
        url: isFile && PAGE_FILE.test(name) ? toUrl(segments) : undefined,
      });
    });
  });

  return rows;
};

const FolderIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h4.6l2 2h8.4A1.5 1.5 0 0 1 21 8.5v9A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5z" />
  </svg>
);

const FileIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6.5 3h7l4 4v12.5a1.5 1.5 0 0 1-1.5 1.5h-9.5A1.5 1.5 0 0 1 5 19.5v-15A1.5 1.5 0 0 1 6.5 3z" />
    <path d="M13.5 3v4h4" />
  </svg>
);

const GlobeIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
  </svg>
);

/**
 * Toont een mappenstructuur in de `app` directory met naast elke `page.tsx`
 * de URL waarop die pagina bereikbaar is.
 */
const RouteMap = ({ files }: RouteMapProps) => {
  const rows = buildRows(files);
  const pages = rows.filter((row) => row.url);

  return (
    <figure
      className={styles.container}
      aria-label={`Mappenstructuur: ${pages.map((row) => row.url).join(', ')}`}
    >
      <div className={styles.header}>
        <span>Bestand</span>
        <span>URL</span>
      </div>
      {rows.map((row, index) => (
        <div key={index} className={styles.row}>
          <div
            className={`${styles.entry} ${row.url ? styles.page : ''}`}
            style={{ paddingLeft: `calc(${row.depth} * 1.4rem + 0.75rem)` }}
          >
            {row.isFile ? <FileIcon /> : <FolderIcon />}
            <span>{row.name}</span>
          </div>
          {row.url ? (
            <div className={styles.urlCell}>
              <span className={styles.arrow} aria-hidden="true">→</span>
              <span className={styles.url}>
                <GlobeIcon />
                {row.url}
              </span>
            </div>
          ) : (
            <div />
          )}
        </div>
      ))}
    </figure>
  );
};

export default RouteMap;
