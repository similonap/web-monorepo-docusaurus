import { Link } from 'react-router';
import { useTheme } from '../context/ThemeContext';

const PageNotFound = () => {
  const { theme } = useTheme();

  return (
    <section className={`niet-gevonden ${theme}`}>
      <h2 className={`sectie-titel ${theme}`}>Pagina niet gevonden</h2>
      <p className={`niet-gevonden-tekst ${theme}`}>Deze pagina bestaat niet (meer).</p>
      <Link to="/" className={`meer-info ${theme}`}>
        Terug naar de startpagina
      </Link>
    </section>
  );
};

export default PageNotFound;
