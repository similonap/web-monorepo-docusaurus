// De knop staat er al, maar doet nog niets: het thema wisselen is de opdracht.
const ThemeToggle = () => {
  return (
    <button type="button" className="theme-toggle light" aria-label="Wissel thema">
      <span className="theme-toggle-icoon light">🌙</span>
      <span className="theme-toggle-label light">Donker</span>
    </button>
  );
};

export default ThemeToggle;
