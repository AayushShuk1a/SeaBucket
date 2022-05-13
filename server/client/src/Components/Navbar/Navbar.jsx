import React from "react";
import "./Navbar.scss";
import logo from "../../Images/logo1.png";

const Navbar = () => {
  return (
    <div className="Navbar">
      <img src={logo} alt="logo" />
      <div className="menu">
        <a href="#Category" className="links">
          Category
        </a>
        <a href="#FAQs" className="links">
          FAQs
        </a>
        <a href="#MyCart" className="links">
          My Cart
        </a>
        <button className="loginButton">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
