import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import OurClients from "../components/Our Clients/OurClients";
import Homesection1 from "../components/home/homesection1/homesection1";
import Homesection2 from "../components/home/homesection2/homesection2";
import Homesection3 from "../components/home/homesection3/homesection3";
import Homesection4 from "../components/home/homesection4/homesection4";
import Homesection5 from "../components/home/homesection5/homesection5";
import HomePageDivider from "../components/home/HomePageDivider/HomePageDivider";
import DividerImg from "../assets/HomePageDivider2.png";

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
      <HomePageDivider
        DividerImg={DividerImg}
        title="Bridging Business Gaps"
        description="Virtue's Integrated Marketing Strategies"
      />
      <Homesection5 />
      <Footer />
    </>
  );
};

export default Home;
