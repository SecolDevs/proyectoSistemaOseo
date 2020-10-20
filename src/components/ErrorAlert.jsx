import React from 'react'

const ErrorAlert = () => {
  return (
    <div className="container mt-5 mb-5 alert alert-dismissible alert-danger">
      <button type="button" className="close" data-dismiss="alert">
        &times;
      </button>
      <h4 className="alert-heading">UPS!</h4>
      <p className="mb-0">
        No podemos cargar la informacion solicitada, verifica e intenta
        nuevamente.
      </p>
    </div>
  )
}

export default ErrorAlert
