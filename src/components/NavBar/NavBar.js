// NavBar.js
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    const [isCollapsed, setCollapsed] = useState(false);  // to track whether the navbar is collapsed or not 

    const toggleNavbar = () => {  // Function to toggle the navbar collapse state
        setCollapsed(!isCollapsed);
    };

    return (
        <>
            <div className="navbar">
                <Link className="navbar_home_icon" to="/"> Utility Apps </Link>
                <div className="navbar_toggle_helper">
                    {  <button className={`navbar-toggler`} onClick={toggleNavbar}> &#9776; </button>}
                    <div  className={`nav-links ${isCollapsed ? 'collapsed' : ''}`}>
                        <Link to="todo"> To Do </Link>
                        <Link to="notes"> Note Keeper</Link>
                        <Link to="timer"> Timer </Link>
                        <Link to="counter"> Counter </Link>
                        <Link to="cmt"> CMT </Link>
                        <Link to="scoreKeeper"> Score Keeper </Link>
                        <Link to="blogs"> React Blogs </Link>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default NavBar;




