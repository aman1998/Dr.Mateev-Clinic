import { combineReducers } from 'redux';
import language from './language';
import application from './application';
import blogs from './blogs';
import reviews from './reviews';
import works from './works';
import message from './message';

export default combineReducers({
  language,
  application,
  blogs,
  reviews,
  works,
  message
})