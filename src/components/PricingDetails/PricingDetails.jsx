import React, { useState } from 'react';
import "./PricingDetails.css";

const PriceSelector = ({ prices }) => {
  const [isBusiness, setIsBusiness] = useState(false);
  const [isAnnually, setIsAnnually] = useState(false);

  const handleToggleBusiness = () => {
    setIsBusiness(!isBusiness);
  };

  const handleToggleAnnually = () => {
    setIsAnnually(!isAnnually);
  };

  const selectedPrices = isBusiness ? prices.business : prices.personal;
  const priceKey = isAnnually ? 'annually' : 'monthly';

  return (
    <div className="price-selector">
      <div className="toggle-buttons">
        <button
          className={!isBusiness ? 'active' : ''}
          onClick={handleToggleBusiness}
        >
          Personal
        </button>
        <button
          className={isBusiness ? 'active' : ''}
          onClick={handleToggleBusiness}
        >
          Business
        </button>
      </div>
      <div className="price-display">
        {selectedPrices[priceKey].map((price, index) => (
          <div key={index} className="price-item">
            ${price}
          </div>
        ))}
      </div>
      <div className="toggle-switch">
        <span>Monthly</span>
        <label className="switch">
          <input type="checkbox" checked={isAnnually} onChange={handleToggleAnnually} />
          <span className="slider"></span>
        </label>
        <span>Annually</span>
      </div>
    </div>
  );
};

const PricingDetails = (props) => {
  return (
    <div className="pricing-details">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <div className="pricing-details-container">
        <div className="pricing-details-item">
          <h2>Item 1</h2>
          <p>Description for item 1</p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <button>Subscribe</button>
        </div>
        <div className="pricing-details-item">
          <h2>Item 2</h2>
          <p>Description for item 2</p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <button>Subscribe</button>
        </div>
        <div className="pricing-details-item">
          <h2>Item 3</h2>
          <p>Description for item 3</p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export { PricingDetails, PriceSelector };

// Usage Sample for values

// import React from 'react';
// import { PriceSelector } from './PriceSelector';

// const prices = {
//   personal: {
//     monthly: [10, 20, 30],
//     annually: [100, 200, 300],
//   },
//   business: {
//     monthly: [50, 60, 70],
//     annually: [500, 600, 700],
//   },
// };

// function App() {
//   return (
//     <div className="App">
//       <PriceSelector prices={prices} />
//     </div>
//   );
// }

// export default App;