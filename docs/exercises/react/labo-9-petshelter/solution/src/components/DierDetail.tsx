import { Link, useParams } from 'react-router';
import DierAvatar from './DierAvatar';
import DierInfo from './DierInfo';
import AdopteerKnop from './AdopteerKnop';
import { useTheme } from '../context/ThemeContext';
import { useDieren } from '../context/DierenContext';

const DierDetail = () => {
  const { theme } = useTheme();
  const { dieren } = useDieren();
  const { id } = useParams<{ id: string }>();

  // Een URL parameter is altijd een string, dus eerst omzetten naar een getal
  const dier = dieren.find((dier) => dier.id === Number(id));

  if (!dier) {
    return (
      <section className={`niet-gevonden ${theme}`}>
        <h2 className={`sectie-titel ${theme}`}>Dit dier bestaat niet</h2>
        <Link to="/dieren" className={`meer-info ${theme}`}>
          Terug naar onze dieren
        </Link>
      </section>
    );
  }

  return (
    <section className={`dier-detail ${theme}`}>
      <Link to="/dieren" className={`terug-link ${theme}`}>
        ← Terug naar onze dieren
      </Link>
      <DierAvatar soort={dier.soort} />
      <DierInfo dier={dier} />
      <AdopteerKnop id={dier.id} />
    </section>
  );
};

export default DierDetail;
