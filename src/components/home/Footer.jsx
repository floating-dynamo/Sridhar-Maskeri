import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import {
  Code,
  GitHub,
  LinkedIn,
  Mail,
  PinDrop,
  Twitter,
} from "@material-ui/icons";
import CoffeeIcon from "@mui/icons-material/Coffee";
import { Link } from "react-router-dom";

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
            <a
              href="https://twitter.com/SridharMaskeri"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="contact-icon contact-icon-socials" />
            </a>
            <a
              href="https://github.com/floating-dynamo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub className="contact-icon contact-icon-socials" />
            </a>
            <a
              href="https://www.linkedin.com/in/sridhar-maskeri-1714001aa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn className="contact-icon contact-icon-socials" />
            </a>
            <a
              href="https://codesandbox.io/u/Floating_dynamo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code className="contact-icon contact-icon-socials" />
            </a>
          </div>
        </div>
        <a
          href="https://www.buymeacoffee.com/sridharmaskeri"
          target="_blank"
          rel="noopener noreferrer"
          className="buy-coffee"
        >
          <p>Buy me a coffee</p>
          <CoffeeIcon className="footer-icons coffee" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
