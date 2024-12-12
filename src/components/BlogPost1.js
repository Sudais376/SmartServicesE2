import React, {useEffect} from "react";
import { Link } from "react-router-dom";

const BlogPost1 = () => {

    useEffect (() => {
        window.scrollTo(0,0);
      }, []);

  return (
    <>
    
    <div className="bg-gray-50  p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          5 Benefits of Stamped Concrete for Your Lubbock Home
        </h1>
        <p className="mb-4">
          Stamped concrete is a perfect blend of functionality and style. In
          Lubbock, where the weather can be tough on outdoor spaces, stamped
          concrete provides durability and visual appeal.
        </p>
        <p>
          <strong>Key benefits include:</strong>
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Cost-effective alternative to natural stone</li>
          <li>Highly customizable with various patterns and colors</li>
          <li>Durable and weather-resistant</li>
          <li>Low maintenance requirements</li>
          <li>Boosts property value with aesthetic appeal</li>
        </ul>
        <p>
          Whether you’re looking to upgrade your patio, driveway, or walkways,
          stamped concrete is a versatile choice. For professional stamped
          concrete services in Lubbock, reach out to SmartServicesE.
        </p>
      </div>
      <div className=" pt-4 " >
    <Link to ='/5-benefits-of-stamped-concrete' >
    
      <button className=" text-white font-bold bg-[#f76a1e] hover:bg-[#d9601a] px-6 py-2 rounded-md transition-all duration-500 ">
        &larr; Go Back
      </button>
    </Link>
      </div>
    </div>
    
    </>
  );
};

export default BlogPost1;
