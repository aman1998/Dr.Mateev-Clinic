import { NavLink } from 'react-router-dom'
import photo from '../../assets/img/photo-2.jpg'

import { useTranslation } from 'react-i18next';

const Section2 = () => {
  const { t } = useTranslation()
  return (
    <section className='section-2'>
      <div className='container'>
        <img src={photo} alt='photos' className='photo'/>
        <div className='content'>
          <h2 className='title'>{t('title.1')}</h2>
          <p className='text'>{t('text.1')}</p>
          <NavLink to='/about' className='btn' exact>{t('btns.5')}</NavLink>
        </div>
      </div>
    </section>
  )
}

export default Section2