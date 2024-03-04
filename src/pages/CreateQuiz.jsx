import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Hero } from "../components";

function CreateQuiz() {
  const [submitted, setSubmitted] = useState("no");
  const [quiz, setQuiz] = useState({
    title: "",
    author: "",
    subject: "",
    duration: "",
    questions: [],
  });

  const [noOfQuestions, setNoOfQuestions] = useState("");

  // async function submitQuiz(quiz) {
  //   try {
  //     const response = await fetch("https://mayeso-app.adaptable.app/exams", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(quiz),
  //     });

  //     if (!response.ok) {
  //       setSubmitted("failed");
  //       throw new Error("Failed to submit quiz");
  //     }

  //     const data = await response.json();
  //     console.log("Quiz submitted successfully:", data);
  //     setSubmitted("success");
  //     setQuiz({
  //       title: "",
  //       author: "",
  //       subject: "",
  //       duration: "",
  //       questions: [],
  //     });
  //     return data; // You can return any data received from the server
  //   } catch (error) {
  //     setSubmitted("failed");
  //     console.error("Error submitting quiz:", error);
  //     throw error; // Propagate the error for handling elsewhere if needed
  //   }
  // }

  async function submitQuiz(quiz) {
    try {
      const response = await fetch("https://mayeso-app.adaptable.app/exams", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(quiz),
      });

      if (!response.ok) {
        setSubmitted("failed");
        throw new Error("Failed to submit quiz");
      }

      let responseData;
      try {
        responseData = await response.text(); // Get response as text
        console.log("Response from server:", responseData); // Log response data
      } catch (error) {
        console.error("Error reading response as text:", error);
        setSubmitted("failed");
        throw error; // Propagate the error for handling elsewhere if needed
      }

      // Handle the response data here based on its format
      // For example, if it's plain text, you can process it accordingly

      console.log("Quiz submitted successfully.");
      setSubmitted("success");
      setQuiz({
        title: "",
        author: "",
        subject: "",
        duration: "",
        questions: [],
      });
      return responseData; // You can return any data received from the server
    } catch (error) {
      setSubmitted("failed");
      console.error("Error submitting quiz:", error);
      throw error; // Propagate the error for handling elsewhere if needed
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(quiz);
    submitQuiz(quiz);
  };

  const handleQuizDetailsChange = (e) => {
    const { name, value } = e.target;
    setQuiz((prevQuiz) => ({
      ...prevQuiz,
      [name]: value,
    }));
  };

  const handleNoOfQuestionsChange = (e) => {
    setNoOfQuestions(e.target.value);
  };

  const handleQuestionChange = (index, question) => {
    const updatedQuestions = [...quiz.questions];
    updatedQuestions[index] = question;
    setQuiz((prevQuiz) => ({
      ...prevQuiz,
      questions: updatedQuestions,
    }));
  };

  const questions = [];
  for (let index = 0; index < noOfQuestions; index++) {
    questions.push(
      <Question
        key={index}
        question={quiz.questions[index]}
        onQuestionChange={(question) => handleQuestionChange(index, question)}
      />
    );
  }

  return (
    <div>
      <Hero
        img="/assets/createHero.gif"
        headText={"Craft Your Knowledge Adventure"}
        subText={"Build Custom Quizzes with Mayeso"}
      />
      <div className="max-w-[1240px] lg:w-[60%] mx-auto px-4 py-16">
        <h1 className="text-3xl lg:text-4xl mt-3 mb-7 lg:font-semibold text-center">
          Make a Custom Quiz
        </h1>
        {/* Submitted === "no" */}
        {submitted === "no" && (
          <div className="flex justify-center items-center border border-secondary/50 py-8 rounded">
            <form
              className="w-full flex flex-col gap-5"
              onSubmit={handleSubmit}
            >
              <div className="mb-4 mx-auto md:mx-5">
                <label
                  className="block text-gray-100 text-sm font-semi-bold mb-2"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  required
                  className="shadow appearance-none rounded py-2 px-3 text-gray-50 bg-secondary/40 border-none leading-tight focus:outline-none focus:border-b focus:border-accent md:w-full"
                  id="title"
                  name="title"
                  value={quiz.title}
                  type="text"
                  placeholder="Title"
                  onChange={handleQuizDetailsChange}
                />
              </div>
              <div className="mb-4 mx-auto md:mx-5">
                <label
                  className="block text-gray-100 text-sm font-semi-bold mb-2"
                  htmlFor="author"
                >
                  Author
                </label>
                <input
                  required
                  className="shadow appearance-none rounded py-2 px-3 text-gray-50 bg-secondary/40 border-none leading-tight focus:outline-none focus:border-b focus:border-accent md:w-full"
                  id="author"
                  name="author"
                  value={quiz.author}
                  type="text"
                  placeholder="Author"
                  onChange={handleQuizDetailsChange}
                />
              </div>
              <div className="mb-4 mx-auto md:mx-5">
                <label
                  className="block text-gray-100 text-sm font-semi-bold mb-2"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  required
                  className="shadow appearance-none rounded py-2 px-3 text-gray-50 bg-secondary/40 border-none leading-tight focus:outline-none focus:border-b focus:border-accent md:w-full"
                  id="subject"
                  name="subject"
                  value={quiz.subject}
                  type="text"
                  placeholder="Subject"
                  onChange={handleQuizDetailsChange}
                />
              </div>
              <div className="mb-4 mx-auto md:mx-5">
                <label
                  className="block text-gray-100 text-sm font-semi-bold mb-2"
                  htmlFor="duration"
                >
                  Duration
                </label>
                <input
                  required
                  className="shadow appearance-none rounded py-2 px-3 text-gray-50 bg-secondary/40 border-none leading-tight focus:outline-none focus:border-b focus:border-accent md:w-full"
                  id="duration"
                  name="duration"
                  value={quiz.duration}
                  type="number"
                  placeholder="Duration (in minutes)"
                  onChange={handleQuizDetailsChange}
                />
              </div>
              <div className="mb-4 mx-auto md:mx-5">
                <label
                  className="block text-gray-100 text-sm font-semi-bold mb-2"
                  htmlFor="noOfQuestions"
                >
                  Number of Questions
                </label>
                <input
                  required
                  className="shadow appearance-none rounded py-2 px-3 text-gray-50 bg-secondary/40 border-none leading-tight focus:outline-none focus:border-b focus:border-accent md:w-full"
                  id="noOfQuestions"
                  name="noOfQuestions"
                  value={noOfQuestions}
                  type="number"
                  placeholder="Number of questions"
                  onChange={handleNoOfQuestionsChange}
                />
              </div>
              <div className="flex flex-col gap-10">{questions}</div>
              <button
                className="btn w-[40%] mx-auto uppercase font-semi-bold"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        )}
        {/* Failed Submission */}
        {submitted === "failed" && (
          <div className="flex flex-col gap-5">
            <p className="text-center">Sorry, submission failed...</p>
            <div className="flex gap-3 item-center justify-center">
              <button onClick={() => setSubmitted("no")} className="btn">
                Try Again
              </button>
              <Link to={"/"} className="btn">
                Home
              </Link>
            </div>
          </div>
        )}
        {/* Succesfull Submission */}
        {submitted === "success" && (
          <div className="flex flex-col gap-5 justify-center items-center">
            <p className="text-center">Quiz submitted successfully!!</p>
            <Link
              to={"/quiz"}
              className="btn w-[500px] flex items-center justify-center mx-auto"
            >
              Check Quizes
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateQuiz;

function Question({ question, onQuestionChange }) {
  const [localQuestionState, setLocalQuestionState] = useState({
    question: "",
    options: ["", "", "", ""],
    answer: "",
    points: 1,
  });

  const handleInputChange = (field, value) => {
    setLocalQuestionState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...localQuestionState.options];
    updatedOptions[index] = value;
    handleInputChange("options", updatedOptions);
  };

  const handleAnswerChange = (value) => {
    handleInputChange("answer", value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onQuestionChange(localQuestionState);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="mb-4 mx-auto">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="question"
        >
          Question
        </label>
        <input
          required
          value={localQuestionState.question}
          onChange={(e) => handleInputChange("question", e.target.value)}
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="question"
          type="text"
          placeholder="Question"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mb-4 gap-3 mx-auto">
        {localQuestionState.options.map((option, index) => (
          <div key={index} className="mx-auto">
            <input
              required
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              className="shadow appearance-none focus:border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-50 bg-secondary/40"
              id={`option-${index}`}
              type="text"
              placeholder={`Option ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="mb-8 mx-auto">
        <input
          required
          value={localQuestionState ? localQuestionState.answer : ""}
          onChange={(e) => handleAnswerChange(e.target.value)}
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="answer"
          type="text"
          placeholder="Answer"
        />
      </div>
      <button
        className="btn w-[40%] mx-auto uppercase font-semi-bold"
        onClick={handleSubmit}
      >
        Save Question
      </button>
    </div>
  );
}
