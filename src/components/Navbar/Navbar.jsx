import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import LanguageLogo from "../../assets/language.png";
import "./Navbar.css";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className="header">
            <div className="hamburger" onClick={handleClick}>
                {click ? (
                    <FaTimes size={20} style={{ color: "#fff" }} />
                ) : (
                    <FaBars size={20} style={{ color: "#fff" }} />
                )}
            </div>
            <div className={click ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-list">
                    <li>
                        <Link to="/Home">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/JoinUs">JoinUs</Link>
                    </li>
                    <li>
                        <Link to="/Services">Services</Link>
                    </li>
                </ul>
            </div>
            <div className="logo">
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
            </div>
                <div className="language-button">
                    <button><img src={LanguageLogo} alt='logo'/></button>
                </div>
        </div>
    );
};

export default Navbar;
