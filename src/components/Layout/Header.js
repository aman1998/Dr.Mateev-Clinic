import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

import icon1 from '../../assets/icons/map.svg'
import icon2 from '../../assets/icons/phone.svg'
import icon3 from '../../assets/icons/facebook.svg'
import icon4 from '../../assets/icons/twitter.svg'
import icon5 from '../../assets/icons/instagram.svg'

import Modal1 from '../UI/modal-1'

const Header = () => {
  const [active, setActive] = useState(false)

    return (
      <header className='container'>
        <div className='header'>
          <div className='logo'></div>
          <div className='content'>
            <div className='contacts'>
              <div className='contacts-left'>
                <div className='faq'>FAQ</div>
                <div className='item'>
                  <img src={icon1} alt='map-icon'/>
                  <div className='address'>Кыргызстан, г. Бишкек, ул.Бокомбаева 115</div>
                </div>
                <div className='line'></div>
                <div className='item'>
                  <img src={icon2} alt='phone-icon'/>
                  <div className='phone'>+996 774 728 966</div>
                </div>
              </div>
              <div className='contacts-right'>
                <img src={icon3} alt='facebook-icon' className='item'/>
                <img src={icon4} alt='twitter-icon' className='item'/>
                <img src={icon5} alt='instagram-icon' className='item'/>
                <div className='select'>
                  <select name = 'myfield' value={'ru'} className='language'>
                    <option value="ru">RU</option>
                    <option value="en">EN</option>
                    <option value="kg">KG</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='navigation'>
              <nav className='nav'>
                  <NavLink to='/' className='item' activeClassName='active' >Главное</NavLink>
                  <NavLink to='/about' className='item' activeClassName='active' >О клинике</NavLink>
                  <NavLink to='/portfolio' className='item' activeClassName='active' >Работы</NavLink>
                  <NavLink to='/gallery' className='item' activeClassName='active' >Галерея</NavLink>
                  <NavLink to='/blog' className='item' activeClassName='active' >Блог</NavLink>
                  <NavLink to='/contacts' className='item end' activeClassName='active' >Контакты</NavLink>
              </nav>
              <button className='btn' onClick={() => setActive(true)}>Заказать звонок</button>
            </div>
          </div>
        </div>
        <Modal1 active={active} setActive={setActive}/>
      </header>
    )
}

export default Header