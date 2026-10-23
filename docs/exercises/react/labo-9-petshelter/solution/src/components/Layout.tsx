import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useTheme } from '../context/ThemeContext';

const Layout = () => {
  const { theme } = useTheme();

  return (
    <div className={`layout ${theme}`}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
