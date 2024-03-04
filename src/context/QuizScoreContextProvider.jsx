import { useState } from "react";
import QuizScoreContext from "./QuizScoreContext";
const QuizScoreContextProvider = ({ children }) => {
  const [quizScore, setQuizScore] = useState({
    title: "",
    score: 0,
    outOf: 0,
  });

  return (
    <QuizScoreContext.Provider value={{ quizScore, setQuizScore }}>
      {children}
    </QuizScoreContext.Provider>
  );
};
export default QuizScoreContextProvider;
