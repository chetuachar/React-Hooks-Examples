import React from "react";

const UseCallbackComponent = ({ someFn }) => {
  console.log("Rendered UseCallbackComponent");
  someFn();
  return (
    <div className="flex h-2/6 items-center justify-center">
      <h2 className="text-4xl font-bold">Hi call back component</h2>
    </div>
  );
};

export default React.memo(UseCallbackComponent);
