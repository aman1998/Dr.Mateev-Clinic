import { NavLink } from 'react-router-dom'
import photo from '../../assets/img/photo-2.png'

const Section2 = () => {
  return (
    <section className='section-2'>
      <div className='container'>
        <img src={photo} alt='photo' className='photo'/>
        <div className='content'>
          <h2 className='title'>Lorem ipsum dolor sit amet.</h2>
          <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea nulla eget curabitur pellentesque aliquam consectetur pharetra. Commodo aenean semper etiam proin quis. Pharetra felis sit in vestibulum nulla imperdiet egestas. Nisi, amet tellus neque, commodo eget sed. At et imperdiet blandit non, vitae malesuada faucibus. Porttitor porttitor vestibulum pulvinar nulla ullamcorper dui. Amet et nec sit blandit ullamcorper sed elit ipsum sit.
          </p>
          <NavLink to='/about' className='btn' exact>Читать далее...</NavLink>
        </div>
      </div>
    </section>
  )
}

export default Section2