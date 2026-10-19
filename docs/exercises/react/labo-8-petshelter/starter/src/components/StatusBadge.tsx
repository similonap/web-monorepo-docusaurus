interface StatusBadgeProps {
  geplaatst: boolean;
}

const StatusBadge = ({ geplaatst }: StatusBadgeProps) => {
  return (
    <span className={`badge status-badge light ${geplaatst ? 'geplaatst' : 'beschikbaar'}`}>
      {geplaatst ? 'Geplaatst' : 'Beschikbaar'}
    </span>
  );
};

export default StatusBadge;
