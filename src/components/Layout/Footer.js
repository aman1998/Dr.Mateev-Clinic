import React from 'react'
import { NavLink } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

import logo from "../../assets/img/logo2.png";
import icon1 from '../../assets/icons/facebook2.svg'
import icon3 from '../../assets/icons/instagram2.svg'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className='footer'>
      <div className='footer-top'>
        <div className='container'>
          <img src={logo} alt='logo' className='logo'/>
          <nav className='nav-1'>
            <div>{t('nav.16')}</div>
            <NavLink to='/' className='item'>{t('nav.1')}</NavLink>
            <NavLink to='/about' className='item'>{t('nav.2')}</NavLink>
            <NavLink to='/portfolio' className='item'>{t('nav.3')}</NavLink>
            <NavLink to='/gallery' className='item'>{t('nav.7')}</NavLink>
            <NavLink to='/blog' className='item'>{t('nav.10')}</NavLink>
            <NavLink to='/contacts' className='item end'>{t('nav.11')}</NavLink>
          </nav>
          {/* <nav className='nav-2'>
            <div>Информация</div>
            <NavLink to='/' className='item'>FAQ</NavLink>
            <NavLink to='/about' className='item'>Политика пользования</NavLink>
            <NavLink to='/portfolio' className='item'>Политика конфидициальности</NavLink>
          </nav> */}
          <div className='nav-3'>
            <div>{t('contacts.1')}</div>
            <div className='item'>+996 774 728 966</div>
            <div className='item'>{t('contacts.2')}</div>
            <div>
              <a href='https://www.facebook.com/musamateev.clinic/' target='_blank' rel="noreferrer"><img src={icon1} alt='facebook-icon' className='icon'/></a>
              <a href='https://www.instagram.com/musamateev_clinic/?hl=ru' target='_blank' rel="noreferrer"><img src={icon3} alt='instagram-icon' className='icon instagram'/></a>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>{t('nav.13')}</div>
    </footer>
  )
}

export default Footer