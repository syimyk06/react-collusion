import React, { useEffect, useState } from "react";
import "./Timer.css";

export const Timer = () => {
  let [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [time]);

  return (
    <div className="timer">
      <p>{time}</p>
    </div>
  );
};
