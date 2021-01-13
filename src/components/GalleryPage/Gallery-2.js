import React from 'react'

import Photo1 from '../../assets/img/mateev-5.jpg'
import Photo2 from '../../assets/img/mateev-6.jpg'

const Gallery2= () => {
  const views = [
    {id: 1, title: 'Подтяжка лица', photo1: Photo1, photo2: Photo2},
    {id: 2, title: 'Подтяжка лица', photo1: Photo1, photo2: Photo2},
  ]
  
  return (
    <section className='gallery-2'>
      <div className='container'>
        <h2 className='title'>Галерея работ</h2>
        <p className='text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique eget lectus ut id. Aenean aliquet ut vitae nisl, dignissim lectus adipiscing. Id elementum magna viverra cursus ac id pharetra odio aliquam. Et volutpat enim id amet vitae. Id sapien nunc dictumst non quisque euismod. Tristique enim quam arcu elementum pellentesque non. Donec justo sit pharetra tempus. Enim ut risus ut vitae hendrerit lobortis ultricies arcu vitae. Arcu, quam venenatis ullamcorper pharetra ac dignissim integer. Blandit elit cursus odio euismod pellentesque fringilla. Scelerisque integer molestie at dolor hendrerit ornare est tristique. 
        </p>
        <div className='gallery'>
          {views.map(item => 
            <div key={item.id} className='item'>
              <div className='item-block'>
                <img src={item.photo1} alt='example' className='photo photo--left'/>
                <div className='line'></div>
                <img src={item.photo2} alt='example' className='photo photo--right'/>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Gallery2