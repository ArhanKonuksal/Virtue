import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import "./Navbar2.css";
import logo1 from "../../assets/Logos/1/white.svg";
import logo2 from "../../assets/Logos/3/white.svg";
import globeIcon from "../../assets/globe.png";
import flagFR from "../../assets/Flag_of_France 1.png";
import flagTR from "../../assets/Flag_of_Turkey 1.png";
import flagSA from "../../assets/Flag_of_Saudi_Arabia 1.png";
import flagUK from "../../assets/Flag_of_the_United_Kingdom.svg 1.png";
import flagDU from "../../assets/illustration-netherlands-flag_53876-27103 1.png";

const Navbar2 = () => {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [languageDropdown, setLanguageDropdown] = useState(false);

  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  const handleClick = () => setClick(!click);
  const toggleLanguageDropdown = () => setLanguageDropdown(!languageDropdown);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.div
      className={`header ${scroll ? "scrolled" : ""}`}
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.45, ease: "easeInOut" }}
    >
      <Link to="/" className="header-title">
        <img src={scroll ? logo2 : logo1} alt="logo" className="logo" />
      </Link>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/Home" onClick={handleClick}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/AboutUs" onClick={handleClick}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/Insights" onClick={handleClick}>
            Insights
          </Link>
        </li>
        <li>
          <Link to="/JoinUs" onClick={handleClick}>
            Join Us
          </Link>
        </li>
        <li>
          <Link to="/ContactUs" onClick={handleClick}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="language-icon" onClick={toggleLanguageDropdown}>
        <img src={globeIcon} alt="language icon" />

        <div
          className={`language-dropdown ${languageDropdown ? "active" : ""}`}
        >
          <div className="language-option">
            <img src={flagSA} alt="Arabic" />
          </div>
          <div className="language-option">
            <img src={flagTR} alt="Turkish" />
          </div>
          <div className="language-option">
            <img src={flagDU} alt="Dutch" />
          </div>
          <div className="language-option">
            <img src={flagFR} alt="French" />
          </div>
          <div className="language-option">
            <img src={flagUK} alt="English" />
          </div>
        </div>
      </div>

      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </motion.div>
  );
};

export default Navbar2;