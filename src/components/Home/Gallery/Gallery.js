import React from 'react';
import './Gallery.css';
import { NavLink } from 'react-router-dom';
 
const Gallery = () => {
  
    return (
      <div className="galary-container">
        <div className="gallery mb-50">
         <div className="gallery-text">
            <h4 className="gallery-short-title">Enter To Win Now!</h4>
            <h1 className="gallery-title">Great Big Giveaway</h1>
            <NavLink className="nav-link" to="/login">
              <button to="/login"  className=" shop-btn font shop-btn fw-bold">Shop Now</button>
            </NavLink>
         </div>
         
      </div>
      </div>
    );
};

export default Gallery;