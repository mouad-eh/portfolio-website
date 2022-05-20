import React from 'react'
import './Footer.css'
import { BsFillSuitHeartFill } from 'react-icons/bs'

function Footer() {
  return (
    <section id='footer'>
      <div className='footerFlex'>
        <h3>Mouad Elhaouari</h3>
        <p>E-mail me at : jm_elhaouari@esi.dz</p>
      </div>
      <br></br>
      <p>Made with <BsFillSuitHeartFill color='red' /> by Me</p>
    </section>
  )
}

export default Footer