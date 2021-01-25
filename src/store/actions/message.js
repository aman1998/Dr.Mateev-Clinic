import {
  POST_MESSAGE_SUCCESS, 
  POST_MESSAGE_LOADING, 
  POST_MESSAGE_FAILED,
} from "../actionTypes"

import axios from '../../axios/axios'

export const fetchMessageActionCreator = (name, phone, email, message, setActive) => dispatch => {
  dispatch({ type: POST_MESSAGE_LOADING })
  axios.post('/asks/',
    {name, phone, email, message}
  )
    .then( ({data}) => {
      dispatch({ type: POST_MESSAGE_SUCCESS })
      setActive(true)
    })
    .catch(e => {
      dispatch({ type: POST_MESSAGE_FAILED})
    })
}
