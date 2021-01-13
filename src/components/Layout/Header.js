import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

import icon1 from '../../assets/icons/map.svg'
import icon2 from '../../assets/icons/phone.svg'
import icon3 from '../../assets/icons/facebook.svg'
import icon4 from '../../assets/icons/twitter.svg'
import icon5 from '../../assets/icons/instagram.svg'

import Burger from '../UI/burger'

import burgerIcon from '../../assets/icons/burger.svg'

import Modal2 from '../UI/modal-2'

const Header = () => {
  const [active, setActive] = useState(false)
  const [close, setClose] = useState(false)
  const [burger, setBurger] = useState(false)
  
    return (
      <header className='container'>
        <div className='header'>
          <NavLink to='/' exact>
            <div className='logo'></div>
          </NavLink>
          <div className='mobile'>
            <button className='btn btn-mob' onClick={() => setActive(true)}>Заказать звонок</button>
            <img src={burgerIcon} alt='burger' className='burger-icon' onClick={() => setBurger(true)}/>
          </div>
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
                  <select name = 'myfield' defaultValue={'ru'} className='language'>
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
                    <li className='item'><NavLink to='/' className='link' activeClassName='active' exact>Главное</NavLink></li>
                    <li className='item'><NavLink to='/about' className='link' activeClassName='active' exact>О клинике</NavLink></li>
                    <li className='item'>
                      <NavLink to='/works' className='link' activeClassName='active' exact>Работы</NavLink>
                      <div className='dropdown'>
                        <div className='dropdown-item'> 
                          <NavLink to='/works/plastic' className='link' activeClassName='active' exact>Пластические операции</NavLink>
                        </div>
                        <div className='dropdown-item'> 
                          <NavLink to='/works/reconstruction' className='link' activeClassName='active' exact>Реконструктивные операции</NavLink>
                        </div>
                        <div className='dropdown-item'> 
                          <NavLink to='/works/example' className='link' activeClassName='active' exact>Работы “До - После”</NavLink>
                        </div>
                      </div>
                    </li>
                    <li className='item'>
                      <NavLink to='/gallery' className='link' activeClassName='active' >Галерея</NavLink>
                      <div className='dropdown'>
                        <div className='dropdown-item'> 
                          <NavLink to='/gallery/clinic' className='link' activeClassName='active'>Галерея клиники</NavLink>
                        </div>
                        <div className='dropdown-item'> 
                          <NavLink to='/gallery/works' className='link' activeClassName='active'>Галерея работ “До - После”</NavLink>
                        </div>
                      </div>
                    </li>
                    <li className='item'><NavLink to='/blogs' className='link' activeClassName='active' >Блог</NavLink></li>
                    <li className='item end'><NavLink to='/contacts' className='link' activeClassName='active' >Контакты</NavLink></li> 
                  </ul>
              </nav>
              <button className='btn' onClick={() => setActive(true)}>Заказать звонок</button>
            </div>
          </div>
        </div>
        <Modal2 active={active} setActive={setActive} close={close} setClose={setClose}/>
        <Burger 
          burger={burger}
          setBurger={setBurger}
        />
      </header>
    )
}

export default Header