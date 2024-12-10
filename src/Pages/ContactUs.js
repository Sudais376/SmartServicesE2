import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import ConactComp from "../components/ContactComp";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          {" "}
          Contact Us - SmartServicesE - Concrete Contractors in Lubbock, TX
        </title>
      </Helmet>

      <ConactComp />
    </>
  );
};

export default ContactUs;
