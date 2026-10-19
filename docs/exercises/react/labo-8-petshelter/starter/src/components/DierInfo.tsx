import SoortBadge from './SoortBadge';
import StatusBadge from './StatusBadge';
import type { Dier } from '../app/dieren';

interface DierInfoProps {
  dier: Dier;
}

const DierInfo = ({ dier }: DierInfoProps) => {
  return (
    <div className="dier-info light">
      <div className="dier-kop light">
        <h3 className="dier-naam light">{dier.naam}</h3>
        <span className="dier-leeftijd light">
          {dier.leeftijd} jaar oud
        </span>
      </div>
      <div className="dier-badges light">
        <SoortBadge soort={dier.soort} />
        <StatusBadge geplaatst={dier.geplaatst} />
      </div>
      <p className="dier-beschrijving light">{dier.beschrijving}</p>
    </div>
  );
};

export default DierInfo;
