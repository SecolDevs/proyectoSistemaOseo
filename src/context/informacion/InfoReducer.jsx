import {
  GET_INFO,
  GET_ONE_INFO,
  MANAGE_LOADING,
  SEARCH_DATA,
} from '../../types'

export default (state, action) => {
  switch (action.type) {
    case GET_INFO:
      return {
        ...state,
        informacion: action.payload,
        loading: false,
      }
    case GET_ONE_INFO:
      return {
        ...state,
        oneInfo: action.payload,
      }
    case SEARCH_DATA:
      return {
        ...state,
        sInfo: action.payload,
      }
    case MANAGE_LOADING:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}
