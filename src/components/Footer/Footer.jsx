import React from "react";
import { Link } from "react-router-dom";
import VirtueLogo from "../../assets/Virtue Logo Concept 1 White 1.png";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-left">
            <img src={VirtueLogo} alt="Virtue Logo" className="footer-logo" />
            <p className="text">
              Learning with us is fun & addictive. Earn points for correct
              answers, race against the clock, and level up. Our bite-sized
              lessons are effective, and we are good
            </p>
          </div>
          <div className="footer-right">
            <div className="category-container">
              <h1 className="footer-category-title">Business Solutions</h1>
              <ul className="footer-options">
                <li>
                  <Link to="/businessconsultancy">Business Consultancy</Link>
                </li>
                <li>
                  <Link to="/marketplanning">Market Planning</Link>
                </li>
                <li>
                  <Link to="/recruitment">Recruitment & Talent</Link>
                </li>
                <li>
                  <Link to="/itsolutions">IT Solutions for Business</Link>
                </li>
              </ul>
            </div>
            <div className="category-container">
              <h1 className="footer-category-title">Websites & Apps</h1>
              <ul className="footer-options">
                <li>
                  <Link to="/websitedesign">Custom Website Design</Link>
                </li>
                <li>
                  <Link to="/websitedevelopment">
                    Custom Website Development
                  </Link>
                </li>
                <li>
                  <Link to="/ecommercewebsite">eCommerce Website</Link>
                </li>
                <li>
                  <Link to="/retailwebsite">Retail Shop Website</Link>
                </li>
              </ul>
            </div>
            <div className="category-container">
              <h1 className="footer-category-title">Content & Design</h1>
              <ul className="footer-options">
                <li>
                  <Link to="/socialmediamangement">
                    Social Media Management
                  </Link>
                </li>
                <li>
                  <Link to="/brandinganddesign">Branding & Graphic Design</Link>
                </li>
                <li>
                  <Link to="/logodesign">Logo Design</Link>
                </li>
                <li>
                  <Link to="/uiuxdesign">UI/UX Design</Link>
                </li>
              </ul>
            </div>
            <div className="category-container" id="last-container">
              <h1 className="footer-category-title">Advertising & Media</h1>
              <ul className="footer-options">
                <li>
                  <Link to="/adsmanagement">Targeted Ads Management</Link>
                </li>
                <li>
                  <Link to="/seoservices">SEO Services</Link>
                </li>
                <li>
                  <Link to="/emailmarketing">Sales Driven Email Marketing</Link>
                </li>
                <li>
                  <Link to="/influencermaketing">Influencer Marketing</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="bottom">
            <p>Proudly powered by Virtue © 2025</p>
            <div className="footer-follow-us">
              <div className="footer-icons">
                <a
                  href="https://www.instagram.com/virtueltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="https://www.linkedin.com/company/the-virtue-co/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-text">
            <p>
              <Link to="/legal">Legal</Link>
            </p>
            <p>
              <Link to="/terms">Terms of Use</Link>
            </p>
            <p>
              <Link to="/privacy">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;