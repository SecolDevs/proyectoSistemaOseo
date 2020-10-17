import React, { useReducer } from 'react'
import axiosClient from '../../client/axiosClient'
import InfoContext from './InfoContext'
import InfoReducer from './InfoReducer'
import { GET_INFO, GET_ONE_INFO } from '../../types'

const InfoState = (props) => {
  const initialState = {
    informacion: null,
    loading: true,
    oneInfo: null,
  }

  const [state, dispatch] = useReducer(InfoReducer, initialState)

  const getInfo = async () => {
    try {
      const res = await axiosClient.get('items/informacion?fields=*.*')
      dispatch({
        type: GET_INFO,
        payload: res.data.data,
      })
    } catch (e) {
      console.log(e)
    }
  }

  const getOneInfo = async (id) => {
    try {
      const res = await axiosClient.get(`items/informacion/${id}?fields=*.*`)
      dispatch({
        type: GET_ONE_INFO,
        payload: res.data.data,
      })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <InfoContext.Provider
      value={{
        informacion: state.informacion,
        loading: state.loading,
        oneInfo: state.oneInfo,
        getInfo,
        getOneInfo,
      }}
    >
      {props.children}
    </InfoContext.Provider>
  )
}

export default InfoState
