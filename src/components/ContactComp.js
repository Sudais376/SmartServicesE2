import React, { useState, useEffect } from "react";
import Choose from "../components/Choose";
import ContactFCTA from "../components/ContactFCTA";
import Submitted from "./Submitted";
import AOS from "aos";
import { Helmet } from "react-helmet";

const ContactComp = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleFormSubmit = () => {
    setIsFormSubmitted(true);
  };

  const handlePopupClose = () => {
    setIsFormSubmitted(false);
  };

  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <html lang="en" />
        <title>Top Concrete Contractors in Lubbock, TX | Free Quotes</title>
        <meta
          name="description"
          content="Get expert concrete services in Lubbock, TX. From driveways to patios, SmartServicesE provides top-quality craftsmanship with transparent pricing."
        />
        <meta
          name="keywords"
          content="concrete contractors Lubbock, concrete services TX, stamped concrete, commercial concrete, residential concrete, free quotes"
        />
        <meta name="author" content="SmartServicesE" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <div className="max-w-screen-lg mx-auto py-12 px-6">
        {/* Hero Section */}
        <header className="text-center pb-12">
          <h1
            data-aos="fade-up"
            className="font-bold text-2xl md:text-4xl text-gray-900"
          >
            Reliable Concrete Contractors in Lubbock, TX – Built to Last
          </h1>
        </header>

        {/* Introduction Section */}
        <section
          aria-labelledby="intro-heading"
          className="text-center md:px-12 pb-8"
        >
          <h2
            id="intro-heading"
            data-aos="fade-up"
            className="sr-only"
          >
            Introduction
          </h2>
          <p
            data-aos="fade-up"
            className="text-lg md:text-xl text-gray-700 leading-relaxed"
          >
            Searching for the best concrete services in Lubbock, Texas? Whether
            it’s a custom patio or a durable driveway, our team delivers expert
            craftsmanship and transparent pricing. Request your free quote
            today!
          </p>
        </section>

        {/* Features Section */}
        <section
          aria-labelledby="features-heading"
          className="md:grid md:grid-cols-2 md:gap-8 py-12"
        >
          <h2 id="features-heading" className="sr-only">
            Features and Benefits
          </h2>
          <article>
            <h3
              data-aos="fade-up"
              className="font-bold text-xl md:text-2xl text-gray-900"
            >
              Why Choose SmartServicesE?
            </h3>
            <ul
              data-aos="fade-up"
              className="list-disc list-inside text-gray-700 text-lg md:text-xl mt-4"
            >
              <li className=" pt-3 " >
                <strong>Trusted Local Experts:</strong> Serving Lubbock with
                years of expertise in residential and commercial projects.
              </li>
              <li className=" pt-3 " >
                <strong>High-Quality Workmanship:</strong> Durable, aesthetically
                pleasing concrete solutions.
              </li>
              <li className=" pt-3 " >
                <strong>Affordable Pricing:</strong> Clear estimates with no
                surprises.
              </li>
            </ul>
          </article>
          <article>
            <h3
              data-aos="fade-up"
              className="font-bold text-xl md:text-2xl text-gray-900"
            >
              Benefits You’ll Receive
            </h3>
            <ul
              data-aos="fade-up"
              className="list-disc list-inside text-gray-700 text-lg md:text-xl mt-4 "
            >
              <li className=" pt-3 " >
                <strong>Custom Designs:</strong> From stamped concrete to sleek
                modern finishes.
              </li>
              <li className=" pt-3 " >
                <strong>Quick Turnaround:</strong> Projects delivered on time
                with professional results.
              </li>
              <li className=" pt-3 " >
                <strong>Guaranteed Satisfaction:</strong> Your vision, our
                commitment.
              </li>
            </ul>
          </article>
        </section>

        {/* Contact Form */}
        <section
          aria-labelledby="contact-form-heading"
          className="bg-gray-100 p-6 md:p-12 rounded-lg shadow-lg"
        >
          <h2
            id="contact-form-heading"
            data-aos="fade-up"
            className="font-bold text-xl md:text-2xl text-gray-900 text-center mb-6"
          >
            Get Your Free Quote
          </h2>
          {!isFormSubmitted ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleFormSubmit();
              }}
              aria-labelledby="contact-form-heading"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  aria-required="true"
                  placeholder="John Doe"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-required="true"
                  placeholder="john@example.com"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  aria-required="true"
                  placeholder="Share your project details here..."
                  className="w-full p-3 border border-gray-300 rounded-md"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#f76a1e] hover:bg-[#d9601a] text-white font-bold rounded-md transition-all duration-700"
              >
                Submit Your Request
              </button>
            </form>
          ) : (
            <Submitted closePopUp={handlePopupClose} />
          )}
        </section>
      </div>

      <Choose />
      <ContactFCTA />
    </>
  );
};

export default ContactComp;
