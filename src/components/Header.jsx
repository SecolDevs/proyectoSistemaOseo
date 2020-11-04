import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import InfoContext from '../context/informacion/InfoContext'
import logo from '../logo.png'

const Header = () => {
  // Extraccion del contexto
  const infoContext = useContext(InfoContext)
  const { informacion, loading, getInfo } = infoContext

  // Creacion del state
  const [busqueda, setBusqueda] = useState('')
  const [disabled, setDisabled] = useState('disabled')

  // Administra los cambios del input y los guarda en el state
  const handleChange = (e) => {
    setBusqueda(e.target.value)
  }

  // Administrar el submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    // Habilita o deshabilita el boton si el input esta vacio
    if (busqueda.trim() === '') {
      setDisabled('disabled')
    } else {
      setDisabled('')
    }
  }, [busqueda])

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
              {loading ? (
                <a href="#!" className="dropdown-item">
                  Obteniendo Datos...
                </a>
              ) : informacion ? (
                informacion.map((info) => (
                  <NavLink
                    key={info.id}
                    className="dropdown-item"
                    to={`/informacion/${info.id}`}
                  >
                    {info.titulo}
                  </NavLink>
                ))
              ) : (
                <a href="#!" className="dropdown-item">
                  No Podemos Cargar la Informacion Solicitada
                </a>
              )}
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
        <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
          <input
            className="form-control mr-sm-2 rounded"
            type="text"
            placeholder="Busca un Tema"
            value={busqueda}
            onChange={handleChange}
          />
          <NavLink
            className={`btn btn-danger my-2 my-sm-0 rounded ${disabled}`}
            to={`/buscar/${busqueda}`}
          >
            Buscar
          </NavLink>
        </form>
      </div>
    </nav>
  )
}

export default Header
