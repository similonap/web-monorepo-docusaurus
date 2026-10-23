import { useSearchParams } from 'react-router';
import SoortFilter from './SoortFilter';
import DierenLijst from './DierenLijst';
import type { Soort } from '../app/dieren';
import { useTheme } from '../context/ThemeContext';
import { useDieren } from '../context/DierenContext';

const DierenOverzicht = () => {
  const { theme } = useTheme();
  const { dieren } = useDieren();
  const [searchParams, setSearchParams] = useSearchParams();

  // De gekozen soort lezen we uit de URL. Een ongeldige waarde wordt 'alle'.
  const soortParam = searchParams.get('soort');
  const soort: Soort | 'alle' =
    soortParam === 'hond' || soortParam === 'kat' || soortParam === 'konijn' ? soortParam : 'alle';

  // Extra: sorteren op leeftijd
  const sort = searchParams.get('sort') === 'leeftijd' ? 'leeftijd' : 'standaard';

  const updateParam = (key: string, value: string, defaultValue: string) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (value === defaultValue) {
        next.delete(key);
      } else {
        next.set(key, value);
      }
      return next;
    });
  };

  const zichtbaar = dieren
    .filter((dier) => soort === 'alle' || dier.soort === soort)
    .sort((a, b) => (sort === 'leeftijd' ? a.leeftijd - b.leeftijd : a.id - b.id));

  return (
    <section className={`dieren-overzicht ${theme}`} id="dieren">
      <h2 className={`sectie-titel ${theme}`}>Onze dieren</h2>
      <SoortFilter actief={soort} onKies={(soort) => updateParam('soort', soort, 'alle')} />
      <select
        className={`formulier-veld ${theme}`}
        value={sort}
        onChange={(e) => updateParam('sort', e.target.value, 'standaard')}
      >
        <option value="standaard">Standaard volgorde</option>
        <option value="leeftijd">Jongste eerst</option>
      </select>
      <DierenLijst dieren={zichtbaar} />
    </section>
  );
};

export default DierenOverzicht;
