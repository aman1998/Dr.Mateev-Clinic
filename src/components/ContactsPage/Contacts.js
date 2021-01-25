import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessageActionCreator } from '../../store/actions/message';

import icon1 from '../../assets/icons/phone.svg';
import icon2 from '../../assets/icons/message.svg';
import icon3 from '../../assets/icons/map.svg';
import icon4 from '../../assets/icons/facebook.svg';
import icon5 from '../../assets/icons/twitter.svg';
import icon6 from '../../assets/icons/instagram.svg';

import Message from '../UI/message';
import photo from '../../assets/img/clinic.png';

const Contacts = () => {
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setMail] = useState('')
  const [error, setError] = useState(false)
  const [active, setActive] = useState(false)
  const [close, setClose] = useState(false)

  const {loading, failed, success} = useSelector(state => ({
    loading: state.message.post.loading,
    success: state.message.post.success,
    failed: state.message.post.failed,
  }))
  const dispatch = useDispatch()

  const sendEmail = (e) => {
    e.preventDefault();
    if(message, name, phone, email) {
     dispatch(fetchMessageActionCreator(name, phone, email, message, setActive))
    }
    else {
      setError(true)
    }
  }


  return (
    <section className='contacts'>
      {/* <img src={photo} alt='photo' className='clinic-photo'/> */}
      <div className='container'>
        <h1 className='contact-title '>Контакты</h1>
        <p className='text'>
          Если у вас есть дополнительные вопросы по клинике, сайту, видам операции и так далее, то напишите нам, и мы постараемся как можно быстрее ответить вам. Если же хотите записаться на консультацию то нажмите на кнопку "Оставить заявку".
        </p>
      </div>
      <div className='container form'>
        <div className='left'>
          <div className='title'>Задайте вопрос</div>
          <form className="contact-form" className='loginForm' onSubmit={sendEmail}>
          <div className='input-wrapper'>
              <div className='wrapper'>
                <div className='label' className='name'>Имя</div>
                <input 
                  type="text" 
                  name="name" 
                  className='input input-left'
                  onFocus={() => setError(false)}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  />
              </div>
              <div className='wrapper'>
                <div className='label' className='name'>Телефон</div>
                <input 
                  type="text" 
                  name="phone" 
                  className='input input-right' 
                  placeholder='+996555112233' 
                  value={phone}
                  onFocus={() => setError(false)}
                  onChange={(e) => setPhone(e.target.value)}
                  />
              </div>
            </div>
            <div className='label' className='name'>Mail</div>
            <input 
              type='email' 
              name="email" 
              className='input'
              value={email}
              onFocus={() => setError(false)}
              onChange={(e) => setMail(e.target.value)}
              />
            <div className='label' className='name'>Сообщение</div>
            <textarea 
              className='input input-text' 
              name='message' 
              value={message}
              onFocus={() => setError(false)}
              onChange={(e) => setMessage(e.target.value)} />
            {error ? <div className='error'>Заполните форму</div> : ''}
            {loading ? 
            <div className='btn'>
              <div className='loading'></div>
            </div> :
            <input type="submit" value="Отправить" className='btn'/>
          }
          </form>
        </div>
        <div className='right'>
          <div className='item'>
            <img src={icon1} alt='icon' className='icon'/>
            <div className='value'>+996 774 728 966</div>
          </div>
          <div className='item'>
            <img src={icon2} alt='icon' className='icon'/>
            <div className='value'>musamateev@gmail.com</div>
          </div>
          <div className='item'>
            <img src={icon3} alt='icon' className='icon'/>
            <div className='value mail'>Кыргызстан, г. Бишкек, ул.Бокомбаева 115</div>
          </div>
          <div className='line'></div>
          <div className='links'>
            <img src={icon4} alt='icon' className='link'/>
            <img src={icon5} alt='icon' className='link'/>
            <img src={icon6} alt='icon' className='link'/>
          </div>
        </div>
      </div>
      <Message active={active} setActive={setActive} close={close} setClose={setClose}/>
    </section>
  )
}

export default Contacts
