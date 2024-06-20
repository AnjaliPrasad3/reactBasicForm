import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    let hStyle = {
        backgroundColor: "#219C90",
        color: "white"
    };

    return (
        <nav className="navbar" style={hStyle}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" style={{ color: "white" }}>Basic Registration Form</Link>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-warning btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}

export default Header;
