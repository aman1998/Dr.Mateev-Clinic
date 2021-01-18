import {
  POST_LOGIN_SUCCESS, 
  POST_LOGIN_LOADING, 
  POST_LOGIN_FAILED
} from "../actionTypes";

const initialState = {
  post: {
    success: false,
    loading: false,
    failed: false,
    error: '',
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_LOGIN_LOADING:
      return {
        ...state,
        post: {
          success: false,
          loading: true,
          failed: false,
          error: '',
        },
      }
    case POST_LOGIN_SUCCESS:
      return {
        ...state,
        post: {
          success: true,
          loading: false,
          failed: false,
          error: '',
        },
      }
    case POST_LOGIN_FAILED:
      return {
        ...state,
        post: {
          success: false,
          loading: false,
          failed: true,
          error: '',
        },
      }
    default: return state
  }
}

export default reducer
