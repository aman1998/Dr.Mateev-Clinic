import { NavLink } from 'react-router-dom'
import photo from '../../assets/img/photo-2.jpg'

const Section2 = () => {
  return (
    <section className='section-2'>
      <div className='container'>
        <img src={photo} alt='photo' className='photo'/>
        <div className='content'>
          <h2 className='title'>О клинике</h2>
          <p className='text'>Врачи клиники профессора Матеева профессионально устраняют дефекты и восстанавливают необходимые функции тела.
          Конкретно врождённые дефекты конечностей включают отсутствие или неполное их развитие, лишние или ненормально развитые конечности, что присутствуют с рождения.
          </p>
          <NavLink to='/about' className='btn' exact>Читать далее...</NavLink>
        </div>
      </div>
    </section>
  )
}

export default Section2