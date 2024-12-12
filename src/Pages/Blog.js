import React, { useEffect } from "react";
import BlogComp from "../components/BlogComp";
import Blog5 from "../assets/blog5.webp";
import drWays from "../assets/drWays.webp";
import hero from "../assets/hero.png";
import Blog1 from "../assets/blog1.webp";
import ContactFCTA from "../components/ContactFCTA";
import { Helmet } from "react-helmet";
import Blog2 from "../assets/blog2.webp";
import Blog3 from "../assets/blog3.webp";
import Blog4 from "../assets/blog4.webp";

const Blog = () => {

  useEffect (() => {
    window.scrollTo (0, 2400);
  }, []);


  const featuredBlogs = [
    {
      image: Blog1,
      alt: "Concrete driveway maintenance tips",
      title:
        "Expert Tips, Project Ideas, and Maintenance Advice for Homeowners and Businesses in Lubbock",
      description:
        "Explore expert advice on maintaining your driveway and enhancing its lifespan amidst Texas weather challenges.",
      link: "/expert-tips-project-ideas-and-maintanance",
    },
    {
      image: Blog2,
      alt: "Stamped concrete for homes",
      title: "Stamped Concrete: A Popular Choice for Homeowners in Lubbock",
      description:
        "Discover why stamped concrete is a favored choice for durability and aesthetic appeal in Lubbock homes.",
      link: "/stamped-concrete-a-popular-chioce-for-homeowners",
    },
    {
      image: Blog3,
      alt: "Stamped concrete patio benefits",
      title: "5 Benefits of Stamped Concrete for Your Lubbock Home",
      description:
        "Learn how stamped concrete adds elegance, durability, and value to your outdoor spaces.",
      link: "/5-benefits-of-stamped-concrete",
    },
    {
      image: Blog4,
      alt: "Concrete driveway maintenance guide",
      title: "Concrete Driveway Maintenance: Tips for Longevity",
      description:
        "Find out essential maintenance practices to ensure your driveway withstands the test of time and weather.",
      link: "/concrete-driveways-maintanance-tips",
    },
    {
      image: Blog5,
      alt: "Stamped vs regular concrete comparison",
      title: "Stamped vs. Regular Concrete: What’s Best for Lubbock Homes",
      description:
        "Compare the benefits and drawbacks of stamped and regular concrete to make the best choice for your home.",
      link: "/stamped-vs-regular-concrete",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          {" "}
          Blog - SmartServiceE - Concrete Contractors in Lubbock, TX{" "}
        </title>
      </Helmet>

      <div className="relative w-full h-[400px]">
        {/* Background Image */}
        <img
          className="w-full h-full object-cover"
          src={drWays}
          srcSet={drWays} // Use the same image for all screen sizes
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 60vw"
          alt="Completed concrete driveway project by our contractors"
          loading="lazy"
        />
      </div>

      <div className="bg-gray-50  ">
        {/* Header */}
        <header
          data-aos="fade-up"
          className="bg-blue-600 text-white py-8 px-4 md:px-8"
        >
          <div data-aos="fade-up" className="container mx-auto">
            <h1
              data-aos="fade-up"
              className="text-3xl font-bold text-center mb-4"
              aria-label="Smart Insights: Your Guide to Quality Concrete Services in Lubbock"
            >
              Smart Insights: Your Guide to Quality Concrete Services in Lubbock
            </h1>
            <p
              data-aos="fade-up"
              className="text-center max-w-[1000px] mx-auto pb-6 pt-2"
              aria-label="Explore expert tips, project ideas, and maintenance advice tailored for homeowners and businesses in Lubbock"
            >
              Explore expert tips, project ideas, and maintenance advice
              tailored for homeowners and businesses in Lubbock.
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-8 px-4 md:px-8">
          {/* Concrete Contractor Guide */}
          <section
            className="container mx-auto py-8 max-w-[1000px] "
            data-aos="fade-up"
          >
            <article>
              <h2
                data-aos="fade-up"
                className="text-2xl font-bold mb-6"
                aria-label="How to Choose the Best Concrete Contractor in Lubbock: A Comprehensive Guide"
              >
                How to Choose the Best Concrete Contractor in Lubbock: A
                Comprehensive Guide
              </h2>

              <section
                data-aos="fade-up"
                className=" grid grid-cols-1 grid-wrap md:grid-cols-2 gap-4 "
              >
                <div className=" order-2 md:!order-1 ">
                  <h3 data-aos="fade-up" className="text-xl font-semibold mb-4">
                    Why Choosing the Right Concrete Contractor Matters
                  </h3>
                  <p>
                    Lubbock, TX, with its unique climate and soil conditions,
                    requires specific expertise when it comes to concrete work.
                    The region’s hot summers and occasional extreme weather can
                    take a toll on improperly installed concrete, leading to
                    cracking, shifting, and wear. That’s why working with
                    experienced and trusted concrete contractors in Lubbock is
                    essential for ensuring long-lasting results.
                  </p>
                  <h3 data-aos="fade-up" className="text-xl font-semibold my-4">
                    Key Factors to Consider When Hiring Concrete Contractors in
                    Lubbock, TX
                  </h3>
                  <ul data-aos="fade-up" className="list-inside list-disc mb-6">
                    <li data-aos="fade-up">
                      <strong>Experience in Lubbock Concrete Projects:</strong>{" "}
                      Concrete is not a one-size-fits-all material, especially
                      in Lubbock. Each project presents unique challenges based
                      on the local climate, soil, and regulations.
                    </li>
                    <li data-aos="fade-up">
                      <strong>Quality of Work and Portfolio:</strong> Look for
                      contractors who have a proven track record with work
                      similar to yours. A portfolio is key in evaluating their
                      expertise.
                    </li>
                    <li data-aos="fade-up">
                      <strong>Reputation and Reviews:</strong> Research local
                      concrete contractors and read reviews. Word-of-mouth
                      referrals can often lead to trustworthy contractors.
                    </li>
                    <li data-aos="fade-up">
                      <strong>Proper Licensing and Insurance:</strong> Ensure
                      the contractor is licensed and insured to protect you from
                      potential liability.
                    </li>
                    <li data-aos="fade-up">
                      <strong>
                        Transparent Pricing and Detailed Estimates:
                      </strong>{" "}
                      Contractors should provide clear, written estimates
                      breaking down costs.
                    </li>
                    <li data-aos="fade-up">
                      <strong>
                        Expert Knowledge of Concrete Mixes and Techniques:
                      </strong>{" "}
                      Lubbock’s dry climate requires special concrete mixes for
                      durability.
                    </li>
                    <li data-aos="fade-up">
                      <strong>Commitment to Customer Satisfaction:</strong> The
                      best contractors communicate well and are responsive to
                      your needs.
                    </li>
                  </ul>
                </div>
                <div className=" order-1 md:!order-2 ">
                  <img className=" shadow-lg rounded-md " src={hero} alt="" />
                </div>
              </section>

              <section data-aos="fade-up " className=" pt-24 ">
                <h3 data-aos="fade-up" className="text-xl font-semibold mb-4  ">
                  Get Started with the Best Concrete Contractors in Lubbock, TX
                </h3>
                <p data-aos="fade-up" className=" pb-4 max-w-[1000px] ">
                  Now that you know what to look for, it’s time to choose the
                  best concrete contractor in Lubbock for your project. Whether
                  you're planning a driveway, patio, or foundation work, hiring
                  the right contractor can make all the difference in the final
                  result.
                </p>
              </section>
            </article>

            <ContactFCTA />
          </section>

          {/* Featured Blogs */}
          <section data-aos="fade-up" className="py-8 max-w-[1000px] mx-auto">
            <div data-aos="fade-up" className="container mx-auto">
              <h2
                data-aos="fade-up"
                className="text-2xl font-bold mb-6"
                aria-label="Featured Blog Posts"
              >
                Featured Blogs
              </h2>
              <div
                data-aos="fade-up"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {featuredBlogs.map((blog, index) => (
                  <BlogComp key={index} {...blog} />
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Blog;
