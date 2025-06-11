import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/shopify.png';
import cart from '../../assets/cart.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [Menu,setMenu]=useState("Home");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="Navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" />
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <li onClick={()=>{setMenu("Home")}}><Link to="/" style={{textDecoration:"none",color:"#a1c53e"}}>Home</Link>{Menu==="Home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Mens")}}><Link to="/mens"  style={{textDecoration:"none",color:"#a1c53e"}}>Mens</Link>{Menu==="Mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Womens")}}><Link to="/womens"  style={{textDecoration:"none",color:"#a1c53e"}}>Womens</Link>{Menu==="Womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Kids")}}><Link to="/kids"  style={{textDecoration:"none",color:"#a1c53e"}}>Kids</Link>{Menu==="Kids"?<hr/>:<></>}</li>
      </ul>

      <div className="nav-icon-cart">
        <Link to="/login"><button>Login</button></Link>
        <div className="cart-container">
          <Link to="/cart"><img src={cart} className="cart" alt="Cart" /></Link>
          <div className="nav-cart-count">2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
