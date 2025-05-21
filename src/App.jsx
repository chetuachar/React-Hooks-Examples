import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UseStateExample from "./components/UseStateExample";
import UseEffectExample from "./components/UseEffectExample";
import UseRefExample from "./components/UseRefExample";
import UseMemoExample from "./components/UseMemoExample";
import UseCallbackExample from "./components/UseCallbackExample";
import UseReducerExample from "./components/UseReducerExample";
import UseLayoutEffectExample from "./components/UseLayoutEffectExample";
import UseCustomHookExample from "./components/UseCustomHookExample";

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route index element={<Home />} />
        <Route path="/use-state" element={<UseStateExample />} />
        <Route path="/use-effect" element={<UseEffectExample />} />
        <Route path="/use-ref" element={<UseRefExample />} />
        <Route path="/use-memo" element={<UseMemoExample />} />
        <Route path="/use-callback" element={<UseCallbackExample />} />
        <Route path="/use-reducer" element={<UseReducerExample />} />
        <Route path="/use-layouteffect" element={<UseLayoutEffectExample />} />
        <Route path="/use-customhook" element={<UseCustomHookExample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
