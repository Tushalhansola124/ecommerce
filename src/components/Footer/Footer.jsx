import React from 'react';
import './Footer.css'; // Import CSS styles
import { FaInstagram, FaWhatsapp, FaLinkedin, FaFacebook } from 'react-icons/fa';
import logo from '../../assets/shopify.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="Logo" />
      </div>
      <div className="footer-center">
        <a href="#">About</a>
        <a href="#">Product</a>
        <a href="#">Offices</a>
        <a href="#">Company</a>
        <a href="#">Contact</a>
      </div>
      <div className="footer-right">
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaWhatsapp /></a>
        <a href="#"><FaLinkedin /></a>
        <a href="#"><FaFacebook /></a>
      </div>
    </footer>
  );
};

export default Footer;
