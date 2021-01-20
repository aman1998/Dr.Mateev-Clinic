import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as router, useHistory } from 'react-router-dom';

import { fetchLoginActionCreator } from '../../../store/actions/login';

import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'


const Login = ({setAuth, setActivate, setPhone, setRegistr}) => {
  const {loading, failed, success} = useSelector(state => ({
    loading: state.login.post.loading,
    success: state.login.post.success,
    failed: state.login.post.failed,
  }))

  const history = useHistory()
  const dispatch = useDispatch()

  const handleLogin = (body) => {
    // dispatch(fetchLoginActionCreator(body))
  }
  
  return (
    <Formik
      initialValues={
        {
          password: '',
          name: '',
          confirmPassword: '',
          acceptTerms: false
        }
      }
      validationSchema={
        Yup.object().shape({
          name: Yup.string()
            .required('Введите свое имя'),
          password: Yup.string()
            .min(6, 'Минимум 6 символов')
            .required('Введите свой пароль'),
          confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Пароли не совпадают!')
          .required('Это поле обязетельна!'),
          acceptTerms: Yup.bool().oneOf([true], 'Поставьте галочку!')
        })
      }
      onSubmit ={
        fields => {
          handleLogin()
        }
      } >
      {() => (
        <div>
          <div className='title' >Регистрация</div>
          <p className='name'>Введите данные</p>
          <Form className='loginForm'>
            <div className='label'>Имя</div>
            <Field type="text" name="name" className='input'/>
            <ErrorMessage name="name" component="div" className='error'/>
            <div className='label'>Пароль</div>
            <Field type="password" name="password" className='input'/>
            <ErrorMessage name="password" component="div" className='error'/>
            <div className='label'>Подтвердите пароль</div>
            <Field type="password" name="confirmPassword" className='input'/>
            <ErrorMessage name="confirmPassword" component="div" className='error'/>
            <div className='check-wrapper'>
              <Field type="checkbox" name="acceptTerms" className='check-input'/>
              <label htmlFor="acceptTerms" className="check">Я согласен с условиями</label>
            </div>
            <button type="submit" className='btn'>
              {loading ? 
              <div className='loading'></div> : 
            failed ? 
              <div className='btn-error'>{'Ошибка'}</div> : 
              'Оправить'}
            </button>
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default Login