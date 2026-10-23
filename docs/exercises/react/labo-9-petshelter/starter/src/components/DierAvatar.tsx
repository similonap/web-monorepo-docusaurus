import type { Soort } from '../app/dieren';
import { useTheme } from '../context/ThemeContext';

const EMOJI: Record<Soort, string> = {
  hond: '🐶',
  kat: '🐱',
  konijn: '🐰',
};

interface DierAvatarProps {
  soort: Soort;
}

const DierAvatar = ({ soort }: DierAvatarProps) => {
  const { theme } = useTheme();

  return <div className={`dier-avatar ${theme}`}>{EMOJI[soort]}</div>;
};

export default DierAvatar;
