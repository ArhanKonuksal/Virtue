import React from "react";
import "./homesection5.css";
import HomeSection5IMG from "../../../assets/homesection5.png";

const homesection5 = () => {
  return (
    <>
      <div className="home-section5-container">
        <div className="container">
          <div className="left">
            <div className="service-card developers">
              <div className="service-content">
                <div className="icon">&#8599;</div>
                <div className="text">
                  <h2>Full-Stack Development</h2>
                  <p className="service-card-text1">
                    At Virtue, we provide reliable and scalable web and software
                    development solutions tailored to your needs. From building
                    responsive front-end interfaces with HTML, CSS, JavaScript,
                    and React to managing back-end functionality, we deliver
                    practical and effective results. While our expertise spans a
                    wide range of technologies, we focus on creating solutions
                    that are user-friendly, efficient, and designed to grow with
                    your business.
                  </p>
                  <button className="service-button">
                    <a href="/SoftwareSolutions">Explore Service</a>
                  </button>
                </div>
              </div>
              <div className="service-image">
                <img src={HomeSection5IMG} alt="Code Example" />
              </div>
            </div>
          </div>

          <div className="right">
            <div className="service-card marketers">
              <div className="service-content">
                <div className="icon">&#8599;</div>
                <div className="text">
                  <h2>Design & User Experience</h2>
                  <p className="service-card-text2">
                    At Virtue, we specialize in creating impactful designs using
                    industry-leading tools; From graphic design to UI/UX
                    prototyping, our team ensures your project is visually
                    compelling and user-focused.
                  </p>
                  <button className="service-button">
                    <a href="/CreativeDesign">Explore Service</a>
                  </button>
                </div>
              </div>
            </div>

            <div className="service-card consultants">
              <div className="service-content">
                <div className="icon">&#8599;</div>
                <div className="text">
                  <h2>Marketing Solutions</h2>
                  <p className="service-card-text2">
                    Every business faces challenges, we deliver the solutions.
                    With in-depth analysis and tailored strategies, we address
                    your unique needs. Our approach is actionable, and designed
                    to drive measurable results
                  </p>
                  <button className="service-button">
                    <a href="/AdvertisingAndMedia">Explore Service</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default homesection5;
