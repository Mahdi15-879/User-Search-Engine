import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav>
        <Link className="search" to="/">
          Search
        </Link>
        <Link className="History" to="/history">
          Wishlist
        </Link>
      </nav>
    </div>
  );
};

// "https://api.github.com/users"

export default Navbar;
