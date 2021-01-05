import React from 'react'
import PageTemplate from '../components/Template/PageTemplate'

import Section1 from '../components/MainPage/Section-1'
import Section2 from '../components/MainPage/Section-2'
import Section3 from '../components/MainPage/Section-3'
import Section4 from '../components/MainPage/Section-4'
import Section5 from '../components/MainPage/Section-5'
import Section6 from '../components/MainPage/Section-6'

const MainPage = () => {
    return (
        <PageTemplate>
          <div className='mainPage'>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
          </div>
        </PageTemplate>
    )
}

export default MainPage