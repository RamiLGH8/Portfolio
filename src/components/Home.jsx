import React from 'react'
import '../styles/home.css';
export const Home = () => {
  return (
    <>
    <div className='main' id='home' >
       
       <div className='description-content' >
        <h5 style={{color:'#EAB308'}}>Hello, Welcome</h5>
        <p className='name' >I am Rami <spam>L</spam>eghrib</p>
        <p className='description' style={{color:'#6B7280'}}>CS Student/Mobile Developer</p>
        <div className='button-div'>
            <button className='contact-button'> Download CV</button>
        </div>
      </div>
       <div className='image-div'>
        <img className='first-image' src="about.png" alt="salam" />
       </div>
    </div>
    </>
    )
  }