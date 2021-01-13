import React, { useEffect } from 'react'
import PageTemplate from "../components/Template/PageTemplate2"

import Section from '../components/WorksPage/ExamplePage/Section'

const WorksPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <PageTemplate>
      <div className='worksPage'>
        <Section />
      </div>
    </PageTemplate>
  )
}

export default WorksPage