import React, {useEffect} from 'react'

import Header from '../Layout/Header'
import Footer from "../Layout/Footer";

// Обертка для всего сайта
const PageTemplate = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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