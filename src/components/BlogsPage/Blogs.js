import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';

import photo1 from '../../assets/img/clinic.png';
import photo2 from '../../assets/img/photo-2.png';

import Aos from 'aos';
import 'aos/dist/aos.css';
import Loader from '../Loader/Loader';

const Blogs = () => {
  const {blogs, success, failed, loading} = useSelector(state => ({
    blogs: state.blogs.blogs,
    loading: state.blogs.get.loading,
    success: state.blogs.get.success,
    failed: state.blogs.get.failed,
  }))

  useEffect(() => {
    Aos.init({duration: 1000})
  }, [])

  console.log(blogs)

  return (
    <section className='blogs-wrapper'>
      <div data-aos='fade-top'>
        <img src={photo1} alt='photo' className='clinic-photo'/>
      </div>
      <div className='container' data-aos='fade-bottom'>
        <h1 className='title'>Блог</h1>
        <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique eget lectus ut id. Aenean aliquet ut vitae nisl, dignissim lectus adipiscing. Id elementum magna viverra cursus ac id pharetra odio aliquam. Et volutpat enim id amet vitae. Id sapien nunc dictumst non quisque euismod. Tristique enim quam arcu elementum pellentesque non. Donec justo sit pharetra tempus. Enim ut risus ut vitae hendrerit lobortis ultricies arcu vitae. Arcu, quam venenatis ullamcorper pharetra ac dignissim integer. Blandit elit cursus odio euismod pellentesque fringilla. Scelerisque integer molestie at dolor hendrerit ornare est tristique. 
        </p>
       {
         success ? 
         <div className='blogs'>
            {blogs.map((item, id) => 
                <div className='blog' key={id}>
                  <img src={item.photo} alt='blog' className='blog-photo'/>
                  <div className='blog-title'>{item.name_blog}</div>
                  <div className='blog-text'>{item.blog}</div>
                  <a className='btn' href={item.url_blog}>Читать далее</a>
                </div>
                )}
          </div> : <Loader />
       }
      </div>
    </section>
  )
}

export default Blogs