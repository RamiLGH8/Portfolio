import React from 'react'
import '../styles/about.css' 
export const About = () => {
  return (
    <>
      <div id='about'>
        <div className='about-image'>
          <img className='about' src="Rami-tun.jpg" alt="" />
        </div>
        <div className='about-description'>
          <p className='About-me' >About<span>Me</span></p>
          <p className='About-me-description'>I'm Rami Leghrib a 3rd year computer science student at USTHB , a passionate mobile developer with a knack for creating seamless and captivating user experiences.My expertise lies in mobile app development, and i specialize in using Flutter to bring ideas to life. I am a tech enthusiast always eager to explore new technologies and stay ahead of industry trends.
           I am not just a developer.I am a problem solver. I enjoy dissecting complex problems, finding elegant solutions, and collaborating with teams to achieve shared goals. </p>
        </div>
      </div>
    </>
  )
}
