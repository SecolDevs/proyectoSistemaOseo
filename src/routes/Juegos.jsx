import React from 'react'
import Titulo from '../components/Titulo'
import Card from '../components/Card'

const Juegos = () => {
  // Crea el array de informacion
  const informacion = [
    {
      titulo: 'Curiosidades del Sistema Óseo',
      enunciado:
        'Aprende y descubre algunas curiosidades sobre el Sistema Óseo con este juego...',
      img:
        'https://pixabay.com/get/57e4dd454352ab14f6da8c7dda29307c1236d9e7574c704f752c79d6914dcc5c_1280.png',
      enlace: '1',
    },
    {
      titulo: 'Partes del Sistema Óseo',
      enunciado: 'Descubre que hueso se encuentra atrás de la tarjeta...',
      img:
        'https://pixabay.com/get/57e4dd454352ab14f6da8c7dda29307c1236d9e7574c704f752c79d6914dcc5c_1280.png',
      enlace: '2',
    },
    {
      titulo: '¿Que cantidad de huesos tiene...?',
      enunciado:
        'Identifica la cantidad de huesos de cada parte del Sistema Óseo...',
      img:
        'https://pixabay.com/get/57e4dd454352ab14f6da8c7dda29307c1236d9e7574c704f752c79d6914dcc5c_1280.png',
      enlace: '3',
    },
    {
      titulo: 'Clasificación de los huesos',
      enunciado:
        'De acuerdo a las caracteristicas generales de su forma, identifica...',
      img:
        'https://pixabay.com/get/57e4dd454352ab14f6da8c7dda29307c1236d9e7574c704f752c79d6914dcc5c_1280.png',
      enlace: '4',
    },
    {
      titulo: 'Comprueba tus conocimientos',
      enunciado: 'Responde las preguntas de acuerdo con la información...',
      img:
        'https://pixabay.com/get/57e4dd454352ab14f6da8c7dda29307c1236d9e7574c704f752c79d6914dcc5c_1280.png',
      enlace: '5',
    },
  ]

  return (
    <>
      <Titulo titulo="JUEGOS" />
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
              tipo="juego"
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Juegos
