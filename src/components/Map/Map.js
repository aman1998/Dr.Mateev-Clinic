import { YMaps, Map,  Placemark } from 'react-yandex-maps';

const MapPage = () => (
  <YMaps width='100%'>
    <div className='container map' style={{marginBottom: '40px'}}>
      <div className='left'>
      <Map 
        defaultState={{ center: [42.867439, 74.602587], zoom: 18,  }} 
        width='100%' 
        height='400px'>
           <Placemark geometry={[42.867439, 74.602587]}/>
        </Map>
      </div>
    </div>
  </YMaps>
);

export default MapPage