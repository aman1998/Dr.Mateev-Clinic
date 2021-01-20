import React, {useEffect, useState} from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {useDispatch, useSelector} from 'react-redux'

const Phone = ({setActivate, setPhone}) => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')

  const handlePhone = () => {
    setPhone(false)
    setActivate(true)
  }

  console.log(value)

  // const {loading, failed} = useSelector(state => ({
  //   loading: state.fetch.post.loading,
  //   failed: state.fetch.post.failed,
  // }))


  return (
    <form>
      <div className='title' >Регистрация</div>
      <p className='name'>Введите номер телефона</p>
      <PhoneInput
        country='kg'
        onlyCountries={['kg']}
        disableDropdown
        containerClass='phone'
        onChange={setValue}
        // placeholder=''
        // value={phone}
        // onChange={setPhone}
        // onFocus={removeError}
      />
      <button className='btn' onClick={handlePhone}>Отправить</button>
      {/* <button onClick={sendPhone}  className='loginFormBtn reg'>
      {loading ?
        <div className='login-loading'></div> :
      failed ?
        <div className='btn-error'>{props.errorBtn}</div> :
        props.btn}
      </button> */}
    </form>
  )
}

export default Phone

