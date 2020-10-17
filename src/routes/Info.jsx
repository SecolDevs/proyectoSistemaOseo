import React, { useContext } from 'react'
import Card from '../components/Card'
import Titulo from '../components/Titulo'
import InfoContext from '../context/informacion/InfoContext'
const Info = () => {
  const infoContext = useContext(InfoContext)
  const { informacion, loading } = infoContext

  return (
    <>
      <Titulo titulo="INFORMACIÓN" />
      <div className="row p-3 mx-auto">
        <div className="card-deck">
          {loading
            ? null
            : informacion.map((info) => (
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
      </div>
    </>
  )
}

export default Info
