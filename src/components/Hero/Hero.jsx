import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="headings">
            <h1>You design it.</h1>
            <h1 style={{ color: "rgba(181, 181, 181, 1)" }}>
              We build it, Fast.
            </h1>
          </div>
          <div className="hero-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna<br></br>{" "}
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="hero-buttons">
              <button className="button1">Instant Quote</button>
              <button className="button2">Book a Meeting</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
