import React from "react";
import  avWhiteLogo from "../assets/av-white-transparentBG.png";
import  avBlackLogo from "../assets/av-black-transparentBG.png";
import "./navbar.css";
const NavBar = () => {
    return(
        <div className="navbar-container">
            <div className="main">
                <div className="logo-container">
                    <img className="logo white" src={avWhiteLogo} alt="AV Logo" />
                    <img className="logo black" src={avBlackLogo} alt="AV Logo" />
                </div>
                <div className="nav-links">
                    <a href="#home">HOME</a>
                    <a href="#about">ABOUT</a>
                    <a href="#services">SERVICES</a>
                    {/* <a href="#contact">Contact</a> */}
                    
                </div>
                <div className="navbar-contact-us">
                    <div className="contact-us-container">
                        <a href="#contact-us" className="contact-us-link">CONTACT US</a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default NavBar

