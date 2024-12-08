import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Choose from '../components/Choose'
import Testimonials from '../components/Testimonials'
import FAQSection from '../components/FAQSection'
import FinalCTA from '../components/FinalCTA'

const Home = () => {

  useEffect (() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <>
    <Helmet>
      <title> Home - SmartServicesE | Concrete Contractors in Lubbock, TX</title>
    </Helmet>
    
    <Hero />

    <Services />

    <Choose />

    <Testimonials />

    <FAQSection />

    <FinalCTA />
    </>
    
  )
}

export default Home
