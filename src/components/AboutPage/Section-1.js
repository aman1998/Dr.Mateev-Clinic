import React, { useState } from 'react'

import image1 from '../../assets/img/mateev-1.png'
import image2 from '../../assets/img/photo-1.png'
import image3 from '../../assets/img/photo-2.png'
import image4 from '../../assets/img/photo-3.png'
import image5 from '../../assets/img/photo-5.png'
import image6 from '../../assets/img/photo-6.png'
import image7 from '../../assets/img/awards.png'

const Section1 = () => {
  const images = [
    {img: image1},
    {img: image2},
    {img: image3},
    {img: image4},
    {img: image5},
    {img: image6}
  ]

  const [selectedImg, setSelectedImage] = useState(image1)

  return (
    <section className='section-1'>
      <div className='container'>
        <h2 className='title'>О профессоре</h2>
        <img src={selectedImg} alt='mateev' className='selected'/>
        <div className='images'>
          {images.map((item, index) => (
            <img 
              key={index} 
              src={item.img} 
              alt='mateev' 
              className='item'
              style={{opacity: selectedImg === item.img ? 0.3 : 1}}
              onClick={() => setSelectedImage(item.img)}
              />
          ))}
        </div>
        <img src={image7} alt='team' className='awards'/>
        <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum habitant aliquam viverra morbi et tincidunt diam placerat consectetur. Pellentesque orci pulvinar velit non. Erat libero commodo, felis diam aliquet ac in. Viverra odio dictum mauris et senectus eu quis porttitor pretium. Ut varius proin lectus donec luctus dignissim. Enim integer magna massa commodo. Odio etiam ipsum facilisi augue urna, turpis ullamcorper. Massa ut donec quisque tortor id sapien tincidunt tristique. Sit in et, odio augue ut nulla dui ullamcorper. Elementum amet justo feugiat felis a, vestibulum, tristique nisi. Dignissim euismod tellus luctus vitae eget sapien pretium. Fermentum adipiscing tincidunt in natoque.</p>
      </div>
    </section>
  )
}

export default Section1