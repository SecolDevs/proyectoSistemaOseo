import React from 'react'
import Card from '../components/Card'
import Titulo from '../components/Titulo'
import imgQueEs from '../assets/img/botones/2.png'
import imgArticu from '../assets/img/botones/3.png'
import imgCarti from '../assets/img/botones/4.png'
import imgClasif from '../assets/img/botones/5.png'
import imgHueso from '../assets/img/botones/6.png'
import imgRegion from '../assets/img/botones/7.png'
const Info = () => {
  // Crea el array de informacion
  const informacion = [
    {
      titulo: '¿Que Es?',
      enunciado:
        'El ser humano es bípedo y todo su sistema locomotor madura progresivamente durante los primeros años, pero especialmente en el...',
      img: imgQueEs,
      enlace: '1',
    },
    {
      titulo: 'Cartilagos',
      enunciado:
        'El ser humano es bípedo y todo su sistema locomotor madura progresivamente durante los primeros años, pero especialmente en el...',
      img: imgCarti,
      enlace: '2',
    },
    {
      titulo: 'Articulaciones',
      enunciado:
        'El ser humano es bípedo y todo su sistema locomotor madura progresivamente durante los primeros años, pero especialmente en el...',
      img: imgArticu,
      enlace: '3',
    },
    {
      titulo: 'Clasificacion de los Huesos',
      enunciado:
        'El ser humano es bípedo y todo su sistema locomotor madura progresivamente durante los primeros años, pero especialmente en el...',
      img: imgClasif,
      enlace: '4',
    },
    {
      titulo: 'El hueso',
      enunciado:
        'El ser humano es bípedo y todo su sistema locomotor madura progresivamente durante los primeros años, pero especialmente en el...',
      img: imgHueso,
      enlace: '5',
    },
    {
      titulo: 'Regiones del sistema óseo',
      enunciado:
        'El ser humano es bípedo y todo su sistema locomotor madura progresivamente durante los primeros años, pero especialmente en el...',
      img: imgRegion,
      enlace: '6',
    },
  ]

  return (
    <div className="mt-5">
      <Titulo titulo="INFORMACIÓN" />
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
              round="round"
              tipo="informacion"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Info
