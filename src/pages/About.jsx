import React from 'react'
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import Hero2 from '../components/Hero2/Hero2'
import AboutPhoto from "../assets/aboutus.png"

const About = () => {
  return (
  <>
    <Navbar />
    <Hero2 
    cName="hero-mid"
    heroImg={AboutPhoto}
    title="About"
    text="We are a team of passionate and dedicated individuals who are committed to providing high-quality and "
    btnClass="hide" />
    <Footer />
  </>
  )
}

export default About