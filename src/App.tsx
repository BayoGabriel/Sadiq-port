import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import Work from "./pages/Work";
import Per_Work from "./pages/Per_Work";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Mobile_Development from "./pages/services/Mobile_Development";
import Web_Development from "./pages/services/Web_Development";
import Branding from "./pages/services/Branding";
import UI_UX from "./pages/services/UI_UX";
import MVP_Launches from "./pages/services/MVP_Launches";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:id" element={<Per_Work />} />
          <Route path="/careers" element={<Careers />} />
          <Route
            path="/services/mobile-development"
            element={<Mobile_Development />}
          />
          <Route
            path="/services/web-development"
            element={<Web_Development />}
          />
          <Route path="/services/branding" element={<Branding />} />
          <Route path="/services/ui-ux" element={<UI_UX />} />
          <Route path="/services/mvp-launches" element={<MVP_Launches />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
