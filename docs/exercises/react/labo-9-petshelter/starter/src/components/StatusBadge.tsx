import { useTheme } from '../context/ThemeContext';

interface StatusBadgeProps {
  geplaatst: boolean;
}

const StatusBadge = ({ geplaatst }: StatusBadgeProps) => {
  const { theme } = useTheme();

  return (
    <span className={`badge status-badge ${theme} ${geplaatst ? 'geplaatst' : 'beschikbaar'}`}>
      {geplaatst ? 'Geplaatst' : 'Beschikbaar'}
    </span>
  );
};

export default StatusBadge;
