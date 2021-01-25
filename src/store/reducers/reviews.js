import {  GET_REVIEWS,
  GET_REVIEWS_LOADING, 
  GET_REVIEWS_SUCCESS, 
  GET_REVIEWS_FAILED
} from "../actionTypes"

const initialState = {
reviews: [],
get: {
success: false,
loading: false,
failed: false,
error: '',
}
}

const reviews = (state = initialState, action) => {
switch (action.type) {
case GET_REVIEWS:
return {
...state,
reviews: action.reviews,
}
case GET_REVIEWS_LOADING:
return {
  ...state,
  get: {
    success: false,
    loading: true,
    failed: false,
    error: '',
  },
}
case GET_REVIEWS_SUCCESS:
return {
  ...state,
  get: {
    success: true,
    loading: false,
    failed: false,
    error: '',
  },
}
case GET_REVIEWS_FAILED:
return {
  ...state,
  get: {
    success: false,
    loading: false,
    failed: true,
    error: '',
  },
}
default:
return state
}
}

export default reviews