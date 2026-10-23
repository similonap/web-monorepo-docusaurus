import { useTheme } from '../context/ThemeContext';

interface StatKaartProps {
  label: string;
  waarde: number;
}

const StatKaart = ({ label, waarde }: StatKaartProps) => {
  const { theme } = useTheme();

  return (
    <div className={`stat-kaart ${theme}`}>
      <span className={`stat-waarde ${theme}`}>{waarde}</span>
      <span className={`stat-label ${theme}`}>{label}</span>
    </div>
  );
};

export default StatKaart;
