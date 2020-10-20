import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import Titulo from './Titulo'
import VideoContext from '../context/video/VideoContext'
import Loader from './Loader'
import ErrorAlert from './ErrorAlert'

const Video = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)

  const videoContext = useContext(VideoContext)
  const { oneVideo, getOneVideo } = videoContext

  useEffect(() => {
    const getVideo = async () => {
      setLoading(true)
      await getOneVideo(id)
      setLoading(false)
    }

    getVideo()
    // eslint-disable-next-line
  }, [id])

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
      {loading ? (
        <Loader />
      ) : oneVideo ? (
        <>
          <Titulo titulo={oneVideo.titulo} />
          <div className="container shadow bg-secondary rounded-lg p-2 mt-2">
            <Frame>
              <iframe
                title={oneVideo.titulo}
                src={oneVideo.enlace}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Frame>
            <hr />
            <h3>Creditos:</h3>
            <p>{oneVideo.creditos}</p>
          </div>
        </>
      ) : (
        <ErrorAlert />
      )}
    </>
  )
}

export default Video
