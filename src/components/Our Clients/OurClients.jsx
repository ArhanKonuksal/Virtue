import React from 'react';
import './OurClients.css';
import Beyköy from "../../assets/beykoy_siyah_beyaz 11.png"; 
import Halisköy from "../../assets/beykoy_siyah_beyaz 14.png"; 


const OurClients = () => {
  return (
    <>
      <div className='client-section'>
        <h2>Our Clients</h2>
        <div className='client-logos'>
          <img src={Beyköy} alt="Client 1" />
          <img src={Halisköy} alt="Client 2" />
          <img src={Beyköy} alt="Client 3" />
          <img src={Halisköy} alt="Client 4" />
        </div>
      </div>
    </>
  );
};

export default OurClients;
