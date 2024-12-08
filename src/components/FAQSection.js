import React, { useState, useEffect } from "react";
import AOS from 'aos'

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);


  useEffect (() => {
    AOS.init ( { duration : 1000 });
  }, []);

 
  const faqs = [
    {
      question: "How much does concrete installation cost in Lubbock?",
      answer:
        "The cost varies depending on the project size, type of concrete, and design complexity. Contact us for a free estimate today.",
    },
    {
      question: "What types of concrete services do you offer?",
      answer:
        "We specialize in driveways, patios, stamped concrete, walkways, flatwork, and commercial concrete projects.",
    },
    {
      question: "How long does it take to complete a concrete project?",
      answer:
        "The timeline depends on the project size and complexity. Most residential projects are completed within 1–2 weeks.",
    },
    {
      question: "Do you offer stamped concrete in custom designs?",
      answer:
        "Yes, we offer a variety of custom designs and colors for stamped concrete to match your preferences.",
    },
    {
      question: "Is your work guaranteed?",
      answer:
        "Yes, we provide a workmanship guarantee to ensure customer satisfaction and long-lasting results.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section data-aos="fade-up" className="py-12 px-6 bg-[#F5F5F5]">
        <div>
          <div data-aos="fade-up" className="Heading max-w-[1000px] mx-auto">
            <h2 className="font-bold text-center text-2xl md:text-3xl text-[#F76A1E]">
              Frequently Asked Questions About Our Concrete Services in Lubbock
            </h2>
          </div>

          <div data-aos="fade-up" className="max-w-4xl mx-auto space-y-6 py-12">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-md overflow-hidden border ${
                  activeIndex === index
                    ? "border-orange-600"
                    : "border-gray-300"
                }`}
              >
                {/* Question Tab */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`cursor-pointer flex items-center justify-between w-full px-6 py-4 ${
                    activeIndex === index ? "bg-orange-100" : "bg-white"
                  }`}
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  title={`Click to expand the answer to the question: ${faq.question}`}
                >
                  <h3 className="text-lg font-semibold text-orange-600">
                    {faq.question}
                  </h3>
                  <span
                    className={` hidden md:block text-orange-600 text-xl transition-transform duration-500 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>
                {/* Answer Section */}
                <div
                  id={`faq-answer-${index}`}
                  className={`transition-all duration-300 ${
                    activeIndex === index
                      ? "max-h-[500px] p-6"
                      : "max-h-0 p-0 overflow-hidden"
                  } bg-orange-50 text-gray-700`}
                >
                  <p className="text-base">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
