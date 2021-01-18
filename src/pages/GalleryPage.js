import React, { useEffect } from 'react'
import PageTemplate from '../components/Template/PageTemplate2'

import Gallery1 from '../components/GalleryPage/Gallery-1'
import Gallery2 from '../components/GalleryPage/Gallery-2'

const GalleryPage = () => {

  return (
      <PageTemplate>
        <div className='galleryPage'>
          <Gallery1 />
          <Gallery2 />
        </div>
      </PageTemplate>
  )
}

export default GalleryPage 