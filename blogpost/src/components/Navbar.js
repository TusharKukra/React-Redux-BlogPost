import React from 'react'
import {Link} from 'react-router-dom';
import './css/style.css'

const Navbar = (prop) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
            <Link to="/" className="navbar-brand ml-4">{prop.name}</Link>

            <div className="button">
                    <Link to={prop.link} className="btn btn-outline-light">{prop.title}</Link>
            </div>
        </nav>
    )
}

export default Navbar
