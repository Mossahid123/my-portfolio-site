import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Navbar from "./Pages/Shared/Navber/Navbar";

function App() {
  return (
    <>
     <Navbar />
     <Routes>
     <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
     </Routes>
    </>
  );
}

export default App;
