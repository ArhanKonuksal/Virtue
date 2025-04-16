import React from "react";
import Footer from "../components/Footer/Footer";
import Hero2 from "../components/Hero2/Hero2";
import Navbar2 from "../components/Navbar2/Navbar2";
import AboutUsImg from "../assets/About_Us_Photo.jpg";
import AboutUsSection1 from "../components/AboutUs/AboutUsSection1/AboutUsSection1";
import AboutUsSection2 from "../components/AboutUs/AboutUsSection2/AboutUsSection2";
import AboutUsSection3 from "../components/AboutUs/AboutUsSection3/AboutUsSection3";
import AboutUsSection4 from "../components/AboutUs/AboutUsSection4/AboutUsSection4";
import "../App.css";

const About = () => {
  return (
    <>
      <Navbar2 />
      <Hero2
        cName="about-us-hero2"
        heroImg={AboutUsImg}
        title="About Virtue."
        text="Virtue excels in delivering innovative solutions in software development, digital marketing, and business consultancy, all grounded in ethical practices. Our commitment to integrity ensures excellence and fosters lasting client relationships."
      />
      <AboutUsSection1 />
      <AboutUsSection2 />
      <AboutUsSection3 />
      <AboutUsSection4 />
      <Footer />
    </>
  );
};

export default About;
