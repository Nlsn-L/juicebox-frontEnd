import React from "react";
import { Outlet, Link } from "react-router-dom"

const Navbar = () => {
    return (
    <>
        <div id="Navbar">
        <h1>Juice-box</h1>
        <div className="dropdown">
            <div className="dropbtn">
                <img 
                    className="menuimg"
                    src="https://cdn.icon-icons.com/icons2/916/PNG/512/Menu_icon_icon-icons.com_71858.png"
                    alt="menu"/>
            </div>
            <div className="dropdown-text">
            <a><Link to={'/register'}>Register</Link></a>
            <a><Link to={'/login'}>Login</Link></a>
            <a><Link>Post</Link></a>
            </div>
        </div>
        </div>
        <div className="Login-Register">
          <Outlet/>  
        </div>
        
    </>
    )


}

export default Navbar