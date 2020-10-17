import React from 'react'
import Fade from 'react-reveal'

const Titulo = ({ titulo }) => {
  return (
    <div className="text-center gradient">
      <br />
      <Fade left>
        <strong>
          <h1 className="font-weight-bolder text-white">{titulo}</h1>
        </strong>
      </Fade>
      <br />
    </div>
  )
}

export default Titulo
