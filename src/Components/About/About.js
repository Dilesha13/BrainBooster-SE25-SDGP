// About.js
import React from 'react';
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const About = ({ setPlayState }) => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' onClick={() => setPlayState(true)} /> {/* Call setPlayState when the play button is clicked */}
      </div>
      <div className='about-right'>
        <h2>ABOUT UNIVERSITY</h2>
        <h3>Tomorrow's Leaders Today</h3><br />
        <p>The MiniMaster in Business Management program, also known as “Business Essentials,”
          is meticulously crafted to empower accomplished professionals in enhancing their career trajectory.
          This program integrates contemporary concepts and strategies, providing a comprehensive set of tools and
          resources for confident and strategic leadership in today’s dynamic business landscape.</p>
      </div>
    </div>
  );
}

export default About;
