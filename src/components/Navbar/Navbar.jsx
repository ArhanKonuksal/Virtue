import React /*{ useState } */ from 'react';
//import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import "./Navbar.css";

const Navbar = () => {
    return (
       <div>
        <img src={logo} alt="logo"></img>
       </div>
    );
};

export default Navbar;
