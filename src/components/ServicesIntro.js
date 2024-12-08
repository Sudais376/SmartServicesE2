import React, {useEffect} from 'react'
import AOS from 'aos'

const ServicesIntro = () => {

  useEffect (() => {
    AOS.init ( { duration : 1000 });
  }, []);

 
  return (
    <>
      <section className="bg-[#f7f7f7] px-6 py-12" aria-labelledby="services-intro-heading">
        <article>
          <div data-aos="fade-up" className="text-center">
            {/* Section Header */}
            <header>
              <h2
                id="services-intro-heading"
                data-aos="fade-up"
                className="max-w-[500px] mx-auto font-bold text-[#111111] text-[20px] md:text-[32px] pb-6 md:pb-8"
              >
                Expert Concrete Services in
                <br />
                <span className="flex items-center justify-center gap-4 max-w-[300px] md:max-w-[500px] mx-auto">
                  <span className="w-1/4 h-[2px] bg-[#111111]" aria-hidden="true"></span>
                  <span>Lubbock</span>
                  <span className="w-1/4 h-[2px] bg-[#111111]" aria-hidden="true"></span>
                </span>
              </h2>
            </header>

            {/* Section Content */}
            <p
              data-aos="fade-up"
              className=" text-start md:!text-center text-[#333] md:text-lg max-w-[1000px] mx-auto leading-relaxed"
            >
              At <strong>SmartServicesE</strong>, we specialize in delivering high-quality concrete solutions tailored to your needs. From stamped concrete patios, walkways, and driveways to custom projects, our expert team transforms your spaces into stunning, durable works of art. 
              As a trusted <strong>concrete contractor in Lubbock, Texas</strong>, we focus on enhancing the beauty, value, and functionality of your residential or commercial property.
            </p>
          </div>
        </article>
      </section>
    </>
  )
}

export default ServicesIntro
