import React from 'react'
import Fade from 'react-reveal'

const Titulo = ({ titulo }) => {
  return (
    <div className="text-center text-white gradient">
      <br />
      <Fade left>
        <h1 className="font-weight-bolder">{titulo}</h1>
      </Fade>
      <br />
    </div>
  )
}

export default Titulo
