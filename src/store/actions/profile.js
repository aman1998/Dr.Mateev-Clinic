import {
  SET_TOKEN, 
  IS_LOG, 
  SET_PROFILE,
  GET_PROFILE_FAILED, 
  GET_PROFILE_LOADING, 
  GET_PROFILE_SUCCESS,
} from "../actionTypes"

import axios from '../../axios/axios'

export const fetchProfileActionCreator = () => dispatch => {
  dispatch({ type: GET_PROFILE_LOADING })
  const token = localStorage.getItem('token')
  // console.log(token)
  axios.get('/profile/', {
    headers: {
      'Authorization': `${token}`
      // method: 'GET',
      // headers: { 'X-Auth': `${token}` },
    }
  })
    .then(({data}) => {
      dispatch(setProfile(data.data))
      dispatch(checkIsLog(true))
      dispatch({ type: GET_PROFILE_SUCCESS})
      console.log(data.data)
    })
    .catch((e) => {
      console.log(e.message)
      dispatch(checkIsLog(false))
      dispatch(setToken(''))
      dispatch({ type: GET_PROFILE_FAILED })
    })
}

export const checkIsLog = (isLog) => ({
  type: IS_LOG,
  isLog
})

export const setProfile = (payload) => ({
  type: SET_PROFILE,
  payload
})

export const setToken = (token) => ({
  type: SET_TOKEN,
  token
})


