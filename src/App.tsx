import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import Work from "./pages/Work";
import Per_Work from "./pages/Per_Work";
import Services from "./pages/Services";
import About from "./pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:id" element={<Per_Work />} />
          <Route path="/services/:id" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
