import React, { useState } from "react";

export const TimeWithState = () => {
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  //   onClick display your current time
  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  console.log(updateTime);
  setInterval(updateTime, 1000);

  return (
    <div className="TimeWithState">
      <h2>{time}</h2>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
};
