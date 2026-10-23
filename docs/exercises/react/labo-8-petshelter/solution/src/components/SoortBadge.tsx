import type { Soort } from '../app/dieren';
import { useTheme } from '../context/ThemeContext';

interface SoortBadgeProps {
  soort: Soort;
}

const SoortBadge = ({ soort }: SoortBadgeProps) => {
  const { theme } = useTheme();

  return <span className={`badge soort-badge ${theme}`}>{soort}</span>;
};

export default SoortBadge;
