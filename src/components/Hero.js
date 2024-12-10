import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="relative w-full h-[600px]">
      {/* Background Image */}
      <img
        className="w-full h-full object-cover"
        src={hero}
        srcSet={hero}  // Use the same image for all screen sizes
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
          Lubbock’s Top Concrete Contractors
        </h1>
        <h2
          data-aos="fade-up"
          className="hero-text-medium text-[#eaeaea] max-w-[800px] mx-auto py-4 px-2"
        >
          Reliable, Durable, and Beautiful Concrete Solutions.
        </h2>
        <p
          data-aos="fade-up"
          className="hero-text-small text-[#eaeaea] max-w-[800px] mx-auto pt-2 pb-4 px-2"
        >
          From driveways to patios, we deliver affordable and long-lasting
          results in Lubbock, TX.
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
};

export default Hero;
