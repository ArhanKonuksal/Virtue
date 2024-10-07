import React from 'react';
import "./homesection1.css";


const homesection1 = () => {
  return (
    <>
    <div className='homesection1-container'>
        <div className='heading'>
            <h1>Empowering business innovation,</h1>
            <h1>Driving dynamic strategies for your success.</h1>
        </div>
            <div className='list-item'>
            <li>Discover & Plan</li>
            <li>Design & Development</li>
            <li>Support & Expand</li>
            </div>
                <div className='Boxes'>
                    <div className='box1'>
                        <h1>LOREM IPSUM</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <button>Learn More About Our Services</button>
                    </div>
                    <div className='box2'>
                        <h1>LOREM IPSUM</h1>
                        <button>Forward</button>
                    </div>
                    <div className='box2'>
                        <h1>LOREM IPSUM</h1>
                        <button>Forward</button>
                    </div>
                </div>
    </div>
    {/* O resim buraya mı gelsin emin olamadım */}
    </>
  )
}

export default homesection1