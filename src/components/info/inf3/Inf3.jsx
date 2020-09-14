import React, { Fragment } from 'react'
import Fade from 'react-reveal'
import Card from '../../Card'

const Inf3 = () => {
  const cards = [
    {
      titulo: 'Cartilago Fibroso',
      enunciado:
        'Es blanco con altas concentraciones de colágeno. Está presente en discos invertebrales, la mandíbula, el pubis y algunas inserciones de tendones.',
      img: 'https://source.unsplash.com/random',
    },
    {
      titulo: 'Elastico',
      enunciado:
        'Es de color amarillo, contiene una malla rica en la proteína llamada elastina y está presente en cartílagos de la laringe y la epiglotis, que le dan el poder vibratorio indispensable para la producción de la voz.',
      img: 'https://source.unsplash.com/random',
    },
    {
      titulo: 'Cartilago Hilano',
      enunciado:
        'Está formado por una sustancia vidriosa que cubre superficies articulares.',
      img: 'https://source.unsplash.com/random',
    },
  ]

  return (
    <Fragment>
      <Fade>
        <div className="col-lg-12 my-auto">
          <p>
            Es un tejido conectivo con poca vascularización, resistente a la
            tracción y a las fuerzas de compresión, mientras que mantiene su
            elasticidad. Se compone de condroblastos, células que producen
            cartílago; están inmersas en una matriz rica en grasas, proteínas y
            electrolitos; le brindan sus condiciones visco-elásticas. El
            cartílago puede ser de tres tipos: hialino, fibroso y elástico.
          </p>
        </div>
      </Fade>
      <div className="col-lg-12 mx-auto">
        <div className="row">
          {cards.map(({ titulo, enunciado, img }) => (
            <Card
              key={titulo}
              clase="col-lg-4"
              titulo={titulo}
              img={img}
              enunciado={enunciado}
              enlace="2"
              tipo="informacion"
            />
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default Inf3
