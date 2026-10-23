import DierKaart from './DierKaart';
import type { Dier } from '../app/dieren';
import { useTheme } from '../context/ThemeContext';

interface DierenLijstProps {
  dieren: Dier[];
}

const DierenLijst = ({ dieren }: DierenLijstProps) => {
  const { theme } = useTheme();

  return (
    <ul className={`dieren-lijst ${theme}`}>
      {dieren.map((dier) => (
        <li key={dier.id}>
          <DierKaart dier={dier} />
        </li>
      ))}
    </ul>
  );
};

export default DierenLijst;
