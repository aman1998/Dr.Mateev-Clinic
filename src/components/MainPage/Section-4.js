import React, {useState} from 'react'

import photo from '../../assets/img/photo-2.png'

import Modal1 from '../UI/modal-1'

const Section4 = () => {
  const [active, setActive] = useState(false)

  return (
    <section className='section-4'>
      <div className='container'>
        <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Seramo lumio tutto.</div>
        <button className='btn' onClick={e => setActive(true)}>Заказать звонок</button>
      </div>
      <Modal1 active={active} setActive={setActive}/>
    </section>
  )
}

export default Section4