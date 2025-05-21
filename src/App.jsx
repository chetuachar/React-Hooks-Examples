import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UseStateExample from "./components/UseStateExample";
import UseEffectExample from "./components/UseEffectExample";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
