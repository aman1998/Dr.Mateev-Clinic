import React, {useEffect} from 'react'

import icon1 from '../../assets/icons/write.svg'
import icon2 from '../../assets/icons/customer.svg'
import icon3 from '../../assets/icons/consulting.svg'
import icon4 from '../../assets/icons/handshake.svg'

const Section2 = () => {
  const views = [
    {id: 1, title: 'Подтяжка лица', icon: icon1},
    {id: 2, title: 'Пластика век', icon: icon2},
    {id: 3, title: 'Контурная пластика губ', icon: icon3},
    {id: 4, title: 'Липосакция', icon: icon4}
  ]
  return (
    <section className='section-2'>
      <div className='container'>
        <h2 className='title'>Принцип работы</h2>
        <div className='views'>
          {views.map(item => 
            <div key={item.id} className='view'>
              <img src={item.icon} alt='photo' className='icon'/>
              <div className='text'>{item.title}</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris, leo sagittis mauris sed. Vitae sem nunc, dignissim tellus. Accumsan vitae etiam aliquam cursus. Et malesuada.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Section2