import { useTheme } from '../context/ThemeContext';

interface FilterKnopProps {
  label: string;
  actief: boolean;
  onClick: () => void;
}

const FilterKnop = ({ label, actief, onClick }: FilterKnopProps) => {
  const { theme } = useTheme();

  return (
    <button
      type="button"
      className={`filter-knop ${theme} ${actief ? 'actief' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default FilterKnop;
