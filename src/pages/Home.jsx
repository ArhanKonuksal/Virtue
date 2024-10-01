import React from 'react'
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import OurClients from '../components/Our Clients/OurClients'

const Home = () => {
  return (
  <>
  <div>
    <Navbar />
    <Hero />
    <OurClients />
    <Footer />
    </div>
  </>
  )
}

export default Home