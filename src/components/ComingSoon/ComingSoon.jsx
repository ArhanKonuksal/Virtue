import React from "react";
import "./ComingSoon.css"; // Assuming the CSS file is named App.css
import Logo from "../../assets/Logos/3/white.svg";

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <div className="content-coming-soon">
        <div className="text-container-coming-soon">
          <h1 className="main-title-coming-soon">COMING SOON</h1>
          <p className="description-coming-soon">
            We are currently facing some issues with our system and our team is
            working hard to resolve it. You can subscribe to our mailing list if
            you want to get notified.
          </p>
          <div className="subscribe-form">
            <input type="email" placeholder="Email" className="email-input" />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>
        <div className="logo-coming-soon-container">
          <img src={Logo} className="logo-coming-soon" alt="" />
        </div>
      </div>
      <footer className="footer-coming-soon">
        <p>Proudly powered by Virtue © 2025</p>
        <div className="social-icons">
          <span>🐦</span>
          <span>📷</span>
          <span>🔗</span>
        </div>
      </footer>
    </div>
  );
};

export default ComingSoon;
