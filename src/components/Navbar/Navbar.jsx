import React /*{ useState } */ from 'react';
//import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import "./Navbar.css";
import NavbarButton from "../../assets/navbar-button.png"

const Navbar = () => {
    return (
       <>
       <div className='header'>
            <img src={logo} alt="logo"></img>
            <h1>VIRTUE</h1>
        </div>
        <div>
        <button class="navbarli-btn">
            <img src={NavbarButton} alt="Button" />
        </button>
        </div>
        </>
    );
};

export default Navbar;
