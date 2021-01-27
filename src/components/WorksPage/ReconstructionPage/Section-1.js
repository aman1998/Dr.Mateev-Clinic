import React from 'react';

import { useTranslation } from 'react-i18next';

import icon from '../../../assets/icons/write.svg';

const Section1 = () => {
  const { t } = useTranslation()

  return (
    <section className='section-2'>
      <div className='container'>
        <h2 className='title'>{t('title.25')}</h2>
        <p className='main-text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique eget lectus ut id. Aenean aliquet ut vitae nisl, dignissim lectus adipiscing. Id elementum magna viverra cursus ac id pharetra odio aliquam. Et volutpat enim id amet vitae. Id sapien nunc dictumst non quisque euismod. Tristique enim quam arcu elementum pellentesque non. Donec justo sit pharetra tempus. Enim ut risus ut vitae hendrerit lobortis ultricies arcu vitae. Arcu, quam venenatis ullamcorper pharetra ac dignissim integer. Blandit elit cursus odio euismod pellentesque fringilla. Scelerisque integer molestie at dolor hendrerit ornare est tristique. 
        </p>
        <div className='views views-rec'>
          <div className='view-rec'>
            <img src={icon} alt='photos' className='icon'/>
            <div className='item'>{t('views.15')}</div>
            <div className='item'>{t('views.16')}</div>
            <div className='item'>{t('views.17')}</div>
            <div className='item'>{t('views.18')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section1