import React from 'react'
import {FcNext} from 'react-icons/fc'
import './ProjectCard.css'
function ProjectCard(props) {
  return (
    <div className='projectCard'>
      <div className='projectHeader'>
        <h3><FcNext/> {props.title}</h3>
        <p>{props.date}</p>
      </div>
        <p>{props.details}</p>
        <a href={props.link}><button className='button-30'>See on github</button></a>
    </div>
  )
}

export default ProjectCard