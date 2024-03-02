import React from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

function Hero({ img, headText, subText, page }) {
  return (
    <div
      className={`px-4 mx-auto max-w-[1240px] ${
        page === "home" && "lg:mb-10"
      } flex flex-col lg:flex-row items-center justify-center gap-6`}
    >
      <div className="text-center mt-8 lg:mt-6 lg:text-left flex flex-col gap-6 md:gap-3 w-[50%]">
        <h1 className="text-3xl lg:text-4xl font-bold">{headText}</h1>
        <p className="text-xl ">{subText}</p>
        <div className="font-semibold capitalize text-lg">
          <span>solve questions about </span>
          <ReactTyped
            className="text-secondary"
            strings={[
              "Sports",
              "Geography",
              "Mathematics",
              "History",
              "Entertainment",
              "Science",
            ]}
            loop
          />
        </div>
        {page !== "quiz" && (
          <Link
            to="/quiz"
            className="btn w-[400px] my-7 flex justify-center items-center lg:py-4 uppercase font-bold text-xl"
          >
            Get Started
          </Link>
        )}
      </div>
      <div>
        <img src={img} alt={img} />
      </div>
    </div>
  );
}

export default Hero;
