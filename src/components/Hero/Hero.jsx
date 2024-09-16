import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="title">
      <div className="text-content">
        <h1>Virtue.</h1>
        <h2>Always Forward with the Virtue</h2>
      </div>
      <div className="video-overlay">
        <video className="background-video" autoPlay loop muted>
        </video>
      </div>
    </div>
  );
};

export default Hero;
