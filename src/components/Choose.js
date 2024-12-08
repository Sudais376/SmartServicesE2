import React, {useEffect} from "react";
import AOS from 'aos'

const Choose = () => {

  useEffect (() => {
    AOS.init ( { duration : 1000 });
  }, []);

 
  return (
    <>
      <section
        className="py-12 px-6 bg-[#F5F5F5]"
        aria-labelledby="choose-us-section"
        data-aos="fade-up"
      >
        <div>
          {/* Section Heading */}
          <div className="max-w-[1000px] mx-auto">
            <h2
              className="font-bold text-center text-2xl md:text-3xl text-[#F76A1E]"
              id="choose-us-section"
              aria-level="2"
            >
              Why SmartServicesE is the Best Choice for Concrete in Lubbock
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="py-12">
            <div
              className="flex flex-wrap justify-center items-center gap-8 py-4 overflow-hidden"
              role="list"
            >
              {/* Locally Owned Card */}
              <article
                className="max-w-[400px] p-3 bg-white rounded-md shadow-md shadow-[#1e90ff] hover:!-translate-y-2 transition-all duration-500"
                data-aos="fade-up"
                aria-labelledby="locally-owned-card"
              >
                <header className="flex justify-center items-center">
                  <img
                    src="/assets/location.png"
                    alt="Location Pin Icon"
                    width={30}
                    height={30}
                    loading="lazy"
                    srcSet="/assets/location.png 1x, /assets/location.png 2x"
                  />
                </header>
                <div className="pt-3">
                  <h3
                    id="locally-owned-card"
                    className="text-lg md:text-xl text-[#F76A1E] font-bold text-center"
                  >
                    Locally Owned
                  </h3>
                  <p className="text-[#2C2C2C] py-2 text-center">
                    Proudly serving Lubbock with a personal touch only a local
                    business can provide.
                  </p>
                </div>
              </article>

              {/* Transparent Pricing Card */}
              <article
                className="max-w-[400px] p-3 bg-white rounded-md shadow-md shadow-[#1e90ff] hover:!-translate-y-2 transition-all duration-500"
                data-aos="fade-up"
                aria-labelledby="transparent-pricing-card"
              >
                <header className="flex justify-center items-center">
                  <img
                    src="/assets/pricingTag.png"
                    alt="Pricing Tag Icon"
                    width={30}
                    height={30}
                    loading="lazy"
                    srcSet="/assets/pricingTag.png 1x, /assets/pricingTag.png 2x"
                  />
                </header>
                <div className="pt-3">
                  <h3
                    id="transparent-pricing-card"
                    className="text-lg md:text-xl text-[#F76A1E] font-bold text-center"
                  >
                    Transparent Pricing
                  </h3>
                  <p className="text-[#2C2C2C] py-2 text-center">
                    Clear and upfront pricing with no hidden fees, guaranteed.
                  </p>
                </div>
              </article>

              {/* Quality Workmanship Card */}
              <article
                className="max-w-[400px] p-3 bg-white rounded-md shadow-md shadow-[#1e90ff] transform hover:!-translate-y-2 transition-all duration-500"
                data-aos="fade-up"
                aria-labelledby="quality-workmanship-card"
              >
                <header className="flex justify-center items-center">
                  <img
                    src="/assets/hammer.png"
                    alt="Hammer Icon"
                    width={30}
                    height={30}
                    loading="lazy"
                    srcSet="/assets/hammer.png 1x, /assets/hammer.png 2x"
                  />
                </header>
                <div className="pt-3">
                  <h3
                    id="quality-workmanship-card"
                    className="text-lg md:text-xl text-[#F76A1E] font-bold text-center"
                  >
                    Quality Workmanship
                  </h3>
                  <p className="text-[#2C2C2C] py-2 text-center">
                    Craftsmanship that exceeds industry standards for durability
                    and beauty.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Choose;
