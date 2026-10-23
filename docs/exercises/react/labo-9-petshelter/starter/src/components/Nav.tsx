import NavLink from './NavLink';
import { useTheme } from '../context/ThemeContext';
import { useDieren } from '../context/DierenContext';

const Nav = () => {
  const { theme } = useTheme();
  const { dieren } = useDieren();

  // Extra: teller met het aantal dieren dat nog een thuis zoekt
  const zoekenThuis = dieren.filter((dier) => !dier.geplaatst).length;

  return (
    <nav className={`nav ${theme}`}>
      <NavLink href="#dieren">Onze dieren ({zoekenThuis})</NavLink>
      <NavLink href="#over">Over ons</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </nav>
  );
};

export default Nav;
