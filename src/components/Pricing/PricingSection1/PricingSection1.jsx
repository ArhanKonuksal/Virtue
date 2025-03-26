import React from "react";
import { Link } from "react-router-dom";
import PricingHero from "../../PricingHero/pricingHero";
import PricingImg1 from "../../../assets/pricingadvertisingimg.png";
import PricingImg2 from "../../../assets/servicessoftware1.png";
import PricingImg3 from "../../../assets/Item6.png";
import "./PricingSection1.css";

const PricingSection1 = () => {
  return (
    <div className="bg">
      <PricingHero />
      <div className="pricing-section2">
        <div className="pricing-card">
          <img
            className="pricing-card-image"
            src={PricingImg1}
            alt="advertising-media"
          ></img>
          <h1>Advertising & Media</h1>
          <p>For large teams & corporations</p>

          <Link to="/Pricing/Marketing">
            <button className="pricing-button">See Prices</button>
          </Link>
        </div>
        <div className="pricing-card">
          <img
            className="pricing-card-image"
            src={PricingImg3}
            alt="creative-design"
          ></img>
          <h1>Creative Design</h1>
          <p>For large teams & corporations</p>

          <Link to="/Pricing/CreativeDesing">
            <button className="pricing-button">See Prices</button>
          </Link>
        </div>
      </div>
      <div className="pricing-section2">
        <div className="pricing-card-bottom">
          <img
            className="pricing-card-image"
            src={PricingImg2}
            alt="software-solutions"
          ></img>
          <h1>Software Solutions</h1>
          <p>For large teams & corporations</p>

          <Link to="/Pricing/Software">
            <button className="pricing-button">See Prices</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingSection1;
