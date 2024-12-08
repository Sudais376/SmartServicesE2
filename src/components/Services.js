import React, { useEffect } from "react";
import AOS from "aos";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Service Data
  const services = [
    {
      id: 1,
      title: "Stamped Concrete",
      imgSrc: "/assets/stampedConcrete.png",
      altText: "Stamped Concrete Service",
    },
    {
      id: 2,
      title: "Drive Ways",
      imgSrc: "/assets/driveWays.png",
      altText: "Drive Ways Concrete Service",
    },
    {
      id: 3,
      title: "Patios",
      imgSrc: "/assets/patios.png",
      altText: "Patio Concrete Service",
    },
    {
      id: 4,
      title: "Walk Ways",
      imgSrc: "/assets/walkWays.png",
      altText: "Walk Ways Concrete Service",
    },
    {
      id: 5,
      title: "Flat Work",
      imgSrc: "/assets/flatWork.png",
      altText: "Flat Work Concrete Service",
    },
    {
      id: 6,
      title: "Commercial Concrete",
      imgSrc: "/assets/commercialConcrete.png",
      altText: "Commercial Concrete Service",
    },
  ];

  return (
    <section
      data-aos="fade-up"
      className="py-12 px-6 bg-gray-50"
      aria-labelledby="services-section"
    >
      {/* Section Heading */}
      <div className="text-center" role="heading" aria-level="2">
        <h2
          data-aos="fade-up"
          className="font-bold text-[22px] md:text-[28px] text-[#F76A1E]"
          id="services-section"
        >
          Our Core Services in Lubbock, TX
        </h2>
      </div>

      {/* Services Grid */}
      <div
        className="mt-12 flex flex-wrap justify-center gap-8"
        data-aos="fade-up"
        aria-live="polite"
      >
        {services.map((service) => (
          <div
            key={service.id}
            className="group max-w-[400px] bg-[#F7F4EF] rounded-md shadow-lg hover:shadow-xl transition-shadow duration-500"
            role="article"
            aria-labelledby={`service-${service.id}`}
          >
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-t-md">
              <img
                className="w-full h-[210px] object-cover rounded-t-md group-hover:scale-105 transition-transform duration-700"
                src={service.imgSrc}
                alt={service.altText}
                loading="lazy"
                srcSet={`${service.imgSrc}?w=400&h=210 400w, ${service.imgSrc}?w=800&h=420 800w`}
                sizes="(max-width: 400px) 400px, 800px"
              />
              {/* Hover Overlay */}
              <div
                className="absolute inset-0 bg-black !opacity-0 hover:!opacity-70 flex items-center justify-center rounded-t-md transition-all duration-700"
                aria-hidden="true"
              >
                <p className="text-white text-lg font-semibold !opacity-100 transition-opacity duration-700">
                  {service.title}
                </p>
              </div>
            </div>

            {/* Card Title */}
            <div className="p-4">
              <h3
                id={`service-${service.id}`}
                className="text-lg md:text-[22px] text-[#F76A1E] font-bold text-center"
                aria-live="polite"
              >
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;