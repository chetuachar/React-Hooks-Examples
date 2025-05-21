import React, { useReducer } from "react";

const UseReducerExample = () => {
  const initiaState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increase":
        return { count: state.count + 1 };

      case "decrease":
        return { count: state.count - 1 };

      case "input":
        return { count: action.payload };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initiaState);
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-4">
      <div className="card w-96 bg-base-100 card-md shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Value : {state.count}</h2>
          <p>
            Value is increasing and decreasing by one using the useReducer with
            state and dispatch.
          </p>
          <div className="justify-end card-actions">
            <button
              onClick={() => dispatch({ type: "increase" })}
              className="btn btn-primary"
            >
              Increment + 1
            </button>
            <button
              onClick={() => dispatch({ type: "decrease" })}
              className="btn btn-primary"
            >
              Decrement - 1
            </button>
          </div>
          <div className="justify-center card-actions mt-5">
            <input
              className="input"
              type="number"
              value={state.count}
              onChange={(e) =>
                dispatch({ type: "input", payload: Number(e.target.value) })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseReducerExample;
