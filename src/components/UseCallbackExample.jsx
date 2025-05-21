import React, { useCallback, useState } from "react";
import UseCallbackComponent from "./UseCallbackComponent";

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);
  function someFn(number) {
    console.log("call from component passed value : " + number);
  }
  const callBack = useCallback(() => {
    return someFn(count);
  }, [count]);
  return (
    <div className="flex h-screen items-center justify-center m-2">
      <div className="card">
        <UseCallbackComponent someFn={callBack} />
        <div className="card w-96 bg-base-100 card-md shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Value : {count}</h2>
            <p>
              when you click Increment the component will not change untill pass
              the dependency array of count.
            </p>
            <div className="justify-end card-actions">
              <button
                onClick={() => setCount((prev) => prev + 1)}
                className="btn btn-primary"
              >
                Increment + 1
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCallbackExample;
