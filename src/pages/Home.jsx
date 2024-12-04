import React from 'react'
import Navbar from "../components/Navbar/Navbaryeni"
import Footer from "../components/Footer/Footer"
import "../styles/homedividerstyle.css"
import Hero from "../components/Hero/Hero"
import OurClients from '../components/Our Clients/OurClients'
import Homesection1 from '../components/home/homesection1/homesection1'
import Homesection2 from '../components/home/homesection2/homesection2'
import Homesection3 from '../components/home/homesection3/homesection3'
import Homesection4 from '../components/home/homesection4/homesection4'
import Homesection5 from '../components/home/homeseciton5/homesection5'
import DividerPhoto from '../assets/HomePageDivider2.png'

const Home = () => {
  return (
  <>
    <Navbar />
    <Hero />
    <OurClients />
    <Homesection1 />
    <Homesection2 />
    <Homesection3 />
    <Homesection4 />
    <div className="divider">
      <img alt="DividerImg" src={DividerPhoto} />
      <div className="divider-text">
        <h1>Bridging Business Gaps</h1>
        <p>Virtue's Integrated Marketing Strategies</p>
      </div>
    </div>
    <Homesection5 /> 
    <Footer />
  </>
  )
}

export default Home