import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="home">
        <div className="macbook-air-5">
          <div className="nutryfood-parent">
            <div className="nutryfood">NUTRYFOOD</div>
            <div className="crowned-with-innovations1">
              CROWNED WITH INNOVATIONS
            </div>
          </div>
          <div className="home-parent">
            <div className="best-sellers"><Link to='/'>Home</Link></div>
            <div className="best-sellers"><Link to='/aboutus'>About Us</Link></div>
            <div className="best-sellers"><Link to='/products'>Products</Link></div>
            <div className="best-sellers"><Link to='/contactus'>Contact Us</Link></div>
          </div>
          <div className="component-38-parent">
            <img className="component-38-icon" alt="" src="/component-38.svg" />
            <img className="component-38-icon" alt="" src="/component-39.svg" />
            <img className="component-38-icon" alt="" src="/component-40.svg" />
            <img className="component-38-icon" alt="" src="/component-41.svg" />
            <img className="component-38-icon" alt="" src="/component-42.svg" />
          </div>
          <div className="nutryfood-all-rights">
            © 2024, NutryFood. All rights reserved.
          </div>
        </div>
      </div>
    </>
  )
}
export default Footer;