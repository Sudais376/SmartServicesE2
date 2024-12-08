import React, {useEffect} from 'react'
import AOS from 'aos'

const ServicesHero = () => {

  useEffect (() => {
    AOS.init ( { duration : 1000 });
  }, []);

 
  return (
    <div className="relative w-full h-[600px]">
      {/* Background Image */}
      <img
        className="w-full h-full object-cover"
        src="/assets/hero.png"
        srcSet="/assets/hero.png 768w, /assets/hero.png 1280w, /assets/hero.png 1920w"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 60vw"
        alt="Completed concrete driveway project by our contractors"
        loading="lazy"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2C2C2C]/90 to-[#2c2c2c]/30"></div>

      {/* Hero Text */}
      <div className="absolute top-[20%] w-full text-center text-white">
        <h1
          data-aos="fade-down"
          className="hero-text-large font-bold max-w-[1000px] mx-auto px-2"
        >
          High-Quality Stamped Concrete in Lubbock, TX
        </h1>
        <h2
          data-aos="fade-up"
          className="hero-text-medium text-[#eaeaea] max-w-[800px] mx-auto py-4 px-2"
        >
           Affordable, Durable, and Custom Designs
        </h2>
        <p
          data-aos="fade-up"
          className="hero-text-small text-[#eaeaea] max-w-[800px] mx-auto pt-2 pb-4 px-2"
        >
          Your Trusted Concrete Company in Lubbock, TX for Stunning Outdoor Spaces
        </p>
        <button
          className="bg-[#F76A1E] hover:bg-[#D9601A] transition-all duration-500 rounded-md font-semibold button-padding-horizontal button-padding-vertical"
          aria-label="Request your free concrete estimate"
        >
          Request Your Free Estimate
        </button>
      </div>
    </div>
  );
}

export default ServicesHero
