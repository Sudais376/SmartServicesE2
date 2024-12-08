import React, {useEffect} from 'react'
import { Helmet } from 'react-helmet'
import AboutComp from '../components/AboutComp';

const About = () => {

  useEffect (() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <>
    <Helmet>
      <title>About - SmartServicesE | Concrete Contractors in Lubbock, TX</title>
    </Helmet>
    
    <AboutComp />
    </>
  )
}

export default About
