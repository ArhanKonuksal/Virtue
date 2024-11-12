import React from "react";
import "./homesection2.css";
import deneme1 from "../../assets/senses.png";

const homesection2 = () => {
  return (
    <>
      <div className="seciton2-container">
        <div className="texts">
          <h1>Strategic, Cost-Effective Solutions</h1>
          <h2>Virtue Innovates Business Growth</h2>
          <p>
            Virtue connects strategy, technology, and creativity to architect
            your business success.
          </p>
        </div>
        <div className="card-grid">
          <div className="card">
            <img src={deneme1}></img>
            <div className="card-overlay">
              <p className="card-text">Lorem Ipsum</p>
            </div>
          </div>
          <div className="card-first">
            <img src={deneme1}></img>
            <div className="card-overlay">
              <p className="card-text">Lorem Ipsum</p>
            </div>
          </div>
          <div className="card">
            <img src={deneme1}></img>
            <div className="card-overlay">
              <p className="card-text">Lorem Ipsum</p>
            </div>
          </div>
        </div>
        <div className="card-grid-second">
          <div className="card">
            <img src={deneme1}></img>
            <div className="card-overlay">
              <p className="card-text">Lorem Ipsum</p>
            </div>
          </div>
          <div className="card-second">
            <img src={deneme1}></img>
            <div className="card-overlay">
              <p className="card-text">Lorem Ipsum</p>
            </div>
          </div>
          <div className="card">
            <img src={deneme1}></img>
            <div className="card-overlay">
              <p className="card-text">Lorem Ipsum</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default homesection2;