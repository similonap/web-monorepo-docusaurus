import { Outlet } from 'react-router';
import { useTheme } from '../context/ThemeContext';

const Main = () => {
  const { theme } = useTheme();

  return (
    <main className={`main ${theme}`}>
      <Outlet />
    </main>
  );
};

export default Main;
