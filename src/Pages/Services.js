import React, {useEffect} from 'react'
import { Helmet } from 'react-helmet'
import FinalCTA from '../components/FinalCTA';
import ServicesHero from '../components/ServicesHero';
import ServicesIntro from '../components/ServicesIntro';
import KeyBenefits from '../components/KeyBenefits';
import KeyServices from '../components/KeyServices';
import Choose from '../components/Choose';
import Testimonials from '../components/Testimonials';

const Services = () => {

  useEffect (() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <>
    <Helmet>
      <title> Services - SmartServicesE | Concrete Contractors in Lubbock, TX</title>
    </Helmet>

    <ServicesHero />

    <ServicesIntro />

    <KeyBenefits />

    <KeyServices />

    <Choose />

    <Testimonials />

    <FinalCTA />
    </>
  )
}

export default Services
