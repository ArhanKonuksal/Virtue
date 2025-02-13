import React from 'react'
import './CoreVirtuesValues.css'
import senses from "../../assets/senses.png"
import changes from "../../assets/changes.png"
import trust from "../../assets/trust.png"

const CoreVirtuesValues = () => {
  return (
    <>
      <div className='core-heading'>
        <h1>Core Virtues Values</h1>
        <h6>This is our daily guiding principle, ingrained in our DNA and reflected in our every action.</h6>
      </div>
      <div className='core-virtues-container'>
        <div className="core-virtues-item">
          <img src={senses} alt="senses" />
          <h2>Sense Of Ownership</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>

        <div className="core-virtues-item">
          <img src={changes} alt="changes" />
          <h2>Constant Changes</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>

        <div className="core-virtues-item">
          <img src={trust} alt="trust" />
          <h2>Trust</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
    </>
  )
}

export default CoreVirtuesValues