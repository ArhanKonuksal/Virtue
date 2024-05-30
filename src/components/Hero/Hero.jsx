import React from 'react';
import './Hero.css';

const Hero = (props) => {
  return (
    <div className="hero">
    <div className={props.cName}>
      <img alt="HeroImg" src={props.heroImg} />
      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        {props.buttonText && <a href={props.buttonLink} className="show">{props.buttonText}</a>}
      </div>
    </div>
    </div>
  );
};

export default Hero;
