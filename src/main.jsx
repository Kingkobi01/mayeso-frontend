import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QuizContextProvider, ScoresContextProvider } from "./context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <QuizContextProvider>
    <ScoresContextProvider>
      <App />
    </ScoresContextProvider>
  </QuizContextProvider>
);
