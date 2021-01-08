import React, { useEffect } from 'react'
import PageTemplate from "../components/Template/PageTemplate2"

import Section1 from '../components/WorksPage/PlasticPage/Section-1'
import Section2 from '../components/WorksPage/PlasticPage/Section-2'

const WorksPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


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