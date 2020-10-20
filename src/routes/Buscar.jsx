import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import Loader from '../components/Loader'
import Titulo from '../components/Titulo'
import InfoContext from '../context/informacion/InfoContext'
import VideoContext from '../context/video/VideoContext'

const Buscar = () => {
  const [loading, setLoading] = useState(true)

  const infoContext = useContext(InfoContext)
  const { sInfo, getSearchI } = infoContext

  const videoContext = useContext(VideoContext)
  const { sVideo, getSearchV } = videoContext

  const { term } = useParams()

  useEffect(() => {
    const getSearch = async () => {
      setLoading(true)
      await Promise.all([getSearchI(term), getSearchV(term)])
      setLoading(false)
    }
    getSearch()

    // eslint-disable-next-line
  }, [term])

  return (
    <>
      <Titulo titulo={`BUSCANDO: ${term}`} />
      <div className="row p-3 mx-auto">
        {loading ? (
          <Loader />
        ) : Object.keys(sInfo).length > 0 || Object.keys(sVideo).length > 0 ? (
          <div className="card-deck">
            {sInfo.map((info) => (
              <Card
                key={info.id}
                clase="col-lg-4"
                titulo={info.titulo}
                enunciado={info.enunciado}
                img={info.cover.data.full_url}
                enlace={info.id}
                tipo="informacion"
              />
            ))}
            {sVideo.map((video) => (
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
          <h1 className="text-center">Resultados no Encontrados</h1>
        )}
      </div>
    </>
  )
}

export default Buscar
