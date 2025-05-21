import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row gap-2 justify-center items-center m-2">
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
    </div>
  );
};

export default Home;
