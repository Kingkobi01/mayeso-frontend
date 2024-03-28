import { useEffect, useState } from "react";
import QuizContext from "./quizContext";

const QuizContextProvider = ({ children }) => {
  const [quizes, setQuizes] = useState([]);
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [topics, setTopics] = useState([
    "Sports",
    "Geography",
    "Mathematics",
    "History",
    "Entertainment",
    "Science",
  ]);
  useEffect(() => {
    const fetchQuizes = async () => {
      const res = await fetch("https://mayeso-app.adaptable.app/exams");
      if (!res.ok) {
        setFailed(true);
        throw new Error();
      }
      setLoading(false);
      const data = await res.json();
      setQuizes(data);
    };
    fetchQuizes();
  }, [quizes]);
  return (
    <QuizContext.Provider
      value={{
        quizes,
        setQuizes,
        topics,
        setTopics,
        failed,
        setFailed,
        loading,
        setLoading,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContextProvider;
