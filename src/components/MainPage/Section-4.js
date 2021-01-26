import React, {useState} from 'react';

import { useTranslation } from 'react-i18next';

import Modal1 from '../UI/modal-1';

const Section4 = () => {
  const { t } = useTranslation()
  const [active, setActive] = useState(false)

  return (
    <section className='section-4'>
      <div className='container'>
        <div className='text'>{t('text.2')}</div>
        <button className='btn' onClick={e => setActive(true)}>{t('btns.1')}</button> 
      </div>
      <Modal1 active={active} setActive={setActive}/>
    </section>
  )
}

export default Section4