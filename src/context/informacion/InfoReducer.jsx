import { GET_INFO, GET_ONE_INFO } from '../../types'

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
    default:
      return state
  }
}
