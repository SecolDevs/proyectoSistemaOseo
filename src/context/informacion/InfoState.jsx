import React, { useReducer } from 'react'
import axiosClient from '../../client/axiosClient'
import InfoContext from './InfoContext'
import InfoReducer from './InfoReducer'
import {
  GET_INFO,
  GET_ONE_INFO,
  MANAGE_LOADING,
  SEARCH_DATA,
} from '../../types'

const InfoState = (props) => {
  const initialState = {
    informacion: null,
    sInfo: [],
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
      manageLoading()
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

  const getSearchI = async (term) => {
    try {
      const res = await axiosClient.get(
        `items/informacion?filter[titulo][like]=${term}&filter[titulo][logical]=or&filter[enunciado][like]=${term}&filter[enunciado][logical]=or&fields=*.*`
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
      type: MANAGE_LOADING,
    })
  }

  return (
    <InfoContext.Provider
      value={{
        informacion: state.informacion,
        loading: state.loading,
        oneInfo: state.oneInfo,
        sInfo: state.sInfo,
        getInfo,
        getOneInfo,
        getSearchI,
      }}
    >
      {props.children}
    </InfoContext.Provider>
  )
}

export default InfoState
