import { YMaps, Map } from 'react-yandex-maps';

const MapPage = () => (
  <YMaps width='100%'>
    <div className='container' style={{marginBottom: '40px'}}>
      <Map defaultState={{ center: [42.867439, 74.602587], zoom: 18 }} width='670px' height='500px'/>
    </div>
  </YMaps>
);

export default MapPage