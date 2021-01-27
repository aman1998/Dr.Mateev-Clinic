import React from 'react';
import { NavLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import icon1 from '../../assets/icons/lift.svg';
import icon2 from '../../assets/icons/eyebrows.svg';
import icon3 from '../../assets/icons/lips.svg';
import icon4 from '../../assets/icons/liposuction.svg';

const Section3 = () => {
  const { t } = useTranslation()
  const views = [
    {id: 1, title: t('views.1'), icon: icon1},
    {id: 2, title: t('views.2'), icon: icon2},
    {id: 3, title: t('views.3'), icon: icon3},
    {id: 4, title: t('views.4'), icon: icon4}
  ]
  return (
    <section className='section-3'>
      <div className='container'>
        <h2 className='title'>{t('title.2')}</h2>
        <div className='views'>
          {views.map(item => 
            <div key={item.id} className={`view view-${item.id}`}>
              <img src={item.icon} alt='photos' className='icon'/>
              <div className='text'>{item.title}</div>
              <NavLink to='/works/' className={`btn`}>
                <button className='btn'>
                {t('btns.2')}
                </button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Section3