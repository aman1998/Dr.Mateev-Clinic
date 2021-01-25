import React from 'react'
import { useSelector } from 'react-redux';
import Loader from '../../Loader/Loader';

const Section = () => {
  const {works, success, failed, loading} = useSelector(state => ({
    works: state.works.works,
    loading: state.works.get.loading,
    success: state.works.get.success,
    failed: state.works.get.failed,
  }))
  return (
    <section className='example'>
      <div className='container'>
        <h2 className='title'>Работы “До - После”</h2>
        <p className='text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique eget lectus ut id. Aenean aliquet ut vitae nisl, dignissim lectus adipiscing. Id elementum magna viverra cursus ac id pharetra odio aliquam. Et volutpat enim id amet vitae. Id sapien nunc dictumst non quisque euismod. Tristique enim quam arcu elementum pellentesque non. Donec justo sit pharetra tempus. Enim ut risus ut vitae hendrerit lobortis ultricies arcu vitae. Arcu, quam venenatis ullamcorper pharetra ac dignissim integer. Blandit elit cursus odio euismod pellentesque fringilla. Scelerisque integer molestie at dolor hendrerit ornare est tristique. 
        </p>
        {success ? 
        <div className='examples'>
          {works.map((item,id) => 
            <div key={id} className={`item item-${item.id}`}>
              <div className='name'>{item.name}</div>
              <div className='item-block'>
                <img src={item.beforeopera} alt='example' className='photo photo--left'/>
                <div className='line'></div>
                <img src={item.afteropera} alt='example' className='photo photo--right'/>
              </div>
            </div>
          )}
        </div> : <Loader />
        }
      </div>
    </section>
  )
}

export default Section