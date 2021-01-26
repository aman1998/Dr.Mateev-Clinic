import React, {useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { fetchAppliactionActionCreator } from '../../store/actions/appliaction';

import { useTranslation } from 'react-i18next';

import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import icon from '../../assets/icons/handshake.svg';

const Modal1 = ({active, setActive}) => {
  const { t, i18n } = useTranslation()
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [phone, setPhone] = useState('')

  const {loading, failed, success} = useSelector(state => ({
    loading: state.application.post.loading,
    success: state.application.post.success,
    failed: state.application.post.failed,
  }))

  const dispatch = useDispatch()

  return (
    <Formik
      initialValues={
        {
          fio: '',
          phone: '',
          oper: 'PL',
        }
      }
      validationSchema={
        Yup.object().shape({
          fio: Yup.string()
            .required(t('inputs.5')),
          phone: Yup.string()
            .required(t('inputs.6')),
        })
      }
      onSubmit = {
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
        <section className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
        <div className={active ? 'content active' : 'content'} onClick={e => e.stopPropagation()}>
          { success ? 
          <div className='success'>
            <div className='success-wrapper'>
              <div className='success-title'>{t('modal.3')}</div>
              <img src={icon} alt='hand' className='success-icon'/>
              <div className='success-text'>{t('modal.4')}</div>
            </div>
          </div>
          :
          <div>
            <div className='title'>{t('modal.1')}</div>
            <p>{t('modal.2')}</p>
            <Form className='loginForm'>
              <Field type="text" name="fio" className='input' placeholder={t('inputs.1')}/>
              <ErrorMessage name="fio" component="div" className='error'/>
              <Field type="text" name="phone" className='input' placeholder='+996555112233'/>
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
                placeholder={t('inputs.3')}
                onFocus={() => setError(false)}
                onChange={(e) => setMessage(e.target.value)} />
              {error ? <div className='error'>{t('inputs.7')}</div> : ''}
              <button type="submit" className='btn'>
                {loading ? 
                  <div className='loading'></div> : 
                failed ? 
                  <div className='btn-error'>{t('btns.4')}</div> : 
                  t('btns.3')}
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
