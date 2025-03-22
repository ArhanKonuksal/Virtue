import React from "react";
import "./homesection2.css";
import Beykoy from "../../../assets/beykoy 1 .png";
import Liberal from "../../../assets/liberal 1.png";
import Cyprio from "../../../assets/cyprio 1.png";

const homesection2 = () => {
  return (
    <>
      <div className="home-seciton2-container">
        <div className="texts">
          <h1>Strategic, Cost-Effective Solutions</h1>
          <h2>Virtue Makes Challenges Into Opportunities</h2>
          <p>
            Virtue connects strategy, technology, and creativity to architect
            your business success.
          </p>
        </div>
        <div className="card-grid">
          <div className="card">
            <a href="/SoftwareSolutions">
              <img src={Beykoy} alt="deneme1"></img>
              <div className="card-overlay">
                <p className="card-text">Software Solutions</p>
              </div>
            </a>
          </div>
          <div className="card-first">
            <a href="/AdvertisingAndMedia">
              <img src={Liberal} alt="deneme1"></img>
              <div className="card-overlay">
                <p className="card-text">Marketing Solutions</p>
              </div>
            </a>
          </div>
          <div className="card">
            <a href="/CreativeDesign">
              <img src={Cyprio} alt="deneme1"></img>
              <div className="card-overlay">
                <p className="card-text">Creative Design</p>
              </div>
            </a>
          </div>
        </div>
        {/* <div className="card-grid-second">
          <div className="card">
            <img src={deneme1} alt="deneme4"></img>
            <div className="card-overlay">
              <p className="card-text">Lorem Ipsum</p>
            </div>
          </div>
          <div className="card-second">
            <img src={deneme1} alt="deneme5"></img>
            <div className="card-overlay">
              <p className="card-text">Lorem Ipsum</p>
            </div>
          </div>
          <div className="card">
            <img src={deneme1} alt="deneme6"></img>
            <div className="card-overlay">
              <p className="card-text">Lorem Ipsum</p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default homesection2;
