import React from 'react';
import styles from './styles.module.css';

interface LayoutDiagramProps {
  /** Korte beschrijving voor schermlezers. */
  label: string;
  children: React.ReactNode;
}

interface LayoutProps {
  /** Pad van het layout-bestand, bv. `app/layout.tsx`. */
  file: string;
  /** `column` (standaard): onder elkaar. `row`: naast elkaar, bv. een sidebar naast de inhoud. */
  direction?: 'column' | 'row';
  children: React.ReactNode;
}

interface ComponentBoxProps {
  /** Naam van het component, bv. `NavBar`. */
  name: string;
}

interface ChildrenBoxProps {
  /** Optioneel: welke pagina hier getoond wordt, bv. `app/dashboard/invoices/page.tsx`. */
  page?: string;
}

/**
 * Visualiseert hoe layouts in elkaar genest worden. Gebruik in MDX:
 *
 * <LayoutDiagram label="...">
 *   <Layout file="app/layout.tsx">
 *     <ComponentBox name="NavBar" />
 *     <ChildrenBox />
 *   </Layout>
 * </LayoutDiagram>
 */
const LayoutDiagram = ({ label, children }: LayoutDiagramProps) => (
  <figure className={styles.container} aria-label={label}>
    {children}
  </figure>
);

export const Layout = ({ file, direction = 'column', children }: LayoutProps) => (
  <div className={styles.layout}>
    <div className={styles.file}>{file}</div>
    <div className={`${styles.content} ${direction === 'row' ? styles.row : ''}`}>{children}</div>
  </div>
);

export const ComponentBox = ({ name }: ComponentBoxProps) => (
  <div className={styles.component}>
    <span className={styles.tag}>component</span>
    {name}
  </div>
);

export const ChildrenBox = ({ page }: ChildrenBoxProps) => (
  <div className={styles.children}>
    <span className={styles.childrenLabel}>{'{children}'}</span>
    {page && <span className={styles.page}>{page}</span>}
  </div>
);

export default LayoutDiagram;
