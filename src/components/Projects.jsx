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
         style={{height:'100%',paddingTop:'50px',paddingLeft:'100px',paddingRight:'100px',paddingBottom:'50px',zIndex:'0'}}
        spaceBetween={50}
        autoplay={{
          delay: 2500,
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

          749:{
            slidesPerView: 2,
            spaceBetween:90,
          },
        }
      }

        modules={[Autoplay]}
        className="mySwiper"
         >
      <SwiperSlide  >
        <Project name='Chat App' description='Ivhfbhbjkrbjhfhjbhbsjbsfbhjfbhdhbsvhbhbdhbvshbhjsyghjbsvhjbjhbsvvsbjhdvhhduvieufibdvhbvd' 
           link='https://github.com/RamiLGH8/CHAT-APP' icon='fa-solid fa-message' />
      </SwiperSlide>
      <SwiperSlide >
        <Project name='To Do List' description='uehkjhkjvhrjbrhkkjrnvjnrjhhbrijiejmjfbfhfjjievrnbrnjijinvfbbn n fbfhbfvnnvjnvf'
           link='https://github.com/RamiLGH8/TO-DO-LIST' icon='fa-solid fa-list' />
      </SwiperSlide>
      <SwiperSlide >
        <Project name='Calculator' description='vhgvyvegyghwvhhhdbvhfbhghfgjgrgygrvyghrvuhjhvfhjhjvrhhvbhf' 
           link='https://github.com/RamiLGH8/Calculator' icon='fa-solid fa-calculator' />
      </SwiperSlide>
      <SwiperSlide >
        <Project name='Calculator' description='vhgvyvegyghwvhhhdbvhfbhghfgjgrgygrvyghrvuhjhvfhjhjvrhhvbhf' 
           link='https://github.com/RamiLGH8/Calculator' icon='fa-solid fa-calculator' />
      </SwiperSlide>
      
    </Swiper>
       </div>
   </div> 
   
  )
}
export default Projects