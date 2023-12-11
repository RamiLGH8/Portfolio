import React from 'react'
import '../styles/projects.css'
import Project from './Project'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
export const Projects = () => {
  return (
   <div id='projects'>
      <p className='My-Projects'>My <spam >Projects</spam> </p>
       
       <div id='projects-slides'>
       <Swiper
         style={{height:'100%',paddingTop:'50px',paddingLeft:'100px',paddingRight:'100px',paddingBottom:'50px',zIndex:'0',}}
        spaceBetween={50}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
      breakpoints={
        {
          1504:{
            slidesPerView:3,
            spaceBetween:150,
          },
          1024:{
            slidesPerView: 2,
            spaceBetween:150,
          },

        
        }
      }

        modules={[Autoplay]}
        className="mySwiper"
         >
      <SwiperSlide  style={{display:'flex',justifyContent:'center',alignItems:'center',marginRight:'90px'}}>
        <Project name='Chat App' description='A real time chat app using Flutter firebase as a backend' 
           link='https://github.com/RamiLGH8/CHAT-APP' icon='fa-solid fa-message' />
      </SwiperSlide>
      <SwiperSlide style={{display:'flex',justifyContent:'center',alignItems:'center',marginRight:'90px'}}>
        <Project name='School Platform' description='A school platform using Flutter firebase as a backend'
           link='https://github.com/RamyBouchareb25/SambaDev' icon='fa-solid fa-school' />
      </SwiperSlide>
      <SwiperSlide style={{display:'flex',justifyContent:'center',alignItems:'center',marginRight:'90px'}}>
        <Project name='Weather App' description='A real time weather application using Flutter and openweather API' 
           link='https://github.com/RamiLGH8/weather_app' icon='fa-solid fa-cloud' />
      </SwiperSlide>
      <SwiperSlide style={{display:'flex',justifyContent:'center',alignItems:'center',}}>
        <Project name='QR Scanner' description='A QR code scanner using Flutter' 
           link='https://github.com/RamiLGH8/MC_Check' icon='fa-solid fa-qrcode' />
      </SwiperSlide>
      <SwiperSlide style={{display:'flex',justifyContent:'center',alignItems:'center',}}>
        <Project name='TO DO LIST' description='A basic TO DO LIST using Flutter' 
           link='https://github.com/RamiLGH8/TO-DO-LIST' icon='fa-solid fa-list-check' />
      </SwiperSlide>
    </Swiper>

       </div>
   </div> 
   
  )
}
export default Projects