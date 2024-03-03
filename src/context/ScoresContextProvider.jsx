import { useState } from "react";
import { ScoresContext } from "./ScoresContext";

const ScoresContextProvider = ({ children }) => {
  const [scores, SetScores] = useState([]);
  return (
    <ScoresContext.Provider value={{ scores, SetScores }}>
      {children}
    </ScoresContext.Provider>
  );
};

export default ScoresContextProvider;
