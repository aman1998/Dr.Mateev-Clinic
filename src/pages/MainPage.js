import React from 'react'
import PageTemplate from '../components/Template/PageTemplate';
import HeaderContent from '../components/MainPage/headerContent';


const MainPage = () => {
    return (
        <PageTemplate>
          <div className='mainPage'>
            <HeaderContent />
          </div>
        </PageTemplate>
    )
}

export default MainPage