import styled from '@emotion/styled'
import React, { Fragment } from 'react'
import Fade from 'react-reveal'

const Footer = () => {
  const Ol = styled.ol`
    list-style-type: none;
  `

  const Img = styled.img`
    height: 15em;
  `

  return (
    <Fragment>
      <div className="gradient-footer text-center">
        <Fade right>
          <br />
          <div className="row text-white">
            <div className="col-lg-6 text-justify p-5">
              <h4 className="text-white">Integrantes:</h4>
              <Ol>
                <li>Camilo Alejandro Colon Cardenas</li>
                <li>Diego Leandro Alvarez Acevedo</li>
                <li>Jennifer Alejandra Español Castro</li>
                <li>Juan Sebastian Flórez Daza</li>
                <li>Jorge Yilman David Mesa Higuera</li>
              </Ol>
              <h4 className="text-white">Colegio:</h4>
              <Ol>
                <li>
                  Institución Educativa Integrado Joaquín Gonzalez Camargo
                </li>
                <li>Jornada A Sistemas</li>
              </Ol>
            </div>
            <div className="col-lg-6 text-center p-5">
              <Img
                src="https://www.socam.yordicoder.com/public/sisos/assets/2cw23xp5f09w08o4"
                alt="Logo Colegio"
              />
              <p>Grado 11-02</p>
            </div>
          </div>
          <br />
        </Fade>
      </div>
    </Fragment>
  )
}

export default Footer
