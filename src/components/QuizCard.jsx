import React from "react";
import { CiTimer } from "react-icons/ci";
import { MdFormatListNumberedRtl } from "react-icons/md";
import { Link } from "react-router-dom";
const QuizCard = ({
  quiz: { _id, title, author, subject, duration, questions },
}) => {
  let img = "";
  let alt = "";

  const image = {
    History:
      "https://images.pexels.com/photos/161798/stonehenge-architecture-history-monolith-161798.jpeg?cs=srgb&dl=pexels-pixabay-161798.jpg&fm=jpg&w=5000&h=2383&_gl=1*otk2y7*_ga*MTc1NDkyNjQxOC4xNzAzOTI5Mzk5*_ga_8JE65Q40S6*MTcwOTQyNzg2OS40LjEuMTcwOTQyODAzMS4wLjAuMA..",
    Sports:
      "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?cs=srgb&dl=pexels-pixabay-46798.jpg&fm=jpg&w=3000&h=2000&_gl=1*kof1xx*_ga*MTc1NDkyNjQxOC4xNzAzOTI5Mzk5*_ga_8JE65Q40S6*MTcwOTQyNzg2OS40LjEuMTcwOTQyNzg4OC4wLjAuMA..",
    Biology:
      "https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?cs=srgb&dl=pexels-pawel-kalisinski-1076758.jpg&fm=jpg&w=3230&h=3648&_gl=1*xl1v2n*_ga*MTc1NDkyNjQxOC4xNzAzOTI5Mzk5*_ga_8JE65Q40S6*MTcwOTQyNzg2OS40LjEuMTcwOTQyOTYxNS4wLjAuMA..",
    Geography: "/assets/globe.png",
    Mathemathica: "/assets/math.png",
    other:
      "https://images.pexels.com/photos/419635/notebook-empty-design-paper-419635.jpeg?cs=srgb&dl=pexels-skitterphoto-419635.jpg&fm=jpg&h=600&w=400&fit=crop&_gl=1*1x3y3dj*_ga*MTc1NDkyNjQxOC4xNzAzOTI5Mzk5*_ga_8JE65Q40S6*MTcwOTQyNzg2OS40LjEuMTcwOTQyOTcwMi4wLjAuMA..",
  };

  return (
    <Link
      to={`/quiz/${_id}`}
      className="rounded-md overflow-hidden shadow-sm hover:shadow-lg duration-150 shadow-slate-200/30 hover:shadow-slate-200/30 flex flex-col"
    >
      <div className="relative">
        {/* <img
          className="w-full"
          src={image[subject] || image.other.img}
          alt={subject}
        /> */}
        <div
          className="w-full py-20 object-fill bg-blue-900"
          style={{
            backgroundImage: `url(${image[subject] || image.other})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>

        <span>
          <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
            {subject}
          </div>
        </span>
      </div>
      <div className="px-6 py-4 mb-auto">
        <h2 className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2">
          {title}
        </h2>
        <p className="text-secondary text-sm">
          Made by <span className="text-accent font-semibold">{author}</span>
        </p>
      </div>
      <div className="px-6 py-3 flex flex-row items-center justify-between bg-secondary">
        <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
          <MdFormatListNumberedRtl size={20} />
          <span className="ml-1">{questions.length} questions</span>
        </span>

        <span
          href="#"
          className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
        >
          <CiTimer size={20} />
          <span className="ml-1">{duration} mins</span>
        </span>
      </div>
    </Link>
  );
};

export default QuizCard;

// https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGlzdG9yeXxlbnwwfHwwfHx8MA%3D%3D history
// https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlvbG9neXxlbnwwfHwwfHx8MA%3D%3D biology
//  sports
