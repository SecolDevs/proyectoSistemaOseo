import React, { useContext } from 'react'
import Card from '../components/Card'
import ErrorAlert from '../components/ErrorAlert'
import Loader from '../components/Loader'
import Titulo from '../components/Titulo'
import InfoContext from '../context/informacion/InfoContext'
const Info = () => {
  const infoContext = useContext(InfoContext)
  const { informacion, loading } = infoContext

  return (
    <>
      <Titulo titulo="INFORMACIÓN" />
      <div className="row p-3 mx-auto">
        {loading ? (
          <Loader />
        ) : informacion ? (
          <div className="card-deck">
            {informacion.map((info) => (
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
          </div>
        ) : (
          <ErrorAlert />
        )}
      </div>
    </>
  )
}

export default Info
