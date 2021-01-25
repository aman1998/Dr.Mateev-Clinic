import {
  POST_LOGIN_SUCCESS, 
  POST_LOGIN_LOADING, 
  POST_LOGIN_FAILED,
} from "../actionTypes"

import axios from '../../axios/axios'

export const fetchAppliactionActionCreator = ({fio, phone, oper, message}) => dispatch => {
  dispatch({ type: POST_LOGIN_LOADING })
  axios.post('/online/',
    {fio, phone, oper, message}
  )
    .then( ({data}) => {
      dispatch({ type: POST_LOGIN_SUCCESS })
    })
    .catch(e => {
      dispatch({ type: POST_LOGIN_FAILED})
    })
}
