import React, { useContext, useEffect } from 'react'
import Titulo from '../components/Titulo'
import Card from '../components/Card'
import VideoContext from '../context/video/VideoContext'
import Loader from '../components/Loader'
import ErrorAlert from '../components/ErrorAlert'

const Videos = () => {
  // Extraccion del contexto
  const videoContext = useContext(VideoContext)
  const { videos, loadingV, getVideos } = videoContext

  useEffect(() => {
    // Metodo del contexto para obtener todos los videos
    getVideos()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Titulo titulo="VIDEOS" />
      <div className="row p-3 mx-auto">
        {loadingV ? (
          <Loader />
        ) : videos ? (
          <div className="card-deck">
            {videos.map((video) => (
              <Card
                key={video.enlace}
                clase="col-lg-4"
                titulo={video.titulo}
                enunciado={video.enunciado}
                img={video.cover.data.full_url}
                enlace={video.id}
                tipo="video"
              />
            ))}
          </div>
        ) : (
          <ErrorAlert />
        )}
      </div>
    </>
  )
}

export default Videos
