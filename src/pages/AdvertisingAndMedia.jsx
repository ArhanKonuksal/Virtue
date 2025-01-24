import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Hero2 from "../components/Hero2/Hero2";
import AdvertisingAndMediaImg from "../assets/advertisingimg.png";
import AMSection1 from "../components/AdvertisingAndMedia/AdvertisingAndMediaSection1/AdvertisingAndMediaSection1";
import AMSection2 from "../components/AdvertisingAndMedia/AdvertisingAndMediaSection2/AdvertisingAndMediaSection2";
import OurServicesSection4 from "../components/OurServices/OurServices4/ourservices4";

const AdvertisingAndMedia = () => {
  return (
    <>
      <Navbar />
      <Hero2
        cName="contact-us-hero2"
        heroImg={AdvertisingAndMediaImg}
        title="Advertising & Media Strategies"
        text="Virtue excels in delivering innovative solutions in software development, digital marketing, and business consultancy, all grounded in ethical practices. Our commitment to integrity ensures excellence and fosters lasting client relationships."
      />
      <AMSection1 />
      <AMSection2 />
      <OurServicesSection4 />
      <Footer />
    </>
  );
};

export default AdvertisingAndMedia;
