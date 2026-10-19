import StatKaart from './StatKaart';
import type { Dier } from '../app/dieren';

interface StatistiekenProps {
  dieren: Dier[];
}

const Statistieken = ({ dieren }: StatistiekenProps) => {
  const geplaatst = dieren.filter((dier) => dier.geplaatst).length;

  return (
    <section className="statistieken light">
      <StatKaart label="Dieren in het asiel" waarde={dieren.length} />
      <StatKaart label="Zoeken een thuis" waarde={dieren.length - geplaatst} />
      <StatKaart label="Al geplaatst" waarde={geplaatst} />
    </section>
  );
};

export default Statistieken;
