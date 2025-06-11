import React from 'react'
import './item.css';
import { Link } from 'react-router-dom';

const item = (props) => {
  return (
    <div className="item">
        <img src={props.image}></img>
        <p>{props.name}</p>
        <div className="item-prices">
            
              <div className="item-price-old">
              ₹{props.old_price}
            </div>
            <div className="item-price-new">
              ₹{props.new_price} 
            </div>
        </div>
        <Link to={`/product/${props.id}`}><button className="buybtn">Buy</button></Link>
    </div>
  )
}

export default item
