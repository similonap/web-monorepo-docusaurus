import { useState } from 'react';
import SoortFilter from './SoortFilter';
import DierenLijst from './DierenLijst';
import type { Dier, Soort } from '../app/dieren';

interface DierenOverzichtProps {
  dieren: Dier[];
}

const DierenOverzicht = ({ dieren }: DierenOverzichtProps) => {
  const [soort, setSoort] = useState<Soort | 'alle'>('alle');

  const zichtbaar = soort === 'alle' ? dieren : dieren.filter((dier) => dier.soort === soort);

  return (
    <section className="dieren-overzicht light" id="dieren">
      <h2 className="sectie-titel light">Onze dieren</h2>
      <SoortFilter actief={soort} onKies={setSoort} />
      <DierenLijst dieren={zichtbaar} />
    </section>
  );
};

export default DierenOverzicht;
