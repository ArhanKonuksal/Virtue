import React from 'react';
import './Hero2.css';

const Hero2 = (props) => {
  return (
    <div className="hero2">
      <img alt="HeroImg" src={props.hero2Img} />
      <div className="hero2-text">
        <h1>{props.title}</h1>
        <h1>{props.title2}</h1>
        <p>{props.description}</p>
        <p>{props.smallDescription}</p>
      </div>
    </div>
  );
};

export default Hero2;
