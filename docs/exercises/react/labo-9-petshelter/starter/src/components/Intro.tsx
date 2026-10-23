import { useTheme } from '../context/ThemeContext';

const Intro = () => {
  const { theme } = useTheme();

  return (
    <section className={`intro ${theme}`} id="over">
      <h1 className={`intro-titel ${theme}`}>Geef een dier een warme thuis</h1>
      <p className={`intro-tekst ${theme}`}>
        Bij De Warme Poot wachten honden, katten en konijnen op een nieuw gezin.
        Kom kennismaken en vind je nieuwe beste vriend.
      </p>
    </section>
  );
};

export default Intro;
