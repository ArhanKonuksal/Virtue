import React from 'react'
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import MainPhoto from "../assets/Screenshot 2024-05-06 at 10.49 1.png"
import OurClients from "../components/Our Clients/OurClients"
import "../styles/home.css"

const Home = () => {
  return (
  <>
  <div>
    <Navbar />
      <img className="image" alt="Screenshot" src={MainPhoto} />
    <OurClients />
    <Footer />
    </div>
  </>
  )
}

export default Home