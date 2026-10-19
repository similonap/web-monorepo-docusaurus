import DierKaart from './DierKaart';
import type { Dier } from '../app/dieren';

interface DierenLijstProps {
  dieren: Dier[];
}

const DierenLijst = ({ dieren }: DierenLijstProps) => {
  return (
    <ul className="dieren-lijst light">
      {dieren.map((dier) => (
        <li key={dier.id}>
          <DierKaart dier={dier} />
        </li>
      ))}
    </ul>
  );
};

export default DierenLijst;
