import React from 'react'
import '../styles/about.css' 
export const About = () => {
  return (
    <>
      <div id='about'>
        <div className='about-image'>
          <img src="about.png" alt="" />
        </div>
        <div className='about-description'>
          <p className='About-me' >About<span>Me</span></p>
          <p className='About-me-description'>There are many variations of passages ofLorem Ipsum<br></br>
         available, but the majority havesuffered alteration in some <br></br>
         form, by injected humour,There are many variations of passages ofLorem Ipsum
         available, but the majority havesuffered alteration in some <br></br>
         form, by injected humour,</p>
        </div>
      </div>
    </>
  )
}
