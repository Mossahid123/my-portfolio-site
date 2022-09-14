import { Route, Routes } from "react-router-dom";
import Projects from "./Components/Projects/Projects";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Navber/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/project/:projectId" element={<Projects />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
