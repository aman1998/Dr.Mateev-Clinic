import React, { useEffect } from 'react'
import PageTemplate from '../components/Template/PageTemplate'
import Section from '../components/BlogsPage/Blogs'

const AboutPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
      <PageTemplate>
        <div className='blogsPage'>
          <Section />
        </div>
      </PageTemplate>
  )
}

export default AboutPage 