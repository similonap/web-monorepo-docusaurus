import { useState } from 'react';
import SoortFilter from './SoortFilter';
import DierenLijst from './DierenLijst';
import type { Soort } from '../app/dieren';
import { useTheme } from '../context/ThemeContext';
import { useDieren } from '../context/DierenContext';

const DierenOverzicht = () => {
  const { theme } = useTheme();
  const { dieren } = useDieren();
  const [soort, setSoort] = useState<Soort | 'alle'>('alle');

  const zichtbaar = soort === 'alle' ? dieren : dieren.filter((dier) => dier.soort === soort);

  return (
    <section className={`dieren-overzicht ${theme}`} id="dieren">
      <h2 className={`sectie-titel ${theme}`}>Onze dieren</h2>
      <SoortFilter actief={soort} onKies={setSoort} />
      <DierenLijst dieren={zichtbaar} />
    </section>
  );
};

export default DierenOverzicht;
