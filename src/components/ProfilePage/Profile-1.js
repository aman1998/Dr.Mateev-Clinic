import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import icon from '../../assets/icons/edit.svg'
import photo from '../../assets/img/user.png';

const Profile1 = () => {
  const {name, gender, mail, phone, age, address} = useSelector(state => ({
    name: state.profile.info.name,
    gender: state.profile.info.gender,
    age: state.profile.info.age,
    phone: state.profile.info.phone,
    mail: state.profile.info.mail,
    address: state.profile.info.address,
  }))

  return (
      <section className='profile-1'>
        <div className='top'>
          <div className='title'>Персональная информация</div>
          <NavLink to='/profile/edit' exact><img src={icon} alt='edit' className='edit-icon'/></NavLink>
        </div>
        <div className='bottom'>
          <div className='avatar-wrapper'><img src={photo} alt='avatar' className='guest'/></div>
          <div className='info-1'>
            <div className='item'>{name}</div>
            <div className='item'>{`Пол: ${gender}`}</div>
            <div className='item'>{`Возраст: ${gender}`}</div>
          </div>
          <div className='info-2'>
            <div className='item'>{`Телефон: ${phone}`}</div>
            <div className='item'>{`Email: ${mail}`}</div>
            <div className='item'>Адрес: {address ? `${mail}` : 'Не указано'}</div>
          </div>
        </div>
      </section>
  )
}

export default Profile1