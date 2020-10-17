import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import InfoContext from '../context/informacion/InfoContext'
import logo from '../logo.png'

const Header = () => {
  const infoContext = useContext(InfoContext)
  const { informacion, loading, getInfo } = infoContext

  useEffect(() => {
    getInfo()
    // eslint-disable-next-line
  }, [])

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
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
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#!"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              INFORMACIÓN
            </a>
            <div className="dropdown-menu">
              {loading
                ? null
                : informacion.map((info) => (
                    <NavLink
                      key={info.id}
                      className="dropdown-item"
                      to={`/informacion/${info.id}`}
                    >
                      {info.titulo}
                    </NavLink>
                  ))}
            </div>
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
