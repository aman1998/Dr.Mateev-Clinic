import React, {useState} from 'react'

import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';

import photo from '../../assets/img/photo-2.png'

import Modal1 from '../UI/modal-1'

const Section4 = () => {
  const [active, setActive] = useState(false)

  return (
    <section className='section-4'>
      <div className='container'>
        <div className='text'>Оставьте заявку и мы окажем вам бесплатную онлайн-консультацию.</div>
        <button className='btn' onClick={e => setActive(true)}>Оставить заявку</button> 
      </div>
      <Modal1 active={active} setActive={setActive}/>
    </section>
  )
}

export default Section4