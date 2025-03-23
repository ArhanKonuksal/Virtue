import React from "react";
import "./SoftwareSolutionsSection6.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const SoftwareSolutionsSection6 = () => {
  return (
    <div className="pricing-section">
      {/* Left Side - Text & Buttons */}
      <div className="pricing-info">
        <h2>Big impact, Fair price.</h2>
        <p>
          Save 16% with an annual plan, Need more? Our enterprise solution is
          built for growing teams
        </p>
        <div className="pricing-buttons">
          <a href="/ContactUs" className="cta">
            <button className="secondary-btn">
              Contact Us{" "}
              <FontAwesomeIcon
                icon={faAngleRight}
                style={{ background: "rgba(0, 0, 0, 0)", size: "2px" }}
              />
            </button>
          </a>
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
          <a href="/Pricing">
            <button className="see-pricing blue">See Pricing</button>
          </a>
        </div>

        <div className="card-software basic">
          <h2>Basic</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <ul>
            <li>✔ Lorem ipsum.</li>
            <li>✔ Lorem ipsum.</li>
            <li>✔ Lorem ipsum.</li>
          </ul>
          <a href="/Pricing">
            <button className="see-pricing gray">See Pricing</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SoftwareSolutionsSection6;
