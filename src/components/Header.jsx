import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../logo.png'
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark vw-100">
      <NavLink className="navbar-brand" to="/">
        <img
          src={logo}
          alt="logo"
          width="30"
          height="30"
          className="d-inline-block align-top"
          loading="lazy"
        />
        EL SISTEMA OSEO
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/info">
              INFORMACIÓN
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/videos">
              VIDEOS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/juegos">
              JUEGOS
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
