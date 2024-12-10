import React, { useState } from "react";
import { Link } from "react-router-dom";
import SmNavbar from "./SmNavbar";
import logo from '../assets/logo.png';
import menu from '../assets/menu.png';

const Navbar = () => {
  const [isSmNavbarVisible, setSmNavbarVisible] = useState(false);

  const toggleSmNavbar = () => {
    setSmNavbarVisible(!isSmNavbarVisible);
  };

  return (
    <>
      {/* Render Navbar only if SmNavbar is not visible */}
      {!isSmNavbarVisible && (
        <header
          className="sticky top-0 z-20 bg-white py-2 px-8 md:px-12 lg:px-24 shadow-sm shadow-slate-300 flex justify-between items-center"
          role="banner"
        >
          <div className="brand">
            <Link to="/" aria-label="Go to homepage">
              <img
                src={logo}
                width={50}
                alt="SmartServiceE logo - a minimalist abstract shape resembling a slab of concrete"
                loading="lazy"
              />
            </Link>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="md:hidden">
            <button
              aria-label="Toggle mobile navigation menu"
              onClick={toggleSmNavbar}
              className="cursor-pointer"
            >
              <img
                src={menu}
                width={50}
                alt="Menu Icon"
                aria-hidden="true"
              />
            </button>
          </div>

          <nav className="hidden md:flex pl-36 ">
            <ul className="flex gap-10 font-semibold">
              <li>
                <Link
                  to="/"
                  className="text-[#2C2C2C] hover:text-[#F76A1E] transition-all duration-500 hover:underline"
                  aria-label="Go to Home page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[#2C2C2C] hover:text-[#F76A1E] transition-all duration-500 hover:underline"
                  aria-label="View our services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[#2C2C2C] hover:text-[#F76A1E] transition-all duration-500 hover:underline"
                  aria-label="Learn more about us"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#2C2C2C] hover:text-[#F76A1E] transition-all duration-500 hover:underline"
                  aria-label="Learn more about us"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          <div className="hidden md:flex">
            <button
              className="bg-[#F76A1E] hover:bg-[#D9601A] transition-all duration-500 px-6 py-2 text-white font-bold rounded-md"
              aria-label="Get a free quote"
            >
              Get a Free Quote!
            </button>
          </div>
        </header>
      )}

      {/* Render SmNavbar only if it's visible */}
      {isSmNavbarVisible && <SmNavbar onClose={toggleSmNavbar} />}
    </>
  );
};

export default Navbar;
