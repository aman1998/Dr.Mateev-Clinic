import React from 'react';
import { useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';

import Loader from '../../Loader/Loader';

const Section = () => {
  const { t } = useTranslation()

  const {works, success} = useSelector(state => ({
    works: state.works.works,
    success: state.works.get.success,
  }))

  const getOperName = (id) => {
    if(id === 'PL') return t('views.1')
    if(id === 'PV') return t('views.2')
    if(id === 'KPG') return t('views.3')
    if(id === 'L') return t('views.4')
    if(id === 'PJ') return t('views.5')
    if(id === 'PG') return t('views.6')
    if(id === 'PR') return t('views.7')
    if(id === 'PZ') return t('views.8')
    if(id === 'PTD') return t('views.9')
    if(id === 'PPK') return t('views.10')
    if(id === 'PLS') return t('views.11')
    if(id === 'PDP') return t('views.12')
    if(id === 'EGS') return t('views.13')
    if(id === 'MSN') return t('views.14')
    if(id === 'MSS') return t('views.15')
    if(id === 'XS') return t('views.16')
    if(id === 'XKS') return t('views.17')
  }

  return (
    <section className='example'>
      <div className='container'>
        <h2 className='title'>{t('title.10')}</h2>
        <p className='text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique eget lectus ut id. Aenean aliquet ut vitae nisl, dignissim lectus adipiscing. Id elementum magna viverra cursus ac id pharetra odio aliquam. Et volutpat enim id amet vitae. Id sapien nunc dictumst non quisque euismod. Tristique enim quam arcu elementum pellentesque non. Donec justo sit pharetra tempus. Enim ut risus ut vitae hendrerit lobortis ultricies arcu vitae. Arcu, quam venenatis ullamcorper pharetra ac dignissim integer. Blandit elit cursus odio euismod pellentesque fringilla. Scelerisque integer molestie at dolor hendrerit ornare est tristique. 
        </p>
        {success ? 
        <div className='examples'>
          {works.map((item,id) => 
            <div key={id} className={`item item-${item.id}`}>
              <div className='name'>{getOperName(item.opera)}</div>
              <div className='item-block'>
                <img src={item.beforeopera} alt='example' className='photo photo--left'/>
                <div className='line'></div>
                <img src={item.afteropera} alt='example' className='photo photo--right'/>
              </div>
            </div>
          )}
        </div> : <Loader />
        }
      </div>
    </section>
  )
}

export default Section