import { Link } from 'react-router';
import { useTheme } from '../context/ThemeContext';
import { useDieren } from '../context/DierenContext';

interface AdopteerKnopProps {
  id: number;
}

const AdopteerKnop = ({ id }: AdopteerKnopProps) => {
  const { theme } = useTheme();
  const { dieren, annuleer } = useDieren();

  const dier = dieren.find((dier) => dier.id === id);
  const geplaatst = dier ? dier.geplaatst : false;

  if (!geplaatst) {
    return (
      <Link to={`/dieren/${id}/adopteer`} className={`adopteer-knop ${theme}`}>
        Ik wil adopteren
      </Link>
    );
  }

  return (
    <>
      <button type="button" className={`adopteer-knop ${theme}`} disabled>
        Heeft een thuis
      </button>
      <button type="button" className={`adopteer-knop ${theme}`} onClick={() => annuleer(id)}>
        Annuleer
      </button>
    </>
  );
};

export default AdopteerKnop;
