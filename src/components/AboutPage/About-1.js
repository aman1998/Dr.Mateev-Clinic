import React, { useState } from 'react'

import image1 from '../../assets/img/mateev-1.png'
import image2 from '../../assets/img/mateev-2.jpg'
import image3 from '../../assets/img/mateev=3.jpg'
import image4 from '../../assets/img/mateev-4.jpg'
import image5 from '../../assets/img/mateev-5.jpg'
import image6 from '../../assets/img/mateev-6.jpg'
import image7 from '../../assets/img/awards.png'

const About1 = () => {
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
    <section className='section-1 slider'>
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
        <div className='text'>Матеев Муса Асыпбекович - врач высшей категории и доктор медицинских наук. Имеет более 42 года опыта работы!
        <p className='career'>Образование</p>
        <ul>
          <li>1982-КГМА, лечбный факультет</li>
          <li>1983-Интернатура по общей хирургии, НГ МЗ КР</li>
          <li>1985-Клиническая ординатура по микрохирургии ВНЦХ АМН СССР, Москва</li>
          <li>1989-КГМА, кандидатская степень</li>
          <li>1998-Докторская степень, Москва, Институт хирургии им. Вишневского АМН СССР</li>
          <li>2001-Специализация по хирургии кисти, Клиника Беллара, Вена, Австрия</li>
        </ul>
        <p className='career'>Профессиональная карьера</p>
        <ul>
          <li>1985-94 - Врач микрохирург, отделение микрохирургии, НГ МЗ КР</li>
          <li>1994-наст.время - Заведущий отделением микрохирургии, НГ МЗ КР</li>
          <li>2002-наст.время - Профессор кафедры хирургии КГМА</li>
          <li>2004-наст.время - Профессор кафедры госпитальной хирургии КРСУ</li>
          <li>2005-наст.время - Заведущий курса микрохирургии КГМИ</li>
        </ul>
        </div>
        <img src={image7} alt='team' className='awards'/>
        <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum habitant aliquam viverra morbi et tincidunt diam placerat consectetur. Pellentesque orci pulvinar velit non. Erat libero commodo, felis diam aliquet ac in. Viverra odio dictum mauris et senectus eu quis porttitor pretium. Ut varius proin lectus donec luctus dignissim. Enim integer magna massa commodo. Odio etiam ipsum facilisi augue urna, turpis ullamcorper. Massa ut donec quisque tortor id sapien tincidunt tristique. Sit in et, odio augue ut nulla dui ullamcorper. Elementum amet justo feugiat felis a, vestibulum, tristique nisi. Dignissim euismod tellus luctus vitae eget sapien pretium. Fermentum adipiscing tincidunt in natoque.
        </p>
      </div>
    </section>
  )
}

export default About1