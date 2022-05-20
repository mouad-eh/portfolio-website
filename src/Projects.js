import React from 'react'
import ProjectCard from './ProjectCard'
import './Projects.css'
import {FcFolder} from 'react-icons/fc'

const proj1 = {
  title:"Desktop application for freight forwarding company",
  date:"Jun 30, 2021",
  details:"During my second year at ESI, I worked with other 6 persons in order to deliver a desktop application that helps freight forwarding campanies to manage their bills. We used the Python programming language with Qt library in frontend and MySQL as DBMS. We completed this project within the specified deadline and got 16/20.",
  link:"https://github.com/mouad-eh/projet_2cp"
}
const proj2 = {
  title:"Portfolio Website",
  date:"May 20, 2022",
  details:"A protfolio website is a must for every software developer, I decided to built my portfolio website with HTML,CSS and React as a javascript frame work. I also used the 'react-icon' library for the icons and 'react-tooltip' library for the tooltips.",
  link: ""
}

function Projects() {
  return(
    <section id='projects'>
      <div className='sectionTitle'>
        <FcFolder size={45}/>
        <h1>Projects</h1>
      </div>
      <ProjectCard title={proj1.title} date={proj1.date} details={proj1.details} link={proj1.link}/>
      <ProjectCard title={proj2.title} date={proj2.date} details={proj2.details} link={proj2.link}/>
    </section>
  )
}

export default Projects