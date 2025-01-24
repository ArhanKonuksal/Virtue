import React from "react";
import "./homesection5.css";
import HomeSection5IMG from "../../../assets/homesection5.png";

const homesection5 = () => {
  return (
    <>
      <div className="home-section5-container">
        <div className="service-card developers">
          <div className="service-content">
            <div className="icon">&#8599;</div>
            <h2>For Software Developers</h2>
            <p className="service-card-text1">
              Develop, deploy, and scale with Virtue’s Software Development
              Team. Leverage the expertise of our dedicated engineers and robust
              technology stack to build innovative solutions that drive your
              business forward.
            </p>
            <button className="service-button">Start Developing</button>
          </div>
          <div className="service-image">
            <img src={HomeSection5IMG} alt="Code Example" />
          </div>
        </div>

        <div className="service-card marketers">
          <div className="icon">&#8599;</div>
          <h2>For Marketers</h2>
          <p className="service-card-text2">
            Connect, create, and captivate with Virtue’s Marketing Team. Utilize
            our comprehensive marketing strategies and creative resources to
            enhance your brand’s visibility and engage your target audience
            effectively.
          </p>
          <button className="service-button">Start Marketing</button>
        </div>

        <div className="service-card consultants">
          <div className="icon">&#8599;</div>
          <h2>For Consultants</h2>
          <p className="service-card-text2">
            Transform, innovate, and lead with Virtue’s Consulting Services.
            Partner with our expert consultants to navigate complex business
            challenges and develop strategies that deliver sustainable success.
          </p>
          <button className="service-button">Start Consulting</button>
        </div>
      </div>
    </>
  );
};

export default homesection5;
