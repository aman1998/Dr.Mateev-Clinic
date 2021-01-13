import React from 'react'

import Photo1 from '../../../assets/img/mateev-5.jpg'
import Photo2 from '../../../assets/img/mateev-6.jpg'

const Works= () => {
  const views = [
    {id: 1, title: 'Подтяжка лица', photo1: Photo1, photo2: Photo2},
    {id: 2, title: 'Подтяжка лица', photo1: Photo1, photo2: Photo2},
    {id: 3, title: 'Подтяжка лица', photo1: Photo1, photo2: Photo2},
    {id: 4, title: 'Подтяжка лица', photo1: Photo1, photo2: Photo2},
    {id: 5, title: 'Подтяжка лица', photo1: Photo1, photo2: Photo2},
    {id: 6, title: 'Подтяжка лица', photo1: Photo1, photo2: Photo2},
  ]
  
  return (
    <section className='worksPage'>
      <div className='container'>
        <h2 className='title'>Работы “До - После”</h2>
        <p className='text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique eget lectus ut id. Aenean aliquet ut vitae nisl, dignissim lectus adipiscing. Id elementum magna viverra cursus ac id pharetra odio aliquam. Et volutpat enim id amet vitae. Id sapien nunc dictumst non quisque euismod. Tristique enim quam arcu elementum pellentesque non. Donec justo sit pharetra tempus. Enim ut risus ut vitae hendrerit lobortis ultricies arcu vitae. Arcu, quam venenatis ullamcorper pharetra ac dignissim integer. Blandit elit cursus odio euismod pellentesque fringilla. Scelerisque integer molestie at dolor hendrerit ornare est tristique. 
        </p>
        <div className='works'>
          {views.map(item => 
            <div key={item.id} className='item'>
              <div className='name'>{item.title}</div>
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

export default Works