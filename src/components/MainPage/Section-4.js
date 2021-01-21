import React, {useState} from 'react'

import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';

import photo from '../../assets/img/photo-2.png'

import Modal1 from '../UI/modal-1'

const Section4 = () => {
  const [active, setActive] = useState(false)

  const {isLog} = useSelector(state => ({
    isLog: state.profile.isLog,
  }))

  return (
    <section className='section-4'>
      <div className='container'>
        <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Seramo lumio tutto.</div>
        {!isLog ? <button className='btn' onClick={e => setActive(true)}>Заказать звонок</button> :
        <NavLink to='/profile' className='btn' >
          <button className='btn'>Заказать звонок</button>
        </NavLink>} 
      </div>
      <Modal1 active={active} setActive={setActive}/>
    </section>
  )
}

export default Section4