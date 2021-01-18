import React, { useEffect } from 'react'
import PageTemplate from '../components/Template/PageTemplate'
import Section from '../components/BlogsPage/Blogs'

const AboutPage = () => {
  
  return (
      <PageTemplate>
        <div className='blogsPage'>
          <Section />
        </div>
      </PageTemplate>
  )
}

export default AboutPage 