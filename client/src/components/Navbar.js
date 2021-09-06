import React from 'react';
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar =()=> {
    return (
        <div className="wrapper">
            <h1>Tom's Movie Review App</h1>
            <div className="button-wrapper">
                <Link className="button" to="/">Home</Link>
                <Link className="button" to="/movies">Movies</Link>
            </div>
        </div>
    );
};

export default Navbar;