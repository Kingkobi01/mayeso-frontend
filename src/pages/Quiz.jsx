import React, { useContext, useEffect, useState } from "react";
import { CiTimer } from "react-icons/ci";
import {
  FaBackward,
  FaForward,
  FaStepBackward,
  FaStepForward,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { Hero, Question } from "../components";
import Timer from "../components/Timer";
import quizContext from "../context/quizContext";

function Quiz() {
  const { quizId } = useParams();
  const { quizes = [] } = useContext(quizContext);
  const [quizStatus, setQuizStatus] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [timeIsUp, setTimeIsUp] = useState(false);
  const [timerKey, setTimerKey] = useState(0);

  // Find the quiz object by quizId
  const quiz = quizes.find((quiz) => quiz._id === quizId);

  // Return null if quiz is not yet loaded

  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);

  const [quizScore, setQuizScore] = useState({
    title: quiz ? quiz.title : "",
    score: 0,
    outOf: quiz ? quiz.questions.length : 0,
  });

  const firstQuestion = () => {
    currentQuestionIndex !== 0 && setcurrentQuestionIndex(0);
  };

  const prevQuestion = () => {
    currentQuestionIndex !== 0 &&
      setcurrentQuestionIndex((prevIdx) => prevIdx - 1);
  };

  const nextQuestion = () => {
    currentQuestionIndex < quiz.questions.length - 1 &&
      setcurrentQuestionIndex((prevIdx) => prevIdx + 1);
  };

  const lastQuestion = () => {
    currentQuestionIndex < quiz.questions.length - 1 &&
      setcurrentQuestionIndex(quiz.questions.length - 1);
  };

  const handleSubmit = () => {
    console.log(quizStatus);
    const indices = Object.keys(quizStatus);
    const correctQuestions = indices.filter(
      (index) => quizStatus[index].status === "correct"
    );
    const score = correctQuestions.length;
    setQuizScore((prevState) => ({ ...prevState, score }));

    setSubmitted(true);
  };

  useEffect(() => {
    if (timeIsUp && !submitted) {
      handleSubmit();
    }
  }, [timeIsUp, submitted, handleSubmit]);

  const tryAgain = () => {
    setSubmitted(false);
    setcurrentQuestionIndex(0);
    setTimeIsUp(false);
    setTimerKey((prevKey) => prevKey + 1); // Increment the key to remount Timer component
  };

  return (
    <div>
      <Hero
        img="/assets/quizHero.gif"
        headText={"Dive into Endless Learning Possibilities"}
        subText={"Explore Our Collection of Quizzes on Mayeso"}
        page={"quiz"}
      />
      <div className="py-10 max-w-[1240px] mx-auto px-4 relative">
        {quiz ? (
          <>
            <div className="absolute top-2 lg:lop-5  right-5">
              <Timer
                key={timerKey}
                initialTime={quiz.duration * 60}
                timeIsUp={timeIsUp}
                setTimeIsUp={setTimeIsUp}
              />
            </div>
            <h1 className="text-4xl lg:font-bold text-center mb-4">
              {quiz.title}
            </h1>
            <div className="flex flex-col gap-2 text-sm my-3 md:text-md">
              <p>{quiz.subject}</p>
              <p>
                <CiTimer size={20} className="inline-block" />
                <span className="text-secondary font-bold">
                  {" "}
                  {quiz.duration} mins
                </span>
              </p>
              <p>
                Written by
                <span className="text-secondary font-bold"> {quiz.author}</span>
              </p>

              <p>
                {currentQuestionIndex + 1}/{quiz.questions.length}
              </p>
            </div>
            <div>
              {!submitted && !timeIsUp ? (
                <>
                  <Question
                    questions={quiz.questions}
                    index={currentQuestionIndex}
                    quizStatus={quizStatus}
                    setQuizStatus={setQuizStatus}
                  />
                  <div className="controllers flex items-center justify-between w-[90%] lg:[w-50] mx-auto">
                    <div>
                      <button
                        onClick={firstQuestion}
                        className={`btn mx-2 ${
                          currentQuestionIndex === 0 &&
                          "bg-gray-600/40 border-none hover:bg-gray-800 hover:text-slate-400"
                        }`}
                      >
                        <FaBackward />
                      </button>
                      <button
                        onClick={prevQuestion}
                        className={`btn ${
                          currentQuestionIndex === 0 &&
                          "bg-gray-600/40 border-none hover:bg-gray-800 hover:text-slate-400"
                        }`}
                      >
                        <FaStepBackward />
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={handleSubmit}
                        className={`${
                          currentQuestionIndex === quiz.questions.length - 1
                            ? "btn"
                            : "hidden"
                        } `}
                      >
                        Submit
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={nextQuestion}
                        className={`btn mx-2 ${
                          currentQuestionIndex === quiz.questions.length - 1 &&
                          "bg-gray-600/40 border-none hover:bg-gray-800 hover:text-slate-400"
                        }`}
                      >
                        <FaStepForward />
                      </button>
                      <button
                        onClick={lastQuestion}
                        className={`btn ${
                          currentQuestionIndex === quiz.questions.length - 1 &&
                          "bg-gray-600/40 border-none hover:bg-gray-800 hover:text-slate-400"
                        }`}
                      >
                        <FaForward />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex flex-col gap-3">
                  <h3 className="text-3xl text-center py-6">
                    {timeIsUp && <p className="my-3">TIme is Up!..</p>}
                    You had {quizScore.score} out of {quizScore.outOf}
                  </h3>
                  <div className="flex gap-4 items-center mx-auto">
                    <Link className="btn" to={"/quiz"}>
                      Go Back to quizes
                    </Link>
                    <button onClick={tryAgain} className="btn">
                      Try Again
                    </button>
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="w-full flex justify-center ">
            <Link to={"/quiz"} className="btn">
              Go back to quizes
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
