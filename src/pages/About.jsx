import React from 'react'
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import Hero2 from '../components/Hero2/Hero2'
import AboutPhoto from "../assets/about.png"
import OurClients from "../components/Our-Clients/OurClients"

const About = () => {
  return (
  <>
    <Navbar />
    <Hero2 />
    <OurClients />
    <Footer />
  </>
  )
}

export default About