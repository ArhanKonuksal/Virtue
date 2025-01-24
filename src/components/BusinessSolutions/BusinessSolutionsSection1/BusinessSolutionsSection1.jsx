import React from "react";
import "./BusinessSolutionsSection1.css"; // Assuming CSS file is named App.css

const BusinessSolutionsSection1 = () => {
  return (
    <div className="business-section">
      <div className="content">
        <h1>
          Strategy & <br />
          Growth Solutions <br />
          For Business
        </h1>
        <p>
          Virtue excels in delivering innovative solutions in software
          development, digital marketing.
        </p>
        <div className="buttons">
          <button className="contact-btn">Contact Us</button>
          {/* <button className="how-we-work-btn">How we work</button> */}
        </div>
        {/* <div className="logos">
          <img src="path-to-bekoy-logo.png" alt="Bekoy Logo 1" />
          <img src="path-to-bekoy-logo-2.png" alt="Bekoy Logo 2" />
          <img src="path-to-goat-logo.png" alt="Goat Logo" />
        </div> */}
      </div>
      <div className="image-container">
        <img
          src="path-to-your-image.jpg"
          alt="Business Representative"
          className="hero-image"
        />
      </div>
    </div>
  );
};

export default BusinessSolutionsSection1;
