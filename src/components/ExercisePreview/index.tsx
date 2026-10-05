import BrowserOnly from '@docusaurus/BrowserOnly';
import type {ComponentType} from 'react';
import styles from './styles.module.css';

type ExercisePreviewProps = {
  component: ComponentType;
};

export default function ExercisePreview({component: Preview}: ExercisePreviewProps) {
  return (
    <BrowserOnly fallback={<div className={styles.loading}>Voorbeeld laden…</div>}>
      {() => (
        <div className={styles.preview}>
          <Preview />
        </div>
      )}
    </BrowserOnly>
  );
}
