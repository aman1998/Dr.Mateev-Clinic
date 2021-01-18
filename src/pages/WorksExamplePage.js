import React, { useEffect } from 'react'
import PageTemplate from "../components/Template/PageTemplate2"

import Section from '../components/WorksPage/ExamplePage/Section'

const WorksPage = () => {
  return (
    <PageTemplate>
      <div className='worksPage'>
        <Section />
      </div>
    </PageTemplate>
  )
}

export default WorksPage