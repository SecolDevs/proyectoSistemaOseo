import React from 'react'

const Carousel = () => {
  return (
    <div
      id="indicadores"
      className="carousel slide carousel-fade mb-0"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#indicadores"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#indicadores" data-slide-to="1"></li>
        <li data-target="#indicadores" data-slide-to="2"></li>
        <li data-target="#indicadores" data-slide-to="3"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://www.socam.yordicoder.com/public/sisos/assets/k3eel9mp9ioskogc"
            className="d-block w-100"
            alt="..."
            loading="lazy"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://cdn.pixabay.com/photo/2013/07/18/10/59/human-skeleton-163715_960_720.jpg"
            className="d-block w-100"
            alt="..."
            loading="lazy"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.pinimg.com/originals/ea/cd/40/eacd40d540b7dc025f16101a0db6c4ae.jpg"
            className="d-block w-100"
            alt="..."
            loading="lazy"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.socam.yordicoder.com/public/sisos/assets/7aidev2x5q0w0oww"
            className="d-block w-100"
            alt="..."
            loading="lazy"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#indicadores"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#indicadores"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}

export default Carousel
