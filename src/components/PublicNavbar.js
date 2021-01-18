import React from 'react'
import "../stylesheet/Navbar.css";


const PublicNavbar = () => {
    return (
        <div class="topnav">
            <a class="active" href="#home">RICKFLIX</a>
            <a href="#nowplaying">Now Playing</a>
            <a href="#watchlist">Watch List</a>
        </div>
    )
}

export default PublicNavbar
