import { NavLink } from 'react-router';
import { useTheme } from '../context/ThemeContext';
import { useDieren } from '../context/DierenContext';

const Nav = () => {
  const { theme } = useTheme();
  const { dieren } = useDieren();

  const zoekenThuis = dieren.filter((dier) => !dier.geplaatst).length;

  return (
    <nav className={`nav ${theme}`}>
      <NavLink to="/" className={`nav-link ${theme}`}>Home</NavLink>
      <NavLink to="/dieren" className={`nav-link ${theme}`}>Onze dieren ({zoekenThuis})</NavLink>
    </nav>
  );
};

export default Nav;
