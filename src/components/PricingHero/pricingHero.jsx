import React from "react";
import "./pricingHero.css";
// import PricingBackground from "../../assets/PricingBackground.jpg";

const pricingHero = () => {
  return (
    <>
      <div
        className="pricing-hero" /* style={{ backgroundImage: `url(${PricingBackground})` }} */
      >
        <div>
          <button className="pricing-button-hero">
            Bring your business to the best scale
          </button>
        </div>
        <div className="p-headings">
          <h1>Discover Products</h1>
          <h1 style={{ color: "rgba(181, 181, 181, 1)" }}>
            With the Best Pricing
          </h1>
        </div>
        <div className="p-hero-body">
          <p className="p-hero-paragraph">
            Select from best plan, ensuring a perfect match. Need more or{" "}
            <br></br>less? Customize your subscription for a seamless fit!{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default pricingHero;
