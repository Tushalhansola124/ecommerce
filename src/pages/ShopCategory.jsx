import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import '../CSS/ShopCategory.css';
import dropdown_icon from '../assets/dropdown_icon.png'
import Item from '../components/item/item.jsx';
import Footer from '../components/Footer/Footer.jsx';

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className="shopcategory-banner" src={props.banner}></img>
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12</span> outof 36 products
        </p>
        <div className='shopcategory-sort'>
          Sory By <img src={dropdown_icon} width="15px"></img>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}old_price={item.old_price}></Item>
          }
          else
          {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
          Explore More
      </div>
      <Footer></Footer>
    </div>
    
  )
  
}

export default ShopCategory