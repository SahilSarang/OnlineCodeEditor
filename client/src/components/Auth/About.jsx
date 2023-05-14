import React from 'react'

import icon from '../../assets/logo.png'
import './Auth.css'

const About = () => {
  return (
    <div className='left-container'>
        <div className='logo-title'>
          <img src={icon} alt="CodER.TxT" className="logo" style={{width:"100px"}}/>
          <h1 style={{margin:"10px"}}>CodER.TxT</h1>
        </div>
        <h4>CodER.TxT is online code editor provides following features :</h4>
        <ul className='ul'>
            <li>Easy to use.</li>
            <li>No need to install anything.</li>
            <li>Supports multiple languages.</li>
            <li>Get instant output.</li>
            <li>Faster code formatting.</li>
        </ul>
    </div>
  )
}

export default About
