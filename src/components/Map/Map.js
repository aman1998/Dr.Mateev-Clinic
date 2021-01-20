import { YMaps, Map,  Placemark } from 'react-yandex-maps';

import icon1 from '../../assets/icons/phone.svg'
import icon2 from '../../assets/icons/message.svg'
import icon3 from '../../assets/icons/map.svg'
import icon4 from '../../assets/icons/facebook.svg'
import icon5 from '../../assets/icons/twitter.svg'
import icon6 from '../../assets/icons/instagram.svg'

const MapPage = () => (
  <YMaps width='100%'>
    <div className='container map' style={{marginBottom: '40px'}}>
      <div className='left'>
      <Map 
        defaultState={{ center: [42.867439, 74.602587], zoom: 18,  }} 
        width='100%' 
        height='500px'>
           <Placemark geometry={[42.867439, 74.602587]}/>
        </Map>
      </div>
    </div>
  </YMaps>
);

export default MapPage