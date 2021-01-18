import React from 'react'
import { useSelector } from 'react-redux';
import photo from '../../assets/img/clinic.png'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

import axios from 'axios'
import { useState } from 'react'

const Profile2 = () => {
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)

  const {name, phone} = useSelector(state => ({
    name: state.profile.info.name,
    phone: state.profile.info.phone
  }))

  return (
    <Formik
    initialValues={
      {
        name: name,
        phone: phone,
        view: 'Подтяжка лица',
      }
    }
    validationSchema={
      Yup.object().shape({
        name: Yup.string()
          .required('Напишите свое имя'),
        phone: Yup.string()
          .required('Введите свой номер'),
      })
    }
    onSubmit = {
      fields => {
        if (message !== '') {
        axios.post('/api/message', {
          name: fields.name,
          phone: fields.phone,
          view: fields.view,
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
      <Form className='profile-2'>
        <div className='title'>Записаться к врачу</div>
        <div className='input-wrapper'>
          <Field type="text" name="name" className='input input-left' value={name} disabled/>
          <Field type="text" name="phone" className='input input-right' value={phone} disabled/>
        </div>
        <Field as="select" name="view" className='input input-select'>
          <option value="Подтяжка лица">Подтяжка лица</option>
          <option value="Пластика век">Пластика век</option>
          <option value="Контурная пластика губ">Контурная пластика губ</option>
          <option value="Липосакция">Липосакция</option>
          <option value="Пластика живота">Пластика живота</option>
          <option value="Пластика груди">Пластика груди</option>
          <option value="Пластика дефектов после огнестрельных ранений">Пластика дефектов после огнестрельных ранений</option>
          <option value="Пластика заячьей губы">Пластика заячьей губы</option>
          <option value="Пластика послеоперационных рубцов">Пластика послеоперационных рубцов</option>
          <option value="Пластика травматических дефектов">Пластика травматических дефектов</option>
          <option value="Пластика послеожоговых контрактур">Пластика послеожоговых контрактур</option>
          <option value="Пластика врожденных ложных суставов">Пластика врожденных ложных суставов</option>
          <option value="Пластика дефектов после удаления опухолей">Пластика дефектов после удаления опухолей</option>
          <option value="Эндопротезирование груди силиконовыми имплантами">Эндопротезирование груди силиконовыми имплантами</option>
          <option value="Микрохирургический шов повреждений нервов верхней конечности">Микрохирургический шов повреждений нервов верхней конечности</option>
          <option value="Микрохирургический шов сухожилий кисти">Микрохирургический шов сухожилий кисти</option>
          <option value="Хирургическое лечение болей в  кисти">Хирургическое лечение болей в  кисти</option>
          <option value="Хирургическая коррекция деформаций конечностей при ДЦП детей">Хирургическая коррекция деформаций конечностей при ДЦП детей</option>
        </Field>
        <textarea 
          className='input input-text' 
          placeholder='Описать причину операции'
          name='message' 
          onFocus={() => setError(false)}
          onChange={(e) => setMessage(e.target.value)} />
        {error ? <div className='error'>Напишите сообщение</div> : ''}
        <button type='submit' className='btn'>Записаться</button>
      </Form>
    )}
  </Formik>
  )
}

export default Profile2