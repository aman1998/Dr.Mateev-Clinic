import photo from '../../assets/img/clinic.png'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

import axios from 'axios'
import { useState } from 'react'

import icon1 from '../../assets/icons/phone.svg'
import icon2 from '../../assets/icons/message.svg'
import icon3 from '../../assets/icons/map.svg'
import icon4 from '../../assets/icons/facebook.svg'
import icon5 from '../../assets/icons/twitter.svg'
import icon6 from '../../assets/icons/instagram.svg'

const Contacts = () => {
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)

  return (
    <section className='contacts'>
      <img src={photo} alt='photo' className='clinic-photo'/>
      <div className='container'>
        <h1 className='title'>Контакты</h1>
        <p className='text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique eget lectus ut id. Aenean aliquet ut vitae nisl, dignissim lectus adipiscing. Id elementum magna viverra cursus ac id pharetra odio aliquam. Et volutpat enim id amet vitae. Id sapien nunc dictumst non quisque euismod. Tristique enim quam arcu elementum pellentesque non. Donec justo sit pharetra tempus. Enim ut risus ut vitae hendrerit lobortis ultricies arcu vitae. Arcu, quam venenatis ullamcorper pharetra ac dignissim integer. Blandit elit cursus odio euismod pellentesque fringilla. Scelerisque integer molestie at dolor hendrerit ornare est tristique. 
        </p>
      </div>
      <Formik
      initialValues={
        {
          name: '',
          mail: '',
          phone: '',
        }
      }
      validationSchema={
        Yup.object().shape({
          name: Yup.string()
            .required('Напишите свое имя'),
          phone: Yup.string()
            .required('Введите свой номер'),
          mail: Yup.string()
          .required('Напишите свою почту')
        })
      }
      onSubmit = {
        fields => {
         if (message !== '') {
          axios.post('/api/message', {
            name: fields.name,
            phone: fields.phone,
            mail: fields.mail,
            message: message
          })
          .then((res) => {
            console.log('res',res)
          })
         }
         else {
           setError(true)
         }
        }
      } >
      {() => (
        <section className='container form'>
          <div className='left'>
            <div className='title'>Закажите консультацию</div>
            <Form className='loginForm'>
              <div className='input-wrapper'>
                <div className='wrapper'>
                  <div className='label' className='name'>Имя</div>
                  <Field type="text" name="name" className='input input-left'/>
                  <ErrorMessage name="name" component="div" className='error'/>
                </div>
                <div className='wrapper'>
                  <div className='label' className='name'>Телефон</div>
                  <Field type="text" name="phone" className='input input-right' placeholder='+996555112233'/>
                  <ErrorMessage name="phone" component="div" className='error'/>
                </div>
              </div>
              <div className='label' className='name'>Mail</div>
              <Field type="text" name="mail" className='input'/>
              <ErrorMessage name="mail" component="div" className='error'/>
              <div className='label' className='name'>Сообщение</div>
              <textarea 
                className='input input-text' 
                name='message' 
                onFocus={() => setError(false)}
                onChange={(e) => setMessage(e.target.value)} />
              {error ? <div className='error'>Напишите сообщение</div> : ''}
              <button type="submit" className='btn'>
                Отправить
              </button>
            </Form>
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
        </section>
      )}
    </Formik>
    </section>
  )
}

export default Contacts