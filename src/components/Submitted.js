import React, { useEffect } from "react";
import AOS from 'aos'

const Submitted = ({ closePopUp, onClose }) => {

  const handleClose = () => {
    if (closePopUp) closePopUp(); // Invoke closePopUp if it's provided
    if (onClose) onClose();       // Invoke onClose if it's provided
  };

  useEffect (() => {
    AOS.init ( { duration : 1000 });
  }, []);

 

  useEffect(() => {
    // Focus the modal when it opens for better accessibility
    const modalElement = document.getElementById("submission-modal");
    modalElement.focus();
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      role="dialog"
      aria-labelledby="submission-success-title"
      aria-describedby="submission-success-description"
      id="submission-modal"
      tabIndex="-1"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg text-center" role="document">
        <h2
          id="submission-success-title"
          data-aos="fade-up"
          className="text-3xl font-semibold text-green-600"
        >
          Thank You!
        </h2>
        <p
          id="submission-success-description"
          data-aos="fade-up"
          className="mt-4 text-lg text-gray-700"
        >
          Your request has been submitted successfully. We will get back to you
          shortly.
        </p>
        <div data-aos="fade-up">
          <button
            onClick={handleClose} // Close the pop-up when the button is clicked
            className="mt-6 bg-[#F76A1E] hover:bg-[#D9601A] text-white font-bold px-6 py-3 rounded-md transition-all duration-500 w-1/2"
            aria-label="Close the submission popup"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Submitted;
