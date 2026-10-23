import SoortBadge from './SoortBadge';
import StatusBadge from './StatusBadge';
import type { Dier } from '../app/dieren';
import { useTheme } from '../context/ThemeContext';

interface DierInfoProps {
  dier: Dier;
}

const DierInfo = ({ dier }: DierInfoProps) => {
  const { theme } = useTheme();

  return (
    <div className={`dier-info ${theme}`}>
      <div className={`dier-kop ${theme}`}>
        <h3 className={`dier-naam ${theme}`}>{dier.naam}</h3>
        <span className={`dier-leeftijd ${theme}`}>
          {dier.leeftijd} jaar oud
        </span>
      </div>
      <div className={`dier-badges ${theme}`}>
        <SoortBadge soort={dier.soort} />
        <StatusBadge geplaatst={dier.geplaatst} />
      </div>
      <p className={`dier-beschrijving ${theme}`}>{dier.beschrijving}</p>
    </div>
  );
};

export default DierInfo;
