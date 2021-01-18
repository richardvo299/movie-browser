import React from "react";
import "../stylesheet/Navbar.css";

const PublicNavbar = () => {
  return (
    <div className="topnav">
      <a className="active" href="#home">
        RICKFLIX
      </a>
      <a href="#nowplaying">Now Playing</a>
      <a href="#watchlist">Watch List</a>
    </div>
  );
};

export default PublicNavbar;
