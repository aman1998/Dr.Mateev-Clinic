import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
      <header className='container'>
        <div className='blockHeader'>
          <div className='logo'></div>
          <nav className='nav'>
              <NavLink to='/' className='item' activeClassName='active' >Главное</NavLink>
              <NavLink to='/about' className='item' activeClassName='active' >О клинике</NavLink>
              <NavLink to='/portfolio' className='item' activeClassName='active' >Работы</NavLink>
              <NavLink to='/gallery' className='item' activeClassName='active' >Галерея</NavLink>
              <NavLink to='/blog' className='item' activeClassName='active' >Блог</NavLink>
              <NavLink to='/contacts' className='item end' activeClassName='active' >Контакты</NavLink>
          </nav>
          <button className='btn'>Заказать звонок</button>
        </div>
      </header>
    )
}

export default Header