import React, { useReducer } from 'react'
import axiosClient from '../../client/axiosClient'
import VideoContext from './VideoContext'
import VideoReducer from './VideoReducer'
import {
  GET_ONE_VIDEO,
  GET_VIDEO,
  MANAGE_LOADING_V,
  SEARCH_DATA,
} from '../../types'

const VideoState = (props) => {
  // State inicial de videos
  const initialState = {
    videos: null,
    sVideo: [],
    loadingV: true,
    oneVideo: null,
  }

  // Extraccion del reducer de videos
  const [state, dispatch] = useReducer(VideoReducer, initialState)

  // Obtener todos los videos desde la api y los pasa al dispatcher
  const getVideos = async () => {
    try {
      const res = await axiosClient.get('items/video?sort=titulo&fields=*.*')
      dispatch({
        type: GET_VIDEO,
        payload: res.data.data,
      })
    } catch (e) {
      console.log(e)
      manageLoading()
    }
  }

  // Obtener un video desde la api dependiendo el id
  const getOneVideo = async (id) => {
    try {
      const resultado = await axiosClient.get(`items/video/${id}?fields=*.*`)
      dispatch({
        type: GET_ONE_VIDEO,
        payload: resultado.data.data,
      })
    } catch (e) {
      console.log(e)
    }
  }

  // Obtener los videos desde la api dependiendo el termino
  const getSearchV = async (term) => {
    try {
      const res = await axiosClient.get(
        `items/video?filter[titulo][like]=${term}&fields=*.*`
      )
      dispatch({
        type: SEARCH_DATA,
        payload: res.data.data,
      })
    } catch (e) {
      console.log(e)
    }
  }

  // Administrar el state del loader de videos
  const manageLoading = () => {
    dispatch({
      type: MANAGE_LOADING_V,
    })
  }

  // Pasa el state al contexto de la aplicacion
  return (
    <VideoContext.Provider
      value={{
        videos: state.videos,
        loadingV: state.loadingV,
        oneVideo: state.oneVideo,
        sVideo: state.sVideo,
        getVideos,
        getOneVideo,
        getSearchV,
      }}
    >
      {props.children}
    </VideoContext.Provider>
  )
}

export default VideoState
