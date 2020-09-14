import React from 'react'
import Fade from 'react-reveal'
import Carousel from '../components/Carousel'
import Titulo from '../components/Titulo'
import Card from '../components/Card'

const Inicio = () => {
  const informacion = [
    {
      titulo: 'Enunciado 1',
      enunciado: 'Enunciado de Prueba',
      img: 'https://source.unsplash.com/random',
      enlace: '1',
    },
    {
      titulo: 'Enunciado 2',
      enunciado: 'Enunciado de Prueba 2',
      img: 'https://source.unsplash.com/random',
      enlace: '2',
    },
    {
      titulo: 'Enunciado 3',
      enunciado: 'Enunciado de Prueba 3',
      img: 'https://source.unsplash.com/random',
      enlace: '3',
    },
  ]

  return (
    <div className="mt-5">
      <Fade top>
        <Carousel />
      </Fade>
      <Titulo titulo="RECOMENDADOS" />
      <div className="row p-4 mx-auto">
        <div className="card-deck">
          {informacion.map(({ titulo, enunciado, img, enlace }) => (
            <Card
              key={enlace}
              clase="col-lg-4"
              titulo={titulo}
              enunciado={enunciado}
              img={img}
              enlace={enlace}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Inicio
