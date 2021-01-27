import React from 'react'

import { useTranslation } from 'react-i18next';

import icon1 from '../../assets/icons/write.svg'
import icon2 from '../../assets/icons/customer.svg'
import icon3 from '../../assets/icons/consulting.svg'
import icon4 from '../../assets/icons/handshake.svg'

const Section2 = () => {
  const { t } = useTranslation()

  const views = [
    {id: 1, title: t('title.17'), text: t('text.6'), icon: icon1},
    {id: 2, title: t('title.18'), text: t('text.7'), icon: icon2},
    {id: 3, title: t('title.19'), text: t('text.8'), icon: icon3},
    {id: 4, title: t('title.20'), text: t('text.9'), icon: icon4}
  ]
  return (
    <section className='section-2'>
      <div className='container'>
        <h2 className='title'>{t('title.7')}</h2>
        <div className='views'>
          {views.map(item => 
            <div key={item.id} className='view'>
              <img src={item.icon} alt='photos' className='icon'/>
              <div className='text'>{item.title}</div>
              <p>{item.text}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Section2