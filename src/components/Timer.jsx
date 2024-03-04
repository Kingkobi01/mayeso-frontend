import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaHourglassEnd } from "react-icons/fa";
import { TbClockHour5 } from "react-icons/tb";

const Timer = ({ initialTime, onTimeUp, timeIsUp, setTimeIsUp }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          setTimeIsUp("yes"); // Update timeIsUp state when time reaches 0
          onTimeUp && onTimeUp();
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  let component = <></>;

  if (timeIsUp === "no") {
    component = (
      <div className="flex items-center gap-1">
        <span>
          <TbClockHour5 size={20} />
        </span>
        <p>Time left: {formatTime(time)}</p>
      </div>
    );
  } else if (timeIsUp === "yes") {
    component = (
      <div className="flex items-center gap-1">
        <span>
          <FaHourglassEnd size={20} />
        </span>
        <p>Time Up!!</p>
      </div>
    );
  } else if (timeIsUp === "done") {
    component = (
      <div className="flex items-center gap-2">
        <span>
          <FaCheckCircle size={20} />
        </span>
        <p>DONE!!</p>
      </div>
    );
  }

  return component;
};

export default Timer;
