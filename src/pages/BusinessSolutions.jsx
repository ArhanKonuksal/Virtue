import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Hero2 from "../components/Hero2/Hero2";
import BusinessSolutionsImg from "../assets/Rectangle 381.png";
import BusinessSolutionsSection1 from "../components/BusinessSolutions/BusinessSolutionsSection1/BusinessSolutionsSection1";
import BusinessSolutionsSection2 from "../components/BusinessSolutions/BusinessSolutionsSection2/BusinessSolutionsSection2";

const BusinessSolutions = () => {
  return (
    <>
      <Navbar />
      <Hero2
        cName="contact-us-hero2"
        heroImg={BusinessSolutionsImg}
        title="Business Solutions"
        text="Virtue excels in delivering innovative solutions in software development, digital marketing, and business consultancy, all grounded in ethical practices. Our commitment to integrity ensures excellence and fosters lasting client relationships."
      />
      <BusinessSolutionsSection1 />
      <BusinessSolutionsSection2 />
      <Footer />
    </>
  );
};

export default BusinessSolutions;
