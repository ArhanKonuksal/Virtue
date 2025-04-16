import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Hero3 from "../components/Hero3/Hero3";
import "../styles/JoinUs.css";
import CoreVirtuesValues from "../components/CoreVirtuesValues/CoreVirtuesValuesWhite";
import HeroImg from "../assets/joinusheroimg.png";
import JoinUsSection1 from "../components/JoinUs/JoinUsSection1/JoinUsSection1";

const JoinUs = () => {
  return (
    <>
      <Navbar />
      <Hero3
        heading="New Stars"
        heading2="Are Born Here"
        paragraph="Join us to accelerate your career! Become a part of our global team and help develop leading-edge marketing and web development solutions with Virtue, enhancing online presence and digital strategies across industries."
        imageSrc={HeroImg}
      />
      <div style={{ backgroundColor: "#FFF5EC" }}>
        {" "}
        <JoinUsSection1 />
        <CoreVirtuesValues />
      </div>

      <Footer />
    </>
  );
};

export default JoinUs;
