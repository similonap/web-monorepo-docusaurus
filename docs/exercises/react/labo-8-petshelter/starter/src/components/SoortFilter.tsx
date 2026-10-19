import FilterKnop from './FilterKnop';
import type { Soort } from '../app/dieren';

interface SoortFilterProps {
  actief: Soort | 'alle';
  onKies: (soort: Soort | 'alle') => void;
}

const OPTIES: { waarde: Soort | 'alle'; label: string }[] = [
  { waarde: 'alle', label: 'Alle dieren' },
  { waarde: 'hond', label: 'Honden' },
  { waarde: 'kat', label: 'Katten' },
  { waarde: 'konijn', label: 'Konijnen' },
];

const SoortFilter = ({ actief, onKies }: SoortFilterProps) => {
  return (
    <div className="soort-filter light">
      {OPTIES.map((optie) => (
        <FilterKnop
          key={optie.waarde}
          label={optie.label}
          actief={optie.waarde === actief}
          onClick={() => onKies(optie.waarde)}
        />
      ))}
    </div>
  );
};

export default SoortFilter;
