import StatKaart from './StatKaart';
import { useTheme } from '../context/ThemeContext';
import { useDieren } from '../context/DierenContext';

const Statistieken = () => {
  const { theme } = useTheme();
  const { dieren } = useDieren();

  const geplaatst = dieren.filter((dier) => dier.geplaatst).length;

  return (
    <section className={`statistieken ${theme}`}>
      <StatKaart label="Dieren in het asiel" waarde={dieren.length} />
      <StatKaart label="Zoeken een thuis" waarde={dieren.length - geplaatst} />
      <StatKaart label="Al geplaatst" waarde={geplaatst} />
    </section>
  );
};

export default Statistieken;
