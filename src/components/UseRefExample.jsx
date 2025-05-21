import React, { useEffect, useRef, useState } from "react";

const UseRefExample = () => {
  const [value, setValue] = useState(0);
  const count = useRef(0);
  const h2ShowCount = useRef();
  console.log(h2ShowCount);

  useEffect(() => {
    count.current = count.current + 1;
  });

  const handleIncrement = () => {
    setValue((prev) => prev + 1);
    h2ShowCount.current.style.color = "green";
  };
  const handleDecrement = () => {
    setValue((prev) => prev - 1);
    h2ShowCount.current.style.color = "red";
  };
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-4">
      <div className="card w-96 bg-base-100 card-md shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Value : {value}</h2>
          <p>
            Value is set using the state hook and it's handle by the increase or
            decrease the values.
          </p>
          <div className="justify-end card-actions">
            <button onClick={handleIncrement} className="btn btn-primary">
              Increment + 1
            </button>
            <button onClick={handleDecrement} className="btn btn-primary">
              Decrement - 1
            </button>
          </div>
        </div>
      </div>

      <div className="card w-96 bg-base-100 card-md shadow-sm">
        <div className="card-body">
          <h2 ref={h2ShowCount} className="card-title">
            Counter : {count.current}
          </h2>
          <p>
            It's not rerender the component. also changed the text color using
            useRef when increment green decrement red
          </p>
        </div>
      </div>
    </div>
  );
};

export default UseRefExample;
