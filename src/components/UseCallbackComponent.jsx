import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const UseCallbackComponent = ({ someFn }) => {
  const { phone } = useContext(AppContext);
  console.log("Rendered UseCallbackComponent");
  someFn();
  return (
    <div className="flex flex-col h-2/6 items-center justify-center">
      <h2 className="text-4xl font-bold">Hi call back component</h2>
      <h2>Phone : {phone}</h2>
    </div>
  );
};

export default React.memo(UseCallbackComponent);
