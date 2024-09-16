import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
       <div>Navbar</div>
    );
};

export default Navbar;
