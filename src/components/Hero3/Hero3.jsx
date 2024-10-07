import React from 'react';
import "./Hero3.css";
import Logo from "../../assets/Virtue Logo Concept 1 White 1.png"

const Hero3 = () => {
  return (
    <div className='hero3-container'>
        <div className='logo'>
            <img src={Logo} alt="Virtue Logo" />
        </div>
        <div>
            <h1>Innovating with Integrity at Virtue</h1>
            <p>Virtue excels in delivering innovative solutions in software development, digital marketing, and business consultancy, all grounded in ethical practices. Our commitment to integrity ensures excellence and fosters lasting client relationships.</p>
        </div>
    </div>
  )
}

export default Hero3;