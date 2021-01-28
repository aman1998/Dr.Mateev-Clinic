import React, {useState} from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchAppliactionActionCreator } from '../../store/actions/appliaction';

import { useTranslation } from 'react-i18next';

import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

import icon from '../../assets/icons/handshake.svg';


const Modal1 = ({active, setActive, setClose, close}) => {
  const { t } = useTranslation()
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
            .required(t('inputs.5')),
          phone: Yup.string()
            .required(t('inputs.6')),
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
          <section className={`modal2 ${active ? 'up' : ''}`} onClick={e => e.stopPropagation()}>
            <div className='content2' >
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
              <div className='title' onClick={closeModal}>{t('modal.1')}</div>
              <p>{t('modal.2')}</p>
                <Form className='loginForm'>
                  <Field type="text" name="fio" className='input' placeholder={t('inputs.1')}/>
                  <ErrorMessage name="fio" component="div" className='error'/>
                  <Field type="text" name="phone" className='input' placeholder='+996555822737'/>
                  <ErrorMessage name="phone" component="div" className='error'/>
                  <Field as="select" name="oper" className='input'>
                    <option value="PL">{t('views.1')}</option>
                    <option value="PV">{t('views.2')}</option>
                    <option value="KPG">{t('views.3')}</option>
                    <option value="L">{t('views.4')}</option>
                    <option value="PJ">{t('views.5')}</option>
                    <option value="PG">{t('views.6')}</option>
                    <option value="PR">{t('views.7')}</option>
                    <option value="PZ">{t('views.8')}</option>
                    <option value="PTD">{t('views.9')}</option>
                    <option value="PPK">{t('views.10')}</option>
                    <option value="PLS">{t('views.11')}</option>
                    <option value="PDP">{t('views.12')}</option>
                    <option value="EGS">{t('views.13')}</option>
                    <option value="MSN">{t('views.14')}</option>
                    <option value="MSS">{t('views.15')}</option>
                    <option value="XS">{t('views.16')}</option>
                    <option value="XKS">{t('views.17')}</option>
                  </Field>
                  <textarea 
                    className='input input-text' 
                    name='message' 
                    value={message}
                    placeholder={t('inputs.3')}
                    onFocus={() => setError(false)}
                    onChange={(e) => setMessage(e.target.value)} />
                  {error ? <div className='error'>{t('modal.7')}</div> : ''}
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
          </section>
        </section>
      )}
    </Formik>
  )
}

export default Modal1