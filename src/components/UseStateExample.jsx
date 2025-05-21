import React, { useState, useEffect } from "react";

const UseStateExample = () => {
  const [time, setTime] = useState({
    hours: "",
    minutes: "",
    seconds: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      // Convert to IST (UTC+5:30)
      const istOffset = 5.5 * 60; // 330 minutes
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const istTime = new Date(utc + istOffset * 60000);
      //   console.log(istTime);

      setTime({
        hours: String(istTime.getHours()).padStart(2, "0"),
        minutes: String(istTime.getMinutes()).padStart(2, "0"),
        seconds: String(istTime.getSeconds()).padStart(2, "0"),
      });
    }, 1000);
    // console.log(time);

    return () => clearInterval(interval); // cleanup on unmount
  });

  return (
    <div className="flex flex-col h-screen items-center justify-center gap-5">
      <h1 className="text-4xl font-bold">Current Time</h1>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span
              style={{ "--value": time.hours }}
              aria-live="polite"
              aria-label={time.hours}
            >
              24
            </span>
          </span>
          hours
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span
              style={{ "--value": time.minutes }}
              aria-live="polite"
              aria-label={time.minutes}
            >
              59
            </span>
          </span>
          min
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span
              style={{ "--value": time.seconds }}
              aria-live="polite"
              aria-label={time.seconds}
            >
              59
            </span>
          </span>
          sec
        </div>
      </div>
    </div>
  );
};

export default UseStateExample;
