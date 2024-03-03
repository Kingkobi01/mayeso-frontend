import React, { useEffect, useState } from "react";

const Timer = ({ initialTime, onTimeUp, timeIsUp, setTimeIsUp }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          setTimeIsUp(true);
          onTimeUp && onTimeUp();
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return !timeIsUp ? (
    <div>Time left: {formatTime(time)}</div>
  ) : (
    <p>Time Up!!</p>
  );
};

export default Timer;
