import React from 'react'
import Button from 'react-bootstrap/Button';
import '../styles/project.css'

function Project (props) {
  return (
    <div className='Project-Card'>
       <div className='informations'>
        <div className='title'>
         <h2>{props.name}</h2>
         <i className='project-icon' class={props.icon} ></i>
        </div>
        <div className='description'>
         <p className='description-text'>{props.description}</p>
        </div>                
       </div>
       <div className='button'>
         <Button  className='project-button' variant="warning"><a className='link' href={props.link}>View Project</a></Button>
       </div>
          
    </div>
  );
}
export default Project
