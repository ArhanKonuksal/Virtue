import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar2/Navbar2";
import Hero from "../components/Hero2/Hero2";
import HeroImage from "../assets/BlueRectangle.png";
import OurServicesSection1 from "../components/OurServices/OurServices1/ourservices1";
import OurServicesSection2 from "../components/OurServices/OurServices2/ourservices2";
import OurServicesSection3 from "../components/OurServices/OurServices3/ourservices3";

const Services = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="contact-us-hero2"
        heroImg={HeroImage}
        title="What We Offer."
        text="Virtue excels in delivering innovative solutions in software development, digital marketing, and business consultancy, all grounded in ethical practices. Our commitment to integrity ensures excellence and fosters lasting client relationships."
      />
      <OurServicesSection1 />
      <OurServicesSection2 />
      <OurServicesSection3 />
      <Footer />
    </>
  );
};

export default Services;
