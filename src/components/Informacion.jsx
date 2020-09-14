import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Titulo from './Titulo'
import Construct from './Construct'
import Inf1 from './info/inf1/Inf1'
import Inf2 from './info/inf2/Inf2'
import Inf3 from './info/inf3/Inf3'

const Informacion = () => {
  // Procesar el id
  const { id } = useParams()

  const [component, setComponent] = useState()
  const [titulo, setTitulo] = useState('')

  useEffect(() => {
    switch (id) {
      case '1':
        setTitulo('QUE ES?')
        setComponent(<Inf1 />)
        break
      case '2':
        setTitulo('CARTILAGOS')
        setComponent(<Inf2 />)
        break
      case '3':
        setTitulo('ARTICULACIONES')
        setComponent(<Inf3 />)
        break
      default:
        setTitulo('PAGINA EN CONSTRUCCION')
        setComponent(<Construct />)
        break
    }
  }, [id])

  return (
    <div className="mt-5">
      <Titulo titulo={titulo} />
      <div className="p-2">
        <div className="shadow grading-box rounded-lg text-white p-2">
          <div className="row">{component}</div>
        </div>
      </div>
    </div>
  )
}

export default Informacion
