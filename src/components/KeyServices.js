import React, { useEffect } from "react";
import AOS from "aos";

const KeyServices = () => {
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
      description:
        "Transform your outdoor spaces with stamped concrete designs that combine style and durability. Perfect for patios, driveways, and more in Lubbock, TX.",
    },
    {
      id: 2,
      title: "Drive Ways",
      imgSrc: "/assets/driveWays.png",
      altText: "Drive Ways Concrete Service",
      description:
        "Create sleek, strong, and reliable driveways with our premium concrete solutions, designed to enhance your property's curb appeal.",
    },
    {
      id: 3,
      title: "Patios",
      imgSrc: "/assets/patios.png",
      altText: "Patio Concrete Service",
      description:
        "Upgrade your outdoor living space with our expertly crafted concrete patios that are both functional and visually stunning.",
    },
    {
      id: 4,
      title: "Walk Ways",
      imgSrc: "/assets/walkWays.png",
      altText: "Walk Ways Concrete Service",
      description:
        "Build durable and attractive walkways that add charm and accessibility to your home or business property in Lubbock.",
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
        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        data-aos="fade-up"
        aria-live="polite"
      >
        {services.map((service) => (
          <div
            key={service.id}
            className=" bg-[#F7F4EF] rounded-md shadow-lg hover:shadow-xl hover:bg-[#F76A1E]/10 transition-all duration-700"
            role="article"
            aria-labelledby={`service-${service.id}`}
          >
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-t-md">
              <img
                className="w-full h-[210px] object-cover rounded-t-md  transition-all duration-700"
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

            {/* Card Title and Description */}
            <div className="p-4">
              <h3
                id={`service-${service.id}`}
                className="text-lg md:text-[22px] text-[#F76A1E] font-bold text-center"
                aria-live="polite"
              >
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm mt-2 ">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyServices;
