import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button type="button" className={`theme-toggle ${theme}`} aria-label="Wissel thema" onClick={toggleTheme}>
      <span className={`theme-toggle-icoon ${theme}`}>{theme === 'light' ? '🌙' : '☀️'}</span>
      <span className={`theme-toggle-label ${theme}`}>{theme === 'light' ? 'Donker' : 'Licht'}</span>
    </button>
  );
};

export default ThemeToggle;
