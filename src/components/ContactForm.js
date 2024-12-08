import React, { useState, useEffect } from "react";
import Submitted from "./Submitted"; // Import Submitted component
import AOS from 'aos'

const ContactForm = ({ isFormSubmitted, onFormSubmit }) => {

  useEffect (() => {
    AOS.init ( { duration : 1000 });
  }, []);

 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Basic form validation
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    setErrors(newErrors);

    // If no errors, submit the form
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      onFormSubmit(); // Mark the form as submitted in the parent component
    }
  };

  // Prevent rendering of the form if it's already submitted
  if (isFormSubmitted) {
    return <Submitted />;
  }

  // Handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section
      id="quote-form"
      className="py-12 bg-gray-100 rounded-xl my-4"
      data-aos="fade-down"
      role="form"
      aria-labelledby="quote-form-title"
    >
      <div className="max-w-3xl mx-auto px-6">
        <h3
          id="quote-form-title"
          className="text-2xl font-bold mb-4 text-center text-gray-800"
          data-aos="fade-down"
        >
          Request Your Free Quote
        </h3>

        <form onSubmit={handleSubmit} aria-describedby="form-status">
          {/* Name Field */}
          <div className="mb-4" data-aos="fade-down">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium pb-1"
              aria-label="Your name"
            >
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-2 border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#F76A1E] focus:border-[#F76A1E]"
              placeholder="Enter your name"
              required
              aria-required="true"
              aria-describedby="name-error"
            />
            {errors.name && (
              <p id="name-error" className="text-red-500 text-sm mt-1">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-4" data-aos="fade-down">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium pb-1"
              aria-label="Your email"
            >
              Your Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-2 border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#F76A1E] focus:border-[#F76A1E]"
              placeholder="Enter your email"
              required
              aria-required="true"
              aria-describedby="email-error"
            />
            {errors.email && (
              <p id="email-error" className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="mb-4" data-aos="fade-down">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium pb-1"
              aria-label="Your message"
            >
              Your Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border-2 border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#F76A1E] focus:border-[#F76A1E]"
              rows="4"
              placeholder="Enter your message"
              required
              aria-required="true"
              aria-describedby="message-error"
            ></textarea>
            {errors.message && (
              <p id="message-error" className="text-red-500 text-sm mt-1">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div data-aos="fade-down">
            <button
              type="submit"
              className="bg-[#F76A1E] hover:bg-[#D9601A] text-white w-full font-bold px-6 py-3 rounded-md transition-all duration-500"
              disabled={isSubmitting}
              aria-live="polite"
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </button>
          </div>
        </form>

        <div id="form-status" className="mt-4">
          {isSubmitting && <p className="text-center text-orange-600">Submitting your request...</p>}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
