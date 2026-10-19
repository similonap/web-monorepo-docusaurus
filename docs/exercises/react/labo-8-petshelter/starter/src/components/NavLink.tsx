interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <a href={href} className="nav-link light">
      {children}
    </a>
  );
};

export default NavLink;
