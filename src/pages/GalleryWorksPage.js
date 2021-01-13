import React, { useEffect } from 'react'
import PageTemplate from "../components/Template/PageTemplate2"

import Section from '../components/GalleryPage/GalleryWorks.js/Works'

const WorksPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <PageTemplate>
      <div className='galleryPage'>
        <Section />
      </div>
    </PageTemplate>
  )
}

export default WorksPage