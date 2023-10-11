import React from 'react'
import Button from 'react-bootstrap/Button';
import '../styles/project.css'
function Project (props) {
  return (
    <div className='Project-Card'>
         <h2>{props.name}</h2>
         <p>{props.description}</p>
          <Button  className='project-button' variant="warning"><a href={props.link}>View Project</a></Button>
    </div>
  );
}
export default Project
