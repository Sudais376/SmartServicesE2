import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import logo from "../assets/logo.png";
import close from "../assets/close.png";

const SmNavbar = ({ onClose }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <header
        className="fixed top-0 z-30 w-full bg-white py-2 shadow-sm shadow-slate-300 flex flex-col px-8"
        role="navigation"
      >
        <div data-aos="fade-down" className="brand flex justify-between">
          <Link onClick={onClose} to="/" aria-label="Go to homepage">
            <img
              src={logo}
              width={50}
              alt="SmartServiceE logo - a minimalist abstract shape resembling a slab of concrete"
              loading="lazy"
            />
          </Link>
          {/* Close Icon */}
          <div data-aos="fade-down">
            <button
              aria-label="Close the mobile navigation menu"
              onClick={onClose}
              className="cursor-pointer"
            >
              <img
                src={close}
                width={50}
                alt="Close Menu Icon"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        <div data-aos="fade-left" className="pt-6">
          <nav data-aos="fade-left" className="flex flex-col font-semibold">
            <Link
              onClick={onClose}
              to="/"
              className="text-[#2C2C2C] hover:text-[#F76A1E] transition-all duration-500 hover:underline"
              aria-label="Go to Home page"
            >
              Home
            </Link>
            <hr
              data-aos="fade-left"
              className="border-b border-[#F76A1E] mb-4"
            />
            <Link
              onClick={onClose}
              to="/services"
              className="text-[#2C2C2C] hover:text-[#F76A1E] transition-all duration-500 hover:underline"
              aria-label="View our services"
            >
              Services
            </Link>
            <hr
              data-aos="fade-left"
              className="border-b border-[#F76A1E] mb-4"
            />
            <Link
              onClick={onClose}
              to="/blog"
              className="text-[#2C2C2C] hover:text-[#F76A1E] transition-all duration-500 hover:underline"
              aria-label="Learn more about us"
            >
              Blog
            </Link>
            <Link
              onClick={onClose}
              to="/about"
              className="text-[#2C2C2C] hover:text-[#F76A1E] transition-all duration-500 hover:underline"
              aria-label="Learn more about us"
            >
              About
            </Link>
            <hr
              data-aos="fade-left"
              className="border-b border-[#F76A1E] mb-4"
            />
            <Link
              onClick={onClose}
              to="/contact"
              className="text-[#2C2C2C] hover:text-[#F76A1E] transition-all duration-500 hover:underline"
              aria-label="Learn more about us"
            >
              Contact Us
            </Link>
            <hr
              data-aos="fade-left"
              className="border-b border-[#F76A1E] mb-4"
            />
          </nav>
        </div>

        <div data-aos="fade-right">
          <button
            aria-label="Get a free quote"
            className="w-full bg-[#F76A1E] hover:bg-[#D9601A] transition-all duration-500 px-6 py-2 text-white font-bold rounded-md"
          >
            Get a Free Quote!
          </button>
        </div>
      </header>
    </>
  );
};

export default SmNavbar;
