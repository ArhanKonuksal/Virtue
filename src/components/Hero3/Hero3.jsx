import React from 'react';
import "./Hero3.css";

const Hero3 = (props) => {
  return (
    <>
    <div className="hero3">
        <div className="hero3-container">
          <div className="headings-h3">
            <h1>{props.heading}</h1>
            <h1 className="grey">{props.heading2}</h1>
            <p>{props.paragraph}</p>
          </div>
          <div className="hero3-image">
            <img src={props.imageSrc} alt="Hero3-bg" />
          </div>
        </div>
      </div>
  </>
  )
}

export default Hero3;