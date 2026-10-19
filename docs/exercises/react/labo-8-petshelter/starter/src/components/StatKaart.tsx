interface StatKaartProps {
  label: string;
  waarde: number;
}

const StatKaart = ({ label, waarde }: StatKaartProps) => {
  return (
    <div className="stat-kaart light">
      <span className="stat-waarde light">{waarde}</span>
      <span className="stat-label light">{label}</span>
    </div>
  );
};

export default StatKaart;
