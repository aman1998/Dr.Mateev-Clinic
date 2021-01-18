import React, {useEffect} from 'react'

import Header from '../Layout/Header'
import Footer from "../Layout/Footer";

import axios from 'axios'


// Обертка для всего сайта
const PageTemplate = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const postBlog = () => {
    axios.post('/blog', {
      name: 'Mirbek',
      text: 'Hello my friend',
    })
    .then((res) => {
      console.log('res',res)
    })
  }
  return (
    <div className='page'>
      <Header />
      {/* <button onClick={postBlog}>Click</button> */}
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}

export default PageTemplate