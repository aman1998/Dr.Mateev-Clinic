import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';

import photo1 from '../../assets/img/clinic.png';

import Aos from 'aos';
import 'aos/dist/aos.css';
import Loader from '../Loader/Loader';

const Blogs = () => {
  const { t } = useTranslation()
  const {blogs, success} = useSelector(state => ({
    blogs: state.blogs.blogs,
    success: state.blogs.get.success,
  }))

  useEffect(() => {
    Aos.init({duration: 1000})
  }, [])

  console.log(blogs)

  return (
    <section className='blogs-wrapper'>
      <div data-aos='fade-top'>
        <img src={photo1} alt='photo' className='clinic-photo'/>
      </div>
      <div className='container' data-aos='fade-bottom'>
        <h1 className='title'>{t('title.11')}</h1>
        <p className='text'>{t('text.10')}</p>
       {
         success ? 
         <div className='blogs'>
            {blogs.map((item, id) => 
                <div className='blog' key={id}>
                  <img src={item.photo} alt='blog' className='blog-photo'/>
                  <div className='blog-title'>{item.name_blog}</div>
                  <div className='blog-text'>{item.blog}</div>
                  <a className='btn' href={item.url_blog}>{t('btns.5')}</a>
                </div>
                )}
          </div> : <Loader />
       }
      </div>
    </section>
  )
}

export default Blogs