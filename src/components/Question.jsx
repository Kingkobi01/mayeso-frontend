import React, { useState } from "react";
import { LuCircleDashed } from "react-icons/lu";
const Question = ({ questions, index, setQuizStatus }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const question = questions[index];
  const handleChange = (e) => {
    const selectedOption = e.target.value;
    setSelectedValue(selectedOption);

    const isCorrect = selectedOption === question.answer;

    setQuizStatus((prevStatus) => ({
      ...prevStatus,
      [index]: {
        status: isCorrect ? "correct" : "wrong",
        choice: selectedOption,
        answer: question.answer,
      },
    }));
  };

  return (
    <div className="mx-auto w-full px-4 flex flex-col min-h-[200px] items-center justify-center">
      <div className="w-full lg:w-[60%]">
        <h1 className="text-xl text-center py-4">{question.question}</h1>
        <div className="options ">
          {question.options.map((option, idx) => (
            <div className="relative py-2" key={idx}>
              <input
                type="radio"
                name="option"
                id={option}
                value={option}
                checked={option === selectedValue}
                onChange={(e) => {
                  handleChange(e);
                }}
                className="hidden peer"
              />
              <label
                key={idx}
                htmlFor={option}
                className="text-white flex items-center gap-4 p-4 rounded-xl bg-white/40 backdrop-blur-2xl shadow-xl peer-checked:bg-secondary transition delay-100 peer-checked:text-violet-900 peer-checked:font-semibold"
              >
                {option}
              </label>
              <div className="flex justify-center items-center absolute top-0 right-4 bottom-0 w-6 h-6 my-auto rounded-full bg-primary scale-0 peer-checked:scale-100 transition delay-100">
                <LuCircleDashed />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
