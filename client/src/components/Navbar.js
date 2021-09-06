import React from 'react';
import { Link } from 'react-router-dom'

const Navbar =()=> {
    return (
        <div>
            <h1>Hey I'm a navbar</h1>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
        </div>
    );
};

export default Navbar;