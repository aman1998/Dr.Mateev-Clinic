import {  GET_BLOGS,
          GET_BLOGS_LOADING, 
          GET_BLOGS_SUCCESS, 
          GET_BLOGS_FAILED
        } from "../actionTypes"

const initialState = {
  blogs: [],
  get: {
    success: false,
    loading: false,
    failed: false,
    error: '',
  }
}

const blogs = (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOGS:
      return {
        ...state,
        blogs: action.blogs,
      }
      case GET_BLOGS_LOADING:
        return {
          ...state,
          get: {
            success: false,
            loading: true,
            failed: false,
            error: '',
          },
        }
      case GET_BLOGS_SUCCESS:
        return {
          ...state,
          get: {
            success: true,
            loading: false,
            failed: false,
            error: '',
          },
        }
      case GET_BLOGS_FAILED:
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

export default blogs