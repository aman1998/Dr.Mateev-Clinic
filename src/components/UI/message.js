import React, {useState} from 'react'

import icon from '../../assets/icons/handshake.svg'

const Message = ({active, setActive}) => {
  return (
    <section className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className={active ? 'content active' : 'content'} onClick={e => e.stopPropagation()}>
        <div className='success'>
          <div className='success-wrapper'>
            <div className='success-title'>Спасибо!</div>
            <img src={icon} alt='hand' className='success-icon'/>
            <div className='success-text'>В самое ближайщее время мы свяжемся с вами. </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Message

