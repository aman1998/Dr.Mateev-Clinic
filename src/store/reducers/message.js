import {
  POST_MESSAGE_SUCCESS, 
  POST_MESSAGE_LOADING, 
  POST_MESSAGE_FAILED,
  POST_MESSAGE_DEFAULT
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
    case POST_MESSAGE_LOADING:
      return {
        ...state,
        post: {
          success: false,
          loading: true,
          failed: false,
          error: '',
        },
      }
    case POST_MESSAGE_SUCCESS:
      return {
        ...state,
        post: {
          success: true,
          loading: false,
          failed: false,
          error: '',
        },
      }
    case POST_MESSAGE_FAILED:
      return {
        ...state,
        post: {
          success: false,
          loading: false,
          failed: true,
          error: '',
        },
      }
      case POST_MESSAGE_DEFAULT:
      return {
        ...state,
        post: {
          success: false,
          loading: false,
          failed: false,
          error: '',
        },
      }
    default: return state
  }
}

export default reducer
