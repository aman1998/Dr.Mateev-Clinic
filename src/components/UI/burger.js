import React from 'react'
import closeIcon from '../../assets/icons/close.svg'
import { NavLink } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

import icon1 from '../../assets/icons/map-2.svg'
import icon2 from '../../assets/icons/phone-2.svg'
import icon3 from '../../assets/icons/facebook2.svg'
import icon5 from '../../assets/icons/instagram2.svg'

const Burger = ({burger, setBurger, language, handleChange}) => {
  const { t } = useTranslation()
  return (
    <div className={burger ? 'burger-wrapper show' : 'burger-wrapper'} onClick={() => setBurger(false)}>
      <section className={`burger ${burger ? 'burger-active' : ''}`} onClick={e => e.stopPropagation()}>
        <img src={closeIcon} alt='icon-closr' className='close-icon' onClick={() => setBurger(false)}/>
        <nav className='nav'>
            <ul>
              <li className='item'>
                <NavLink to='/' className='link' activeClassName='active' exact onClick={() => setBurger(false)}>{t('nav.1')}</NavLink>
              </li>
              <li className='item'>
                <NavLink to='/about' className='link' activeClassName='active' exact onClick={() => setBurger(false)}>{t('nav.2')}</NavLink>
              </li>
              <li className='item'>
                <NavLink to='/works' className='link' activeClassName='active' exact onClick={() => setBurger(false)}>{t('nav.3')}</NavLink>
              </li>
              <li className='item'>
                <NavLink to='/works/example' className='link' activeClassName='active' exact onClick={() => setBurger(false)}>{t('nav.14')}</NavLink>
              </li>
              <li className='item'>
                <NavLink to='/gallery/clinic' className='link' activeClassName='active' onClick={() => setBurger(false)}>{t('nav.7')}</NavLink>
              </li>
              <li className='item'><NavLink to='/blogs' className='link' activeClassName='active' onClick={() => setBurger(false)}>{t('nav.10')}</NavLink></li>
              <li className='item end'><NavLink to='/contacts' className='link' activeClassName='active' onClick={() => setBurger(false)}>{t('nav.11')}</NavLink></li>
              <li className='faq item'><div className='link'></div></li> 
            </ul>
        </nav>
        <div className='contacts'>
            <div className='item'>
              <img src={icon1} alt='map-icon'/>
              <div className='address'>{t('contacts.2')}</div>
            </div>
            <div className='item'>
              <img src={icon2} alt='phone-icon'/>
              <div className='phone'>+996 774 728 966</div>
            </div>
            <div className='links'>
              <a href='https://www.facebook.com/musamateev.clinic/' target='_blank' rel="noreferrer"><img src={icon3} alt='facebook-icon'/></a>
              <a href='https://www.instagram.com/musamateev_clinic/?hl=ru' target='_blank' rel="noreferrer"><img src={icon5} alt='instagram-icon'/></a>
            </div>
            <div className='select'>
              <select name = 'myfield' defaultValue={language ? language : 'ru'} className='language' onChange={handleChange}>
                <option value="ru">RU</option>
                <option value="en">EN</option>
                <option value="kg">KG</option>
              </select>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Burger