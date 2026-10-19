import DierAvatar from './DierAvatar';
import DierInfo from './DierInfo';
import AdopteerKnop from './AdopteerKnop';
import type { Dier } from '../app/dieren';

interface DierKaartProps {
  dier: Dier;
}

const DierKaart = ({ dier }: DierKaartProps) => {
  return (
    <article className="dier-kaart light">
      <DierAvatar soort={dier.soort} />
      <DierInfo dier={dier} />
      <AdopteerKnop geplaatst={dier.geplaatst} />
    </article>
  );
};

export default DierKaart;
