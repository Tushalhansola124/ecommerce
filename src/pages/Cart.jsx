import React from 'react';
import '../CSS/Cart.css';
import all_product from '../../src/assets/all_product';

const Cart = () => {
  // Calculate total price of all items in the cart
  const cartTotal = all_product.reduce((acc, item) => {
    const quantity = item.qty || 1;
    return acc + item.price * quantity;
  }, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>

      {all_product.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {all_product.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="cart-price">₹{item.price}</p>
                <div className="cart-qty">
                  <span>Qty:</span>
                  <input type="number" value={item.qty || 1} readOnly />
                </div>
              </div>
              <div className="cart-item-total">
                ₹{item.price * (item.qty || 1)}
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <p className="cart-total">Total: ₹{cartTotal}</p>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
