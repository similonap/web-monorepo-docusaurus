import { Link } from 'react-router';
import DierAvatar from './DierAvatar';
import DierInfo from './DierInfo';
import AdopteerKnop from './AdopteerKnop';
import type { Dier } from '../app/dieren';
import { useTheme } from '../context/ThemeContext';

interface DierKaartProps {
  dier: Dier;
}

const DierKaart = ({ dier }: DierKaartProps) => {
  const { theme } = useTheme();

  return (
    <article className={`dier-kaart ${theme}`}>
      <DierAvatar soort={dier.soort} />
      <DierInfo dier={dier} />
      <Link to={`/dieren/${dier.id}`} className={`meer-info ${theme}`}>
        Meer info
      </Link>
      <AdopteerKnop id={dier.id} />
    </article>
  );
};

export default DierKaart;
