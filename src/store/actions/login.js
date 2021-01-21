import {
  POST_LOGIN_SUCCESS, 
  POST_LOGIN_LOADING, 
  POST_LOGIN_FAILED,
  SET_TOKEN
} from "../actionTypes"

import { fetchProfileActionCreator } from '../actions/profile'


import axios from '../../axios/axios'

export const fetchLoginActionCreator = ({phone, password}, closeModal) => dispatch => {
  dispatch({ type: POST_LOGIN_LOADING })
  axios.post('/login/',
    {phone, password}
  )
    .then( ({data}) => {
      if( data.user.token !== '') {
        // localStorage.setItem('token', `Token ${data.user.token}` )
        // dispatch(setToken(`Token ${data.user.token}`))
        localStorage.setItem('token', `${data.user.token}` )
        dispatch(setToken(`${data.user.token}`))
        console.log(data.user.token)
      } 
      dispatch({ type: POST_LOGIN_SUCCESS })
    })
    .then(() => {
      closeModal()
    })
    .catch(e => {
      console.log(phone, password)
      dispatch({ type: POST_LOGIN_FAILED})
    })
}

export const setToken = (token) => ({
  type: SET_TOKEN,
  token
})