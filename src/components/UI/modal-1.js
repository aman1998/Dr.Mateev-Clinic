import React from 'react'

import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

import axios from 'axios'

const Modal1 = ({active, setActive}) => {
  return (
    <Formik
      initialValues={
        {
          name: '',
          mail: '',
          phone: '',
          view: 'Подтяжка лица',
          acceptTerms: false
        }
      }
      validationSchema={
        Yup.object().shape({
          name: Yup.string()
            .required('Напишите свое имя'),
          phone: Yup.string()
            .required('Введите свой номер'),
          mail: Yup.string()
          .required('Напишите свою почту'),
          acceptTerms: Yup.bool().oneOf([true], 'Поставьте галочку')
        })
      }
      onSubmit ={
        fields => {
          axios.post('/api/form', {
            name: fields.name,
            phone: fields.phone,
            mail: fields.mail,
            view: fields.view
          })
          .then((res) => {
            console.log('res',res)
          })
        }
      } >
      {() => (
        <section className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
        <div className={active ? 'content active' : 'content'} onClick={e => e.stopPropagation()}>
          <div className='title'>Закажите консультацию</div>
          <p>C вами cвяжутся в ближайшие 
            время и подробно проконсультируют!
          </p>
          <Form className='loginForm'>
            <div className='label'>Имя</div>
            <Field type="text" name="name" className='input'/>
            <ErrorMessage name="name" component="div" className='error'/>
            <div className='label'>Mail</div>
            <Field type="text" name="mail" className='input'/>
            <ErrorMessage name="mail" component="div" className='error'/>
            <div className='label'>Телефон</div>
            <Field type="text" name="phone" className='input'/>
            <ErrorMessage name="phone" component="div" className='error'/>
            <div className='label'>Выбрать вид операции </div>
            <Field as="select" name="view" className='input'>
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
            <div className='check-wrapper'>
              <Field type="checkbox" name="acceptTerms" className='check-input'/>
              <label htmlFor="acceptTerms" className="check">Я ознакомлен с условиями пользования</label>
            </div>
            <ErrorMessage name="acceptTerms" component="div" className='error'/>
            <button type="submit" className='btn'>
              Отправить
              {/* {loading ? 
                <div className='login-loading'></div> : 
              failed ? 
                <div className='btn-error'>{props.errorBtn}</div> : 
                props.btn} */}
            </button>
          </Form>
        </div>
      </section>
      )}
    </Formik>
  )
}

export default Modal1