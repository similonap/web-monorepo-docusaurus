import { createBrowserRouter, Link, NavLink, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./App.css";
import Kleurkiezer from "./exercises/Kleurkiezer";
import OmhoogOmlaag from "./exercises/OmhoogOmlaag";
import CounterListPage from "./exercises/CounterList";

const Root = () => {
  return (
    <div className="container">
      <header className="header">Mijn portfolio</header>
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/oefening1">Kleurkiezer</NavLink>
        <NavLink to="/oefening2">Omhoog/omlaag</NavLink>
        <NavLink to="/oefening3">Counter list</NavLink>
      </nav>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <h1>Welkom in mijn portfolio</h1>
      <p>Kies een oefening in de navigatiebalk om ze te bekijken.</p>
    </>
  );
};

const PageNotFound = () => {
  return (
    <>
      <h1>Pagina niet gevonden</h1>
      <p>
        Deze pagina bestaat niet. <Link to="/">Terug naar de homepagina</Link>
      </p>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "oefening1",
        element: <Kleurkiezer />,
      },
      {
        path: "oefening2",
        element: <OmhoogOmlaag />,
      },
      {
        path: "oefening3",
        element: <CounterListPage />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
