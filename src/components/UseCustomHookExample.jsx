import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const UseCustomHookExample = () => {
  const [name, setName] = useLocalStorage("username", "");
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="card w-96 bg-base-100 card-md shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Enter Name</h2>
          <p>Fill your name in below input. that is displayed in below line</p>
          <input
            className="input"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <div className="justify-end card-actions">
            <p className="text-2xl font-bold">Name : {name} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCustomHookExample;
