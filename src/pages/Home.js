import React from 'react'
import Navigation from '../component/Navigation'
import Hiro from './Hiro'
import Mans from './Mans'
import Footer from '../component/Footer'
import Women from './Women'
import Testimonial from '../component/Testimonial'

import './Home.css'
function Home() {
  return (

    <div className='homee'>
        
      <Hiro/>
      <Mans/>
      <Women/>
      <Testimonial/>
     
      <Footer/>
      </div>
  )
}

export default Home
