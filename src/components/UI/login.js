import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { fetchLoginActionCreator } from '../../store/actions/login';
import PhoneInput from 'react-phone-input-2';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup'

const Login = ({setAuth, closeModal}) => {
  const {loading, failed, success} = useSelector(state => ({
    loading: state.login.post.loading,
    success: state.login.post.success,
    failed: state.login.post.failed,
  }))

  const [error, setError] = useState(false)
  const [phone, setPhone] = useState('')

  const history = useHistory()
  const dispatch = useDispatch()

  const handleLogin = (body) => {
    dispatch(fetchLoginActionCreator(body))
  }

  const removeError = () => {
    setError(false)
  }
  
  const handleHistory = () => {
    history.push('/profile')
  }

  return (
    <Formik
      initialValues={
        {
          password: '',
        }
      }
      validationSchema={
        Yup.object().shape({
          password: Yup.string()
            .min(6, 'Минимум 6 символов')
            .required('Введите свой пароль'),
        })
      }
      onSubmit ={
        fields => {
          if(phone) {
            fields.phone = phone;
            handleLogin(fields, closeModal)
            closeModal()
            // handleHistory()
          }
          else {
            setError(true)
          }
        }
      } >
      {() => (
        <div>
        < div className='title' >Авторизация</div>
          <Form className='loginForm'>
            <p style={{marginBottom: '10px'}}>Войдите в свой личный кабинет</p>
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
            <Field type="password" name="password" className='input'/>
            <ErrorMessage name="password" component="div" className='error'/>
            <div className='question' onClick={() => setAuth(false)}>Вы не зарегистированы?</div>
            <button type="submit" className='btn' style={failed ? {background: 'red'} : null}>
              {loading ? 
              <div className='loading'></div> : 
            failed ? 
              <div className='btn-error'>{'Повторить'}</div> : 
              'Оправить'}
            </button>
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default Login