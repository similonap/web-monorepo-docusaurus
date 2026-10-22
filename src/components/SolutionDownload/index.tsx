import {useRef} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

type SolutionDownloadProps = {
  // Pad onder docs/exercises, bv. `react/labo-1-slotmachine`.
  exercise: string;
};

export default function SolutionDownload({exercise}: SolutionDownloadProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const href = useBaseUrl(`/exercise-files/${exercise}/solution.zip`);
  const close = () => dialog.current?.close();

  return (
    <>
      <button type="button" className="button button--secondary" onClick={() => dialog.current?.showModal()}>
        ⬇ Download oplossing
      </button>
      <dialog
        ref={dialog}
        className={styles.dialog}
        aria-labelledby={`solution-${exercise}`}
        // Een klik op de achtergrond sluit de popup.
        onClick={(event) => event.target === event.currentTarget && close()}>
        <h3 id={`solution-${exercise}`}>Eerst zelf proberen!</h3>
        <p>
          Maak de oefening eerst zelf, ook als het moeizaam gaat. Pas daarna download je de oplossing om ze met je
          eigen code te vergelijken.
        </p>
        <p>
          <strong>Als je meteen de oplossing bekijkt, leer je niets.</strong> Het zoeken en vastlopen is net het deel
          waar je het meeste uit leert.
        </p>
        <div className={styles.actions}>
          <button type="button" className="button button--primary" onClick={close} autoFocus>
            Ik probeer het eerst zelf
          </button>
          <a className="button button--secondary" href={href} download onClick={close}>
            Ik heb het geprobeerd, download
          </a>
        </div>
      </dialog>
    </>
  );
}
