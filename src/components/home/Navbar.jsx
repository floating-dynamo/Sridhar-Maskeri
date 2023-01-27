import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Cancel, Menu } from "@material-ui/icons";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(
    document.documentElement.clientWidth
  );
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const setWindowWidth = () => {
    setScreenWidth(document.documentElement.clientWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", setWindowWidth);

    return window.removeEventListener("resize", () => {});
  }, [document.documentElement.clientWidth]);

  useEffect(() => {
    if (screenWidth <= 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [screenWidth]);

  return (
    <div className="navbar">
      <Link to={"/"}>
        <img className="logo" src={logo} alt="Logo" />
      </Link>
      {isMobile ? (
        <div
          onClick={() => {
            setMenuIsVisible((prev) => !prev);
          }}
        >
          <Menu />
        </div>
      ) : (
        <NavbarLinks />
      )}
      {menuIsVisible && <NavbarLinks />}
    </div>
  );
};

const NavbarLinks = () => {
  return (
    <div className="navbar-links">
      <Link to="/" className="links">
        Home
      </Link>
      <Link className="links" to={"/portfolio"}>
        Portfolio
      </Link>
      <Link className="links">Contact</Link>
      <Link to={"/blog"} className="links">
        Blog
      </Link>
    </div>
  );
};

export default Navbar;
