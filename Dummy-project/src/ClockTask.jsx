import React, { useEffect, useState } from "react";

const ClockTask = ({color}) => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div>
      <h1> Create Digital Clocks in React js </h1>
      <h1
        style={{
          color: color,
          width: "180px",
          border: "2px solid green",
          borderRadius: "10px",
          background: "grey/100",
          margin: "20px",
          padding: "15px",
        }}
      >
        {time}
      </h1>
    </div>
  );
};

export default ClockTask;
