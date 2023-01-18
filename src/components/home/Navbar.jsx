import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"/"}>
        <img className="logo" src={logo} alt="Logo" />
      </Link>
      <div className="navbar-links">
        <Link to="/" className="links">
          Home
        </Link>
        <Link className="links" to={"/portfolio"}>Portfolio</Link>
        <Link className="links">Contact</Link>
        <Link to={"/blog"} className="links">
          Blog
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
