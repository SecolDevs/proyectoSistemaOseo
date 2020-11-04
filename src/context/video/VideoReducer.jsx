import {
  GET_ONE_VIDEO,
  GET_VIDEO,
  MANAGE_LOADING_V,
  SEARCH_DATA,
} from '../../types'

// Reducer de acciones dependiendo el tipe
export default (state, action) => {
  switch (action.type) {
    // Actualizar el state de videos con la info del payload, cambia el loader a false
    case GET_VIDEO:
      return {
        ...state,
        videos: action.payload,
        loadingV: false,
      }
    // Actualizar el state de videos con el payload
    case GET_ONE_VIDEO:
      return {
        ...state,
        oneVideo: action.payload,
      }
    // Actualizar el state de videos con el payload
    case SEARCH_DATA:
      return {
        ...state,
        sVideo: action.payload,
      }
    // Actualizar el state del loader con el payload

    case MANAGE_LOADING_V:
      return {
        ...state,
        loadingV: false,
      }
    default:
      return state
  }
}
