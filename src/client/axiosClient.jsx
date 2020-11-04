import axios from 'axios'

// Cliente de axios para hacer request a la api
// Toma la variable local como base de la request
export default axios.create({
  baseURL: process.env.REACT_APP_URL,
})
