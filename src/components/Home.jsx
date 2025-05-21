import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const navigate = useNavigate();
  const { phone, name } = useContext(AppContext);
  return (
    <div className="flex flex-col justify-center items-center m-2">
      <div className="grid grid-flow-row grid-cols-3 gap-4">
        <div className="stats bg-base-100 border-base-300 border">
          <div className="stat">
            <div className="stat-title">useState Example</div>
            <div className="stat-value">useState()</div>
            <div className="stat-actions">
              <button
                onClick={() => {
                  navigate("/use-state");
                }}
                className="btn btn-xs btn-success"
              >
                Goto Page
              </button>
            </div>
          </div>
        </div>

        <div className="stats bg-base-100 border-base-300 border">
          <div className="stat">
            <div className="stat-title">useEffect Example</div>
            <div className="stat-value">useEffect()</div>
            <div className="stat-actions">
              <button
                onClick={() => {
                  navigate("/use-effect");
                }}
                className="btn btn-xs btn-success"
              >
                Goto Page
              </button>
            </div>
          </div>
        </div>

        <div className="stats bg-base-100 border-base-300 border">
          <div className="stat">
            <div className="stat-title">useRef Example</div>
            <div className="stat-value">useRef()</div>
            <div className="stat-actions">
              <button
                onClick={() => {
                  navigate("/use-ref");
                }}
                className="btn btn-xs btn-success"
              >
                Goto Page
              </button>
            </div>
          </div>
        </div>

        <div className="stats bg-base-100 border-base-300 border">
          <div className="stat">
            <div className="stat-title">useMemo Example</div>
            <div className="stat-value">useMemo()</div>
            <div className="stat-actions">
              <button
                onClick={() => {
                  navigate("/use-memo");
                }}
                className="btn btn-xs btn-success"
              >
                Goto Page
              </button>
            </div>
          </div>
        </div>

        <div className="stats bg-base-100 border-base-300 border">
          <div className="stat">
            <div className="stat-title">useCallback Example</div>
            <div className="stat-value">useCallback()</div>
            <div className="stat-actions">
              <button
                onClick={() => {
                  navigate("/use-callback");
                }}
                className="btn btn-xs btn-success"
              >
                Goto Page
              </button>
            </div>
          </div>
        </div>

        <div className="stats bg-base-100 border-base-300 border">
          <div className="stat">
            <div className="stat-title">useReducer Example</div>
            <div className="stat-value">useReducer()</div>
            <div className="stat-actions">
              <button
                onClick={() => {
                  navigate("/use-reducer");
                }}
                className="btn btn-xs btn-success"
              >
                Goto Page
              </button>
            </div>
          </div>
        </div>

        <div className="stats bg-base-100 border-base-300 border">
          <div className="stat">
            <div className="stat-title">useLayoutEffect Example</div>
            <div className="stat-value">useLayoutEffect()</div>
            <div className="stat-actions">
              <button
                onClick={() => {
                  navigate("/use-layouteffect");
                }}
                className="btn btn-xs btn-success"
              >
                Goto Page
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* footer  */}
      <div>
        <h2>Name : {name}</h2>
        <h2>Phone : {phone} </h2>
      </div>
    </div>
  );
};

export default Home;
