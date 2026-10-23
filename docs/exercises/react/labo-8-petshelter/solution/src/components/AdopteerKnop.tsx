import { useTheme } from '../context/ThemeContext';
import { useDieren } from '../context/DierenContext';

interface AdopteerKnopProps {
  id: number;
}

const AdopteerKnop = ({ id }: AdopteerKnopProps) => {
  const { theme } = useTheme();
  const { dieren, adopteer, annuleer } = useDieren();

  const dier = dieren.find((dier) => dier.id === id);
  const geplaatst = dier ? dier.geplaatst : false;

  return (
    <>
      <button type="button" className={`adopteer-knop ${theme}`} disabled={geplaatst} onClick={() => adopteer(id)}>
        {geplaatst ? 'Heeft een thuis' : 'Ik wil adopteren'}
      </button>
      {/* Extra: een adoptie ongedaan maken */}
      {geplaatst && (
        <button type="button" className={`adopteer-knop ${theme}`} onClick={() => annuleer(id)}>
          Annuleer
        </button>
      )}
    </>
  );
};

export default AdopteerKnop;
