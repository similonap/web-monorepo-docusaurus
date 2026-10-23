import Layout from './components/Layout';
import { ThemeProvider } from './context/ThemeContext';
import { DierenProvider } from './context/DierenContext';
import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <DierenProvider>
        <Layout />
      </DierenProvider>
    </ThemeProvider>
  );
};

export default App;
