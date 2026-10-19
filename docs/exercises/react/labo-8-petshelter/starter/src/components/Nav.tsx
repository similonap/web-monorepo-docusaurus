import NavLink from './NavLink';

const Nav = () => {
  return (
    <nav className="nav light">
      <NavLink href="#dieren">Onze dieren</NavLink>
      <NavLink href="#over">Over ons</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </nav>
  );
};

export default Nav;
