import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import OurClients from "../components/Our Clients/OurClients";
import Homesection1 from "../components/homesection1/homesection1";
import Homesection2 from "../components/homesection2/homesection2";
import Homesection3 from "../components/homesection3/homesection3";
import Homesection4 from "../components/homesection4/homesection4";
//import Divider from '../components/Divider/Divider'

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <OurClients />
        <Homesection1 />
        <Homesection2 />
        <Homesection3 />
        <Homesection4 />
        {/*
    <Homesection1 />
    4 daha section gelecek buraya divider hariç
    */}
        {/* <Divider /> */}
        {/*Buraya son yercik gelecek */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
