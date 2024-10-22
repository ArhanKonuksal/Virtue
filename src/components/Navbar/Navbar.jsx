import React /*{ useState } */ from 'react';
//import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import "./Navbar.css";

const Navbar = () => {
    return (
    <>
        <div className='header'>
            <img src={logo} alt="logo"></img>
            <h1>VIRTUE</h1>
        </div>
        <div>
        </div>
    </>
    );
};

export default Navbar;
