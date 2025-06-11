import React from 'react'
import "./Hero.css";
import hand_icon from '../../assets/hand-icon.png';
import arrow_icon from '../../assets/arrow-icon.png';
import men from '../../assets/mens-img.png'

const Hero = () => {
  return (
  <>
  <div className="hero">
      <div className="hero-left">
        <h2>Best Deals ! Best Prices !</h2>
      
      <div className="hand-hand-icon">
      <p>New</p>
      <img src={hand_icon} alt="" height="50px"></img>
      </div>
      <p>collections</p>
      <p>for everyone</p>
      <div className="hero-latest-btn">
        <div>Latest Collections</div>
        <img src={arrow_icon} alt="" height="40px"></img>
      </div>
      </div>
      
    <div className="hero-right">
      <img  src={men} height="200px"></img>
    </div>
  </div>
  </>

  )
}

export default Hero