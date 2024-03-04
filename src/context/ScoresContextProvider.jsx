import { useState } from "react";
import ScoresContext from "./ScoresContext";

const ScoresContextProvider = ({ children }) => {
  const [scores, setScores] = useState([]);
  return (
    <ScoresContext.Provider value={{ scores, setScores }}>
      {children}
    </ScoresContext.Provider>
  );
};

export default ScoresContextProvider;
