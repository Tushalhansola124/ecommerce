import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import Bredcums from '../components/Bredcums/Bredcums.jsx'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay.jsx';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Bredcums product={product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product