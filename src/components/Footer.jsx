import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";
import {
  Code,
  GitHub,
  LinkedIn,
  Mail,
  PinDrop,
  Twitter,
} from "@material-ui/icons";
import CoffeeIcon from "@mui/icons-material/Coffee";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-logo">
        <img src={logo} alt="Sridhar Logo" className="footer-logo-img" />
      </div>
      <div className="footer">
        <div className="contact-me">
          <div>
            <div className="contact-details">
              <Mail className="contact-icon" fontSize="medium" />
              <div className="contact-info">
                <p>shridharmaskeri@gmail.com</p>
              </div>
            </div>
            <div className="contact-details">
              <PinDrop className="contact-icon" fontSize="medium" />
              <div className="contact-info">
                <p>Goa, India</p>
              </div>
            </div>
          </div>
        </div>
        <div className="connect">
          <p className="connect-title">Sridhar Maskeri ✌️</p>
          <div>
            <Twitter className="contact-icon contact-icon-socials" />
            <GitHub className="contact-icon contact-icon-socials" />
            <LinkedIn className="contact-icon contact-icon-socials" />
            <Code className="contact-icon contact-icon-socials" />
          </div>
        </div>
        <div className="buy-coffee">
          <p>Buy me a coffee</p>
          <CoffeeIcon className="footer-icons coffee" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
