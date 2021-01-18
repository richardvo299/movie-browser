import React from "react";
import "../stylesheet/Navbar.css";
import { Link } from "react-router-dom";
const PublicNavbar = () => {
  return (
    <div className="topnav">
      <Link to="#" className="active">
        RICKFLIX
      </Link>
      <Link to="/">Now Playing</Link>
      <Link to="/movie/top_rated">Top Rated</Link>
    </div>
  );
};

export default PublicNavbar;
