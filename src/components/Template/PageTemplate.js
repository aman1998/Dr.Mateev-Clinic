import React from 'react'

import Header from '../Layout/Header'

// Обертка для всего сайта
const PageTemplate = (props) => {
  return (
    <div className='page'>
      <Header />
      <main>{props.children}</main>
    </div>
  )
}

export default PageTemplate