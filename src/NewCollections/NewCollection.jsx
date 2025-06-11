import React from 'react'
import './NewCollection.css'
import new_collections from '../assets/new_collections'
import Item from '../components/item/item.jsx'

const NewCollection = () => {
  return (
    <div className="newcollections">
        <h1>NEW COLLECTIONS</h1>
        <hr></hr>
        <div className="collections">
        {new_collections.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name}
                         old_price={item.old_price1} new_price={item.new_price1}
                         image={item.image}
                         
            />
            
        })}
        
        </div>
    </div>
  )
}

export default NewCollection
