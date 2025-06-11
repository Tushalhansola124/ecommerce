import React from 'react'
import './NewsLatter.css';

const Newslatter = () => {
  return (
  
        <div className="newslatter">
        <h1>Get Exclusive Offers On  Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div className="emailbtn">
          <input className="email" type="email" placeholder='Enter a Email'></input>
          <button className="subBtn">Subscribe</button>
        </div>
    </div>
  )
}

export default Newslatter
