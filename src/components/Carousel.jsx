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
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://cdn.pixabay.com/photo/2019/04/28/23/10/fantasy-4164704_960_720.jpg"
            className="d-block w-100"
            alt="..."
            loading="lazy"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://cdn.pixabay.com/photo/2017/10/26/00/24/halloween-2889806_960_720.jpg"
            className="d-block w-100"
            alt="..."
            loading="lazy"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://yordicoder.com/bocetarte/assets/images/user/QWE/4.png"
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
