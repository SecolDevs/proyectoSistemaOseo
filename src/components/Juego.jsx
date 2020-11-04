import React from 'react'
import styled from '@emotion/styled'
import { useParams } from 'react-router-dom'
import Titulo from './Titulo'
import ErrorAlert from './ErrorAlert'

const Juego = () => {
  // Extrae el id de la url
  const { id } = useParams()

  const Frame = styled.div`
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow-x: hidden;
    }
  `

  const juegos = [
    {
      titulo: 'Curiosidades del Sistema Óseo',
      enlace: 'https://mobbyt.com/portal/game.php?Id=114754',
    },
    {
      titulo: 'Partes del Sistema Óseo',
      enlace: 'https://mobbyt.com/portal/game.php?Id=114879',
    },
    {
      titulo: '¿Que cantidad de huesos tiene...?',
      enlace: 'https://mobbyt.com/portal/game.php?Id=114915',
    },
    {
      titulo: 'Clasificación de los huesos',
      enlace: 'https://mobbyt.com/videojuego/educativo/?Id=116298',
    },
    {
      titulo: 'Evaluación sobre el sistema Óseo',
      enlace:
        'https://docs.google.com/forms/d/e/1FAIpQLSe3wACsYuEhWqfefAwIu39Q9lgpYM68ih-pc2k_B0p-D-Jo8w/viewform?usp=sf_link',
    },
  ]
  return (
    <>
      {juegos[id - 1] ? (
        <>
          <Titulo titulo={juegos[id - 1].titulo} />
          <div className="container">
            <Frame>
              <iframe
                id="if-mbt"
                title={juegos[id - 1].titulo}
                src={juegos[id - 1].enlace}
                frameBorder="0"
                scrolling="yes"
                sandbox="allow-same-origin allow-scripts allow-forms allow-top-navigation"
                allowFullScreen
              ></iframe>
            </Frame>
            <a
              href={juegos[id - 1].enlace}
              className="btn btn-block btn-primary btn-lg rounded"
              target="__blank"
            >
              Si no funciona correctamente haz click aqui.
            </a>
          </div>
        </>
      ) : (
        <ErrorAlert />
      )}
    </>
  )
}

export default Juego
