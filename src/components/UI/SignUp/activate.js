import React, {useEffect} from 'react'

const Activate = ({setActivate, setRegistr}) => {
  const handleActivate = () => {
    setActivate(false)
    setRegistr(true)
  }
  return (
    <div>
      <div className='title' >Регистрация</div>
      <p className='name'>Введите код активации</p>
      <input type='text' className='input'/>
      <button className='btn' onClick={handleActivate}>Отправить</button>
    </div>
  )
}

export default Activate

