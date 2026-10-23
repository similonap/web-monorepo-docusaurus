import { useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router';
import { useTheme } from '../context/ThemeContext';
import { useDieren } from '../context/DierenContext';

const AdoptieFormulier = () => {
  const { theme } = useTheme();
  const { dieren, adopteer } = useDieren();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [naam, setNaam] = useState<string>('');

  const dier = dieren.find((dier) => dier.id === Number(id));

  if (!dier) {
    return (
      <section className={`niet-gevonden ${theme}`}>
        <h2 className={`sectie-titel ${theme}`}>Dit dier bestaat niet</h2>
        <Link to="/dieren" className={`meer-info ${theme}`}>
          Terug naar onze dieren
        </Link>
      </section>
    );
  }

  // Een dier dat al een thuis heeft, kan je niet nog eens adopteren
  if (dier.geplaatst) {
    return <Navigate to={`/dieren/${dier.id}`} replace />;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    adopteer(dier.id);
    // replace: met de terugknop kom je niet opnieuw op het formulier terecht
    navigate(`/dieren/${dier.id}`, { replace: true });
  };

  return (
    <form className={`adoptie-formulier ${theme}`} onSubmit={handleSubmit}>
      <Link to={`/dieren/${dier.id}`} className={`terug-link ${theme}`}>
        ← Terug naar {dier.naam}
      </Link>
      <h2 className={`sectie-titel ${theme}`}>{dier.naam} adopteren</h2>
      <label className={`formulier-label ${theme}`}>
        Jouw naam
        <input
          className={`formulier-veld ${theme}`}
          value={naam}
          onChange={(e) => setNaam(e.target.value)}
        />
      </label>
      <button type="submit" className={`adopteer-knop ${theme}`} disabled={naam === ''}>
        Bevestig adoptie
      </button>
    </form>
  );
};

export default AdoptieFormulier;
