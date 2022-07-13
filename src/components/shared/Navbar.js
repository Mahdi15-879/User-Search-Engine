import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav>
        <Link className="search" to="/">
          Search
        </Link>
        <Link className="History" to="/history">
          History
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
