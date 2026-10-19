import Logo from './Logo';
import Nav from './Nav';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="header light">
      <Logo />
      <Nav />
      <ThemeToggle />
    </header>
  );
};

export default Header;
