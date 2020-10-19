import React from 'react'
import styled from '@emotion/styled'
import { useParams } from 'react-router-dom'
import Titulo from './Titulo'

const Juego = () => {
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
  ]
  return (
    <>
      <Titulo titulo={juegos[id - 1].titulo} />
      <div className="container">
        <Frame>
          <iframe
            id="if-mbt"
            title={juegos[id - 1].titulo}
            src={juegos[id - 1].enlace}
            frameBorder="0"
            scrolling="no"
            sandbox="allow-same-origin allow-scripts allow-forms allow-top-navigation"
            allowtransparency
            allowFullScreen
          ></iframe>
        </Frame>
        <a
          href={juegos[id - 1].enlace}
          className="btn btn-block btn-primary btn-lg rounded mb-2"
          target="__blank"
        >
          Si el juego no carga haz click aqui.
        </a>
      </div>
    </>
  )
}

export default Juego
