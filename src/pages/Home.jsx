import React from 'react'
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import OurClients from '../components/Our Clients/OurClients'
//import homesection1 from '../components/homesection1/homesection1'
//import homesection2 from '../components/homesection1/homesection2'
//import homesection3 from '../components/homesection1/homesection3'
//import homesection4 from '../components/homesection1/homesection4'
//import homesection5 from '../components/homesection1/homesection5'
//import Divider from '../components/Divider/Divider'

const Home = () => {
  return (
  <>
  <div>
    <Navbar />
    <Hero />
    <OurClients />
    {/*
    <Homesection1 />
    <Homesection2 />
    <Homesection4 />
    <Divider />
    <Homesection5 />*/}
    <Footer />
    </div>
  </>
  )
}

export default Home