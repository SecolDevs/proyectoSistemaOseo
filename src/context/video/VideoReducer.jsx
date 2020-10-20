import {
  GET_ONE_VIDEO,
  GET_VIDEO,
  MANAGE_LOADING_V,
  SEARCH_DATA,
} from '../../types'

export default (state, action) => {
  switch (action.type) {
    case GET_VIDEO:
      return {
        ...state,
        videos: action.payload,
        loadingV: false,
      }
    case GET_ONE_VIDEO:
      return {
        ...state,
        oneVideo: action.payload,
      }
    case SEARCH_DATA:
      return {
        ...state,
        sVideo: action.payload,
      }
    case MANAGE_LOADING_V:
      return {
        ...state,
        loadingV: false,
      }
    default:
      return state
  }
}
