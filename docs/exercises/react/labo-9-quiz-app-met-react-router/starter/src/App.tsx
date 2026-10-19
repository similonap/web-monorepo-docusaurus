import { createContext, useContext, useEffect, useState } from "react";
import { decode } from "html-entities";
import { ColorRing } from "react-loader-spinner";

type Theme = "light" | "dark";

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

const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);

  const loadQuestions = async () => {
    setLoading(true);
    const response = await fetch("https://opentdb.com/api.php?amount=10");
    const data: { results: Question[] } = await response.json();
    setQuestions((current) => [...current, ...data.results]);
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

const App = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const dark = theme === "dark";

  return (
    <main style={{ minHeight: "100vh", padding: 24, color: dark ? "white" : "#222", background: dark ? "#222" : "white" }}>
      <button onClick={() => setTheme(dark ? "light" : "dark")}>
        Gebruik {dark ? "light" : "dark"} mode
      </button>
      <QuizProvider>
        <Quiz />
      </QuizProvider>
    </main>
  );
};

export default App;
