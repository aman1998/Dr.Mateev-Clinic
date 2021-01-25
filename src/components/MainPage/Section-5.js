import React from 'react'
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import Carousel from "react-elastic-carousel";

const Section5 = () => {
  const {reviews, success, failed, loading} = useSelector(state => ({
    reviews: state.reviews.reviews,
    loading: state.reviews.get.loading,
    success: state.reviews.get.success,
    failed: state.reviews.get.failed,
  }))

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 1 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];
  return (
    <section className='section-5'>
      <div className='container'>
        <h2 className='title'>Отзывы клиентов</h2>
        {
          success ? 
          <Carousel 
          breakPoints={breakPoints}
          showArrows={false}
          className='views'
          >
           {/* <div className='views'> */}
            {reviews.map((item, id) => 
              <div key={id} className='view'>
                <img src={item.photo} alt='photo' className='photo'/>
                <p className='name'>{item.name}</p>
                <p className='text'>{item.feedback}</p>
              </div>
            )}
            {/* </div> */}
          </Carousel>
        : <Loader />
        }
      </div>
    </section>
  )
}

export default Section5