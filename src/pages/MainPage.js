import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviewsAcionCreater } from '../store/actions/reviews';

import PageTemplate from '../components/Template/PageTemplate';

import Section1 from '../components/MainPage/Section-1';
import Section2 from '../components/MainPage/Section-2';
import Section3 from '../components/MainPage/Section-3';
import Section4 from '../components/MainPage/Section-4';
import Section5 from '../components/MainPage/Section-5';
// import Section6 from '../components/MainPage/Section-6';
import Section7 from '../components//Map/Map';
import Section8 from '../components/ContactsPage/Contacts';

import Aos from 'aos';
import 'aos/dist/aos.css';

const MainPage = () => {
  const {reviews} = useSelector(state => ({
    reviews: state.reviews.reviews,
  }))
  
  const dispatch = useDispatch()
  useEffect(() => {
    Aos.init({duration: 2000})
    if(reviews.length === 0) {
      dispatch(fetchReviewsAcionCreater())
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <PageTemplate>
          <div className='mainPage'>
            <div data-aos='fade-top'>
              <Section1 />
            </div>
            <Section2 />
            <div data-aos='fade-top'>
              <Section3 />
            </div>
            <div>
              <Section4 />
            </div>
            <div data-aos='fade-top'>
              <Section5 />
            </div>
            {/* <Section6 /> */}
            <div className='contactsPage'>
              <Section8 />
            </div>
            <Section7 />
          </div>
        </PageTemplate>
    )
}

export default MainPage