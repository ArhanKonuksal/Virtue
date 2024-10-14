import React from 'react'
import ArrowButton from "../../assets/arrowButton.png"
import ForSoftware from "../../assets/ForSoftwareDevelopers.png"

const homesection5 = () => {
  return (
    <>
        <div className='left-side'>
            <button src={ArrowButton}></button>
            <h1>For Software Developers</h1>
            <p>Develop, deploy, and scale with Virtue’s Software Development Team. Leverage the expertise of our dedicated engineers and robust technology stack to build innovative solutions that drive your business forward.</p>
            <button>Start Developing</button>
            <img src={ForSoftware} alt='right'/>
        </div>
        <div className='right-side'>
            <div className='container1'>
                <button src={ArrowButton}></button>
                <h1>For Marketers</h1>
                <p>Connect, create, and captivate with Virtue’s Marketing Team. Utilize our comprehensive marketing strategies and creative resources to enhance your brand’s visibility and engage your target audience effectively.</p>
                <button>Start Marketing</button>
            </div>
            <div className='container2'>
                <h1>For Consultants</h1>
                <p>Transform, innovate, and lead with Virtue’s Consulting Services. Partner with our expert consultants to navigate complex business challenges and develop strategies that deliver sustainable success.</p>
                <button>Start Consalting</button>
            </div>
        </div>
    </>
  )
}

export default homesection5