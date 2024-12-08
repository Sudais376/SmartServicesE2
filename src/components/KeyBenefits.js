import React, {useEffect} from "react";
import AOS from 'aos'

const KeyBenefits = () => {

  useEffect (() => {
    AOS.init ( { duration : 1000 });
  }, []);

 
  const benefits = [
    {
      icon: "🎨",
      title: "Customizable Designs",
      description:
        "Choose from a wide variety of patterns, textures, and colors to perfectly match your style and property.",
    },
    {
      icon: "🛡️",
      title: "Durability",
      description:
        "Designed to withstand Lubbock's challenging climate, stamped concrete offers long-lasting performance.",
    },
    {
      icon: "🧹",
      title: "Low Maintenance",
      description:
        "Stamped concrete requires minimal upkeep, saving you both time and money over the years.",
    },
    {
      icon: "🏡",
      title: "Increased Property Value",
      description:
        "Boost curb appeal and increase the value of your home or business with elegant stamped concrete.",
    },
  ];

  return (
    <>
      <section
        className="bg-white py-12 px-6"
        aria-labelledby="key-benefits-heading"
        data-aos="fade-up"
      >
        <div
          className="max-w-7xl mx-auto flex flex-wrap items-center gap-8"
          data-aos="fade-up"
        >
          {/* Text Section */}
          <header className="w-full max-w-[800px] mx-auto" data-aos="fade-up">
            <h2
              id="key-benefits-heading"
              className="text-2xl lg:text-3xl text-center font-bold text-gray-900 mb-6"
              data-aos="fade-up"
            >
              Why Choose Stamped Concrete for Your Lubbock Home or Business?
            </h2>
            <p
              className="text-center text-gray-700 md:text-lg max-w-2xl mx-auto leading-relaxed"
              data-aos="fade-up"
            >
              Discover the unmatched benefits of choosing stamped concrete for
              your property in Lubbock, TX. From customizable designs to
              long-lasting durability, stamped concrete is the perfect solution
              for enhancing your home or business.
            </p>
          </header>

          {/* Image Section */}
          <figure
            className="group relative w-full lg:w-3/4 mx-auto overflow-hidden"
            role="img"
            aria-label="Image showcasing a beautiful stamped concrete patio design"
            data-aos="fade-up"
          >
            <img
              src="/assets/patios.png"
              alt="Stamped concrete patio in Lubbock showcasing customizable designs and durability"
              className="w-full rounded-t-lg shadow-lg group-hover:scale-75 transition-all duration-700"
              data-aos="fade-up"
            />
            <figcaption className="sr-only">
              Enhance your outdoor spaces with stamped concrete in Lubbock.
            </figcaption>
            <div
              className="absolute inset-0 bg-black !opacity-0 hover:!opacity-50 rounded-t-lg transition-all duration-700"
              aria-hidden="true"
            ></div>
          </figure>

          {/* Benefits List */}
          <div className="w-full lg:w-3/4 mx-auto" data-aos="fade-up">
            <ul
              className="space-y-6"
              aria-labelledby="key-benefits-list"
              data-aos="fade-up"
            >
              {benefits.map((benefit, index) => (
                <div data-aos="fade-up">
                  <li
                    key={index}
                    className="flex items-start bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-200 transition-all duration-500"
                    role="article"
                    aria-label={benefit.title}
                  >
                    <span
                      className="text-2xl mr-4"
                      aria-hidden="true"
                      data-aos="fade-up"
                    >
                      {benefit.icon}
                    </span>
                    <div data-aos="fade-up">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-700">{benefit.description}</p>
                    </div>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default KeyBenefits;
