import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`footer ${theme}`} id="contact">
      <p className={`footer-tekst ${theme}`}>
        Dierenasiel De Warme Poot · Pootjesweg 12, 9000 Gent · info@dewarmepoot.be
      </p>
    </footer>
  );
};

export default Footer;
