import React from "react";
import "./footer.scss";
import logo from "../../Images/logo1.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="upper">
        <img src={logo} alt="" />
        <div className="rightPart">
          <div className="part1">
            <p>Support</p>
            <p>About Us</p>
            <p>Privacy Policy</p>
          </div>
          <div className="part2">
            <p>Terms & Condition</p>
            <p>Return & Refund Policy</p>
            <p>Shipping & Delivery Policy</p>
          </div>
        </div>
      </div>
      <p>Sea Basket I All Rights Reserved I 2021 Copyright</p>
    </div>
  );
};

export default Footer;
