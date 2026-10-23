import Intro from './Intro';
import Statistieken from './Statistieken';
import DierenOverzicht from './DierenOverzicht';
import { useTheme } from '../context/ThemeContext';

const Main = () => {
  const { theme } = useTheme();

  return (
    <main className={`main ${theme}`}>
      <Intro />
      <Statistieken />
      <DierenOverzicht />
    </main>
  );
};

export default Main;
