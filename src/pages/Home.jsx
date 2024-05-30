import React from 'react'
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import HomePhoto from "../assets/Homepage.png"

const Home = () => {
  return (
  <>
  <div>
    <Navbar />
    <Hero cName="hero-mid" heroImg={HomePhoto}/>
    <Footer />
    </div>
  </>
  )
}

export default Home