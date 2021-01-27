import React from 'react'
import PageTemplate from "../components/Template/PageTemplate2"

import Section1 from '../components/WorksPage/ReconstructionPage/Section-1'
import Section2 from '../components/WorksPage/Section-2'

const WorksPage = () => {

  return (
    <PageTemplate>
      <div className='worksPage'>
        <Section1 />
        <Section2 />
      </div>
    </PageTemplate>
  )
}

export default WorksPage