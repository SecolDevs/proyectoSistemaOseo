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
        'https://cdn.pixabay.com/photo/2018/09/05/06/19/signal-3655575_960_720.png',
      enlace: '1',
    },
    {
      titulo: 'Partes del Sistema Óseo',
      enunciado: 'Descubre que hueso se encuentra atrás de la tarjeta...',
      img:
        'https://cdn.pixabay.com/photo/2018/09/05/06/19/signal-3655575_960_720.png',
      enlace: '2',
    },
    {
      titulo: '¿Que cantidad de huesos tiene...?',
      enunciado:
        'Identifica la cantidad de huesos de cada parte del Sistema Óseo...',
      img:
        'https://cdn.pixabay.com/photo/2018/09/05/06/19/signal-3655575_960_720.png',
      enlace: '3',
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
