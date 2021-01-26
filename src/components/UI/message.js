import React from 'react';

import icon from '../../assets/icons/handshake.svg';

import { useTranslation } from 'react-i18next';

const Message = ({active, setActive}) => {
  const { t } = useTranslation()
  return (
    <section className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className={active ? 'content active' : 'content'} onClick={e => e.stopPropagation()}>
        <div className='success'>
          <div className='success-wrapper'>
            <div className='success-title'>{t('modal.3')}</div>
            <img src={icon} alt='hand' className='success-icon'/>
            <div className='success-text'>{t('text.13')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Message

