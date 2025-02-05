import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import PricingHero from '../components/PricingHero/pricingHero';
import '../styles/pricingFlex.css';

const Pricing = () => {
  return (
    <>
      <Navbar />
      <div className="bg">
      <PricingHero />
      <div className="pricing-section">
        <div className="pricing-card">
          <h1>Software Solutions</h1>
          <p>Best for personal use</p>
          <p>From</p>
          <p><strong>$0.00</strong> /per month</p>
          <Link to="/Pricing/Software">
            <button className="pricing-button">See Prices</button>
          </Link>
        </div>
        <div className="pricing-card">
          <h1>Creative Design</h1>
          <p>For large teams & corporations</p>
          <p>From</p>
          <p><strong>$0.00</strong> /per month</p>
          <Link to="/Pricing/CreativeDesing">
            <button className="pricing-button">See Prices</button>
          </Link>
        </div>
      </div>
      <div className="pricing-section">
        <div className="pricing-card">
          <h1>Marketing and Branding</h1>
          <p>Best for personal use</p>
          <p>From</p>
          <p><strong>$0.00</strong> /per month</p>
          <Link to="/Pricing/Marketing">
            <button className="pricing-button">See Prices</button>
          </Link>
        </div>
        <div className="pricing-card">
          <h1>Business Solutions</h1>
          <p>For large teams & corporations</p>
          <p>From</p>
          <p><strong>$0.00</strong> /per month</p>
          <Link to="/Pricing/BusinessSolutions">
            <button className="pricing-button">See Prices</button>
          </Link>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Pricing;