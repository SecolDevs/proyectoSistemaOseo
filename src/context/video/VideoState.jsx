import React, { useReducer } from 'react'
import axiosClient from '../../client/axiosClient'
import VideoContext from './VideoContext'
import VideoReducer from './VideoReducer'
import { GET_VIDEO } from '../../types'

const VideoState = (props) => {
  const initialState = {
    videos: null,
    loadingV: true,
  }

  const [state, dispatch] = useReducer(VideoReducer, initialState)

  const getVideos = async () => {
    try {
      const res = await axiosClient.get('items/video')
      dispatch({
        type: GET_VIDEO,
        payload: res.data.data,
      })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <VideoContext.Provider
      value={{
        videos: state.videos,
        loadingV: state.loadingV,
        getVideos,
      }}
    >
      {props.children}
    </VideoContext.Provider>
  )
}

export default VideoState
