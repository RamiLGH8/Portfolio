import "../styles/contact.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pa1duvs', 'template_ewevq16', form.current, 'XqfzAOxJoykypqFNX')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
  };
    return(
        <>
          <div id="contact">
             <p className='Contact-Me'>Contact <spam >Me</spam> </p>
             <div className="Content">
                <div className="Content-Left">
                      <p className="contact-info"><spam className="info">Address_</spam>Ain Benian,Algiers,Algeria</p>
                      <p className="contact-info"><spam className="info">Phone_</spam>+213783111071</p>
                      <p className="contact-info"><spam className="info">Email_</spam>ramilgh1604@gmail.com</p>              
                </div>

               <div className="Right"> 
                <form  ref={form} onSubmit={sendEmail}>
                 <div className="Right-Content">
                   <input type="email" name="user_email" placeholder="Email" ></input>
                   <textarea name="message" placeholder="Enter your message"></textarea>
                   <button className="Contact-me-button" >Contact Me</button>         
                 </div>
                </form>
               </div>
               </div> 
             <div className="Socials">
               <a href="https://web.facebook.com/profile.php?id=100009874778147" style={{color:'#6B7280'}}><i className="social" class="fa-brands fa-facebook"></i></a>
               <a href="https://www.instagram.com/rami_lgh/" style={{color:'#6B7280'}}><i className="social" class="fa-brands fa-instagram"></i></a>
               <a href="https://www.linkedin.com/in/rami-leghrib-4b321a224/" style={{color:'#6B7280'}}><i className="social" class="fa-brands fa-linkedin"></i></a>
               <a href="https://github.com/RamiLGH8" style={{color:'#6B7280'}}><i className="social" class="fa-brands fa-github"></i></a>
             </div>
          </div>
        </>
    )
}