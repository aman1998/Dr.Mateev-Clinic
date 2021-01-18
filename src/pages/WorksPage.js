import React, { useEffect } from 'react'
import PageTemplate from "../components/Template/PageTemplate2"

import Section1 from '../components/WorksPage/Section-1'
import Section2 from '../components/WorksPage/Section-2'
import Section3 from '../components/WorksPage/Section-3'
import Section4 from '../components/WorksPage/Section-4'

const WorksPage = () => {

  return (
    <PageTemplate>
      <div className='worksPage'>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    </PageTemplate>
  )
}

export default WorksPage