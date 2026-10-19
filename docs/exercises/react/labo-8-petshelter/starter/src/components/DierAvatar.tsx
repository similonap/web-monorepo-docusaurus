import type { Soort } from '../app/dieren';

const EMOJI: Record<Soort, string> = {
  hond: '🐶',
  kat: '🐱',
  konijn: '🐰',
};

interface DierAvatarProps {
  soort: Soort;
}

const DierAvatar = ({ soort }: DierAvatarProps) => {
  return <div className="dier-avatar light">{EMOJI[soort]}</div>;
};

export default DierAvatar;
