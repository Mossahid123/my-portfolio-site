import { Route, Routes } from "react-router-dom";
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
     </Routes>
     <Footer />
    </>
  );
}

export default App;
