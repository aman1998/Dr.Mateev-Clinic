import React, { useEffect } from 'react'
import PageTemplate from '../components/Template/PageTemplate'

import Section1 from '../components/MainPage/Section-1'
import Section2 from '../components/MainPage/Section-2'
import Section3 from '../components/MainPage/Section-3'
import Section4 from '../components/MainPage/Section-4'
import Section5 from '../components/MainPage/Section-5'
import Section6 from '../components/MainPage/Section-6'
// import Section7 from '../components/MainPage/Section-7'

import Aos from 'aos'
import 'aos/dist/aos.css'


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
    Aos.init({duration: 2000})
  }, [])

    return (
        <PageTemplate>
          <div className='mainPage'>
            <div data-aos='fade-top'>
              <Section1 />
            </div>
            <Section2 />
            <div data-aos='fade-right'>
              <Section3 />
            </div>
            <div>
              <Section4 />
            </div>
            <div data-aos='fade-left'>
              <Section5 />
            </div>
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