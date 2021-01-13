import React, { useEffect } from 'react'
import PageTemplate from '../components/Template/PageTemplate'

import Section1 from '../components/MainPage/Section-1'
import Section2 from '../components/MainPage/Section-2'
import Section3 from '../components/MainPage/Section-3'
import Section4 from '../components/MainPage/Section-4'
import Section5 from '../components/MainPage/Section-5'
import Section6 from '../components/MainPage/Section-6'
// import Section7 from '../components/MainPage/Section-7'

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

// const MapWithAMarker = withScriptjs(withGoogleMap(props =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//   >
//     <Marker
//       position={{ lat: -34.397, lng: 150.644 }}
//     />
//   </GoogleMap>
// ));


const MainPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    return (
        <PageTemplate>
          <div className='mainPage'>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            {/* <Section7 /> */}
            {/* <div className='container'>
              <MapWithAMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%`, width: '50%' }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </div> */}
          </div>
        </PageTemplate>
    )
}

export default MainPage