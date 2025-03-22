import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="headings">
            <h1>You Image It.</h1>
            <h1 style={{ color: "rgba(181, 181, 181, 1)" }}>We build It.</h1>
          </div>
          <div className="hero-body">
            <p>
              Virtue transform your vision into reality, with Excellence and a
              Commitment to bringing out the best in every idea..
            </p>
            <div className="hero-buttons">
              <a href="/OurServices">
                <button className="button1">Explore Services</button>
              </a>
              <a href="/ContactUs">
                {" "}
                <button className="button2">Book a Meeting</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
