import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';

import image1 from '../../../assets/img/mateev-1.png';
import image2 from '../../../assets/img/mateev-2.jpg';
import image3 from '../../../assets/img/mateev=3.jpg';
import image4 from '../../../assets/img/mateev-4.jpg';
import image5 from '../../../assets/img/mateev-5.jpg';
import image6 from '../../../assets/img/mateev-6.jpg';
// import image7 from '../../../assets/img/awards.png';

const GalleryClinicPage = () => {
  const { t } = useTranslation()

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
    <section className='slider'>
      <div className='container'>
        <h2 className='title'>{t('nav.8')}</h2>
        <p className='text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique eget lectus ut id. Aenean aliquet ut vitae nisl, dignissim lectus adipiscing. Id elementum magna viverra cursus ac id pharetra odio aliquam. Et volutpat enim id amet vitae. Id sapien nunc dictumst non quisque euismod. Tristique enim quam arcu elementum pellentesque non. Donec justo sit pharetra tempus. Enim ut risus ut vitae hendrerit lobortis ultricies arcu vitae. Arcu, quam venenatis ullamcorper pharetra ac dignissim integer. Blandit elit cursus odio euismod pellentesque fringilla. Scelerisque integer molestie at dolor hendrerit ornare est tristique. 
        </p>
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
      </div>
    </section>
  )
}

export default GalleryClinicPage 