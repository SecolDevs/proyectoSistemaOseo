import {
  GET_INFO,
  GET_ONE_INFO,
  MANAGE_LOADING,
  SEARCH_DATA,
} from '../../types'

// Reducer con acciones de informacion
export default (state, action) => {
  switch (action.type) {
    //Actualizar el state con la informacion del payload
    case GET_INFO:
      return {
        ...state,
        informacion: action.payload,
        loading: false,
      }
    //Actualizar el state con la informacion del payload
    case GET_ONE_INFO:
      return {
        ...state,
        oneInfo: action.payload,
      }
    //Actualizar el state con la informacion del payload
    case SEARCH_DATA:
      return {
        ...state,
        sInfo: action.payload,
      }
    //Actualizar el state del loader a false
    case MANAGE_LOADING:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}
