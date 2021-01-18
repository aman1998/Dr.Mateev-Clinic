import { combineReducers } from 'redux'
import profile from './profile'
import language from './language'
import login from './login'

export default combineReducers({
  profile,
  language,
  login
})