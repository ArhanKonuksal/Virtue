import React from 'react';
import "./homesection3.css";
import VirtueLogo from "../../assets/Virtue-Logo.png"
import BlueRectangle from "../../assets/BlueRectangle.png"
import CodeBlock from "../../assets/codeBlock.png"
import NpmBlock from "../../assets/npm-requestfoto.png"

const homesection3 = () => {
  return (
    <>
    <div className='home-section3-container'>
        <div className='headings'>
            <h1>Elevated User Experiences by Virtue</h1>
            <h1>UI/UX</h1>
            <h1>Integrated UX Design Solutions (blue)</h1>
        </div>
            <p>Modular Development Framework: Virtue's approach empowers developers to streamline UX/UI development, leveraging preferred frameworks and existing tech stacks for seamless deployment.</p>
        <div className='image-container'>
            <img src={VirtueLogo} alt="virtue-logo" />
            <img src={BlueRectangle} alt='Blue'>
            <h1>Accelerate Your Design Process</h1>
            <p>Virtue isn't just a hub for innovative solutions. It’s a platform crafted to streamline the future of intuitive user experience designs. 

Jumpstart your application with our user-centric design tools and libraries, enabling rapid prototyping and implementation with just a few clicks. Make Virtue your go-to for deploying user interfaces that engage and convert.</p>
            <a href='/readmore'>READ MORE</a>
            </img>
            <img src={CodeBlock} alt='CodeBlock'/>
            <img src={NpmBlock} alt='Npm Block'/>
        </div>
    </div>
    </>
  )
}

export default homesection3