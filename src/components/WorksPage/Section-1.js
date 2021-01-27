import React, {useEffect} from 'react'
import { NavLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Section1 = () => {
  const { t } = useTranslation()

  useEffect(() => {
    Aos.init({duration: 700})
  }, [])

  return (
    <section className='section-1'>
      <div className='container'>
        <div className='title'>{t('title.2')}</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique eget lectus ut id. Aenean aliquet ut vitae nisl, dignissim lectus adipiscing. Id elementum magna viverra cursus ac id pharetra odio aliquam. Et volutpat enim id amet vitae. Id sapien nunc dictumst non quisque euismod. Tristique enim quam arcu elementum pellentesque non. Donec justo sit pharetra tempus. Enim ut risus ut vitae hendrerit lobortis ultricies arcu vitae. Arcu, quam venenatis ullamcorper pharetra ac dignissim integer. Blandit elit cursus odio euismod pellentesque fringilla. Scelerisque integer molestie at dolor hendrerit ornare est tristique. Suspendisse congue nullam bibendum nibh sit pellentesque. Scelerisque libero imperdiet molestie et, cras pellentesque leo, mauris scelerisque.
        </p>
        <div className='views'>
          <div className='left' data-aos='fade-right'>
            <div className='view-wrapper'>
              <h2 className='view-title'>{t('title.24')}</h2>
              <div className='view'>{t('views.1')}</div>
              <div className='view'>{t('views.2')}</div>
              <div className='view'>{t('views.3')}</div>
              <div className='view'>{t('views.4')}</div>
              <div className='view'>{t('views.5')}</div>
              <div className='view'>{t('views.6')}</div>
              <div className='view'>{t('views.7')}</div>
              <div className='view'>{t('views.8')}</div>
              <div className='view'>{t('views.9')}</div>
              <div className='view'>{t('views.10')}</div>
              <div className='view'>{t('views.11')}</div>
              <div className='view'>{t('views.12')}</div>
              <div className='view'>{t('views.13')}</div>
              <div className='view'>{t('views.14')}</div>
            </div>
            <NavLink to='/works/plastic'>
              <button className='btn'>{t('btns.2')}</button>
            </NavLink>
          </div>
          <div className='right' data-aos='fade-left'>
            <div className='view-wrapper'>
              <h2 className='view-title'>{t('title.25')}</h2>
              <div className='view'>{t('views.15')}</div>
              <div className='view'>{t('views.16')}</div>
              <div className='view'>{t('views.17')}</div>
              <div className='view'>{t('views.18')}</div>
            </div>
            <NavLink to='/works/reconstruction'>
              <button className='btn'>{t('btns.2')}</button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section1