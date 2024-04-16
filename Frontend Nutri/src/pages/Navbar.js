import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
  return (
    <>
      <div className="home">
        <div className="macbook-air-7">
          <img className="macbook-air-7-child" alt="" src="/frame-251.svg" />
          <div className="access-context-manager-svgrepo-parent">
            <img
              className="access-context-manager-svgrepo-icon"
              alt=""
              src="/accesscontextmanager-svgrepocom.svg"
            />
            <img className="vector-icon" alt="" src="/vector.svg" />
            <div className="nutryfood1">NUTRYFOOD</div>
            <b className="crowned-with-innovations2">CROWNED WITH INNOVATIONS</b>
          </div>
          <div className="component-58-parent">
            <img className="component-38-icon" alt="" src="/component-58.svg" />
            <div className="domestic-international">{`Domestic & International Markets- Accessible worldwide and everywhere`}</div>
          </div>
        </div>
        <div className="macbook-air-6">
          <div className="frame-parent1">
            <div className="home-group">
              <div className="best-sellers"><Link to="/">Home</Link></div>
              {/* <img className="frame-child3" alt="" src="/vector-18.svg" /> */}
            </div>
            <div className="home-group">
              <div className="best-sellers"><Link to="/aboutus">About Us</Link></div>
              <img className="frame-child4" alt="" src="/vector-19.svg" />
            </div>
            <div className="home-group">
              <div className="best-sellers"><Link to="/products">Products</Link></div>
              <img className="frame-child4" alt="" src="/vector-20.svg" />
            </div>
            <div className="home-group">
              <div className="best-sellers"><Link to="/contactus">Contact Us</Link></div>
              <img className="frame-child4" alt="" src="/vector-21.svg" />
            </div>
          </div>
          <div className="phone-2-1-parent">
            <img className="mdiwhatsapp-icon" alt="" src="/phone-2-1.svg" />
            <img className="mdiwhatsapp-icon" alt="" src="/mail-1-1.svg" />
            <img className="mdiwhatsapp-icon" alt="" src="/mdiwhatsapp.svg" />
          </div>
        </div>
      </div>
    </>
  )
}
export default Navbar