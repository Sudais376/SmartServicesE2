import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import Footer from "./components/Footer";
import Blog from "./Pages/Blog";
import BlogPost1 from "./components/BlogPost1";
import BlogPost2 from "./components/BlogPost2";
import BlogPost3 from "./components/BlogPost3";
import BlogPost4 from "./components/BlogPost4";
import BlogPost5 from "./components/BlogPost5";

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
            <Route path="/blog" element ={<Blog />} />
            <Route path="/expert-tips-project-ideas-and-maintanance" element ={<BlogPost1 />} />
            <Route path="/stamped-concrete-a-popular-chioce-for-homeowners" element ={<BlogPost2 />} />
            <Route path="/5-benefits-of-stamped-concrete" element ={<BlogPost3 />} />
            <Route path="/concrete-driveways-maintanance-tips" element ={<BlogPost4 />} />
            <Route path="/stamped-vs-regular-concrete" element ={<BlogPost5 />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
