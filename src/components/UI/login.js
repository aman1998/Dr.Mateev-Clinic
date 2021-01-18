import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as router, useHistory } from 'react-router-dom';

import { fetchLoginActionCreator } from '../../store/actions/login';

import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'


const Login = ({active, setActive, setClose, close}) => {
  const {loading, failed, success} = useSelector(state => ({
    loading: state.login.post.loading,
    success: state.login.post.success,
    failed: state.login.post.failed,
  }))

  const history = useHistory()
  const dispatch = useDispatch()

  const handleLogin = (body) => {
    dispatch(fetchLoginActionCreator(body))
  }
  
  const handleHistory = () => {
    history.push('/profile')
  }

  const closeModal = () => {
    setActive(false)
    setClose(true)
  }
  return (
    <Formik
      initialValues={
        {
          phone: '',
          password: '',
        }
      }
      validationSchema={
        Yup.object().shape({
          phone: Yup.string()
            .required('Введите свой номер'),
          password: Yup.string()
            .min(6, 'Минимум 6 символов')
            .required('Введите свой пароль'),
        })
      }
      onSubmit ={
        fields => {
          handleLogin(fields)
          handleHistory()
        }
      } >
      {() => (
        <section className={active ? 'modal-wrapper show' : 'modal-wrapper'} onClick={closeModal}>
          <section className={`modal2 ${active ? 'up' : close ? 'down' : ''}`} onClick={e => e.stopPropagation()}>
            <div className='content2' >
             <div>
              <div className='title' onClick={closeModal}>Авторизация</div>
                <p>Войдите в свой личный кабинет
                </p>
                <Form className='loginForm'>
                  <div className='label'>Телефон</div>
                  <Field type="text" name="phone" className='input'/>
                  <ErrorMessage name="phone" component="div" className='error'/>
                  <div className='label'>Пароль</div>
                  <Field type="password" name="password" className='input'/>
                  <ErrorMessage name="password" component="div" className='error'/>
                  <button type="submit" className='btn'>
                    {loading ? 
                    <div className='loading'></div> : 
                  failed ? 
                    <div className='btn-error'>{'Ошибка'}</div> : 
                    'Оправить'}
                  </button>
                </Form>
             </div>
            </div>
          </section>
        </section>
      )}
    </Formik>
  )
}

export default Login