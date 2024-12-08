import React, { useEffect } from "react";
import FinalCTA from "./FinalCTA";
import AOS from 'aos'

const AboutComponent = () => {

  useEffect (() => {
    AOS.init ( { duration : 1000 });
  }, []);

  return (
    <>
      {/* About Us Section */}
      <section
        data-aos="fade-up"
        className="max-w-screen-lg mx-auto pt-12 md:pt-24 px-6"
      >
        <header>
          <h2
            data-aos="fade-up"
            className="text-center font-bold text-xl md:text-3xl pb-6 md:pb-8 max-w-[500px] mx-auto "
          >
            Designing, Building Concrete
            <br />
            <span className="flex items-center justify-center gap-4 max-w-[300px] md:max-w-[500px] mx-auto ">
              <span className="w-1/4 h-[2px] bg-gray-400"></span>
              <span>Solutions</span>
              <span className="w-1/4 h-[2px] bg-gray-400"></span>
            </span>
          </h2>
        </header>

        <article data-aos="fade-up">
          <p data-aos="fade-up" className="md:text-center px-6 md:text-xl">
            At <strong>SmartServicesE.com</strong>, we specialize in offering
            high-quality concrete services in Lubbock, TX, tailored to both
            residential and commercial needs. Whether you're in need of a new
            driveway, patio, or concrete solutions for your business, our
            skilled team ensures superior durability and craftsmanship with
            every project.
          </p>
        </article>

        <article
          data-aos="fade-up"
          className="max-w-screen-lg mx-auto py-4 md:py-8"
        >
          <p data-aos="fade-up" className="md:text-center px-6 md:text-xl">
            As one of the top concrete contractors in Lubbock, our team has
            earned a strong reputation for delivering outstanding, lasting
            results. We are committed to meeting the needs of local homeowners
            and businesses with affordable, quality-driven concrete services.
          </p>
        </article>

        <article
          data-aos="fade-up"
          className="max-w-screen-lg mx-auto pb-6 md:pb-12"
        >
          <p data-aos="fade-up" className="md:text-center md:text-xl px-6">
            We offer a wide variety of services such as concrete staining,
            coating, and custom decorative solutions. Whether you're looking for
            a durable driveway or an elegant decorative patio, our team is here
            to exceed your expectations.
          </p>

          <p
            data-aos="fade-up"
            className="md:text-center md:text-xl px-6 py-6 md:py-12"
          >
            Our experienced contractors are equipped to handle both residential
            and commercial projects, ensuring long-lasting and visually
            appealing concrete solutions that improve your property’s value.
          </p>
        </article>
      </section>

      {/* Our Concrete Projects Section */}
      <section
        data-aos="fade-up"
        className="max-w-screen-lg mx-auto pt-12 md:pt-24 px-6"
      >
        <h3
          data-aos="fade-up"
          className="text-center font-bold text-xl md:text-3xl pb-6 md:pb-8"
        >
          Our Concrete Projects: Real Results from the Leading Concrete
          Contractors in Lubbock
        </h3>

        <article data-aos="fade-up">
          <p data-aos="fade-up" className="md:text-center px-6 pb-12 md:text-xl">
            Over the years, we’ve had the privilege of working with numerous
            clients in Lubbock, providing concrete solutions that enhance both
            the functionality and aesthetics of their properties. Our expertise
            covers everything from sleek, modern driveways to intricate, stamped
            concrete patios.
          </p>
        </article>
      </section>

      {/* Contact Section */}
      <FinalCTA />
    </>
  );
};

export default AboutComponent;
