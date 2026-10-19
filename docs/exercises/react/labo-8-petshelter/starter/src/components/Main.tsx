import Intro from './Intro';
import Statistieken from './Statistieken';
import DierenOverzicht from './DierenOverzicht';
import { DIEREN } from '../app/dieren';

const Main = () => {
  return (
    <main className="main light">
      <Intro />
      <Statistieken dieren={DIEREN} />
      <DierenOverzicht dieren={DIEREN} />
    </main>
  );
};

export default Main;
