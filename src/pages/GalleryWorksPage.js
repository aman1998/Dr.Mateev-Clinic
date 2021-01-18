import React, { useEffect } from 'react'
import PageTemplate from "../components/Template/PageTemplate2"

import Section from '../components/GalleryPage/GalleryWorks.js/Works'

const WorksPage = () => {

  return (
    <PageTemplate>
      <div className='galleryPage'>
        <Section />
      </div>
    </PageTemplate>
  )
}

export default WorksPage