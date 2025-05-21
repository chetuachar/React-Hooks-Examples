import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UseStateExample from "./components/UseStateExample";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/use-state" element={<UseStateExample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
