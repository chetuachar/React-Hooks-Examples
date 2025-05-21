import React, { useEffect, useLayoutEffect } from "react";

const UseLayoutEffectExample = () => {
  useEffect(() => {
    console.log("Message in the useEffect");
  }, []);

  useLayoutEffect(() => {
    console.log("Message in the useLayoutEffect");
  }, []);
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h2 className="text-4xl font-extrabold">hi</h2>
    </div>
  );
};

export default UseLayoutEffectExample;
