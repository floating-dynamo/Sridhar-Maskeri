import React from "react";
import Navbar from "../components/home/Navbar";
import Portfolio from "../components/home/Portfolio";

const PortfolioPage = () => {
  return (
    <>
      <Navbar />
      <div style={{ height: "100vh" }}>
        <Portfolio />
      </div>
    </>
  );
};

export default PortfolioPage;
