import type { Soort } from '../app/dieren';

interface SoortBadgeProps {
  soort: Soort;
}

const SoortBadge = ({ soort }: SoortBadgeProps) => {
  return <span className="badge soort-badge light">{soort}</span>;
};

export default SoortBadge;
