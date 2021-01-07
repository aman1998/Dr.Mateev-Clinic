import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

import icon1 from '../../assets/icons/map.svg'
import icon2 from '../../assets/icons/phone.svg'
import icon3 from '../../assets/icons/facebook.svg'
import icon4 from '../../assets/icons/twitter.svg'
import icon5 from '../../assets/icons/instagram.svg'

import Modal2 from '../UI/modal-2'

const Header = () => {
  const [active, setActive] = useState(false)
  const [close, setClose] = useState(false)
  
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
                  <ul>
                    <li className='item'><NavLink to='/' className='link' activeClassName='active' >Главное</NavLink></li>
                    <li className='item'><NavLink to='/about' className='link' activeClassName='active' >О клинике</NavLink></li>
                    <li className='item'>
                      <NavLink to='/portfolio' className='link' activeClassName='active' >Работы</NavLink>
                      <div className='dropdown'>
                        <div className='dropdown-item'> 
                          <NavLink to='/portfolio/1' className='link' activeClassName='active'>Пластические операции</NavLink>
                        </div>
                        <div className='dropdown-item'> 
                          <NavLink to='/portfolio/2' className='link' activeClassName='active'>Реконструктивные операции</NavLink>
                        </div>
                        <div className='dropdown-item'> 
                          <NavLink to='/portfolio/3' className='link' activeClassName='active'>Работы “До - После”</NavLink>
                        </div>
                      </div>
                    </li>
                    <li className='item'>
                      <NavLink to='/gallery' className='link' activeClassName='active' >Галерея</NavLink>
                      <div className='dropdown'>
                        <div className='dropdown-item'> 
                          <NavLink to='/gallery/1' className='link' activeClassName='active'>Галерея клиники</NavLink>
                        </div>
                        <div className='dropdown-item'> 
                          <NavLink to='/gallery/2' className='link' activeClassName='active'>Галерея работ “До - После”</NavLink>
                        </div>
                      </div>
                    </li>
                    <li className='item'><NavLink to='/blog' className='link' activeClassName='active' >Блог</NavLink></li>
                    <li className='item end'><NavLink to='/contacts' className='link' activeClassName='active' >Контакты</NavLink></li> 
                  </ul>
              </nav>
              <button className='btn' onClick={() => setActive(true)}>Заказать звонок</button>
            </div>
          </div>
        </div>
        <Modal2 active={active} setActive={setActive} close={close} setClose={setClose}/>
      </header>
    )
}

export default Header