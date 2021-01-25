import React, {useEffect} from 'react'
import PageTemplate from './PageTemplate'
import CallBlock from '../MainPage/Section-4'

import photo from '../../assets/img/banner.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const PageTemplate2 = (props) => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <PageTemplate>
      <img src={photo} data-aos='fade-top' alt='photo' className='clinic-photo'/>
      <section>{props.children}</section>
      <div className='mainPage'>
        <CallBlock />
      </div>
    </PageTemplate>
  )
}

export default PageTemplate2