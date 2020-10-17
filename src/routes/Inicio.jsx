import React from 'react'
import Fade from 'react-reveal'
import Carousel from '../components/Carousel'
import Info from './Info'

const Inicio = () => {
  return (
    <>
      <Fade top>
        <Carousel />
      </Fade>
      <Info />
    </>
  )
}

export default Inicio
