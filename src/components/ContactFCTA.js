import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm"; // Import the ContactForm component
import Submitted from "./Submitted"; // Import the Submitted component
import AOS from 'aos';
import ctabg from '../assets/cTAbg.webp'; // Import the background image

const ContactFCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // State to manage form submission

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen); // Toggle the modal visibility
  };

  const handleFormSubmit = () => {
    setIsFormSubmitted(true); // Set form as submitted
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal when the close button is clicked
    setIsFormSubmitted(false); // Reset the form submission state
  };

  return (
    <>
      {/* Final CTA Section */}
      <section
        data-aos="fade-up"
        className="relative w-full bg-cover bg-center py-16 text-white"
        style={{
          backgroundImage: `url(${ctabg})`, // Apply the imported image here
        }}
        aria-labelledby="cta-title"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800/80 to-transparent"></div>

        {/* Content */}
        <div data-aos="fade-up" className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <header>
            <h2
              id="cta-title"
              className="text-3xl md:text-4xl font-bold mb-6"
              aria-level="1"
            >
              Ready to Start Your Project?
            </h2>
          </header>

          <div data-aos="fade-up">
            <button
              onClick={handleModalToggle} // Toggle the modal on button click
              className="bg-[#F76A1E] hover:bg-[#D9601A] text-white font-semibold px-6 py-3 rounded-md md:text-lg transition-all duration-500 transform hover:scale-105"
              aria-label="Request Free Quote"
            >
              Request Your Free Quote Now
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          data-aos="fade-down"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          role="dialog"
          aria-labelledby="cta-modal-title"
          aria-hidden={!isModalOpen}
        >
          <article
            data-aos="fade-down"
            className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg relative"
            aria-labelledby="modal-title"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              data-aos="fade-down"
              className="absolute top-3 right-8 text-gray-500 hover:text-gray-700 text-3xl"
              aria-label="Close Modal"
            >
              &times;
            </button>

            {/* Contact Form Component */}
            {isFormSubmitted ? (
              <Submitted closePopUp={closeModal} />
            ) : (
              <ContactForm
                isFormSubmitted={isFormSubmitted}
                onFormSubmit={handleFormSubmit}
              />
            )}
          </article>
        </div>
      )}
    </>
  );
};

export default ContactFCTA;
