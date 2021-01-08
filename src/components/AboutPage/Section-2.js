import image1 from '../../assets/img/teams-1.png'
import image2 from '../../assets/img/teams-2.png'
import image3 from '../../assets/img/teams-3.png'

const Section2 = () => {
  return (
    <section className='section-2'>
      <div className='container'>
        <h2 className='title'>Наша команда</h2>
        <img src={image1} alt='teams' className='teams'/>
        <div className='teams-wrapper'>
          <div className='left'>
            <img src={image2} alt='teams' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum habitant aliquam viverra morbi et tincidunt diam placerat consectetur. Pellentesque orci pulvinar velit non. Erat libero commodo, felis diam aliquet ac in. Viverra odio dictum mauris et senectus eu quis porttitor pretium. Ut varius proin lectus donec luctus dignissim. Enim integer magna massa commodo. 
            </p>
          </div>
          <div className='right'>
            <img src={image3} alt='teams' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum habitant aliquam viverra morbi et tincidunt diam placerat consectetur. Pellentesque orci pulvinar velit non. Erat libero commodo, felis diam aliquet ac in. Viverra odio dictum mauris et senectus eu quis porttitor pretium. Ut varius proin lectus donec luctus dignissim. Enim integer magna massa commodo. 
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section2