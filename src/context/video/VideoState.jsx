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
  const initialState = {
    videos: null,
    sVideo: [],
    loadingV: true,
    oneVideo: null,
  }

  const [state, dispatch] = useReducer(VideoReducer, initialState)

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

  const manageLoading = () => {
    dispatch({
      type: MANAGE_LOADING_V,
    })
  }

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
