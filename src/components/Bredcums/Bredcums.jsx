import React from 'react';
import arrow_icon from '../../assets/arrow-icon.png';

const Breadcrumbs = (props) => {

  const {product}=props;

  return (
    <div className="breadcrumbs">
      <span>Home</span>
      <img src={arrow_icon} alt="arrow" height="10" />
      <span>Shop</span>
      <img src={arrow_icon} alt="arrow" height="10" />
      <span>{product.category}</span>
      <img src={arrow_icon} alt="arrow" height="10" />
      <span>{product.name}</span>
    </div>
  );
};

export default Breadcrumbs;
