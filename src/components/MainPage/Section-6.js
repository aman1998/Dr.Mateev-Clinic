// import React, { useRef, useState } from 'react'

// import video from '../../assets/video/video.mp4'
// import photo from '../../assets/img/photo-6.png'
// import photo2 from '../../assets/icons/play.svg'

// const Section6 = () => {
//   const [ play, setPlay ] = useState(false)

//   const vidRef = useRef(null)

//   const handlePlayVideo = () => {
//     vidRef.current.play()
//     setPlay(true)
//   }

//   return (
//     <section className='section-6'>
//       <div className='container'>
//         <video className='video' controls poster={photo} ref={vidRef}>
//           <source src={video} type="video/mp4"/>
//         </video>
//         <div className='btn' onClick={handlePlayVideo}>
//           {/* {!play ? <img src={photo2} alt='play'/> : null} */}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Section6