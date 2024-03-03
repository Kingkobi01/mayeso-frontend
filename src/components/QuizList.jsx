import React from "react";
import QuizCard from "./QuizCard";

const QuizList = ({ quizes }) => {
  return (
    <div className="max-w-[1240px] mx-auto px-4">
      <div className="grid md:grid-cols-2 pt-8 lg:grid-cols-4 gap-6">
        {quizes ? (
          quizes.map((quiz) => <QuizCard key={quiz._id} quiz={quiz} />)
        ) : (
          <p className="text-center italic text-xl md:2xl lg:4xl">
            Sorry, No Quizes Available ...
          </p>
        )}
      </div>
    </div>
  );
};

export default QuizList;
