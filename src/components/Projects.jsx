import React from 'react'
import '../styles/projects.css'
import Project from './Project'
export const Projects = () => {
  return (
    <div id='projects'>
        <Project name='Chat App' description='Ivhfbhbjkrbjhfhjbhbsjbsfbhjfbhdhbsvhbhbdhbvshbhjsyghjbsvhjbjhbsvvsbjhdvhhduvieufibdvhbvd' link='https://github.com/RamiLGH8/CHAT-APP' icon='fa-solid fa-message' />
        <Project name='To Do List' description='uehkjhkjvhrjbrhkkjrnvjnrjhhbrijiejmjfbfhfjjievrnbrnjijinvfbbn n fbfhbfvnnvjnvf' link='https://github.com/RamiLGH8/TO-DO-LIST' icon='fa-solid fa-list' />
        <Project name='Calculator' description='vhgvyvegyghwvhhhdbvhfbhghfgjgrgygrvyghrvuhjhvfhjhjvrhhvbhf' link='https://github.com/RamiLGH8/Calculator' icon='fa-solid fa-calculator' />
    </div>
  )
}
export default Projects