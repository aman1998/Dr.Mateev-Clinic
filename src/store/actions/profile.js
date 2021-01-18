import {
  SET_TOKEN, 
  IS_LOG, 
  SET_PROFILE,
  GET_BALANCE,
  GET_PROFILE_FAILED, 
  GET_PROFILE_LOADING, 
  GET_PROFILE_SUCCESS,
  FETCH_FAILED,
  FETCH_SUCCESS,
  FETCH_LOADING
} from "../actionTypes"

export const checkIsLog = (isLog) => ({
  type: IS_LOG,
  isLog
})

