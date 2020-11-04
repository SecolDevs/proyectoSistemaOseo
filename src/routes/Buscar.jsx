import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import Loader from '../components/Loader'
import Titulo from '../components/Titulo'
import InfoContext from '../context/informacion/InfoContext'
import VideoContext from '../context/video/VideoContext'

const Buscar = () => {
  // Creacion del state
  const [loading, setLoading] = useState(true)

  // Extraccion del context de info
  const infoContext = useContext(InfoContext)
  const { sInfo, getSearchI } = infoContext

  // Extraccion del context de video
  const videoContext = useContext(VideoContext)
  const { sVideo, getSearchV } = videoContext

  // Extraccion del termino desde la url
  const { term } = useParams()

  useEffect(() => {
    // Ejecuta el metodo para buscar por un termino, videos e informacion
    const getSearch = async () => {
      setLoading(true)
      await Promise.all([getSearchI(term), getSearchV(term)])
      setLoading(false)
    }
    // Llamada al metodo creado
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
