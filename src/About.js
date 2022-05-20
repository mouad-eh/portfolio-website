import React from 'react'
import {FcAbout} from 'react-icons/fc'
import {AiFillLinkedin, AiFillGithub, AiOutlineTwitter} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {MdWavingHand} from 'react-icons/md'
import './About.css'

function About() {
  return (
    <section id='about'>
      <div className='sectionTitle'>
        <FcAbout size={45}/>
        <h1>About</h1>
      </div>
      <div className="aboutLayout">
        <img className="item1" src="me.svg"/>
        <p className='item2'>
          <span className='hey'>Hey <MdWavingHand color="#EEDB00" size={40}/>,</span>
          <br/><br/>My name is Mouad Elhaouari, I'm a computer science student at ESI-Algiers (currently in my third year).<br/>
          A software engineering passionate with some exprience in the web development field.<br/><br/>
          I'm an organised and motivated person, eager to learn new technologies and colaborate with other experienced engineers all over the world.<br/><br/>
          I'm also intersted in Data engineering, Devops and Cloud computing and I want to persue a career in one of these fiels after graduation.<br/><br/>
          <div className='contactLayout'>
            <a href=""><AiFillLinkedin color="#0072b1" size={40}/></a>
            <a href="https://github.com/mouad-eh"><AiFillGithub color="black" size={40}/></a>
            <a href="https://twitter.com/mouad_eh"><AiOutlineTwitter color="#00acee" size={40}/></a>
            <a href="https://web.facebook.com/mouadelhaouari1/"><BsFacebook color="#4267B2" size={40} /></a>
          </div>
        </p>
      </div>
    </section>
  )
}

export default About