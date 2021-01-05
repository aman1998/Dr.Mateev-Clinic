import React from 'react'

import icon1 from '../../assets/img/photo-3.png'
import icon2 from '../../assets/img/photo-4.png'
import icon3 from '../../assets/img/photo-5.png'

const Section5 = () => {
  const views = [
    {id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et lorem netus dolor sem viverra sit. Elit viverra tempus lacus, nisi, nibh arcu vitae. Euismod consectetur nibh.', icon: icon1},
    {id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et lorem netus dolor sem viverra sit. Elit viverra tempus lacus, nisi, nibh arcu vitae. Euismod consectetur nibh.', icon: icon2},
    {id: 3, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et lorem netus dolor sem viverra sit. Elit viverra tempus lacus, nisi, nibh arcu vitae. Euismod consectetur nibh.', icon: icon3}
  ]
  return (
    <section className='section-5'>
      <div className='container'>
        <h2 className='title'>Отзывы клиентов</h2>
        <div className='views'>
          {views.map(item => 
            <div key={item.id} className='view'>
              <img src={item.icon} alt='photo' className='photo'/>
              <p className='text'>{item.text}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Section5