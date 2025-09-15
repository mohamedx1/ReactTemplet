import React from 'react';
import "./NavBar.css"
import {NavLink} from "react-router-dom"
const NavBar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-sm my-navbar p-4 mb-1 fixed-top ">
                <div className="container">
                    <NavLink className="navbar-brand  fs-1" to="/">START FRAMEWORK</NavLink>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                            <li className="nav-item  mx-3">
                                <NavLink className="nav-link   text-white text-uppercase fw-bold mt-3 mt-md-0 px-2  rounded-3" to="/about" aria-current="page">About
                                    <span className="visually-hidden">(current)</span></NavLink>
                            </li>
                            <li className="nav-item mx-3">
                                <NavLink className="nav-link  text-white text-uppercase fw-bold mt-3 mt-md-0 px-2  rounded-3" to="/portfolio" aria-current="page">Portfolio
                                    <span className="visually-hidden">(current)</span></NavLink>
                            </li>
                            <li className="nav-item mx-3">
                                <NavLink className="nav-link  text-white text-uppercase fw-bold mt-3 mt-md-0 px-2  rounded-3" to="/Contact" aria-current="page">Contact
                                    <span className="visually-hidden">(current)</span></NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default NavBar;


