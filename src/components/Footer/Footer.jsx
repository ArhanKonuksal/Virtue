import React from 'react';
import { Link } from 'react-router-dom';
import VirtueLogo from "../../assets/Footerlogo.png";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-left'>
          <img src={VirtueLogo} alt="Virtue Logo" className="footer-logo" />
          <p>Learning with us is fun & addictive. Earn points for correct answers, race against the clock, and level up. Our bite-sized lessons are effective, and we are good</p>
        </div>
        <div className='footer-middle'>
          <h1>Contact</h1>
          <p>Organize Sanayi Bölgesi<br/>3. Sokak<br/>Lefkoşa/Nicosia</p>
          <p>hi@mygroovydomain.com</p>
          <p>(123) 456-7890</p>
        </div>
        <div className='footer-right'>
          <h1>Terms of Services</h1>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/terms">Terms of Use</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
          <div className='footer-follow-us'>
            <h1>Follow Us</h1>
            <div className='footer-icons'>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaXTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
      </div>
      <div className='footer-bottom'>
        <p>Proudly powered by Virtue © 2024</p>
      </div>
    </div>
  );
};

export default Footer;

/* değişecek illaki ama temel dursun */