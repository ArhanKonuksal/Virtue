import React from 'react'
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import OurClients from '../components/Our Clients/OurClients'
//import Divider from '../components/Divider/Divider'

const Home = () => {
  return (
  <>
  <div>
    <Navbar />
    <Hero />
    <OurClients />
    {/*
    5 section gelecek buraya divider hariç
    */}
    {/* <Divider /> */}
    {/*Buraya son yercik gelecek */}
    <Footer />
    </div>
  </>
  )
}

export default Home