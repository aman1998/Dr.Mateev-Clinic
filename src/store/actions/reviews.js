import axios from "../../axios/axios";
import {GET_REVIEWS, GET_REVIEWS_FAILED, GET_REVIEWS_LOADING, GET_REVIEWS_SUCCESS} from "../actionTypes";

export const fetchReviewsAcionCreater = () => dispatch => {
  dispatch({type: GET_REVIEWS_LOADING})
  axios.get('/feedback/')
  .then((res) => {
    console.log(res.data)
    dispatch(getReviews(res.data))
    dispatch({type: GET_REVIEWS_SUCCESS})
  })
  .catch(e => {
    console.log(e)
    dispatch({type: GET_REVIEWS_FAILED})
  })
}


export const getReviews = (reviews) => ({
  type: GET_REVIEWS,
  reviews
})

