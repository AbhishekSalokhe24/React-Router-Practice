import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
    <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Navbar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/features">Features</NavLink>
            <NavLink className="nav-link" to="/pricing">Pricing</NavLink>
        </div>
        </div>
        </div>
    </nav>
  )
}

export default Navbar
