import { useTheme } from '../context/ThemeContext';

const Logo = () => {
  const { theme } = useTheme();

  return (
    <a href="#" className={`logo ${theme}`}>
      <span className={`logo-icoon ${theme}`}>🐾</span>
      <span className={`logo-naam ${theme}`}>De Warme Poot</span>
    </a>
  );
};

export default Logo;
