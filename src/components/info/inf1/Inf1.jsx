import React, { Fragment } from 'react'
import Card from '../../Card'
import img1 from './1.jpg'
import img2 from './2.PNG'
import img3 from './3.jpg'
import img4 from './4.jpeg'
import img5 from './5.png'
import Fade from 'react-reveal'

const Inf1 = () => {
  const cards = [
    {
      titulo: 'Protección',
      enunciado:
        'Algunos huesos se conectan entre sí para formar cavidades que alojan órganos (cráneo, caja torácica) y los protegen contra fuerzas externas.',
      img: img1,
    },
    {
      titulo: 'Soporte',
      enunciado:
        'La unión estructural de todos los huesos da forma y sostiene el cuerpo',
      img: img3,
    },

    {
      titulo: 'Reserva',
      enunciado:
        'Los huesos se constituyen como el principal centro de almacenamiento de sales de calcio en el cuerpo.',
      img: img4,
    },
    {
      titulo: 'Función hematopoyética',
      enunciado:
        'Los huesos más largos del cuerpo producen células sanguíneas en su medula espinal.',
      img: img5,
    },
    {
      titulo: 'Movimiento',
      enunciado:
        'Los huesos se encuentran unidos mediante articulaciones que permiten el movimiento.',
      img: img2,
    },
  ]

  return (
    <Fragment>
      <Fade right>
        <div className="col-lg-12 text-center">
          <h3>Sistema Esquéletico Humano</h3>
        </div>
        <div className="col-lg-12 my-auto">
          <p>
            El ser humano es bípedo y todo su sistema locomotor madura
            progresivamente durante los primeros años, pero especialmente en el
            primer año y medio de vida. Todos los movimientos que puede realizar
            el cuerpo humano han sido adquiridos y perfeccionados a lo largo de
            la evolución. El sistema esquelético del ser humano está conformado
            por cartílagos, huesos y articulaciones y, en general, cumple las
            siguientes funciones:
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
              enlace="1"
              tipo="informacion"
            />
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default Inf1
