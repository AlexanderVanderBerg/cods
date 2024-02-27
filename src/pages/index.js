import React from 'react'
import WhoWeAre from '../components/WhoWeAre';
import OurServices from '../components/OurServices';
import FeaturedProducts from '../components/FeaturedProducts';
import OurStory from '../components/OurStory';
import AboutUs from '../components/AboutUs';
import PricingMembership from '../components/PricingMembership';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';


const IndexPage=props=>{
  return (
    <>
      <WhoWeAre></WhoWeAre>
      <OurServices></OurServices>
      <FeaturedProducts></FeaturedProducts>
      <OurStory></OurStory>
      <AboutUs></AboutUs>
      <PricingMembership></PricingMembership>
      <ContactUs></ContactUs>
      <Footer></Footer>
      </>
  )
}
export default IndexPage;