interface AdopteerKnopProps {
  geplaatst: boolean;
}

const AdopteerKnop = ({ geplaatst }: AdopteerKnopProps) => {
  return (
    <button type="button" className="adopteer-knop light" disabled={geplaatst}>
      {geplaatst ? 'Heeft een thuis' : 'Ik wil adopteren'}
    </button>
  );
};

export default AdopteerKnop;
