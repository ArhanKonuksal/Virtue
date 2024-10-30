import React from 'react'
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import OurClients from '../components/Our Clients/OurClients'
import Homesection1 from '../components/homesection1/homesection1'
import Homesection2 from '../components/homesection2/homesection2'
import Homesection3 from '../components/homesection3/homesection3'
import Homesection4 from '../components/homesection4/homesection4'
import Homesection5 from '../components/homeseciton5/homesection5'
import Divider from '../components/Divider/Divider'
import DividerImg from "../assets/HomePageDivider2.png"

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
    <Divider DividerImg={DividerImg} title="Bridging Business Gaps" description="Virtue's Integrated Marketing Strategies"/>
    <Homesection5 /> 
    <Footer />
  </>
  )
}

export default Home