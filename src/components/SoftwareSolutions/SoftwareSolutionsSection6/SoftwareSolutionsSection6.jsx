import React from "react";
import "./SoftwareSolutionsSection6.css";

const SoftwareSolutionsSection6 = () => {
  return (
    <div className="pricing-section">
      {/* Left Side - Text & Buttons */}
      <div className="pricing-info">
        <h2>A radical change at a fair price.</h2>
        <p>
          Give Slite a try. Save 16% on annual commitment. <br />
          Big team? Check the <a href="/">enterprise plan.</a>
        </p>
        <div className="pricing-buttons">
          <button className="primary-btn">Start Now</button>
          <button className="secondary-btn">Contact Us </button>
        </div>
      </div>

      {/* Right Side - Pricing Cards */}
      <div className="pricing-cards">
        <div className="card-software mini">
          <h2>Mini</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <ul>
            <li>✔ Lorem ipsum.</li>
            <li>✔ Lorem ipsum.</li>
            <li>✔ Lorem ipsum.</li>
          </ul>
          <button className="see-pricing blue">See Pricing</button>
        </div>

        <div className="card-software basic">
          <h2>Basic</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <ul>
            <li>✔ Lorem ipsum.</li>
            <li>✔ Lorem ipsum.</li>
            <li>✔ Lorem ipsum.</li>
          </ul>
          <button className="see-pricing gray">See Pricing</button>
        </div>
      </div>
    </div>
  );
};

export default SoftwareSolutionsSection6;
