// Navbar.js
import React from "react";
import "./Navbar.css"; // Create a separate CSS file for the Navbar styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Property Listings</h1>
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
