interface FilterKnopProps {
  label: string;
  actief: boolean;
  onClick: () => void;
}

const FilterKnop = ({ label, actief, onClick }: FilterKnopProps) => {
  return (
    <button
      type="button"
      className={`filter-knop light ${actief ? 'actief' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default FilterKnop;
