import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We Ensure better education for a better world</h1>
        <p>The MiniMaster in Business Management program, also known as “Business Essentials,” 
            is meticulously crafted to empower accomplished professionals in enhancing their career trajectory. 
            This program integrates contemporary concepts and strategies, providing a comprehensive set of tools and 
            resources for confident and strategic leadership in today’s dynamic business landscape.</p>
        <button className='btn'> Explore More <img src={dark_arrow} alt=''/> </button>
      </div>
    </div>
  )
}

export default Hero;
