import React from 'react';
import './ProductDisplay.css';
import star_icon from '../../assets/star-icon.png';
import star_dull_icon from '../../assets/star_dull_icon.png';

const ProductDisplay = ({ product }) => {
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="Thumbnail" />
          <img src={product.image} alt="Thumbnail" />
          <img src={product.image} alt="Thumbnail" />
          <img src={product.image} alt="Thumbnail" />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt="Main Product"
          />
        </div>
      </div>

      <div className="productdisplay-right">
        <div className="productdisplay-right-title">
          <h2>{product.name}</h2>
        </div>

        <div className="productdisplay-right-mg-list">
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_dull_icon} alt="dull star" />
          <p>(130 reviews)</p>
        </div>

        <div className="productdisplay-right-prices">
          <span className="old">₹{product.old_price}</span>
          <span className="new">₹{product.new_price}</span>
        </div>

        <div className="productdisplay-right-description">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit,
            perspiciatis.
          </p>
        </div>

        <div className="productdisplay-right-size-section">
          <h3>Select Size:</h3>
          <div className="productdisplay-right-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>

        <button className="add-to-cart-btn">ADD TO CART</button>

        <div className="productdisplay-right-category">
          <span>
            Category: <strong>Women, T-Shirt, Crop Top</strong>
          </span>
        </div>

        <div className="productdisplay-right-category">
          <span>
            Tags: <strong>Modern, Latest, Trend, Shorts</strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
