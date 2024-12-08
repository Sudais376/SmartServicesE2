import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      data-aos="fade-up"
      className="pt-12 pb-24 max-w-[2400px] mx-auto bg-white px-6"
      aria-labelledby="testimonials-section"
    >
      <div data-aos="fade-up" className="max-w-[1000px] mx-auto py-12">
        <h2
          data-aos="fade-up"
          className="font-bold text-center text-2xl md:text-3xl text-[#F76A1E]"
          id="testimonials-section"
        >
          See Why Lubbock Residents Trust SmartServicesE for Concrete Solutions
        </h2>
      </div>

      <div
        data-aos="fade-up"
        id="Testimonial"
        className="carousel slide"
        aria-live="polite"
      >
        <div className="carousel-inner">
          {/* First carousel item with 2 reviews */}
          <div className="carousel-item active">
            <div className="flex flex-wrap justify-center gap-6">
              <div
                className="rs bg-[#1E90FF] w-[500px] rounded-md max-h-[300px] p-6"
                aria-label="Testimonial from Emily J., Lubbock Resident"
              >
                <h3 className="text-center">
                  <span className="font-bold text-xl text-white">
                    – Emily J., Lubbock Resident
                  </span>
                </h3>
                <p className="pt-4 text-center text-white">
                  We wanted a unique patio design with stamped concrete in
                  Lubbock, Texas. The team at SmartServicesE.com guided us
                  through every step of the process, showing us different
                  patterns and colors. The end result? A beautiful backyard
                  space that’s become the highlight of our home!
                </p>
              </div>
              <div
                className="rs bg-[#1E90FF] w-[500px] rounded-md p-6"
                aria-label="Testimonial from Mike R., Lubbock Business Owner"
              >
                <h3 className="text-center">
                  <span className="font-bold text-xl text-white">
                    – Mike R., Lubbock Business Owner
                  </span>
                </h3>
                <p className="pt-4 text-center text-white">
                  As a business owner, I needed durable concrete staining in
                  Lubbock for our retail space that could withstand heavy foot
                  traffic. SmartServicesE.com not only offered the best pricing
                  but completed the project ahead of schedule. Their expertise
                  in commercial concrete is unmatched—I’ll definitely hire them
                  again.
                </p>
              </div>
            </div>
          </div>

          {/* Second carousel item with 2 reviews */}
          <div className="carousel-item">
            <div className="flex flex-wrap justify-center gap-6">
              <div
                className="rs bg-[#1E90FF] w-[500px] rounded-md p-6"
                aria-label="Testimonial from Sarah T., Lubbock Homeowner"
              >
                <h3 className="text-center">
                  <span className="font-bold text-xl text-white">
                    – Sarah T., Lubbock Homeowner
                  </span>
                </h3>
                <p className="pt-4 text-center text-white">
                  We had been searching for reliable concrete companies in
                  Lubbock, TX to replace our driveway. After dealing with
                  delayed responses from other contractors, we found
                  SmartServicesE.com. Their team provided a free quote, started
                  on time, and delivered exceptional results. Our driveway looks
                  amazing, and it was a seamless process from start to finish!
                </p>
              </div>
              <div
                className="rs bg-[#1E90FF] w-[500px] rounded-md p-6"
                aria-label="Testimonial from John D., Lubbock Homeowner"
              >
                <h3 className="text-center">
                  <span className="font-bold text-xl text-white">
                    – John D., Lubbock Homeowner
                  </span>
                </h3>
                <p className="pt-4 text-center text-white">
                  After contacting several concrete contractors in Lubbock, I
                  chose SmartServicesE.com for their professionalism and
                  competitive pricing. The stamped concrete patio they installed
                  exceeded my expectations. The attention to detail and the
                  quality of work was top-notch. Highly recommend!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#Testimonial"
          data-bs-slide="prev"
          aria-label="Previous testimonial"
        >
          <span
            className="carousel-control-prev-icon bg-[#f76a1e]"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#Testimonial"
          data-bs-slide="next"
          aria-label="Next testimonial"
        >
          <span
            className="carousel-control-next-icon bg-[#f76a1e]"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
