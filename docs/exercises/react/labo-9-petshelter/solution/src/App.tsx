import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Layout from './components/Layout';
import Home from './components/Home';
import DierenOverzicht from './components/DierenOverzicht';
import DierDetail from './components/DierDetail';
import AdoptieFormulier from './components/AdoptieFormulier';
import PageNotFound from './components/PageNotFound';
import ErrorPage from './components/ErrorPage';
import { ThemeProvider } from './context/ThemeContext';
import { DierenProvider } from './context/DierenContext';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />, // Extra
    children: [
      { index: true, element: <Home /> },
      { path: 'dieren', element: <DierenOverzicht /> },
      { path: 'dieren/:id', element: <DierDetail /> },
      { path: 'dieren/:id/adopteer', element: <AdoptieFormulier /> },
      { path: '*', element: <PageNotFound /> },
    ],
  },
]);

const App = () => {
  return (
    <ThemeProvider>
      <DierenProvider>
        <RouterProvider router={router} />
      </DierenProvider>
    </ThemeProvider>
  );
};

export default App;
