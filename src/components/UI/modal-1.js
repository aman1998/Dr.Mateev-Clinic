import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import icon from '../../assets/icons/handshake.svg';
import PhoneInput from 'react-phone-input-2';

import { POST_LOGIN_DEFAULT } from '../../store/actionTypes';
import { fetchLoginActionCreator } from '../../store/actions/login';

const Modal1 = ({active, setActive}) => {
  const {loading, failed, success} = useSelector(state => ({
    loading: state.login.post.loading,
    success: state.login.post.success,
    failed: state.login.post.failed,
  }))
  const [error, setError] = useState(false)
  const [phone, setPhone] = useState('')

  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogin = (body) => {
    dispatch(fetchLoginActionCreator(body))
  }

  const handleHistory = () => {
    history.push('/profile')
  }

  const removeError = () => {
    setError(false)
  }

  const closeModal = () => {
    setActive(false)
    dispatch({ type: POST_LOGIN_DEFAULT })
  }

  return (
    <Formik
      initialValues={
        {
          password: ''
        }
      }
      validationSchema={
        Yup.object().shape({
          password: Yup.string()
            .min(6, 'Минимально 6 символов')
            .required('Это поле обязательна'),
        })
      }
      onSubmit = {
        fields => {
          if(phone) {
            fields.phone = phone;
            handleLogin(fields)
            // handleHistory()
          }
          else {
            setError(true)
          }
        }
      } >
      {() => (
        <section className={active ? 'modal active' : 'modal'} onClick={closeModal}>
        <div className={active ? 'content active' : 'content'} onClick={e => e.stopPropagation()}>
          { success ? 
          <div className='success'>
            <div className='success-wrapper'>
              <div className='success-title'>Спасибо!</div>
              <img src={icon} alt='hand' className='success-icon'/>
              <div className='success-text'>В самое ближайщее время мы свяжемся с вами. </div>
            </div>
          </div>
          :
          <div>
            <div className='title'>Авторизация</div>
            <p className='text'>Чтобы записаться на бесплатную консультацию войдите на сайт</p>
            <Form className='loginForm'>
              <PhoneInput
                country='kg'
                onlyCountries={['kg']}
                disableDropdown
                containerClass='phone'
                value={phone}
                onChange={setPhone}
                onFocus={removeError}
                className='loginPhone'
              />
              {error ? <div className='error'>Ошибка ввода</div> : null}
              <div className='label'>Пароль</div>
              <Field type="text" name="password" className='input' />
              <ErrorMessage name='password' component="div" className='error'/>
              <button type="submit" className='btn' style={failed ? {background: 'red'} : null}>
                {loading ? 
                  <div className='loading'></div> : 
                failed ? 
                  <div className='btn-error'>{'Ошибка'}</div> : 
                  'Оправить'}
              </button>
            </Form>
          </div>
        }
        </div>
      // </section>
      )}
    </Formik>
  )
}

export default Modal1

