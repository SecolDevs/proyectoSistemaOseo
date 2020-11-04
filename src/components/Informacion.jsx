import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import InfoContext from '../context/informacion/InfoContext'
import Fade from 'react-reveal'
import Loader from './Loader'
import Titulo from './Titulo'
import ErrorAlert from './ErrorAlert'

const Informacion = () => {
  // Procesar el id
  const { id } = useParams()
  const [loading, setLoading] = useState(true)

  // Extraccion del contexto
  const infoContext = useContext(InfoContext)
  const { oneInfo, getOneInfo } = infoContext

  useEffect(() => {
    // Llama al metodo de obtener la informacion mediante id y cambia el state del loader
    const getData = async () => {
      setLoading(true)
      await getOneInfo(id)
      setLoading(false)
    }
    getData()
    // eslint-disable-next-line
  }, [id])
  return (
    <>
      {loading ? (
        <Loader />
      ) : oneInfo ? (
        <>
          <Titulo titulo={oneInfo.titulo} />
          <Fade>
            <div className="p-2">
              <div className="shadow bg-secondary rounded-lg p-2 container">
                <div
                  dangerouslySetInnerHTML={{ __html: oneInfo.content }}
                ></div>
              </div>
            </div>
          </Fade>
        </>
      ) : (
        <ErrorAlert />
      )}
    </>
  )
}

export default Informacion
