import {
  POST_LOGIN_SUCCESS, 
  POST_LOGIN_LOADING, 
  POST_LOGIN_FAILED
} from "../actionTypes";


import axios from '../../axios/axios'

export const fetchLoginActionCreator = ({phone, password, reg}) => dispatch => {
  dispatch({ type: POST_LOGIN_LOADING })
  axios.post('/login/',
    {phone, password}
  )
    .then( response => {
      // if( response.data.token !== '') {
      //   localStorage.setItem('token', `Token ${response.data.token}` )
      //   dispatch(setToken(`Token ${response.data.token}`))
      // } 
      dispatch({ type: POST_LOGIN_SUCCESS })
      // dispatch(fetchProfileActionCreator({...response.data}))
    })
    .catch(e => {
      console.log(phone, password)
      dispatch({ type: POST_LOGIN_FAILED})
    })
}