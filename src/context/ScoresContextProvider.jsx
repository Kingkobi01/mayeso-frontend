import { useEffect, useState } from "react";
import ScoresContext from "./ScoresContext";

const ScoresContextProvider = ({ children }) => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const storedScores = JSON.parse(localStorage.getItem("scores"));
    if (storedScores) {
      setScores(storedScores);
    }
  }, []); // Only run on component mount

  // useEffect(() => {
  //   localStorage.setItem("scores", JSON.stringify(scores));
  // }, [scores]);

  return (
    <ScoresContext.Provider value={{ scores, setScores }}>
      {children}
    </ScoresContext.Provider>
  );
};

export default ScoresContextProvider;
