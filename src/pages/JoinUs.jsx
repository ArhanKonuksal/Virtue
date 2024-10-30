import React from 'react'
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import Hero2 from "../components/Hero2/Hero2"
import "../styles/JoinUs.css"
import CoreVirtuesValues from "../components/CoreVirtuesValues/CoreVirtuesValues"
import VirtueBillboard from "../assets/virtue billboard png 2.png"
import Divider from "../components/Divider/Divider"

const JoinUs = () => {
  return (
  <>
    <Navbar />
    <Hero2 />
    {/*Buraya bişeyler gelecekda dur bakalım */}
    <div>
      <img src={VirtueBillboard} alt='left'/>
      <p className='joinus-p1'>Virtue empowers businesses around the globe to significantly enhance their digital strategies through expert marketing and cutting-edge web development. By integrating advanced AI tools into our services, we deliver not just measurable outcomes, but also tailor our approaches to align perfectly with our clients' unique business needs, ensuring impactful results across various digital platforms. Our suite of sophisticated tools and strategies is designed to streamline operations, maximize engagement, and boost overall business growth, making Virtue a trusted partner in navigating the complex digital landscape.</p>
      <p className='joinus-p2'>Virtue encompasses a broad spectrum of over 50 distinct services, encompassing tools and enhancements within business solutions, web development, content creation, and digital marketing. Annually recognized for excellence, Virtue continues to set standards in digital strategy and innovation across multiple industries.</p>
    </div>
    <Divider />
    <CoreVirtuesValues />
    <Footer />
    </>
  )
}

export default JoinUs