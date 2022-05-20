import React from 'react'
import './Skills.css'
import {FcTodoList} from 'react-icons/fc'
import {FaHtml5} from 'react-icons/fa'
import {FaCss3Alt} from 'react-icons/fa'
import {DiJavascript1} from 'react-icons/di'
import {FaReact} from 'react-icons/fa'
import {GrNode} from 'react-icons/gr'
import {DiMongodb} from 'react-icons/di'
import {FaPython} from 'react-icons/fa'
import {SiMysql} from 'react-icons/si'
import {DiJava} from 'react-icons/di'
import ReactTooltip from 'react-tooltip';
function Skills() {
  return (
    <section id="skills">
      <div className='sectionTitle'>
        <FcTodoList size={45}/>
        <h1>Skills</h1>
      </div>
      <div className='iconsWrapper'>
        <div className='icons'>
          <FaHtml5 color="#e34c26" size={120} data-tip="HTML5"/>
          <ReactTooltip/>
          <FaCss3Alt color="#264de4" size={120} data-tip="CSS3"/>
          <ReactTooltip/>
          <DiJavascript1 color="#f0db4f " size={120} data-tip="Javascript"/>
          <ReactTooltip/>
          <FaReact color="#61dbfb" size={120} data-tip="ReactJS"/>
          <ReactTooltip/>
          <GrNode color="#303030" size={120} data-tip="NodeJS"/>
          <ReactTooltip/>
          <DiMongodb color="#4DB33D" size={120}data-tip="MongoDB" />
          <ReactTooltip/>
          <FaPython color="#4B8BBE" size={120} data-tip="Python"/>
          <ReactTooltip/>
          <DiJava color="#f89820" size={120} data-tip="Java"/>
          <ReactTooltip/>
          <SiMysql color="#00758F" size={120} data-tip="MySql"/>
          <ReactTooltip/>
        </div>
      </div>
    </section>
  )
}

export default Skills