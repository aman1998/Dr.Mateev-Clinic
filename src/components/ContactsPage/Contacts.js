import photo from '../../assets/img/clinic.png'
import emailjs from 'emailjs-com';
import { useState } from 'react'

import icon1 from '../../assets/icons/phone.svg'
import icon2 from '../../assets/icons/message.svg'
import icon3 from '../../assets/icons/map.svg'
import icon4 from '../../assets/icons/facebook.svg'
import icon5 from '../../assets/icons/twitter.svg'
import icon6 from '../../assets/icons/instagram.svg'

import Message from '../UI/message';

const Contacts = () => {
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [mail, setMail] = useState('')
  const [error, setError] = useState(false)
  const [active, setActive] = useState(false)
  const [close, setClose] = useState(false)
  const [loading, setLoading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    if(message, name, phone, mail) {
      setLoading(true)
      emailjs.sendForm('service_3zfy3hm', 'template_acr1a2m', e.target, 'user_dFVSyYAh4SyX3rMu1Yz64')
        .then((result) => {
            console.log(result.text);
            setActive(true)
            setMessage('')
            setName('')
            setPhone('')
            setMail('')
            setLoading(false)
        }, (error) => {
            console.log(error.text);
            setLoading(false)
        });
    }
    else {
      setError(true)
    }
  }


  return (
    <section className='contacts'>
      {/* <img src={photo} alt='photo' className='clinic-photo'/> */}
      <div className='container'>
        <h1 className='title'>Контакты</h1>
        <p className='text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique eget lectus ut id. Aenean aliquet ut vitae nisl, dignissim lectus adipiscing. Id elementum magna viverra cursus ac id pharetra odio aliquam. Et volutpat enim id amet vitae. Id sapien nunc dictumst non quisque euismod. Tristique enim quam arcu elementum pellentesque non. Donec justo sit pharetra tempus. Enim ut risus ut vitae hendrerit lobortis ultricies arcu vitae. Arcu, quam venenatis ullamcorper pharetra ac dignissim integer. Blandit elit cursus odio euismod pellentesque fringilla. Scelerisque integer molestie at dolor hendrerit ornare est tristique. 
        </p>
      </div>
      <div className='container form'>
        <div className='left'>
          <div className='title'>Закажите консультацию</div>
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
              name="mail" 
              className='input'
              value={mail}
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
