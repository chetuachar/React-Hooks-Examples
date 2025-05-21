import React, { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [increment, setIncrement] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 2000);
  }, [increment]);
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-2">
      <div>
        <div className="card w-96 bg-base-100 card-md shadow-lg">
          <div className="card-body">
            <h2 className="card-title">Increment : {increment}</h2>
            <p>
              It's Button click increment when it's clicked that time count also
              got incremented with out [] array
            </p>
            <div className="justify-end card-actions">
              <button
                onClick={() => {
                  setIncrement((prev) => prev + 1);
                }}
                className="btn btn-primary"
              >
                Increment + 1
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="card w-96 bg-base-100 card-md shadow-lg">
          <div className="card-body">
            <h2 className="card-title">Count : {count}</h2>
            <p>
              If we remove dependency then the it will incerease so much fast,
              if we set depenecy array of variable increment that time when that
              changes happend then it will update counter
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseEffectExample;
