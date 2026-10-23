import Logo from './Logo';
import Nav from './Nav';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { theme } = useTheme();

  return (
    <header className={`header ${theme}`}>
      <Logo />
      <Nav />
      <ThemeToggle />
    </header>
  );
};

export default Header;
