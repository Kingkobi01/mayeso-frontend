import { Link } from "react-router-dom";
import { Hero } from "../components";

function Scores() {
  const scores = JSON.parse(localStorage.getItem("scores")) || [];
  return (
    <div>
      <Hero
        img="/assets/scoresHero.gif"
        headText={"Track Your Progress, Celebrate Your Success"}
        subText={"View Your Quiz Scores on Mayeso"}
      />
      <div className="max-w[1240px] px-4 py-16 mx-auto">
        <h1 className="text-2xl lg:text-3xl my-3 lg:font-semi-bold text-center">
          Your Scores
        </h1>

        {scores &&
          scores.map((score) => (
            <div
              key={score.quizId}
              className="w-full flex items-center py-4 mb-2 justify-evenly border border-gray-500/50 rounded-md"
            >
              <Link
                to={`/quiz/${score.quizId}`}
                className="hover:text-secondary duration-150"
              >
                {score.title}
              </Link>
              <p>
                {score.score} out of {score.outOf}
              </p>
            </div>
          ))}
        <p className="text-xs pt-1 py-3 text-center">
          Please note that the scores you see here are ones from this browser
          only
        </p>
      </div>
    </div>
  );
}

export default Scores;
