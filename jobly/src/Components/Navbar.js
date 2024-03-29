import React from "react"
import { NavLink } from "react-router-dom";


function Navbar() {
    return (
        <div>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/signup">Signup</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/companies">Companies</NavLink></li>
                <li><NavLink to="/jobs">Jobs</NavLink></li>
            </ul>
        </div>
    )

}

export default Navbar