import { createContext, useContext, useEffect, useState } from "react";
import { decode } from "html-entities";
import { ColorRing } from "react-loader-spinner";
import { createBrowserRouter, Link, NavLink, Outlet, useParams } from "react-router";
import { RouterProvider } from "react-router/dom";

type Theme = "light" | "dark";

const difficulties = ["easy", "medium", "hard"] as const;
type Difficulty = (typeof difficulties)[number];

// De waarde uit de URL kan eender wat zijn, dus we controleren ze
const isDifficulty = (value: string | undefined): value is Difficulty =>
  difficulties.includes(value as Difficulty);

interface Question {
  type: "boolean" | "multiple";
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  user_answer?: string;
}

interface QuizContextValue {
  questions: Question[];
  loading: boolean;
  answerQuestion: (index: number, answer: string) => void;
  loadQuestions: () => Promise<void>;
}

const QuizContext = createContext<QuizContextValue | undefined>(undefined);

const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) throw new Error("useQuiz must be used inside QuizProvider");
  return context;
};

const QuizProvider = ({ difficulty, children }: { difficulty: Difficulty; children: React.ReactNode }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);

  const loadQuestions = async () => {
    setLoading(true);
    const response = await fetch(`https://opentdb.com/api.php?amount=10&difficulty=${difficulty}`);
    const data: { results?: Question[] } = await response.json();
    setQuestions((current) => [...current, ...(data.results ?? [])]);
    setLoading(false);
  };

  const answerQuestion = (index: number, answer: string) => {
    setQuestions((current) =>
      current.map((question, questionIndex) =>
        questionIndex === index ? { ...question, user_answer: answer } : question,
      ),
    );
  };

  useEffect(() => {
    void loadQuestions();
  }, []);

  return (
    <QuizContext.Provider value={{ questions, loading, answerQuestion, loadQuestions }}>
      {children}
    </QuizContext.Provider>
  );
};

const Quiz = () => {
  const { questions, loading, answerQuestion, loadQuestions } = useQuiz();

  return (
    <>
      {questions.map((question, index) => {
        const answers = [question.correct_answer, ...question.incorrect_answers];
        answers.sort(() => Math.random() - 0.5);
        const answered = question.user_answer !== undefined;

        return (
          <section
            key={`${question.question}-${index}`}
            style={{
              background: answered
                ? question.user_answer === question.correct_answer
                  ? "lightgreen"
                  : "#ff8b8b"
                : "transparent",
              marginBottom: 16,
              padding: 12,
            }}
          >
            <p>{decode(question.question)}</p>
            {!answered &&
              (question.type === "boolean" ? (
                ["True", "False"].map((answer) => (
                  <label key={answer} style={{ marginRight: 12 }}>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      onChange={() => answerQuestion(index, answer)}
                    />{" "}
                    {answer}
                  </label>
                ))
              ) : (
                <select defaultValue="" onChange={(event) => answerQuestion(index, event.target.value)}>
                  <option value="" disabled>Selecteer een antwoord</option>
                  {answers.map((answer) => (
                    <option key={answer} value={answer}>{decode(answer)}</option>
                  ))}
                </select>
              ))}
            {answered && question.user_answer !== question.correct_answer && (
              <strong>Het juiste antwoord was {decode(question.correct_answer)}.</strong>
            )}
          </section>
        );
      })}
      <button onClick={() => void loadQuestions()}>Laad meer vragen</button>
      {loading && <ColorRing visible height="80" width="80" ariaLabel="Vragen laden" />}
    </>
  );
};

const DifficultyChooser = () => {
  return (
    <>
      <h1>Kies een moeilijkheidsniveau</h1>
      <ul>
        {difficulties.map((difficulty) => (
          <li key={difficulty}>
            <Link to={`/quiz/${difficulty}`}>{difficulty}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

const QuizPage = () => {
  const { difficulty } = useParams<{ difficulty: string }>();

  if (!isDifficulty(difficulty)) {
    return (
      <p>
        Het moeilijkheidsniveau "{difficulty}" bestaat niet. <Link to="/">Kies een niveau</Link>
      </p>
    );
  }

  // Bij een ander niveau blijft dezelfde route actief en zou React de QuizProvider
  // hergebruiken. Door de key te veranderen wordt hij opnieuw aangemaakt en begint de quiz opnieuw.
  return (
    <>
      <h1>Quiz: {difficulty}</h1>
      <QuizProvider key={difficulty} difficulty={difficulty}>
        <Quiz />
      </QuizProvider>
    </>
  );
};

const PageNotFound = () => {
  return (
    <p>
      Deze pagina bestaat niet. <Link to="/">Terug naar het begin</Link>
    </p>
  );
};

const Root = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const dark = theme === "dark";

  const navLinkStyle = ({ isActive }: { isActive: boolean }) => ({
    color: dark ? "white" : "#222",
    fontWeight: isActive ? "bold" : "normal",
    marginRight: 12,
  });

  return (
    <main style={{ minHeight: "100vh", padding: 24, color: dark ? "white" : "#222", background: dark ? "#222" : "white" }}>
      <nav style={{ marginBottom: 16 }}>
        <NavLink to="/" style={navLinkStyle}>Home</NavLink>
        {difficulties.map((difficulty) => (
          <NavLink key={difficulty} to={`/quiz/${difficulty}`} style={navLinkStyle}>
            {difficulty}
          </NavLink>
        ))}
        <button onClick={() => setTheme(dark ? "light" : "dark")}>
          Gebruik {dark ? "light" : "dark"} mode
        </button>
      </nav>
      <Outlet />
    </main>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <DifficultyChooser />,
      },
      {
        path: "quiz/:difficulty",
        element: <QuizPage />,
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
