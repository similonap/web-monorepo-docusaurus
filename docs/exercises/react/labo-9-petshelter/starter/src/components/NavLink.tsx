import { useTheme } from '../context/ThemeContext';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const { theme } = useTheme();

  return (
    <a href={href} className={`nav-link ${theme}`}>
      {children}
    </a>
  );
};

export default NavLink;
