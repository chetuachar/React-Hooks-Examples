import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center m-2">
      <div className="grid grid-flow-row grid-cols-4 gap-4">
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
      </div>
    </div>
  );
};

export default Home;
