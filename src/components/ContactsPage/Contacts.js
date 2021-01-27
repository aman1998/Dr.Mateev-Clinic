import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessageActionCreator } from '../../store/actions/message';

import { useTranslation } from 'react-i18next';

import icon1 from '../../assets/icons/phone.svg';
import icon2 from '../../assets/icons/message.svg';
import icon3 from '../../assets/icons/map.svg';
import icon4 from '../../assets/icons/facebook.svg';
import icon5 from '../../assets/icons/twitter.svg';
import icon6 from '../../assets/icons/instagram.svg';

import Message from '../UI/message';

const Contacts = () => {
  const { t } = useTranslation()
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setMail] = useState('')
  const [error, setError] = useState(false)
  const [active, setActive] = useState(false)
  const [close, setClose] = useState(false)

  const {loading, failed} = useSelector(state => ({
    loading: state.message.post.loading,
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
        <h1 className='contact-title '>{t('title.4')}</h1>
        <p className='text'>{t('text.4')}</p>
      </div>
      <div className='container form'>
        <div className='left'>
          <div className='title'>{t('title.13')}</div>
          <form className="contact-form loginForm" onSubmit={sendEmail}>
          <div className='input-wrapper'>
              <div className='wrapper'>
                <div className='label name'>{t('inputs.1')}</div>
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
                <div className='label name'>{t('inputs.4')}</div>
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
            <div className='label name'>{t('inputs.2')}</div>
            <input 
              type='email' 
              name="email" 
              className='input'
              value={email}
              onFocus={() => setError(false)}
              onChange={(e) => setMail(e.target.value)}
              />
            <div className='label name'>{t('inputs.3')}</div>
            <textarea 
              className='input input-text' 
              name='message' 
              value={message}
              onFocus={() => setError(false)}
              onChange={(e) => setMessage(e.target.value)} />
            {error ? <div className='error'>{t('inputs.7')}</div> : ''}
            {loading ? 
            <div className='btn'>
              <div className='loading'></div>
            </div> : 
            failed ? <input type="submit" value={t('btns.4')} className='btn'/> :
            <input type="submit" value={t('btns.3')} className='btn'/>
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
            <div className='value mail'>{t('contacts.2')}</div>
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
