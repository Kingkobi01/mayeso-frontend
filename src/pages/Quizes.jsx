import React, { useContext, useState } from "react";
import { CardSkeleton, Hero, QuizList } from "../components";
import QuizContext from "../context/quizContext";

function Quizes() {
  const { quizes, setQuizes, loading } = useContext(QuizContext);

  const [failed, setfailed] = useState(false);

  return (
    <div>
      <Hero
        img="/assets/quizesHero.gif"
        headText={"Dive into Endless Learning Possibilities"}
        subText={"Explore Our Collection of Quizzes on Mayeso"}
        page={"quiz"}
      />
      <div className="py-12">
        <h1 className="text-5xl text-center">Quizes</h1>
        {/* {!failed ? (
          <QuizList quizes={quizes} loading={loading} />
        ) : (
          <p className="text-center italic text-xl md:2xl lg:4xl">
            {" "}
            Sorry, Something went wrong...
          </p>
        )} */}
        {loading ? (
          <div className="max-w-[1240px] mx-auto px-4">
            <div className="grid md:grid-cols-2 pt-8 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, idx) => (
                <CardSkeleton key={idx} />
              ))}
            </div>
          </div>
        ) : !failed ? (
          <QuizList quizes={quizes} />
        ) : (
          <p className="text-center italic text-xl md:2xl lg:4xl">
            {" "}
            Sorry, Something went wrong...
          </p>
        )}
      </div>
    </div>
  );
}

export default Quizes;
