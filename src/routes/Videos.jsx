import React from 'react'
import Titulo from '../components/Titulo'
import Card from '../components/Card'

const Videos = () => {
  // Crea el array de informacion
  const informacion = [
    {
      titulo: 'Articulaciones del Cuerpo Humano',
      enunciado: 'Este es el enunciado de Que es',
      img:
        'https://cdn.pixabay.com/photo/2020/05/25/08/46/the-dew-5217644_960_720.jpg',
      enlace: '1',
    },
    {
      titulo: 'Las Articulaciones',
      enunciado: 'Enunciado Test',
      img:
        'https://cdn.pixabay.com/photo/2016/11/29/02/06/apiary-1866740_960_720.jpg',
      enlace: '2',
    },
    {
      titulo: 'Los Huesos Para Niños',
      enunciado: 'Enunciado Test',
      img:
        'https://cdn.pixabay.com/photo/2020/05/25/08/46/the-dew-5217644_960_720.jpg',
      enlace: '3',
    },
  ]

  return (
    <>
      <Titulo titulo="VIDEOS" />
      <div className="row p-3 mx-auto">
        <div className="card-deck">
          {informacion.map((info) => (
            <Card
              key={info.enlace}
              clase="col-lg-4"
              titulo={info.titulo}
              enunciado={info.enunciado}
              img={info.img}
              enlace={info.enlace}
              tipo="video"
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Videos
