import React from "react";
import { Outlet, Link } from "react-router-dom"

const Navbar = () => {
    return (
    <>
        <div id="Navbar">
        <h1>Juice-box</h1>
        <div className="navButtons">
            <button>Register</button>
            <button>Login</button>
            <button>Post</button>
        </div>
        </div>
        <div>
          <Outlet/>  
        </div>
        
    </>
    )


}

export default Navbar