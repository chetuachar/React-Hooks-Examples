import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const phone = "+1 1234567890";
  const name = "chethan";
  return (
    <AppContext.Provider value={{ phone, name }}>
      {" "}
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
