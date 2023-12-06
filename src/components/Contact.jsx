import React from "react";
import "../styles/contact.css";
export const Contact = () => {
  
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
                <div className="Right-Content">
                  <input type="email" name="email" placeholder="Email"></input>
                  <textarea name="message" placeholder="Enter your message"></textarea>
                  <button className="Contact-me-button">Contact Me</button>
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