import React from 'react'

import photo1 from '../../assets/img/clinic.png'
import photo2 from '../../assets/img/photo-2.png'

const Blogs = () => {
  const blogs = [
    {id: 1, photo: photo2, title: 'Proin sed in nisi amet massa.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies leo luctus et vel in faucibus pulvinar lorem. Ultrices suspendisse.'},
    {id: 2, photo: photo2, title: 'Proin sed in nisi amet massa.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies leo luctus et vel in faucibus pulvinar lorem. Ultrices suspendisse.'},
    {id: 3, photo: photo2, title: 'Proin sed in nisi amet massa.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies leo luctus et vel in faucibus pulvinar lorem. Ultrices suspendisse.'},
    {id: 4, photo: photo2, title: 'Proin sed in nisi amet massa.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies leo luctus et vel in faucibus pulvinar lorem. Ultrices suspendisse.'},
    {id: 5, photo: photo2, title: 'Proin sed in nisi amet massa.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies leo luctus et vel in faucibus pulvinar lorem. Ultrices suspendisse.'},
    {id: 6, photo: photo2, title: 'Proin sed in nisi amet massa.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies leo luctus et vel in faucibus pulvinar lorem. Ultrices suspendisse.'},
  ]
  return (
    <section className='blogs-wrapper'>
      <img src={photo1} alt='photo' className='clinic-photo'/>
      <div className='container'>
        <h1 className='title'>Блог</h1>
        <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique eget lectus ut id. Aenean aliquet ut vitae nisl, dignissim lectus adipiscing. Id elementum magna viverra cursus ac id pharetra odio aliquam. Et volutpat enim id amet vitae. Id sapien nunc dictumst non quisque euismod. Tristique enim quam arcu elementum pellentesque non. Donec justo sit pharetra tempus. Enim ut risus ut vitae hendrerit lobortis ultricies arcu vitae. Arcu, quam venenatis ullamcorper pharetra ac dignissim integer. Blandit elit cursus odio euismod pellentesque fringilla. Scelerisque integer molestie at dolor hendrerit ornare est tristique. 
        </p>
       <div className='blogs'>
        {blogs.map(item => 
            <div className='blog' key={item.id}>
              <img src={item.photo} alt='blog' className='blog-photo'/>
              <div className='blog-title'>{item.title}</div>
              <div className='blog-text'>{item.text}</div>
              <button className='btn'>Читать далее</button>
            </div>
            )}
       </div>
      </div>
    </section>
  )
}

export default Blogs