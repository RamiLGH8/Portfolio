import React from 'react'
import Button from 'react-bootstrap/Button';
import '../styles/home.css';
export const Home = () => {
  return (
    <>
    <div className='main' id='home' >
       <div style={{marginRight:'250px'}}>
        <h5 style={{color:'#EAB308'}}>Hello, Welcome</h5>
        <p className='name' >I am Rami <spam >L</spam>eghrib</p>
        <p className='description' style={{color:'#6B7280'}}>There are many variations of passages ofLorem Ipsum<br></br>
         available, but the majority havesuffered alteration in some <br></br>
         form, by injected humour,</p>
         <Button  style={{fontFamily:"Lexend Deca",marginTop:"40px"}} variant="warning">Contact Us</Button>
       </div>
       <div>
        <img src="Rami.jpg" alt="salam" />
       </div>
    </div>
    </>
    )
  }