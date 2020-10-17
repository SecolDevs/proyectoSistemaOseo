import React from 'react'
import { useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import Titulo from './Titulo'

const Video = () => {
  const { id } = useParams()

  const videos = [
    {
      titulo: 'Articulaciones del cuerpo humano',
      enlace: 'https://www.youtube.com/embed/6l-WwU5S-q4',
    },
    {
      titulo: 'Las articulaciones',
      enlace: 'https://www.youtube.com/embed/Iduy7FYPbbc',
    },
    {
      titulo: 'Los huesos para niños',
      enlace: 'https://www.youtube.com/embed/qBNb8FwOlzQ',
    },
  ]

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

  return (
    <>
      <Titulo titulo={videos[id - 1].titulo} />
      <div className="container">
        <Frame>
          <iframe
            title={videos[id - 1].titulo}
            src={videos[id - 1].enlace}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Frame>
      </div>
    </>
  )
}

export default Video
