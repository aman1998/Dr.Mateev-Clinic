import React, { useEffect } from 'react'
import PageTemplate from '../components/Template/PageTemplate2'

import Section1 from '../components/AboutPage/About-1'
import Section2 from '../components/AboutPage/About-2'

const AboutPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
      <PageTemplate>
        <div className='aboutPage'>
          <Section1 />
          <Section2 />
        </div>
      </PageTemplate>
  )
}

export default AboutPage 