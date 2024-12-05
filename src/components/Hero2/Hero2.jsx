import React from "react";
import "./Hero2.css";

const Hero2 = (props) => {
  return (
    <div className="hero2">
      <div className={props.cName}>
        <img className="hero2-img" alt="HeroImg" src={props.heroImg} />
        <div className="hero2-text">
          <h1>{props.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
