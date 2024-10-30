import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import globeIcon from "../../assets/globe.png";
import flagFR from "../../assets/Flag_of_France 1.png"; 
import flagTR from "../../assets/Flag_of_Turkey 1.png";
import flagSA from "../../assets/Flag_of_Saudi_Arabia 1.png";
import flagUK from "../../assets/Flag_of_the_United_Kingdom.svg 1.png";
import flagDU from "../../assets/illustration-netherlands-flag_53876-27103 1.png";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [languageDropdown, setLanguageDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const toggleLanguageDropdown = () => setLanguageDropdown(!languageDropdown);

    useEffect(() => {
        const handleScroll = () => setScroll(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`header ${scroll ? "scrolled" : ""}`}>
            <img src={logo} alt="logo" className="logo" />
            <Link to="/" className="header-title">
                <h1>Virtue</h1>
            </Link>
            
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li><Link to="/Home" onClick={handleClick}>Services</Link></li>
                <li><Link to="/AboutUs" onClick={handleClick}>About Us</Link></li>
                <li><Link to="/Insights" onClick={handleClick}>Insights</Link></li>
                <li><Link to="/JoinUs" onClick={handleClick}>Join Us</Link></li>
                <li><Link to="/ContactUs" onClick={handleClick}>Contact</Link></li>
            </ul>

            
            <div className="language-icon" onClick={toggleLanguageDropdown}>
                <img src={globeIcon} alt="language icon" />
                
                <div className={`language-dropdown ${languageDropdown ? "active" : ""}`}>
                    <img src={flagSA} alt="Arabic" />
                    <img src={flagTR} alt="Turkish" />
                    <img src={flagDU} alt="Dutch" />
                    <img src={flagFR} alt="French" />
                    <img src={flagUK} alt="English" />
                </div>
            </div>

            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
        </div>
    );
}

export default Navbar;
