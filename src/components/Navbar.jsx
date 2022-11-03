import React from "react";
import { Outlet, Link } from "react-router-dom"

const Navbar = () => {
    return (
    <>
        <div id="Navbar">
        <h1>Juice-box</h1>
        <div className="navButtons">
            <button>Register</button>
            <button><Link to={'/login'}>Login</Link></button>
            <button>Post</button>
        </div>
        </div>
        <div className="Login-Register">
          <Outlet/>  
        </div>
        
    </>
    )


}

export default Navbar