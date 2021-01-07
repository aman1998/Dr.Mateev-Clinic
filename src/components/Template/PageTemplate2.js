import PageTemplate from './PageTemplate'
import CallBlock from '../MainPage/Section-4'

import photo from '../../assets/img/clinic.png'

const PageTemplate2 = (props) => {
  return (
    <PageTemplate>
      <img src={photo} alt='photo' className='clinic-photo'/>
      <section>{props.children}</section>
      <div className='mainPage'>
        <CallBlock />
      </div>
    </PageTemplate>
  )
}

export default PageTemplate2