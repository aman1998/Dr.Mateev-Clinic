import React from 'react'

import icon1 from '../../../assets/icons/lift.svg'
import icon2 from '../../../assets/icons/belly.svg'
import icon3 from '../../../assets/icons/medical-mask.svg'
import icon4 from '../../../assets/icons/surgery.svg'

const Section1 = () => {
  const views = [
    {id: 1, 
    title1: 'Подтяжка лица', title2: 'Пластика век', title3: 'Контурная пластика губ', title4: 'Пластика заячьей губы',
    icon: icon1},
    {id: 2, 
    title1: 'Липосакция', title2: 'Пластика живота', title3: 'Пластика груди', title4: 'Эндопротезирование груди силиконовыми имплантами',
    icon: icon2},
    {id: 3, 
    title1: 'Пластика дефектов после огнестрельных ранений', title2: 'Пластика послеоперационных рубцов', title3: 'Пластика послеожоговых контрактур', title4: '',
    icon: icon3},
    {id: 4,
    title1: 'Пластика травматических дефектов', title2: 'Пластика врожденных ложных суставов', title3: 'Пластика дефектов после удаления опухолей', title4: '',
    icon: icon4}
  ]
  return (
    <section className='section-2'>
      <div className='container'>
        <h2 className='title'>Пластические операции</h2>
        <p className='main-text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique eget lectus ut id. Aenean aliquet ut vitae nisl, dignissim lectus adipiscing. Id elementum magna viverra cursus ac id pharetra odio aliquam. Et volutpat enim id amet vitae. Id sapien nunc dictumst non quisque euismod. Tristique enim quam arcu elementum pellentesque non. Donec justo sit pharetra tempus. Enim ut risus ut vitae hendrerit lobortis ultricies arcu vitae. Arcu, quam venenatis ullamcorper pharetra ac dignissim integer. Blandit elit cursus odio euismod pellentesque fringilla. Scelerisque integer molestie at dolor hendrerit ornare est tristique. 
        </p>
        <div className='views'>
          {views.map(item => 
            <div key={item.id} className='view'>
              <img src={item.icon} alt='photo' className='icon'/>
              <div className='item'>{item.title1}</div>
              <div className='item'>{item.title2}</div>
              <div className='item'>{item.title3}</div>
              <div className='item'>{item.title4}</div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Section1