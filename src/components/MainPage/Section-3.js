import React from 'react'

import icon1 from '../../assets/icons/lift.svg'
import icon2 from '../../assets/icons/eyebrows.svg'
import icon3 from '../../assets/icons/lips.svg'
import icon4 from '../../assets/icons/liposuction.svg'

const Section3 = () => {
  const views = [
    {id: 1, title: 'Подтяжка лица', icon: icon1},
    {id: 2, title: 'Пластика век', icon: icon2},
    {id: 3, title: 'Контурная пластика губ', icon: icon3},
    {id: 4, title: 'Липосакция', icon: icon4}
  ]
  return (
    <section className='section-3'>
      <div className='container'>
        <h2 className='title'>Виды операций</h2>
        <div className='views'>
          {views.map(item => 
            <div key={item.id} className='view'>
              <img src={item.icon} alt='photo' className='icon'/>
              <div className='text'>{item.title}</div>
              <button className='btn'>Подробнее</button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Section3