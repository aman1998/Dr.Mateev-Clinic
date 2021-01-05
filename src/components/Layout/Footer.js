import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from "../../assets/img/logo.png";
import icon1 from '../../assets/icons/facebook2.svg'
import icon2 from '../../assets/icons/twitter2.svg'
import icon3 from '../../assets/icons/instagram2.svg'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-top'>
        <div className='container'>
          <img src={logo} alt='logo' className='logo'/>
          <nav className='nav-1'>
            <div>Ссылки</div>
            <NavLink to='/' className='item'>Главное</NavLink>
            <NavLink to='/about' className='item'>О нас</NavLink>
            <NavLink to='/portfolio' className='item'>Работы</NavLink>
            <NavLink to='/gallery' className='item'>Галерея</NavLink>
            <NavLink to='/blog' className='item'>Блог</NavLink>
            <NavLink to='/contacts' className='item end'>Контакты</NavLink>
          </nav>
          <nav className='nav-2'>
            <div>Информация</div>
            <NavLink to='/' className='item'>FAQ</NavLink>
            <NavLink to='/about' className='item'>Политика пользования</NavLink>
            <NavLink to='/portfolio' className='item'>Политика конфидициальности</NavLink>
          </nav>
          <div className='nav-3'>
            <div>Свяжитесь с нами</div>
            <div className='item'>+996 774 728 966</div>
            <div className='item'>Кыргызстан, г. Бишкек, ул.Бокомбаева 115</div>
            <div>
              <img src={icon1} alt='facebook-icon' className='icon'/>
              <img src={icon2} alt='twitter-icon' className='icon'/>
              <img src={icon3} alt='instagram-icon' className='icon instagram'/>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>© 2020  Все права защищены</div>
    </footer>
  )
}

export default Footer