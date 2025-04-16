import React from "react";
import "./CoreVirtuesValues.css";
import senses from "../../assets/senses.png";
import changes from "../../assets/changes.png";
import trust from "../../assets/trust.png";

const CoreVirtuesValues = () => {
  return (
    <>
      <div className="core-heading">
        <h1>Core Virtues Values</h1>
        <h6>
          This is our daily guiding principle, ingrained in our DNA and
          reflected in our every action.
        </h6>
      </div>
      <div className="core-virtues-container">
        <div className="core-virtues-item">
          <img src={senses} alt="senses" />
          <h2>Sense Of Ownership</h2>
          <p>
            {" "}
            We take full responsibility for every project we touch. Your goals
            become ours — we treat your business like our own, ensuring results
            that reflect dedication, care, and long-term vision.{" "}
          </p>
        </div>

        <div className="core-virtues-item">
          <img src={changes} alt="changes" />
          <h2>Constant Changes</h2>
          <p>
            {" "}
            We thrive in motion. In a fast-paced digital world, we adapt,
            iterate, and improve continuously — because staying still is not an
            option when you're building something that matters.{" "}
          </p>
        </div>

        <div className="core-virtues-item">
          <img src={trust} alt="trust" />
          <h2>Trust</h2>
          <p>
            {" "}
            We build more than solutions — we build relationships. With
            transparency, reliability, and consistent delivery, we earn the
            trust of our clients and partners every step of the way.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default CoreVirtuesValues;
