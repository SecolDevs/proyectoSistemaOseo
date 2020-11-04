import React, { useEffect, useState } from 'react'
import Fade from 'react-reveal'
import { Link } from 'react-router-dom'

const Card = ({ clase, titulo, enunciado, img, enlace, tipo, round }) => {
  const [zelda, setZelda] = useState('')

  // Verifica el tipo de la card y le asigna un prefijo al enlace
  useEffect(() => {
    if (tipo === 'video') {
      setZelda('/video/')
    } else if (tipo === 'informacion') {
      setZelda('/informacion/')
    } else {
      setZelda('/juego/')
    }
  }, [tipo])

  return (
    <div className={clase}>
      <Fade bottom>
        <Link to={`${zelda}${enlace}`} className="link-none">
          <div
            className={`shadowed round link-none card text-primary border-success text-center mb-3`}
          >
            <img
              src={img}
              className="card-img-top round"
              alt="..."
              loading="lazy"
            />
            <div className="card-body">
              <h3 className="card-title">{titulo}</h3>
              <p className="card-text">{enunciado}</p>
            </div>
          </div>
        </Link>
      </Fade>
    </div>
  )
}

export default Card
