import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className=" max-w-[1800px] mx-auto ">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element ={<ContactUs />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
