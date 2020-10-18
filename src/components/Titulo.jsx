import React from 'react'
import Fade from 'react-reveal'

const Titulo = ({ titulo }) => {
  return (
    <div className="text-center gradient">
      <br />
      <Fade left>
        <h1 className="font-weight-bold text-white">{titulo}</h1>
      </Fade>
      <br />
    </div>
  )
}

export default Titulo
