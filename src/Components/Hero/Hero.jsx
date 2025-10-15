import React from 'react'
import './Hero.css'
// import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Build Your Personal Brand</h1>
        <p>Become known, respected, and fully revenue-ready through the power of personal branding.</p>
        {/* <button className='btn'>Expore more <img src={dark_arrow} alt="" /></button> */}
      </div>      
    </div>
  )
}

export default Hero
