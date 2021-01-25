import axios from "../../axios/axios";
import {GET_BLOGS, GET_BLOGS_FAILED, GET_BLOGS_LOADING, GET_BLOGS_SUCCESS} from "../actionTypes";

export const fetchBlogsAcionCreater = () => dispatch => {
  dispatch({type: GET_BLOGS_LOADING})
  axios.get('/blogs/')
  .then((res) => {
    console.log(res.data)
    dispatch(getBlogs(res.data))
    dispatch({type: GET_BLOGS_SUCCESS})
  })
  .catch(e => {
    console.log(e)
    dispatch({type: GET_BLOGS_FAILED})
  })
}


export const getBlogs = (blogs) => ({
  type: GET_BLOGS,
  blogs
})

