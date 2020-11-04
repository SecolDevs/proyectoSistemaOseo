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
  // State inicial de informacion
  const initialState = {
    informacion: null,
    sInfo: [],
    loading: true,
    oneInfo: null,
  }

  // Extraccion de metodos del reducer
  const [state, dispatch] = useReducer(InfoReducer, initialState)

  // Obtener toda la info desde el enpoint y pasarselo al dispatcher
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

  // Obtener la info de determinado contenido desde el enpoint y pasarselo al dispatcher
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

  // Obtener informacion desde determinado termino desde el enpoint y pasarselo al dispatcher
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

  // Administrar el estado de componente del loader inicial
  const manageLoading = () => {
    dispatch({
      type: MANAGE_LOADING,
    })
  }

  // Pasamos piezas del state al contexto de la aplicacion
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
