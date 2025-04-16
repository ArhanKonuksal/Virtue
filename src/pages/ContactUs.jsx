import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Hero3 from "../components/Hero3/Hero3";
import ContactUsSection1 from "../components/Contact/ContactUsSection1/ContactUsSection1";
import ContactUsSection2 from "../components/Contact/ContactUsSection2/ContactUsSection2";
import HeroImg from "../assets/contactushero.png";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero3
        heading="Get in"
        heading2="Touch With Us"
        paragraph="Schedule your complimentary consultation either in-person at our modern clinics in Marbella or Barcelona, or choose an online session. You'll receive a personalized assessment and quote on the same day."
        imageSrc={HeroImg}
      />
      <div style={{ backgroundColor: "#FFF5EC" }}>
        <ContactUsSection1 />
        <ContactUsSection2 />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
