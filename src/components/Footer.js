import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import logo from '../assets/logo.png';
import gmail from '../assets/gMail.svg';
import whatsapp from '../assets/wA.svg';


const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="relative bg-[#151c2b] py-12 mt-6 px-6">
      <div className="flex flex-col lg:flex-row justify-around items-center gap-2">
        {/* Logo Section */}
        <div className="flex justify-center items-center pt-12">
          <Link
            to="/"
            className="flex justify-center items-start gap-2"
            aria-label="Go to homepage"
          >
            <img
              className="hover:scale-105 transition duration-500"
              src={logo}
              width={40}
              alt="SmartServiceE logo"
            />
            <span className="text-white pt-2 font-semibold text-lg hover:!text-[#f76a1e] transition-all duration-500">
              SmartServiceE
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="pt-6 lg:pt-14 pb-2 lg:pr-16 lg:pb-0">
          <ul className="flex flex-wrap justify-center items-center gap-8 lg:pr-16 px-8">
            <li>
              <Link
                to="/"
                className="text-white hover:!text-[#f76a1e] transition duration-500"
                aria-label="Go to Home Page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-white hover:!text-[#f76a1e] transition duration-500"
                aria-label="View our services"
              >
                Services
              </Link>
            </li>
            <li>
                <Link
                  to="/blog"
                  className="text-white hover:!text-[#F76A1E] transition-all duration-500 hover:underline"
                  aria-label="Learn more about us"
                >
                  Blog
                </Link>
              </li>
            <li>
              <Link
                to="/about"
                className="text-white hover:!text-[#f76a1e] transition duration-500"
                aria-label="Learn more about us"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white hover:!text-[#f76a1e] transition duration-500"
                aria-label="Learn more about us"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact Section */}
        <div className="pt-4 lg:pt-8 lg:mt-2">
          <div className="flex justify-center items-center gap-8">
            <a
              href="mailto:contact.yasirahmad@gmail.com?subject=Hello&body=I%20am%20interested%20in%20your%20services.%20What%20will%20be%20the%20process?"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send an email to SmartServiceE"
            >
              <img src={gmail} width={50} alt="Gmail Icon" />
            </a>

            <a
              href="https://wa.me/+923155656154"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
            >
              <img src={whatsapp} width={40} alt="WhatsApp Icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Information */}
      <div className="text-center md:pr-12 pt-8">
        <span className="text-white">
          &copy; SmartServiceE 2024 | All Rights Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
