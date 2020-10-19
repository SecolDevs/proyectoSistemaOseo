import React from 'react'
import Titulo from '../components/Titulo'
import Card from '../components/Card'

const Videos = () => {
  // Crea el array de informacion
  const informacion = [
    {
      titulo: 'Articulaciones del Cuerpo Humano',
      enunciado:
        'La importancia de nuestras articulaciones y sus posibles patologías...',
      img:
        'https://cdn.pixabay.com/photo/2016/09/21/11/31/youtube-1684601_960_720.png',
      enlace: '1',
    },
    {
      titulo: 'Las Articulaciones',
      enunciado:
        '¿Qué son las articulaciones? Cantidad de articulaciones en el cuerpo humano. Tipos de articulaciones y mucho más...',
      img:
        'https://cdn.pixabay.com/photo/2016/09/21/11/31/youtube-1684601_960_720.png',
      enlace: '2',
    },
    {
      titulo: 'Los Huesos Para Niños',
      enunciado: 'En esta ocasión podrán aprender más sobre los huesos...',
      img:
        'https://cdn.pixabay.com/photo/2016/09/21/11/31/youtube-1684601_960_720.png',
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
