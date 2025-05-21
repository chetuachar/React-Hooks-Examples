import React, { useMemo, useState } from "react";

const UseMemoExample = () => {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);
  const cubeNum = (number) => {
    console.log("Calculation done!");
    return Math.pow(number, 3);
  };
  //   const result = cubeNum(number); // it will be run every time rerender
  const result = useMemo(() => {
    return cubeNum(number);
  }, [number]);

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="card w-96 bg-base-100 card-md shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Cube of the Given Number</h2>
          <p>Enter the Number to get Cube value</p>
          <input
            type="number"
            className="input"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <div className="justify-start card-actions m-6">
            <h2 className="card-title">
              {number}
              <sup>3</sup> = {result}
            </h2>
          </div>
          <div className="justify-start items-center card-actions m-6">
            <button
              onClick={() => setCount((prev) => prev + 1)}
              className="btn btn-primary"
            >
              Counter ++
            </button>
            <h2 className="card-title">Count value : {count}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseMemoExample;
