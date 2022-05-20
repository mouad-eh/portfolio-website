import React from 'react'
import './WritingCard.css'

function WritingCard(props) {
  return (
    <div>
        <img src={props.imagePath}/>
        <h3>{props.title}</h3>
        <p>{props.date}</p>
        <p>{props.readTime}</p>
        <p>{props.firstWords}</p>
    </div>
  )
}

export default WritingCard