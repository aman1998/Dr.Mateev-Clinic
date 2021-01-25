import React, {useState} from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchAppliactionActionCreator } from '../../store/actions/appliaction';

import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

import icon from '../../assets/icons/handshake.svg';


const Modal1 = ({active, setActive, setClose, close}) => {
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)

  const {loading, success, failed} = useSelector(state => ({
    loading: state.application.post.loading,
    success: state.application.post.success,
    failed: state.application.post.failed,
  }))

  const dispatch = useDispatch()

  const closeModal = () => {
    setActive(false)
    setClose(true)
  }
  return (
    <Formik
      initialValues={
        {
          fio: '',
          phone: '',
          oper: 'PL'
        }
      }
      validationSchema={
        Yup.object().shape({
          fio: Yup.string()
            .required('Напишите свое имя'),
          phone: Yup.string()
            .required('Введите свой номер'),
        })
      }
      onSubmit ={
        fields => {
          if(message !== '') {
            dispatch(fetchAppliactionActionCreator({
              fio: fields.fio,
              phone: fields.phone,
              oper: fields.oper,
              message: message
            }))
          }
          else setError(true)
        }
      } >
      {() => (
        <section className={active ? 'modal-wrapper show' : 'modal-wrapper'} onClick={closeModal}>
          <section className={`modal2 ${active ? 'up' : close ? 'down' : ''}`} onClick={e => e.stopPropagation()}>
            <div className='content2' >
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
              <div className='title' onClick={closeModal}>Закажите консультацию</div>
              <p>C вами cвяжутся в ближайшие 
                время и подробно проконсультируют!
              </p>
                <Form className='loginForm'>
                  <Field type="text" name="fio" className='input' placeholder='Имя'/>
                  <ErrorMessage name="fio" component="div" className='error'/>
                  <Field type="text" name="phone" className='input' placeholder='+996555822737'/>
                  <ErrorMessage name="phone" component="div" className='error'/>
                  <Field as="select" name="oper" className='input'>
                    <option value="PL">Подтяжка лица</option>
                    <option value="PV">Пластика век</option>
                    <option value="KPG">Контурная пластика губ</option>
                    <option value="L">Липосакция</option>
                    <option value="PJ">Пластика живота</option>
                    <option value="PG">Пластика груди</option>
                    <option value="PR">Пластика дефектов после огнестрельных ранений</option>
                    <option value="PZ">Пластика заячьей губы</option>
                    <option value="PPR">Пластика послеоперационных рубцов</option>
                    <option value="PTD">Пластика травматических дефектов</option>
                    <option value="PPK">Пластика послеожоговых контрактур</option>
                    <option value="PLS">Пластика врожденных ложных суставов</option>
                    <option value="PDP">Пластика дефектов после удаления опухолей</option>
                    <option value="EGS">Эндопротезирование груди силиконовыми имплантами</option>
                    <option value="MSN">Микрохирургический шов повреждений нервов верхней конечности</option>
                    <option value="MSS">Микрохирургический шов сухожилий кисти</option>
                    <option value="XS">Хирургическое лечение болей в  кисти</option>
                    <option value="XKS">Хирургическая коррекция деформаций конечностей при ДЦП детей</option>
                  </Field>
                  <textarea 
                    className='input input-text' 
                    name='message' 
                    value={message}
                    placeholder='Сообщение'
                    onFocus={() => setError(false)}
                    onChange={(e) => setMessage(e.target.value)} />
                  {error ? <div className='error'>Заполните форму</div> : ''}
                  <button type="submit" className='btn'>
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
          </section>
        </section>
      )}
    </Formik>
  )
}

export default Modal1