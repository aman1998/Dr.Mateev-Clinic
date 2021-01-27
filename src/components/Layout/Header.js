import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLanguage } from "../../store/actions/language";

import { useTranslation } from 'react-i18next';

import icon1 from '../../assets/icons/map.svg';
import icon2 from '../../assets/icons/phone.svg';
import icon3 from '../../assets/icons/facebook.svg';
import icon5 from '../../assets/icons/instagram.svg';

import Burger from '../UI/burger';

import burgerIcon from '../../assets/icons/burger.svg';

import Modal from '../UI/modal-2';

const Header = () => {
  const { t, i18n } = useTranslation()

  const [active, setActive] = useState(false)
  const [close, setClose] = useState(false)
  const [burger, setBurger] = useState(false)

  const dispatch = useDispatch()

  const { language } = useSelector(state => ({
    language: state.language.language,
  }))


  useEffect(() => {
    dispatch(getLanguage(localStorage.getItem('i18nextLng')))
  }, [language]) // eslint-disable-line react-hooks/exhaustive-deps

  async function handleChange (e) {
    dispatch(getLanguage(e.target.value))
    await i18n.changeLanguage(e.target.value)
  }
    return (
      <header className='header' id='header'>
        <div className='container'>
          <NavLink to='/' exact>
            <div className='logo'></div>
          </NavLink>
          <div className='mobile'>
            <button className='btn btn-mob' onClick={() => setActive(true)}>{t('btns.1')}</button> 
            <img src={burgerIcon} alt='burger' className='burger-icon' onClick={() => setBurger(true)}/>
          </div>
          <div className='content'>
            <div className='contacts'>
              <div className='contacts-left'>
                {/* <div className='faq'>FAQ</div> */}
                <div className='item'>
                  <img src={icon1} alt='map-icon'/>
                  <div className='address'>{t('contacts.2')}</div>
                </div>
                <div className='line'></div>
                <div className='item'>
                  <img src={icon2} alt='phone-icon'/>
                  <div className='phone'>+996 774 728 966</div>
                </div>
              </div>
              <div className='contacts-right'>
                <a className='item' href='https://www.facebook.com/musamateev.clinic/' target='_blank' rel="noreferrer"><img src={icon3} alt='facebook-icon'/></a>
                <a className='item' href='https://www.instagram.com/musamateev_clinic/?hl=ru' target='_blank' rel="noreferrer"><img src={icon5} alt='instagram-icon'/></a>
                <div className='select'>
                  <select name = 'myfield' defaultValue={language ? language : 'ru'} className='language' onChange={handleChange}>
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
                    <li className='item'><NavLink to='/' className='link' activeClassName='active' exact>{t('nav.1')}</NavLink></li>
                    <li className='item'><NavLink to='/about' className='link' activeClassName='active' exact>{t('nav.2')}</NavLink></li>
                    <li className='item'>
                      <NavLink to='/works' className='link' activeClassName='active' exact>{t('nav.3')}</NavLink>
                      <div className='dropdown'>
                        <div className='dropdown-item'> 
                          <NavLink to='/works/plastic' className='link' activeClassName='active' exact>{t('nav.4')}</NavLink>
                        </div>
                        <div className='dropdown-item'> 
                          <NavLink to='/works/reconstruction' className='link' activeClassName='active' exact>{t('nav.5')}</NavLink>
                        </div>
                        <div className='dropdown-item'> 
                          <NavLink to='/works/example' className='link' activeClassName='active' exact>{t('nav.6')}</NavLink>
                        </div>
                      </div>
                    </li>
                    <li className='item'>
                      <NavLink to='/gallery/clinic' className='link' activeClassName='active' >{t('nav.7')}</NavLink>
                      <div className='dropdown'>
                        <div className='dropdown-item'> 
                          <NavLink to='/gallery/clinic' className='link' activeClassName='active'>{t('nav.8')}</NavLink>
                        </div>
                        <div className='dropdown-item'> 
                          <NavLink to='/gallery/works' className='link' activeClassName='active'>{t('nav.6')}</NavLink>
                        </div>
                      </div>
                    </li>
                    <li className='item'><NavLink to='/blogs' className='link' activeClassName='active' >{t('nav.10')}</NavLink></li>
                    <li className='item end'><NavLink to='/contacts' className='link' activeClassName='active' >{t('nav.11')}</NavLink></li> 
                  </ul>
              </nav>
              <button className='btn' onClick={() => setActive(true)}>{t('btns.1')}</button> 
            </div>
          </div>
        </div>
        <Modal active={active} setActive={setActive} close={close} setClose={setClose}/>
        <Burger 
          burger={burger}
          setBurger={setBurger}
          language={language}
          handleChange={handleChange}
        />
      </header>
    )
}

export default Header
