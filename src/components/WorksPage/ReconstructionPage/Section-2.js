import React from 'react'

import icon1 from '../../../assets/icons/write.svg'
import icon2 from '../../../assets/icons/customer.svg'
import icon3 from '../../../assets/icons/consulting.svg'
import icon4 from '../../../assets/icons/handshake.svg'

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
        <h2 className='title'>Цены на реконструктивные операции</h2>
        <p className='main-text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique eget lectus ut id. Aenean aliquet ut vitae nisl, dignissim lectus adipiscing. Id elementum magna viverra cursus ac id pharetra odio aliquam. Et volutpat enim id amet vitae. Id sapien nunc dictumst non quisque euismod. Tristique enim quam arcu elementum pellentesque non. Donec justo sit pharetra tempus. Enim ut risus ut vitae hendrerit lobortis ultricies arcu vitae. Arcu, quam venenatis ullamcorper pharetra ac dignissim integer. Blandit elit cursus odio euismod pellentesque fringilla. Scelerisque integer molestie at dolor hendrerit ornare est tristique. 
        </p>
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