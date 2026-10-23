import { Link } from 'react-router';
import { useTheme } from '../context/ThemeContext';

const Logo = () => {
  const { theme } = useTheme();

  return (
    <Link to="/" className={`logo ${theme}`}>
      <span className={`logo-icoon ${theme}`}>🐾</span>
      <span className={`logo-naam ${theme}`}>De Warme Poot</span>
    </Link>
  );
};

export default Logo;
