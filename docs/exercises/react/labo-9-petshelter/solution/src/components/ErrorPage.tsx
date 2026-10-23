// Extra: wordt getoond als er iets misloopt tijdens het renderen van een route
import { isRouteErrorResponse, Link, useRouteError } from 'react-router';
import { useTheme } from '../context/ThemeContext';

const ErrorPage = () => {
  const { theme } = useTheme();
  const error = useRouteError();

  return (
    <div className={`layout ${theme}`}>
      <main className={`main ${theme}`}>
        <section className={`niet-gevonden ${theme}`}>
          <h2 className={`sectie-titel ${theme}`}>
            {isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : 'Er ging iets mis'}
          </h2>
          <Link to="/" className={`meer-info ${theme}`}>
            Terug naar de startpagina
          </Link>
        </section>
      </main>
    </div>
  );
};

export default ErrorPage;
