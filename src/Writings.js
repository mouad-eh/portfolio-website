import React from 'react'
import './Writings.css'
import { FcDocument } from 'react-icons/fc'
import WritingCard from './WritingCard'


const writing1 = {
  imagePath:"",
  title:"",
  date:"",
  readTime: 0 ,
  firstWords:""
}
const writing2 = {
  imagePath:"",
  title:"",
  date:"",
  readTime: 0 ,
  firstWords:""
}

function Writings() {
  return (
    <section>
      <div className='sectionTitle'>
        <FcDocument size={45}/>
        <h1>Writings</h1>
      </div>
      <WritingCard imagePath={writing1.imagePath} title={writing1.title} date={writing1.date} readTime={writing1.readTime} firstWords={writing1.firstWords} />
      <WritingCard imagePath={writing2.imagePath} title={writing2.title} date={writing2.date} readTime={writing2.readTime} firstWords={writing2.firstWords} />
    </section>
  )
}

export default Writings